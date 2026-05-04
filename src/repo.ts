// JULI3TA v0.1 app-local persistence.
// The app DB is the durable browser-native index. If daemon-side
// `host.daemon.juli3taLibrary` exists, generated tracks are also mirrored
// into the daemon's JULI3TA file library; failure there never corrupts the
// local index.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { AppDb, RunResult } from '@tytus/host-api';

export interface TrackRow {
  id: string;
  title: string;
  prompt: string;
  lyrics: string;
  createdAt: string;
  updatedAt: string;
  audioFileNodeId: string | null;
  coverFileNodeId: string | null;
  modelId: string | null;
  bpm: number | null;
  key: string | null;
  durationSeconds: number | null;
  favourited: boolean;
}

interface RawTrackRow {
  id: string;
  title: string;
  prompt: string;
  lyrics: string;
  created_at: string;
  updated_at: string;
  audio_file_node_id: string | null;
  cover_file_node_id: string | null;
  model_id: string | null;
  bpm: number | null;
  key: string | null;
  duration_seconds: number | null;
  favourited: number;
}

const SELECT_COLUMNS =
  'id, title, prompt, lyrics, created_at, updated_at, audio_file_node_id, cover_file_node_id, model_id, bpm, key, duration_seconds, favourited';

function map(row: RawTrackRow): TrackRow {
  return {
    id: row.id,
    title: row.title,
    prompt: row.prompt,
    lyrics: row.lyrics,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    audioFileNodeId: row.audio_file_node_id,
    coverFileNodeId: row.cover_file_node_id,
    modelId: row.model_id,
    bpm: row.bpm,
    key: row.key,
    durationSeconds: row.duration_seconds,
    favourited: !!row.favourited,
  };
}

export const makeId = (prefix = 'trk') =>
  `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;

export async function listTracks(db: AppDb): Promise<TrackRow[]> {
  const rows = await db.query<RawTrackRow>(
    `SELECT ${SELECT_COLUMNS} FROM tracks ORDER BY favourited DESC, created_at DESC`,
  );
  return rows.map(map);
}

export async function getTrack(db: AppDb, trackId: string): Promise<TrackRow | null> {
  const rows = await db.query<RawTrackRow>(
    `SELECT ${SELECT_COLUMNS} FROM tracks WHERE id = ?`,
    [trackId],
  );
  return rows[0] ? map(rows[0]) : null;
}

export interface SaveTrackOpts {
  id?: string;
  title: string;
  prompt: string;
  lyrics?: string;
  audioFileNodeId?: string | null;
  coverFileNodeId?: string | null;
  modelId?: string | null;
  bpm?: number | null;
  key?: string | null;
  durationSeconds?: number | null;
  favourited?: boolean;
}

export async function upsertTrack(db: AppDb, opts: SaveTrackOpts): Promise<TrackRow> {
  const now = new Date().toISOString();
  const trackId = opts.id ?? makeId();
  const existing = await getTrack(db, trackId);
  if (existing) {
    await db.run(
      `UPDATE tracks
       SET title = ?, prompt = ?, lyrics = ?, updated_at = ?, audio_file_node_id = ?, cover_file_node_id = ?, model_id = ?, bpm = ?, key = ?, duration_seconds = ?, favourited = ?
       WHERE id = ?`,
      [
        opts.title,
        opts.prompt,
        opts.lyrics ?? '',
        now,
        opts.audioFileNodeId ?? existing.audioFileNodeId,
        opts.coverFileNodeId ?? existing.coverFileNodeId,
        opts.modelId ?? existing.modelId,
        opts.bpm ?? existing.bpm,
        opts.key ?? existing.key,
        opts.durationSeconds ?? existing.durationSeconds,
        opts.favourited ?? existing.favourited ? 1 : 0,
        trackId,
      ],
    );
  } else {
    await db.run(
      `INSERT INTO tracks (id, title, prompt, lyrics, created_at, updated_at, audio_file_node_id, cover_file_node_id, model_id, bpm, key, duration_seconds, favourited)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        trackId,
        opts.title,
        opts.prompt,
        opts.lyrics ?? '',
        now,
        now,
        opts.audioFileNodeId ?? null,
        opts.coverFileNodeId ?? null,
        opts.modelId ?? null,
        opts.bpm ?? null,
        opts.key ?? null,
        opts.durationSeconds ?? null,
        opts.favourited ? 1 : 0,
      ],
    );
  }
  const row = await getTrack(db, trackId);
  if (!row) throw new Error('upsertTrack: write succeeded but row missing');
  return row;
}

export async function createDraftTrack(
  db: AppDb,
  opts: { title: string; prompt: string; lyrics?: string },
): Promise<TrackRow> {
  return upsertTrack(db, opts);
}

export async function deleteTrack(db: AppDb, trackId: string): Promise<void> {
  await db.run(`DELETE FROM tracks WHERE id = ?`, [trackId]);
}

export async function setFavourited(
  db: AppDb,
  trackId: string,
  favourited: boolean,
): Promise<void> {
  const now = new Date().toISOString();
  await db.run(
    `UPDATE tracks SET favourited = ?, updated_at = ? WHERE id = ?`,
    [favourited ? 1 : 0, now, trackId],
  );
}

export type { AppDb, RunResult };

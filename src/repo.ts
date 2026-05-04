/**
 * JULI3TA app-local SQLite repo. Wraps the per-app DB exposed via
 * `host.storage.current()` with typed accessors for the `tracks` table.
 * Migrations are declared in `tytus-app.json` and run once at boot via
 * `host.storage.current().migrate('migrations/')`.
 */

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

const id = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

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

export interface CreateDraftOpts {
  title: string;
  prompt: string;
  lyrics?: string;
}

export async function createDraftTrack(
  db: AppDb,
  opts: CreateDraftOpts,
): Promise<TrackRow> {
  const now = new Date().toISOString();
  const trackId = id();
  await db.run(
    `INSERT INTO tracks (id, title, prompt, lyrics, created_at, updated_at, favourited)
     VALUES (?, ?, ?, ?, ?, ?, 0)`,
    [trackId, opts.title, opts.prompt, opts.lyrics ?? '', now, now],
  );
  const row = await getTrack(db, trackId);
  if (!row) throw new Error('createDraftTrack: insert succeeded but row missing');
  return row;
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

// Re-exports so the bootApp can satisfy the AppDb signature the host
// passes in. RunResult is exported only for callers that need the
// changed-row count from a custom UPDATE.
export type { AppDb, RunResult };

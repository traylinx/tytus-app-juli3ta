import type { AppDb } from '@tytus/host-api';
import type { Db, SqlValue } from './types';

let dbInstance: Db | null = null;
let ensureSchemaPromise: Promise<void> | null = null;

const rewriteSql = (sql: string): string => sql
  .replace(/\bmusic_creator_tracks\b/g, 'app_juli3ta_music_creator_tracks')
  .replace(/\bmusic_creator_settings\b/g, 'app_juli3ta_music_creator_settings')
  .replace(/\bmusic_library_tracks\b/g, 'app_juli3ta_music_library_tracks')
  .replace(/\bmusic_library_artists\b/g, 'app_juli3ta_music_library_artists')
  .replace(/\bmusic_library_albums\b/g, 'app_juli3ta_music_library_albums')
  .replace(/\bmusic_playlists\b/g, 'app_juli3ta_music_playlists')
  .replace(/\bmusic_playlist_items\b/g, 'app_juli3ta_music_playlist_items')
  .replace(/\bmusic_favorites\b/g, 'app_juli3ta_music_favorites')
  .replace(/\bvoice_recordings\b/g, 'app_juli3ta_voice_recordings');

const COMPAT_SCHEMA = [
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_creator_tracks (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, style_tags TEXT NOT NULL DEFAULT '', lyrics_preview TEXT NOT NULL DEFAULT '',
    duration_ms INTEGER NOT NULL DEFAULT 0, bitrate INTEGER NOT NULL DEFAULT 0, sample_rate INTEGER NOT NULL DEFAULT 0,
    size_bytes INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL, audio_data_url TEXT NOT NULL DEFAULT '',
    specs_json TEXT NOT NULL DEFAULT '', cover_data_url TEXT NOT NULL DEFAULT '', theme TEXT NOT NULL DEFAULT '',
    source TEXT NOT NULL DEFAULT 'juli3ta', audio_kind TEXT NOT NULL DEFAULT 'data_url', external_id TEXT NOT NULL DEFAULT '',
    external_url TEXT NOT NULL DEFAULT '', thumbnail_url TEXT NOT NULL DEFAULT '', artist TEXT NOT NULL DEFAULT '', album TEXT NOT NULL DEFAULT ''
  )`,
  `CREATE INDEX IF NOT EXISTS idx_app_juli3ta_music_creator_tracks_created ON app_juli3ta_music_creator_tracks(created_at DESC)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_creator_settings (key TEXT PRIMARY KEY, value TEXT NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_voice_recordings (id TEXT PRIMARY KEY, name TEXT NOT NULL, duration_ms INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL, mime_type TEXT NOT NULL DEFAULT 'audio/webm', audio_data_url TEXT NOT NULL DEFAULT '')`,
  `CREATE INDEX IF NOT EXISTS idx_app_juli3ta_voice_recordings_created ON app_juli3ta_voice_recordings(created_at DESC)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_tracks (id TEXT PRIMARY KEY, provider TEXT NOT NULL, external_id TEXT NOT NULL, title TEXT NOT NULL, artist TEXT NOT NULL DEFAULT '', album TEXT NOT NULL DEFAULT '', duration_ms INTEGER NOT NULL DEFAULT 0, thumbnail_url TEXT NOT NULL DEFAULT '', external_url TEXT NOT NULL DEFAULT '', added_at INTEGER NOT NULL, last_played_at INTEGER NOT NULL DEFAULT 0)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_artists (id TEXT PRIMARY KEY, provider TEXT NOT NULL, name TEXT NOT NULL, artwork_url TEXT NOT NULL DEFAULT '', bio TEXT NOT NULL DEFAULT '', updated_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_library_albums (id TEXT PRIMARY KEY, provider TEXT NOT NULL, title TEXT NOT NULL, artist TEXT NOT NULL DEFAULT '', artwork_url TEXT NOT NULL DEFAULT '', year INTEGER, updated_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_playlists (id TEXT PRIMARY KEY, name TEXT NOT NULL, created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_playlist_items (playlist_id TEXT NOT NULL, track_id TEXT NOT NULL, pos INTEGER NOT NULL DEFAULT 0, added_at INTEGER NOT NULL, PRIMARY KEY (playlist_id, track_id))`,
  `CREATE TABLE IF NOT EXISTS app_juli3ta_music_favorites (kind TEXT NOT NULL, entity_id TEXT NOT NULL, provider TEXT NOT NULL DEFAULT '', title TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL, PRIMARY KEY (kind, entity_id))`,
];

export function bindHostAppDb(appDb: AppDb): void {
  ensureSchemaPromise = (async () => {
    for (const stmt of COMPAT_SCHEMA) await appDb.run(stmt);
  })();
  const ensureSchema = async () => ensureSchemaPromise;
  dbInstance = {
    exec: async (sql: string) => {
      await ensureSchema();
      for (const stmt of rewriteSql(sql).split(';').map((s) => s.trim()).filter(Boolean)) {
        await appDb.run(stmt);
      }
    },
    query: async <T = Record<string, SqlValue>>(sql: string, bindings: SqlValue[] = []) => {
      await ensureSchema();
      return appDb.query<T>(rewriteSql(sql), bindings);
    },
    run: async (sql: string, bindings: SqlValue[] = []) => {
      await ensureSchema();
      await appDb.run(rewriteSql(sql), bindings);
    },
    tx: async <T,>(fn: () => Promise<T>) => {
      await ensureSchema();
      return fn();
    },
  };
}
export const getDb = (): Db | null => dbInstance;
export const setDbForTesting = (db: Db | null) => { dbInstance = db; ensureSchemaPromise = null; };

import type { AppDb } from '@tytus/host-api';
import type { Db, SqlValue } from './types';

let dbInstance: Db | null = null;
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

export function bindHostAppDb(appDb: AppDb): void {
  dbInstance = {
    exec: async (sql: string) => {
      for (const stmt of rewriteSql(sql).split(';').map((s) => s.trim()).filter(Boolean)) {
        await appDb.run(stmt);
      }
    },
    query: <T = Record<string, SqlValue>>(sql: string, bindings: SqlValue[] = []) =>
      appDb.query<T>(rewriteSql(sql), bindings),
    run: async (sql: string, bindings: SqlValue[] = []) => {
      await appDb.run(rewriteSql(sql), bindings);
    },
    tx: async <T,>(fn: () => Promise<T>) => fn(),
  };
}
export const getDb = (): Db | null => dbInstance;
export const setDbForTesting = (db: Db | null) => { dbInstance = db; };

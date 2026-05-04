/**
 * tytus-app-juli3ta — bootApp wrapper.
 *
 * v0.0.2-alpha.1: app-local SQLite migrated + draft tracks can be
 * saved + listed. Real `/v1/music/generations` wiring pending the full
 * lift (SPRINT-TYTUS-APP-JULI3TA-V1).
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { AppBootEnv, AppDb } from '@tytus/host-api';
import Juli3taAlpha from './Juli3taAlpha';

export default function bootApp(env: AppBootEnv) {
  // Run migrations on boot. Idempotent — migrations table is checked
  // before each .sql is applied. Per-app DBs share the same SQLite
  // worker but live in a prefixed namespace (`app_juli3ta_*`).
  const db = env.host.storage.current() as AppDb;
  let migrationDone: Promise<void> | null = db.migrate?.('migrations/') ?? Promise.resolve();

  return function Juli3taApp() {
    const handleOpenStudio = () => {
      try {
        env.host.windows?.open?.('musiccreator', undefined);
      } catch (err) {
        console.warn('[juli3ta] failed to open music-creator window', err);
      }
    };
    return (
      <Juli3taAlpha
        db={db}
        migrationReady={migrationDone}
        onOpenStudio={handleOpenStudio}
      />
    );
  };
}

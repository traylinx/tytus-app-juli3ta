/**
 * tytus-app-juli3ta — v0.1 standalone bootApp.
 *
 * The public app now owns the creator UI: library gallery, player,
 * prompt/lyrics creator panel, pod model picker, shell menu, app-local
 * SQLite, and daemon file-library mirroring when the host exposes it.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { AppBootEnv, AppDb } from '@tytus/host-api';
import Juli3taApp from './Juli3taApp';

export default function bootApp(env: AppBootEnv) {
  const db = env.host.storage.current() as AppDb;
  const migrationDone = db.migrate?.('migrations/') ?? Promise.resolve();

  return function Juli3taStandalone() {
    return (
      <Juli3taApp
        host={env.host}
        db={db}
        migrationReady={migrationDone}
      />
    );
  };
}

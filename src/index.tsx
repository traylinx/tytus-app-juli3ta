// Real JULI3TA extraction entrypoint. This mounts the copied full
// MusicCreator through a HostEnvProvider so the compatibility hooks can
// progressively replace shell-private imports without touching the
// 9,923 LOC component body.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { AppBootEnv } from '@tytus/host-api';
import { HostEnvProvider } from './compat';
import MusicCreator from './apps/MusicCreator';
import { bindHostAppDb } from './lib/db';

export default function bootApp(env: AppBootEnv) {
  // Run declared migrations once. G1 keeps this non-blocking; G2/G3 add
  // visible migration/readiness states after parity harness lands.
  const db = env.host.storage.current();
  bindHostAppDb(db);
  void db.migrate?.('migrations/');
  return function Juli3taFullApp() {
    return (
      <HostEnvProvider value={env}>
        <MusicCreator />
      </HostEnvProvider>
    );
  };
}

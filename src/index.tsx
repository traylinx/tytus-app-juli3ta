/**
 * tytus-app-juli3ta — bootApp wrapper.
 *
 * v0.0.1-alpha: ships the Juli3taAlpha placeholder UI. Real Music
 * Creator lift continues in SPRINT-TYTUS-APP-JULI3TA-V1.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev; not needed at runtime (importmap-shimmed).
import type { AppBootEnv } from '@tytus/host-api';
import Juli3taAlpha from './Juli3taAlpha';

export default function bootApp(env: AppBootEnv) {
  return function Juli3taApp() {
    const handleOpenStudio = () => {
      try {
        // host.windows.open exists in v1; the legacy MusicCreator id is
        // 'musiccreator' (no hyphen) — keeps the in-tree app routable
        // until JULI3TA replaces it.
        env.host.windows?.open?.('musiccreator', undefined);
      } catch (err) {
        console.warn('[juli3ta] failed to open music-creator window', err);
      }
    };
    return <Juli3taAlpha onOpenStudio={handleOpenStudio} />;
  };
}

import { createContext, useContext } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { AppBootEnv } from '@tytus/host-api';

const HostEnvContext = createContext<AppBootEnv | null>(null);
export const HostEnvProvider = HostEnvContext.Provider;
export function useHostEnv(): AppBootEnv {
  const env = useContext(HostEnvContext);
  if (!env) throw new Error('JULI3TA HostEnvProvider missing');
  return env;
}

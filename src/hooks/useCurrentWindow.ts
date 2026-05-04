import { useHostEnv } from '@/compat';

export function useCurrentWindow() {
  return useHostEnv().host.windows.current;
}

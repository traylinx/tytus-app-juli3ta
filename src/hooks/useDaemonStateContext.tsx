import { useEffect, useMemo, useState } from 'react';
import { useHostEnv } from '@/compat';
import type { DaemonError, DaemonVersion, StateSnapshot } from '@/types/daemon';

export type DaemonStatus = 'loading' | 'online' | 'offline' | 'degraded' | 'auth_required';

export interface UseDaemonStateResult {
  state: StateSnapshot | null;
  error: DaemonError | null;
  status: DaemonStatus;
  failureCount: number;
  bannerVisible: boolean;
  version: DaemonVersion | null;
  daemonVersionStatus: 'loading' | 'supported' | 'unsupported';
  refresh: () => void;
}

const toSnapshot = (state: unknown): StateSnapshot => {
  const s = (state ?? {}) as Record<string, unknown>;
  return {
    logged_in: true,
    email: null,
    agents: Array.isArray(s.agents) ? (s.agents as StateSnapshot['agents']) : [],
    included: Array.isArray(s.included) ? (s.included as StateSnapshot['included']) : [],
    tiers: [],
    ...(s as Partial<StateSnapshot>),
  } as StateSnapshot;
};

export const useDaemonStateContext = (): UseDaemonStateResult => {
  const { host } = useHostEnv();
  const [tick, setTick] = useState(0);
  const [snapshot, setSnapshot] = useState<StateSnapshot | null>(() => toSnapshot(host.daemon?.state));

  useEffect(() => {
    setSnapshot(toSnapshot(host.daemon?.state));
    return host.daemon?.onStateChange?.((next) => setSnapshot(toSnapshot(next)));
  }, [host, tick]);

  return useMemo(() => ({
    state: snapshot,
    error: null,
    status: snapshot ? 'online' : 'loading',
    failureCount: 0,
    bannerVisible: false,
    version: null,
    daemonVersionStatus: 'supported' as const,
    refresh: () => setTick((v) => v + 1),
  }), [snapshot]);
};

export function DaemonStateProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

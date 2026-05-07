import { revealSecret } from '@/lib/secrets';
import type { IncludedPod } from '@/types/daemon';

export interface Juli3taGatewayCandidate {
  url: string;
  apiKey: string;
  podId: string;
  source: 'included' | 'local';
  label: string;
}

export const LOCAL_AIL_URL = 'http://localhost:18080/v1';
export const LOCAL_AIL_KEY = 'sk-test-123';

const hasV1Suffix = (url: string): boolean => /\/v1\/?$/i.test(url);

type RawIncludedPod = IncludedPod & {
  api_key?: unknown;
  apiKey?: unknown;
  endpoint?: string | null;
  id?: string | null;
  podId?: string | null;
  pod_id?: string | null;
  private_url?: string | null;
  privateUrl?: string | null;
  public_url?: string | null;
  publicUrl?: string | null;
  user_key?: unknown;
  userKey?: unknown;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const revealDaemonUserKey = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (!isRecord(value)) return '';
  const raw = value._value;
  if (typeof raw === 'string') {
    return revealSecret(value as unknown as IncludedPod['user_key'], 'user_gesture');
  }
  return '';
};

const firstString = (...values: readonly unknown[]): string | null => {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value;
  }
  return null;
};

export const normalizeAilGatewayUrl = (raw: string | null | undefined): string | null => {
  const trimmed = raw?.trim();
  if (!trimmed) return null;
  const withoutSlash = trimmed.replace(/\/+$/, '');
  return hasV1Suffix(withoutSlash) ? withoutSlash : `${withoutSlash}/v1`;
};

const pushUnique = (
  out: Juli3taGatewayCandidate[],
  seenUrls: Set<string>,
  candidate: Juli3taGatewayCandidate,
): void => {
  if (seenUrls.has(candidate.url)) return;
  seenUrls.add(candidate.url);
  out.push(candidate);
};

export const buildJuli3taGatewayCandidates = (
  included: readonly IncludedPod[],
): Juli3taGatewayCandidate[] => {
  const out: Juli3taGatewayCandidate[] = [];
  const seenUrls = new Set<string>();

  for (const p of included) {
    const rawPod = p as RawIncludedPod;
    const apiKey = revealDaemonUserKey(
      rawPod.user_key ?? rawPod.userKey ?? rawPod.api_key ?? rawPod.apiKey,
    );
    if (!apiKey) continue;
    const podLabel = firstString(rawPod.pod_id, rawPod.podId, rawPod.id) || 'included';

    // Browser-installed JULI3TA must not require local switchAILocal.
    // Try the account AIL pod first via its public mirror, then via the
    // WireGuard/private endpoint, then fall back to local development AIL.
    const publicUrl = normalizeAilGatewayUrl(firstString(rawPod.public_url, rawPod.publicUrl));
    if (publicUrl) {
      pushUnique(out, seenUrls, {
        url: publicUrl,
        apiKey,
        podId: `${podLabel}:remote`,
        source: 'included',
        label: `AIL gateway ${podLabel} (remote)`,
      });
    }

    const tunnelUrl = normalizeAilGatewayUrl(
      firstString(rawPod.endpoint, rawPod.private_url, rawPod.privateUrl),
    );
    if (tunnelUrl) {
      pushUnique(out, seenUrls, {
        url: tunnelUrl,
        apiKey,
        podId: `${podLabel}:tunnel`,
        source: 'included',
        label: `AIL gateway ${podLabel} (tunnel)`,
      });
    }
  }

  pushUnique(out, seenUrls, {
    url: LOCAL_AIL_URL,
    apiKey: LOCAL_AIL_KEY,
    podId: 'local',
    source: 'local',
    label: 'Local AIL',
  });

  return out;
};

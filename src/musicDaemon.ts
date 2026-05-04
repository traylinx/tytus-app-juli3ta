// Small host-api based music daemon adapter. Avoids shell-private imports.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { HostClient, Pod } from '@tytus/host-api';

export interface MusicModel {
  id: string;
}

export interface MusicGenerationRequest {
  podId: string;
  model: string;
  title: string;
  prompt: string;
  lyrics: string;
  instrumental: boolean;
  signal?: AbortSignal;
}

export interface MusicGenerationResult {
  audioDataUrl: string;
  modelId: string;
  durationSeconds: number | null;
  raw: unknown;
}

export function pickRunnablePods(host: HostClient): Pod[] {
  const included = host.daemon?.state?.included ?? [];
  return included.filter((pod) => {
    const status = String(pod.status ?? '').toLowerCase();
    return ['running', 'ready', 'idle', 'connected'].some((s) => status.includes(s)) || !!pod.publicUrl;
  });
}

export async function listModels(host: HostClient, podId: string, signal?: AbortSignal): Promise<MusicModel[]> {
  const res = await host.daemon.callPodEndpoint(podId, '/v1/models', { method: 'GET', signal });
  if (!res.ok) throw new Error(`Models HTTP ${res.status}: ${(await res.text()).slice(0, 240)}`);
  const json = (await res.json()) as { data?: Array<{ id?: string }> };
  return (json.data ?? [])
    .map((m) => m.id)
    .filter((id): id is string => typeof id === 'string' && id.length > 0)
    .map((id) => ({ id }));
}

function audioToDataUrl(audio: string): string {
  if (audio.startsWith('data:')) return audio;
  return `data:audio/mpeg;base64,${audio}`;
}

function pickAudio(json: unknown): string | null {
  const root = json as Record<string, unknown> | null;
  if (!root || typeof root !== 'object') return null;
  const data = root.data as Record<string, unknown> | unknown[] | undefined;
  if (data && !Array.isArray(data) && typeof data === 'object') {
    const audio = data.audio ?? data.audio_base64 ?? data.b64_json ?? data.url;
    if (typeof audio === 'string' && audio.length > 0) return audio;
  }
  if (Array.isArray(data)) {
    for (const item of data) {
      const obj = item as Record<string, unknown>;
      const audio = obj.audio ?? obj.audio_base64 ?? obj.b64_json ?? obj.url;
      if (typeof audio === 'string' && audio.length > 0) return audio;
    }
  }
  const audio = root.audio ?? root.audio_base64 ?? root.b64_json ?? root.url;
  return typeof audio === 'string' && audio.length > 0 ? audio : null;
}

function pickDuration(json: unknown): number | null {
  const root = json as Record<string, unknown> | null;
  const data = root?.data as Record<string, unknown> | undefined;
  const value = data?.duration_seconds ?? data?.durationSeconds ?? root?.duration_seconds ?? root?.durationSeconds;
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

export async function generateMusic(host: HostClient, req: MusicGenerationRequest): Promise<MusicGenerationResult> {
  const body: Record<string, unknown> = {
    model: req.model,
    lyrics: req.lyrics || '[Intro]\n[Instrumental]\n[Outro]',
    prompt: req.prompt,
  };
  if (req.instrumental) body.instrumental = true;
  const res = await host.daemon.callPodEndpoint(req.podId, '/v1/music/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: req.signal,
  });
  const text = await res.text();
  let json: unknown = text;
  try { json = text ? JSON.parse(text) : {}; } catch { /* keep raw */ }
  if (!res.ok) throw new Error(`Music HTTP ${res.status}: ${typeof json === 'string' ? json.slice(0, 300) : JSON.stringify(json).slice(0, 300)}`);
  const audio = pickAudio(json);
  if (!audio) throw new Error('Music generation returned no audio payload');
  return {
    audioDataUrl: audioToDataUrl(audio),
    modelId: req.model,
    durationSeconds: pickDuration(json),
    raw: json,
  };
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Disc3, FolderOpen, Heart, Loader2, Mic2, Music, Pause, Play,
  RefreshCcw, Save, Settings, Sparkles, Trash2, Wand2,
} from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — host-api types resolved via tsconfig paths in dev.
import type { HostClient, Pod } from '@tytus/host-api';
import {
  deleteTrack,
  listTracks,
  setFavourited,
  upsertTrack,
  type AppDb,
  type TrackRow,
} from './repo';
import { generateMusic, listModels, pickRunnablePods } from './musicDaemon';

interface Props {
  host: HostClient;
  db: AppDb;
  migrationReady: Promise<void>;
}

interface FileTrack {
  id: string;
  title: string;
  styleTags: string;
  lyricsPreview: string;
  durationMs: number;
  bitrate: number;
  sampleRate: number;
  sizeBytes: number;
  createdAt: number;
  audioDataUrl: string;
  specsJson: string;
  coverDataUrl: string;
  theme: string;
  source?: 'juli3ta' | 'youtube';
  audioKind?: 'data_url' | 'remote_stream' | 'lyrics_only';
  folderPath?: string;
  audioPath?: string;
  lyricsPath?: string;
  metadataPath?: string;
}

const defaultLyrics = `[Verse 1]\nCity lights are blinking like a signal in the rain\nI hear the future humming through the wire again\n\n[Chorus]\nWe build a little thunder, we teach the dark to sing\nJULI3TA, wake the machine`;

const input: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.06)',
  color: '#fff',
  padding: '12px 14px',
  outline: 'none',
  font: 'inherit',
};

const panel: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: 20,
  boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
};

const buttonBase: React.CSSProperties = {
  border: 0,
  borderRadius: 12,
  color: '#fff',
  padding: '10px 14px',
  fontWeight: 800,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
};

function cssEscape(s: string) {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] ?? c));
}

function coverDataUrl(title: string, prompt: string): string {
  const hue = Math.abs([...title].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)) % 360;
  const safeTitle = cssEscape(title || 'JULI3TA');
  const safePrompt = cssEscape((prompt || 'AI music').slice(0, 72));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue},88%,62%)"/><stop offset="0.52" stop-color="hsl(${(hue + 62) % 360},86%,44%)"/><stop offset="1" stop-color="#140622"/></linearGradient><filter id="blur"><feGaussianBlur stdDeviation="26"/></filter></defs><rect width="768" height="768" fill="url(#g)"/><circle cx="196" cy="188" r="142" fill="rgba(255,255,255,.22)" filter="url(#blur)"/><circle cx="584" cy="536" r="190" fill="rgba(0,0,0,.30)" filter="url(#blur)"/><path d="M162 515c96-144 202-144 318 0 35 44 76 62 124 54" stroke="rgba(255,255,255,.55)" stroke-width="28" fill="none" stroke-linecap="round"/><text x="64" y="650" fill="white" font-family="Inter,Arial" font-size="54" font-weight="900">${safeTitle}</text><text x="66" y="696" fill="rgba(255,255,255,.76)" font-family="Inter,Arial" font-size="24">${safePrompt}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

function audioPreview(track: TrackRow, fileTracks: FileTrack[]): string {
  const file = fileTracks.find((t) => t.id === track.id);
  return file?.audioDataUrl ?? '';
}

function fileTrackFrom(row: TrackRow, audioDataUrl: string, cover: string): FileTrack {
  return {
    id: row.id,
    title: row.title,
    styleTags: row.prompt,
    lyricsPreview: row.lyrics,
    durationMs: Math.round((row.durationSeconds ?? 0) * 1000),
    bitrate: 320000,
    sampleRate: 44100,
    sizeBytes: audioDataUrl.length,
    createdAt: new Date(row.createdAt).getTime(),
    audioDataUrl,
    specsJson: JSON.stringify({ modelId: row.modelId, prompt: row.prompt }),
    coverDataUrl: cover,
    theme: row.prompt,
    source: 'juli3ta',
    audioKind: audioDataUrl ? 'data_url' : 'lyrics_only',
  };
}

function pickDefaultModel(ids: string[]) {
  return ids.find((id) => /music/i.test(id) && !/cover/i.test(id)) ?? ids[0] ?? '';
}

export default function Juli3taApp({ host, db, migrationReady }: Props) {
  const [tracks, setTracks] = useState<TrackRow[]>([]);
  const [fileTracks, setFileTracks] = useState<FileTrack[]>([]);
  const [rootPath, setRootPath] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pods, setPods] = useState<Pod[]>(() => pickRunnablePods(host));
  const [podId, setPodId] = useState('');
  const [models, setModels] = useState<string[]>([]);
  const [model, setModel] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [title, setTitle] = useState('Neon Ghosts');
  const [prompt, setPrompt] = useState('cinematic synthwave, 124 bpm, melancholic but powerful, female vocal');
  const [lyrics, setLyrics] = useState(defaultLyrics);
  const [instrumental, setInstrumental] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      await migrationReady;
      const [local, files] = await Promise.allSettled([
        listTracks(db),
        host.daemon.juli3taLibrary?.listGeneratedTracks?.() as Promise<{ rootPath: string; tracks: FileTrack[] }> | undefined,
      ]);
      if (local.status === 'fulfilled') setTracks(local.value);
      if (files.status === 'fulfilled' && files.value) {
        setRootPath(files.value.rootPath);
        setFileTracks(files.value.tracks ?? []);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [db, host, migrationReady]);

  useEffect(() => { void refresh(); }, [refresh]);

  useEffect(() => {
    const dispose = host.daemon.onStateChange?.((state) => {
      const runnable = (state.included ?? []).filter((pod) => !!pod.publicUrl || /running|ready|idle|connected/i.test(String(pod.status)));
      setPods(runnable);
      if (!podId && runnable[0]) setPodId(runnable[0].id);
    });
    return dispose;
  }, [host, podId]);

  useEffect(() => {
    if (!podId) {
      const first = pods[0]?.id;
      if (first) setPodId(first);
    }
  }, [pods, podId]);

  useEffect(() => {
    if (!podId) return;
    const ac = new AbortController();
    listModels(host, podId, ac.signal)
      .then((list) => {
        const ids = list.map((m) => m.id);
        setModels(ids);
        setModel((m) => m || pickDefaultModel(ids));
      })
      .catch((e) => {
        console.warn('[juli3ta] model discovery failed', e);
        setModels([]);
      });
    return () => ac.abort();
  }, [host, podId]);

  useEffect(() => {
    const dispose = host.shellMenu?.register?.({
      appId: 'juli3ta',
      groups: [
        { label: 'File', items: [
          { id: 'new-track', label: 'New track', shortcut: '⌘N', onClick: () => { setTitle(''); setPrompt(''); setLyrics(''); } },
          { id: 'save-draft', label: 'Save draft', shortcut: '⌘S', onClick: () => void saveDraft() },
          { id: 'open-folder', label: 'Open JULI3TA folder', onClick: () => void openFolder() },
        ] },
        { label: 'Track', items: [
          { id: 'generate', label: 'Generate', shortcut: '⌘↩', disabled: busy, onClick: () => void generate() },
        ] },
      ],
    });
    return dispose;
  // callbacks intentionally stable enough for menu; rebuilt when busy flips.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [host, busy, title, prompt, lyrics, podId, model]);

  const saveDraft = useCallback(async () => {
    if (!title.trim()) return;
    const row = await upsertTrack(db, {
      title: title.trim(),
      prompt: prompt.trim(),
      lyrics: lyrics.trim(),
      modelId: model || null,
    });
    setNotice(`Draft saved: ${row.title}`);
    host.notifications.notify({ title: 'JULI3TA draft saved', body: row.title, level: 'success', unread: false });
    await refresh();
  }, [db, host, lyrics, model, prompt, refresh, title]);

  const generate = useCallback(async () => {
    if (!title.trim()) { setError('Track title required.'); return; }
    if (!prompt.trim()) { setError('Prompt/style required.'); return; }
    if (!instrumental && !lyrics.trim()) { setError('Lyrics required unless instrumental is enabled.'); return; }
    if (!podId || !model) { setError('No runnable music pod/model available. Save a draft or start a pod.'); return; }
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    setBusy(true);
    setError(null);
    setNotice('Generating audio…');
    try {
      const result = await generateMusic(host, {
        podId,
        model,
        title: title.trim(),
        prompt: prompt.trim(),
        lyrics: lyrics.trim(),
        instrumental,
        signal: ac.signal,
      });
      const row = await upsertTrack(db, {
        title: title.trim(),
        prompt: prompt.trim(),
        lyrics: lyrics.trim(),
        modelId: result.modelId,
        durationSeconds: result.durationSeconds,
      });
      const cover = coverDataUrl(row.title, row.prompt);
      try {
        const saved = await host.daemon.juli3taLibrary.saveGeneratedTrack(fileTrackFrom(row, result.audioDataUrl, cover));
        setNotice(saved.audioPath ? `Generated + mirrored: ${saved.audioPath}` : `Generated: ${row.title}`);
      } catch (mirrorErr) {
        console.warn('[juli3ta] daemon file mirror failed', mirrorErr);
        setNotice(`Generated locally. File mirror pending: ${mirrorErr instanceof Error ? mirrorErr.message : String(mirrorErr)}`);
      }
      host.notifications.notify({ title: 'JULI3TA track generated', body: row.title, level: 'success', unread: true });
      await refresh();
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError(e instanceof Error ? e.message : String(e));
        host.notifications.notify({ title: 'JULI3TA generation failed', body: e instanceof Error ? e.message : String(e), level: 'error' });
      }
    } finally {
      setBusy(false);
    }
  }, [db, host, instrumental, lyrics, model, podId, prompt, refresh, title]);

  const openFolder = useCallback(async () => {
    try {
      const path = await host.daemon.juli3taLibrary.openGeneratedTracksFolder();
      setNotice(`Opened ${path}`);
    } catch (e) {
      setError(`Could not open JULI3TA folder: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, [host]);

  const mergedTracks = useMemo(() => tracks, [tracks]);
  const selectedPod = pods.find((pod) => pod.id === podId);

  const play = (row: TrackRow) => {
    const src = audioPreview(row, fileTracks);
    if (!src) return;
    if (!audioRef.current) audioRef.current = new Audio();
    if (playingId === row.id) {
      audioRef.current.pause();
      setPlayingId(null);
      return;
    }
    audioRef.current.src = src;
    audioRef.current.play().then(() => setPlayingId(row.id)).catch((e) => setError(String(e)));
    audioRef.current.onended = () => setPlayingId(null);
  };

  return (
    <div style={{ minHeight: '100%', overflow: 'auto', background: 'radial-gradient(circle at 10% 0%, rgba(236,72,153,.38), transparent 28%), radial-gradient(circle at 86% 12%, rgba(168,85,247,.32), transparent 32%), linear-gradient(180deg, #12051f, #1f0b35 54%, #0d0614)', color: '#fff', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 28 }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', marginBottom: 22 }}>
          <div>
            <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', color: '#d8b4fe', fontSize: 12, fontWeight: 900, letterSpacing: 1 }}><Sparkles size={14} /> JULI3TA v0.1.0</div>
            <h1 style={{ fontSize: 54, margin: '4px 0 0', lineHeight: 1, letterSpacing: '-0.06em' }}>AI Music Creator</h1>
            <p style={{ color: '#c4b5fd', margin: '8px 0 0' }}>Generate tracks through your pod, keep a local SQLite index, mirror audio to the daemon JULI3TA library when available.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <button style={{ ...buttonBase, background: 'rgba(255,255,255,.10)' }} onClick={() => void refresh()}><RefreshCcw size={16} /> Refresh</button>
            <button style={{ ...buttonBase, background: 'rgba(255,255,255,.10)' }} onClick={() => setShowSettings(true)}><Settings size={16} /> Settings</button>
            <button style={{ ...buttonBase, background: 'linear-gradient(90deg,#a855f7,#ec4899)' }} onClick={() => void openFolder()}><FolderOpen size={16} /> Open folder</button>
          </div>
        </header>

        {(error || notice) && <div style={{ ...panel, padding: 14, marginBottom: 16, borderColor: error ? 'rgba(248,113,113,.45)' : 'rgba(52,211,153,.35)', color: error ? '#fecaca' : '#bbf7d0' }}>{error ?? notice}</div>}

        <main style={{ display: 'grid', gridTemplateColumns: 'minmax(360px, 0.9fr) minmax(460px, 1.1fr)', gap: 18 }}>
          <section style={{ ...panel, padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}><Wand2 /> <h2 style={{ margin: 0 }}>Creator Panel</h2></div>
            <label style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 800 }}>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} style={{ ...input, margin: '6px 0 14px' }} placeholder="Song title" />
            <label style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 800 }}>Prompt / style</label>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} style={{ ...input, resize: 'vertical', margin: '6px 0 14px' }} placeholder="genre, mood, bpm, instruments, vocal direction…" />
            <label style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 800 }}>Lyrics</label>
            <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)} rows={12} style={{ ...input, resize: 'vertical', margin: '6px 0 12px', fontFamily: 'ui-monospace,SFMono-Regular,Menlo,monospace', fontSize: 13 }} placeholder="Paste or write lyrics…" />
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#ddd6fe', fontSize: 13, marginBottom: 14 }}>
              <input type="checkbox" checked={instrumental} onChange={(e) => setInstrumental(e.target.checked)} /> Instrumental mode
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <button disabled={busy} style={{ ...buttonBase, background: 'rgba(255,255,255,.12)', opacity: busy ? .55 : 1 }} onClick={() => void saveDraft()}><Save size={16} /> Save draft</button>
              <button disabled={busy || !podId || !model} style={{ ...buttonBase, background: 'linear-gradient(90deg,#a855f7,#ec4899)', opacity: busy || !podId || !model ? .55 : 1 }} onClick={() => void generate()}>{busy ? <Loader2 size={16} className="spin" /> : <Sparkles size={16} />} {busy ? 'Generating…' : 'Generate'}</button>
            </div>
            <div style={{ marginTop: 14, color: '#a78bfa', fontSize: 12 }}>
              Pod: <b>{selectedPod?.id ?? 'none'}</b> · Model: <b>{model || 'none discovered'}</b>{rootPath ? <> · Mirror: <b>{rootPath}</b></> : null}
            </div>
          </section>

          <section style={{ ...panel, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Disc3 /><h2 style={{ margin: 0 }}>Library Gallery</h2></div>
              <span style={{ color: '#c4b5fd', fontSize: 12, fontWeight: 800 }}>{mergedTracks.length} tracks</span>
            </div>
            {loading ? <div style={{ color: '#c4b5fd', padding: 24 }}><Loader2 size={18} className="spin" /> Loading…</div> : null}
            {!loading && mergedTracks.length === 0 ? <div style={{ border: '1px dashed rgba(255,255,255,.18)', borderRadius: 16, padding: 32, textAlign: 'center', color: '#c4b5fd' }}><Mic2 size={36} /><p>No tracks yet. Generate one or save a draft.</p></div> : null}
            <div style={{ display: 'grid', gap: 12 }}>
              {mergedTracks.map((row) => {
                const src = audioPreview(row, fileTracks);
                const fav = row.favourited;
                return <article key={row.id} style={{ display: 'grid', gridTemplateColumns: '92px 1fr auto', gap: 14, alignItems: 'center', padding: 12, borderRadius: 16, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)' }}>
                  <img alt="cover" src={coverDataUrl(row.title, row.prompt)} style={{ width: 92, height: 92, borderRadius: 14, objectFit: 'cover' }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 900, fontSize: 18, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</div>
                    <div style={{ color: '#c4b5fd', fontSize: 12, margin: '4px 0 8px' }}>{row.modelId ?? 'draft'} · {row.durationSeconds ? `${Math.round(row.durationSeconds)}s` : src ? 'audio mirrored' : 'lyrics/draft'}</div>
                    <div style={{ color: '#ddd6fe', fontSize: 13, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{row.prompt || row.lyrics || 'No prompt'}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button title="Play" disabled={!src} style={{ ...buttonBase, padding: 10, background: src ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.05)', opacity: src ? 1 : .4 }} onClick={() => play(row)}>{playingId === row.id ? <Pause size={16} /> : <Play size={16} />}</button>
                    <button title="Favorite" style={{ ...buttonBase, padding: 10, background: fav ? '#ec4899' : 'rgba(255,255,255,.12)' }} onClick={() => void setFavourited(db, row.id, !fav).then(refresh)}><Heart size={16} fill={fav ? 'currentColor' : 'none'} /></button>
                    <button title="Delete" style={{ ...buttonBase, padding: 10, background: 'rgba(248,113,113,.16)' }} onClick={() => void deleteTrack(db, row.id).then(refresh)}><Trash2 size={16} /></button>
                  </div>
                </article>;
              })}
            </div>
          </section>
        </main>
      </div>

      {showSettings && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.58)', display: 'grid', placeItems: 'center', padding: 24 }} onClick={() => setShowSettings(false)}>
        <div style={{ ...panel, width: 'min(680px, 100%)', padding: 20 }} onClick={(e) => e.stopPropagation()}>
          <h2 style={{ marginTop: 0 }}>JULI3TA Settings</h2>
          <label style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 800 }}>Pod</label>
          <select value={podId} onChange={(e) => { setPodId(e.target.value); setModel(''); }} style={{ ...input, margin: '6px 0 14px' }}>
            {pods.length === 0 ? <option value="">No runnable pods</option> : pods.map((pod) => <option key={pod.id} value={pod.id}>{pod.id} · {pod.status}</option>)}
          </select>
          <label style={{ fontSize: 12, color: '#c4b5fd', fontWeight: 800 }}>Music model</label>
          <select value={model} onChange={(e) => setModel(e.target.value)} style={{ ...input, margin: '6px 0 14px' }}>
            {models.length === 0 ? <option value="">No models discovered</option> : models.map((id) => <option key={id} value={id}>{id}</option>)}
          </select>
          <p style={{ color: '#c4b5fd', fontSize: 13 }}>Technical note: v0.1 uses host.daemon.callPodEndpoint for `/v1/models` and `/v1/music/generations`. It mirrors generated data through `host.daemon.juli3taLibrary` when available; real Finder file implementation remains daemon-owned.</p>
          <button style={{ ...buttonBase, background: 'linear-gradient(90deg,#a855f7,#ec4899)' }} onClick={() => setShowSettings(false)}>Done</button>
        </div>
      </div>}

      <style>{`.spin{animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}} select option{background:#1f0b35;color:white}`}</style>
    </div>
  );
}

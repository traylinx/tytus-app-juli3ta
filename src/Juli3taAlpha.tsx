import { useState, useEffect, useCallback } from 'react';
import {
  Music, Sparkles, Loader2, Mic, Disc3, Wand2,
  Github, ExternalLink, ChevronRight, Heart, Trash2, Save, Plus,
} from 'lucide-react';
import {
  createDraftTrack,
  deleteTrack,
  listTracks,
  setFavourited,
  type AppDb,
  type TrackRow,
} from './repo';

interface Juli3taAlphaProps {
  db: AppDb;
  migrationReady: Promise<void>;
  onOpenStudio?: () => void;
}

const FEATURE_ROADMAP = [
  { icon: Wand2, title: 'AI lyrics + song generation', sub: 'Coming v0.1.0 — pod gateway POST /v1/music/generations.' },
  { icon: Music, title: 'Multi-track sequencer', sub: 'Drums, bass, lead, pad — AI-generated or hand-arranged.' },
  { icon: Mic, title: 'Voice + sample import', sub: 'Drop in voice memos from Voice Recorder or upload a stem.' },
  { icon: Disc3, title: 'Project workspace', sub: '~/Music/JULI3TA Projects — every track is a real file you own.' },
];

export function Juli3taAlpha({ db, migrationReady, onOpenStudio }: Juli3taAlphaProps) {
  const [tracks, setTracks] = useState<TrackRow[]>([]);
  const [loadingTracks, setLoadingTracks] = useState(true);
  const [showCompose, setShowCompose] = useState(false);
  const [composeTitle, setComposeTitle] = useState('');
  const [composePrompt, setComposePrompt] = useState('');
  const [composeLyrics, setComposeLyrics] = useState('');
  const [saving, setSaving] = useState(false);

  const refresh = useCallback(async () => {
    try {
      await migrationReady;
      const rows = await listTracks(db);
      setTracks(rows);
    } catch (err) {
      console.warn('[juli3ta] listTracks failed', err);
      setTracks([]);
    } finally {
      setLoadingTracks(false);
    }
  }, [db, migrationReady]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const handleSaveDraft = async () => {
    if (!composeTitle.trim() || !composePrompt.trim()) return;
    setSaving(true);
    try {
      await createDraftTrack(db, {
        title: composeTitle.trim(),
        prompt: composePrompt.trim(),
        lyrics: composeLyrics.trim(),
      });
      setComposeTitle('');
      setComposePrompt('');
      setComposeLyrics('');
      setShowCompose(false);
      await refresh();
    } catch (err) {
      console.error('[juli3ta] save draft failed', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTrack(db, id);
      await refresh();
    } catch (err) {
      console.error('[juli3ta] delete failed', err);
    }
  };

  const handleToggleFavourite = async (track: TrackRow) => {
    try {
      await setFavourited(db, track.id, !track.favourited);
      await refresh();
    } catch (err) {
      console.error('[juli3ta] toggle fav failed', err);
    }
  };

  return (
    <div
      style={{
        height: '100%',
        overflow: 'auto',
        background: 'linear-gradient(180deg, #1a0b2e 0%, #2d1245 50%, #1a0b2e 100%)',
        color: '#f4f0ff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '40px 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 12px', borderRadius: 999,
              background: 'rgba(168, 85, 247, 0.2)',
              fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
              color: '#d8b4fe', marginBottom: 16,
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            <Sparkles size={12} /> ALPHA · v0.0.2
          </div>
          <h1
            style={{
              fontSize: 56, fontWeight: 800, letterSpacing: '-0.04em',
              margin: 0, marginBottom: 12,
              background: 'linear-gradient(180deg, #fff 0%, #d8b4fe 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            JULI3TA
          </h1>
          <div style={{ fontSize: 16, color: '#c4b5fd' }}>
            AI-native music creator for Tytus OS
          </div>
        </div>

        {/* My drafts */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#a78bfa', letterSpacing: 0.5 }}>
                MY DRAFTS
              </div>
              <div style={{ fontSize: 12, color: '#a78bfa', marginTop: 2 }}>
                Saved prompts + lyrics. Generation arrives in v0.1.0.
              </div>
            </div>
            <button
              onClick={() => setShowCompose((v) => !v)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                background: showCompose ? 'rgba(255,255,255,0.08)' : 'linear-gradient(90deg, #a855f7, #ec4899)',
                color: '#fff',
                border: 'none', borderRadius: 8,
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Plus size={13} /> {showCompose ? 'Cancel' : 'New draft'}
            </button>
          </div>

          {showCompose && (
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                borderRadius: 12, padding: 16,
                marginBottom: 16,
              }}
            >
              <input
                value={composeTitle}
                onChange={(e) => setComposeTitle(e.target.value)}
                placeholder="Track title…"
                style={inputStyle}
              />
              <textarea
                value={composePrompt}
                onChange={(e) => setComposePrompt(e.target.value)}
                placeholder="Prompt — describe the song. ('80s synthwave, melancholy, 124 bpm, female vocal'…)"
                rows={3}
                style={{ ...inputStyle, resize: 'vertical', marginTop: 10 }}
              />
              <textarea
                value={composeLyrics}
                onChange={(e) => setComposeLyrics(e.target.value)}
                placeholder="Lyrics (optional) — paste or type the verse / chorus / bridge…"
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', marginTop: 10 }}
              />
              <button
                onClick={handleSaveDraft}
                disabled={saving || !composeTitle.trim() || !composePrompt.trim()}
                style={{
                  marginTop: 12,
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px',
                  background: saving ? 'rgba(168,85,247,0.4)' : '#a855f7',
                  color: '#fff',
                  border: 'none', borderRadius: 8,
                  fontSize: 13, fontWeight: 600,
                  cursor: saving || !composeTitle.trim() || !composePrompt.trim() ? 'not-allowed' : 'pointer',
                  opacity: !composeTitle.trim() || !composePrompt.trim() ? 0.5 : 1,
                }}
              >
                {saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
                {saving ? 'Saving…' : 'Save draft'}
              </button>
            </div>
          )}

          {loadingTracks ? (
            <div style={{ padding: 20, color: '#a78bfa', fontSize: 13 }}>Loading drafts…</div>
          ) : tracks.length === 0 ? (
            <div
              style={{
                padding: 24, textAlign: 'center',
                border: '1px dashed rgba(168, 85, 247, 0.3)',
                borderRadius: 12, color: '#a78bfa', fontSize: 13,
              }}
            >
              No drafts yet. Click "New draft" to save your first prompt + lyrics.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 8 }}>
              {tracks.map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: 'flex', gap: 12, padding: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${t.favourited ? 'rgba(236, 72, 153, 0.3)' : 'rgba(168, 85, 247, 0.15)'}`,
                    borderRadius: 12,
                  }}
                >
                  <Music size={20} style={{ color: '#d8b4fe', flexShrink: 0, marginTop: 2 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#f4f0ff', marginBottom: 2 }}>
                      {t.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12, color: '#a78bfa',
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {t.prompt}
                    </div>
                    <div style={{ fontSize: 10, color: '#9b87d6', marginTop: 4 }}>
                      Created {new Date(t.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggleFavourite(t)}
                    style={iconBtnStyle}
                    title={t.favourited ? 'Unfavourite' : 'Favourite'}
                  >
                    <Heart size={14} fill={t.favourited ? '#ec4899' : 'none'} color={t.favourited ? '#ec4899' : '#c4b5fd'} />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    style={iconBtnStyle}
                    title="Delete"
                  >
                    <Trash2 size={14} color="#c4b5fd" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Roadmap */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#a78bfa', marginBottom: 12, letterSpacing: 0.5 }}>
            WHAT'S COMING IN v0.1.0
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 12 }}>
            {FEATURE_ROADMAP.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  style={{
                    display: 'flex', gap: 12, padding: 14,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(168, 85, 247, 0.15)',
                    borderRadius: 12,
                  }}
                >
                  <Icon size={20} style={{ color: '#d8b4fe', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f0ff', marginBottom: 2 }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 12, color: '#a78bfa', lineHeight: 1.5 }}>
                      {f.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            paddingTop: 20, borderTop: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}
        >
          <div style={{ fontSize: 11, color: '#a78bfa' }}>
            Drafts saved to per-app SQLite (`app_juli3ta_tracks`).
            Generation comes online with the full Music Creator UI lift.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {onOpenStudio && (
              <button
                onClick={onOpenStudio}
                style={footerBtnStyle}
              >
                Open Music Creator <ChevronRight size={12} />
              </button>
            )}
            <a
              href="https://github.com/traylinx/tytus-app-juli3ta"
              target="_blank"
              rel="noreferrer"
              style={{ ...footerBtnStyle, textDecoration: 'none', color: '#c4b5fd' }}
            >
              <Github size={12} /> Repo <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(0,0,0,0.3)',
  color: '#f4f0ff',
  border: '1px solid rgba(168, 85, 247, 0.2)',
  borderRadius: 6,
  padding: '8px 10px',
  fontSize: 13,
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  outline: 'none',
};

const iconBtnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  width: 30, height: 30,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(168, 85, 247, 0.2)',
  borderRadius: 6,
  cursor: 'pointer',
  flexShrink: 0,
};

const footerBtnStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 6,
  padding: '6px 12px',
  background: 'rgba(255,255,255,0.05)',
  color: '#f4f0ff',
  border: '1px solid rgba(168, 85, 247, 0.3)',
  borderRadius: 6,
  fontSize: 12, fontWeight: 500,
  cursor: 'pointer',
};

export default Juli3taAlpha;

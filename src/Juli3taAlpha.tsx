import { useState } from 'react';
import {
  Music, Sparkles, Loader2, Mic, Disc3, Wand2,
  Github, ExternalLink, ChevronRight,
} from 'lucide-react';

interface Juli3taAlphaProps {
  onOpenStudio?: () => void;
}

const FEATURE_ROADMAP = [
  { icon: Wand2, title: 'AI lyrics + song generation', sub: 'Prompt → full track via the host\'s daemon-routed music endpoints.' },
  { icon: Music, title: 'Multi-track sequencer', sub: 'Drums, bass, lead, pad — AI-generated or hand-arranged.' },
  { icon: Mic, title: 'Voice + sample import', sub: 'Drop in voice memos from Voice Recorder or upload a stem.' },
  { icon: Disc3, title: 'Project workspace', sub: '~/Music/JULI3TA Projects — every track is a real file you own.' },
];

export function Juli3taAlpha({ onOpenStudio }: Juli3taAlphaProps) {
  const [generating, setGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleTeaser = async () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 1800);
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
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '48px 32px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 12px', borderRadius: 999,
              background: 'rgba(168, 85, 247, 0.2)',
              fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
              color: '#d8b4fe', marginBottom: 24,
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            <Sparkles size={12} /> ALPHA · v0.0.1
          </div>
          <h1
            style={{
              fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em',
              margin: 0, marginBottom: 16,
              background: 'linear-gradient(180deg, #fff 0%, #d8b4fe 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            JULI3TA
          </h1>
          <div style={{ fontSize: 20, color: '#c4b5fd', marginBottom: 8 }}>
            AI-native music creator for Tytus OS
          </div>
          <div style={{ fontSize: 14, color: '#a78bfa' }}>
            Coming as a real installable app — this is the placeholder.
          </div>
        </div>

        {/* Teaser prompt */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: 16,
            padding: 24,
            marginBottom: 48,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ fontSize: 13, color: '#c4b5fd', marginBottom: 12 }}>
            Try the prompt experience (alpha — generates a teaser only)
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe a song… ('80s synthwave, melancholy, 124 bpm, female vocal'…)"
            rows={3}
            style={{
              width: '100%',
              background: 'rgba(0,0,0,0.3)',
              color: '#f4f0ff',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: 8,
              padding: 12,
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
          <button
            onClick={handleTeaser}
            disabled={generating || !prompt.trim()}
            style={{
              marginTop: 12,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 20px',
              background: generating ? 'rgba(168,85,247,0.4)' : 'linear-gradient(90deg, #a855f7, #ec4899)',
              color: '#fff',
              border: 'none', borderRadius: 8,
              fontSize: 14, fontWeight: 600,
              cursor: generating ? 'wait' : prompt.trim() ? 'pointer' : 'not-allowed',
              opacity: prompt.trim() ? 1 : 0.5,
            }}
          >
            {generating ? <Loader2 size={14} className="animate-spin" /> : <Wand2 size={14} />}
            {generating ? 'Cooking…' : 'Generate teaser'}
          </button>
          {generating && (
            <div style={{ fontSize: 12, color: '#c4b5fd', marginTop: 12 }}>
              Real generation requires the music daemon (full lift, post-alpha).
              Once shipped, this hits <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: 4 }}>
              host.daemon.network</code> → pod's `/v1/music/generations` endpoint.
            </div>
          )}
        </div>

        {/* Feature roadmap */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#a78bfa', marginBottom: 16, letterSpacing: 0.5 }}>
            WHAT'S COMING
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 16 }}>
            {FEATURE_ROADMAP.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  style={{
                    display: 'flex', gap: 12,
                    padding: 16,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(168, 85, 247, 0.15)',
                    borderRadius: 12,
                  }}
                >
                  <Icon size={22} style={{ color: '#d8b4fe', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#f4f0ff', marginBottom: 4 }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: '#a78bfa', lineHeight: 1.5 }}>
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
            paddingTop: 24,
            borderTop: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}
        >
          <div style={{ fontSize: 12, color: '#a78bfa' }}>
            Today the legacy MusicCreator app inside Tytus OS is the live UI.
            JULI3TA's lift is tracked in <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: 4 }}>
            SPRINT-TYTUS-APP-JULI3TA-V1</code>.
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {onOpenStudio && (
              <button
                onClick={onOpenStudio}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 14px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#f4f0ff',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: 8,
                  fontSize: 13, fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Open Music Creator <ChevronRight size={13} />
              </button>
            )}
            <a
              href="https://github.com/traylinx/tytus-app-juli3ta"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                background: 'transparent',
                color: '#c4b5fd',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                borderRadius: 8,
                fontSize: 13, fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <Github size={13} /> Repo <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juli3taAlpha;

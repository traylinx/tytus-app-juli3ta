# tytus-app-juli3ta

**JULI3TA** — AI-native music creator for [Tytus OS](https://github.com/traylinx/tytus-os).

## Status

🚧 **Coming soon.** This repo is a placeholder. The actual implementation currently lives bundled with Tytus OS as `music-creator`. A dedicated lift sprint (`SPRINT-TYTUS-APP-JULI3TA-V1`) will carve the UI body into this repo and ship a v0.1.0 build.

## What it will be

- Multi-track sequencer with AI-generated stems (drums, bass, lead, pad).
- Lyric-and-prompt → finished track via the host's daemon-routed music endpoints.
- Time-stretching, pitch shifting, layer mixing, export to WAV / MP3.
- Scratch projects sit under the host's `~/Music/Tytus Projects/` user folder.

## Install (when v0.1.0 ships)

In Tytus OS → App Store → "Install from URL" →

```
https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@v0.1.0/tytus-app.json
```

Today that URL 404s — the manifest in this repo is forward-looking.

## Why "JULI3TA"

The old in-tree app was named `MusicCreator` — accurate but boring. JULI3TA carries the brand from Sebastian's wider music engine work and signals that this is a flagship surface, not a generic editor.

## License

MIT — see `LICENSE`. © 2026 Traylinx.

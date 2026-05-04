# tytus-app-juli3ta

**JULI3TA** — AI-native music creator for [Tytus OS](https://github.com/traylinx/tytus-os).

## Status

`v0.1.0` ships the standalone app surface:

- Creator panel for title, style prompt, lyrics, and instrumental mode.
- Pod/model picker backed by `host.daemon.callPodEndpoint('/v1/models')`.
- Audio generation through `/v1/music/generations`.
- App-local SQLite track index via `host.storage.current()`.
- Library gallery with generated covers, favourites, delete, and audio playback.
- Shell menu integration for New track, Save draft, Generate, and Open folder.
- Best-effort daemon mirror through `host.daemon.juli3taLibrary` when the host exposes real file-library routes.

## Install

In Tytus OS → App Store → install from the Featured catalog, or manually install:

```text
https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@v0.1.0/tytus-app.json
```

## Migration note

The legacy in-tree `musiccreator` app remains in Tytus OS as a protected fallback for existing OPFS tracks until the real Finder-file migration sprint lands. Do not delete user music data without a verified migration from legacy inline audio blobs to daemon-backed file refs.

## License

MIT — see `LICENSE`. © 2026 Traylinx.

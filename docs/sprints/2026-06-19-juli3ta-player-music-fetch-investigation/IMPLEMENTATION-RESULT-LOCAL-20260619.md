# JULI3TA Player music fetch local implementation result — 2026-06-19

Status: **local-only, not released**.

## Scope

Follow-up from the saved player/music-fetch investigation. Goal was to make the current YouTube/yt-dlp fetch path less wasteful without changing Play/Add semantics or publishing a JULI3TA release.

## Changes

### JULI3TA standalone app

Repo: `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta`

- Kept the existing local Library-tab fix intact: clicking `Library` no longer snaps back to `My Work` just because a My Work track is currently selected.
- Reduced automatic search-result stream prewarm from top 3 results to top 1 result via `AUTO_STREAM_WARMUP_COUNT = 1`.
- Preserved behavior:
  - `Play` still creates a temporary preview track and switches to Player.
  - `Add` still saves metadata to Library and does not download audio.
  - Hover/focus still best-effort warms an individual row.
  - Saved YouTube tracks remain remote streams with lazy re-resolution.

### Tytus tray host

Repo: `/Users/sebastian/Projects/makakoo/api/ProjectWannolot/services/tytus-cli`

- Cached `yt-dlp --version` lookups in the tray `music_ytdlp` layer for 6 hours.
- This removes the repeated 1.5-2.4s `/api/music/status` penalty after the first post-startup probe.

## Local install

- Rebuilt JULI3TA `dist/`.
- Copied local JULI3TA bundle into Tytus OS `app/public/dev-juli3ta/`.
- Rebuilt Tytus OS with `VITE_LOCAL_JULI3TA=1`.
- Synced Tytus OS dist into `services/tytus-cli/tray/web/os/`.
- Built local `tytus-tray` release binary.
- Installed local binary to:
  - `/Users/sebastian/bin/tytus-tray`
  - `/usr/local/bin/tytus-tray`
- Restarted `/Applications/Tytus.app` so localhost `4242` uses the new local binary/assets.

## Validation

Artifacts:

- `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta/artifacts/player-music-fetch-local-20260619T135827Z/validation.log`
- `/Users/sebastian/Projects/makakoo/api/ProjectWannolot/docs/sprints/tytus-pod-autonomy-production-hardening-2026-06-18/artifacts/juli3ta-player-music-fetch-local-20260619T135827Z/validation.log`
- `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta/artifacts/player-music-fetch-local-install-20260619T140342Z/local-install.log`
- `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta/artifacts/player-music-fetch-local-restart-20260619T141456Z/restart-and-smoke.log`

Passed:

- `npm run typecheck` in JULI3TA.
- `npm run build` in JULI3TA.
- `cargo fmt` in `services/tytus-cli`.
- `cargo check -p tytus-tray --quiet`.
- `cargo test -p tytus-tray music_ytdlp --quiet` => 7 focused tests passed.
- `cargo test -p tytus-tray music_proxy --quiet` => 2 focused tests passed.
- `VITE_LOCAL_JULI3TA=1 npm run typecheck` in Tytus OS app.
- `VITE_LOCAL_JULI3TA=1 npm run build` in Tytus OS app.
- Local smoke after app restart:
  - `/api/music/status` first ready probe: 1923 ms, then repeated ready probes: 23 ms, 2 ms, 2 ms, 3 ms, 3 ms.
  - `/api/music/search2?q=dr.%20dree&types=tracks&provider=auto&limit=3` returned 3 tracks.
  - `/api/music/stream?videoId=_CL6n0FJZpk` returned a local proxy URL.
  - Proxy Range request returned HTTP `206`, `content-type: video/mp4`.

Notes:

- Browser harness QA was attempted but blocked because Chrome CDP is not running: `DevToolsActivePort not found`. No browser screenshot was produced in this run.
- Tytus OS build still emits the pre-existing CSS minify warning at `<stdin>:3182:2` and the known dynamic-import chunk warning. Build succeeds.

## Not done / release guard

- No JULI3TA release, tag, push, or catalog update was performed.
- No public Tytus CLI release was performed for this JULI3TA-local work.
- Remaining next-sprint candidates:
  1. Add explicit debug counters for search, stream resolve, proxy success/failure.
  2. Add a true global stream-warmup queue/concurrency cap if hover/focus still causes too much yt-dlp pressure.
  3. Decide whether Spotify/Last.fm/Discogs source cards should stay visible before their backing search paths exist.

## Follow-up local fix — search-row Play state and responsive track switching

Date: 2026-06-19 later local pass. Status: **local-only, not released**.

User report: search-result `Play` could start audio in the bottom player while the row button still stayed visually `Play`; clicking another Library song while one remote stream was still loading waited for the first load instead of switching immediately.

Second opinion: Lope `claude` agreed the concrete root causes were:

1. Search rows derived button state only from `previewBusyId`, which was cleared immediately and did not follow `player.state.trackId` / `loadingTrackId` / `playing`.
2. `player.toggle(track)` returned early for any `state.loadingTrackId`, so a different track click during remote URL resolution was swallowed.
3. Async stream-resolution promises needed a generation guard so an older load could not clobber a newer user click.

Implemented:

- Search result rows now derive active/loading/playing state from `player.state` keyed by `musicStreamKey(result.id)`.
- Active search row button now shows `Loading`, `Pause`, or `Play` and uses accent styling when active.
- Removed `previewBusyId` state/prop because player state is now the source of truth.
- `usePlayer` now uses a monotonic `loadGenerationRef` for `select()` and `play()` so stale remote stream resolves no-op after the user chooses another track.
- `toggle(track)` now only ignores a re-click on the same loading track; a different track interrupts immediately.
- `pause()` invalidates pending load generations.
- Best-effort search/hover stream prewarming is capped at one concurrent warmup. Actual user Play still bypasses the cap.

Validation artifacts:

- `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta/artifacts/player-button-switching-local-20260619T144903Z/validation.log`
- `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta/artifacts/player-button-switching-local-install-20260619T145106Z/local-install.log`

Passed:

- JULI3TA `npm run typecheck`.
- JULI3TA `npm run build`.
- Tytus OS app `VITE_LOCAL_JULI3TA=1 npm run build`.
- Local `tytus-tray` rebuilt and installed to `/Users/sebastian/bin/tytus-tray` and `/usr/local/bin/tytus-tray`.
- `/Applications/Tytus.app` restarted; daemon PID after restart: `19299`.
- API smoke after restart:
  - `/api/music/status`: first ready probe `1032 ms`, then `2 ms`, `1 ms`.
  - `/api/music/search2?q=the%20cure&types=tracks&provider=auto&limit=3`: 3 tracks, first `B402rKl4bUg` / `Olivia Rodrigo - the cure (Official Music Video)`.
  - `/api/music/stream?videoId=B402rKl4bUg`: stream resolved to local `/api/music/proxy/...`.

Still not released. Manual UI confirmation in the already-open Tytus.app is still required because Chrome CDP browser automation is unavailable in this session.

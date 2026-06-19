# JULI3TA Player music fetch investigation, next sprint seed

Date: 2026-06-19
Scope: read-only investigation seed for the next JULI3TA sprint. Do not treat this as released code.

## Current local context

- JULI3TA standalone repo: `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta`
- Tytus OS/CLI local app shell is patched only to load the local JULI3TA bundle for testing.
- No release/push/tag should happen for JULI3TA until the next sprint is explicitly opened and validated.

## What powers the Player search today

- Frontend: `src/apps/MusicCreator.tsx`
- Frontend API adapter: `src/lib/musicDaemon.ts`
- Host/tray routes: `services/tytus-cli/tray/src/web_server.rs`
- YouTube/yt-dlp wrapper: `services/tytus-cli/tray/src/music_ytdlp.rs`
- Local stream proxy: `services/tytus-cli/tray/src/music_proxy.rs`

Flow:

1. JULI3TA calls same-origin `/api/music/search2?q=...&types=tracks&provider=auto&limit=20`.
2. Tytus tray calls `yt-dlp --dump-json --flat-playlist --no-warnings ytsearch20:<query>`.
3. Results are YouTube metadata rows only.
4. Playback calls `/api/music/stream?videoId=<youtube-id>`.
5. Tray resolves an expiring `googlevideo.com` URL through `yt-dlp --get-url`.
6. Tray returns a local proxy URL: `/api/music/proxy/<base64url>`.
7. Browser audio plays the local proxy, which forwards Range requests to `googlevideo.com`.

## Important behavior to preserve

- `Play` creates a temporary preview track and switches to Player.
- `Add` saves metadata into the Library, but does not download audio.
- Saved YouTube tracks remain remote streams.
- Durable library state is merged into browser/AppDb plus `~/Music/JULI3TA/.music-state.json`.
- Generated JULI3TA songs are separate from streamed YouTube Library tracks.

## Observed risks for next sprint

1. `music_ytdlp_setup::status()` currently shells `yt-dlp --version`; this made cached music endpoints still cost roughly 1.5-2.4s locally.
2. Search auto-warms the top 3 results, and row hover/focus also warms streams. Dedup exists, but no global warmup concurrency cap.
3. Search/playback is YouTube-only even though the UI has Sources cards for Spotify/Last.fm/Discogs.
4. Library saves metadata only; if YouTube blocks/rate-limits/changes URLs, saved remote tracks need stream re-resolution.

## Live local proof from investigation

- `/api/music/status`: `ready=true`, `source=system`, `version=2026.03.03`.
- Search for `dr. dree` returned 20 YouTube tracks.
- First result: `_CL6n0FJZpk`, `Dr. Dre - Still D.R.E. ft. Snoop Dogg`.
- Stream for `_CL6n0FJZpk` returned a local `/api/music/proxy/...` URL.
- Proxy Range request returned HTTP `206 Partial Content`, `content-type: video/mp4`.
- `/api/juli3ta/music-state`: root `/Users/sebastian/Music/JULI3TA`, tracks `8`, favorites `1`, playlists `0`.

## Next-sprint candidate fixes

1. Cache yt-dlp readiness/version in the tray setup state, not per request.
2. Add a stream warmup concurrency cap, likely 1 or 2.
3. Consider warming only first result after typing settles.
4. Add lightweight debug counters for search, stream resolve, and proxy failures.
5. Keep Play/Add semantics unchanged.

## Related shared-folder interruption captured during handoff

During this handoff, Hermie reported shared folders dropped from `AVAILABLE` to `NOT available` because pod-side Garage credentials failed to parse. That is a Tytus OS/shared-folder incident, not a JULI3TA music-fetch issue, but screenshots are preserved here because it interrupted the next-sprint handoff.

Attached artifacts:

- `artifacts/20260619T125110Z/shared-folder-hermie-provision-modal-1.png`
- `artifacts/20260619T125110Z/shared-folder-hermie-provision-modal-2.png`

Sensitive note: browser cookies from the copied cURL command were intentionally not saved.

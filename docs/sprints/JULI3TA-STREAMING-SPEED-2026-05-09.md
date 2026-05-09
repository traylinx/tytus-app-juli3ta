# JULI3TA Streaming Speed Sprint — 2026-05-09

## Goal
Make JULI3TA search/preview/stream startup feel faster without breaking generated-track playback, app install, or tray proxy safety.

## Root cause verified
- Remote library playback does **not** intentionally download the full song before play.
- The tray serves `/api/music/proxy/<encoded>` and forwards browser `Range` headers to YouTube CDN, so playback can stream progressively.
- First play still felt slow because:
  1. Search result warmup and click-to-play could race and launch duplicate `/api/music/stream` resolves for the same YouTube id.
  2. Cached remote proxy URLs were sometimes passed through `audioDataUrl`, which made them behave like durable local audio instead of expiring remote streams.
  3. Tray stream resolution used `yt-dlp --dump-json`, producing ~598 KB metadata for one test video before playback. `yt-dlp --get-url` returns only the playable URL, ~1 KB. Local timing on `dQw4w9WgXcQ`: `--get-url` 3.44s / 1,141 bytes, `--dump-json` 3.50s / 598,418 bytes. The time can vary by YouTube, but the payload/parse work is objectively wrong for first audio.
  4. Remote `<audio preload="auto">` could ask the browser to buffer more than needed before the user actually hears audio.

## Scope

### Phase 1 — Re-baseline the real stream path
- Trace app path: search result → prewarm → preview click → `getMusicStream()` → tray `/api/music/stream` → `/api/music/proxy`.
- Verify generated local tracks still use `audioDataUrl` / real file URLs and are unaffected.
- Verify tray proxy still validates googlevideo HTTPS targets and forwards `Range`.

### Phase 2 — Deduplicate stream resolution in JULI3TA
- Add one in-flight promise cache per YouTube video id.
- Make search prewarm and click-to-play join the same promise.
- Keep resolved proxy URLs refreshable in runtime stream cache, not `audioDataUrl`.
- Keep cache process/session-only with existing 90 minute TTL.

### Phase 3 — Reduce browser over-buffering
- Use `preload="metadata"` for remote tracks.
- Keep `preload="auto"` for generated/local tracks where full audio is already local and stable.

### Phase 4 — Speed tray stream URL resolve
- Try `yt-dlp --get-url` first for `/api/music/stream`.
- Fall back to existing `--dump-json` metadata path if the fast path fails.
- Preserve existing stream cache and proxy security.

### Phase 5 — Publish safely
- Bump standalone JULI3TA app version/tag.
- Update catalog pin to the new immutable app tag.
- Update Tytus OS fallback/current JULI3TA pin if needed so existing installs can be upgraded deliberately.
- Push changed repos with surgical commits.
- Verify CDN manifest/entry/catalog HTTP 200 after publish.

## Acceptance gates
- `npm run typecheck` in `tytus-app-juli3ta`
- `npm run build` in `tytus-app-juli3ta`
- `cargo test -p tytus-tray music_ -- --nocapture` in `tytus-cli`
- Tytus OS targeted tests for JULI3TA pin/catalog upgrade if Tytus OS is changed
- Catalog JSON valid and points to the new immutable `juli3ta-*` tag
- CDN `tytus-app.json`, `dist/index.js`, and catalog `featured.json` return HTTP 200

## Non-goals
- No new music provider.
- No full offline download/cache feature.
- No proxy allowlist relaxation.
- No unrelated Atomek/local-skills bridge publishing.

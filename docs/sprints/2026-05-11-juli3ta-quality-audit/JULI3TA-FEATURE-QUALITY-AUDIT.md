# JULI3TA Feature + Quality Audit Sprint — 2026-05-11

## Mission
Ship JULI3TA only after every real user flow is reviewed against code, live runtime behavior, and failure cases. No demo-path-only testing. The app must work online through TytusOS at `http://localhost:4242/`, through the installed standalone bundle, and after publication through the immutable CDN tag.

## Codebase truth

| Surface | Path / URL | Role |
|---|---|---|
| Standalone app repo | `/Users/sebastian/Projects/tytus-apps/tytus-app-juli3ta` | Canonical standalone JULI3TA package and CDN bundle. |
| Standalone GitHub repo | `https://github.com/traylinx/tytus-app-juli3ta.git` | Public immutable app tags, e.g. `juli3ta-0.3.16`. |
| Standalone manifest | `tytus-app.json` | Tytus App install contract, permissions, entry URL, storage tables. |
| Main app component | `src/apps/MusicCreator.tsx` | Creator, player, library, AI helpers, Restyle, persistence orchestration. |
| Reference sample logic | `src/lib/coverSample.ts` | Browser fallback for Restyle reference extraction and compact WAV encoding. |
| Music daemon API client | `src/lib/musicDaemon.ts` | Search/stream/provider calls to local tray endpoints. |
| Library persistence | `src/lib/musicLibraryPersistence.ts`, `src/lib/repo/*.ts` | SQLite/localStorage/tray-backed data loading and migrations. |
| TytusOS in-tree copy | `/Users/sebastian/Projects/makakoo/api/ProjectWannolot/services/tytus-os/app/src/apps/MusicCreator.tsx` | Local OS fallback/copy that must stay in sync until standalone-only migration is complete. |
| Tytus tray music endpoints | `/Users/sebastian/Projects/makakoo/api/ProjectWannolot/services/tytus-cli/tray/src/web_server.rs`, `music_ytdlp.rs`, `music_proxy.rs` | `/api/music/*`, `/api/juli3ta/library/*`, pod proxy and local host bridge. |
| Catalog repo | `/Users/sebastian/Projects/tytus-apps/tytus-app-catalog` | Featured catalog pin after release. |

Current sprint version target: `0.3.16`.

## Feature inventory — everything to test

### 1. App shell + install contract
- Standalone boot through `bootApp(env)` from `src/index.tsx`.
- TytusOS window sizing: default `1100x760`, minimum `720x540`.
- Permissions: `vfs.user.music`, `daemon.read`, `daemon.network`, `storage.app`, `shell.openWindow`, `shell.notifications`, `shell.menu`.
- Shell menu integration: Song menu, Window menu, Help menu, mode switching, Surprise, open help.
- Host context compatibility: standalone adapters for OS store, filesystem, current window, daemon state, shell menu.
- Brand assets: `juli3ta:mark`, local `/brand/juli3ta/*` fallback in TytusOS.
- i18n surfaces: English + Spanish locales.

Quality risks:
- Installed app row can point at stale CDN tag.
- TytusOS in-tree copy can drift from standalone copy.
- Browser cache/jsDelivr cache can serve old bundle after version bump.

### 2. Connectivity + model gateway
- Pod selector and gateway status (`All gateway 04`, tunnel/remote/local labels).
- Same-origin pod proxy: `/api/pods/:id/proxy/v1/chat/completions`, `/music/generations`, `/music/lyrics`, image endpoints.
- Model candidate selection from gateway model list.
- Bad model fallback: provider-specific 400s such as MiniMax `web_search is not support` must fallback, not hard-fail user flows.
- Tunnel down / degraded / no pod available states.
- Helper task isolation: Inspire/Suggest/Polish/Specs/Cover have operation-scoped abort controllers; main Generate cancels draft helpers before submitting final snapshot.

Quality risks:
- A 400 from one model shown directly to user instead of trying next compatible model.
- Main Generate enabled while Restyle reference is still preparing.
- Multiple helper buttons blocking each other or aborting unrelated flow.

### 3. Library + My Work
- Left sidebar tabs: `My Work`, `Library`.
- Filters/chips: All, Favorites, Select, Songs, Restyles, Lyrics.
- Search library field.
- Track cards: title, artist/source, duration, cover image, menu actions.
- Saved generated tracks with metadata: title, style, theme, lyrics, specs JSON, audio data URL or real file URL, duration, bitrate, sample rate, size, source.
- Favorites and playlist/state persistence.
- Bulk/select mode if present.
- Error surface when real tray file library is unavailable.

Quality risks:
- `/api/juli3ta/library/tracks` returns huge base64 payload and slows initial app load.
- Browser-local fallback diverges from host-file library.
- Tracks with `durationMs = 0` appear as broken audio.

### 4. Online music search + streaming
- Search remote music by query.
- YouTube result normalization: artist/song extraction from title/channel.
- Search result artwork/thumbnail loading.
- Runtime stream cache: one in-flight resolver per YouTube id, 90 minute TTL.
- Search prewarm + hover/focus warmup join existing stream promise.
- Remote playback via `/api/music/stream?videoId=...` then `/api/music/proxy/<encoded>`.
- Proxy must forward range requests for progressive playback.
- Remote tracks use `<audio preload="metadata">`; generated/local tracks use stronger preload when already local.
- Playlist/search-provider surfaces if visible.

Quality risks:
- First play waits on duplicate stream resolves.
- Expired proxy URL stored as durable `audioDataUrl`.
- Search too slow without visible loading/progress.
- Proxy/security regression: only googlevideo HTTPS targets should stream.

### 5. Player
- Player tab opens current selected track.
- Play/pause, seek, current time/duration, volume.
- Repeat mode, shuffle, playback speed (`0.25x` to `4x`) persisted in localStorage.
- Queue/playlist behavior.
- Edit in Creator / switch back to Creator.
- Remote stream playback vs generated local playback.
- Restyle A/B compare panel: original reference vs generated restyle.

Quality risks:
- Player holds stale object URL/data URL after deleting/renaming track.
- Remote `<audio>` errors not surfaced clearly.
- A/B compare lost unexpectedly or attached to wrong track.

### 6. Creator modes

#### 6.1 Song mode
- Inputs: song name, theme, style, genre chips, lyrics, track specs, instrumental toggle.
- If lyrics empty and non-instrumental: generate structured lyrics first through `/music/lyrics` or chat fallback.
- Then call `/music/generations` with prompt/style/lyrics/specs.
- Cover art generation can run in parallel and must not block song save if art fails.
- Save generated MP3 to library and mirror to VFS/host files.
- Show notification and route to the generated song/player after success.

Quality risks:
- Empty title resolves to literal `Untitled` when better title can be derived.
- Music generation succeeds but save/mirror fails silently.
- Cover art failure aborts valid audio generation.

#### 6.2 Restyle mode
- Reference source options:
  - Pick local file (`mp3`, `wav`, `flac`, etc.).
  - Record now (mic or tab audio).
  - Use saved voice clips.
  - Use songs from JULI3TA library.
  - Load streamed YouTube/library track.
  - Drag/drop a saved track payload.
- Reference sample strategy:
  - `best`: one compact gateway-safe sample.
  - `mix`: 2–3 iconic segments stitched with crossfades.
- New fast path: streamed YouTube/library restyle should call server-side `/api/music/reference-sample?videoId=...&durationSec=14` first.
- Browser fallback: `buildCoverSample()` / `buildIconicMix()` if server fast cut unavailable.
- Progress surfaces:
  - Top status bar with percent.
  - Reference audio card mini progress.
  - Generate button disabled with `Analyzing audio…` while sample not ready.
- MiniMax cover endpoint handoff: send compact WAV base64 via `audio_base64`, not full original track.
- Optional lyrics: if user leaves lyrics blank, cover model may infer from reference; if user supplies lyrics, enforce max cover lyrics length.
- Instrumental restyle toggle.
- Reference preview control shows exact compact sample sent to cover endpoint.
- After Restyle generation, generated result should save as `(restyle)` and player should show A/B compare.

Quality risks:
- 413 if payload sends full/too-large audio.
- 0-second reference preview if compact sample metadata invalid.
- Restyle quality bad if sample is silence, intro-only, or wrong segment.
- Server fast-cut endpoint missing on older tray: fallback must work and be visible.
- Main Restyle clicked before sample ready.

#### 6.3 Lyrics mode
- Generate/save lyrics only; no audio generation.
- Lyrics form/template/spec constraints still apply.
- Saved lyric track visible under My Work > Lyrics.
- Open lyrics in editor / mirror to VFS.

Quality risks:
- Lyrics-only track shown as playable song.
- Instrumental toggle appears where it should be hidden.

### 7. AI helper buttons
- Surprise: auto-fills starter idea.
- Inspire: generates theme from style/reference context.
- Suggest: generates style from theme.
- Polish: improves lyrics while preserving section markers.
- AI Optimize: fills Track Specs JSON from current theme/style/lyrics.
- Cover generation/edit prompt: generate album art from title/theme/style or user prompt.
- Each helper has its own busy state and abort controller.
- Main Generate blocks while helper/spec/cover tasks are active to freeze submitted snapshot.

Quality risks:
- Helper sends unsupported params to a provider and exposes raw provider error.
- Clicking helper A then helper B aborts wrong task.
- Helper output overwrites user edits made after request started.

### 8. Genre palette + Track Specs
- 19 genre families and ~219 chips.
- Search genres and Browse all.
- Track specs collapsible panel.
- Structured controls include at least: genre/style tags, mood/vibe, tempo, key, energy, vocal profile, instruments, production, structure/song form, arrangement/sections.
- Track specs compile into music prompt suffix and into lyrics/songwriter constraints.
- AI Optimize returns validated JSON and patches specs.

Quality risks:
- Invalid spec values leak into prompt.
- Large specs prompt blows provider context/request limits.
- Genre search chips create duplicate style text.

### 9. Recording + local audio handling
- Inline recorder: mic or tab audio.
- Chrome tab audio flow must request video + audio then drop video track.
- Saved voice recordings can be reused as Restyle reference.
- Direct file upload uses browser decoding and compact reference WAV encoding.
- Unsupported browser codecs fall back to compatibility capture.

Quality risks:
- Permission denial not explained.
- MediaRecorder unsupported state crashes flow.
- Compatibility capture can feel slow without progress.

### 10. Persistence + files
- SQLite app tables from manifest:
  - `tracks`
  - `settings`
  - `voice-recordings`
  - `music-library`
  - `music-playlists`
- Legacy localStorage drain/migration.
- Tray-backed host library sync under the user music area.
- VFS mirroring for generated `.mp3` and `.lyrics.txt`.
- Open generated lyrics/audio in Files/editor/player.
- Delete/rename track stays consistent between gallery, player, VFS, and host library.

Quality risks:
- Duplicate tracks after migration.
- Rename updates gallery but not player/current selection.
- Delete leaves orphaned audio file or selected stale track.

### 11. Error, loading, and recovery UX
- Unified status band for generation phases and reference extraction.
- Dismissible errors for gateway/music/gallery.
- Cancel during active generation.
- Button disabled states reflect actual blockers.
- Page refresh/reopen restores selected track/sidebar filters enough to continue.

Quality risks:
- Silent failures; user sees idle state with no song.
- Endless spinner if stale async task finishes after newer task.
- Error says HTTP/raw HTML instead of actionable message.

## Use-case simulation matrix

| ID | Scenario | Steps | Expected result | Code/runtime focus |
|---|---|---|---|---|
| U01 | Compose normal song | Theme + style + optional title → Generate | Lyrics then music generated, saved, notification shown, playable in Player | `generate()`, `callLyrics()`, `callMusic()`, `saveTrack()` |
| U02 | Compose instrumental | Instrumental on, no lyrics | Skips lyrics, generates audio, no vocal requirement | `instrumental`, prompt assembly |
| U03 | Lyrics only | Select Lyrics mode → generate | Saves lyric-only item, no audio player requirement | `mode === 'lyricsOnly'` |
| U04 | Restyle from YouTube library | Search/select YouTube track → Restyle | Server fast reference cut created, progress visible, Generate enabled after sample ready | `/api/music/reference-sample`, `loadTrack()`, `ingestSourceAudio()` |
| U05 | Restyle from local MP3 | Pick file → wait sample → Generate | Browser compact sample, preview works, cover endpoint gets compact base64 | `buildCoverSample()` |
| U06 | Restyle from generated song | My Work song → edit/restyle | Uses saved audio, produces `(restyle)`, A/B compare appears | `loadTrack()`, `lastRestyleOriginal` |
| U07 | Reference sample not ready | Click Restyle while analyzing | Button disabled or shows `Analyzing audio…`; no API POST sent | primary button blocker |
| U08 | 413 prevention | Long source track restyle | Request stays below gateway body cap; no full-song base64 sent | compact WAV size, `/music/generations` payload |
| U09 | Helper concurrency | Click Inspire then Suggest/AI Optimize | Independent helpers do not abort each other incorrectly; main Generate blocks while helpers active | `AiAssistTask`, `beginAiTask()` |
| U10 | Bad chat model 400 | Force incompatible MiniMax chat alias | Fallback tries next model; no raw unsupported-param error if alternatives exist | `callAssist()` candidate loop |
| U11 | Tunnel down | Disable/lose gateway | Clear degraded/offline state, no infinite retry loop | daemon/gateway state |
| U12 | Remote stream first play | Search result → play immediately | One stream resolve, metadata preload, audio starts without full download | `getMusicStream()`, `/api/music/proxy` range |
| U13 | Player persistence | Set repeat/shuffle/speed/volume → refresh | Settings restored | localStorage keys |
| U14 | Delete selected track | Play then delete | Player clears or moves safely; no broken selected id | gallery/player state |
| U15 | Voice recording reference | Record tab/mic → use as Restyle ref | Saved voice clip selectable and decodable | recorder + voice repo |
| U16 | Cover art helper | Generate/edit cover prompt | Art appears when successful; failure does not block audio | cover task |
| U17 | App reinstall/upgrade | Installed stale JULI3TA row | Upgrades to current manifest URL/tag without duplicate launcher | dynamic loader + cleanup |
| U18 | CDN install | Install from immutable manifest URL | Full UI loads; no missing assets/CORS errors | `tytus-app.json`, CDN |

## Code review checklist

### `src/apps/MusicCreator.tsx`
- Check every async path for stale-result guard or abort handling.
- Check every API POST for payload size, provider compatibility, and fallback semantics.
- Check every visible button disabled state against actual blocker state.
- Check `generate()` success and failure paths for user-visible feedback.
- Check mode transitions clear stale state: Song ↔ Restyle ↔ Lyrics.
- Check loaded track path for YouTube vs generated/local tracks.
- Check drag/drop payload handling and `hasPlayableAudio()`.

### `src/lib/coverSample.ts`
- Verify compact WAV size stays under common 1 MiB JSON body caps after base64.
- Verify server fast-cut fallback does not bypass browser fallback.
- Verify no full streamed song decode happens when `videoId` fast-cut path is available.
- Verify zero/silent/too-short audio errors are clear.

### `src/lib/musicDaemon.ts`
- Verify `/api/music/search`, `/api/music/stream`, `/api/music/proxy`, `/api/music/reference-sample` compatibility.
- Verify request failures return structured errors and do not poison caches.

### Tytus tray
- `tray/src/music_ytdlp.rs`: validate yt-dlp/ffmpeg subprocess args, no shell injection, timeout risk, start/duration clamps.
- `tray/src/music_proxy.rs`: validate proxy allowlist and Range forwarding.
- `tray/src/web_server.rs`: verify JSON shapes and error codes.

### Release surfaces
- Standalone repo tag must match `package.json`, `package-lock.json`, `tytus-app.json`, `APP_VERSION`.
- TytusOS fallback/current pin must match the intended published tag.
- Catalog `featured.json` must pin immutable manifest URL after quality pass.
- jsDelivr CDN must be purged/verified after tag push.

## Online/live QA plan

### Local runtime smoke
1. Open `http://localhost:4242/`.
2. Confirm status: connected, tunnel active, pods visible.
3. Open JULI3TA.
4. Run U01, U03, U04, U06, U09, U12 minimum before any release.
5. Watch DevTools Console + Network for:
   - no raw 400 model error after fallback;
   - no 413 on Restyle;
   - no repeated duplicate `/api/music/stream` for same id;
   - `/api/music/reference-sample` returns compact base64 for YouTube Restyle.

### API probes
```bash
PORT=$(cat /tmp/tytus/tray-web.port 2>/dev/null || echo 4242)
curl -fsS "http://127.0.0.1:$PORT/api/state"
curl -fsS "http://127.0.0.1:$PORT/api/music/search?q=Space%20Oddity&limit=3"
curl -fsS "http://127.0.0.1:$PORT/api/music/stream?videoId=iYYRH4apXDo"
curl -fsS "http://127.0.0.1:$PORT/api/music/reference-sample?videoId=iYYRH4apXDo&durationSec=14" -o /tmp/juli3ta-ref.json
```

### CDN/public smoke after release tag exists
```bash
curl -I "https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@juli3ta-0.3.16/tytus-app.json"
curl -I "https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@juli3ta-0.3.16/dist/index.js"
curl -fsS "https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@juli3ta-0.3.16/tytus-app.json" | jq .version
```

## Acceptance gates for this quality sprint
- [ ] Feature inventory reviewed against source.
- [ ] All use cases U01–U18 executed or explicitly marked blocked with reason.
- [ ] `npm run typecheck` passes in standalone JULI3TA.
- [ ] `npm run build` passes in standalone JULI3TA.
- [ ] `npm run typecheck` passes in TytusOS app/monorepo scope.
- [ ] `npm run build` passes in TytusOS app/monorepo scope.
- [ ] `cargo check -p tytus-tray` passes.
- [ ] `cargo build -p tytus-tray --release` passes after vendored OS dist is synced.
- [ ] Local `http://localhost:4242/` serves the expected new bundle.
- [ ] `/api/music/reference-sample` live probe returns RIFF WAV base64 for a known YouTube id.
- [ ] Manual browser QA captures screenshots/notes for Restyle preparation progress and successful generated result.
- [ ] Release/tag/catalog/CDN verification completed only after QA pass.

## Current known blockers / watch items
- Browser automation via CDP was not available in the previous run, so manual/visible Chrome QA or fixing CDP connection may be required for screenshots.
- TytusOS build emits an existing CSS minify warning (`Expected identifier but found "-"`) unrelated to JULI3TA; should be tracked separately if it affects UI.
- The new server-side fast-cut endpoint depends on `ffmpeg` being available on the tray host. Browser fallback exists, but quality sprint must verify the no-ffmpeg path still produces clear progress and does not break Restyle.
- Public CDN `0.3.16` will not work until the standalone repo is committed, tagged, pushed, and jsDelivr sees the tag.

## Sprint execution order
1. Freeze release target: finish local code changes, no opportunistic UI redesign.
2. Re-sync standalone and TytusOS copies.
3. Run static gates.
4. Run API probes.
5. Run manual/browser use cases feature by feature.
6. Fix only verified blockers.
7. Commit/tag/push standalone, TytusOS, tray, and catalog in correct order.
8. Verify CDN and local installed app.
9. Write final QA report with pass/fail per use case.

## Live baseline captured — 2026-05-11 09:20 Europe/Berlin

Local Tytus app was rebuilt and restarted for this audit.

| Probe | Result |
|---|---|
| Local URL | `http://127.0.0.1:4242/` up |
| `/api/state` | `connected=true`, `daemon_running=true`, `tunnel_active=true`, `daemon_version=0.6.14` |
| Served bundle | `assets/index-CBa77vfI.js` |
| Bundle evidence | contains `APP_VERSION=0.3.16` and `/api/music/reference-sample` client path |
| Search probe | `/api/music/search?q=Space%20Oddity&limit=3` returned 3 YouTube results; first `iYYRH4apXDo` |
| Reference sample probe | `/api/music/reference-sample?videoId=iYYRH4apXDo&durationSec=14` returned RIFF WAV base64 |
| Reference sample timing | `5.18s` wall time on local tray for Space Oddity |
| Reference sample payload | `durationSec=14.0`, `startSec=160.8`, `sourceDurationSec=305.0`, `wavBytes=672078` |
| Public CDN `0.3.16` | `404` for manifest and bundle until tag is committed/pushed/published |

Implication: local app is ready for feature-by-feature QA. Public online release is intentionally not ready until QA passes and `juli3ta-0.3.16` is tagged/pushed plus catalog pin updated.

---

## Final Sprint Execution Notes — 2026-05-11

- Released standalone JULI3TA `0.3.17` after live model probing showed `deepseek/ail-fast`, `ail-fast`, and `ail-balanced` returned `reasoning_content` with empty `content` for chat-assist prompts.
- Chat helpers now rank `minimax/ail-compound-minimax` and `minimax/ail-balanced` first and skip known-bad `minimax/ail-compound` / bare `ail-compound-minimax` aliases.
- Tray reference sample endpoint verified on `http://127.0.0.1:4242/api/music/reference-sample?videoId=iYYRH4apXDo&durationSec=14`:
  - returns HTTP 200
  - emits RIFF/WAVE
  - `durationSec=14.0`
  - `startSec=160.75`
  - `sourceDurationSec=305.0`
  - payload bytes after base64 decode: `672078`
  - wall-clock after final rebuild: about `4.0s`
- Local TytusOS served rebuilt bundle `assets/index-DFKY7psf.js`.
- CDN verification passed for:
  - `https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@juli3ta-0.3.17/tytus-app.json`
  - `https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@juli3ta-0.3.17/dist/index.js`


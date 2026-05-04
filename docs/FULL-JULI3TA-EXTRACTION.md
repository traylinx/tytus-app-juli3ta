# Full JULI3TA extraction plan

Hard rule: do not publish this standalone app to the public catalog until it renders the same full JULI3TA UI as `tytus-os/app/src/apps/MusicCreator.tsx`, sees existing tracks through an explicit migration/bridge, and passes host install smoke.

## Strategy

Use a compatibility extraction, not a rewrite.

1. Copy the real `MusicCreator.tsx` and direct dependencies into this repo.
2. Provide shell-compatibility adapters for the legacy hooks over `AppBootEnv.host`.
3. Keep table/data migration explicit and reversible.
4. Publish only under a new non-public tag until parity is verified.
5. Only then add to `tytus-app-catalog` and hide/retire legacy in Tytus OS.

## Gates

- `npm run typecheck`
- `npm run build`
- Manual host smoke at `localhost:4242`: open standalone from install URL and compare against legacy UI.
- Data gate: legacy app still shows all tracks; standalone either reads migrated copies or shows a migration CTA. Empty library is a blocker.

## 2026-05-04 G2/G3 smoke result

Status: PASS for dev-tag standalone smoke. Not public-catalog promoted yet.

- Dev CDN manifest: `https://cdn.jsdelivr.net/gh/traylinx/tytus-app-juli3ta@full-extract-0.2.1-dev/tytus-app.json`
- Dev tag: `full-extract-0.2.1-dev`
- Smoked code commit/tag target: `ace2a41`
- Documentation commit after smoke: `7d17c24`
- Host: `http://localhost:4242` via Chrome CDP temp profile `/tmp/chrome-cdp-juli3ta`
- Install path: `installAppFromManifestUrl()` against the real Tytus OS OPFS DB.
- Render result: standalone installed app `juli3ta` opens full copied JULI3TA UI.
- Data result: gallery shows `14 tracks` from `/api/juli3ta/library/tracks`.
- Cache result: app-owned SQLite table `app_juli3ta_music_creator_tracks` backfilled to `14` rows.
- Error surface: no `[data-testid*=error]` loader/app errors after open.
- Screenshot evidence: `/Users/sebastian/MAKAKOO/data/reports/juli3ta-standalone-g2-smoke.png`

Important: legacy in-tree `musiccreator` remains active. Do not add `juli3ta` to the public catalog until launcher dedupe/retirement is implemented, otherwise users can see two JULI3TA entries during transition.

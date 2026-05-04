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

# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** static portfolio site (`output: "export"`) using **pnpm** as the package manager (version pinned in `packageManager` field of `package.json`).

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js Dev Server | `pnpm dev` | 3000 | Only service needed; no backend/database |

### Key commands

See `package.json` `scripts` section. Summary:

- **Dev**: `pnpm dev`
- **Lint**: `pnpm lint` (ESLint 9 flat config in `eslint.config.mjs`)
- **Build**: `pnpm build` (static export to `out/`)
- **Prettier**: `npx prettier --check .` (config in `.prettierrc`)

### Non-obvious notes

- The pnpm install may warn about ignored build scripts for `msw`, `sharp`, and `unrs-resolver`. These are safe to ignore; the project uses `images: { unoptimized: true }` so `sharp` is not needed at runtime.
- No `.env` files or environment variables are required. All content is in `src/translations/settings.json`.
- No automated tests exist in the repo (`pnpm test` is not defined).
- The build produces a fully static site in `out/` — no Node.js server needed in production.

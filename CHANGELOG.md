# Changelog


## 2026-02-22

### npm Trusted Publishing & Node 24

Replaced token-based npm publishing with OIDC Trusted Publishing. Upgraded CI/CD from Node 20 to Node 24.

- **ci.yml:** Node 20 → 24
- **release.yml:** Node 20 → 24, added `registry-url: https://registry.npmjs.org` for OIDC auth
- **Created `.nvmrc`** pinning Node 24 for local dev consistency
- **Rewrote `docs/CICD-PIPELINE.md`** — removed `NPM_TOKEN` references, added Trusted Publishing setup guide
- **Updated prerequisites** in README.md and CONTRIBUTING.md (Node 20+ → 24+)
- **No `NPM_TOKEN` secret needed** — authentication via GitHub OIDC (`id-token: write` was already configured)
- **One-time manual step required:** Configure Trusted Publishers on npmjs.com for each package (see docs/CICD-PIPELINE.md)

---

## 2026-02-21

### Package Architecture: 8 → 3 Packages

Strategic pruning of npm package inventory. Deleted 5 packages with zero usage across the entire codebase:

- **Deleted:** `@thesage/utils` (placeholder), `@thesage/core` (duplicated by @thesage/ui), `@thesage/hooks` (zero imports), `@thesage/charts` (zero imports)
- **Absorbed:** `@thesage/config` Tailwind preset moved into `packages/ui/tailwind/index.js`
- **Charts section** on thesage.dev now uses local component wrapper + direct recharts imports
- **Remaining:** `@thesage/ui`, `@thesage/tokens`, `@thesage/mcp`

---

## 2026-02-17

### Speedboat Theme (Phase 1)

- **New Theme: Speedboat** — 4th theme added to the design system, mapping SDE's CSS variable architecture to Moloco's Speedboat V2 design tokens.
  - Light mode uses exact Figma-extracted values: accent `#346BEA`, Moloco grey scale, semantic colors (success, warning, error, info).
  - Dark mode derived with appropriate contrast adjustments for all token categories.
  - Typography: Montserrat (headings, 700 weight) + Roboto (body, 400 weight) — matching Moloco brand guidelines.
  - Full token coverage: 37 color properties, 4 blur levels, 5 shadow levels, motion easing, and typography scale.
- **Speedboat is Moloco-internal only.** The theme tokens ship in `@thesage/tokens` as inert data, but Speedboat never appears in any UI unless a consumer explicitly opts in:
  - `CustomizerPanel` defaults to public themes only (Studio, Terra, Volt). Pass `themes={['speedboat']}` to show it.
  - `ThemeProvider` accepts `defaultTheme="speedboat"` to set it on first load.
  - Sage Studio docs site does not expose Speedboat in any theme selector or typography preview.
  - Speedboat removed from the curated `fontThemes` library.
- **New exports:** `PUBLIC_THEME_NAMES` constant and `PublicThemeName` type for consumers that need to iterate only public themes.
- **ThemeProvider enhancements:**
  - Added `defaultTheme` and `defaultMode` props — sets initial theme on first load without overriding persisted user preferences.
  - Added 9 missing CSS variable mappings (`--color-card`, `--color-popover`, `--color-muted`, `--color-destructive`, `--color-input`, and their foreground variants) — benefits all themes.
- **CustomizerPanel enhancements:**
  - Added `themes` prop to control which themes are visible. Defaults to `PUBLIC_THEME_NAMES`.
  - Single-element array (e.g. `['speedboat']`) hides the theme selector entirely, locking to that theme.

### Earlier on 2026-02-17

- **Tailwind v4 Upgrade**: fully migrated to Tailwind CSS v4.0.0 with @tailwindcss/postcss.
- **Visual Verification**: Verified runtime theme switching (Studio, Terra, Volt) and light/dark modes.
- **Clean Up**: Removed deprecated tailwind.config.ts/js files in favor of CSS-native @theme configuration.
- **Utility Updates**: Renamed utilities (shadow-sm -> shadow-xs, rounded-sm -> rounded-xs) to match v4 defaults.
- **Documentation**: Fixed 404 error on "Design Tokens > Foundations" page in Sage Studio.


- Updated all GitHub URLs from `shalomormsby/ecosystem` to `shalomormsby/sage-design-engine` across 32 files
  - Package READMEs (`ui`, `mcp`, `tokens`, `config`, `hooks`, `charts`)
  - Package `.claude/CLAUDE.md` AI context
  - MCP server source (`packages/mcp/src/index.ts` — GitHub link in `get_component` output)
  - Studio app components, layouts, error pages, and navigation
  - Public assets: `llms.txt`, `llms-full.txt`, `ai-plugin.json`, `mcp-server.json`
  - Internal docs: `CLI_COMMANDS.md`, `SAGE_DESIGN_SYSTEM_STRATEGY.md`, `TYPOGRAPHY_SYSTEM_DOCUMENTATION.md`
- Redacted hardcoded local paths (`/Users/shalomormsby/...`) from `plan-to-improve-sde-to-a-plus.md` and `SAGE_DESIGN_SYSTEM_STRATEGY.md`
- Removed portfolio app reference from `plan-to-improve-sde-to-a-plus.md`
- Added `CONTRIBUTING.md` — development guidelines, code standards, and contribution workflow
- Added `.github/PULL_REQUEST_TEMPLATE.md` — checklist for accessibility, theming, and build verification

## 2026-02-16

- Initial repository creation — extracted Sage Design Engine from ecosystem monorepo
- 92 components across 11 functional categories
- 8 published packages: `@thesage/ui`, `@thesage/tokens`, `@thesage/hooks`, `@thesage/charts`, `@thesage/core`, `@thesage/mcp`, `@thesage/utils`, `@thesage/config`
- 3 themes (Studio, Terra, Volt) with light/dark modes
- User-controlled motion system (0-10 scale)
- 156 tests across 30 test files
- CI/CD pipeline with lint, typecheck, test, and size checks
- Sage Studio interactive documentation (thesage.dev)

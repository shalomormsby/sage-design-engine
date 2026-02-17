# Changelog


## 2026-02-17

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

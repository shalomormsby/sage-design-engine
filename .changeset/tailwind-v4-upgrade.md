---
"@thesage/ui": minor
---

Migrate to Tailwind CSS v4.0.0. Fix documentation 404 for Design Tokens Foundations page.

### Features
- **Tailwind v4 Upgrade**: fully migrated to Tailwind CSS v4.0.0 with @tailwindcss/postcss.
- **Visual Verification**: Verified runtime theme switching (Studio, Terra, Volt) and light/dark modes.
- **Clean Up**: Removed deprecated tailwind.config.ts/js files in favor of CSS-native @theme configuration.
- **Utility Updates**: Renamed utilities (shadow-sm -> shadow-xs, rounded-sm -> rounded-xs) to match v4 defaults.

### Bug Fixes
- **Documentation**: Fixed 404 error on "Design Tokens > Foundations" page in Sage Studio.

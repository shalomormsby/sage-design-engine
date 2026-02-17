# @thesage/tokens

Design tokens for the Sage Design Engine — the foundation layer that defines colors, typography, spacing, motion curves, and syntax highlighting across three themes.

[![npm version](https://img.shields.io/npm/v/@thesage/tokens?style=flat-square)](https://www.npmjs.com/package/@thesage/tokens)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why a separate package?

Tokens are **design decisions as code**. They serve audiences beyond React components — CSS-only projects, native apps, Figma plugins, or anyone building their own component layer on top of Sage's design language. Install `@thesage/tokens` for just the values, or get them bundled with components via `@thesage/ui/tokens`.

## Installation

```bash
npm install @thesage/tokens
# or
pnpm add @thesage/tokens
```

If you're already using `@thesage/ui`, tokens are re-exported via the `@thesage/ui/tokens` subpath — no separate install needed.

## Usage

### Theme tokens

Each theme exports a complete set of design values for light and dark modes:

```ts
import { studioTokens, terraTokens, voltTokens } from '@thesage/tokens'

const primary = studioTokens.light.colors.primary
const heading = terraTokens.dark.colors.foreground
```

### Typography system

```ts
import { typographySystem } from '@thesage/tokens'

// Access size scales (xs through 8xl), font stacks, and type presets
const bodySize = typographySystem.sizes.base
```

### Font themes

```ts
import { fontThemes } from '@thesage/tokens'

// 10+ curated font combinations with Google Fonts integration
const editorial = fontThemes.editorial // { heading, body, mono, bestFor }
```

### Color utilities

Generate accessible color scales from a single hex value:

```ts
import { hexToHSL, generateColorScale } from '@thesage/tokens'

const hsl = hexToHSL('#3b82f6')           // "217 91% 60%"
const scale = generateColorScale('#3b82f6') // Full 50-950 scale
```

### Color palettes

Pre-built palettes with light/dark mode support:

```ts
import { colorPalettes } from '@thesage/tokens'
```

### Syntax highlighting

14 token types for code highlighting, theme-aware:

```ts
import { syntaxTokens } from '@thesage/tokens'
```

### Type helpers

```ts
import type { ThemeName, ColorMode, ThemeConfig } from '@thesage/tokens'

const config: ThemeConfig = { name: 'studio', mode: 'dark' }
```

## Themes

| Theme | Personality | Colors |
|-------|------------|--------|
| **Studio** | Professional, balanced | Cool blues, grays |
| **Terra** | Calm, organic | Earth tones, sage greens |
| **Volt** | Bold, electric | Electric blues, cyans |

All themes include WCAG AA compliant color combinations.

## Exports

| Export | Description |
|--------|-------------|
| `studioTokens`, `terraTokens`, `voltTokens` | Complete theme token sets |
| `typographySystem` | Size scales, font stacks, presets |
| `fontThemes` | Curated font combinations |
| `colorPalettes` | Pre-built color palettes |
| `syntaxTokens` | Syntax highlighting tokens |
| `hexToHSL`, `generateColorScale` | Color conversion utilities |
| `tokenGraph` | Token dependency graph |
| `ThemeName`, `ColorMode`, `ThemeConfig` | TypeScript types |
| `THEME_NAMES`, `COLOR_MODES` | Runtime constants |

## License

MIT

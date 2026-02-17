# @thesage/config

Shared Tailwind CSS configuration presets for the Sage Design Engine. Ensures consistent styling across all packages and consumer apps.

[![npm version](https://img.shields.io/npm/v/@thesage/config?style=flat-square)](https://www.npmjs.com/package/@thesage/config)

## Installation

Typically installed as a `devDependency`:

```bash
pnpm add -D @thesage/config
```

## Usage

### Tailwind CSS

Add the preset to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@thesage/config/tailwind')
  ],
  content: [
    "./node_modules/@thesage/ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
}
```

This gives you pre-configured colors, typography, animations, and border radii that match the Sage Design Engine's token system.

## License

MIT

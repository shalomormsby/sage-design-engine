/**
 * Design Tokens Exports
 */

export * from './base';
export * from './studio';
export * from './terra';
export * from './volt';
export * from './speedboat';
export * from './typography';
export * from './syntax';
export * from './color-palettes';
export * from './color-utils';
export * from './token-graph';
export * from './fontThemes';

/**
 * Theme names
 */
export const THEME_NAMES = ['studio', 'terra', 'volt', 'speedboat'] as const;
export type ThemeName = typeof THEME_NAMES[number];

/**
 * Public theme names (excludes internal/partner themes like Speedboat)
 * Use this for consumer-facing UI where only public themes should appear.
 */
export const PUBLIC_THEME_NAMES = ['studio', 'terra', 'volt'] as const;
export type PublicThemeName = typeof PUBLIC_THEME_NAMES[number];

/**
 * Color modes
 */
export const COLOR_MODES = ['light', 'dark'] as const;
export type ColorMode = typeof COLOR_MODES[number];

/**
 * Theme configuration type
 */
export interface ThemeConfig {
  name: ThemeName;
  mode: ColorMode;
}

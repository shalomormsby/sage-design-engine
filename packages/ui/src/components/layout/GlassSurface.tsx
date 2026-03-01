import type { CSSProperties, ReactNode, Ref } from 'react'

export type GlassThickness = 'ultrathin' | 'thin' | 'medium' | 'thick' | 'ultrathick'

/** 0 = pure white, 9 = pure black. 10 even steps. */
export type GlassTint = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

const TINT_COLORS: Record<GlassTint, string> = {
  0: '255, 255, 255',
  1: '227, 227, 227',
  2: '200, 200, 200',
  3: '170, 170, 170',
  4: '142, 142, 142',
  5: '128, 128, 128',
  6: '113, 113, 113',
  7: '85, 85, 85',
  8: '57, 57, 57',
  9: '0, 0, 0',
}

export interface GlassSurfaceProps {
  /** Whether the frosted glass effect is active (background + shadow). */
  active?: boolean
  /** Shadow direction: 'top' casts downward, 'bottom' casts upward. */
  position?: 'top' | 'bottom'
  /** Glass opacity tier (default 'thin').
   *  ultrathin 28% → thin 38% → medium 48% → thick 58% → ultrathick 68%. */
  thickness?: GlassThickness
  /** Glass fill color for light mode: 0 = white, 9 = black (default 2). */
  tint?: GlassTint
  /** Glass fill color for dark mode. Defaults to `9 - tint` (auto-invert). */
  darkTint?: GlassTint
  className?: string
  style?: CSSProperties
  children: ReactNode
  ref?: Ref<HTMLDivElement>
}

/**
 * Liquid glass surface with five thickness tiers and a 10-step tint scale.
 *
 * `backdrop-filter: blur(20px) saturate(180%)` provides the frosted
 * blur; `thickness` controls opacity; `tint` controls the fill color
 * from pure white (0) through neutral gray to pure black (9).
 */
export function GlassSurface({
  active = true,
  position = 'top',
  thickness = 'thin',
  tint = 2,
  darkTint,
  className,
  style,
  children,
  ref,
}: GlassSurfaceProps) {
  const resolvedDarkTint = darkTint ?? (9 - tint) as GlassTint

  const classes = [
    'glass-surface',
    position === 'top' ? 'glass-surface--top' : 'glass-surface--bottom',
    `glass-surface--${thickness}`,
    active && 'glass-surface--active',
    className,
  ].filter(Boolean).join(' ')

  const inlineStyles: CSSProperties = {
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    ...(active ? {
      '--glass-tint-light': TINT_COLORS[tint],
      '--glass-tint-dark': TINT_COLORS[resolvedDarkTint],
    } as CSSProperties : undefined),
    ...style,
  }

  return (
    <div ref={ref} className={classes} style={inlineStyles}>
      {children}
    </div>
  )
}

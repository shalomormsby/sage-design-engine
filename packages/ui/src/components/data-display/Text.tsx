import React from 'react';

export interface TextProps {
  /**
   * Text content
   */
  children: React.ReactNode;

  /**
   * Semantic variant determines both color and meaning
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'muted';

  /**
   * Text size
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';

  /**
   * Font weight
   * @default 'normal'
   */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';

  /**
   * HTML element to render as
   * @default 'p'
   */
  as?: 'p' | 'span' | 'div' | 'label' | 'time';

  /**
   * Additional className for customization
   */
  className?: string;
}

/**
 * Text Component
 *
 * Semantic text with automatic token-based styling.
 * No need to manually apply CSS variable text color classes.
 *
 * **What it handles automatically:**
 * - Theme-aware text colors
 * - Semantic color variants (primary, secondary, muted)
 * - Consistent sizing
 * - Dark mode support
 *
 * **Variants:**
 * - `primary`: Main content text (`--color-text-primary`)
 * - `secondary`: Supporting text (`--color-text-secondary`)
 * - `muted`: De-emphasized text (`--color-text-muted`)
 *
 * Usage:
 * ```tsx
 * // Primary content text
 * <Text>Main paragraph content</Text>
 *
 * // Secondary supporting text
 * <Text variant="secondary">Helper text or description</Text>
 *
 * // Muted text (least emphasis)
 * <Text variant="muted">Footnote or metadata</Text>
 *
 * // Different sizes
 * <Text size="lg">Large text</Text>
 * <Text size="sm">Small text</Text>
 *
 * // As different element
 * <Text as="span">Inline text</Text>
 * <Text as="label">Form label</Text>
 * ```
 */
export const Text: React.FC<TextProps & { ref?: React.Ref<HTMLElement> }> = (
  {
    ref,
    children,
    variant = 'primary',
    size = 'base',
    weight = 'normal',
    as: Component = 'p',
    className = ''
  }: TextProps & {
    ref?: React.Ref<HTMLElement>;
  }
) => {
  const variantStyles = {
    primary: 'text-[var(--color-text-primary)]',
    secondary: 'text-[var(--color-text-secondary)]',
    muted: 'text-[var(--color-text-muted)]',
  };

  const variantInlineStyles: Record<string, React.CSSProperties> = {
    primary: { color: 'var(--color-text-primary, #212121)' },
    secondary: { color: 'var(--color-text-secondary, #5D5D5D)' },
    muted: { color: 'var(--color-text-muted, #8891A7)' },
  };

  const sizeStyles = {
    xs: 'text-xs',    // 12px
    sm: 'text-sm',    // 14px
    base: 'text-base', // 16px
    lg: 'text-lg',    // 18px
    xl: 'text-xl',    // 20px
  };

  const sizeInlineStyles: Record<string, React.CSSProperties> = {
    xs: { fontSize: '0.75rem', lineHeight: String(1 / 0.75) },
    sm: { fontSize: '0.875rem', lineHeight: String(1.25 / 0.875) },
    base: { fontSize: '1rem', lineHeight: '1.5' },
    lg: { fontSize: '1.125rem', lineHeight: String(1.75 / 1.125) },
    xl: { fontSize: '1.25rem', lineHeight: String(1.75 / 1.25) },
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const weightInlineStyles: Record<string, React.CSSProperties> = {
    normal: { fontWeight: 400 },
    medium: { fontWeight: 500 },
    semibold: { fontWeight: 600 },
    bold: { fontWeight: 700 },
  };

  return React.createElement(
    Component,
    {
      ref,
      className: `${variantStyles[variant]} ${sizeStyles[size]} ${weightStyles[weight]} ${className}`,
      style: {
        ...variantInlineStyles[variant],
        ...sizeInlineStyles[size],
        ...weightInlineStyles[weight],
      },
    },
    children
  );
};

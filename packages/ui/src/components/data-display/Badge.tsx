import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
                // Semantic variants from original design system
                success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
                warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
                error: "border-transparent bg-error text-error-foreground hover:bg-error/80",
                info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
            },
            size: {
                sm: "px-2 py-0.5 text-xs",
                md: "px-2.5 py-1 text-sm",
                lg: "px-3 py-1.5 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    dot?: boolean;
}

function Badge({ className, variant, size, dot, children, style, ...props }: BadgeProps & { style?: React.CSSProperties }) {
    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { padding: '0.125rem 0.5rem', fontSize: 'var(--text-xs, 0.75rem)' },
        md: { padding: '0.25rem 0.625rem', fontSize: 'var(--text-sm, 0.875rem)' },
        lg: { padding: '0.375rem 0.75rem', fontSize: '1rem' },
    };
    const variantStyles: Record<string, React.CSSProperties> = {
        default: { backgroundColor: 'var(--color-primary, #346BEA)', color: 'var(--color-primary-foreground, #ffffff)', borderColor: 'transparent' },
        secondary: { backgroundColor: 'var(--color-secondary, #EBF0FD)', color: 'var(--color-secondary-foreground, #1E49AA)', borderColor: 'transparent' },
        destructive: { backgroundColor: 'var(--color-destructive, #C62828)', color: 'var(--color-destructive-foreground, #ffffff)', borderColor: 'transparent' },
        outline: { color: 'var(--color-foreground, #212121)' },
        success: { backgroundColor: 'var(--color-success, #2E7D32)', color: 'var(--color-success-foreground, #ffffff)', borderColor: 'transparent' },
        warning: { backgroundColor: 'var(--color-warning, #E65100)', color: 'var(--color-warning-foreground, #ffffff)', borderColor: 'transparent' },
        error: { backgroundColor: 'var(--color-error, #C62828)', color: 'var(--color-error-foreground, #ffffff)', borderColor: 'transparent' },
        info: { backgroundColor: 'var(--color-info, #346BEA)', color: 'var(--color-info-foreground, #ffffff)', borderColor: 'transparent' },
    };
    return (
        <div
            className={cn(badgeVariants({ variant, size }), className)}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '9999px',
                fontWeight: 600,
                ...sizeStyles[size || 'md'],
                ...variantStyles[variant || 'default'],
                ...style,
            }}
            {...props}
        >
            {dot && (
                <span className={cn(
                    "mr-1.5 rounded-full bg-current animate-pulse",
                    size === 'sm' ? "w-1.5 h-1.5" :
                        size === 'lg' ? "w-2.5 h-2.5" : "w-2 h-2"
                )} aria-hidden="true" />
            )}
            {children}
        </div>
    )
}

export { Badge, badgeVariants }

import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = (
    {
        ref,
        className,
        type,
        style,
        ...props
    }: InputProps & {
        ref?: React.Ref<HTMLInputElement>;
    }
) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            style={{
                height: '2.25rem',
                width: '100%',
                border: '1px solid var(--color-input, #DFDFDF)',
                borderRadius: 'var(--radius-md, 0.375rem)',
                padding: '0.25rem 0.75rem',
                fontSize: 'var(--text-sm, 0.875rem)',
                backgroundColor: 'transparent',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                outline: 'none',
                ...style,
            }}
            ref={ref}
            {...props}
        />
    )
}

export { Input }

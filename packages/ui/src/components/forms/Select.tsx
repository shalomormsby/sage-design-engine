"use client";
import * as React from "react"
import type {
    ComponentPropsWithoutRef,
    ElementRef,
} from "react"
import {
    Root,
    Group,
    Value,
    Trigger,
    Content,
    Label,
    Item,
    ItemText,
    ItemIndicator,
    Separator as SelectSeparator,
    ScrollUpButton,
    ScrollDownButton,
    Viewport,
    Portal,
    Icon as SelectIcon,
} from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "../../lib/utils"
import { Label as FormLabel } from "./Label"

const Select = Root

const SelectGroup = Group

const SelectValue = Value

const SelectTrigger = (
    {
        ref,
        className,
        children,
        style,
        label,
        labelClassName,
        ...props
    }: ComponentPropsWithoutRef<typeof Trigger> & {
        ref?: React.Ref<ElementRef<typeof Trigger>>;
        /** Optional text label rendered above the trigger. */
        label?: string;
        /** Override classes on the label. */
        labelClassName?: string;
    }
) => {
    const trigger = (
        <Trigger
            ref={ref}
            className={cn(
                "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                className
            )}
            style={{
                height: '2.25rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid var(--color-input, #DFDFDF)',
                borderRadius: 'var(--radius-md, 0.375rem)',
                padding: '0.5rem 0.75rem',
                fontSize: 'var(--text-sm, 0.875rem)',
                backgroundColor: 'transparent',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                outline: 'none',
                ...style,
            }}
            {...props}
        >
            {children}
            <SelectIcon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectIcon>
        </Trigger>
    )

    if (!label) return trigger

    return (
        <div>
            <FormLabel className={cn("text-xs font-medium text-muted-foreground", labelClassName)}>
                {label}
            </FormLabel>
            {trigger}
        </div>
    )
}

const SelectScrollUpButton = (
    {
        ref,
        className,
        ...props
    }: ComponentPropsWithoutRef<typeof ScrollUpButton> & {
        ref?: React.Ref<ElementRef<typeof ScrollUpButton>>;
    }
) => (<ScrollUpButton
    ref={ref}
    className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
    )}
    {...props}
>
    <ChevronUp className="h-4 w-4" />
</ScrollUpButton>)

const SelectScrollDownButton = (
    {
        ref,
        className,
        ...props
    }: ComponentPropsWithoutRef<typeof ScrollDownButton> & {
        ref?: React.Ref<ElementRef<typeof ScrollDownButton>>;
    }
) => (<ScrollDownButton
    ref={ref}
    className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
    )}
    {...props}
>
    <ChevronDown className="h-4 w-4" />
</ScrollDownButton>)

const SelectContent = (
    {
        ref,
        className,
        children,
        position = "popper",
        style,
        ...props
    }: ComponentPropsWithoutRef<typeof Content> & {
        ref?: React.Ref<ElementRef<typeof Content>>;
    }
) => (<Portal>
    <Content
        ref={ref}
        className={cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className
        )}
        style={style}
        position={position}
        {...props}
    >
        <div
            style={{
                backgroundColor: 'var(--color-popover, #ffffff)',
                color: 'var(--color-popover-foreground, #0a0a0a)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--color-border, #d4d4d4)',
                borderRadius: 'var(--radius, 0.5rem)',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                overflow: 'hidden',
            }}
        >
            <SelectScrollUpButton />
            <Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
                style={{
                    padding: '0.25rem',
                }}
            >
                {children}
            </Viewport>
            <SelectScrollDownButton />
        </div>
    </Content>
</Portal>)

const SelectLabel = (
    {
        ref,
        className,
        ...props
    }: ComponentPropsWithoutRef<typeof Label> & {
        ref?: React.Ref<ElementRef<typeof Label>>;
    }
) => (<Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
/>)

const SelectItem = (
    {
        ref,
        className,
        children,
        ...props
    }: ComponentPropsWithoutRef<typeof Item> & {
        ref?: React.Ref<ElementRef<typeof Item>>;
    }
) => (<Item
    ref={ref}
    className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-xs py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
    )}
    style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'var(--radius-sm, 0.125rem)',
        padding: '0.375rem 2rem 0.375rem 0.5rem',
        fontSize: 'var(--text-sm, 0.875rem)',
        outline: 'none',
    }}
    {...props}
>
    <span
        className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
        style={{
            position: 'absolute',
            right: '0.5rem',
            display: 'flex',
            height: '0.875rem',
            width: '0.875rem',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <ItemIndicator>
            <Check className="h-4 w-4" style={{ height: '1rem', width: '1rem' }} />
        </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
</Item>)

const SelectSeparatorComp = (
    {
        ref,
        className,
        ...props
    }: ComponentPropsWithoutRef<typeof SelectSeparator> & {
        ref?: React.Ref<ElementRef<typeof SelectSeparator>>;
    }
) => (<SelectSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
/>)

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparatorComp as SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
}

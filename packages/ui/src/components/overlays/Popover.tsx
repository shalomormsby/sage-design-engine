"use client";
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../../lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = (
  {
    ref,
    className,
    align = "center",
    sideOffset = 4,
    style,
    ...props
  }: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    ref?: React.Ref<React.ElementRef<typeof PopoverPrimitive.Content>>;
  }
) => (<PopoverPrimitive.Portal>
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    style={{
      backgroundColor: 'var(--color-popover, #ffffff)',
      color: 'var(--color-popover-foreground, #0a0a0a)',
      border: '1px solid var(--color-border, #d4d4d4)',
      borderRadius: 'var(--radius, 0.5rem)',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      zIndex: 50,
      ...style,
    }}
    {...props}
  />
</PopoverPrimitive.Portal>)

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

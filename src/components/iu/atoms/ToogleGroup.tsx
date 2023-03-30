'use client'
import * as ToogleGroupPrimitive from '@radix-ui/react-toggle-group'

import * as React from 'react'
import { cn } from '@/lib/utils'


const ToggleGroup = ToogleGroupPrimitive.Root;

const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof ToogleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToogleGroupPrimitive.Item> & {
        inset?: boolean
    }
>(({ className, inset, ...props }, ref) => (
    <ToogleGroupPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex cursor-default text-base md:text-sm select-none items-center rounded-sm py-1.5 px-2 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-light-aside',
            inset && 'pl-8',
            className
        )}
        {...props}
    />
))
ToggleGroupItem.displayName = ToogleGroupPrimitive.Item.displayName

export {
    ToggleGroup,
    ToggleGroupItem
}
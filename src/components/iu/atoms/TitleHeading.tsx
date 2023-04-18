import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const headingVariants = cva(
    'text-light-text-main-color dark:text-dark-text-main-color leading-[1.5]',
    {
        variants: {
            size: {
                default: 'text-base md:text-lg lg:text-xl',
                md: 'text-sm md:text-base lg:text-lg font-light',
                sm: 'text-xs md:text-sm lg:text-base font-extralight',
            },
        },
        defaultVariants: {
            size: 'default',
        },

    }
)

interface TitleProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> { }

const TitleHeading = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({ className, size, children, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                {...props}
                className={cn(headingVariants({ size, className }), '')}>
                {children}
            </h1>
        )
    }
)

TitleHeading.displayName = 'TitleHeading'

export default TitleHeading
import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const paragraphVariants = cva(
    'max-w-prose mb-2',
    {
        variants: {
            state: {
                default: 'text-light-text-main-color dark:text-dark-text-main-color',
                error: 'text-red-500 dark:text-red-300'
            },
            size: {
                default: 'text-base sm:text-xl',
                sm: 'text-sm sm:text-base',
                xs: 'text-xs sm:text-sm',
            },
        },
        defaultVariants: {
            state: 'default',
            size: 'default',
        },

    }
)

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> { }

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, state, size, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                {...props}
                className={cn(paragraphVariants({ state, size, className }))}            >
                {children}
            </p>
        )
    }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
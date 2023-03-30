'use client';
import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react'
import Icons from '@/ui/molecules/Icons'
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';



const ActiveLinkIconVariants = cva(
    'inline-flex items-center justify-center text-sm font-medium transition-colors  disabled:opacity-50  disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default:
                    'flex items-center justify-center flex-0  text-light-text-main-color dark:text-dark-text-main-color',
                active:
                    'flex items-center justify-center rounded-lg flex-0 text-dark-text-main-color dark:text-dark-text-main-color ',
            },
            size: {
                default: 'w-4 h-4 rounded-lg ',
                md: 'w-5 h-5 rounded-lg',
                lg: 'w-9 h-9 rounded-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
)



const ActiveLinkVariants = cva(
    'flex flex-0 items-center justify-center transition-colors  disabled:opacity-50  disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default:
                    'hover:bg-light-secondary dark:hover:bg-dark-secondary text-light-text-main-color dark:text-dark-text-main-color',
                active:
                    'bg-light-primary text-dark-text-main-color dark:text-light-text-main-color',
            },
            size: {
                default: 'w-7 h-7 rounded-xl ',
                md: 'w-10 h-10 rounded-xl',
                lg: 'w-12 h-12 rounded-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    }
)


interface IconProps extends Partial<React.SVGProps<SVGSVGElement>>,
    VariantProps<typeof ActiveLinkIconVariants> {
    name: keyof typeof Icons
}

const ActiveLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, variant, size, name, ...props }, ref) => {
        const Icon = Icons[name]

        if (!Icon) {
            return null
        }

        return (
            <div className={cn(ActiveLinkVariants({ variant, size, className }), 'text-sm')}>
                <Icon
                    className={cn(ActiveLinkIconVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}>

                </Icon>
            </div>
        )
    }
);

ActiveLinkIcon.displayName = 'Button'


const LinkVariants = cva(
    'grid items-center justify-center grid-flow-col text-center md:grid-flow-col md:gap-4 md:justify-start md:mx-2 md:pl-2 md:pr-4 md:rounded-lg',
    {
        variants: {
            variant: {
                default:
                    '',
                active:
                    'dark:md:bg-dark-primary',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

interface ActiveLinkProps {
    name: string
    root: string
    iconName: keyof typeof Icons
}

const ActiveLink: FC<ActiveLinkProps> = ({ name, root, iconName }) => {
    const fullpathname = usePathname()
    const pathname = fullpathname.split('/')[1]
    const compara = root.split('/')[1]

    const isActive = pathname == compara
    const variant = isActive ? 'active' : 'default'

    return (
        <Link
            key={`aside-btn-${name}`}
            href={root}
            className={cn(LinkVariants({ variant }), 'h-[70px] h-max-[75px] ')}
        >
            <ActiveLinkIcon name={iconName} variant={variant} />
            <div className="hidden text-left md:inline-block md:w-[60px] lg:w-[85px]">{name}</div>
            {isActive ?
                <div className='pr-4 justify-endj'>
                    <div className='hidden dark:md:hidden md:inline-block w-[8px] h-[8px] rounded-full bg-light-primary'></div>
                    <ActiveLinkIcon className='hidden text-white dark:md:inline-block' name='ArrowRight' size='default' />
                </div>
                : null}
        </Link>)
}

export default ActiveLink

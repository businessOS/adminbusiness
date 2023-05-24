'use client'
/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react'

const lineVariants = cva(
    ' w-1 h-full mt-1 pointer-events-none bg-gray-300 dark:bg-gray-800',
    {
        variants: {
            variant: {
                default: '',
                focus: '',
                complete: 'bg-gray-800',
                disable: ''
            },
        },
    }
)

const imageVariants = cva(
    'relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-gray-300  rounded-full',
    {
        variants: {
            variant: {
                default: 'text-gray-500 bg-indigo-300',
                focus: 'p-2 mt-2 text-gray-500 bg-indigo-300 ring-offset-2 ring-1 ring-indigo-800 dark:ring-gray-500',
                complete: 'text-white bg-indigo-800 w-11 h-11',
                disable: 'text-gray-400 bg-gray-300 dark:text-gray-600 dark:bg-gray-700',
            },
        }
    }
)

const textVariants = cva(
    'mb-1 text-sm  tracking-wider md:text-base',
    {
        variants: {
            variant: {
                default: 'font-light text-gray-400 md:font-medium',
                focus: 'font-extrabold text-base md:text-lg text-light-text-main-color dark:text-dark-text-main-color ',
                complete: 'text-light-text-main-color dark:text-dark-text-main-color',
                disable: 'font-light text-gray-500 md:font-medium',
            },
        }
    }
)

const stateVariants = cva(
    '',
    {
        variants: {
            variant: {
                default:
                    '',
                md:
                    '',
                sm:
                    '',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface MultiStepsProps extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageVariants> {
    aSteps?: ISteps[]
}

const MultiSteps = forwardRef<HTMLDivElement, MultiStepsProps>(
    ({ className, variant, aSteps, ...props }, ref) => {
        // create a error if there is not almost 2 stepts
        if (!aSteps || aSteps?.length < 2)
            throw new Error("Is needed almost 2 steps to create the wizard component [MultiSteps component]");

        return (
            <div className="flex flex-col mt-1 ml-4 md:mt-12 h-[95%] overflow-hidden text-gray-400 md:pr-10 md:py-6 w-h-full body-font  ">
                {
                    aSteps.map((step, index) => (
                        <div className={cn("relative flex pl-2 pb-6 md:pb-12 max-h-24 md:max-h-28 overflow-hidden")} key={`step-${step.title}-${index}`} >
                            <div className="absolute inset-0 flex items-center justify-center h-full top-1 w-14 ">
                                {index < aSteps.length - 1 && <div className={cn(lineVariants({ variant: step.state }))}></div>}
                            </div>
                            <div className={cn(imageVariants({ variant: step.state }))}>
                                {step.icon}
                            </div>
                            <div className={index === 0 ? "relative ml-4 mt-[-2px] flex-0 " : index === 1 ? "relative ml-4 mt-[1px] flex-0 " : "relative ml-4 mt-[-2px] flex-0 "}>
                                <h2 className={cn(textVariants({ variant: step.state }))}>{step.title}</h2>
                                <p className={cn(textVariants({ variant: step.state }), 'text-xs md:text-xs')}>{step.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
)

MultiSteps.displayName = 'MultiSteps'

export default MultiSteps


/*
<div className="flex flex-col m-2 h-[95%] overflow-hidden text-gray-400 md:pr-10 md:py-6 w-h-full body-font">
            <div className="relative flex pb-12 max-h-32" >
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div className="pl-4 flex-0 ">
                    <h2 className="mb-1 font-medium tracking-wider text-white title-font">STEP 1</h2>
                    <p className="font-light leading-relaxed ">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
            </div>
            <div className="relative flex pb-12 max-h-28">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4 ">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-white title-font">STEP 2</h2>
                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                </div>
            </div>
            <div className="relative flex pb-12 max-h-28">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="mb-1 text-sm font-medium tracking-wider text-white title-font">STEP 3</h2>
                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                </div>
            </div>
            <div className="relative flex pb-12 max-h-28">
                <div className="absolute inset-0 flex items-center justify-center w-10 h-full">
                    <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="pl-4 flex-0 ">
                    <h2 className="mb-1 font-medium tracking-wider text-white title-font">STEP 2</h2>
                    <p className="font-light leading-relaxed ">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
            </div>
            <div className="relative flex pb-12 max-h-28">
                <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                </div>
                <div className="pl-4 flex-0 ">
                    <h2 className="mb-1 font-medium tracking-wider text-white title-font">STEP 3</h2>
                    <p className="font-light leading-relaxed ">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                </div>
            </div>
        </div>
*/
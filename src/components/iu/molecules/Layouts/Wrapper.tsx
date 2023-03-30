import { FC, ReactNode } from 'react'
import { ThemeToggle } from '@/ui/molecules/ThemeToggle'
import LanguageToggle from '@/ui/molecules/LanguageToggle'
import { cn } from '@/lib/utils'

import { Inter } from 'next/font/google'
import Aside from '@/ui/molecules/Aside'
import NavBar from '@/ui/molecules/NavBar'

const inter = Inter({ subsets: ['latin'] })

interface MainWrapProps {
    children: ReactNode
}

const Wrapper: FC<MainWrapProps> = ({ children }) => {
    return (
        <div className={cn('relative flex flex-col min-h-screen px-3 pt-1 pb-4 sm:pt-3 sm:pb-9 sm:px-5 text-light-text-main-color dark:text-dark-text-main-color', inter.className)}>
            <div className='flex justify-end gap-4 pb-2 pr-2 align-middle basis-full'>
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <div className='flex flex-col-reverse flex-1 gap-4 p-4 overflow-hidden rounded-md shadow-2xl md:flex-row bg-light-main shadow-slate-950 dark:bg-dark-main sm:border-8 sm:rounded-xl sm:border-light-aside dark:sm:border-dark-text-secondary-color'>
                <Aside />
                <div className='flex-grow'>
                    <NavBar />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper
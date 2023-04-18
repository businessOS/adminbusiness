import { FC, ReactNode } from 'react'
import { ThemeToggle } from '@/ui/molecules/ThemeToggle'
import LanguageToggle from '@/ui/molecules/LanguageToggle'
import { cn } from '@/lib/utils'

import Aside from '@/components/iu/molecules/Aside/Aside'
import NavBar from '@/ui/molecules/NavBar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/auth'

import { useUserStore } from "@/components/store/userStore"
import UserStoreInitializer from '@/components/store/userStoreInitializer'

const Wrapper = async ({ children, lang }: { children: ReactNode, lang: string; }) => {
    const session = await getServerSession(authOptions)
    const showMenu = session && session?.user.isSetup

    useUserStore.setState(
        {
            name: session?.user.name,
            image: session?.user.image,
            email: session?.user.email,
            role: session?.user.role,
            description: session?.user.description,
            currentCompany: session?.user.currentCompany,
        }
    )

    return (
        <div className={cn('relative flex flex-col min-h-device my-4 px-3 pt-1 pb-4 sm:pt-3 sm:pb-9 sm:px-5 text-light-text-main-color dark:text-dark-text-main-color')}>
            <UserStoreInitializer
                name={session?.user.name}
                image={session?.user.image}
                email={session?.user.email}
                description=''
            />
            <div className='flex justify-end gap-4 pb-2 pr-2 align-middle flex-0'>
                <ThemeToggle />
                <LanguageToggle />
            </div>
            {/* the user is logged in show private menu */}
            {showMenu &&
                <div className={cn('flex flex-col-reverse flex-1 gap-4  overflow-hidden rounded-md shadow-2xl md:flex-row bg-light-main shadow-slate-950 dark:bg-dark-main sm:border-8 sm:rounded-xl sm:border-light-border dark:sm:border-dark-border')}>
                    < Aside lang={lang} />
                    <div className='flex-grow'>
                        {showMenu && <NavBar lang={lang} />}
                        {children}
                    </div>
                </div>
            }
            {/* is the user is not logged the children component will handle his own layout */}
            {!showMenu && children}
        </div >
    )
}

export default Wrapper
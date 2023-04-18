import Link from 'next/link'
import { FC } from 'react'

import UserAuthForm from '@/ui/molecules/UserAuthForm'
import LargeHeading from '@/ui/atoms/LargeHeading'
import { buttonVariants } from '@/ui/atoms/Button'
import Paragraph from '@/ui/atoms/Paragraph'
import Icons from '@/ui/molecules/Icons'


const page: FC = () => {
    return (
        <>
            <aside className='flex flex-1 md:flex-initial md:w-1/2 lg:w-1/3 bg-light-aside dark:bg-dark-aside rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl'>
            </aside>
            <div className='flex flex-1 w-full h-full m-auto border-1 border-slate-400' >
                <div className='flex flex-col justify-center w-full max-w-lg m-auto space-y-6 border-1 border-slate-900'>
                    <div className='flex flex-col items-center gap-6 text-center border-pink-400 border-1'>
                        <LargeHeading>Welcome back!</LargeHeading>
                        <Paragraph>Please sign in using your Google account.</Paragraph>
                    </div>
                    <UserAuthForm />
                </div >
            </div >
        </>
    )
}

export default page
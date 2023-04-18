import { FC } from "react"
import { configureASteps } from './assets/steps'
import { cn } from "@/lib/utils"
import MultiSteps from '@/ui/molecules/MultiSteps/MultiSteps'
import RadioCards from "@/ui/atoms/RadioCards"
import { configureRadioButtoms } from "./assets/radiobuttoms"
import Paragraph from "@/components/iu/atoms/Paragraph"


export const metadata = {
    title: 'Business - Settings - Setup',
    description: "Configure role and user's profiles",
    icons: 'favicon.ico'
}

const page: FC = ({ }) => {
    return (
        <div className='flex flex-col-reverse flex-1 overflow-hidden rounded-md shadow-2xl md:flex-row bg-light-main shadow-slate-950 dark:bg-dark-main sm:border-8 sm:rounded-xl sm:border-light-border dark:sm:border-dark-border'>
            <aside className={cn('flex flex-col md:m-4 md:flex-initial md:w-1/3 lg:w-1/4 bg-light-aside dark:bg-dark-aside rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl')}>
                <MultiSteps aSteps={configureASteps} />
            </aside>

            <div className="flex flex-col flex-grow mx-4 my-4 border-2 dark:border-gray-800">
                <div className="flex flex-col flex-grow mx-auto md:max-w-5xl lg:max-w-6xl">
                    <Paragraph className='p-4 m-0 text-center'>Welcome, we need to finish some steps to configure your software</Paragraph>
                    <RadioCards className='p-4 m-0 md:m-2 ' buttoms={configureRadioButtoms} name={'usuario'} />
                </div>
            </div>
        </div>
    )
}

export default page
import { FC } from "react"
import { configureASteps } from './assets/steps'
import { cn } from "@/lib/utils"
import MultiSteps from '@/ui/molecules/MultiSteps/MultiSteps'

import RadioCards from "@/ui/atoms/RadioCards"
import { roleRadioButtoms } from "./assets/radiobuttoms"
import Paragraph from "@/components/iu/atoms/Paragraph"
import { DashboardHeader } from "@/ui/atoms/Header"
import { DashboardShell } from "@/ui/atoms/shell"
import RoleForm from "./components/RoleForm"
import { Button } from "@/components/iu/atoms/Button"


export const metadata = {
    title: 'Business - Settings - Setup',
    description: "Configure role and user's profiles",
    icons: 'favicon.ico'
}

const page = ({ }) => {
    return (
        <div className='flex flex-col-reverse flex-1 overflow-hidden rounded-md shadow-2xl md:flex-row bg-light-main shadow-slate-950 dark:bg-dark-main sm:border-8 sm:rounded-xl sm:border-light-border dark:sm:border-dark-border'>
            <aside className={cn('flex flex-col m-4 mt-0 md:mt-4 md:flex-initial md:w-1/3 lg:w-1/4 bg-light-aside dark:bg-dark-aside rounded-bl-xl rounded-br-xl md:rounded-none md:rounded-s-xl')}>
                <MultiSteps aSteps={configureASteps} />
            </aside>

            <div className="flex flex-col flex-0 md:flex-grow md:max-h-[85vh]  mx-4 my-4 border-0 md:border-2 dark:border-gray-800 overflow-auto">
                <div className="flex-grow max-h-[50vh] md:max-h-full mx-4 scroll-smooth scrollbar-thumb-rounded-full scrollbar-track-rounded-fulls scrollbar-thin scrollbar-thumb-light-aside dark:scrollbar-thumb-dark-aside overflow-y-auto hover:scrollbar-thumb-black">
                    {/* @ts-expect-error Server Component */}
                    <RoleForm aSteps={configureASteps} />
                </div>
            </div>
        </div>
    )
}

export default page



/**
 * 
 type Subscription {
  active  String
  expires DateTime
  token   String
}

* 
type Address {
  city     String
  country  String
  dir      String
  number   String
  postCode String
  state    String
  street   String
}

type Phone {
  main   Int
  office String
  mobile String
  fax    String
}
 
 type perfil {
  id                 String       @id @default(auto()) @map("_id") @db.ObjectId
  userId             String       @db.ObjectId
  partition          String       @unique @map("_partition")
  username           String       @default("")
  isSetup            Boolean      @default(false)
  role               String       @default("none")
  canReadPartitions  String[]
  canWritePartitions String[]
  address            Address
  phones             Phone
  description        String       @default("")
  subscription       Subscription  
 }

type User {
  id            String     @id @default(auto()) @map("_id") @db.ObjectId
  name          String?    @default("")
  email         String?    @unique
  emailVerified DateTime?
  image         String?    @map("picture")
  apiKey        ApiKey[]
  apiKeyId      String?
}

 */
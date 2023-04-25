import { DashboardHeader } from '@/ui/atoms/Header'
import { DashboardShell } from '@/ui/atoms/shell'
import { FC } from 'react'
import NavButtoms from './NavButtoms'

interface ProfileFormProps {

}

const ProfileForm: FC<ProfileFormProps> = ({ }) => {
    return (
        <DashboardShell>
            <DashboardHeader
                heading="Profile"
                text="Personal data needed to start to work with the solutions."
            />
            <div className="grid gap-4 md:gap-6 lg:gap-8 ">

                <NavButtoms />
            </div>
        </DashboardShell>


    )
}

export default ProfileForm
import { InputForm } from '@/ui/atoms/forms/InputForm'
import { DashboardHeader } from '@/ui/atoms/Header'
import { DashboardShell } from '@/ui/atoms/shell'
import { Card } from '@/ui/atoms/card'

import { FC } from 'react'
import { cn } from '@/lib/utils'
import NavButtoms from './NavButtoms'


interface CompanyComponentStepProps {
    className?: string
}

const CompanyComponentStep: FC<CompanyComponentStepProps> = ({ className }) => {
    const validate = () => {
        return false
    }


    return (
        <DashboardShell className={cn('max-w-[90rem] max-h-[70vh]', className)}>
            <DashboardHeader
                heading="Company"
                text="Let build our first company."
            />
            <div className="grid gap-4 md:gap-6 lg:gap-8 ">
                <Card>
                    <Card.Content className='flex flex-wrap gap-0 pt-4 pb-10 basis-auto'>
                        <div className='flex flex-wrap w-full gap-0 px-6 pt-4 mr-0 md:mr-4 basis-auto'>
                            <InputForm tabIndex={0} label='Fiscal Identification' name='NIF' disabled={true} />
                        </div>
                    </Card.Content>
                </Card>

                <NavButtoms validate={validate} />
            </div>
        </DashboardShell>
    )
}

export default CompanyComponentStep
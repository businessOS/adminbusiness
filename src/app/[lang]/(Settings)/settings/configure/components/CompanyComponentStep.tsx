import { InputForm } from '@/ui/atoms/forms/InputForm'
import { DashboardHeader } from '@/ui/atoms/Header'
import { DashboardShell } from '@/ui/atoms/shell'
import { Card } from '@/ui/atoms/card'

import { FC } from 'react'
import { cn } from '@/lib/utils'
import NavButtoms from './NavButtoms'
import Avatar from '@/components/iu/atoms/Avatar'
import { validateConfigureStore } from '@/interfaces/configure/configureStore'


interface CompanyComponentStepProps {
    className?: string
}

const CompanyComponentStep: FC<CompanyComponentStepProps> = ({ className }) => {
    const validate = () => {
        return validateConfigureStore({

        }, 'company')
    }

    return (
        <DashboardShell className={cn('max-w-[90rem] max-h-[70vh]', className)}>
            <DashboardHeader
                heading="Company"
                text="Let build our first company."
            />
            <div className="grid gap-4 md:gap-6 lg:gap-8 ">
                <Card>
                    <Card.Content className='flex flex-wrap gap-0 pt-4 pb-10 '>
                        <div className='flex flex-wrap w-full gap-0 px-6 pt-4 mr-0 md:mr-4 basis-auto'>
                            <InputForm tabIndex={34} label='Fiscal Identification' name='NIF' />
                            <InputForm tabIndex={35} label='Name' name='name' />
                            <InputForm tabIndex={36} label='Description' name='description' />
                            <InputForm tabIndex={37} label='Group by' name='groupBy' />
                            <InputForm tabIndex={38} label='Organization' name='Organization' />
                            <InputForm tabIndex={39} label='State' name='state' required />
                            <InputForm tabIndex={40} label='City' name='city' required />
                            <InputForm tabIndex={41} label='Number' name='number' required />
                            <InputForm tabIndex={42} label='Postcode' name='postCode' required />
                            <InputForm tabIndex={43} label='Address' name='dir' required />
                            <InputForm tabIndex={44} label='Office' name='office' type='tel' />
                            <InputForm tabIndex={45} label='Mobile' name='mobile' required type='tel' />
                        </div>
                    </Card.Content>
                </Card>

                <NavButtoms validate={validate} />
            </div>
        </DashboardShell>
    )
}

export default CompanyComponentStep

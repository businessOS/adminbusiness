'use client'
import { DashboardHeader } from '@/components/iu/atoms/Header'
import RadioCards from '@/components/iu/atoms/RadioCards'
import { DashboardShell } from '@/components/iu/atoms/shell'

import { roleRadioButtoms } from '../assets/radiobuttoms'
import { BillingForm } from './billing-form'

import { useConfigureStore } from '@/components/store/configureStore'

import NavButtoms from './NavButtoms'
import { UserSubscriptionPlan } from "@/types/types.d"
import { cn } from '@/lib/utils'
import { CompanyStepoPos } from '../assets/steps'

interface RoleFormProps extends React.HTMLAttributes<HTMLDivElement> {
  subscriptionPlan: UserSubscriptionPlan & {
    isCanceled: boolean
  }
  aSteps: ISteps[]
  className?: string
}

const RoleForm = ({ subscriptionPlan, aSteps, ...props }: RoleFormProps) => {

  const store = useConfigureStore()
  const updateStep = store.updateStep

  const validate = () => {
    return !!store.role
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!!e.target.id)
      useConfigureStore.setState(() => ({ role: e.target.id }))

    if (updateStep) {
      const stepTitle = store.steps[CompanyStepoPos].title
      const stateValue = e.target.id === 'company' ? 'default' : 'disable'
      console.log(`step: ${stepTitle} state:${stateValue}`)

      updateStep(stepTitle, stateValue)
    }

  }

  return (
    <DashboardShell className={cn('max-w-[90rem] max-h-[70vh]', props.className)}>
      <DashboardHeader
        heading="Role"
        text="Manage Role, billing and your subscription plan."
      />
      <div className="grid gap-4 md:gap-6 lg:gap-8 ">
        {/* client componenct */}
        <RadioCards
          title='User type'
          description='Diferents role in the companies'
          className='m-0' buttoms={roleRadioButtoms}
          name={'role'}
          value={store.role}
          onChange={onChange}
        />
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
          }}
        />
        <NavButtoms validate={validate} />
      </div>
    </DashboardShell>
  )
}

export default RoleForm

'use client'
import { DashboardHeader } from '@/components/iu/atoms/Header'
import RadioCards from '@/components/iu/atoms/RadioCards'
import { DashboardShell } from '@/components/iu/atoms/shell'

import { roleRadioButtoms } from '../assets/radiobuttoms'
import { BillingForm } from './billing-form'

import { useConfigureStore } from '@/components/store/configureStore'

import { api } from "@/utils/api";


import { stripe } from "@/lib/stripe"
import NavButtoms from './NavButtoms'

interface RoleFormProps {
  aSteps: ISteps[]
}

const RoleForm = ({ aSteps }: RoleFormProps) => {

  const store = useConfigureStore()

  let isCanceled = false
  const { data: subscriptionPlan, isLoading, isError } = api.subscription.getUserPlan.useQuery(
    undefined, // no input
    {
      onSuccess: async (data) => {
        if (data?.isPro && data.stripeSubscriptionId) {
          const stripePlan = await stripe.subscriptions.retrieve(data.stripeSubscriptionId)
          isCanceled = stripePlan.cancel_at_period_end
        }

      },
    }
  );
  // If user has a pro plan, check cancel status on Stripe.

  if (isLoading || isError) return null



  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useConfigureStore.setState((state) => ({ role: e.target.id }))
  }

  console.log('role', useConfigureStore.getState().role)
  return (
    <DashboardShell>
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
            isCanceled,
          }}
        />
        <NavButtoms />
      </div>
    </DashboardShell>
  )
}

export default RoleForm

import { DashboardHeader } from '@/components/iu/atoms/Header'
import RadioCards from '@/components/iu/atoms/RadioCards'
import { DashboardShell } from '@/components/iu/atoms/shell'

import { roleRadioButtoms } from '../assets/radiobuttoms'
import { BillingForm } from './billing-form'
import { Card } from '@/components/iu/atoms/card'


import { authOptions } from "@/lib/auth/auth"
import { getCurrentUser } from "@/lib/auth/session"

import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import NavButtoms from './NavButtoms'

interface RoleFormProps {
  aSteps: ISteps[]
}

const RoleForm = async ({ aSteps }: RoleFormProps) => {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro && subscriptionPlan.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    )
    isCanceled = stripePlan.cancel_at_period_end
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Role"
        text="Manage Role, billing and your subscription plan."
      />
      <div className="grid gap-4 md:gap-6 lg:gap-8 ">
        <RadioCards
          title='User type'
          description='Diferents role in the companies'
          className='m-0' buttoms={roleRadioButtoms}
          name={'role'}
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

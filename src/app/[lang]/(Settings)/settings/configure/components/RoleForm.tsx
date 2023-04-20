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
      <div className="grid gap-1 md:gap-4">
        <RadioCards className='m-0' buttoms={roleRadioButtoms} name={'role'} />
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled,
          }}
        />
        <Card className={cn('hidden mb-4 md:mb-0 md:block')}>
          <Card.Header>
            <Card.Title>Note</Card.Title>
          </Card.Header>
          <Card.Content className="pb-6 space-y-4 text-sm">
            <p>
              Admin Manager app is a demo app using a Stripe test environment.{" "}
              <strong>
                You can test the upgrade and won&apos;t be charged.
              </strong>
            </p>
            <p>
              You can find a list of test card numbers on the{" "}
              <a
                href="https://stripe.com/docs/testing#cards"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-8"
              >
                Stripe docs
              </a>
              .
            </p>
          </Card.Content>
        </Card>
      </div>
    </DashboardShell>
  )
}

export default RoleForm

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
"use client"

import * as React from "react"
import { toast } from '@/ui/atoms/toast'

import { UserSubscriptionPlan } from "@/types/types.d"
import { cn, formatDate } from "@/lib/utils"
import { Icons } from '@/ui/molecules/Icons'
import { buttonVariants } from "@/ui/atoms/Button"
import { Card } from "@/ui/atoms/card"

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
    subscriptionPlan: UserSubscriptionPlan & {
        isCanceled: boolean
    }
}

export function BillingForm({
    subscriptionPlan,
    className,
    ...props
}: BillingFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(!isLoading)

        // Get a Stripe session URL.
        const response = await fetch("/api/users/stripe")

        if (!response?.ok) {
            return toast({
                title: "Something went wrong.",
                message: "Please refresh the page and try again.",
                type: 'default'
            })
        }

        // Redirect to the Stripe session.
        // This could be a checkout page for initial upgrade.
        // Or portal to manage existing subscription.
        const session = await response.json()
        if (session) {
            window.location.href = session.url
        }
    }

    return (
        <form className={cn(className)} onSubmit={onSubmit} {...props}>
            <Card>
                <Card.Header>
                    <Card.Title>Plan</Card.Title>
                    <Card.Description>
                        You are currently on the <strong>{subscriptionPlan.name}</strong>{" "}
                        plan.
                    </Card.Description>
                </Card.Header>
                <Card.Content className='text-sm md:text-base'>{subscriptionPlan.description}</Card.Content>
                <Card.Footer className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
                    <button
                        type="submit"
                        className={cn(buttonVariants())}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        {subscriptionPlan.isPro ? "Manage Subscription" : "Upgrade to PRO"}
                    </button>
                    {subscriptionPlan.isPro ? (
                        <p className="text-xs font-medium rounded-full">
                            {subscriptionPlan.isCanceled
                                ? "Your plan will be canceled on "
                                : "Your plan renews on "}
                            {formatDate(subscriptionPlan.stripeCurrentPeriodEnd)}.
                        </p>
                    ) : null}
                </Card.Footer>
            </Card>
        </form>
    )
}
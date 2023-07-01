'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useConfigureStore } from '@/interfaces/configure/configureStore'
import { configureASteps } from '../assets/steps'
import ProfileForm from './ProfileForm'
import RoleForm from './RoleForm'


import { UserSubscriptionPlan } from "@/models/types"
import { api } from "@/utils/api";
import { stripe } from "@/lib/stripe"
import CompanyComponentStep from './CompanyComponentStep'

interface FormComponentProps {
    children?: ReactNode
}

const FormComponent: FC<FormComponentProps> = ({ children }) => {
    const store = useConfigureStore()

    let isCanceled = false
    const { data: subscriptionPlan, isLoading, isError } = api.subscription.getUserPlan.useQuery(
        undefined, // no input
        {
            onSuccess: async (data: UserSubscriptionPlan) => {
                if (data?.isPro && data.stripeSubscriptionId) {
                    console.log('fetch sucess')
                    const stripePlan = await stripe.subscriptions.retrieve(data.stripeSubscriptionId)
                    isCanceled = stripePlan.cancel_at_period_end
                }
            },

        }
    );
    // If user has a pro plan, check cancel status on Stripe.

    if (isLoading || isError) return null

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //event.preventDefault()
        const newData = new FormData(event.currentTarget)
        const payLoad = Object.fromEntries(newData)
    }

    return <form onSubmit={handleOnSubmit} autoFocus>
        <RoleForm className={store.pageNumber === 0 ? 'visible' : 'hidden'} subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled
        }} aSteps={configureASteps} />
        <ProfileForm className={store.pageNumber === 1 ? 'visible' : 'hidden'} />
        <CompanyComponentStep className={store.pageNumber === 2 ? 'visible' : 'hidden'} />
    </form>
}

export default FormComponent

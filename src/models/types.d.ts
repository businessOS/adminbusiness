import { ReactNode } from 'react';

// FIX React Server Component Issues with Typescript
declare global {
    namespace JSX {
        type ElementType =
            | keyof JSX.IntrinsicElements
            | ((props: any) => Promise<ReactNode> | ReactNode);
    }
}

export type SubscriptionPlan = {
    name: string
    description: string
    stripePriceId: string | null
}

export type UserSubscriptionPlan = SubscriptionPlan &
    Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
        stripeCurrentPeriodEnd: number
        isPro: boolean
    }
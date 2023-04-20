import { SubscriptionPlan } from "@/types/types"

export const freePlan: SubscriptionPlan = {
    name: "Free",
    description:
        "The free plan is limited to 3 products. Upgrade to the PRO plan for unlimited products.",
    stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
    name: "PRO",
    description: "The PRO plan has unlimited products.",
    stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}

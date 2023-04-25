import { z } from "zod";
import { freePlan, proPlan } from "@/config/subscriptions"
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { UserSubscriptionPlan } from "@/types/types"

export const subscriptionRouter = createTRPCRouter({
    getUserPlan: protectedProcedure
        .query(async ({ ctx }) => {
            const user = await ctx.prisma.user.findFirst({
                where: {
                    id: ctx.session.user.id,
                },
                select: {
                    stripeSubscriptionId: true,
                    stripeCurrentPeriodEnd: true,
                    stripeCustomerId: true,
                    stripePriceId: true,
                },
            })
            if (!user) {
                throw new Error("User not found")
            }

            // Check if user is on a pro plan.
            const isPro: boolean =
                !!user.stripePriceId &&
                (user.stripeCurrentPeriodEnd?.getTime() || 0) + 86_400_000 > Date.now()

            const plan = isPro ? proPlan : freePlan

            const retVal: UserSubscriptionPlan = {
                ...plan,
                ...user,
                stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime() || 0,
                isPro,
            }
            return retVal as UserSubscriptionPlan
        }),

});

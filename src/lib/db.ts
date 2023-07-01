import { PrismaClient } from '@prisma/client/edge'

import { env } from "../env.mjs";

declare global {
    // eslint-disable-next-line no-var, no-unused-vars
    var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient({
        log:
            env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}

export const db = prisma
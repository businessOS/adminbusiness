import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

function getGoogleCredentials(): { clientId: string; clientSecret: string } {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    if (!clientId || clientId.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_ID')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECRET')
    }

    return { clientId, clientSecret }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.currentCompany = ''
            }

            return session
        },
        async jwt({ token, trigger, session, user, account, profile }) {
            if (trigger === 'signIn') {
                const dbUser = await db.user.findFirst({
                    where: {
                        email: token.email,
                    },
                })

                if (!dbUser) {
                    token.id = user!.id
                    return token
                }

                const perfil = await db.perfil.findFirst({
                    where: { userId: dbUser.id }
                })

                return {
                    id: dbUser.id,
                    name: dbUser.name,
                    email: dbUser.email,
                    picture: dbUser.image,
                    description: perfil?.description ?? '',
                    username: perfil?.username ?? '',
                    role: perfil?.role ?? 'User',
                    isSetup: perfil?.isSetup ?? false,
                    currentCompany: ''
                }
            }
            if (trigger === 'update') {
                if (typeof session?.name === 'string') {
                    token.name = session.name || '';
                }
                if (typeof session?.username === 'string') {
                    token.username = session.username || '';
                }
                if (typeof session?.email === 'string') {
                    token.email = session.email || '';
                }
                if (typeof session?.image === 'string') {
                    token.picture = session.image || '';
                }
                if (typeof session?.description === 'string') {
                    token.description = session.description || '';
                }
                if (typeof session?.role === 'string') {
                    token.role = session.role || '';
                }
                if (typeof session?.isSetup === 'boolean') {
                    token.currentCompany = session.currentCompany || '';
                }
                if (typeof session?.currentCompany === 'string') {
                    token.currentCompany = session.currentCompany || '';
                }
            }
            return token;
        },
        redirect() {
            return '/'
        },
    },
}
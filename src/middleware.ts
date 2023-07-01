import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'

import { i18n } from './utils/i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    return matchLocale(languages, locales, i18n.defaultLocale)
}

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
        // // If you have one
        if (
            [
                '/manifest.json',
                '/favicon.ico',
                '/american-us-flag.jpg',
                '/spain-sp-flag.jpg',
                '/settings'
                // Your other files in `public`
            ].includes(pathname)
        )
            return


        if (pathname.includes('favicon.ico')) return

        const locale = getLocale(req)
        // Check if there is any supported locale in the pathname
        const pathnameIsMissingLocale = i18n.locales.every(
            (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        )

        // Manage route protection
        const token = await getToken({ req })
        // console.log("JSON Web Token", token)
        const isAuth = !!token
        const isAuthPage = req.nextUrl.pathname.startsWith(`/${locale}/login`) || req.nextUrl.pathname.startsWith(`/login`)
        const isSetup = token?.isSetup ?? false
        const isCurrentCompanySet = !!token?.currentCompany ?? false

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL(`/${locale}/`, req.url))
            }
            return null
        }

        if (!isAuth) {
            console.log(`user not autenticated: ${locale}/login`)
            return NextResponse.redirect(new URL(`/${locale}/login`, req.url))
        }

        console.log(`middleware executing in path: ${pathname}`)


        // if user is authenticated but need to register the profile
        if (!isSetup) {
            if (pathname !== `/${locale}/settings/configure`) {
                console.log(`is not setup, redirecting to : localhost"3000${pathname}`)
                return NextResponse.redirect(new URL(`/${locale}/settings/configure`, req.url))
            }
        }

        // the user is authenticated an his profile is set
        // user need to select the company that will work
        if (isSetup && !isCurrentCompanySet) {
            if (pathname !== `/${locale}/settings/selectCompany`) {
                console.log(`is not company set, redirecting: localhost"3000${pathname}`)
                return NextResponse.redirect(new URL(`/${locale}/settings/selectCompany`, req.url))
            }
        }

        // Redirect if there is no locale
        if (pathnameIsMissingLocale) {

            // if user is authenticated but need to register the profile
            if (!isSetup) {
                return NextResponse.redirect(new URL(`/${locale}/settings/configure`, req.url))
            }

            // e.g. incoming request is /products
            // The new URL is now /en-US/products
            return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
        }
    },
    {
        callbacks: {
            async authorized() {
                // This is a work-around for handling redirect on auth pages.
                // We return true here so that the middleware function above
                // is always called.
                return true
            },
        },
    }
)
export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/', '/stock', '/purchase'],
}
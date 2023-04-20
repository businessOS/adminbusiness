import Providers from '@/components/Providers'
import Wrapper from '@/components/iu/molecules/Layouts/Wrapper'
import { Toaster } from '@/ui/atoms/toast'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'

import localFont from 'next/font/local'
import { i18n } from '@/i18n-config'

const verdana = localFont({
  src: [
    {
      path: '../../components/assets/fonts/Verdana.ttf',
      weight: '400'
    },
    {
      path: '../../components/assets/fonts/verdanab.ttf',
      weight: '700'
    }
  ],
  variable: '--font-verdana'
})


export const metadata = {
  title: 'Business Online Solutions',
  description: 'Administrative solutions',
  icons: 'favicon.ico',
  generator: 'Next.js',
  applicationName: 'Admin Manager',
  referrer: 'origin-when-cross-origin',
  keywords: ['Business', 'Retail', 'Point of sales', 'Pos'],
  authors: [{ name: 'Helder Silva' }, { name: 'Helder Silva', url: 'https://github.com/businessOS' }],
  colorScheme: 'dark',
  creator: 'Helder Silva',
  publisher: 'Helder Silva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className={cn('text-light-text-main-color dark:text-dark-text-main-color  text-sm font-normal font-sans', verdana.variable)}>
      <body className='overflow-hidden antialiased'>
        <Providers>
          <Toaster position='bottom-right' />
          {/* @ts-expect-error Server Component */}
          <Wrapper lang={params.lang}>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  )
}


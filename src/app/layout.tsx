import Providers from '@/components/Providers'
import Wrapper from '@/components/iu/molecules/Layouts/Wrapper'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Business Online Solutions',
  description: 'Administrative solutions',
  icons: 'favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('text-light-text-main-color dark:text-dark-text-main-color', inter.className)}>
      <body className='antialiased'>
        <Providers>
          <Wrapper >{children}</Wrapper>
        </Providers>
      </body>
    </html>
  )
}

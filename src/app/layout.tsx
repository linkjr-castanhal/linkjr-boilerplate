import '@/assets/globals.css'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'LinkJr Boilerplate',
  description: 'Created by LinkJr',
}

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('min-h-screen antialiased', inter.className)}>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  )
}

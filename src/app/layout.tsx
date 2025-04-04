import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/globals.css'
import { cn } from '@/lib/utils'

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
        {children}
      </body>
    </html>
  )
}

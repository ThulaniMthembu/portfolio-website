import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import AnimatedBackground from '@/components/AnimatedBackground'
import { LoadingProvider } from '@/contexts/LoadingContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thulani Mthembu | Web Developer',
  description: 'Thulani Mthembu is a web developer specializing in React and Next.js, creating modern and responsive web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <AnimatedBackground />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
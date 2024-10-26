'use client'

import { ThemeProvider } from '@/components/theme-provider'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatedBackground />
      {children}
    </ThemeProvider>
  )
}
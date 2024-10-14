import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import { metadata } from './metadata'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <ClientLayout>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
                {children}
              </main>
              <Footer />
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
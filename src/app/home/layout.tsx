import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientLayout from '../client-layout'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientLayout>
      <Navbar />
      <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </ClientLayout>
  )
}
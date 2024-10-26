'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex space-x-4">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-[#fca311] text-black rounded-full hover:bg-opacity-90 transition-colors"
          >
            Go Back
          </button>
          <Link href="/home" className="px-4 py-2 bg-[#fca311] text-black rounded-full hover:bg-opacity-90 transition-colors flex items-center">
            <Home className="mr-2" />
            Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
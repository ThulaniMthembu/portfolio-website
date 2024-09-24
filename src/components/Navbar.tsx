'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="text-white hover:text-gray-300 transition-colors duration-200 lg:hover:bg-gray-800 lg:px-3 lg:py-2 lg:rounded"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <nav className='fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/images/logo.png'
            alt='Thulani Mthembu Logo'
            width={40}
            height={40}
            className='rounded-full'
          />
          <span className='font-bold text-lg sm:text-xl text-white'>Dev-Majxr</span>
        </Link>
        <div className='hidden lg:flex items-center space-x-4'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/projects'>Projects</NavLink>
          <NavLink href='/skills'>Skills</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </div>
        <div className='flex items-center space-x-4'>
          <ThemeToggle />
          <button
            className='lg:hidden z-50 hover:bg-gray-800 p-2 rounded transition-colors duration-200'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className='lg:hidden fixed top-0 right-0 bottom-0 w-full bg-gray-900 text-white flex flex-col items-center justify-center'
          >
            <div className="flex flex-col items-center space-y-6">
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/about'>About</NavLink>
              <NavLink href='/projects'>Projects</NavLink>
              <NavLink href='/skills'>Skills</NavLink>
              <NavLink href='/contact'>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
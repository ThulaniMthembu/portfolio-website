'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const menuItems = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]

const menuVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`text-white hover:text-gray-300 transition-colors duration-200 lg:hover:bg-gray-800 lg:px-4 lg:py-2 lg:rounded ${
        pathname === href ? 'font-bold' : ''
      } ${isOpen ? 'text-2xl' : 'text-base'}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <nav className='fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <Link 
          href='/home' 
          className='flex items-center space-x-3'
        >
          <Image
            src='/images/logo.png'
            alt='Thulani Mthembu Logo'
            width={40}
            height={40}
            className='rounded-full'
          />
          <span className='font-bold text-lg sm:text-xl text-white'>Dev-Majxr</span>
        </Link>
        <div className='hidden lg:flex items-center space-x-6'>
          {menuItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className='flex items-center space-x-6'>
          <ThemeToggle />
          <button
            className='lg:hidden z-50 w-10 h-10 relative focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className='lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center'
          >
            <div className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <motion.div key={item.href} variants={menuItemVariants}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed top-0 left-0 right-0 bg-gray-900 text-background p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/images/logo.png'
            alt='Thulani Mthembu Logo'
            width={50}
            height={50}
            className='rounded-full'
          />
          <span className='font-bold text-xl'>Dev-Majxr</span>
        </Link>
        <div className='flex items-center space-x-4'>
          <ThemeToggle />
          <button
            className='z-50'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-around"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="w-full h-0.5 bg-background block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-0.5 bg-background block"
              ></motion.span>
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="w-full h-0.5 bg-background block"
              ></motion.span>
            </motion.div>
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
            className='fixed top-0 right-0 bottom-0 w-full bg-secondary text-background flex flex-col items-center justify-center'
          >
            <Link href='/' className='text-2xl py-2' onClick={toggleMenu}>Home</Link>
            <Link href='/about' className='text-2xl py-2' onClick={toggleMenu}>About</Link>
            <Link href='/projects' className='text-2xl py-2' onClick={toggleMenu}>Projects</Link>
            <Link href='/skills' className='text-2xl py-2' onClick={toggleMenu}>Skills</Link>
            <Link href='/contact' className='text-2xl py-2' onClick={toggleMenu}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
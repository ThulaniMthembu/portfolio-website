"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const [showHello, setShowHello] = useState(true)
  const [showDevMajxr, setShowDevMajxr] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowHello(false)
      setShowDevMajxr(true)
    }, 3000)

    const timer2 = setTimeout(() => {
      setShowDevMajxr(false)
    }, 7000)

    const timer3 = setTimeout(() => {
      setLoading(false)
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14213d]"
    >
      <AnimatePresence>
        {showHello && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold text-[#fca311]"
          >
            Hello World 👋...
          </motion.h1>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showDevMajxr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5}}
            className="flex flex-col items-center"
          >
            <motion.h1
              className="text-4xl font-bold text-[#fca311] mb-4"
            >
              Dev Majxr welcomes you.
            </motion.h1>
            <Image
              src="/images/dev-majxr.jpg"
              alt="Dev Majxr"
              width={192}
              height={192}
              className="rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Loader
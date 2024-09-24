import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true)
  const [currentPhase, setCurrentPhase] = useState(0)

  const phases = useMemo(() => [
    { text: "Hello World 👋", duration: 2000 },
    { text: "Initializing awesomeness...", duration: 2000 },
    { text: "Brewing creativity...", duration: 2000 },
    { text: "Excited to have you here!", duration: 3000 }
  ], [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (currentPhase < phases.length) {
      timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1)
      }, phases[currentPhase].duration)
    } else {
      setLoading(false)
      onComplete()
    }

    return () => clearTimeout(timer)
  }, [currentPhase, phases, onComplete])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#14213d] to-[#1a2b4e] p-4"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {currentPhase < phases.length && (
            <motion.h1
              className="text-4xl font-bold text-[#fca311] mb-4 text-center"
            >
              {phases[currentPhase].text}
            </motion.h1>
          )}
          {currentPhase === phases.length - 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image
                src="/images/dev-majxr.jpg"
                alt="Dev Majxr"
                width={192}
                height={192}
                className="rounded-full border-4 border-[#fca311]"
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="mt-8 w-64 h-2 bg-[#e5e5e5] rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-[#fca311]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 9 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Loader
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string
  icon: React.ReactNode
  items: string[]
}

export default function SkillCard({ category, icon, items }: SkillCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden h-full"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5 dark:opacity-10 z-0"></div>
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-4 space-y-2">
          <motion.div 
            className="text-primary text-3xl bg-primary bg-opacity-10 dark:bg-opacity-20 p-2 rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h2 className="text-xl font-bold tracking-tight text-secondary dark:text-primary text-center">
            {category}
          </h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-2">
          {items.map((skill, index) => (
            <motion.li 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-medium border border-gray-300 dark:border-gray-600"
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "#fca311", 
                color: "#ffffff",
                boxShadow: "0 0 15px rgba(252, 163, 17, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
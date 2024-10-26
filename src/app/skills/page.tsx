'use client'

import { Code, Server, GitBranch, Brain } from 'lucide-react'
import SkillCard from '@/components/SkillCard'
import StructuredData from '@/components/StructuredData'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    items: ["HTML", "CSS", "JavaScript", "React", "Redux", "Sass", "Tailwind CSS", "Next.js", "TypeScript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    items: ["Node.js (Introductory)", "Express.js (Introductory)"]
  },
  {
    category: "Version Control & Deployment",
    icon: <GitBranch className="w-8 h-8" />,
    items: ["Git", "GitHub", "Netlify", "GitHub Pages", "CI/CD Pipelines"]
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-8 h-8" />,
    items: [
      "Problem-solving",
      "Critical thinking",
      "Verbal communication",
      "Written communication",
      "Team collaboration",
      "Client communication",
      "Agile methodologies"
    ]
  }
]

export default function Skills() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Thulani Mthembu's Skills",
    "description": "A comprehensive list of Thulani Mthembu's web development and soft skills",
    "itemListElement": skills.map((category, index) => ({
      "@type": "ItemList",
      "position": index + 1,
      "name": category.category,
      "itemListElement": category.items.map((skill, skillIndex) => ({
        "@type": "ListItem",
        "position": skillIndex + 1,
        "name": skill
      }))
    }))
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <div className="container mx-auto px-4 py-12 mt-16">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard
                category={skillCategory.category}
                icon={skillCategory.icon}
                items={skillCategory.items}
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-base text-gray-800 dark:text-gray-200">
            GitHub username: <a href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ThulaniMthembu</a>
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}
'use client'

import { Code, Server, GitBranch, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-12 h-12 mb-4 text-blue-500" />,
    items: ["HTML", "CSS", "JavaScript", "React", "Redux", "Sass", "Tailwind CSS", "Next.js", "TypeScript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-12 h-12 mb-4 text-green-500" />,
    items: ["Node.js (Introductory)", "Express.js (Introductory)"]
  },
  {
    category: "Version Control & Deployment",
    icon: <GitBranch className="w-12 h-12 mb-4 text-purple-500" />,
    items: ["Git", "GitHub", "Netlify", "GitHub Pages", "CI/CD Pipelines"]
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-12 h-12 mb-4 text-yellow-500" />,
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

const SkillItem = ({ skill }: { skill: string }) => (
  <motion.li 
    className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    whileHover={{ scale: 1.05, backgroundColor: "#22333b", color: "#eae0d5" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {skill}
  </motion.li>
)

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">My Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => (
          <motion.div 
            key={index} 
            className="bg-card text-card-foreground rounded-lg shadow-lg p-6 transform transition duration-500 hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-center mb-6">
              {skillCategory.icon}
              <h2 className="text-2xl font-semibold text-center">{skillCategory.category}</h2>
            </div>
            <ul className="space-y-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} skill={skill} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">
          GitHub username: <a href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@ThulaniMthembu</a>
        </p>
      </div>
    </div>
  )
}
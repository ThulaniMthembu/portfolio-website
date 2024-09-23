import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string
  icon: React.ReactNode
  items: string[]
}

export default function SkillCard({ category, icon, items }: SkillCardProps) {
  return (
    <motion.div 
      className="bg-card text-card-foreground rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-border"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center mb-6 space-y-2">
        <div className="text-primary">{icon}</div>
        <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((skill, index) => (
          <motion.li 
            key={index}
            className="flex items-center justify-center bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium border border-border"
            whileHover={{ scale: 1.03, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
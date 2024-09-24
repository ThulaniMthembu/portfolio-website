import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative h-56">
        <Image 
          src={image} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            View Project
          </Link>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
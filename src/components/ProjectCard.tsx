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
      className="bg-card text-card-foreground rounded-xl shadow-md overflow-hidden border border-border"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative h-56">
        <Image 
          src={image} 
          alt={title} 
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out hover:opacity-75"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
          <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            View Project
          </Link>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
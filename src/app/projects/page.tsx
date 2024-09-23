'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Amazin' Glazin' Cakes",
    description: "A Next.js, React, and TypeScript website for a cake shop, featuring a landing page, services section, cake gallery, and sorting/filtering functionality.",
    image: "/images/amazin-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Netlify"],
    link: "https://amazingcakes.netlify.app/"
  },
  {
    title: "RIA Skin Care",
    description: "A JavaScript-based e-commerce platform for skincare products, allowing users to browse, select, and place orders with detailed invoice generation.",
    image: "/images/ria-skin-care-lp.png",
    tags: ["JavaScript", "Netlify", "E-commerce"],
    link: "https://riaskincare.netlify.app/"
  },
  {
    title: "Shobafuze Interline Express",
    description: "A responsive website built with HTML, CSS, and JavaScript, featuring a landing page and service section with a user-friendly interface.",
    image: "/images/shobafuze-lp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://shobafuzeinterprise.netlify.app/"
  },
  {
    title: "Simple Space Explorer RPG Game",
    description: "Space Explorer is an interactive web-based game where players take on the role of an astronaut on a mission to explore the mysterious Planet Xyphora, collect ancient artifacts, and battle hostile aliens.",
    image: "/images/game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://xyphora.netlify.app/"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-left">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-[#e5e5e5] dark:bg-[#14213d] rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-[#000000] dark:text-[#ffffff]">{project.title}</h2>
              <p className="text-[#14213d] dark:text-[#e5e5e5] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-[#fca311] text-[#000000] px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#fca311] text-[#000000] px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
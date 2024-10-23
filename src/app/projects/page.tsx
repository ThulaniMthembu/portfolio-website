'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import StructuredData from '@/components/StructuredData'

const projects = [
  {
    title: "DOT COM MEDIA HOUSE",
    description: "Innovating the future of media since 2021. Specializing in Advertising, Event Management, and Branding.",
    image: "/images/dcmh-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "EmailJS"],
    link: "https://www.dotcommediahouse.com/",
    date: "2024-10-20",
    type: "React"
  },
  {
    title: "Koenana Trading",
    description: "Leading brand in the construction industry known for quality and innovation.",
    image: "/images/koenana-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "EmailJS"],
    link: "https://www.koenanatrading.co.za/",
    date: "2024-10-01",
    type: "React"
  },
  {
    title: "Amare Swimwear",
    description: "Amare Swimwear is a modern e-commerce platform built with Next.js, React, and TypeScript, offering a responsive design, secure user authentication, dynamic product catalog, and seamless checkout process for luxury swimwear enthusiasts.",
    image: "/images/amare-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "Firebase", "EmailJS"],
    link: "https://amareswimwear.vercel.app/",
    date: "2024-09-01",
    type: "E-commerce"
  },
  {
    title: "Namaqualand Environmental",
    description: "Focused on preserving the unique biodiversity of the Namaqualand region through habitat restoration, sustainable land use practices, and water resource management.",
    image: "/images/namaqualand-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "EmailJS"],
    link: "https://namaqualandenv.vercel.app/",
    date: "2024-08-01",
    type: "Environmental"
  },
  {
    title: "Amazin' Glazin' Cakes",
    description: "A Next.js, React, and TypeScript website for a cake shop, featuring a landing page, services section, cake gallery, and sorting/filtering functionality.",
    image: "/images/amazin-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Netlify"],
    link: "https://amazingcakes.netlify.app/",
    date: "2023-03-20",
    type: "Food Service"
  },
  {
    title: "RIA Skin Care",
    description: "A JavaScript-based e-commerce platform for skincare products, allowing users to browse, select, and place orders with detailed invoice generation.",
    image: "/images/ria-skin-care-lp.png",
    tags: ["JavaScript", "Netlify", "E-commerce"],
    link: "https://riaskincare.netlify.app/",
    date: "2024-05-01",
    type: "E-commerce"
  },
  {
    title: "Shobafuze Interline Express",
    description: "A responsive website built with HTML, CSS, and JavaScript, featuring a landing page and service section with a user-friendly interface.",
    image: "/images/shobafuze-lp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://shobafuzeinterprise.netlify.app/",
    date: "2024-04-01",
    type: "Transportation"
  },
  {
    title: "Simple Space Explorer RPG Game",
    description: "Space Explorer is an interactive web-based game where players take on the role of an astronaut on a mission to explore the mysterious Planet Xyphora, collect ancient artifacts, and battle hostile aliens.",
    image: "/images/game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://xyphora.netlify.app/",
    date: "2024-06-01",
    type: "Game"
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeSort, setActiveSort] = useState('Newest')

  const sortProjects = useCallback((projectsToSort: typeof projects, sort: string) => {
    return [...projectsToSort].sort((a, b) => {
      if (sort === 'Newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = projects
    if (activeFilter !== 'All') {
      filtered = projects.filter(project => 
        project.tags.includes(activeFilter) || project.type === activeFilter
      )
    }
    return sortProjects(filtered, activeSort)
  }, [activeFilter, activeSort, sortProjects])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Thulani Mthembu's Projects",
    "description": "A collection of web development projects by Thulani Mthembu",
    "url": "https://devmajxr.netlify.app/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "WebSite",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": project.link,
        "image": `https://devmajxr.co.za${project.image}`,
        "author": {
          "@type": "Person",
          "name": "Thulani Mthembu"
        },
        "keywords": project.tags.join(", ")
      }))
    }
  };

  const filters = ['All', 'Next.js', 'React', 'TypeScript', 'JavaScript', 'E-commerce', 'Environmental', 'Game']

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24"
    >
      <StructuredData data={structuredData} />
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            } transition-colors duration-300`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mb-8 flex justify-center">
        <select
          value={activeSort}
          onChange={(e) => setActiveSort(e.target.value)}
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
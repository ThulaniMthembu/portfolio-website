'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import StructuredData from '@/components/StructuredData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const projects = [
  {
    title: "Elegant Matrimony: A Modern Wedding Website",
    description: "Elegant Matrimony is a personalized wedding website designed to celebrate and simplify a couple’s special day. Featuring a countdown timer to build excitement, the site offers convenience for both the couple and their guests. Guests can RSVP directly on the website, access venue details, and view accommodation recommendations tailored for their stay. A hidden, secure page allows the couple to effortlessly manage their guest list, ensuring a seamless experience for everyone involved.",
    image: "/images/wedding-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Firebase", "Zod"],
    link: "https://thentshavhenis.vercel.app/",
    date: "2024-11-15",
    type: "React"
  },
  {
    title: "Fuzile Zono | Procurement Specialist Portfolio",
    description: "Responsive Portfolio website built in React, TypeScript and Tailwind CSS. Featured pages: About, Experience, Skills, Education, Training, Contact and Blog page managed by owner.",
    image: "/images/fuzile-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "EmailJS", "Firebase"],
    link: "https://www.fuzilezono.co.za/",
    date: "2024-10-30",
    type: "React"
  },
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
    date: "2024-10-13",
    type: "React"
  },
  {
    title: "Amare Swimwear",
    description: "Amare Swimwear is a modern e-commerce platform built with Next.js, React, and TypeScript, offering a responsive design, secure user authentication, dynamic product catalog, and seamless checkout process for luxury swimwear enthusiasts.",
    image: "/images/amare-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "Firebase", "EmailJS"],
    link: "https://swimwearbyamare.vercel.app/",
    date: "2024-10-01",
    type: "E-commerce"
  },
  {
    title: "Namaqualand Environmental",
    description: "Focused on preserving the unique biodiversity of the Namaqualand region through habitat restoration, sustainable land use practices, and water resource management.",
    image: "/images/namaqualand-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "EmailJS"],
    link: "https://www.namaquaenvironmental.co.za/",
    date: "2024-10-17",
    type: "Environmental"
  },
  {
    title: "Amazin' Glazin' Cakes",
    description: "A Next.js, React, and TypeScript website for a cake shop, featuring a landing page, services section, cake gallery, and sorting/filtering  functionality.",
    image: "/images/amazin-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Netlify"],
    link: "https://amazingcakes.netlify.app/",
    date: "2024-09-01",
    type: "Food Service"
  },
  {
    title: "RIA Skin Care",
    description: "A JavaScript-based e-commerce platform for skincare products, allowing users to browse, select, and place orders with detailed invoice generation.",
    image: "/images/ria-skin-care-lp.png",
    tags: ["JavaScript", "Netlify", "E-commerce"],
    link: "https://riaskincare.netlify.app/",
    date: "2024-08-01",
    type: "E-commerce"
  },
  {
    title: "Shobafuze Interline Express",
    description: "A responsive website built with HTML, CSS, and JavaScript, featuring a landing page and service section with a user-friendly interface.",
    image: "/images/shobafuze-lp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://shobafuzeinterprise.netlify.app/",
    date: "2024-07-01",
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

  const filters = ['All', 'Next.js', 'React', 'Firebase', 'TypeScript', 'Tailwind', 'JavaScript', 'E-commerce', 'Environmental', 'Game', 'Zod']

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StructuredData data={structuredData} />
      <Navbar />
      <div className="container mx-auto px-4 py-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}
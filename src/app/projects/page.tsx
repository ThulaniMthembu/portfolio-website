'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import StructuredData from '@/components/StructuredData'

const projects = [
  {
    title: "Amare Swimwear",
    description: "Amare Swimwear is a modern e-commerce platform built with Next.js, React, and TypeScript, offering a responsive design, secure user authentication, dynamic product catalog, and seamless checkout process for luxury swimwear enthusiasts.",
    image: "/images/amare-lp.png",
    tags: ["Next.js", "React", "TypeScript", "Vercel, Firebase, EmailJS"],
    link: "https://amareswimwear.vercel.app/"
  },
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

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="container mx-auto px-4 py-24">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
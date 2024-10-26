'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Code, Briefcase, GraduationCap, Mail } from 'lucide-react'
import StructuredData from '@/components/StructuredData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AboutSection = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
  >
    <div className="flex items-center mb-4">
      <div className="mr-4 p-3 bg-primary rounded-full">{icon}</div>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    </div>
    {children}
  </motion.div>
)

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Thulani Mthembu",
    "description": "Learn about Thulani Mthembu's skills, experience, and certifications as a web developer.",
    "mainEntity": {
      "@type": "Person",
      "name": "Thulani Mthembu",
      "jobTitle": "Web Developer",
      "description": "Web Developer & React Specialist",
      "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Responsive Web Design",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "FreeCodeCamp"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "JavaScript Algorithms and Data Structures",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "FreeCodeCamp"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Front End Development Libraries",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "FreeCodeCamp"
          }
        }
      ]
    }
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12 mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AboutSection title="Skills & Expertise" icon={<Code className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <p className="mb-4 text-sm md:text-base">
                I specialize in building complete websites from scratch, focusing on maintainability and user experience. My expertise includes:
              </p>
              <ul className="list-disc list-inside mb-4 grid grid-cols-2 gap-2 text-sm md:text-base">
                <li>HTML, CSS, and JavaScript</li>
                <li>React and Redux</li>
                <li>Next.js and TypeScript</li>
                <li>Bootstrap and Tailwind CSS</li>
                <li>Sass for advanced styling</li>
                <li>EmailJS for client communication</li>
              </ul>
            </AboutSection>

            <AboutSection title="Work Experience" icon={<Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <p className="mb-4 text-sm md:text-base">
                While I&apos;m early in my professional journey, I&apos;ve been actively building my skills through personal projects and freelance work. Some of my experiences include:
              </p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Developing responsive websites for small businesses</li>
                <li>Contributing to open-source projects on GitHub</li>
                <li>Participating in coding challenges and hackathons such as LeetCode</li>
              </ul>
            </AboutSection>
          </div>

          <div>
            <AboutSection title="Certifications" icon={<GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                  <span className="font-semibold">Responsive Web Design</span> - FreeCodeCamp
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                  <span className="font-semibold">JavaScript Algorithms and Data Structures</span> - FreeCodeCamp
                </li>
                <li className="flex items-center">
                  <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" />
                  <span className="font-semibold">Front End Development Libraries</span> - FreeCodeCamp
                </li>
              </ul>
            </AboutSection>

            <AboutSection title="Continuous Learning" icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />}>
              <p className="mb-4 text-sm md:text-base">
                I&apos;m passionate about staying up-to-date with the latest web development trends and technologies. My current focus areas include:
              </p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Advanced React patterns and performance optimization</li>
                <li>Server-side rendering and static site generation with Next.js</li>
                <li>State management with Redux and Context API</li>
              </ul>
            </AboutSection>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">Let&apos;s Connect!</h2>
          <p className="mb-6 text-sm md:text-base">
            I&apos;m always excited to collaborate on new projects or discuss web development. Feel free to reach out!
          </p>
          <div className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 rounded-full text-sm md:text-base">
            <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            thulanim457@gmail.com
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}
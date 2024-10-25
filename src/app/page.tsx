"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileDown, Eye, Code, Smartphone, Zap } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    setMounted(true);
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thulani Mthembu",
    "alternateName": "Dev Majxr",
    "description": "Web Developer & React Specialist",
    "url": "https://devmajxr.netlify.app/",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (!mounted) return null;

  return (
    <>
      <StructuredData data={structuredData} />
      <style jsx global>{`
        @keyframes wobble {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 70% 50% 60%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 60% 40%; }
        }
        @keyframes scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .blob-container {
          width: 280px;
          height: 280px;
          animation: wobble 15s ease-in-out infinite;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .blob-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: scale 15s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 py-12 flex flex-col justify-between min-h-screen">
        <motion.section 
          className="text-left md:text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8 relative inline-block">
            <div className="blob-container">
              <Image
                src="/images/Thulani-img.jpg"
                alt="Thulani Mthembu"
                width={560}
                height={560}
                priority
                quality={100}
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground-light dark:text-foreground-dark">Thulani Mthembu</h1>
            <h2 className="text-2xl md:text-3xl mb-5 text-foreground-light dark:text-foreground-dark">Web Developer & React Specialist</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="mb-6 max-w-3xl mx-auto text-lg text-foreground-light dark:text-foreground-dark">
            I specialize in crafting modern, responsive web applications that make a difference. With a keen eye for detail and a passion for clean, efficient code, I bring ideas to life through innovative web solutions. Let&apos;s build something amazing together that not only meets your needs but exceeds your expectations.
          </motion.p>
          <motion.p variants={itemVariants} className="italic mb-8 text-xl text-foreground-light dark:text-foreground-dark">&quot;The Marathon Continues&quot;</motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/projects" className="inline-flex items-center justify-center bg-secondary text-foreground-dark px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 w-full sm:w-auto">
              <Eye className="mr-2" />
              Explore My Work
            </Link>
            <a href="/resume/Thulani-Mthembu-Resume.pdf" download className="inline-flex items-center justify-center bg-primary text-foreground-light px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 w-full sm:w-auto">
              <FileDown className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </motion.section>

        <motion.section 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Code, title: "Clean Code", description: "Writing maintainable and efficient code is my passion." },
            { icon: Smartphone, title: "Responsive Design", description: "Creating seamless experiences across all devices." },
            { icon: Zap, title: "Performance Optimized", description: "Building fast and optimized web applications." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <item.icon size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </>
  );
}
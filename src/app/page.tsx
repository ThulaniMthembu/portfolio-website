"use client"; // This is required for client-side components

import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Zap, FileDown, Eye } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col justify-between min-h-screen">
      <section className="text-left mb-16">
        <h1 className="text-4xl font-bold mb-4">Thulani Mthembu</h1>
        <h2 className="text-2xl mb-4">Web Developer & React Specialist</h2>
        <p className="mb-6 max-w-2xl">
          I specialize in crafting modern, responsive web applications that make a difference. Let&apos;s build something amazing together.
        </p>
        <p className="italic mb-8">&quot;The Marathon Continues&quot;</p>
        <div className="flex space-x-4">
          <Link href="/projects" className="inline-flex items-center bg-gray-500 text-background px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
            <Eye className="mr-2" />
            Explore My Work
          </Link>
          <a href="/resume/Thulani_Mthembu_Resume.pdf" download className="inline-flex items-center bg-primary text-foreground px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
            <FileDown className="mr-2" />
            Download Resume
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div 
          className="text-center p-6 bg-accent text-foreground rounded-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        >
          <Code size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
          <p>Writing maintainable and efficient code is my passion.</p>
        </motion.div>
        <motion.div 
          className="text-center p-6 bg-accent text-foreground rounded-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        >
          <Smartphone size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p>Creating seamless experiences across all devices.</p>
        </motion.div>
        <motion.div 
          className="text-center p-6 bg-accent text-foreground rounded-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        >
          <Zap size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">Performance Optimized</h3>
          <p>Building fast and optimized web applications.</p>
        </motion.div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <Link href="/contact" className="inline-flex items-center bg-gray-500 text-background px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
          Get in Touch <ArrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
}

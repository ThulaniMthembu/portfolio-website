'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileDown, Eye, Code, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StructuredData from '@/components/StructuredData';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLoading } from '@/contexts/LoadingContext';
import SkeletonLoader from '@/components/SkeletonLoader';

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Thulani Mthembu',
    alternateName: 'Dev Majxr',
    description: 'Web Developer & React Specialist',
    url: 'https://devmajxr.netlify.app/',
    jobTitle: 'Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code is my passion.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices.',
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Building fast and optimized web applications.',
    },
  ];

  const projects = [
    {
      id: 1,
      title: '',
      description: 'Amare Swimwear is a modern e-commerce platform built with Next.js, React, and TypeScript, offering a responsive design, secure user authentication, dynamic product catalog, and seamless checkout process for luxury swimwear enthusiasts.',
      image: '/images/amare-lp.png',
      tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'PayGate Integration'],
    },
    {
      id: 2,
      title: '',
      description: 'Innovating the future of media since 2021. Specializing in Advertising, Event Management, and Branding.',
      image: '/images/dcmh-lp.png',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
    },
  ];

  if (isLoading) {
    return <SkeletonLoader />;
  }

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
      <Navbar />
      <div className='container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12'>
        <motion.div
          className='flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='flex justify-center md:justify-end md:col-start-3 md:row-start-1'>
            <div className='blob-container group'>
              <Image
                src='/images/Thulani-img.jpg'
                alt='Thulani Mthembu'
                width={280}
                height={280}
                priority
                quality={100}
                className='transition-transform duration-300 ease-in-out group-hover:scale-110'
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className='md:col-span-2 md:row-start-1'>
            <h1 className='text-4xl md:text-5xl font-bold mb-3 text-foreground'>
              Thulani Mthembu
            </h1>
            <h2 className='text-2xl md:text-3xl mb-5 text-foreground'>
              Web Developer & React Specialist
            </h2>
            <p className='mb-6 text-lg text-foreground'>
              I specialize in crafting modern, responsive web applications that
              make a difference. With a keen eye for detail and a passion for
              clean, efficient code, I bring ideas to life through innovative web
              solutions.
            </p>
            <p className='italic mb-8 text-xl text-foreground'>
              &quot;The Marathon Continues&quot;
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <Button variant="secondary" asChild>
                <Link href='/projects' className='inline-flex items-center justify-center'>
                  <Eye className='mr-2' />
                  Explore My Work
                </Link>
              </Button>
              <Button variant="default" asChild>
                <a href='/resume/Thulani-Mthembu-Resume.pdf' download className='inline-flex items-center justify-center'>
                  <FileDown className='mr-2' />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.section
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 my-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-100 dark:bg-slate-800 text-card-foreground rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <feature.icon size={32} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='mb-16'
        >
          <h2 className='text-3xl font-bold mb-8 text-center text-foreground'>Featured Projects</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='mt-12 text-center'>
            <Button variant="default" asChild className="px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href='/projects' className='inline-flex items-center justify-center'>
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
}
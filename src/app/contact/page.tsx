'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Toaster from '@/components/Toaster'
import StructuredData from '@/components/StructuredData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type ToasterState = {
  message: string;
  type: 'success' | 'error' | null;
}

interface EmailJSResponseStatus {
  status: number;
  text: string;
}

export default function Contact() {
  const [toaster, setToaster] = useState<ToasterState>({ message: '', type: null })
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateIdUser = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER
    const templateIdOwner = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_OWNER
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

    if (!serviceId || !templateIdUser || !templateIdOwner || !userId) {
      console.error('EmailJS environment variables are not set')
      setToaster({ message: 'Configuration error. Please try again later.', type: 'error' })
      setIsSending(false)
      return
    }

    try {
      // Send email to user
      await emailjs.send(serviceId, templateIdUser, {
        to_email: formRef.current?.reply_to.value,
        from_name: 'Thulani Mthembu',
        message: formRef.current?.message.value,
        from_email: 'thulanim457@gmail.com',
        reply_to: 'thulanim457@gmail.com'
      }, userId)
      
      // Send email to owner
      await emailjs.send(serviceId, templateIdOwner, {
        to_name: 'Thulani',
        from_name: formRef.current?.from_name.value,
        from_email: formRef.current?.reply_to.value,
        phone: formRef.current?.phone_number.value,
        message: formRef.current?.message.value,
        reply_to: formRef.current?.reply_to.value
      }, userId)
      
      console.log('EmailJS success: Emails sent to user and owner')
      setToaster({ message: 'Message sent successfully!', type: 'success' })
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      if (typeof error === 'object' && error !== null && 'text' in error) {
        const emailJSError = error as EmailJSResponseStatus
        setToaster({ message: `Failed to send message: ${emailJSError.text}`, type: 'error' })
      } else if (error instanceof Error) {
        setToaster({ message: `An error occurred: ${error.message}`, type: 'error' })
      } else {
        setToaster({ message: 'An unexpected error occurred. Please try again.', type: 'error' })
      }
    } finally {
      setIsSending(false)
    }

    setTimeout(() => {
      setToaster({ message: '', type: null })
    }, 5000)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Thulani Mthembu",
    "description": "Get in touch with Thulani Mthembu for web development projects and collaborations.",
    "url": "https://devmajxr.netlify.app/",
    "mainEntity": {
      "@type": "Person",
      "name": "Thulani Mthembu",
      "jobTitle": "Web Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Johannesburg",
        "addressCountry": "ZA"
      },
      "telephone": "+27 72 4351 5616",
      "email": "thulanim457@gmail.com"
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

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <motion.div 
        className="container mx-auto px-4 py-24 min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-4xl mx-auto bg-gray-100 dark:bg-background-dark shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2 p-8 bg-primary text-white"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
              </p>
              <blockquote className="border-l-4 border-white pl-4 italic mb-6">
                &quot;The marathon continues not because it&apos;s easy, but because the journey itself is a testament to our resilience and determination. Keep running forward, no matter how long the road may be.&quot;
              </blockquote>
              <div className="space-y-4">
                <motion.div className="flex items-center" variants={itemVariants}>
                  <MapPin className="mr-2" />
                  <span>Johannesburg, ZA</span>
                </motion.div>
                <motion.div className="flex items-center" variants={itemVariants}>
                  <Phone className="mr-2" />
                  <span>+27 72 4351 5616</span>
                </motion.div>
                <motion.div className="flex items-center" variants={itemVariants}>
                  <Mail className="mr-2" />
                  <span>thulanim457@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 p-8 bg-white  dark:bg-background-dark"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-foreground-dark">Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block mb-1 font-medium text-gray-700 dark:text-foreground-dark">Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-dark text-gray-800 dark:text-foreground-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block mb-1 font-medium text-gray-700 dark:text-foreground-dark">Email</label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-dark text-gray-800 dark:text-foreground-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block mb-1 font-medium text-gray-700 dark:text-foreground-dark">Phone Number</label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-dark text-gray-800 dark:text-foreground-dark"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium text-gray-700 dark:text-foreground-dark">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-dark text-gray-800 dark:text-foreground-dark"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        {toaster.type && (
          <Toaster
            message={toaster.message}
            type={toaster.type}
            onClose={() => setToaster({ message: '', type: null })}
          />
        )}
      </motion.div>
      <Footer />
    </>
  )
}
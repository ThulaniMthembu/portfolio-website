'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Toaster from '@/components/Toaster'
import StructuredData from '@/components/StructuredData'

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

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
              &quot;The marathon continues not because it&apos;s easy, but because the journey itself is a testament to our resilience and determination. Keep running forward, no matter how long the road may be.&quot;
            </blockquote>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2 text-primary" />
                <span>Johannesburg, ZA</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-primary" />
                <span>+27 72 4351 5616</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-primary" />
                <span>thulanim457@gmail.com</span>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="from_name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label htmlFor="phone_number" className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-primary text-foreground px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? 'Sending message...' : 'Send Message'}
            </motion.button>
          </form>
        </div>

        {toaster.type && (
          <Toaster
            message={toaster.message}
            type={toaster.type}
            onClose={() => setToaster({ message: '', type: null })}
          />
        )}
      </div>
    </>
  )
}
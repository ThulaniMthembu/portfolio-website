'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/contexts/LoadingContext'

export default function DevMajxrCard() {
  const router = useRouter()
  const { setIsLoading } = useLoading()
  const [isCardActive, setIsCardActive] = useState(false)

  const handleProceed = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/home')
    }, 100)
  }

  const handleCardClick = () => {
    setIsCardActive(!isCardActive)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8">
      <div className="max-w-md w-full flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fca311] mb-4 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-base sm:text-lg text-white mb-4 text-center">
          I&apos;m Thulani Mthembu, a FrontEnd React Dev creating innovative digital experiences.
        </p>
        <div 
          className={`group relative w-full h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl mb-6 cursor-pointer ${isCardActive ? 'shadow-2xl' : ''}`}
          onClick={handleCardClick}
        >
          <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${isCardActive || 'group-hover:scale-95'}`}>
            <Image
              src="/images/Thulani-img.jpg"
              alt="Thulani Mthembu"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent transition-opacity duration-500 ease-in-out ${isCardActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
          <div className={`absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-in-out ${isCardActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
            <h2 className="text-2xl font-bold text-black mb-2">Thulani Mthembu</h2>
            <p className="text-lg text-black mb-4">FrontEnd React Dev</p>
            <div className="flex flex-col space-y-2 mb-4">
              <a href="tel:+27724315616" className="flex items-center text-black hover:text-[#fca311] transition-colors duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +27 72 431 5616
              </a>
              <a href="mailto:thulanim457@gmail.com" className="flex items-center text-black hover:text-[#fca311] transition-colors duration-300">
                <Mail className="w-5 h-5 mr-2" />
                thulanim457@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mthembu-thulani-6a2361115/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-in-out hover:scale-110">
                <Linkedin className="w-6 h-6 text-black hover:text-[#fca311]" />
              </a>
              <a href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-in-out hover:scale-110">
                <Github className="w-6 h-6 text-black hover:text-[#fca311]" />
              </a>
              <a href="https://www.tiktok.com/@thulani_majxr?_t=8qr9DcRSJSY&_r=1" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-in-out hover:scale-110">
                <svg className="w-6 h-6 fill-black hover:fill-[#fca311]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={handleProceed}
          className="px-6 py-2 bg-[#fca311] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#fca311] hover:scale-105"
        >
          View Full Portfolio
        </button>
        <p className="mt-6 text-base sm:text-lg text-[#fca311] text-center px-4">
          Click/hover for more information, or tap &apos;View Full Portfolio&apos; to explore.
        </p>
      </div>
    </div>
  )
}
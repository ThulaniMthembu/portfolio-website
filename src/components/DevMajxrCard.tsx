'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/contexts/LoadingContext'

export default function DevMajxrCard() {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)
  const { setIsLoading } = useLoading()

  const handleProceed = () => {
    setIsLoading(true)
    router.push('/home')
  }

  const handleInteraction = (active: boolean) => {
    setIsActive(active)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fca311] mb-4 text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-base sm:text-lg text-white mb-8 text-center max-w-lg">
        I&apos;m Thulani Mthembu, a web developer creating innovative digital experiences.
      </p>
      <div 
        className={`w-[280px] h-[280px] rounded-[32px] p-[3px] relative shadow-lg transition-all duration-500 ease-in-out ${isActive ? 'rounded-tl-[55px]' : ''} group border-4 border-[#fca311]`}
        onMouseEnter={() => handleInteraction(true)}
        onMouseLeave={() => handleInteraction(false)}
        onTouchStart={() => handleInteraction(true)}
        onTouchEnd={() => handleInteraction(false)}
      >
        <a href="mailto:thulanim457@gmail.com" className="absolute right-6 top-6 bg-transparent border-none" target="_blank" rel="noopener noreferrer">
          <Mail className="stroke-[#fca311] stroke-[3] hover:stroke-[#ffffff] w-6 h-6" />
        </a>
        <div className={`profile-pic absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left-[3px] rounded-[29px] z-[1] border-0 border-solid border-[#fca311] overflow-hidden transition-all duration-500 ease-in-out delay-200 ${isActive ? 'w-[100px] h-[100px] top-[10px] left-[10px] rounded-full z-[3] border-[7px] shadow-md' : ''}`}>
          <Image
            src="/images/Thulani-img.jpg"
            alt="Thulani Mthembu"
            width={280}
            height={280}
            className={`object-cover w-full h-full transition-all duration-500 ease-in-out ${isActive ? 'scale-[2.5]' : ''}`}
          />
        </div>
        <div className={`bottom absolute bottom-[3px] left-[3px] right-[3px] bg-[#000000] rounded-[29px] z-[2] shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'top-[20%] rounded-[80px_29px_29px_29px]' : 'top-[80%]'}`}>
          <div className="content absolute bottom-0 left-6 right-6 h-[160px]">
            <span className="name block text-lg text-[#fca311] font-bold">Thulani Mthembu</span>
            <span className="about-me block text-sm text-[#ffffff] mt-4">
            Frontend React Dev
            </span>
            <div className="contact-info mt-2 text-xs text-[#e5e5e5]">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> Thulanim457@gmail.com
              </p>
              <p className="flex items-center mt-1">
                <Phone className="w-4 h-4 mr-2" /> +27 72 431 5616
              </p>
            </div>
          </div>
          <div className="bottom-bottom absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <div className="social-links-container flex gap-4">
              <a href="https://www.linkedin.com/in/mthembu-thulani-6a2361115/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 stroke-[#fca311] hover:stroke-[#ffffff] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 stroke-[#fca311] hover:stroke-[#ffffff] hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.tiktok.com/@thulani_majxr?_t=8qr9DcRSJSY&_r=1" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 fill-[#fca311] hover:fill-[#ffffff] hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-base sm:text-lg text-[#fca311] text-center px-4 max-w-md mx-auto">
        Hover/tap for quick links or proceed for full portfolio.
      </p>
      <button
        onClick={handleProceed}
        className="mt-4 px-6 py-2 bg-[#fca311] text-black text-base sm:text-lg rounded-full hover:bg-opacity-90 transition-colors"
      >
        View Full Portfolio
      </button>
    </div>
  )
}
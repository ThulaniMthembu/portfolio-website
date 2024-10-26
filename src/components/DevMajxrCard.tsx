'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/contexts/LoadingContext'

export default function DevMajxrCard() {
  const router = useRouter()
  const { setIsLoading } = useLoading()
  const [isVisible, setIsVisible] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleProceed = () => {
    setIsFading(true)
    setIsLoading(true)
    setTimeout(() => {
      router.push('/home')
    }, 1000) // Increased timeout to allow for fade out animation
  }

  return (
    <>
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            transform: translate3d(0, 100%, 0);
            visibility: visible;
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 1.5s ease-out;
        }
        .animate-fadeOut {
          animation: fadeOut 1s;
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
      <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8 ${isVisible ? 'animate-slideInUp' : 'opacity-0'} ${isFading ? 'animate-fadeOut' : ''}`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fca311] mb-2 text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 text-center max-w-md">
          Use the quick links below to get in touch, or click &apos;View Full Portfolio&apos; to explore my work.
        </p>
        <div className="w-[300px] bg-[#191919] rounded-[2em] p-[15px] shadow-[5px_5px_30px_rgb(4,4,4),-5px_-5px_30px_rgb(57,57,57)] transition-all duration-300 hover:shadow-[0_0_20px_5px_#fca311]">
          <div className="flex flex-col items-center">
            <div className="mt-5 w-[120px] h-[120px] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/Thulani-img.jpg"
                alt="Thulani Mthembu"
                width={120}
                height={120}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-white font-sans text-xl mt-6 mb-2 transition-colors duration-300 hover:text-[#fca311]">Thulani Mthembu</h2>
            <p className="text-white text-sm mb-4 transition-colors duration-300 hover:text-[#fca311]">FrontEnd React Dev</p>
            <p className="text-[#fca311] text-sm mb-2 text-center">Quick Links to Get in Touch:</p>
            <div className="flex flex-col items-center space-y-2 mb-4">
              <a href="tel:+27724315616" className="text-white hover:text-[#fca311] transition-all duration-300 flex items-center hover:scale-105">
                <Phone className="w-4 h-4 mr-2" />
                +27 72 431 5616
              </a>
              <a href="mailto:devmajxr@gmail.com" className="text-white hover:text-[#fca311] transition-all duration-300 flex items-center hover:scale-105">
                <Mail className="w-4 h-4 mr-2" />
                devmajxr@gmail.com
              </a>
            </div>
            <div className="w-[90%] bg-[#191919] rounded-[3em] p-3.5 mt-2 shadow-[3px_3px_15px_rgb(0,0,0),-3px_-3px_15px_rgb(58,58,58)] flex justify-center space-x-4 transition-all duration-300 hover:shadow-[0_0_10px_2px_#fca311]">
              <a href="https://www.linkedin.com/in/mthembu-thulani-6a2361115/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0077b5] transition-all duration-300 hover:scale-125">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c9510c] transition-all duration-300 hover:scale-125">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@thulani_majxr?_t=8qr9DcRSJSY&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00f2ea] transition-all duration-300 hover:scale-125">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={handleProceed}
          className="mt-6 px-6 py-2 bg-[#fca311] text-white font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#fca311] hover:scale-105"
        >
          View Full Portfolio
        </button>
      </div>
    </>
  )
}
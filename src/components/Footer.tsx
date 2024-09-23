import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-6 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0 order-1 sm:order-2">
            <Link href="https://www.linkedin.com/in/mthembu-thulani-6a2361115/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://github.com/ThulaniMthembu" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
            </Link>
          </div>
          <div className="text-left sm:text-center mb-4 sm:mb-0 order-2 sm:order-1">
            <p className="font-bold">Thulani Mthembu</p>
            <p>Web Developer | React Specialist</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Thulani Mthembu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
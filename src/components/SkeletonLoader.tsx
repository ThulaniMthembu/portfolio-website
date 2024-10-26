import React from 'react'

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 py-12">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="flex justify-center md:justify-end md:col-start-3 md:row-start-1 order-first md:order-last">
            <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
          </div>
          <div className="md:col-span-2 md:row-start-1">
            <div className="h-10 bg-gray-300 w-3/4 mb-3"></div>
            <div className="h-8 bg-gray-300 w-2/3 mb-5"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-3/4 mb-6"></div>
            <div className="h-6 bg-gray-300 w-1/2 mb-8"></div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="h-10 bg-gray-300 w-40 rounded-md"></div>
              <div className="h-10 bg-gray-300 w-40 rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 my-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-300 rounded-xl p-6 h-48"></div>
          ))}
        </div>

        <div className="mb-16">
          <div className="h-8 bg-gray-300 w-1/2 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-300 rounded-lg h-64"></div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="h-12 bg-gray-300 w-48 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
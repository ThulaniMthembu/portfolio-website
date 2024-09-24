'use client'

import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [isLoading])

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      {!isLoading && children}
    </>
  )
}
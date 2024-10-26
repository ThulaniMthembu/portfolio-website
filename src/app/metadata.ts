import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://devmajxr.co.za'),
  title: {
    default: 'Thulani Mthembu - Web Developer | Dev Majxr',
    template: '%s | Thulani Mthembu - Dev Majxr'
  },
  description: 'Welcome to the portfolio of Thulani Mthembu, also known as Dev Majxr, a professional web developer specializing in React, responsive web design, and performance optimization. Explore modern web development projects, resume, and get in touch for collaboration.',
  keywords: ['Thulani Mthembu', 'Dev Majxr', 'Web Developer', 'React Developer', 'Frontend Developer', 'Responsive Web Design', 'Portfolio', 'JavaScript', 'Modern Web Technologies', 'Full Stack Developer', 'South African Developer'],
  authors: [{ name: 'Thulani Mthembu', url: 'https://devmajxr.co.za' }],
  creator: 'Thulani Mthembu',
  publisher: 'Dev Majxr',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Thulani Mthembu - Web Developer | Dev Majxr',
    description: 'Portfolio of Thulani Mthembu, a web developer specializing in React and modern web technologies.',
    url: 'https://devmajxr.co.za',
    siteName: 'Thulani Mthembu Portfolio',
    images: [
      {
        url: 'https://devmajxr.co.za/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Thulani Mthembu Portfolio',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thulani Mthembu - Web Developer | Dev Majxr',
    description: 'Explore the portfolio of Thulani Mthembu, a React and web technologies specialist.',
    images: [
      {
        url: 'https://devmajxr.co.za/images/Thulani.jpg',
        alt: 'Thulani Mthembu Portfolio',
      },
    ],
    creator: '@devmajxr',
    site: '@devmajxr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://devmajxr.co.za/home',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google523f418b1738107c',
  },
  category: 'Web Development',
  other: {
    'contact:email': 'thulanim457@gmail.com',
  },
}
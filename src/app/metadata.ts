import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Thulani Mthembu - Web Developer | Dev Majxr',
  description: 'Welcome to the portfolio of Thulani Mthembu, also known as Dev Majxr, a professional web developer specializing in React, responsive web design, and performance optimization. Explore modern web development projects, resume, and get in touch for collaboration.',
  keywords: ['Thulani Mthembu', 'Dev Majxr', 'Web Developer', 'React Developer', 'Frontend Developer', 'Responsive Web Design', 'Portfolio', 'JavaScript', 'Modern Web Technologies', 'Thulani Mthembu Portfolio', 'Goku'],
  openGraph: {
    title: 'Thulani Mthembu - Web Developer | Dev Majxr',
    description: 'Portfolio of Thulani Mthembu, a web developer specializing in React and modern web technologies.',
    url: 'devmajxr.co.za',
    images: [
      {
        url: 'https://devmajxr.netlify.app/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Thulani Mthembu Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thulani Mthembu - Web Developer | Dev Majxr',
    description: 'Explore the portfolio of Thulani Mthembu, a React and web technologies specialist.',
    images: [
      {
        url: 'https://devmajxr.netlify.app/images/Thulani.jpg',
        alt: 'Thulani Mthembu Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

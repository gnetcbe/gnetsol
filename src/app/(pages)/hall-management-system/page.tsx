import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
 
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const HallManagementSystem = dynamic(
  () => import('./components/HallManagementSystem'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)
 

/* ✅ SEO METADATA */
export const metadata: Metadata = {
title: 'Hall Management Software in Coimbatore | G-Net Solutions',
  description:
  'Hall management software for venue booking, stall management, event scheduling, billing, and operations in Coimbatore.',

keywords: [
  'exhibition hall management software',
  'convention hall management system',
  'venue management software coimbatore',
  'trade fair management system',
  'event venue booking software',
  'stall management system',
  'hall booking software',
  'exhibition management solution',
  'convention center software',
  'venue operations management',
],

  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Software Development Services | G-Net Solutions',
    description:
      'Custom software and application development services tailored to business needs by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company | G-Net Solutions',
    description:
      'Professional software and application development services in Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="software-development-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Software Development Services',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://g-netsolutions.com',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'Custom Software Development',
              'Application Software Development',
              'Enterprise Software Solutions',
              'Business Process Automation',
              'Software Maintenance & Support',
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <HallManagementSystem/>
      </main>
    </>
  )
}

export default Page

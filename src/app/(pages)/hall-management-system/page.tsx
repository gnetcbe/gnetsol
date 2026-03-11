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
    title: 'Hall Management Software | G-Net Solutions',
    description:
      'Smart hall management software for venue booking, stall management, event scheduling, billing, and operations in Coimbatore.',
    url: 'https://g-netsolutions.com/hall-management-system',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hall Management Software | G-Net Solutions',
    description:
      'Professional hall management and venue booking software solutions in Coimbatore.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/hall-management-system',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="hall-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hall Management Software',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://g-netsolutions.com',
              logo: 'https://g-netsolutions.com/logo.png',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'Venue Booking Software',
              'Stall Management System',
              'Event Scheduling',
              'Billing & Invoicing',
              'Convention Hall Operations',
              'Exhibition Management',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/hall-management-system',
              priceCurrency: 'INR',
              price: 'Contact for pricing',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – BREADCRUMB */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Hall Management Software',
                item: 'https://g-netsolutions.com/hall-management-system',
              },
            ],
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – FAQ (optional) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What features does the Hall Management Software include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our hall management software includes venue booking, stall management, event scheduling, billing, and operations management.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is the Hall Management Software customizable?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, the software can be tailored to meet the needs of exhibition halls, convention centers, and event venues.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <HallManagementSystem />
      </main>
    </>
  )
}

export default Page

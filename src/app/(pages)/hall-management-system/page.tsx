import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const HallManagementSystem = dynamic(() => import('./components/HallManagementSystem'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Hall Management Software in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions offers smart hall management software in Coimbatore for venue booking, stall management, event scheduling, billing, and operations for exhibition halls and convention centers.',
  keywords: [
    'hall management software coimbatore',
    'exhibition hall management software',
    'convention hall management system',
    'venue management software coimbatore',
    'trade fair management system',
    'event venue booking software',
    'stall management system',
    'hall booking software coimbatore',
    'exhibition management solution',
    'venue operations management',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Hall Management Software in Coimbatore | G-Net Solutions',
    description:
      'Smart hall management software for venue booking, stall management, event scheduling, billing, and operations in Coimbatore.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/hall-management-system',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hall Management Software - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hall Management Software in Coimbatore | G-Net Solutions',
    description:
      'Professional hall management and venue booking software solutions in Coimbatore by G-Net Solutions.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/hall-management-system',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="hall-management-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Hall Management Software',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              // ✅ www added
              url: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
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
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/hall-management-system',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="hall-breadcrumb-schema"
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
                item: 'https://www.g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Hall Management Software',
                item: 'https://www.g-netsolutions.com/hall-management-system',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="hall-faq-schema"
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
                  text: 'Our hall management software in Coimbatore includes venue booking, stall management, event scheduling, billing, and operations management for exhibition halls and convention centers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is the Hall Management Software customizable?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, the software can be tailored to meet the specific needs of exhibition halls, convention centers, and event venues.',
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
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import MaintenanceCTA from './components/MaintenanceCTA'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const WebsiteMaintenance = dynamic(() => import('./components/WebsiteMaintenance'))
const PricingFactors = dynamic(() => import('./components/PricingFactors'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Website Maintenance Services in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions provides professional website maintenance services in Coimbatore including updates, security monitoring, backups, performance optimization, and technical support across Tamil Nadu.',
  keywords: [
    'website maintenance services coimbatore',
    'website maintenance company in coimbatore',
    'website support services coimbatore',
    'website security maintenance coimbatore',
    'website update services coimbatore',
    'website performance optimization coimbatore',
    'g-net solutions website maintenance',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Website Maintenance Services in Coimbatore | G-Net Solutions',
    description:
      'Reliable website maintenance and support services in Coimbatore to keep your website secure, updated, and performing at its best.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/website-maintenance',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Website Maintenance Services - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Maintenance Services in Coimbatore | G-Net Solutions',
    description:
      'Professional website maintenance, updates, and support by G-Net Solutions in Coimbatore.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/website-maintenance',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="website-maintenance-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Maintenance Services',
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
              'Website Maintenance',
              'Website Security Monitoring',
              'Content Updates',
              'Performance Optimization',
              'Backup & Recovery',
              'Technical Support',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/website-maintenance',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="website-maintenance-breadcrumb-schema"
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
                name: 'Website Maintenance',
                item: 'https://www.g-netsolutions.com/website-maintenance',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="website-maintenance-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you provide ongoing website support in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, G-Net Solutions provides continuous website support in Coimbatore including updates, monitoring, and technical assistance to keep your website running smoothly.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with website security in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely, our website maintenance services in Coimbatore include proactive security monitoring, patching, and backup solutions.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <WebsiteMaintenance />
        <PricingFactors />
        <MaintenanceCTA />
      </main>
    </>
  )
}

export default Page
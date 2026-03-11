import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOAD HEAVY SECTIONS */
const WebDevelopmentNew = dynamic(
  () => import('./components/WebDevelopmentNew'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

const DesignProcessPage = dynamic(
  () => import('./components/DesignProcessPage'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Website Development Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a leading website development company in Coimbatore offering custom web development, responsive design, eCommerce solutions, and CMS development.',
  keywords: [
    'website development company in coimbatore',
    'web development services',
    'custom website development',
    'responsive web design',
    'ecommerce website development',
    'cms development',
    'web design company coimbatore',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Website Development Company in Coimbatore | G-Net Solutions',
    description:
      'Professional website development services including custom design, eCommerce, CMS, and responsive websites.',
    url: 'https://g-netsolutions.com/web-development',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | G-Net Solutions',
    description:
      'Custom website development and responsive web solutions by G-Net Solutions, Coimbatore.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/web-development',
  },
}

const WebDevelopmentPage = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="web-development-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Development Services',
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
              'Custom Website Development',
              'Responsive Web Design',
              'E-Commerce Development',
              'CMS Development',
              'Website Maintenance',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/web-development',
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
                name: 'Web Development',
                item: 'https://g-netsolutions.com/web-development',
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
                name: 'Do you build eCommerce websites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we specialize in building scalable eCommerce websites with secure payment gateways and custom features.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you develop CMS-based websites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely, we provide CMS development services including WordPress, Drupal, and custom CMS solutions.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <WebDevelopmentNew />
        <DesignProcessPage />
      </main>
    </>
  )
}

export default WebDevelopmentPage

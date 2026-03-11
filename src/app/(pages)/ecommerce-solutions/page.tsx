import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const EcommerceSolutions = dynamic(
  () => import('./components/EcommerceSolutions'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

const EcommerceGrowthSolutions = dynamic(
  () => import('./components/EcommerceGrowthSolutions'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'E-Commerce Website Development Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions offers professional e-commerce website development services in Coimbatore including online store setup, payment gateway integration, and growth-driven e-commerce solutions.',
  keywords: [
    'ecommerce website development company in coimbatore',
    'ecommerce solutions',
    'online store development',
    'shopping cart development',
    'payment gateway integration',
    'ecommerce growth solutions',
    'ecommerce website design',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'E-Commerce Website Development | G-Net Solutions',
    description:
      'Custom e-commerce website development and growth solutions by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com/ecommerce',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Services | G-Net Solutions',
    description:
      'Build and grow your online store with expert e-commerce solutions from G-Net Solutions.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/ecommerce',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="ecommerce-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'E-Commerce Website Development Services',
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
              'E-Commerce Website Development',
              'Online Store Setup',
              'Payment Gateway Integration',
              'Shopping Cart Development',
              'E-Commerce Growth Optimization',
              'Maintenance & Support',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/ecommerce',
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
                name: 'E-Commerce',
                item: 'https://g-netsolutions.com/ecommerce',
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
                name: 'What e-commerce services do you provide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide online store setup, payment gateway integration, shopping cart development, growth optimization, and ongoing support.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer maintenance for e-commerce websites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide maintenance and support services to ensure your online store runs smoothly.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <EcommerceSolutions />
        <EcommerceGrowthSolutions />
      </main>
    </>
  )
}

export default Page

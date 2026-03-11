import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import ProductsPage from './components/ProductsPage'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const SoftwareDevelopment = dynamic(
  () => import('./components/SoftwareDevelopment'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

const ApplicationSoftware = dynamic(
  () => import('./components/ApplicationSoftware'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Software Development Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a trusted software development company in Coimbatore delivering custom software, application development, and scalable digital solutions for businesses.',
  keywords: [
    'software development company in coimbatore',
    'custom software development',
    'application software development',
    'business software solutions',
    'enterprise application development',
    'software services coimbatore',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Software Development Services | G-Net Solutions',
    description:
      'Custom software and application development services tailored to business needs by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com/software-development',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company | G-Net Solutions',
    description:
      'Professional software and application development services in Coimbatore.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/software-development',
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
              logo: 'https://g-netsolutions.com/logo.png',
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
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/software-development',
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
                name: 'Software Development',
                item: 'https://g-netsolutions.com/software-development',
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
                name: 'What types of software development services do you provide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide custom software development, application software, enterprise solutions, business process automation, and ongoing support.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer scalable solutions for businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, our software solutions are designed to scale with your business needs, ensuring long-term growth and efficiency.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <SoftwareDevelopment />
        <ApplicationSoftware />
        <ProductsPage />
      </main>
    </>
  )
}

export default Page

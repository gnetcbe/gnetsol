import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero' 
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED HEAVY SECTIONS */
const DomainRegistration = dynamic(
  () => import('./components/DomainRegistration'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

const WebHostingShared = dynamic(
  () => import('./components/WebHostingShared'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

const HostingTypesPage = dynamic(
  () => import('./components/HostingTypesPage'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

const KeyTakeawaysPage = dynamic(
  () => import('./components/KeyTakeawaysPage'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Domain Registration & Web Hosting Services in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions provides domain registration, web hosting, email hosting, and web services in Coimbatore. Reliable, secure, and scalable solutions with expert support.',
  keywords: [
    'domain registration coimbatore',
    'web hosting coimbatore',
    'domain name services',
    'shared hosting',
    'business email hosting',
    'website services coimbatore',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Domain Registration & Web Hosting | G-Net Solutions',
    description:
      'Secure domain registration and reliable web hosting services by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com/domain-hosting',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domain & Hosting Services | G-Net Solutions',
    description:
      'Professional domain registration and web hosting services in Coimbatore.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/domain-hosting',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="domain-hosting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Domain Registration & Web Hosting Services',
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
              'Domain Registration',
              'Shared Web Hosting',
              'Business Email Hosting',
              'Dedicated Hosting',
              'Cloud Hosting',
              'Website Services',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/domain-hosting',
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
                name: 'Domain & Hosting',
                item: 'https://g-netsolutions.com/domain-hosting',
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
                name: 'Do you provide business email hosting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide secure business email hosting solutions including Google Workspace, Microsoft 365, and Zoho Mail.',
                },
              },
              {
                '@type': 'Question',
                name: 'What types of hosting do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer shared hosting, dedicated hosting, cloud hosting, and customized hosting solutions based on client needs.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <DomainRegistration />
        <WebHostingShared /> 
        <HostingTypesPage /> 
        <KeyTakeawaysPage />
      </main>
    </>
  )
}

export default Page

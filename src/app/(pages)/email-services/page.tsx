import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const BusinessEmailHosting = dynamic(
  () => import('./components/BusinessEmailHosting'),
  { loading: () => <div style={{ minHeight: 280 }} /> }
)

const GoogleWorkspace = dynamic(
  () => import('./components/GoogleWorkspace'),
  { loading: () => <div style={{ minHeight: 280 }} /> }
)

const Microsoft365 = dynamic(
  () => import('./components/Microsoft365'),
  { loading: () => <div style={{ minHeight: 280 }} /> }
)

const ZohoEmailServices = dynamic(
  () => import('./components/ZohoEmailServices'),
  { loading: () => <div style={{ minHeight: 280 }} /> }
)

const EmailHostingServices = dynamic(
  () => import('./components/EmailHostingServices'),
  { loading: () => <div style={{ minHeight: 280 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Business Email Hosting Services in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions offers professional business email hosting services in Coimbatore including Google Workspace, Microsoft 365, Zoho Mail, and secure email solutions for businesses.',
  keywords: [
    'business email hosting coimbatore',
    'google workspace services',
    'microsoft 365 business',
    'zoho mail services',
    'email hosting solutions',
    'professional business email',
    'corporate email services',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Business Email Hosting Services | G-Net Solutions',
    description:
      'Secure and reliable business email hosting solutions including Google Workspace, Microsoft 365, and Zoho Mail.',
    url: 'https://g-netsolutions.com/email-hosting',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Email Hosting Services | G-Net Solutions',
    description:
      'Professional business email hosting and collaboration tools for growing businesses.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/email-hosting',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="business-email-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Email Hosting Services',
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
              'Business Email Hosting',
              'Google Workspace',
              'Microsoft 365',
              'Zoho Mail Services',
              'Secure Email Hosting',
              'Email Migration & Support',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/email-hosting',
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
                name: 'Business Email Hosting',
                item: 'https://g-netsolutions.com/email-hosting',
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
                name: 'What business email hosting services do you provide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide Google Workspace, Microsoft 365, Zoho Mail, secure email hosting, and migration support.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer support for email migration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide full migration and ongoing support to ensure a smooth transition to business email hosting.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <BusinessEmailHosting />
        <GoogleWorkspace />
        <Microsoft365 />
        <ZohoEmailServices />
        <EmailHostingServices />
      </main>
    </>
  )
}

export default Page

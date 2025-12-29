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
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Email Hosting Services | G-Net Solutions',
    description:
      'Professional business email hosting and collaboration tools for growing businesses.',
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

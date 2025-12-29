import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import MaintenanceCTA from './components/MaintenanceCTA'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const WebsiteMaintenance = dynamic(
  () => import('./components/WebsiteMaintenance'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

const PricingFactors = dynamic(
  () => import('./components/PricingFactors'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Website Maintenance Services in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions provides professional website maintenance services in Coimbatore including updates, security monitoring, backups, performance optimization, and technical support.',
  keywords: [
    'website maintenance services',
    'website maintenance company in coimbatore',
    'website support services',
    'website security maintenance',
    'website update services',
    'website performance optimization',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Website Maintenance Services | G-Net Solutions',
    description:
      'Reliable website maintenance and support services to keep your website secure, updated, and performing at its best.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Maintenance Services | G-Net Solutions',
    description:
      'Professional website maintenance, updates, and support by G-Net Solutions, Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA (SERVICE SCHEMA) */}
      <Script
        id="website-maintenance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Maintenance Services',
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
              'Website Maintenance',
              'Website Security Monitoring',
              'Content Updates',
              'Performance Optimization',
              'Backup & Recovery',
              'Technical Support',
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

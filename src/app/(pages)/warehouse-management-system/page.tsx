import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const WarehouseManagementSystem = dynamic(
  () => import('./components/WarehouseManagementSystem'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)
 

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Bonded Warehouse Management System Software in Coimbatore | G-Net Solutions',

description:
  'Advanced bonded warehouse management system software for inventory control, customs compliance, in-bond and ex-bond operations, reporting, and secure warehouse management in Coimbatore.',

keywords: [
  'bonded warehouse management system',
  'bonded warehouse software',
  'customs bonded warehouse software',
  'in bond ex bond management system',
  'warehouse management system for customs',
  'inventory control bonded warehouse',
  'customs compliance software',
  'bonded warehouse inventory system',
  'warehouse software coimbatore',
  'logistics management software',
],

  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Software Development Services | G-Net Solutions',
    description:
      'Custom software and application development services tailored to business needs by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company | G-Net Solutions',
    description:
      'Professional software and application development services in Coimbatore.',
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
          }),
        }}
      />

      <main>
        <Hero />
        <WarehouseManagementSystem />
      </main>
    </>
  )
}

export default Page

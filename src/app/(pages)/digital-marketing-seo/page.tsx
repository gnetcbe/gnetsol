import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const DigitalMarketing = dynamic(
  () => import('./components/DigitalMarketing'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

const DigitalMarketingBenefits = dynamic(
  () => import('./components/DigitalMarketingBenefits'),
  { loading: () => <div style={{ minHeight: 250 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Digital Marketing Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a leading digital marketing company in Coimbatore offering SEO, social media marketing, PPC advertising, content marketing, and online growth solutions.',
  keywords: [
    'digital marketing company in coimbatore',
    'seo services coimbatore',
    'social media marketing',
    'ppc advertising services',
    'online marketing services',
    'content marketing',
    'digital branding solutions',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Digital Marketing Services | G-Net Solutions',
    description:
      'Grow your business online with expert digital marketing services including SEO, SMM, PPC, and content marketing.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company | G-Net Solutions',
    description:
      'Professional digital marketing and online growth services in Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="digital-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Digital Marketing Services',
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
              'Search Engine Optimization (SEO)',
              'Social Media Marketing',
              'Pay-Per-Click Advertising',
              'Content Marketing',
              'Online Branding',
              'Lead Generation',
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <DigitalMarketing />
        <DigitalMarketingBenefits />
      </main>
    </>
  )
}

export default Page

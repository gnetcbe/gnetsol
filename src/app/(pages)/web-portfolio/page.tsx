import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero' 
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED HEAVY SECTIONS */
const Works = dynamic(
  () => import('./components/Works'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

const Works2 = dynamic(
  () => import('./components/RecentWorks'),
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
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domain & Hosting Services | G-Net Solutions',
    description:
      'Professional domain registration and web hosting services in Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA FOR SEO */}
      <Script
        id="seo-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
            telephone: '+91-9751959300',
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
            ],
            areaServed: 'IN',
            priceRange: '$$',
          }),
        }}
      />

      <main>
        <Hero />
        <Works />
        <Works2 /> 
 
      </main>
    </>
  )
}

export default Page

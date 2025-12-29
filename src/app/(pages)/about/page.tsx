import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const AboutUs = dynamic(
  () => import('./components/AboutUs'),
  { loading: () => <div style={{ minHeight: 260 }} /> }
)

const CounterArea = dynamic(
  () => import('./components/CounterArea'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

const Choose = dynamic(
  () => import('./components/Choose'),
  { loading: () => <div style={{ minHeight: 240 }} /> }
)

const WhyGnet = dynamic(
  () => import('./components/WhyGnet'),
  { loading: () => <div style={{ minHeight: 240 }} /> }
)

const Service = dynamic(
  () => import('./components/Service'),
  { loading: () => <div style={{ minHeight: 260 }} /> }
)

const Works = dynamic(
  () => import('./components/Works'),
  { loading: () => <div style={{ minHeight: 240 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'About G-Net Solutions | IT & Web Development Company in Coimbatore',
  description:
    'Learn about G-Net Solutions, a trusted IT and web development company in Coimbatore delivering website development, software solutions, digital marketing, and IT services.',
  keywords: [
    'about g-net solutions',
    'it company in coimbatore',
    'web development company coimbatore',
    'software development company',
    'digital marketing company',
    'it services provider',
    'g-net solutions',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'About G-Net Solutions',
    description:
      'Discover G-Net Solutions – your trusted partner for web development, software, and digital marketing services.',
    url: 'https://g-netsolutions.com/about',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About G-Net Solutions',
    description:
      'Know more about G-Net Solutions, a leading IT services company in Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – ORGANIZATION */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
              'https://www.youtube.com/@g-netsolutions5132',
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <AboutUs />
        <CounterArea />
        <Choose />
        <WhyGnet />
        <Service />
        <Works />
      </main>
    </>
  )
}

export default Page

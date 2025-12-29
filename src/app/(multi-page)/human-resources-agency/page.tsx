import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Header from './components/Header'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title3.svg'

/* 🔥 LAZY-LOADED HOME SECTIONS */
const About = dynamic(() => import('./components/About'), {
  loading: () => <div style={{ minHeight: 240 }} />,
})

const Choose = dynamic(() => import('./components/Choose'), {
  loading: () => <div style={{ minHeight: 220 }} />,
})

const Service = dynamic(() => import('./components/Services2'), {
  loading: () => <div style={{ minHeight: 260 }} />,
})

const WorkProcess = dynamic(() => import('./components/WorkProcess'), {
  loading: () => <div style={{ minHeight: 240 }} />,
})

/* ✅ HOME PAGE SEO METADATA */
export const metadata: Metadata = {
  title: 'G-Net Solutions | Website Development & IT Services in Coimbatore',
  description:
    'G-Net Solutions is a leading IT services and website development company in Coimbatore offering web development, software solutions, digital marketing, hosting, and business IT services.',
  keywords: [
    'g-net solutions',
    'website development company in coimbatore',
    'it services company coimbatore',
    'web design company',
    'software development company',
    'digital marketing company',
    'business email hosting',
    'web hosting services',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'G-Net Solutions | Web Development & IT Services',
    description:
      'Professional website development, software solutions, and digital marketing services by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-Net Solutions | Web & IT Services',
    description:
      'Leading IT services and website development company in Coimbatore.',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 ORGANIZATION SCHEMA – HOME PAGE */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            logo: 'https://g-netsolutions.com/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9751959300',
              contactType: 'customer support',
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

      <Header />
      <main>
        <Hero />
        <About />
        <Choose />
        <Service />
        <WorkProcess />
      </main>
    </>
  )
}

export default Page

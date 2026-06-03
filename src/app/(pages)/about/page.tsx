import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY-LOADED SECTIONS — no loading placeholders to avoid blocking SSR */
const AboutUs = dynamic(() => import('./components/AboutUs'))
const CounterArea = dynamic(() => import('./components/CounterArea'))
const Choose = dynamic(() => import('./components/Choose'))
const WhyGnet = dynamic(() => import('./components/WhyGnet'))
const Service = dynamic(() => import('./components/Service'))
const Works = dynamic(() => import('./components/Works'))
const RecentWorks = dynamic(() => import('./components/RecentWorks'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  // ✅ Keyword first
  title: 'IT & Web Development Company in Coimbatore | About G-Net Solutions',
  description:
    'G-Net Solutions is a trusted IT and web development company in Coimbatore with 25+ years of experience delivering website development, software solutions, digital marketing, and IT services across Tamil Nadu.',
  keywords: [
    'it company in coimbatore',
    'web development company coimbatore',
    'about g-net solutions',
    'software development company coimbatore',
    'digital marketing company coimbatore',
    'it services coimbatore',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'IT & Web Development Company in Coimbatore | About G-Net Solutions',
    description:
      'Discover G-Net Solutions – your trusted partner for web development, software, and digital marketing services in Coimbatore, Tamil Nadu.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/about',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'G-Net Solutions - IT & Web Development Company in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT & Web Development Company in Coimbatore | About G-Net Solutions',
    description:
      'Know more about G-Net Solutions, a leading IT and web development company in Coimbatore with 25+ years of experience.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/about',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ ORGANIZATION SCHEMA */}
      <Script
        id="about-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            // ✅ www added
            url: 'https://www.g-netsolutions.com',
            logo: 'https://www.g-netsolutions.com/logo.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Lakshmi Nagar, Thaneer Pandal,V.K. Road, Peelamedu,(Near TIDEL Park)',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641004',
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

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="about-breadcrumb-schema"
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
                item: 'https://www.g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: 'https://www.g-netsolutions.com/about',
              },
            ],
          }),
        }}
      />

      {/* ❌ Removed FAQPage schema — About page has no visible FAQ section */}

      <main>
        <Hero />
        <AboutUs />
        <CounterArea />
        <Choose />
        <WhyGnet />
        <Service />
        <Works />
        <RecentWorks />
      </main>
    </>
  )
}

export default Page
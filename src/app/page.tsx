import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './home/components/Hero'
import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import TopBar from '@/components/layouts/TopBar/page'

/* 🔥 LAZY-LOADED HOME SECTIONS */
const About = dynamic(() => import('./home/components/About'))
const Choose = dynamic(() => import('./home/components/Choose'))
const Service = dynamic(() => import('./home/components/Services2'))
const WorkProcess = dynamic(() => import('./home/components/WorkProcess'))

/* ✅ HOME PAGE SEO METADATA */
export const metadata: Metadata = {
  // ✅ Keyword first, then brand
  title: 'Web Development Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a leading web development company in Coimbatore offering website design, software development, SEO, and IT services across Tamil Nadu.',
  keywords: [
    'web development company in coimbatore',
    'website design company coimbatore',
    'software development company coimbatore',
    'it company coimbatore',
    'digital marketing coimbatore',
    'seo company coimbatore',
    'web hosting coimbatore',
    'g-net solutions',
  ],
  icons: {
    icon: 'https://g-netsolutions.com/logo.png',
  },
  openGraph: {
    title: 'Web Development Company in Coimbatore | G-Net Solutions',
    description:
      'Professional website development, software solutions, and digital marketing services by G-Net Solutions, Coimbatore.',
    url: 'https://www.g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: 'https://g-netsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'G-Net Solutions - Web Development Company in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Coimbatore | G-Net Solutions',
    description:
      'Leading web development and IT services company in Coimbatore, Tamil Nadu.',
  },
  alternates: {
    canonical: 'https://www.g-netsolutions.com/',
  },
    // ✅ Add this
  verification: {
    other: {
      'msvalidate.01': 'EFED9E668B623DC54BEA5CB56D54BF0B',
    },
  },

}

const Page = () => {
  return (
    <>
      {/* ✅ LOCAL BUSINESS SCHEMA — Critical for local SEO */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'G-Net Solutions',
            url: 'https://www.g-netsolutions.com',
            logo: 'https://g-netsolutions.com/logo.png',
            image: 'https://g-netsolutions.com/logo.png',
            description:
              'G-Net Solutions is a web development and IT services company based in Coimbatore, Tamil Nadu, offering website design, software development, SEO, and digital marketing.',
            telephone: '+91-9751959300',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Lakshmi Nagar, Thaneer Pandal,V.K. Road, Peelamedu,(Near TIDEL Park)',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641004',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 11.03322,   // ✅ Replace with your exact lat
              longitude: 77.01314,  // ✅ Replace with your exact lng
            }, 
            openingHours: 'Mo-Sa 09:00-18:00',
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
              'https://www.youtube.com/@g-netsolutions5132',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web & IT Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Digital Marketing' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Hosting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development' } },
              ],
            },
          }),
        }}
      />

      <TopBar />
      <main>
        {/* ✅ H1 styled to be visually hidden but readable by Google */}
        <h1
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            border: '0',
          }}
        >
          Web Development Company in Coimbatore - G-Net Solutions
        </h1>
        <Hero />
        <About />
        <Choose />
        <Service />
        <WorkProcess />
      </main>
      <CTA />
      <Footer />
    </>
  )
}

export default Page
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import MapWrapper from './components/MapWrapper'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const ContactArea = dynamic(() => import('./components/ContactArea'))

 

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  // ✅ Keyword first
  title: 'Contact Web Development & IT Services Company in Coimbatore | G-Net Solutions',
  description:
    'Get in touch with G-Net Solutions, a leading web development company in Coimbatore. Contact us for website development, digital marketing, software solutions, and IT services via phone, email, or visit our office.',
  keywords: [
    'contact web development company coimbatore',
    'it company contact coimbatore',
    'g-net solutions contact',
    'web development company contact coimbatore',
    'digital marketing company coimbatore contact',
    'software company coimbatore contact',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Contact Web Development & IT Services Company in Coimbatore | G-Net Solutions',
    description:
      'Reach G-Net Solutions for professional IT, web development, and digital marketing services in Coimbatore, Tamil Nadu.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/contact',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact G-Net Solutions - Web Development Company in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Web Development & IT Services Company in Coimbatore | G-Net Solutions',
    description:
      'Contact G-Net Solutions in Coimbatore for web development, software, and digital marketing services.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/contact',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ LOCAL BUSINESS SCHEMA — best schema for contact page */}
      <Script
        id="contact-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'G-Net Solutions',
            // ✅ www added
            url: 'https://www.g-netsolutions.com',
            telephone: '+91-9751959300',
            logo: 'https://www.g-netsolutions.com/logo.png',
            image: 'https://www.g-netsolutions.com/og-image.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Lakshmi Nagar, Thaneer Pandal, V.K.Road, Peelamedu',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641004',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 11.0168,
              longitude: 76.9558,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9751959300',
              contactType: 'customer support',
              areaServed: 'IN',
              availableLanguage: ['English', 'Tamil'],
            },
            openingHours: 'Mo-Fr 09:00-18:00',
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
        id="contact-breadcrumb-schema"
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
                name: 'Contact',
                item: 'https://www.g-netsolutions.com/contact',
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <ContactArea />
        <MapWrapper />
      </main>
    </>
  )
}

export default Page
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const ContactArea = dynamic(() => import('./components/ContactArea'), {
  loading: () => <div style={{ minHeight: 300 }} />,
})

const Map = dynamic(() => import('./components/Map'), {
  loading: () => <div style={{ minHeight: 300 }} />,
})

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Contact G-Net Solutions | Web & IT Services in Coimbatore',
  description:
    'Get in touch with G-Net Solutions, Coimbatore for website development, digital marketing, software solutions, and IT services. Contact us via phone, email, or visit our office.',
  keywords: [
    'contact g-net solutions',
    'it company contact coimbatore',
    'web development company contact',
    'digital marketing company contact',
    'software company coimbatore contact',
    'g-net solutions contact',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Contact G-Net Solutions | Coimbatore',
    description:
      'Reach G-Net Solutions for professional IT, web development, and digital marketing services in Coimbatore.',
    url: 'https://g-netsolutions.com/contact',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact G-Net Solutions',
    description:
      'Contact G-Net Solutions, Coimbatore for web development, software, and digital marketing services.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/contact',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – LOCAL BUSINESS */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            telephone: '+91-9751959300',
            logo: 'https://g-netsolutions.com/logo.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Lakshmi Nagar, Thaneer Pandal, V.K.Road, Peelamedu',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641004',
              addressCountry: 'IN',
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

      {/* 🔍 STRUCTURED DATA – BREADCRUMB */}
      <Script
        id="breadcrumb-schema"
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
                item: 'https://g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://g-netsolutions.com/contact',
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <ContactArea />
        <Map />
      </main>
    </>
  )
}

export default Page

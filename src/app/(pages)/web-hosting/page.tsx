import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const DomainRegistration = dynamic(() => import('./components/DomainRegistration'))
const WebHostingShared = dynamic(() => import('./components/WebHostingShared'))
const HostingTypesPage = dynamic(() => import('./components/HostingTypesPage'))
const KeyTakeawaysPage = dynamic(() => import('./components/KeyTakeawaysPage'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Best Web Hosting Services in Coimbatore | Domain Registration & Hosting | G-Net Solutions',
  description:
    'G-Net Solutions provides domain registration, web hosting, email hosting, and web services in Coimbatore. Reliable, secure, and scalable hosting solutions with expert support across Tamil Nadu.',
  keywords: [
    'domain registration coimbatore',
    'web hosting coimbatore',
    'domain name services coimbatore',
    'shared hosting coimbatore',
    'business email hosting coimbatore',
    'website hosting services coimbatore',
    'cloud hosting coimbatore',
    'g-net solutions web hosting',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Domain Registration & Web Hosting Services in Coimbatore | G-Net Solutions',
    description:
      'Secure domain registration and reliable web hosting services by G-Net Solutions in Coimbatore, Tamil Nadu.',
    // ✅ correct slug + www
    url: 'https://www.g-netsolutions.com/web-hosting',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Domain Registration & Web Hosting - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domain Registration & Web Hosting in Coimbatore | G-Net Solutions',
    description:
      'Professional domain registration and web hosting services in Coimbatore by G-Net Solutions.',
  },
  alternates: {
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/web-hosting',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="web-hosting-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Domain Registration & Web Hosting Services',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              // ✅ www added
              url: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'Domain Registration',
              'Shared Web Hosting',
              'Business Email Hosting',
              'Dedicated Hosting',
              'Cloud Hosting',
              'Website Services',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/web-hosting',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="web-hosting-breadcrumb-schema"
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
                name: 'Web Hosting',
                item: 'https://www.g-netsolutions.com/web-hosting',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="web-hosting-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you provide business email hosting in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, G-Net Solutions provides secure business email hosting solutions in Coimbatore including Google Workspace, Microsoft 365, and Zoho Mail.',
                },
              },
              {
                '@type': 'Question',
                name: 'What types of hosting do you offer in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer shared hosting, dedicated hosting, cloud hosting, and customized hosting solutions for businesses in Coimbatore, Tamil Nadu.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <DomainRegistration />
        <WebHostingShared />
        <HostingTypesPage />
        <KeyTakeawaysPage />
      </main>
    </>
  )
}

export default Page
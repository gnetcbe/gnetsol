import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const WebDevelopmentNew = dynamic(() => import('./components/WebDevelopmentNew'))
const DesignProcessPage = dynamic(() => import('./components/DesignProcessPage'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Web Development Company in Coimbatore | Custom Website Design Services | G-Net Solutions',
  description:
    'G-Net Solutions is a leading website development company in Coimbatore offering custom web development, responsive design, eCommerce solutions, and CMS development across Tamil Nadu.',
  keywords: [
    'website development company in coimbatore',
    'web development services coimbatore',
    'custom website development coimbatore',
    'responsive web design coimbatore',
    'ecommerce website development coimbatore',
    'cms development coimbatore',
    'web design company coimbatore',
    'g-net solutions web development',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Web Development Company in Coimbatore | Custom Website Design Services | G-Net Solutions',
    description:
      'Professional website development services including custom design, eCommerce, CMS, and responsive websites in Coimbatore, Tamil Nadu.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/web-development',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Website Development Company - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Coimbatore | Custom Website Design Services | G-Net Solutions',
    description:
      'Custom website development and responsive web solutions by G-Net Solutions in Coimbatore.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/web-development',
  },
}

const WebDevelopmentPage = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="web-development-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Development Services',
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
              'Custom Website Development',
              'Responsive Web Design',
              'E-Commerce Development',
              'CMS Development',
              'Website Maintenance',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/web-development',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="web-development-breadcrumb-schema"
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
                name: 'Web Development',
                item: 'https://www.g-netsolutions.com/web-development',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="web-development-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you build eCommerce websites in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, G-Net Solutions specializes in building scalable eCommerce websites with secure payment gateways and custom features for businesses in Coimbatore, Tamil Nadu.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you develop CMS-based websites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely, we provide CMS development services including WordPress, Drupal, and custom CMS solutions for businesses in Coimbatore.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <WebDevelopmentNew />
        <DesignProcessPage />
      </main>
    </>
  )
}

export default WebDevelopmentPage
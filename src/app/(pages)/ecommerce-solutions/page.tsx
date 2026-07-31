import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const EcommerceSolutions = dynamic(() => import('./components/EcommerceSolutions'))
const EcommerceGrowthSolutions = dynamic(() => import('./components/EcommerceGrowthSolutions'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'E-Commerce Website Development Company in Coimbatore | Shopify, WooCommerce & BigCommerce | G-Net Solutions',
  description:
    'G-Net Solutions offers professional e-commerce website development services in Coimbatore including online store setup, payment gateway integration, and growth-driven e-commerce solutions across Tamil Nadu.',
  keywords: [
    'ecommerce website development company in coimbatore',
    'ecommerce solutions coimbatore',
    'online store development coimbatore',
    'shopping cart development',
    'payment gateway integration coimbatore',
    'ecommerce website design coimbatore',
    'ecommerce growth solutions',
    'g-net solutions ecommerce',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'E-Commerce Website Development Company in Coimbatore | Shopify, WooCommerce & BigCommerce | G-Net Solutions',
    description:
      'Custom e-commerce website development and growth solutions by G-Net Solutions, Coimbatore, Tamil Nadu.',
    // ✅ correct slug + www
    url: 'https://www.g-netsolutions.com/ecommerce-solutions',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Website Development - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Website Development Company in Coimbatore | Shopify, WooCommerce & BigCommerce | G-Net Solutions',
    description:
      'Build and grow your online store with expert e-commerce solutions from G-Net Solutions in Coimbatore.',
  },
  alternates: {
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/ecommerce-solutions',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="ecommerce-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'E-Commerce Website Development Services',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'E-Commerce Website Development',
              'Online Store Setup',
              'Payment Gateway Integration',
              'Shopping Cart Development',
              'E-Commerce Growth Optimization',
              'Maintenance & Support',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/ecommerce-solutions',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="ecommerce-breadcrumb-schema"
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
                name: 'E-Commerce Solutions',
                item: 'https://www.g-netsolutions.com/ecommerce-solutions',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="ecommerce-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What e-commerce services do you provide in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'G-Net Solutions provides online store setup, payment gateway integration, shopping cart development, growth optimization, and ongoing e-commerce support in Coimbatore, Tamil Nadu.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer maintenance for e-commerce websites?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide maintenance and support services to ensure your online store runs smoothly and securely.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <EcommerceSolutions />
        <EcommerceGrowthSolutions />
      </main>
    </>
  )
}

export default Page
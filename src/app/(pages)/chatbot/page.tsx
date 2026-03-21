import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const Chatbot = dynamic(
  () => import('./components/Chatbot'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Bonded Warehouse Management System Software in Coimbatore | G-Net Solutions',
  description:
    'Advanced bonded warehouse management system software for inventory control, customs compliance, in-bond and ex-bond operations, reporting, and secure warehouse management in Coimbatore.',
  keywords: [
    'bonded warehouse management system',
    'bonded warehouse software',
    'customs bonded warehouse software',
    'in bond ex bond management system',
    'warehouse management system for customs',
    'inventory control bonded warehouse',
    'customs compliance software',
    'bonded warehouse inventory system',
    'warehouse software coimbatore',
    'logistics management software',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Bonded Warehouse Management Software | G-Net Solutions',
    description:
      'Smart bonded warehouse management software for inventory control, customs compliance, and logistics operations in Coimbatore.',
    url: 'https://g-netsolutions.com/chatbot',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonded Warehouse Management Software | G-Net Solutions',
    description:
      'Professional bonded warehouse management and logistics software solutions in Coimbatore.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/chatbot',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – SERVICE SCHEMA */}
      <Script
        id="warehouse-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Bonded Warehouse Management System',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://g-netsolutions.com',
              logo: 'https://g-netsolutions.com/logo.png',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'Bonded Warehouse Management',
              'Inventory Control',
              'Customs Compliance',
              'In-Bond and Ex-Bond Operations',
              'Reporting & Analytics',
              'Secure Warehouse Management',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://g-netsolutions.com/warehouse-management-system',
              priceCurrency: 'INR',
              price: 'Contact for pricing',
              availability: 'https://schema.org/InStock',
            },
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
                name: 'Warehouse Management System',
                item: 'https://g-netsolutions.com/warehouse-management-system',
              },
            ],
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – FAQ (optional) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a bonded warehouse management system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It is specialized software designed to manage bonded warehouses, ensuring customs compliance, inventory control, and smooth in-bond/ex-bond operations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does the software support customs compliance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, the system is built to handle customs regulations, documentation, and compliance for bonded warehouses.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <Chatbot />
      </main>
    </>
  )
}

export default Page

import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const WarehouseManagementSystem = dynamic(() => import('./components/WarehouseManagementSystem'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Bonded Warehouse Management System in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions offers advanced bonded warehouse management system software in Coimbatore for inventory control, customs compliance, in-bond and ex-bond operations, reporting, and secure warehouse management.',
  keywords: [
    'bonded warehouse management system coimbatore',
    'bonded warehouse software coimbatore',
    'customs bonded warehouse software',
    'in bond ex bond management system',
    'warehouse management system coimbatore',
    'inventory control bonded warehouse',
    'customs compliance software coimbatore',
    'warehouse software coimbatore',
    'logistics management software coimbatore',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Bonded Warehouse Management System in Coimbatore | G-Net Solutions',
    description:
      'Smart bonded warehouse management software for inventory control, customs compliance, and logistics operations in Coimbatore.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/warehouse-management-system',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bonded Warehouse Management System - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonded Warehouse Management System in Coimbatore | G-Net Solutions',
    description:
      'Professional bonded warehouse management and logistics software solutions in Coimbatore by G-Net Solutions.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/warehouse-management-system',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="warehouse-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Bonded Warehouse Management System',
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
              'Bonded Warehouse Management',
              'Inventory Control',
              'Customs Compliance',
              'In-Bond and Ex-Bond Operations',
              'Reporting & Analytics',
              'Secure Warehouse Management',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/warehouse-management-system',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="warehouse-breadcrumb-schema"
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
                name: 'Warehouse Management System',
                item: 'https://www.g-netsolutions.com/warehouse-management-system',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="warehouse-faq-schema"
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
                  text: 'It is specialized software designed to manage bonded warehouses in Coimbatore, ensuring customs compliance, inventory control, and smooth in-bond/ex-bond operations.',
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
        <WarehouseManagementSystem />
      </main>
    </>
  )
}

export default Page
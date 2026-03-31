import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import ProductsPage from './components/ProductsPage'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const SoftwareDevelopment = dynamic(() => import('./components/SoftwareDevelopment'))
const ApplicationSoftware = dynamic(() => import('./components/ApplicationSoftware'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Software Development Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a trusted software development company in Coimbatore delivering custom software, application development, and scalable digital solutions for businesses across Tamil Nadu.',
  keywords: [
    'software development company in coimbatore',
    'custom software development coimbatore',
    'application software development coimbatore',
    'business software solutions coimbatore',
    'enterprise application development coimbatore',
    'software services coimbatore',
    'g-net solutions software',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Software Development Company in Coimbatore | G-Net Solutions',
    description:
      'Custom software and application development services tailored to business needs by G-Net Solutions, Coimbatore, Tamil Nadu.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/software-development',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Software Development Company - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Coimbatore | G-Net Solutions',
    description:
      'Professional custom software and application development services in Coimbatore by G-Net Solutions.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/software-development',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="software-development-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Software Development Services',
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
              'Custom Software Development',
              'Application Software Development',
              'Enterprise Software Solutions',
              'Business Process Automation',
              'Software Maintenance & Support',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/software-development',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="software-breadcrumb-schema"
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
                name: 'Software Development',
                item: 'https://www.g-netsolutions.com/software-development',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="software-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What types of software development services do you provide in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'G-Net Solutions provides custom software development, application software, enterprise solutions, business process automation, and ongoing support for businesses in Coimbatore, Tamil Nadu.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer scalable software solutions for businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, our software solutions are designed to scale with your business needs, ensuring long-term growth and efficiency.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <SoftwareDevelopment />
        <ApplicationSoftware />
        <ProductsPage />
      </main>
    </>
  )
}

export default Page
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const BusinessEmailHosting = dynamic(() => import('./components/BusinessEmailHosting'))
const GoogleWorkspace = dynamic(() => import('./components/GoogleWorkspace'))
const Microsoft365 = dynamic(() => import('./components/Microsoft365'))
const ZohoEmailServices = dynamic(() => import('./components/ZohoEmailServices'))
const EmailHostingServices = dynamic(() => import('./components/EmailHostingServices'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Business Email Hosting Services in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions offers professional business email hosting services in Coimbatore including Google Workspace, Microsoft 365, Zoho Mail, and secure email solutions for businesses across Tamil Nadu.',
  keywords: [
    'business email hosting coimbatore',
    'google workspace coimbatore',
    'microsoft 365 coimbatore',
    'zoho mail services coimbatore',
    'email hosting solutions coimbatore',
    'professional business email coimbatore',
    'corporate email services coimbatore',
    'g-net solutions email hosting',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Business Email Hosting Services in Coimbatore | G-Net Solutions',
    description:
      'Secure and reliable business email hosting solutions including Google Workspace, Microsoft 365, and Zoho Mail in Coimbatore.',
    // ✅ correct slug + www
    url: 'https://www.g-netsolutions.com/email-services',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Business Email Hosting Services - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Email Hosting Services in Coimbatore | G-Net Solutions',
    description:
      'Professional business email hosting and collaboration tools for growing businesses in Coimbatore.',
  },
  alternates: {
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/email-services',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="email-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Email Hosting Services',
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
              'Business Email Hosting',
              'Google Workspace',
              'Microsoft 365',
              'Zoho Mail Services',
              'Secure Email Hosting',
              'Email Migration & Support',
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/email-services',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="email-breadcrumb-schema"
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
                name: 'Email Services',
                item: 'https://www.g-netsolutions.com/email-services',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="email-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What business email hosting services do you provide in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'G-Net Solutions provides Google Workspace, Microsoft 365, Zoho Mail, secure email hosting, and migration support for businesses in Coimbatore, Tamil Nadu.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer support for email migration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide full migration and ongoing support to ensure a smooth transition to business email hosting.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <BusinessEmailHosting />
        <GoogleWorkspace />
        <Microsoft365 />
        <ZohoEmailServices />
        <EmailHostingServices />
      </main>
    </>
  )
}

export default Page
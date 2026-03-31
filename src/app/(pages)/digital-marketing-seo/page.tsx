import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const DigitalMarketing = dynamic(() => import('./components/DigitalMarketing'))
const DigitalMarketingBenefits = dynamic(() => import('./components/DigitalMarketingBenefits'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Company in Coimbatore | G-Net Solutions',
  description:
    'G-Net Solutions is a leading digital marketing and SEO company in Coimbatore offering search engine optimization, social media marketing, PPC advertising, content marketing, and online growth solutions across Tamil Nadu.',
  keywords: [
    'digital marketing company in coimbatore',
    'seo company coimbatore',
    'seo services coimbatore',
    'social media marketing coimbatore',
    'ppc advertising services coimbatore',
    'online marketing services coimbatore',
    'content marketing coimbatore',
    'digital branding solutions',
    'g-net solutions digital marketing',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Digital Marketing & SEO Company in Coimbatore | G-Net Solutions',
    description:
      'Grow your business online with expert digital marketing and SEO services including SMM, PPC, and content marketing in Coimbatore.',
    // ✅ correct slug + www
    url: 'https://www.g-netsolutions.com/digital-marketing-seo',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing & SEO Services - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & SEO Company in Coimbatore | G-Net Solutions',
    description:
      'Professional digital marketing and SEO services in Coimbatore by G-Net Solutions.',
  },
  alternates: {
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/digital-marketing-seo',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="digital-marketing-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Digital Marketing & SEO Services',
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
              'Search Engine Optimization (SEO)',
              'Social Media Marketing',
              'Pay-Per-Click Advertising',
              'Content Marketing',
              'Online Branding',
              'Lead Generation',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/digital-marketing-seo',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="digital-marketing-breadcrumb-schema"
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
                name: 'Digital Marketing & SEO',
                item: 'https://www.g-netsolutions.com/digital-marketing-seo',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="digital-marketing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What digital marketing services do you offer in Coimbatore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'G-Net Solutions provides SEO, social media marketing, PPC advertising, content marketing, online branding, and lead generation services in Coimbatore, Tamil Nadu.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is G-Net Solutions located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are based in Coimbatore, Tamil Nadu, India.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <DigitalMarketing />
        <DigitalMarketingBenefits />
      </main>
    </>
  )
}

export default Page
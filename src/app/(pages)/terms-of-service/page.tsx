import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const TermsOfServicePage = dynamic(
  () => import('./components/PrivacyPolicyPage'), // ✅ rename component to TermsOfServicePage if you have one
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Terms of Service | G-Net Solutions',
  description:
    'Read the Terms of Service of G-Net Solutions. Learn about the rules, conditions, and legal agreements governing the use of our website and IT services.',
  keywords: [
    'terms of service g-net solutions',
    'terms and conditions',
    'website terms coimbatore',
    'legal agreement',
    'user agreement',
    'g-net solutions terms',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Terms of Service | G-Net Solutions',
    description:
      'Understand the terms and conditions for using G-Net Solutions website and IT services.',
    url: 'https://g-netsolutions.com/terms-of-service',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | G-Net Solutions',
    description:
      'Review the Terms of Service of G-Net Solutions, including rules and conditions for using our services.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – WEBPAGE SCHEMA */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms of Service',
            description:
              'Terms of Service of G-Net Solutions explaining the rules and conditions for using our website and IT services.',
            url: 'https://g-netsolutions.com/terms-of-service',
            about: 'Terms of Service',
            publisher: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://g-netsolutions.com',
              logo: 'https://g-netsolutions.com/logo.png',
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
                name: 'Terms of Service',
                item: 'https://g-netsolutions.com/terms-of-service',
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <TermsOfServicePage />
      </main>
    </>
  )
}

export default Page

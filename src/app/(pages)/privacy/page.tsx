import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTIONS */
const PrivacyPolicyPage = dynamic(
  () => import('./components/PrivacyPolicyPage'),
  { loading: () => <div style={{ minHeight: 300 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Privacy Policy | G-Net Solutions',
  description:
    'Read the privacy policy of G-Net Solutions. Learn how we collect, use, and protect your information when you use our website and IT services.',
  keywords: [
    'privacy policy g-net solutions',
    'data protection policy',
    'website privacy coimbatore',
    'information security policy',
    'g-net solutions privacy',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Privacy Policy | G-Net Solutions',
    description:
      'Understand how G-Net Solutions handles your personal data and ensures information security.',
    url: 'https://g-netsolutions.com/privacy-policy',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | G-Net Solutions',
    description:
      'Learn about the privacy practices of G-Net Solutions, including data collection, usage, and protection.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/privacy-policy',
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
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description:
              'Privacy Policy of G-Net Solutions explaining how we collect, use, and protect user data.',
            url: 'https://g-netsolutions.com/privacy-policy',
            about: 'Privacy Policy',
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
                name: 'Privacy Policy',
                item: 'https://g-netsolutions.com/privacy-policy',
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <PrivacyPolicyPage />
      </main>
    </>
  )
}

export default Page

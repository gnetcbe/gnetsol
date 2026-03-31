import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const PrivacyPolicyPage = dynamic(() => import('./components/PrivacyPolicyPage'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Privacy Policy | G-Net Solutions',
  description:
    'Read the privacy policy of G-Net Solutions. Learn how we collect, use, and protect your information when you use our website and IT services.',
  keywords: [
    'privacy policy g-net solutions',
    'data protection policy',
    'information security policy',
    'g-net solutions privacy',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Privacy Policy | G-Net Solutions',
    description:
      'Understand how G-Net Solutions handles your personal data and ensures information security.',
    // ✅ correct slug + www (sitemap uses /privacy not /privacy-policy)
    url: 'https://www.g-netsolutions.com/privacy',
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
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ WEBPAGE SCHEMA */}
      <Script
        id="privacy-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description:
              'Privacy Policy of G-Net Solutions explaining how we collect, use, and protect user data.',
            // ✅ www added + correct slug
            url: 'https://www.g-netsolutions.com/privacy',
            about: 'Privacy Policy',
            publisher: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              url: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="privacy-breadcrumb-schema"
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
                name: 'Privacy Policy',
                item: 'https://www.g-netsolutions.com/privacy',
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
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const TermsOfServicePage = dynamic(() => import('./components/PrivacyPolicyPage'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Terms of Service | G-Net Solutions',
  description:
    'Read the Terms of Service of G-Net Solutions. Learn about the rules, conditions, and legal agreements governing the use of our website and IT services in Coimbatore.',
  keywords: [
    'terms of service g-net solutions',
    'terms and conditions',
    'legal agreement g-net solutions',
    'user agreement coimbatore',
    'g-net solutions terms',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Terms of Service | G-Net Solutions',
    description:
      'Understand the terms and conditions for using G-Net Solutions website and IT services.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/terms-of-service',
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
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/terms-of-service',
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
        id="terms-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Terms of Service',
            description:
              'Terms of Service of G-Net Solutions explaining the rules and conditions for using our website and IT services.',
            // ✅ www added
            url: 'https://www.g-netsolutions.com/terms-of-service',
            about: 'Terms of Service',
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
        id="terms-breadcrumb-schema"
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
                name: 'Terms of Service',
                item: 'https://www.g-netsolutions.com/terms-of-service',
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
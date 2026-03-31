import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const Works = dynamic(() => import('./components/Works'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Web Development Portfolio | G-Net Solutions Coimbatore',
  description:
    'Explore the web development portfolio of G-Net Solutions in Coimbatore. Showcasing successful projects in website development, software, digital marketing, and IT services across Tamil Nadu.',
  keywords: [
    'web development portfolio coimbatore',
    'g-net solutions portfolio',
    'website projects coimbatore',
    'software solutions portfolio',
    'digital marketing portfolio coimbatore',
    'it services portfolio coimbatore',
    'g-net solutions works',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Web Development Portfolio | G-Net Solutions Coimbatore',
    description:
      'Discover G-Net Solutions portfolio of successful web development, software, and IT service projects in Coimbatore.',
    // ✅ correct slug + www
    url: 'https://www.g-netsolutions.com/web-portfolio',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Portfolio - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Portfolio | G-Net Solutions Coimbatore',
    description:
      'Showcasing notable web development works and successful projects by G-Net Solutions in Coimbatore.',
  },
  alternates: {
    // ✅ correct slug + www
    canonical: 'https://www.g-netsolutions.com/web-portfolio',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ WEBPAGE SCHEMA */}
      <Script
        id="portfolio-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Web Development Portfolio',
            description:
              'Portfolio of G-Net Solutions showcasing successful projects in web development, software, and IT services in Coimbatore.',
            // ✅ correct slug + www
            url: 'https://www.g-netsolutions.com/web-portfolio',
            about: 'Web Development Portfolio',
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
        id="portfolio-breadcrumb-schema"
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
                name: 'Portfolio',
                item: 'https://www.g-netsolutions.com/web-portfolio',
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <Works />
      </main>
    </>
  )
}

export default Page
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero' 
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED HEAVY SECTIONS */
const Works = dynamic(
  () => import('./components/Works'),
  { loading: () => <div style={{ minHeight: 200 }} /> }
)

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Notable Works & Portfolio | G-Net Solutions',
  description:
    'Explore the notable works and portfolio of G-Net Solutions. Showcasing successful projects in web development, software, digital marketing, and IT services.',
  keywords: [
    'g-net solutions portfolio',
    'notable works g-net',
    'web development projects',
    'software solutions case studies',
    'digital marketing portfolio',
    'it services portfolio coimbatore',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Notable Works & Portfolio | G-Net Solutions',
    description:
      'Discover G-Net Solutions portfolio of successful projects in web development, software, and IT services.',
    url: 'https://g-netsolutions.com/works',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | G-Net Solutions',
    description:
      'Showcasing notable works and successful projects by G-Net Solutions.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/works',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – PORTFOLIO PAGE */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Notable Works & Portfolio',
            description:
              'Portfolio of G-Net Solutions showcasing successful projects in web development, software, and IT services.',
            url: 'https://g-netsolutions.com/works',
            about: 'Portfolio',
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
                name: 'Portfolio',
                item: 'https://g-netsolutions.com/works',
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

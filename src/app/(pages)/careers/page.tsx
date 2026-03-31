import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY-LOADED SECTION — no loading placeholder to avoid blocking SSR */
const CareerPage = dynamic(() => import('./components/CareerPage'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  // ✅ Keyword first
  title: 'IT Jobs in Coimbatore | Careers at G-Net Solutions',
  description:
    'Explore career opportunities at G-Net Solutions in Coimbatore. Apply for web development, software, digital marketing, and IT service roles. Join our growing team in Tamil Nadu.',
  keywords: [
    'it jobs coimbatore',
    'web developer jobs coimbatore',
    'software developer jobs coimbatore',
    'digital marketing jobs coimbatore',
    'careers at g-net solutions',
    'g-net solutions jobs',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'IT Jobs in Coimbatore | Careers at G-Net Solutions',
    description:
      'Join G-Net Solutions and build your career in web development, software, and digital marketing in Coimbatore, Tamil Nadu.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/careers',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Careers at G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Jobs in Coimbatore | Careers at G-Net Solutions',
    description:
      'Apply for exciting IT and web development career opportunities at G-Net Solutions in Coimbatore.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/careers',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ ORGANIZATION SCHEMA */}
      <Script
        id="career-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            // ✅ www added
            url: 'https://www.g-netsolutions.com',
            logo: 'https://www.g-netsolutions.com/logo.png',
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
            ],
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="career-breadcrumb-schema"
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
                name: 'Careers',
                item: 'https://www.g-netsolutions.com/careers',
              },
            ],
          }),
        }}
      />

      {/* ✅ JOB POSTING SCHEMA */}
      <Script
        id="jobposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: 'Web Developer',
            description:
              'We are looking for a skilled Web Developer to join our team in Coimbatore. Apply now to build modern websites and applications.',
            hiringOrganization: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              sameAs: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Coimbatore',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
            },
            employmentType: 'FULL_TIME',
            datePosted: '2026-03-11',
            validThrough: '2026-06-30',
          }),
        }}
      />

      <main>
        <Hero />
        <CareerPage />
      </main>
    </>
  )
}

export default Page
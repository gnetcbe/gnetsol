import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTION */
const CareerPage = dynamic(() => import('./components/CareerPage'), {
  loading: () => <div style={{ minHeight: 350 }} />,
})

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'Careers at G-Net Solutions | Jobs in Coimbatore',
  description:
    'Explore career opportunities at G-Net Solutions in Coimbatore. Apply for web development, software, digital marketing, and IT service roles. Join our growing team.',
  keywords: [
    'careers at g-net solutions',
    'jobs in coimbatore it company',
    'web developer jobs coimbatore',
    'software developer jobs',
    'digital marketing jobs',
    'it jobs coimbatore',
    'g-net solutions careers',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'Careers at G-Net Solutions',
    description:
      'Join G-Net Solutions and build your career in web development, software, and digital marketing.',
    url: 'https://g-netsolutions.com/careers',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at G-Net Solutions',
    description:
      'Apply for exciting IT and web development career opportunities at G-Net Solutions.',
  },
  alternates: {
    canonical: 'https://g-netsolutions.com/careers',
  },
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – ORGANIZATION */}
      <Script
        id="career-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            logo: 'https://g-netsolutions.com/logo.png',
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
            ],
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – BREADCRUMB */}
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
                item: 'https://g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Careers',
                item: 'https://g-netsolutions.com/careers',
              },
            ],
          }),
        }}
      />

      {/* 🔍 STRUCTURED DATA – JOB POSTING (example) */}
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
              sameAs: 'https://g-netsolutions.com',
              logo: 'https://g-netsolutions.com/logo.png',
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

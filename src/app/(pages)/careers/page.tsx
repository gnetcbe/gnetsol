import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'
import logo from '@/assets/img/logo/title2.svg'

/* 🔥 LAZY-LOADED SECTION */
const CareerPage = dynamic(
  () => import('./components/CareerPage'),
  { loading: () => <div style={{ minHeight: 350 }} /> }
)

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
}

const Page = () => {
  return (
    <>
      {/* 🔍 STRUCTURED DATA – CAREER PAGE */}
      <Script
        id="career-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
            ],
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

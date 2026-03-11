import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import TopBar from '@/components/layouts/TopBar/page'
import { ChildrenType } from '@/types/component-props'
import type { Metadata } from 'next'

/* =====================
   PAGE-LEVEL SEO
   (inherits global metadata)
===================== */

export const metadata: Metadata = {
  title: 'G-Net Solutions | Website Development & IT Services in Coimbatore',
  description:
    'G-Net Solutions offers professional website development, SEO, digital marketing, hosting, and IT services in Coimbatore.',
  keywords: [
    'website development coimbatore',
    'IT services coimbatore',
    'digital marketing',
    'web hosting',
    'software solutions',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'G-Net Solutions | Web Development & IT Services',
    description:
      'Professional website development, software solutions, and digital marketing services by G-Net Solutions, Coimbatore.',
    url: 'https://www.g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-Net Solutions | Web & IT Services',
    description:
      'Leading IT services and website development company in Coimbatore.',
  },
  alternates: {
    canonical: 'https://www.g-netsolutions.com/',
    languages: {
      'en-IN': 'https://www.g-netsolutions.com/',
      'x-default': 'https://www.g-netsolutions.com/',
    },
  },
}

/* =====================
   LAYOUT
===================== */

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <CTA />
      <Footer />
    </>
  )
}

export default Layout

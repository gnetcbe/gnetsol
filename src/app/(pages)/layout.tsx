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
  icons: {
    icon: '/favicon.ico', // ✅ CORRECT WAY
  },
}

/* =====================
   LAYOUT
===================== */

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <TopBar />
      {children}
      <CTA />
      <Footer />
    </>
  )
}

export default Layout

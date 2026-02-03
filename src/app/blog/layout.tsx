import TopBar from '@/components/layouts/TopBar/page'
import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import Hero from './Hero'
import { ChildrenType } from '@/types/component-props'
import type { Metadata } from 'next'

/* =====================
   BLOG BASE SEO
===================== */
export const metadata: Metadata = {
  title: 'Blog | G-Net Solutions',
  description:
    'Latest insights, articles, and updates from G-Net Solutions.',
  icons: {
    icon: '/favicon.ico',
  },
}

/* =====================
   BLOG LAYOUT
===================== */
const BlogLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <TopBar />
       <Hero />
      <main>{children}</main>
      <CTA />
      <Footer />
    </>
  )
}

export default BlogLayout

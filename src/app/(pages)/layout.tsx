import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import TopBar from '@/components/layouts/TopBar/page'
import { ChildrenType } from '@/types/component-props'

/* =====================
   INNER PAGES LAYOUT
   Each page.tsx defines its own metadata
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
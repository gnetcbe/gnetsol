import { Metadata } from 'next'
import Faq from './components/Faq'
import Hero from './components/Hero'
import PricingArea from './components/PricingArea'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Pricing Plan',
  icons: {
    icon: logo.src,
  },
}

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <PricingArea />
        <Faq />
      </main>
    </>
  )
}

export default page

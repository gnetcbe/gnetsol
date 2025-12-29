import { Metadata } from 'next'
import FAQ from './components/FAQ'
import Hero from './components/Hero'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Frequently Asked Question',
  icons: {
    icon: logo.src,
  },
}

const Faq = () => {
  return (
    <>
      <main>
        <Hero />
        <FAQ />
      </main>
    </>
  )
}

export default Faq

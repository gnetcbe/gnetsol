import { Metadata } from 'next'
import Details from './components/Details'
import Hero from './components/Hero'
import PortfolioArea from './components/PortfolioArea'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || SEO Tracking Analysis',
  icons: {
    icon: logo.src,
  },
}

const PortfolioDetails = () => {
  return (
    <>
      <main>
        <Hero />
        <Details />
        <PortfolioArea />
      </main>
    </>
  )
}

export default PortfolioDetails

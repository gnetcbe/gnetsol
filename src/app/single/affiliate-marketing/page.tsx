import { Metadata } from 'next'
import Footer from './components/Footer'
import Header from './components/Header'
import MainPage from './components/MainPage'

import logo from '@/assets/img/logo/title3.svg'

export const metadata: Metadata = {
  title: 'SEOX- STARTUP AGENCY',
  icons: {
    icon: logo.src,
  },
}

const AffiliateMarketing = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default AffiliateMarketing

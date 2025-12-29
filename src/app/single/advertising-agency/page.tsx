import { Metadata } from 'next'
import About from './components/About'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InstagramPost from './components/InstagramPost'
import ShopArea from './components/ShopArea'
import Testimonial from './components/Testimonial'
import WorkArea from './components/WorkArea'

import logo from '@/assets/img/logo/title3.svg'

export const metadata: Metadata = {
  title: 'SEOX- SOCIAL MEIDA MARKETING AGENCY',
  icons: {
    icon: logo.src,
  },
}

const AdvertisingAgency = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Choose />
        <WorkArea />
        <ShopArea />
        <Testimonial />
        <InstagramPost />
      </main>
      <Footer />
    </>
  )
}

export default AdvertisingAgency

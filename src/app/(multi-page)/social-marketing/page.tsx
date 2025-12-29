import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import BrandsIcons from './components/BrandsIcons'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import ProgressArea from './components/ProgressArea'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

import logo from '@/assets/img/icons/span9.svg'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'SEOX- STARTUP AGENCY',
  icons: {
    icon: logo.src,
  },
}

const SocialMarketing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsIcons />
        <About />
        <Service />
        <ProgressArea />
        <OurTeam />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default SocialMarketing

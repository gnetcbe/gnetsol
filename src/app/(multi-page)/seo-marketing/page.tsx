import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import BrandIcon from './components/BrandIcon'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Service from './components/Service'
import TeamService from './components/TeamService'
import Testimonial from './components/Testimonial'
import WorkProsses from './components/WorkProsses'

import logo from '@/assets/img/logo/title3.svg'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'SEOX- STARTUP AGENCY',
  icons: {
    icon: logo.src,
  },
}

const SeoMarketings = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIcon />
        <About />
        <Service />
        <WorkProsses />
        <Testimonial />
        <TeamService />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default SeoMarketings

import logo from '@/assets/img/icons/span9.svg'
import { Metadata } from 'next'
import About from './components/About'
import AboutBanner from './components/AboutBanner'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Faq from './components/Faq'
import Footer from './components/Footer'
import GrowthArea from './components/GrowthArea'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import TeamArea from './components/TeamArea'
import Testimonial from './components/Testimonial'

export const metadata: Metadata = {
  title: 'SEOX- STARTUP AGENCY',
  icons: {
    icon: logo.src,
  },
}

const StartupAgencyPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AboutBanner />
        <Service />
        <Faq />
        <GrowthArea />
        <TeamArea />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default StartupAgencyPage

import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import WorkArea from './components/WorkArea'

import logo from '@/assets/img/logo/title3.svg'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'SEOX- STARTUP AGENCY',
  icons: {
    icon: logo.src,
  },
}

const StartupsAgency = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <WorkArea />
        <Choose />
        <OurTeam />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default StartupsAgency

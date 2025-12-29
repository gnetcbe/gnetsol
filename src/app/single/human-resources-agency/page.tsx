import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectArea from './components/ProjectArea'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import WorkProcess from './components/WorkProcess'

import logo from '@/assets/img/logo/title3.svg'

export const metadata: Metadata = {
  title: 'SEOX- Human-Resources-Agency',
  icons: {
    icon: logo.src,
  },
}

const HumanResourcesAgency = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <WorkProcess />
        <ProjectArea />
        <Testimonial />
        <Faq />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default HumanResourcesAgency

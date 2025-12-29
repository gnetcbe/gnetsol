import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import Choose from './components/Choose'
import ContactUs from './components/ContactUs'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

import logo from '@/assets/img/logo/title3.svg'
import Study from './components/Study'

export const metadata: Metadata = {
  title: 'SEOX- Digital  Marketing',
  icons: {
    icon: logo.src,
  },
}

const DigitalMarketing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Choose />
        <Study />
        <Testimonial />
        <Blog />
        <ContactUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default DigitalMarketing

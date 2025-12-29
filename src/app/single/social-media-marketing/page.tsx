import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import Choose from './components/Choose'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import TeamArea from './components/TeamArea'
import Testimonial from './components/Testimonial'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX- SOCIAL MEIDA MARKETING AGENCY',
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
        <About />
        <Service />
        <Choose />
        <TeamArea />
        <Testimonial />
        <Blog />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default SocialMarketing

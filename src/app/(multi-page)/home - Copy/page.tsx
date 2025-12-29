import { Metadata } from 'next'
import About from './components/About'
import Blog from './components/Blog'
import ChooseArea from './components/ChooseArea'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import OurProcess from './components/OurProcess'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

import logo from '@/assets/img/logo/title1.svg'

export const metadata: Metadata = {
  title: 'SEOX- SEO and Digital Marketing Agency',
  icons: {
    icon: logo.src,
  },
}

const Home = () => {
  return (
    <>
      <div className="body1">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <ChooseArea />
          <OurProcess />
          <Testimonial />
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home

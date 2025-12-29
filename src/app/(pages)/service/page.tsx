import { Metadata } from 'next'
import ContactUs from './components/ContactUs'
import CounterArea from './components/CounterArea'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import ServiceArea from './components/ServiceArea'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Our Service V1',
  icons: {
    icon: logo.src,
  },
}

const Service = () => {
  return (
    <>
      <main>
        <Hero />
        <ServiceArea />
        <CounterArea />
        <OurTeam />
        <ContactUs />
      </main>
    </>
  )
}

export default Service

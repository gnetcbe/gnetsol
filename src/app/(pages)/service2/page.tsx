import { Metadata } from 'next'
import ContactUs from './components/ContactUs'
import CounterArea from './components/CounterArea'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import Service from './components/Service'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Our Service V2',
  icons: {
    icon: logo.src,
  },
}

const ServiceOur = () => {
  return (
    <>
      <main>
        <Hero />
        <Service />
        <CounterArea />
        <OurTeam />
        <ContactUs />
      </main>
    </>
  )
}

export default ServiceOur

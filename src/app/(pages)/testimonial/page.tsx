import { Metadata } from 'next'
import Hero from './components/Hero'
import Testimonials from './components/Testimonial'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Testimonials',
  icons: {
    icon: logo.src,
  },
}
const Testimonial = () => {
  return (
    <>
      <main>
        <Hero />
        <Testimonials />
      </main>
    </>
  )
}

export default Testimonial

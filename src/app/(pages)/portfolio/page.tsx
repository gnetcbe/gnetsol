import { Metadata } from 'next'
import Blog from './components/Blog'
import Hero from './components/Hero'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Our Portfolio',
  icons: {
    icon: logo.src,
  },
}

const Portfolio = () => {
  return (
    <>
      <main>
        <Hero />
        <Blog />
      </main>
    </>
  )
}

export default Portfolio

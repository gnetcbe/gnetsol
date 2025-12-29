import { Metadata } from 'next'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Our Team Member',
  icons: {
    icon: logo.src,
  },
}

const Team = () => {
  return (
    <>
      <main>
        <Hero />
        <OurTeam />
      </main>
    </>
  )
}

export default Team

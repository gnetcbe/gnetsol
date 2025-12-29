import { Metadata } from 'next'
import BlogDetail from './components/BlogDetail'
import Hero from './components/Hero'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Social Media Strategy Development',
  icons: {
    icon: logo.src,
  },
}

const Detail2 = () => {
  return (
    <>
      <Hero />
      <BlogDetail />
    </>
  )
}

export default Detail2

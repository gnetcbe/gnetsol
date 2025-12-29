import { Metadata } from 'next'
import BlogDetail from './components/BlogDetail'
import Hero from './components/Hero'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Seo & Digital Marketing',
  icons: {
    icon: logo.src,
  },
}

const detail1 = () => {
  return (
    <>
      <Hero />
      <BlogDetail />
    </>
  )
}

export default detail1

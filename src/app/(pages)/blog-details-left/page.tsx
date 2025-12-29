import { Metadata } from 'next'
import BlogDetail from './components/BlogDetail'
import Hero from './components/Hero'
import Service from './components/Service'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX || Our Blog Details',
  icons: {
    icon: logo.src,
  },
}

const BlogLeft = () => {
  return (
    <>
      <main>
        <Hero />
        <BlogDetail />
        <Service />
      </main>
    </>
  )
}

export default BlogLeft

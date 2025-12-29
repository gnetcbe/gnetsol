import { Metadata } from 'next'
import BlogArea from './components/BlogArea'
import Hero from './components/Hero'

import logo from '@/assets/img/logo/title2.svg'

export const metadata: Metadata = {
  title: 'SEOX ||  Our Blog',
  icons: {
    icon: logo.src,
  },
}

const Blog = () => {
  return (
    <>
      <main>
        <Hero />
        <BlogArea />
      </main>
    </>
  )
}

export default Blog

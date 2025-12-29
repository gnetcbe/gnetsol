import { StaticImageData } from 'next/image'

import icon1 from '@/assets/img/icons/service4-icon1.svg'
import icon2 from '@/assets/img/icons/service4-icon2.svg'
import icon3 from '@/assets/img/icons/service4-icon3.svg'

import slider1 from '@/assets/img/others/case4-slider1.png'
import slider2 from '@/assets/img/others/case4-slider2.png'
import slider3 from '@/assets/img/others/case4-slider3.png'

import img1 from '@/assets/img/others/work1-image1.png'
import img2 from '@/assets/img/others/work1-image2.png'

import author1 from '@/assets/img/testimonial/tes4-author1.png'
import author2 from '@/assets/img/testimonial/tes4-author2.png'
import author3 from '@/assets/img/testimonial/tes4-author3.png'

import smallpost1 from '@/assets/img/blog/blog4-smoll-post1.png'
import smallpost2 from '@/assets/img/blog/blog4-smoll-post2.png'
import smallpost3 from '@/assets/img/blog/blog4-smoll-post3.png'

export type ServiceType = {
  image: StaticImageData
  title: string
  description: string
  count: number
}

export type CaseStudyType = {
  image: StaticImageData
  name: string
  comment: string
}

export type TestimonialType = {
  image: StaticImageData
  comment: string
  description: string
  name: string
  title: string
}

export type BlogType = {
  image: StaticImageData
  description: string
  duration: number
}

export const blogData: BlogType[] = [
  {
    image: smallpost1,
    description: 'Mastering Digital Marketing: Actionable Insights to Drive Real Results for Your Business',
    duration: 1100,
  },
  {
    image: smallpost2,
    description: 'The Future of Digital Marketing Trends Technologies Shaping Tomorrow’s Strategies',
    duration: 800,
  },
  {
    image: smallpost3,
    description: 'From SEO to Social Media: Proven Techniques to Build Your Brand Online',
    duration: 1000,
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: author1,
    comment: '  SEOX helped us boost our organic traffic by 250% just three months!',
    description: 'Their insights into SEO and content marketing helped us secure top rankings for competitive keywords.',
    name: 'James Reynolds',
    title: 'Marketing Director',
  },
  {
    image: author2,
    comment: 'Working with SEOX was the best decision for our brand!',
    description: 'Their insights into SEO and content marketing helped us secure top rankings for competitive keywords.',
    name: 'James Reynolds',
    title: 'Marketing Director',
  },
  {
    image: author3,
    comment: 'Thanks to SEOX, our social media engagement grew by 400%!',
    description: 'Their insights into SEO and content marketing helped us secure top rankings for competitive keywords.',
    name: 'James Reynolds',
    title: 'Marketing Director',
  },
]


export type OurWorkType = {
  image: StaticImageData
  number: number
}

export const ourwork: OurWorkType[] = [
  {
    image: img1,
    number: 1,
  },
  {
    image: img2,
    number: 2,
  },
]

export const casestudyData: CaseStudyType[] = [
  {
    image: slider1,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
  {
    image: slider2,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
  {
    image: slider1,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
  {
    image: slider1,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
  {
    image: slider2,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
  {
    image: slider3,
    name: 'SEO Optimization',
    comment: 'Conducted in-depth keyword research & implemented on-page SEO.',
  },
]

export const serviceData: ServiceType[] = [
  {
    image: icon1,
    title: 'Search Engine Optimization (SEO)',
    description: ' Drive organic traffic and improve your online visibility with our advanced SEO techniques.',
    count: 200,
  },
  {
    image: icon2,
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Maximize ROI with targeted PPC campaigns designed to convert leads into customers.',
    count: 300,
  },
  {
    image: icon3,
    title: 'Content Marketing',
    description: 'content marketing services encompass everything from blog posts and articles to infographics videos, designed boost.',
    count: 400,
  },
]

export const serviceData2: ServiceType[] = [
  {
    image: icon1,
    title: 'Social Media Marketing (SMM)',
    description:
      ' Engage and connect with your audience on social media platforms with our result-driven SMM strategies.Engage grow audience across platforms tailored content strategies.',
    count: 200,
  },
  {
    image: icon1,
    title: 'Web Design & Development',
    description:
      'Make a lasting impression with a professionally designed and user-friendly website. Our web design and development Nurture relationships with your audience through personalized',
    count: 300,
  },
]

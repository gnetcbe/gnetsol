import { StaticImageData } from 'next/image'

import hero1 from '@/assets/img/logo/hero7-slider1.svg'
import hero2 from '@/assets/img/logo/hero7-slider2.svg'
import hero3 from '@/assets/img/logo/hero7-slider3.svg'
import hero4 from '@/assets/img/logo/hero7-slider4.svg'
import hero5 from '@/assets/img/logo/hero7-slider5.svg'

import workIcon1 from '@/assets/img/icons/work7-icon1.svg'
import workIcon2 from '@/assets/img/icons/work7-icon2.svg'
import workIcon3 from '@/assets/img/icons/work7-icon3.svg'
import workIcon4 from '@/assets/img/icons/work7-icon4.svg'

import team1 from '@/assets/img/testimonial/team2-image1.png'
import team2 from '@/assets/img/testimonial/team2-image2.png'
import team3 from '@/assets/img/testimonial/team2-image3.png'

import author1 from '@/assets/img/icons/author1.svg'
import date1 from '@/assets/img/icons/date1.svg'

export type SliderType = {
  image: StaticImageData
}

export type ChooseType = {
  title: string
  description: string
  count: number
}

export type WorkType = {
  count: number
  number: number
  image: StaticImageData
  title: string
  comment: string
}

export type TestimonialType = {
  comment: string
  image: StaticImageData
  name: string
  title: string
}

export type BlogType = {
  image: StaticImageData
  avatar: StaticImageData
  title: string
  count: number
}

export const blog: BlogType[] = [
  {
    image: date1,
    avatar: author1,
    title: 'Top 5 Affiliate Marketing Trends to Watch in 2025',
    count: 800,
  },
  {
    image: date1,
    avatar: author1,
    title: 'Top 5 Affiliate Marketing Trends to Watch in 2025',
    count: 1000,
  },
  {
    image: date1,
    avatar: author1,
    title: 'Top 5 Affiliate Marketing Trends to Watch in 2025',
    count: 1200,
  },
]

export const tes: TestimonialType[] = [
  {
    comment:
      'Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% our website  conversion rate!',
    image: team1,
    name: 'Shakib Al Hasan',
    title: 'Marketing Manager',
  },
  {
    comment:
      'The team at SEOX truly understands the affiliate marketing landscape. Their data-driven approach and proactive communication made it easy for us to scale our network and boost our ROI.',
    image: team2,
    name: 'Tanzid Tamim',
    title: 'Marketing Manager',
  },
  {
    comment:
      'We partnered with SEOX to optimize our affiliate campaigns, and the results were incredible. Their strategies are innovative, and the results speak for themselves. Highly recommended!',
    image: team3,
    name: 'Taskin Ahmed',
    title: 'Founder, Luxe Interiors',
  },
  {
    comment:
      'Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% our website conversion rate!',
    image: team1,
    name: 'Shakib Al Hasan',
    title: 'Marketing Manager',
  },
  {
    comment:
      'The team at SEOX truly understands the affiliate marketing landscape. Their data-driven approach and proactive communication made it easy for us to scale our network and boost our ROI.',
    image: team2,
    name: 'Tanzid Tamim',
    title: 'Marketing Manager',
  },
  {
    comment:
      'We partnered with SEOX to optimize our affiliate campaigns, and the results were incredible. Their strategies are innovative, and the results speak for themselves. Highly recommended!',
    image: team3,
    name: 'Taskin Ahmed',
    title: 'Founder, Luxe Interiors',
  },
]

export const outwork: WorkType[] = [
  {
    count: 200,
    number: 30,
    image: workIcon1,
    title: 'Understanding Your Goals',
    comment: 'We start by listening to you. understanding your brand, business objectives, &amp; target audience.',
  },
  {
    count: 300,
    number: 60,
    image: workIcon2,
    title: 'Strategy Development',
    comment: 'Our team crafts a detailed plan, selecting the right affiliates, platforms, and tools to maximize impact.',
  },
  {
    count: 400,
    number: 30,
    image: workIcon3,
    title: 'Data-Driven Optimization',
    comment: 'We continuously monitor performance, analyze key metrics, &amp; refine strategies to enhance your ROI.',
  },
  {
    count: 500,
    number: 60,
    image: workIcon4,
    title: 'Transparent Reporting',
    comment: ' Stay informed every step of the with detailed reports that highlight progress and performance metrics.',
  },
]

export const choose: ChooseType[] = [
  {
    title: 'Data-Driven Approach',
    description: 'Actionable insights for better performance',
    count: 800,
  },
  {
    title: 'Data-Driven Approach',
    description: 'Actionable insights for better performance',
    count: 1000,
  },
  {
    title: 'Data-Driven Approach',
    description: 'Actionable insights for better performance',
    count: 1200,
  },
]

export const heroslider: SliderType[] = [
  {
    image: hero1,
  },
  {
    image: hero2,
  },
  {
    image: hero3,
  },
  {
    image: hero4,
  },
  {
    image: hero5,
  },
  {
    image: hero1,
  },
  {
    image: hero2,
  },
  {
    image: hero3,
  },
  {
    image: hero4,
  },
  {
    image: hero5,
  },
]

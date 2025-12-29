import { StaticImageData } from 'next/image'

import serviceimg1 from '@/assets/img/service/service5-image1.png'
import serviceimg2 from '@/assets/img/service/service5-image2.png'
import serviceimg3 from '@/assets/img/service/service5-image3.png'
import serviceimg4 from '@/assets/img/service/service5-image4.png'

import choose1 from '@/assets/img/others/choose5-image1.png'
import choose2 from '@/assets/img/others/choose5-image2.png'
import choose3 from '@/assets/img/others/choose5-image3.png'

import team1 from '@/assets/img/team/team2-image1.png'
import team2 from '@/assets/img/team/team2-image2.png'
import team3 from '@/assets/img/team/team2-image3.png'
import team4 from '@/assets/img/team/team2-image4.png'

import tes1 from '@/assets/img/testimonial/team2-image2.png'

import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'

export type ServiceType = {
  count: number
  image: StaticImageData
  number: number
  title: string
}

export type FaqType = {
  question: string
  answer: string
}

export type ChooseType = {
  image: StaticImageData
  title: string
  comment: string
  count: number
}

export type OurTeamType = {
  count: number
  image: StaticImageData
  name: string
  title: string
}

export type TestimonialType = {
  comment: string
  image: StaticImageData
  name: string
  title: string
}

export type BlogType = {
  image: StaticImageData
  title: string
  comment: string
}

export const blogData: BlogType[] = [
  {
    image: blog1,
    title: '5 Social Media Trends to Watch in 2025',
    comment: ' Discover the key trends shaping the social media landscape your brand can leverage them stay relevant.',
  },
  {
    image: blog2,
    title: 'Maximizing ROI with Paid Social Ads',
    comment: '  Learn how to create high-performing ad campaigns that boost engagement and drive measurable results.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'As a first-time entrepreneur, I struggled to turn my idea into a tangible business. SEOX stepped in and provided us with the perfect blend of guidance, strategy, and hands-on support. I highly recommend SEOX to any startup looking for a reliable partner to navigate the challenging journey of entrepreneurship.',
    image: tes1,
    name: 'Micheal Gough',
    title: 'CTO at Microsoft',
  },
  {
    comment:
      'As a first-time entrepreneur, I struggled to turn my idea into a tangible business. SEOX stepped in and provided us with the perfect blend of guidance, strategy, and hands-on support. I highly recommend SEOX to any startup looking for a reliable partner to navigate the challenging journey of entrepreneurship.',
    image: tes1,
    name: 'Micheal Gough',
    title: 'CTO at Microsoft',
  },
]

export const teamData: OurTeamType[] = [
  {
    count: 200,
    image: team1,
    name: 'Rodger Struck',
    title: 'Social Media Specialist',
  },
  {
    count: 300,
    image: team2,
    name: 'Alex Buckmaster',
    title: 'Marketing Officer',
  },
  {
    count: 400,
    image: team3,
    name: 'Sarah Joe',
    title: 'Marketer',
  },
  {
    count: 500,
    image: team4,
    name: 'Chris Glasser',
    title: 'Marketer',
  },
]

export const chooseData: ChooseType[] = [
  {
    image: choose1,
    title: 'Holistic Growth Solutions',
    comment:
      'SEOX offers a comprehensive suite of services, including branding, marketing, and technology solutions, to support every stage startup’s growth journey.',
    count: 200,
  },
  {
    image: choose2,
    title: 'Holistic Growth Solutions',
    comment:
      'SEOX offers a comprehensive suite of services, including branding, marketing, and technology solutions, to support every stage startup’s growth journey.',
    count: 300,
  },
  {
    image: choose3,
    title: 'Holistic Growth Solutions',
    comment:
      'SEOX offers a comprehensive suite of services, including branding, marketing, and technology solutions, to support every stage startup’s growth journey.',
    count: 400,
  },
]

export const faqData: FaqType[] = [
  {
    question: 'Ideation',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Planning',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Execution',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Optimization',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
]

export const service: ServiceType[] = [
  {
    count: 200,
    image: serviceimg1,
    number: 1,
    title: 'Business Strategy',
  },
  {
    count: 300,
    image: serviceimg2,
    number: 2,
    title: 'Business Strategy',
  },
  {
    count: 200,
    image: serviceimg3,
    number: 3,
    title: 'Business Strategy',
  },
  {
    count: 200,
    image: serviceimg4,
    number: 4,
    title: 'Business Strategy',
  },
]

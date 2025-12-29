import { StaticImageData } from 'next/image'

import logo1 from '@/assets/img/logo/brands8-logo1.png'
import logo2 from '@/assets/img/logo/brands8-logo2.png'
import logo3 from '@/assets/img/logo/brands8-logo3.png'
import logo4 from '@/assets/img/logo/brands8-logo4.png'
import logo5 from '@/assets/img/logo/brands8-logo5.png'
import logo6 from '@/assets/img/logo/brands8-logo6.png'

import icon1 from '@/assets/img/icons/service9-icon1.png'
import icon2 from '@/assets/img/icons/service9-icon2.png'
import icon3 from '@/assets/img/icons/service9-icon3.png'

import team1 from '@/assets/img/team/team9-image1.png'
import team2 from '@/assets/img/team/team9-image2.png'
import team3 from '@/assets/img/team/team9-image3.png'

import thumb from '@/assets/img/testimonial/tes9-author-thumb.png'

export type BrandType = {
  image: StaticImageData
}

export type ServiceType = {
  duration: number
  image: StaticImageData
  title: string
  description: string
}

export type OurTeamType = {
  image: StaticImageData
  name: string
  title: string
  duration: number
}

export type TestimonialType = {
  image: StaticImageData
  description: string
  name: string
  title: string
}

export type BlogType = {
  title: string
  description: string
  duration: number
}

export const blogData: BlogType[] = [
  {
    title: 'How to Use Video Content Drive Engagementing on Social Marketing',
    description: 'If your goal is broad brand awareness with highly targeted audience on segmentation.',
    duration: 800,
  },
  {
    title: 'Why Social Media Marketing Is Essential Your Business Growth',
    description: "When deciding between Facebook Ads Instagram Ads, it's crucial understand.",
    duration: 1000,
  },
  {
    title: 'How to Use Video Content Drive Engagement The Social Marketing',
    description: "Facebook's detailed targeting options the enable you to tailor your social ad based.",
    duration: 1200,
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: thumb,
    description:
      ' We’ve been working with SEOX for over a year now, and the best results have been outstanding! Their team took the time to the on understand our business and crafted a tailored strategy that best dramatically improved our search rankings and web traffic.',
    name: 'Sheldon Jackson',
    title: 'Shop Store Owner',
  },
  {
    image: thumb,
    description:
      ' We’ve been working with SEOX for over a year now, and the best results have been outstanding! Their team took the time to the on understand our business and crafted a tailored strategy that best dramatically improved our search rankings and web traffic.',
    name: 'Sheldon Jackson',
    title: 'Shop Store Owner',
  },
]

export const ourteamData: OurTeamType[] = [
  {
    image: team1,
    duration: 1200,
    name: 'SR. Alex Robertson',
    title: 'Social Media Strategist',
  },
  {
    image: team2,
    duration: 1000,
    name: 'Alexander Knight',
    title: 'Social Growth Specialist',
  },
  {
    image: team3,
    duration: 800,
    name: 'Deving Romaguera',
    title: 'Brand Partners Manager',
  },
]

export const serviceData: ServiceType[] = [
  {
    duration: 800,
    image: icon1,
    title: 'Social Media Strategy',
    description: ' An successful social media presence the starts with a strong strategy. At SEOX, we create customized social.',
  },
  {
    duration: 900,
    image: icon2,
    title: 'Social Media Advertising',
    description: 'Social media marketing services an thedesigned to elevate your brand, boost engagement, and drive real',
  },
  {
    duration: 1000,
    image: icon3,
    title: 'Social Media Analytics',
    description: 'Our expert team ensures that every post, campaign, and interaction an best aligns with your business goal.',
  },
]

export const brandData: BrandType[] = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
]

import { StaticImageData } from 'next/image'

import img1 from '@/assets/img/others/work1-image1.png'
import img2 from '@/assets/img/others/work1-image2.png'

export type ServiceType = {
  number: number
  title: string
  comment: string
  count: number
}

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

export const choose: ServiceType[] = [
  {
    number: 1,
    title: 'Proven Track Record',
    comment: 'Hundreds of successful campaigns and satisfied clients.',
    count: 200,
  },
  {
    number: 2,
    title: 'Customized Strategies',
    comment: ' Tailored SEO and marketing plans that align with your unique.',
    count: 300,
  },
  {
    number: 3,
    title: 'Expert team',
    comment: 'Certified professionals with extensive industry experience.',
    count: 400,
  },
  {
    number: 4,
    title: 'Transparent Reporting',
    comment: 'Clear, detailed reports to keep you informed every step of the way.',
    count: 500,
  },
]

export const service: ServiceType[] = [
  {
    number: 1,
    title: 'Search Engine Optimization (SEO)',
    comment: 'Enhance your website’s visibility on search engines with comprehensive SEO strategies including reserarch.',
    count: 200,
  },
  {
    number: 2,
    title: 'Content Marketing',
    comment: 'Engage your audience with high-quality, relevant content that drives traffic fosters customer.',
    count: 300,
  },
  {
    number: 3,
    title: 'Pay-Per-Click (PPC) Advertising',
    comment: ' Maximize your ROI with targeted PPC campaigns designed to attract the right audience customers.',
    count: 400,
  },
  {
    number: 4,
    title: 'Social Media Marketing',
    comment: 'Build a strong social media presence to connect with your audience, awareness, engagement.',
    count: 500,
  },
  {
    number: 5,
    title: 'Website Design & Development',
    comment: 'Create a user-friendly, responsive website that not only looks great but also performs exceptionally.',
    count: 300,
  },
  {
    number: 6,
    title: 'Analytics & Reporting',
    comment: 'Gain insights into your digital performance detailed reporting to inform your strategy & reporting.',
    count: 500,
  },
]

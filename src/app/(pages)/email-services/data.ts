import { StaticImageData } from 'next/image'

import tes1 from '@/assets/img/testimonial/team2-image1.png'
import tes2 from '@/assets/img/testimonial/team2-image2.png'

import team1 from '@/assets/img/team/team2-image1.png'
import team2 from '@/assets/img/team/team2-image2.png'
import team3 from '@/assets/img/team/team2-image3.png'
import team4 from '@/assets/img/team/team2-image4.png'

export type CounterType = {
  count: string
  title: string
}

export type ServiceType = {
  delay: number
  number: number
  title: string
  comment: string
}

export type TestimonialType = {
  description: string
  image: StaticImageData
  name: string
  title: string
}

export type TeamType = {
  delay: number
  image: StaticImageData
  name: string
  title: string
}

export const teamData: TeamType[] = [
  {
    delay: 200,
    image: team1,
    name: 'Rodger Struck',
    title: 'Social Media Specialist',
  },
  {
    delay: 300,
    image: team2,
    name: 'Alex Buckmaster',
    title: 'Marketing Officer',
  },
  {
    delay: 400,
    image: team3,
    name: 'Sarah Joe',
    title: 'Marketer',
  },
  {
    delay: 500,
    image: team4,
    name: 'Chris Glasser',
    title: 'Marketer',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: tes1,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: tes1,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: tes2,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: tes2,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
]

export const serviceData: ServiceType[] = [
  {
    delay: 200,
    number: 1,
    title: 'Startup Support',
    comment: 'From ideation to execution, we help new businesses take flight.',
  },
  {
    delay: 300,
    number: 2,
    title: 'HR Staffing Excellence',
    comment: 'Providing top-tier staffing solutions to build winning teams.',
  },
  {
    delay: 400,
    number: 3,
    title: 'Social Media Marketing',
    comment: 'Amplifying your digital presence with innovative strategies.',
  },
  {
    delay: 500,
    number: 4,
    title: 'Solar Energy Solutions',
    comment: 'Promoting sustainability through clean energy initiatives..',
  },
  {
    delay: 600,
    number: 5,
    title: 'Real Estate Expertise',
    comment: 'Crafting compelling campaigns for property ventures.',
  },
  {
    delay: 500,
    number: 6,
    title: 'Advertising &amp; Branding',
    comment: 'Building brands that stand out in competitive markets.',
  },
  {
    delay: 500,
    number: 7,
    title: 'E-Commerce Optimization',
    comment: 'From user-friendly platforms to targeted marketing,',
  },
  {
    delay: 500,
    number: 8,
    title: 'travel Guide Expertise',
    comment: 'Embark on unforgettable journeys with our travel agency.',
  },
  {
    delay: 500,
    number: 9,
    title: 'Insurance Policy',
    comment: 'Protect what matters most with comprehensive insurance solutions',
  },
]

export const countData: CounterType[] = [
  {
    count: '500+',
    title: 'Agency Employees',
  },
  {
    count: '900+',
    title: 'Project Complete',
  },
  {
    count: '$200M',
    title: 'Revenue Generated',
  },
  {
    count: '110K',
    title: 'Satisfied Client',
  },
  {
    count: '109+',
    title: 'Countries Include',
  },
]

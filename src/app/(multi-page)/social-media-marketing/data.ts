import { StaticImageData } from 'next/image'

import chooseapp1 from '@/assets/img/apps/choose-app1.png'
import chooseapp2 from '@/assets/img/apps/choose-app2.png'
import chooseapp3 from '@/assets/img/apps/choose-app3.png'
import chooseapp4 from '@/assets/img/apps/choose-app4.png'
import chooseapp5 from '@/assets/img/apps/choose-app5.png'
import chooseapp6 from '@/assets/img/apps/choose-app6.png'

import team1 from '@/assets/img/team/team2-image1.png'
import team2 from '@/assets/img/team/team2-image2.png'
import team3 from '@/assets/img/team/team2-image3.png'
import team4 from '@/assets/img/team/team2-image4.png'

import test1 from '@/assets/img/testimonial/team2-image1.png'
import test2 from '@/assets/img/testimonial/team2-image2.png'
import test3 from '@/assets/img/testimonial/team2-image3.png'

import blog1 from '@/assets/img/blog/blog2-image1.png'
import blog2 from '@/assets/img/blog/blog2-image2.png'

export type ChooseType = {
  image: StaticImageData
  number: string
  title: string
  duration: number
}

export type TeamAreaType = {
  duration: number
  image: StaticImageData
  name: string
  title: string
}

export type TestimonialType = {
  image: StaticImageData
  description: string
  name: string
  title: string
}

export type BlogType = {
  image: StaticImageData
  title: string
  description: string
}

export const blogData: BlogType[] = [
  {
    image: blog1,
    title: '5 Social Media Trends to Watch in 2025',
    description: 'Discover the key trends shaping the social media landscape your brand can leverage them stay relevant.',
  },
  {
    image: blog2,
    title: 'Maximizing ROI with Paid Social Ads',
    description: 'Learn how to create high-performing ad campaigns that boost engagement and drive measurable results.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: test1,
    description:
      'We saw a dramatic increase in engagement within the first month of partnering with SEOX. Their creativity and strategy have truly transformed our online presence!',
    name: 'Shakib Al Hasan',
    title: 'Marketing Manager',
  },
  {
    image: test2,
    description:
      'The team at SEOX is phenomenal! They understood our brand’s vision and executed campaigns that not only boosted our followers but also doubled our sales.',
    name: 'Tanzid Tamim',
    title: 'CEO of FreshBites Cafe',
  },
  {
    image: test3,
    description:
      'Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% conversion rate!',
    name: 'Taskin Ahmed',
    title: 'Founder of Glow World',
  },
  {
    image: test1,
    description:
      'We saw a dramatic increase in engagement within the first month of partnering with SEOX. Their creativity and strategy have truly transformed our online presence!',
    name: 'Shakib Al Hasan',
    title: 'Marketing Manager',
  },
  {
    image: test2,
    description:
      'The team at SEOX is phenomenal! They understood our brand’s vision and executed campaigns that not only boosted our followers but also doubled our sales.',
    name: 'Tanzid Tamim',
    title: 'CEO of FreshBites Cafe',
  },
  {
    image: test3,
    description:
      'Their expertise in social media advertising is unmatched. Thanks to their targeted campaigns, our website traffic grew by 75%, and we achieved a 30% conversion rate!',
    name: 'Taskin Ahmed',
    title: 'Founder of Glow World',
  },
]

export const teamData: TeamAreaType[] = [
  {
    duration: 200,
    image: team1,
    name: 'Rodger Struck',
    title: 'Social Media Specialist',
  },
  {
    duration: 300,
    image: team2,
    name: 'Alex Buckmaster',
    title: 'Marketing Officer',
  },
  {
    duration: 400,
    image: team3,
    name: 'Sarah Joe',
    title: 'Marketer',
  },
  {
    duration: 500,
    image: team4,
    name: 'Chris Glasser',
    title: 'Marketer',
  },
]

export const chooseData: ChooseType[] = [
  {
    image: chooseapp1,
    number: '12,570+',
    title: 'Account Boosted',
    duration: 200,
  },
  {
    image: chooseapp2,
    number: '350+',
    title: 'Account Managed',
    duration: 300,
  },
  {
    image: chooseapp3,
    number: '5,482+',
    title: 'Account Optimized',
    duration: 350,
  },
  {
    image: chooseapp4,
    number: '5,558+',
    title: 'Account Grow',
    duration: 400,
  },
  {
    image: chooseapp5,
    number: '4,568+',
    title: 'User Hired',
    duration: 450,
  },
  {
    image: chooseapp6,
    number: '9,587+',
    title: 'Account Promoted',
    duration: 500,
  },
]

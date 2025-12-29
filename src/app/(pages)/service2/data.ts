import { StaticImageData } from 'next/image'

import ser1 from '@/assets/img/service/service5-image1.png'
import ser10 from '@/assets/img/service/service5-image10.png'
import ser11 from '@/assets/img/service/service5-image11.png'
import ser12 from '@/assets/img/service/service5-image12.png'
import ser2 from '@/assets/img/service/service5-image2.png'
import ser3 from '@/assets/img/service/service5-image3.png'
import ser4 from '@/assets/img/service/service5-image4.png'
import ser5 from '@/assets/img/service/service5-image5.png'
import ser6 from '@/assets/img/service/service5-image6.png'
import ser7 from '@/assets/img/service/service5-image7.png'
import ser8 from '@/assets/img/service/service5-image8.png'
import ser9 from '@/assets/img/service/service5-image9.png'

import team1 from '@/assets/img/team/team2-image1.png'
import team2 from '@/assets/img/team/team2-image2.png'
import team3 from '@/assets/img/team/team2-image3.png'
import team4 from '@/assets/img/team/team2-image4.png'

export type ServiceType = {
  image: StaticImageData
  number: string
  title: string
}

export type CounterType = {
  count: string
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

export const serviceData: ServiceType[] = [
  {
    image: ser1,
    number: '01',
    title: 'Business Strategy',
  },
  {
    image: ser2,
    number: '02',
    title: 'Business Strategy',
  },
  {
    image: ser3,
    number: '03',
    title: 'Business Strategy',
  },
  {
    image: ser4,
    number: '04',
    title: 'Business Strategy',
  },
  {
    image: ser5,
    number: '05',
    title: 'HR Staffing',
  },
  {
    image: ser6,
    number: '06',
    title: 'Web Design',
  },
  {
    image: ser7,
    number: '07',
    title: 'Real Estate',
  },
  {
    image: ser8,
    number: '08',
    title: 'Advertising',
  },
  {
    image: ser9,
    number: '09',
    title: 'E-commerce',
  },
  {
    image: ser10,
    number: '10',
    title: 'Travel Guide',
  },
  {
    image: ser11,
    number: '11',
    title: 'Insurance',
  },
  {
    image: ser12,
    number: '12',
    title: 'Solar Energy',
  },
]

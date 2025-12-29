import { StaticImageData } from 'next/image'

import team1 from '@/assets/img/team/team2-image1.png'
import team10 from '@/assets/img/team/team2-image10.png'
import team11 from '@/assets/img/team/team2-image11.png'
import team12 from '@/assets/img/team/team2-image12.png'
import team2 from '@/assets/img/team/team2-image2.png'
import team3 from '@/assets/img/team/team2-image3.png'
import team4 from '@/assets/img/team/team2-image4.png'
import team5 from '@/assets/img/team/team2-image5.png'
import team6 from '@/assets/img/team/team2-image6.png'
import team7 from '@/assets/img/team/team2-image7.png'
import team8 from '@/assets/img/team/team2-image8.png'
import team9 from '@/assets/img/team/team2-image9.png'

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
  {
    delay: 200,
    image: team5,
    name: 'Katie Sims',
    title: 'Team Member',
  },
  {
    delay: 300,
    image: team6,
    name: 'Jerry Helfer',
    title: 'Team Member',
  },
  {
    delay: 500,
    image: team7,
    name: 'Rodger Struck',
    title: 'Team Member',
  },
  {
    delay: 500,
    image: team8,
    name: 'Stephanie Nicol',
    title: 'Team Member',
  },
  {
    delay: 500,
    image: team9,
    name: 'Iva Ryan',
    title: 'Team Member',
  },
  {
    delay: 300,
    image: team10,
    name: 'Judith Rodriguez',
    title: 'Team Member',
  },
  {
    delay: 400,
    image: team11,
    name: 'Judith Rodriguez',
    title: 'Team Member',
  },
  {
    delay: 500,
    image: team12,
    name: 'Autumn Phillips',
    title: 'Team Member',
  },
]

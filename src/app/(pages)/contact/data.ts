import { StaticImageData } from 'next/image'

import icon1 from '@/assets/img/icons/contact-page-icon1.svg'
import icon2 from '@/assets/img/icons/contact-page-icon2.svg'
import icon3 from '@/assets/img/icons/contact-page-icon3.svg'

import app1 from '@/assets/img/apps/choose-app1.png'
import app2 from '@/assets/img/apps/choose-app2.png'
import app3 from '@/assets/img/apps/choose-app3.png'
import app4 from '@/assets/img/apps/choose-app4.png'
import app5 from '@/assets/img/apps/choose-app5.png'
import app6 from '@/assets/img/apps/choose-app6.png'

export type ContactType = {
  image: StaticImageData
  name: string
  title: string
  comment: string
}

export type ChooseType = {
  delay: number
  image: StaticImageData
  number: string
  title: string
}

export const chooseData: ChooseType[] = [
  {
    delay: 200,
    image: app1,
    number: '12,570+',
    title: 'Account Boosted',
  },
  {
    delay: 300,
    image: app2,
    number: '350+',
    title: 'Account Managed',
  },
  {
    delay: 350,
    image: app3,
    number: '5,482+',
    title: 'Account Optimized',
  },
  {
    delay: 400,
    image: app4,
    number: '5,558+',
    title: 'Account Grow',
  },
  {
    delay: 450,
    image: app5,
    number: '4,568+',
    title: 'User Hired',
  },
  {
    delay: 500,
    image: app6,
    number: '9,587+',
    title: 'Account Promoted',
  },
]

export const contactData: ContactType[] = [
  {
    image: icon1,
    name: 'Email Address',
    title: 'info@g-netsolutions.com',
    comment: ' ',
  },
  {
    image: icon2,
    name: 'Phone Number',
    title: '+ 91-9751959300',
    comment: '',
  },
  {
    image: icon3,
    name: 'Office Address',
    title: 'Lakshmi Nagar,Thaneer Pandal,V.K.Road, Peelamedu, Coimbatore - 641004,Tamilnadu, INDIA. (Near TIDEL Park) ',
    comment: '',
  },
]

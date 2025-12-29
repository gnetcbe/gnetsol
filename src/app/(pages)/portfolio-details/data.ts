import { StaticImageData } from 'next/image'

import img1 from '@/assets/img/others/portfolio-image1.png'
import img2 from '@/assets/img/others/portfolio-image2.png'
import img3 from '@/assets/img/others/portfolio-image3.png'

export type PortfolioType = {
  image: StaticImageData
  title: string
  name: string
}

export const portfolioData: PortfolioType[] = [
  {
    image: img1,
    title: 'Off Line SEO Marketing',
    name: 'Development',
  },
  {
    image: img2,
    title: 'SEO Tracking Analysis',
    name: 'branding',
  },
  {
    image: img3,
    title: 'Article Data Analysis',
    name: 'Marketing',
  },
]

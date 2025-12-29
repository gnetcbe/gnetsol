import { StaticImageData } from 'next/image'

import blog1 from '@/assets/img/blog/blog-page1-image1.png'
import blog2 from '@/assets/img/blog/blog-page1-image2.png'
import blog3 from '@/assets/img/blog/blog-page1-image3.png'
import blog4 from '@/assets/img/blog/blog-page1-image4.png'
import blog5 from '@/assets/img/blog/blog-page1-image5.png'
import blog6 from '@/assets/img/blog/blog-page1-image6.png'
import blog7 from '@/assets/img/blog/blog-page1-image7.png'
import blog8 from '@/assets/img/blog/blog-page1-image8.png'

export type BlogType = {
  image: StaticImageData
  name: string
  description: string
}

export const blogData: BlogType[] = [
  {
    image: blog1,
    name: 'Dustin Turcotte',
    description: 'Discover the emerging trends that are reshaping the startup ecosystem.',
  },
  {
    image: blog2,
    name: 'Alex Carey',
    description: 'Learn the secrets to creating a brand that resonates with your audience.',
  },
  {
    image: blog3,
    name: 'Patricia Sanders',
    description: 'Mastering SEO: The Ultimate Guide to Boosting Website Traffic',
  },
  {
    image: blog4,
    name: 'Kathy Pacheco',
    description: 'Content Marketing Tips to Elevate Your Brand’s Online Presence',
  },
  {
    image: blog5,
    name: 'Ricky Smith',
    description: 'The Power of Social Media Marketing: Strategies for Growth',
  },
  {
    image: blog6,
    name: 'David Elson',
    description: 'Data-Driven Insights: Using Analytics to Enhance Your Marketing Strategy',
  },
  {
    image: blog7,
    name: 'Rhonda Rhodes',
    description: 'Creating a Winning Content Strategy: Tips and Best Practices',
  },
  {
    image: blog8,
    name: 'Iva Ryan',
    description: 'How to Measure SEO Success: Key Metrics to Track',
  },
]

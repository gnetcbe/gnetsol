import { StaticImageData } from 'next/image'

import about1 from '@/assets/img/logo/about10-benar1.png'
import about2 from '@/assets/img/logo/about10-benar2.png'
import about3 from '@/assets/img/logo/about10-benar3.png'
import about4 from '@/assets/img/logo/about10-benar4.png'
import about5 from '@/assets/img/logo/about10-benar5.png'
import about6 from '@/assets/img/logo/about10-benar6.png'

import ser1 from '@/assets/img/service/service10-image1.png'
import ser2 from '@/assets/img/service/service10-image2.png'
import ser3 from '@/assets/img/service/service10-image3.png'
import ser4 from '@/assets/img/service/service10-image4.png'
import ser5 from '@/assets/img/service/service10-image5.png'
import ser6 from '@/assets/img/service/service10-image6.png'

import growth1 from '@/assets/img/others/growth-image1.png'
import growth2 from '@/assets/img/others/growth-image2.png'
import growth3 from '@/assets/img/others/growth-image3.png'

import team1 from '@/assets/img/team/team10-image1.png'
import team2 from '@/assets/img/team/team10-image2.png'
import team3 from '@/assets/img/team/team10-image3.png'
import team4 from '@/assets/img/team/team10-image4.png'

import auth1 from '@/assets/img/testimonial/tes10-author1.png'
import auth2 from '@/assets/img/testimonial/tes10-author2.png'
import auth3 from '@/assets/img/testimonial/tes10-author3.png'

import blog1 from '@/assets/img/blog/blog10-image1.png'
import blog2 from '@/assets/img/blog/blog10-image2.png'
import blog3 from '@/assets/img/blog/blog10-image3.png'

export type AboutBannerType = {
  image: StaticImageData
}

export type ServiceType = {
  delay: number
  image: StaticImageData
  title: string
  description: string
}

export type FaqType = {
  question: string
  answer: string
}

export type GrowthAreaType = {
  number: number
  image: StaticImageData
  title: string
}

export type TeamAreaType = {
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
  duration: number
  image: StaticImageData
  name: string
}

export const blogData: BlogType[] = [
  {
    duration: 800,
    image: blog1,
    name: 'Autumn Phillips',
  },
  {
    duration: 1000,
    image: blog2,
    name: 'Chris Glasser',
  },
  {
    duration: 1200,
    image: blog3,
    name: 'Alex Buckmaster',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: auth1,
    description:
      'SEOX helped scale from an unknown brand to an industry leader. Their SEO strategies, content marketing, digital growth tactics skyrocketed visibility, bringing in more leads than best ever.',
    name: 'Tina Wilkinson',
    title: 'CEO, Wingree Ltd',
  },
  {
    image: auth1,
    description:
      'As a startup, we struggled to get and traction. SEOX crafted an custom SEO and digital marketing plan that boosted our organic traffic by 400% in just and few months. Now, we’re ranking key.',
    name: 'Alex Ferguson',
    title: 'CEO, Ranboz Ltd',
  },
  {
    image: auth3,
    description:
      'Our competitors had been dominating search results, but SEOX turned the of game around. Within monthly, we are climbed to the top of Google rankings, and our inbound lead doubled startup',
    name: 'Alzari Joseph',
    title: 'CEO, BIGS Ltd',
  },
  {
    image: auth1,
    description:
      'SEOX helped scale from an unknown brand to an industry leader. Their SEO strategies, content marketing, digital growth tactics skyrocketed visibility, bringing in more leads than best ever.',
    name: 'Tina Wilkinson',
    title: 'CEO, Wingree Ltd',
  },
  {
    image: auth2,
    description:
      'As a startup, we struggled to get and traction. SEOX crafted an custom SEO and digital marketing plan that boosted our organic traffic by 400% in just and few months. Now, we’re ranking key.',
    name: 'Alex Ferguson',
    title: 'CEO, Ranboz Ltd',
  },
  {
    image: auth3,
    description:
      'Our competitors had been dominating search results, but SEOX turned the of game around. Within monthly, we are climbed to the top of Google rankings, and our inbound lead doubled startup',
    name: 'Alzari Joseph',
    title: 'CEO, BIGS Ltd',
  },
]

export const teamData: TeamAreaType[] = [
  {
    image: team1,
    name: 'Daniel Thompson',
    title: 'Chief Marketing Officer',
  },
  {
    image: team2,
    name: 'Emma Sullivan',
    title: 'Brand Strategist',
  },
  {
    image: team3,
    name: 'Leo Anderson',
    title: 'UI/UX Designer',
  },
  {
    image: team4,
    name: 'Isabella Flores',
    title: 'Content Marketing',
  },
]

export const growthareaData: GrowthAreaType[] = [
  {
    number: 1,
    image: growth1,
    title: 'Strategic Planning',
  },
  {
    number: 2,
    image: growth2,
    title: 'Data-Driven Insights',
  },
  {
    number: 3,
    image: growth3,
    title: 'Continue Improvement',
  },
]

export const faqData: FaqType[] = [
  {
    question: 'Discovery Planning Strategy',
    answer:
      ' Once we have a clear strategy, we create a detailed roadmap. This outlines project timelines, key the milestones, an the best approach to ensure every step drives measurable and results',
  },
  {
    question: 'Planning On Roadmapping',
    answer:
      ' Once we have a clear strategy, we create a detailed roadmap. This outlines project timelines, key the milestones, an the best approach to ensure every step drives measurable and results',
  },
  {
    question: 'Execution Implementation',
    answer:
      ' Once we have a clear strategy, we create a detailed roadmap. This outlines project timelines, key the milestones, an the best approach to ensure every step drives measurable and results',
  },
  {
    question: 'Ongoing Support Partnership',
    answer:
      ' Once we have a clear strategy, we create a detailed roadmap. This outlines project timelines, key the milestones, an the best approach to ensure every step drives measurable and results',
  },
]

export const serviceData: ServiceType[] = [
  {
    delay: 200,
    image: ser1,
    title: 'Startup Growth Blueprint',
    description: 'We create a customized best roadmap designed to help your startup scale and efficiently from market analysis growth',
  },
  {
    delay: 500,
    image: ser2,
    title: 'Launch Scale Accelerator',
    description: 'Speed up your startup’s growth with our accelerator program. We help you scale optimize operations, attract investors.',
  },
  {
    delay: 300,
    image: ser3,
    title: 'Market Entry Masterplan',
    description: 'Entering a new market? competitive analysis, positioning strategies, and go-to-market plans that.',
  },
  {
    delay: 400,
    image: ser4,
    title: 'Growth Catalyst Program',
    description: 'Our framework focuses on identifying an growth barriers and implementing best of effective strategies to overcome them.',
  },
  {
    delay: 300,
    image: ser5,
    title: 'Business Boost Framework',
    description: 'We help you create a strong brand identity that resonates with your audiences. From logo design to brand voice development.',
  },
  {
    delay: 300,
    image: ser6,
    title: 'The Creative Foundry',
    description: 'We transform your startup’s vision into stunning designs and compelling content Whether it for web, on your social media.',
  },
]

export const aboutData: AboutBannerType[] = [
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
  {
    image: about1,
  },
  {
    image: about2,
  },
  {
    image: about3,
  },
  {
    image: about4,
  },
  {
    image: about5,
  },
  {
    image: about6,
  },
  {
    image: about1,
  },
]

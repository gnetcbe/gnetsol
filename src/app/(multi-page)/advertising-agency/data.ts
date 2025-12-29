import { StaticImageData } from 'next/image'

import work2 from '@/assets/img/work/work3-image2.png'
import work3 from '@/assets/img/work/work3-image3.png'
import work4 from '@/assets/img/work/work3-image4.png'

import team1 from '@/assets/img/testimonial/team2-image1.png'
import team2 from '@/assets/img/testimonial/team2-image2.png'

import insta1 from '@/assets/img/instagram-feed/instagram-feed3-img1.png'
import insta2 from '@/assets/img/instagram-feed/instagram-feed3-img2.png'
import insta3 from '@/assets/img/instagram-feed/instagram-feed3-img3.png'
import insta4 from '@/assets/img/instagram-feed/instagram-feed3-img4.png'
import insta5 from '@/assets/img/instagram-feed/instagram-feed3-img5.png'
import insta6 from '@/assets/img/instagram-feed/instagram-feed3-img6.png'

export type WorkAreaType = {
  image: StaticImageData
  title: string
  duration: number
  description: string
}

export type TestimonialType = {
  description: string
  image: StaticImageData
  name: string
  title: string
}

export type InstaType = {
  image: StaticImageData
}

export type ShopType = {
  delay: number
  image: StaticImageData
  title: string
  price: number
}

import shop1 from '@/assets/img/shop/shop3-image1.png'
import shop2 from '@/assets/img/shop/shop3-image2.png'
import shop3 from '@/assets/img/shop/shop3-image3.png'
import shop4 from '@/assets/img/shop/shop3-image4.png'

export const shopData: ShopType[] = [
  {
    delay: 200,
    image: shop1,
    title: 'Blue Water Bottle',
    price: 15.99,
  },
  {
    delay: 300,
    image: shop2,
    title: 'Navy Hub Water Bottle',
    price: 19.99,
  },
  {
    delay: 400,
    image: shop3,
    title: 'Cyber White Bottle',
    price: 19.99,
  },
  {
    delay: 500,
    image: shop4,
    title: 'Wood Water Bottle',
    price: 24.99,
  },
]

export const shopData2: ShopType[] = [
  {
    delay: 500,
    image: shop4,
    title: 'Wood Water Bottle',
    price: 24.99,
  },
  {
    delay: 200,
    image: shop1,
    title: 'Blue Water Bottle',
    price: 15.99,
  },
  {
    delay: 300,
    image: shop2,
    title: 'Navy Hub Water Bottle',
    price: 19.99,
  },
  {
    delay: 400,
    image: shop3,
    title: 'Cyber White Bottle',
    price: 19.99,
  },
]

export const shopData3: ShopType[] = [
  {
    delay: 400,
    image: shop3,
    title: 'Cyber White Bottle',
    price: 19.99,
  },
  {
    delay: 500,
    image: shop4,
    title: 'Wood Water Bottle',
    price: 24.99,
  },
  {
    delay: 200,
    image: shop1,
    title: 'Blue Water Bottle',
    price: 15.99,
  },
  {
    delay: 300,
    image: shop2,
    title: 'Navy Hub Water Bottle',
    price: 19.99,
  },
]

export const shopData4: ShopType[] = [
  {
    delay: 300,
    image: shop2,
    title: 'Navy Hub Water Bottle',
    price: 19.99,
  },
  {
    delay: 400,
    image: shop3,
    title: 'Cyber White Bottle',
    price: 19.99,
  },
  {
    delay: 500,
    image: shop4,
    title: 'Wood Water Bottle',
    price: 24.99,
  },
  {
    delay: 200,
    image: shop1,
    title: 'Blue Water Bottle',
    price: 15.99,
  },
]

export const instaData: InstaType[] = [
  {
    image: insta1,
  },
  {
    image: insta2,
  },
  {
    image: insta3,
  },
  {
    image: insta4,
  },
  {
    image: insta5,
  },
  {
    image: insta6,
  },
  {
    image: insta2,
  },
]

export const testimonialData: TestimonialType[] = [
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: team1,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: team1,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: team2,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
  {
    description:
      'Working with SEOX Advertising Agency has been a game-changer for our brand. The custom water bottles they designed were not only visually appealing but also high-quality and practical. We used them during our corporate events, and the response was phenomenal. Our clients loved the attention to detail, and many even commented on how these bottles reflected the premium nature of our brand. SEOX’s team made the entire process seamless, from brainstorming design ideas to ensuring timely delivery. We couldn’t have asked for a better partner in promoting our brand.',
    image: team2,
    name: 'Sarah Makiavelly',
    title: 'Marketing Manager',
  },
]

export const workData: WorkAreaType[] = [
  {
    image: work2,
    title: 'Design Creation',
    duration: 900,
    description: 'Our creative experts will craft a custom mockup your water bottle, incorporating your logo, colors, and design elements.',
  },
  {
    image: work3,
    title: 'Design Creation',
    duration: 1100,
    description: 'Our creative experts will craft a custom mockup your water bottle, incorporating your logo, colors, and design elements.',
  },
  {
    image: work4,
    title: 'Design Creation',
    duration: 1300,
    description: 'Our creative experts will craft a custom mockup your water bottle, incorporating your logo, colors, and design elements.',
  },
]

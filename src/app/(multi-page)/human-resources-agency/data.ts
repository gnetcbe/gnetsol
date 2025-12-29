import { StaticImageData } from 'next/image'

import logo1 from '@/assets/img/others/hero6-slider-logo1.png'
import logo2 from '@/assets/img/others/hero6-slider-logo2.png'
import logo3 from '@/assets/img/others/hero6-slider-logo3.png'
import logo4 from '@/assets/img/others/hero6-slider-logo4.png'
import logo5 from '@/assets/img/others/hero6-slider-logo5.png'
import logo6 from '@/assets/img/others/hero6-slider-logo6.png'
import logo7 from '@/assets/img/others/hero6-slider-logo7.png'
import logo8 from '@/assets/img/others/hero6-slider-logo8.png'
 

import software from '@/assets/img/icons/software.png'
import hosting from '@/assets/img/icons/hosting.png'
import maintain from '@/assets/img/icons/maintain.png'
import email from '@/assets/img/icons/email.png'
import digital from '@/assets/img/icons/digital.png'

import about1 from '@/assets/img/icons/about6-icon1.svg'
import about2 from '@/assets/img/icons/about6-icon2.svg'
import about3 from '@/assets/img/icons/about6-icon3.svg'

import icon2 from '@/assets/img/icons/service6-icon2.svg'
import icon3 from '@/assets/img/icons/service6-icon3.svg'
import icon4 from '@/assets/img/icons/service6-icon4.svg'
import icon5 from '@/assets/img/icons/service6-icon5.svg'

import team2 from '@/assets/img/testimonial/team2-image2.png'

import blog1 from '@/assets/img/blog/blog6-image1.png'
import blog2 from '@/assets/img/blog/blog6-image2.png'
import blog3 from '@/assets/img/blog/blog6-image3.png'

export type HeroType = {
  image: StaticImageData
}

export type AboutType = {
  image: StaticImageData
  title: string
  comment: string
  duration: number
}

export type ServiceType = {
  image: StaticImageData
  title: string
  description: string
}

export type WorkType = {
  title: string
  description: string
}

export type ProjectType = {
  image: StaticImageData
}

export type TestimonialType = {
  image: StaticImageData
  description: string
  name: string
  title: string
}

export type FaqType = {
  question: string
  answer: string
}

export type BlogType = {
  image: StaticImageData
  title: string
}

export const blogData: BlogType[] = [
  {
    image: blog1,
    title: 'Top Talent Acquisition Trends You Need to Know',
  },
  {
    image: blog2,
    title: 'Navigating the Challenges of Remote Workforce Staffing',
  },
  {
    image: blog3,
    title: 'The Importance of Diversity and Inclusion in Hiring',
  },
]

export const faqData: FaqType[] = [
  {
    question: 'Innovative Recruitment Techniques',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Tailored Talent Solutions',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Workforce Planning Expertise',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
  {
    question: 'Building Future-Ready Teams',
    answer:
      'Every business is unique, &amp; so our strategies. We design customized staffing solution to align with your specific goals &amp; workforce needs.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: team2,
    description:
      'At Seo, we measure our success by the satisfaction of our clients and candidates. Every placement we make is a testament to our dedication, expertise, &amp; commitment to excellence From helping businesses find the right.',
    name: 'James Reynolds',
    title: 'Marketing Director',
  },
  {
    image: team2,
    description:
      'At Seo, we measure our success by the satisfaction of our clients and candidates. Every placement we make is a testament to our dedication, expertise, &amp; commitment to excellence From helping businesses find the right.',
    name: 'James Reynolds',
    title: 'Marketing Director',
  },
]

export const workData: WorkType[] = [
  {
    title: 'Expertise and Skill',
    description: ' Experienced Team Having a team of skilled developers, designers, and project managers. Continuous Learning Encouraging ongoing education and keeping up with the latest industry trends and technologies.',
  },
  {
    title: 'Customer Support',
    description: 'Reliable Support Providing ongoing support and maintenance even after project completion. Responsive Service Being responsive and available to address any client concerns or issues.',
  },
    {
    title: 'Client-Centric Approach',
    description: 'Effective Communication Keeping clients informed throughout the development process. Understanding Client Needs Customizing solutions based on the specific requirements of each client.',
  },
]

export const serviceDataa: ServiceType[] = [
  {
    image: icon3,
    title: 'HR Consulting and Workforce Planning',
    description: 'Our HR Consulting &amp; Workforce Plan services help companies strategize and optimize their.',
  },
  {
    image: icon4,
    title: 'Permanent Staffing Solutions',
    description: "We specialize in fin permanent, full-time employees who are the perfect fit organization's.",
  },
]

export const service2: ServiceType[] = [
  {
    image: icon2,
    title: 'Candidate Screening and Background Checks',
    description:
      'Ensuring that your hires are trustworthy qualified is crucial. Our Candidate Screening &amp; Background Checks service helps you verify the credentials.',
  },
  {
    image: icon5,
    title: 'Payroll and Benefits Administration',
    description:
      'Managing payroll and employee benefits can be time-consuming. [Agency Name] offers Payroll and Benefits Administration services to simplify.',
  },
]

export const aboutData: AboutType[] = [
  {
    image: about1,
    title: 'Timely Solutions for Lasting Success',
    comment: 'We are well-known for providing timely and efficient services, along with maintaining long-term resourceful relationships with our clients and partners.',
    duration: 800,
  },
  {
    image: about2,
    title: 'Empowering Businesses to Grow Faster with Premier IT Services.',
    comment: 'Your business will start growing in no time with g-net solutions. We are proud of being a premier IT company, serving our clients in diversified business vertical.',
    duration: 1000,
  },
  
]

export const heroData: HeroType[] = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
  {
    image: logo7,
  },
  {
    image: logo8,
  },
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
  {
    image: logo7,
  },
  {
    image: logo8,
  },
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
  {
    image: logo7,
  },
  {
    image: logo8,
  },
]

export const serviceData: ServiceType[] = [
  {
    image: software,
    title: 'Web Development',
    description:
      'Responsive, secure and high-performance websites crafted to empower your business online.',
  },
  {
    image: hosting,
    title: 'Domain Name & Web Hosting',
    description:
      'Reliable domain registration and fast, secure hosting services with full technical support.',
  },
  {
    image: maintain,
    title: 'Website Maintenance',
    description:
      'Regular updates, security monitoring and performance optimization to keep your website running smoothly.',
  },
]

export const serviceData2: ServiceType[] = [
  {
    image: email,
    title: 'Email Solutions',
    description:
      'Professional business email systems with seamless setup, integration and reliable support.',
  },
  {
    image: digital,
    title: 'Digital Marketing',
    description:
      'Result-driven digital marketing strategies to enhance visibility, engagement and brand growth.',
  },
]


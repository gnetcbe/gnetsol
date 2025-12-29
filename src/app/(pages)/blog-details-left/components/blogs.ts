// src/data/blogs.ts

export type Blog = {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  coverImage: string
  content: string[]
}

export const blogs: Blog[] = [
  {
    id: '1',
    slug: 'strong-website-digital-business-success',
    title: 'Why a Strong Website Is the Foundation of Your Digital Business Success',
    excerpt:
      'Your website is often the first interaction customers have with your business. A fast, secure, and professional website builds trust and drives long-term growth.',
    author: 'G-Net Solutions Team',
    date: '12 Dec 2025',
    category: 'Web & Digital Presence',
    coverImage: '/assets/img/blog/blog.jpg',

    content: [
      'In today’s digital-first world, a website is no longer just an online identity—it is the backbone of your business.',
      'A modern website functions as a 24/7 platform that supports branding, customer engagement, and lead generation.',
      'Performance, security, and scalability are essential for building customer trust and long-term success.',
      'Mobile-first design ensures consistent user experience across all devices.',
      'A strong website is not an expense—it is a long-term business investment.'
    ]
  },
  {
    id: '2',
    slug: 'digital-transformation-for-modern-business',
    title: 'How Digital Transformation Helps Businesses Stay Competitive',
    excerpt:
      'Digital transformation enables businesses to improve efficiency, enhance customer experience, and adapt to changing market demands.',
    author: 'G-Net Solutions Team',
    date: '15 Dec 2025',
    category: 'Digital Transformation',
    coverImage: '/assets/img/blog/blog.jpg',

    content: [
      'Digital transformation is no longer optional—it is a necessity for modern businesses.',
      'Technology-driven processes help organizations streamline operations and reduce manual inefficiencies.',
      'Cloud solutions, automation, and data analytics play a key role in scalability and growth.',
      'Customer expectations are evolving, and digital tools help businesses meet these demands.',
      'Businesses that embrace digital transformation gain a long-term competitive advantage.'
    ]
  }
]

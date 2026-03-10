import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './home/components/Hero'
import Footer from '@/components/layouts/Footer/Footer'
import CTA from '@/components/layouts/Footer/CTA'
import TopBar from '@/components/layouts/TopBar/page'
import logo from '@/assets/img/logo/title3.svg'
 
/* 🔥 LAZY-LOADED HOME SECTIONS */
const About = dynamic(() => import('./home/components/About'), {
  ssr: true,
})

const Choose = dynamic(() => import('./home/components/Choose'), {
  ssr: true,
})

const Service = dynamic(() => import('./home/components/Services2'), {
  ssr: true,
})

const WorkProcess = dynamic(() => import('./home/components/WorkProcess'), {
  ssr: true,
})

/* ✅ HOME PAGE SEO METADATA */
export const metadata: Metadata = {
  title:'G-Net Solutions-Web Development & IT Services in Coimbatore',
  description:
    'G-Net Solutions in Coimbatore offers expert web development, software solutions, digital marketing and hosting services to grow your business online.',
  keywords: [
    'g-net solutions',
    'website development company in coimbatore',
    'it services company coimbatore',
    'web design company',
    'software development company',
    'digital marketing company',
    'business email hosting',
    'web hosting services',
  ],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    title: 'G-Net Solutions | Web Development & IT Services',
    description:
      'Professional website development, software solutions, and digital marketing services by G-Net Solutions, Coimbatore.',
    url: 'https://g-netsolutions.com',
    siteName: 'G-Net Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-Net Solutions | Web & IT Services',
    description:
      'Leading IT services and website development company in Coimbatore.',
  },

alternates: {
    canonical: 'https://www.g-netsolutions.com/',
    languages: {
      'en-IN': 'https://www.g-netsolutions.com/',
      'x-default': 'https://www.g-netsolutions.com/',
    },
  },

}

const Page = () => {
  return (
    <>
      {/* 🔍 ORGANIZATION SCHEMA – HOME PAGE */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'G-Net Solutions',
            url: 'https://g-netsolutions.com',
            logo: 'https://g-netsolutions.com/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9751959300',
              contactType: 'customer support',
            },
            sameAs: [
              'https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/',
              'https://www.linkedin.com/in/gnetsolutions',
              'https://x.com/gnetcoimbatore',
              'https://www.youtube.com/@g-netsolutions5132',
            ],
          }),
        }}
      />


       {/* 🔍 SERVICES SCHEMA */}
  <Script
    id="services-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Offer',
        itemOffered: {
          '@type': 'ItemList',
          name: 'G-Net Solutions Web Services',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Service',
                name: 'Website Development',
                url: 'https://g-netsolutions.com/web-development',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'Service',
                name: 'CMS Website Development',
                url: 'https://g-netsolutions.com/software-development',
              },
            },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@type': 'Service',
                name: 'Ecommerce Website Development',
                url: 'https://g-netsolutions.com/ecommerce-solutions',
              },
            },
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'Service',
                name: 'Search Engine Optimization',
                url: 'https://g-netsolutions.com/digital-marketing-seo',
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@type': 'Service',
                name: 'Ware house management',
                url: 'https://g-netsolutions.com/warehouse-management-system',
              },
            },
            {
              '@type': 'ListItem',
              position: 6,
              item: {
                '@type': 'Service',
                name: 'Email Solutions',
                url: 'https://g-netsolutions.com/email-services',
              },
            },
            {
              '@type': 'ListItem',
              position: 7,
              item: {
                '@type': 'Service',
                name: 'Domain Registration',
                url: 'https://g-netsolutions.com/web-hosting',
              },
            },
            {
              '@type': 'ListItem',
              position: 8,
              item: {
                '@type': 'Service',
                name: 'Website Hosting',
                url: 'https://g-netsolutions.com/web-hosting',
              },
            },
            {
              '@type': 'ListItem',
              position: 9,
              item: {
                '@type': 'Service',
                name: 'Website Maintenance & Support',
                url: 'https://g-netsolutions.com/website-maintenance',
              },
            },
            {
              '@type': 'ListItem',
              position: 10,
              item: {
                '@type': 'Service',
                name: 'Hall Management System',
                url: 'https://g-netsolutions.com/hall-management-system',
              },
            },
          ],
        },
      }),
    }}
  />

      <TopBar />
      <main>
        <h1>Web Development Company in Coimbatore</h1>
        <Hero />
        <About />
        <Choose />
        <Service />
        <WorkProcess />  
        </main>
       <CTA />
       <Footer />
    </>
  )
}

export default Page

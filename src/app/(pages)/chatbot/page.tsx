import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import Hero from './components/Hero'

/* 🔥 LAZY LOAD — no loading placeholder to avoid blocking SSR */
const Chatbot = dynamic(() => import('./components/Chatbot'))

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | WhatsApp, Website & Business Automation | G-Net Solutions',
  description:
    'Top AI chatbot development company in Coimbatore. We build WhatsApp chatbots, website chatbots, and automation solutions to boost customer engagement, leads, and support across Tamil Nadu.',
  keywords: [
    'ai chatbot development company coimbatore',
    'chatbot development in coimbatore',
    'whatsapp chatbot development',
    'website chatbot integration',
    'customer support chatbot',
    'lead generation chatbot',
    'business automation chatbot',
    'conversational ai company india',
    'chatbot for business growth',
    'ai chatbot services',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'AI Chatbot Development Services | WhatsApp, Website & Business Automation | G-Net Solutions',
    description:
      'Build powerful AI chatbots for WhatsApp, websites, and automation. Improve customer support and generate leads 24/7.',
    // ✅ www added
    url: 'https://www.g-netsolutions.com/chatbot',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Chatbot Development Services - G-Net Solutions Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development Services | WhatsApp, Website & Business Automation | G-Net Solutions',
    description:
      'Smart AI chatbot solutions for automation, customer support, and lead generation in Coimbatore.',
  },
  alternates: {
    // ✅ www added
    canonical: 'https://www.g-netsolutions.com/chatbot',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ SERVICE SCHEMA */}
      <Script
        id="chatbot-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Chatbot Development Services',
            provider: {
              '@type': 'Organization',
              name: 'G-Net Solutions',
              // ✅ www added
              url: 'https://www.g-netsolutions.com',
              logo: 'https://www.g-netsolutions.com/logo.png',
            },
            areaServed: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India',
            },
            serviceType: [
              'AI Chatbot Development',
              'WhatsApp Chatbot',
              'Website Chatbot Integration',
              'Customer Support Automation',
              'Lead Generation Chatbots',
              'Conversational AI Solutions',
            ],
            // ✅ Removed invalid price string
            offers: {
              '@type': 'Offer',
              url: 'https://www.g-netsolutions.com/chatbot',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="chatbot-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.g-netsolutions.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Chatbot Development',
                item: 'https://www.g-netsolutions.com/chatbot',
              },
            ],
          }),
        }}
      />

      {/* ✅ FAQ SCHEMA — keep only if FAQ questions are visually on the page */}
      <Script
        id="chatbot-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is an AI chatbot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An AI chatbot is a smart software that automates conversations with users and helps businesses handle customer queries, leads, and support 24/7.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide WhatsApp chatbot development?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we build WhatsApp chatbots for customer support, marketing automation, and instant communication with customers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can chatbots increase business sales?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, chatbots help capture leads, engage visitors instantly, and improve conversions, resulting in higher sales.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can chatbots be integrated into my website?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we can integrate chatbots into any website to automate customer interactions and improve user experience.',
                },
              },
            ],
          }),
        }}
      />

      <main>
        <Hero />
        <Chatbot />
      </main>
    </>
  )
}

export default Page
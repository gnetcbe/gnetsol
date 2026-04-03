import { Metadata } from 'next'
import Script from 'next/script'
import FaqClient from './components/FaqClient'
import Hero from './components/Hero'

/* ✅ SEO METADATA */
export const metadata: Metadata = {
  title: 'FAQ — Web Development, SEO, Chatbot & IT Services | G-Net Solutions',
  description:
    'Find answers to common questions about web development, e-commerce, hosting, business email, chatbot development, digital marketing, SEO, AEO, GEO, and website maintenance by G-Net Solutions, Coimbatore.',
  keywords: [
    'faq web development coimbatore',
    'chatbot development faq',
    'seo services faq coimbatore',
    'e-commerce website faq',
    'web hosting faq india',
    'business email solutions faq',
    'website maintenance faq',
    'custom software development faq',
    'digital marketing faq',
    'aeo geo seo difference',
    'whatsapp chatbot faq',
    'g-net solutions faq',
    'it services coimbatore',
    'web design faq tamil nadu',
  ],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'FAQ — Web Development, SEO, Chatbot & IT Services | G-Net Solutions',
    description:
      'Answers to your questions on web development, e-commerce, hosting, chatbots, SEO, digital marketing, and more. G-Net Solutions, Coimbatore.',
    url: 'https://www.g-netsolutions.com/faq',
    siteName: 'G-Net Solutions',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FAQ - G-Net Solutions IT Services Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Web Development, SEO, Chatbot & IT Services | G-Net Solutions',
    description:
      'Common questions answered on web dev, SEO, chatbots, e-commerce, and hosting by G-Net Solutions Coimbatore.',
  },
  alternates: {
    canonical: 'https://www.g-netsolutions.com/faq',
  },
}

const Page = () => {
  return (
    <>
      {/* ✅ FAQ SCHEMA — for Google rich results / AEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              // Web Development
              { '@type': 'Question', name: 'What is web development and why does my business need a website?', acceptedAnswer: { '@type': 'Answer', text: 'Web development is the process of designing, building, and maintaining websites and web applications. Every business needs a website because it serves as your 24/7 digital storefront — it builds credibility, makes you discoverable online, reaches a wider audience, and enables you to showcase products, services, and contact information at all times.' } },
              { '@type': 'Question', name: 'What is the difference between a static website and a dynamic website?', acceptedAnswer: { '@type': 'Answer', text: 'A static website displays the same fixed content to every visitor and is best for simple informational sites. A dynamic website generates content in real time based on user actions or database data — suitable for e-commerce stores, portals, and sites that require login, search, or frequently updated content.' } },
              { '@type': 'Question', name: 'What is responsive web design?', acceptedAnswer: { '@type': 'Answer', text: 'Responsive web design ensures your website automatically adapts its layout, images, and content to look and function well on any screen size — from large desktop monitors to tablets and smartphones.' } },
              { '@type': 'Question', name: 'What is a CMS and do I need one?', acceptedAnswer: { '@type': 'Answer', text: 'A Content Management System (CMS) is a platform that lets you create, edit, and manage website content without writing code. Popular examples include WordPress, Joomla, and Drupal.' } },
              { '@type': 'Question', name: 'How long does it take to build a website?', acceptedAnswer: { '@type': 'Answer', text: 'A simple informational website typically takes 2–4 weeks. A CMS-based business website may take 4–8 weeks. A complex web application or e-commerce platform can take 2–6 months.' } },
              { '@type': 'Question', name: 'Will my website be optimised for search engines (SEO)?', acceptedAnswer: { '@type': 'Answer', text: 'A well-built website should include foundational on-page SEO — proper heading structure, clean URLs, meta titles and descriptions, fast load times, and mobile-friendliness.' } },
              { '@type': 'Question', name: 'What happens after my website is launched?', acceptedAnswer: { '@type': 'Answer', text: 'After launch you will need ongoing website maintenance — regular software/plugin updates, security monitoring, performance checks, content updates, and backups.' } },
              // E-commerce
              { '@type': 'Question', name: 'What is an e-commerce website?', acceptedAnswer: { '@type': 'Answer', text: 'An e-commerce website is an online store that allows businesses to sell products or services directly to customers over the internet. It includes product listings, a shopping cart, checkout flow, and payment processing.' } },
              { '@type': 'Question', name: 'Which e-commerce platform should I choose — Shopify, WooCommerce, or Magento?', acceptedAnswer: { '@type': 'Answer', text: 'Shopify is ideal for small to medium businesses who want speed of setup. WooCommerce offers great flexibility for content-heavy stores. Magento is built for large enterprises with complex product catalogues.' } },
              { '@type': 'Question', name: 'What payment gateways can be integrated?', acceptedAnswer: { '@type': 'Answer', text: 'Common payment gateways include Razorpay, PayU, Paytm, and Instamojo (popular in India), as well as global options like Stripe, PayPal, and Square.' } },
              { '@type': 'Question', name: 'What is an abandoned cart and how can I recover those sales?', acceptedAnswer: { '@type': 'Answer', text: 'An abandoned cart occurs when a shopper adds items to their cart but leaves before completing purchase. Recovery strategies include automated email reminders, exit-intent popups, and retargeting ads. Well-timed recovery emails can recover 5–15% of abandoned carts.' } },
              // Hosting & Domains
              { '@type': 'Question', name: 'What is web hosting and why do I need it?', acceptedAnswer: { '@type': 'Answer', text: "Web hosting is a service that stores your website's files on a server and makes them accessible to visitors over the internet. Without hosting, your website cannot be seen online." } },
              { '@type': 'Question', name: 'What is an SSL certificate and do I need one?', acceptedAnswer: { '@type': 'Answer', text: 'An SSL certificate encrypts data between your website and visitors. You need one because Google ranks secure sites higher, browsers warn users about sites without SSL, and it is essential for sites that collect form data or payment information.' } },
              { '@type': 'Question', name: 'What is uptime and what should I expect from a good host?', acceptedAnswer: { '@type': 'Answer', text: 'A reliable hosting provider should guarantee 99.9% uptime or higher — that translates to less than 8.7 hours of downtime per year.' } },
              // Business Email
              { '@type': 'Question', name: 'Why should I use a professional business email instead of Gmail or Yahoo?', acceptedAnswer: { '@type': 'Answer', text: 'A professional email address builds trust and credibility with customers and partners. Business email comes with better security, spam protection, larger storage, collaboration tools, and compliance controls.' } },
              { '@type': 'Question', name: 'What is Google Workspace and is it right for my team?', acceptedAnswer: { '@type': 'Answer', text: "Google Workspace is Google's cloud-based productivity suite for businesses including Gmail, Drive, Meet, Docs, Sheets, Slides, and Calendar — all ad-free and under your own domain." } },
              { '@type': 'Question', name: 'What is Microsoft 365 and how is it different from Google Workspace?', acceptedAnswer: { '@type': 'Answer', text: 'Microsoft 365 includes Outlook, Word, Excel, PowerPoint, Teams, and OneDrive. It is preferred by organisations in the Microsoft ecosystem. Google Workspace has a simpler interface; Microsoft 365 has deeper desktop app functionality.' } },
              // Application Software
              { '@type': 'Question', name: 'What is custom application software?', acceptedAnswer: { '@type': 'Answer', text: 'Custom application software is a program built specifically to meet the unique requirements of a business. Examples include inventory management systems, CRM platforms, booking engines, HR portals, and billing systems.' } },
              { '@type': 'Question', name: 'When should I choose custom software over ready-made software?', acceptedAnswer: { '@type': 'Answer', text: 'Choose custom software when your processes are unique, you need deep integration with existing systems, or you want to own the software outright with no recurring licence fees.' } },
              { '@type': 'Question', name: 'What is Agile methodology and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'Agile breaks a project into short cycles called sprints, delivering working software incrementally. It reduces risk, allows early course correction, and produces usable software faster.' } },
              // Digital Marketing
              { '@type': 'Question', name: 'What is SEO and how does it help my business?', acceptedAnswer: { '@type': 'Answer', text: 'SEO (Search Engine Optimisation) is the process of improving your website so it ranks higher on search engines for relevant keywords. Results typically build over 3–6 months.' } },
              { '@type': 'Question', name: 'What is AEO (Answer Engine Optimisation)?', acceptedAnswer: { '@type': 'Answer', text: "AEO structures your content so it is selected by search engines and AI assistants as the direct answer to a user's question — appearing in featured snippets and voice search results." } },
              { '@type': 'Question', name: 'What is GEO (Generative Engine Optimisation)?', acceptedAnswer: { '@type': 'Answer', text: 'GEO makes your brand visible within AI-generated answers from ChatGPT, Google Gemini, Claude, and Perplexity. It involves building authoritative content and earning credible mentions across the web.' } },
              { '@type': 'Question', name: 'What is the difference between SEO, AEO, and GEO?', acceptedAnswer: { '@type': 'Answer', text: 'SEO optimises for traditional search rankings. AEO optimises to appear in featured snippets and voice assistants. GEO optimises your brand presence in AI-generated conversational responses.' } },
              { '@type': 'Question', name: 'What is PPC and how is it different from SEO?', acceptedAnswer: { '@type': 'Answer', text: 'PPC lets you pay to appear at the top of search results immediately. SEO earns traffic organically over time. PPC stops when you stop paying; SEO delivers sustained compounding traffic.' } },
              // Website Maintenance
              { '@type': 'Question', name: 'Why does my website need ongoing maintenance?', acceptedAnswer: { '@type': 'Answer', text: 'Without maintenance, outdated software becomes a security vulnerability, performance degrades, and broken links accumulate. Regular maintenance keeps your site secure, fast, and functional.' } },
              { '@type': 'Question', name: 'How often should my website be backed up?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, your website should be backed up daily. For high-traffic or frequently updated sites, real-time or hourly backups are recommended.' } },
              { '@type': 'Question', name: 'What is website security monitoring and why is it important?', acceptedAnswer: { '@type': 'Answer', text: 'Website security monitoring continuously scans your site for malware, suspicious file changes, and brute-force login attempts. Early detection allows threats to be neutralised before significant damage occurs.' } },
              // Chatbot
              { '@type': 'Question', name: 'What is a website chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'A website chatbot is an automated conversational interface embedded into your website that interacts with visitors in real time — answering questions, capturing leads, processing bookings, and escalating queries to a human agent.' } },
              { '@type': 'Question', name: 'What is the difference between a rule-based chatbot and an AI chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'A rule-based chatbot follows a fixed script and can only respond to programmed options. An AI chatbot uses NLP to understand intent and context, responding to open-ended questions conversationally.' } },
              { '@type': 'Question', name: 'What are the main benefits of adding a chatbot to my website?', acceptedAnswer: { '@type': 'Answer', text: '24/7 availability, instant responses, automatic lead capture, reduced support load, better user experience, and cost efficiency — one chatbot can handle hundreds of simultaneous conversations.' } },
              { '@type': 'Question', name: 'Can the chatbot be connected to my CRM or business systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Modern chatbots integrate with CRM systems (Zoho CRM, HubSpot, Salesforce), helpdesk platforms (Freshdesk, Zendesk), and booking systems. Leads flow directly into your sales pipeline automatically.' } },
            ],
          }),
        }}
      />

      {/* ✅ BREADCRUMB SCHEMA */}
      <Script
        id="faq-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.g-netsolutions.com' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.g-netsolutions.com/faq' },
            ],
          }),
        }}
      />

      <main>
          <Hero />
        <FaqClient />
      </main>
    </>
  )
}

export default Page
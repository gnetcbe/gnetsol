import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'nice-select2/dist/css/nice-select2.css'
import '@/assets/scss/main.scss'

import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { Nunito_Sans, Outfit } from 'next/font/google'

/* =====================
   FONTS
===================== */

const Nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200','300','400','500','600','700','800','900'],
})

const Outfits = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','200','300','400','500','600','700','800','900'],
})

/* =====================
   G-NET SOLUTIONS SEO
===================== */

export const metadata: Metadata = {
  metadataBase: new URL('https://g-netsolutions.com'),

  title: {
    default: 'G-Net Solutions | Website & Digital Marketing Company in Coimbatore',
    template: '%s | G-Net Solutions',
  },

  description:
    'G-Net Solutions is a leading website development and digital marketing company in Coimbatore, offering SEO, web design, hosting, email services, and IT solutions.',

  keywords: [
    'G-Net Solutions',
    'Website Development Company in Coimbatore',
    'Digital Marketing Company in Coimbatore',
    'SEO Company in Coimbatore',
    'Web Hosting Services',
    'Email Hosting Services',
    'IT Solutions Company',
    'Website Design Company',
  ],

  authors: [{ name: 'G-Net Solutions' }],
  creator: 'G-Net Solutions',

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  openGraph: {
    type: 'website',
    siteName: 'G-Net Solutions',
    title: 'G-Net Solutions | Website & Digital Marketing Company in Coimbatore',
    description:
      'G-Net Solutions provides professional website development, SEO, digital marketing, hosting, and IT services in Coimbatore.',
    url: 'https://g-netsolutions.com',
    images: [
      {
        url: '/og-image.png', // optional (1200x630)
        width: 1200,
        height: 630,
        alt: 'G-Net Solutions Coimbatore',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'G-Net Solutions | Digital Marketing & Web Development',
    description:
      'Professional website development, SEO, and digital marketing services by G-Net Solutions, Coimbatore.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

/* =====================
   ROOT LAYOUT
===================== */
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5924HD42HZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5924HD42HZ');
        `}
      </Script>

      <body className={`${Nunito.className} ${Outfits.className}`}>
        <AppProvidersWrapper>
          {children}
        </AppProvidersWrapper>
      </body>
    </html>
  )
}

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
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

const Outfits = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

/* =====================
   G-NET SOLUTIONS SEO
===================== */

export const metadata: Metadata = {
  metadataBase: new URL('https://www.g-netsolutions.com'),
  
  verification: {
    google: "h7TLFkSSKDHBPjP2OkeIwneV-YMs3599lTHVx9UqZDI",
  },

  title: {
    default: 'Web Development Company in Coimbatore | G-Net Solutions',
    template: '%s | G-Net Solutions',
  },

  description:
    'G-Net Solutions is a leading web development company in Coimbatore offering website design, SEO, digital marketing, hosting, email services, and IT solutions across Tamil Nadu.',

  keywords: [
    'web development company in coimbatore',
    'website design company coimbatore',
    'digital marketing company coimbatore',
    'seo company coimbatore',
    'it company coimbatore',
    'web hosting coimbatore',
    'software development coimbatore',
    'G-Net Solutions',
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
    title: 'Web Development Company in Coimbatore | G-Net Solutions',
    description:
      'G-Net Solutions provides professional website development, SEO, digital marketing, hosting, and IT services in Coimbatore, Tamil Nadu.',
    url: 'https://www.g-netsolutions.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'G-Net Solutions - Web Development Company in Coimbatore',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company in Coimbatore | G-Net Solutions',
    description:
      'Professional website development, SEO, and digital marketing services by G-Net Solutions, Coimbatore.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
     canonical: 'https://www.g-netsolutions.com/',
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
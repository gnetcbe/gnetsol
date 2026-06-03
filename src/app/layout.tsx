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
   SCHEMA DATA
===================== */

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
      "url": "https://www.g-netsolutions.com",
      "logo": "https://g-netsolutions.com/logo.png",
      "image": "https://g-netsolutions.com/logo.png",
      "description": "G-Net Solutions is a leading web development company in Coimbatore offering website design, software development, SEO, and IT services across Tamil Nadu.",
      "telephone": "+91-9751959300",
      "email": "info@g-netsolutions.com",
      "foundingDate": "2001",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lakshmi Nagar, Thaneer Pandal, V.K. Road, Peelamedu",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.0168,
        "longitude": 76.9558
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/people/G-Net-Solutions-Coimbatore-Pvt-Ltd/100070495715164/",
        "https://www.linkedin.com/company/g-net-solutions-coimbatore-private-ltd/",
        "https://x.com/gnetcoimbatore",
        "https://www.instagram.com/"
      ],
      "hasMap": "https://maps.google.com/?q=G-Net+Solutions+Coimbatore",
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      },
      "priceRange": "$$"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.g-netsolutions.com/#website",
      "url": "https://www.g-netsolutions.com",
      "name": "G-Net Solutions",
      "publisher": {
        "@id": "https://www.g-netsolutions.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.g-netsolutions.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
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

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

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

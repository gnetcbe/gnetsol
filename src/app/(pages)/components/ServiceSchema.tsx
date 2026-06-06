"use client";

import { usePathname } from "next/navigation";

/* =====================
   SERVICE PAGE SCHEMAS
   Auto-loads the correct Service schema based on current URL pathname
===================== */

const serviceSchemas: Record<string, object> = {
  "/web-development": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "name": "Web Development Company in Coimbatore",
    "description":
      "Custom website design and development services in Coimbatore. Responsive, secure and high-performance websites for your business.",
    "url": "https://www.g-netsolutions.com/web-development",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
      "telephone": "+91-9751959300",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Website Design" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CMS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Applications" } },
      ],
    },
  },

  "/ecommerce-solutions": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-Commerce Development",
    "name": "E-Commerce Website Development in Coimbatore",
    "description":
      "Professional e-commerce website development with secure payment gateways, product management and mobile-friendly design for Coimbatore businesses.",
    "url": "https://www.g-netsolutions.com/ecommerce-solutions",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-Commerce Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Store Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment Gateway Integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopping Cart Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Catalogue Management" } },
      ],
    },
  },

  "/software-development": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "name": "Custom Software Development in Coimbatore",
    "description":
      "Scalable custom software, ERP, billing software and web application development for businesses in Coimbatore and Tamil Nadu.",
    "url": "https://www.g-netsolutions.com/software-development",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Software Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Billing Software" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Applications" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      ],
    },
  },

  "/web-hosting": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Hosting",
    "name": "Web Hosting & Domain Registration in Coimbatore",
    "description":
      "Reliable domain registration and fast, secure web hosting with full technical support for businesses in Coimbatore.",
    "url": "https://www.g-netsolutions.com/web-hosting",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hosting Plans",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shared Hosting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Hosting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VPS Hosting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated Servers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Hosting" } },
      ],
    },
  },

  "/email-services": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Email Hosting",
    "name": "Business Email Solutions in Coimbatore",
    "description":
      "Professional business email systems with seamless setup, integration and reliable support for companies in Coimbatore.",
    "url": "https://www.g-netsolutions.com/email-services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Email Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Email Setup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Migration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spam Protection" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Hosting Support" } },
      ],
    },
  },

  "/digital-marketing-seo": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing",
    "name": "Digital Marketing & SEO Services in Coimbatore",
    "description":
      "Result-driven SEO and digital marketing strategies to enhance visibility, engagement and brand growth for Coimbatore businesses.",
    "url": "https://www.g-netsolutions.com/digital-marketing-seo",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Search Engine Optimization (SEO)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads / PPC" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Marketing" } },
      ],
    },
  },

  "/website-maintenance": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Maintenance",
    "name": "Website Maintenance & Support in Coimbatore",
    "description":
      "Regular updates, security monitoring and performance optimization to keep your website running smoothly.",
    "url": "https://www.g-netsolutions.com/website-maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Maintenance Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Updates" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Updates" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bug Fixes & Support" } },
      ],
    },
  },

  "/chatbot": {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Chatbot Development",
    "name": "AI Chatbot Development in Coimbatore",
    "description":
      "Smart AI-powered chatbot solutions to automate customer support, lead generation and business communication for companies in Coimbatore.",
    "url": "https://www.g-netsolutions.com/chatbot",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.g-netsolutions.com/#business",
      "name": "G-Net Solutions",
    },
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chatbot Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Bot Integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Support Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation Chatbot" } },
      ],
    },
  },
};

export default function ServiceSchema() {
  const pathname = usePathname();
  const schema = serviceSchemas[pathname];

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

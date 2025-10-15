'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>PayYoYo - AI-Powered Autonomous Payment Platform | Save $720 Annually</title>
        <meta name="description" content="Toronto-based AI payment platform revolutionizing payments and saving users $720 annually. PayYoYo offers autonomous payment optimization with GPS-enhanced intelligence for Canadian users." />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        <meta name="keywords" content="AI payments, autonomous payments, gift card optimization, fintech, payment processing, AI finance, zero-waste payments, GPS payments" />
        <meta name="author" content="AydenAIT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payyoyo.com/" />
        <meta property="og:title" content="PayYoYo - AI-Powered Autonomous Payment Platform" />
        <meta property="og:description" content="Save $720 annually with AI-driven autonomous payments. Eliminate $364B in global gift card waste through intelligent optimization." />
        <meta property="og:image" content="https://payyoyo.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://payyoyo.com/" />
        <meta property="twitter:title" content="PayYoYo - AI-Powered Autonomous Payment Platform" />
        <meta property="twitter:description" content="Save $720 annually with AI-driven autonomous payments. Eliminate $364B in global gift card waste through intelligent optimization." />

        {/* Local SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://payyoyo.com/#organization",
                  "name": "PayYoYo",
                  "alternateName": "PayYoYo AI Payments",
                  "description": "AI-powered autonomous payment platform revolutionizing payments with machine learning optimization",
                  "url": "https://payyoyo.com",
                  "logo": "https://payyoyo.com/logo.png",
                  "founder": "AydenAIT Solutions",
                  "foundingDate": "2025",
                  "foundingLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Toronto",
                      "addressRegion": "ON",
                      "addressCountry": "CA"
                    }
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Toronto",
                    "addressRegion": "ON",
                    "addressCountry": "CA"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-416-XXX-XXXX",
                    "contactType": "customer service",
                    "availableLanguage": "English"
                  },
                  "sameAs": [
                    "https://twitter.com/payyoyoapp",
                    "https://linkedin.com/company/payyoyo"
                  ],
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "Canada"
                    },
                    {
                      "@type": "Place",
                      "name": "Toronto"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://payyoyo.com/#website",
                  "url": "https://payyoyo.com",
                  "name": "PayYoYo - AI-Powered Autonomous Payment Platform",
                  "description": "Save $720 annually with AI-driven autonomous payments. Eliminate $364B in global gift card waste.",
                  "publisher": {
                    "@id": "https://payyoyo.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://payyoyo.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://payyoyo.com/#webpage",
                  "url": "https://payyoyo.com",
                  "name": "PayYoYo - Toronto AI Payment Platform | Save $720 Annually",
                  "isPartOf": {
                    "@id": "https://payyoyo.com/#website"
                  },
                  "about": {
                    "@id": "https://payyoyo.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

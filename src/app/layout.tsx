'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CookieConsent } from '@/components/ui/cookie-consent'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually</title>
        <meta name="description" content="AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually, featuring automatic card selection, zero balance.archive, and merchant-favored redemption." />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        <meta name="keywords" content="AI payment wallet, GPS-triggered payments, gift card optimization, Apple Pay alternative, Google Pay competitor, merchant analytics, smart wallet, digital payments" />
        <meta name="author" content="AydenAIT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://payyoyo.com/" />
        <meta property="og:title" content="PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually" />
        <meta property="og:description" content="AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually with automatic card selection and merchant analytics." />
        <meta property="og:image" content="https://payyoyo.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://payyoyo.com/" />
        <meta property="twitter:title" content="PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually" />
        <meta property="twitter:description" content="AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually with automatic card selection and merchant analytics." />

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
                  "name": "PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually",
                  "description": "AI-powered gift card payment wallet like Apple Pay & Google Pay. GPS-triggered smart payments save $636 annually with automatic card selection and merchant analytics.",
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
                  "name": "PayYoYo - GPS-Enhanced AI Payment Wallet | Save $636 Annually",
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
        <CookieConsent />
      </body>
    </html>
  )
}

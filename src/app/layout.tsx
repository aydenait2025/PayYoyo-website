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
        <meta name="description" content="Revolutionize payments with PayYoYo's AI-driven autonomous platform. Save $720/year with intelligent gift card optimization, GPS-enhanced spending, and zero-waste technology. Join millions using AI-powered payments." />
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PayYoYo",
              "description": "AI-powered autonomous payment platform revolutionizing payments with machine learning optimization",
              "url": "https://payyoyo.com",
              "founder": "AydenAIT Solutions",
              "foundingDate": "2025",
              "sameAs": [
                "https://twitter.com/payyoyoapp",
                "https://linkedin.com/company/payyoyo"
              ],
              "offers": {
                "@type": "Service",
                "name": "Autonomous Payment Platform",
                "description": "AI-driven payment optimization saving users $720 annually"
              }
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

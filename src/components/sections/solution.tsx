'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import React from 'react';

// TypeScript interfaces for better type safety
interface Step {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}

// Constants extracted for reusability and maintainability
const STEPS: Step[] = [
  {
    step: '01',
    title: 'Smart Location Detection',
    description: 'When you arrive near a store, our app automatically detects where you are and identifies participating merchants.',
    icon: 'location',
  },
  {
    step: '02',
    title: 'Instant Card Analysis',
    description: 'Our AI quickly scans all your gift cards and calculates the best combination to maximize savings.',
    icon: 'ai',
  },
  {
    step: '03',
    title: 'One-Tap Payment',
    description: 'Review and confirm - that\'s it! Your payment is processed instantly with optimal card usage.',
    icon: 'payment',
  },
];

const FEATURES: Feature[] = [
  {
    title: 'Your Cards Are Safe',
    description: 'Bank-level security keeps your gift cards and payments completely protected.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Smart Card Selection',
    description: 'AI automatically finds the best gift cards to use for maximum savings.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Lightning Fast',
    description: 'Instant processing means no waiting at checkout - just seamless payments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600',
  },
];

// Animation constants to eliminate magic numbers
const ANIMATION_CONFIG = {
  duration: 0.8,
  delay: 0.3,
};

// Icon component to eliminate repetitive SVG code
interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "w-8 h-8" }) => {
  const iconComponents: Record<string, React.ReactElement> = {
    location: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    ai: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    payment: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    checkmark: (
      <svg className={`${className} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  };

  return iconComponents[name] || null;
};

export function Solution() {
  // Schema.org structured data for SoftwareApplication and Organization
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PayYoyo Wallet",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to use autonomous payment platform"
    },
    "description": "AI-powered autonomous payment platform that eliminates payment friction through GPS intelligence and machine learning optimization for gift card payments.",
    "url": "https://PayYoyo Wallet.com",
    "creator": {
      "@type": "Organization",
      "name": "PayYoyo Wallet",
      "url": "https://PayYoyo Wallet.com",
      "description": "Revolutionary AI-powered payment automation platform"
    },
    "featureList": [
      "GPS-triggered automation within 10 meters",
      "AI-powered gift card intelligence",
      "Zero user input required",
      "Bank-level security (PCI DSS Level 1)"
    ],
    "screenshot": "https://PayYoyo Wallet.com/images/screenshot.png"
  };

  // Breadcrumb navigation schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://PayYoyo Wallet.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solution",
        "item": "https://PayYoyo Wallet.com#solution"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        id="solution"
        className="py-20 bg-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="AI-Powered Autonomous Payment Solution" />
        <meta itemProp="description" content="Experience revolutionary payment automation with PayYoyo Wallet's GPS-triggered AI intelligence that analyzes and optimizes gift card payments automatically." />
        <meta itemProp="areaServed" content="Global" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Revolutionary Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Personal Gift Card Assistant
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                PayYoyo automatically finds the best gift cards to use when you're shopping. No more forgotten cards, no more manual searching - just seamless payments that save you money.
              </p>
            </motion.div>
          </header>

        {/* How It Works */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How PayYoyo Wallet Works</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Seamless automation in three simple steps</p>
          </motion.div>

          {/* Steps Flow */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {STEPS.map((step: Step, index: number) => (
              <React.Fragment key={step.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: ANIMATION_CONFIG.duration, delay: index * 0.2 }}
                  className="text-center bg-gray-50 rounded-xl p-8 min-w-[280px] relative"
                >
                  <div className="w-16 h-16 bg-[#1E40AF] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={step.icon} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
                {/* Arrow between steps on larger screens */}
                {index < STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: ANIMATION_CONFIG.duration, delay: index * 0.2 + 0.3 }}
                    className="hidden lg:block text-[#1E40AF] text-4xl font-light"
                  >
                    →
                  </motion.div>
                )}
                {/* Vertical arrow between steps on mobile */}
                {index < STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: ANIMATION_CONFIG.duration, delay: index * 0.2 + 0.3 }}
                    className="lg:hidden text-[#1E40AF] text-3xl font-light flex justify-center"
                  >
                    ↓
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Why PayYoyo */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why PayYoyo?</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* For Customers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center"
            >
              <div className="text-6xl mb-6">💡</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">For Customers</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Smarter gift cards. Never let a balance go to waste. PayYoyo helps you save money, time, and frustration with AI-powered gift card management. One wallet, every store — always the right card, at the right time.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600">
                  <strong className="text-blue-600">Customer Value:</strong> Avoid waste, save money/time, get discount gift cards
                </p>
              </div>
            </motion.div>

            {/* For Merchants */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">For Merchants</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                More sales, seamless redemption. With PayYoyo, retailers like Walmart, Best Buy, and Esso grow gift card sales through exclusive partnerships, effortless redemption, and happier, repeat customers.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600">
                  <strong className="text-green-600">Merchant Benefits:</strong> Increased redemption, faster checkout, better customer experience
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section
          className="mb-20"
          role="region"
          aria-labelledby="features-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration }}
          >
            <h3 id="features-heading" className="text-2xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature: Feature, index: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: ANIMATION_CONFIG.duration, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                    role="img"
                    aria-label={`${feature.title} icon`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Experience the Transformation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-2">From painful manual processes to effortless automation</p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">Based on industry benchmarks: average users spend 3-5 minutes per transaction manually, vs 30 seconds with AI automation (Statista Consumer Behavior Report 2024)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <h4 className="font-semibold text-gray-900">Manual Process</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Search through multiple gift cards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Manually check balances and expiration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Calculate optimal card combinations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  3-5 minutes per transaction
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#10B981] text-sm font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">PayYoyo Wallet Automation</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  GPS-triggered analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  AI-optimal card selection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  One-click confirmation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  Under 30 seconds per transaction
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* FAQ Schema for Featured Snippets */}
        <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <meta itemProp="name" content="PayYoyo Wallet AI Payment Automation FAQs" />
              <meta itemProp="description" content="Answers to common questions about AI-powered autonomous payments, GPS-triggered automation, and gift card optimization." />

              <div className="space-y-6 max-w-4xl mx-auto">
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" className="text-xl font-semibold text-gray-900 mb-3">
                    How does PayYoyo work?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600 leading-relaxed">
                      When you're near a store, PayYoyo automatically detects your location and scans all your gift cards. It instantly finds the best combination to use for your purchase, then you just tap to confirm. It's like having a personal assistant who never forgets your gift cards.
                    </div>
                  </div>
                </div>

                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" className="text-xl font-semibold text-gray-900 mb-3">
                    What makes PayYoyo different?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600 leading-relaxed">
                      Other payment apps require you to manually search and select gift cards. PayYoyo does everything automatically using AI and your phone's location. No more forgotten cards or manual searching - just seamless payments that save you money.
                    </div>
                  </div>
                </div>

                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" className="text-xl font-semibold text-gray-900 mb-3">
                    Is my information safe?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600 leading-relaxed">
                      Absolutely. PayYoyo uses the same security standards as major banks. Your gift card information is encrypted and protected at all times. We never store your actual card numbers, just secure tokens that keep your data completely safe.
                    </div>
                  </div>
                </div>

                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" className="text-xl font-semibold text-gray-900 mb-3">
                    When can I start using PayYoyo?
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text" className="text-gray-600 leading-relaxed">
                      We're currently testing with a small group of users and merchants. Join our waitlist to get early access as soon as we launch. We want to make sure everything works perfectly before making it available to everyone.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="px-8 py-4 text-lg">
            Experience Autonomous Payments
          </Button>
          <p className="mt-4 text-gray-600">Join our waiting list for early access</p>
        </motion.div>
      </div>
    </section>
    </>
  );
}

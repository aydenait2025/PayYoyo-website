'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of using PayYoyo',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-600',
    questions: [
      {
        question: 'How does PayYoyo work?',
        answer: 'When you\'re near a store, PayYoyo automatically detects your location and scans all your gift cards. It instantly finds the best combination to use for your purchase, then you just tap to confirm. It\'s like having a personal assistant who never forgets your gift cards.'
      },
      {
        question: 'What makes PayYoyo different from Google Pay and Apple Wallet?',
        answer: 'Unlike traditional digital wallets that just store your cards passively, PayYoyo actively manages them for you. We use AI and location intelligence to automatically suggest the best cards, prevent waste through smart alerts, and make payments seamless with one-tap transactions.'
      },
      {
        question: 'How do I add my gift cards to PayYoyo?',
        answer: 'Simply scan the barcode on your gift card or enter the card number manually. Our system securely stores your card information and automatically tracks balances and expiration dates.'
      },
      {
        question: 'When can I start using PayYoyo?',
        answer: 'We\'re currently testing with a small group of users and merchants. Join our waitlist to get early access as soon as we launch. We want to make sure everything works perfectly before making it available to everyone.'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    description: 'Your security is our top priority',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600',
    questions: [
      {
        question: 'Is my information safe?',
        answer: 'Absolutely. PayYoyo uses the same security standards as major banks. Your gift card information is encrypted and protected at all times. We never store your actual card numbers, just secure tokens that keep your data completely safe.'
      },
      {
        question: 'What security measures does PayYoyo use?',
        answer: 'We implement bank-level security including PCI DSS Level 1 compliance, end-to-end encryption, secure tokenization, and regular security audits. Your data is protected with the same standards used by major financial institutions.'
      },
      {
        question: 'Do you share my data with third parties?',
        answer: 'No, we never sell or share your personal information with third parties. We only use your data to provide you with better gift card management and may share anonymized usage statistics to improve our service.'
      }
    ]
  },
  {
    id: 'features',
    title: 'Features & Benefits',
    description: 'Discover what makes PayYoyo powerful',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-600',
    questions: [
      {
        question: 'How much money can I save with PayYoyo?',
        answer: 'The average user saves $636 annually by using gift cards they would otherwise forget about. This includes both using cards before they expire and getting better value from optimal card selection.'
      },
      {
        question: 'Does PayYoyo work with all gift cards?',
        answer: 'PayYoyo works with virtually all major gift cards including Starbucks, Walmart, Best Buy, Target, Amazon, and hundreds of other retailers. If we don\'t support a specific card yet, our team works quickly to add new merchants.'
      },
      {
        question: 'What if I have multiple cards for the same store?',
        answer: 'Perfect! PayYoyo automatically combines balances and suggests the best strategy - whether that\'s using the card expiring soonest first or the one with the best value proposition.'
      },
      {
        question: 'How accurate is the location detection?',
        answer: 'Our GPS and geofencing technology is accurate within 10 meters, ensuring you get notifications at the right time when entering stores where you have gift cards available.'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Solutions to common issues',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-orange-100 text-orange-600',
    questions: [
      {
        question: 'Why didn\'t I get a notification when entering a store?',
        answer: 'Make sure location services are enabled for PayYoyo in your phone settings, and that you have gift cards for that merchant. Notifications also require a stable internet connection.'
      },
      {
        question: 'My gift card balance seems incorrect. What should I do?',
        answer: 'Balances are updated automatically after each transaction, but there can sometimes be delays from merchant systems. Contact our support team if you notice persistent discrepancies.'
      },
      {
        question: 'Can I manually override PayYoyo\'s card recommendations?',
        answer: 'Yes! While our AI suggestions are optimized for maximum savings, you always have the final say. You can select different cards or payment methods before confirming any transaction.'
      }
    ]
  },
  {
    id: 'support',
    title: 'Contact & Support',
    description: 'Get help when you need it',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'bg-pink-100 text-pink-600',
    questions: [
      {
        question: 'How do I contact customer support?',
        answer: 'You can reach our support team through the in-app chat, email us at support@payyoyo.com, or use our contact form. We typically respond within 24 hours.'
      },
      {
        question: 'Do you offer refunds or cancellation?',
        answer: 'Since PayYoyo is a free service, there are no subscriptions to cancel. For any issues with specific transactions, please contact the merchant directly as PayYoyo only facilitates the payment process.'
      },
      {
        question: 'How do I provide feedback or suggest new features?',
        answer: 'We love hearing from our users! Send your feedback and feature requests to feedback@payyoyo.com or use the feedback form in our app. Your input helps shape the future of PayYoyo.'
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Help Center
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about PayYoYo's AI-powered gift card management system. Get answers to common questions and learn how to make the most of your smart wallet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color.replace('100', '500').replace('600', '500')} p-8 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center`}>
                        {category.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                        <p className="text-lg opacity-90">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-8">
                    <div className="grid gap-6">
                      {category.questions.map((faq, faqIndex) => (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                          className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you get the most out of PayYoyo and answer any questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:support@payyoyo.com"
                  className="bg-white text-[#1E40AF] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Email Support
                </motion.a>
                <motion.a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1E40AF] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 Contact Form
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with autonomous payments',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 1,000 transactions/month',
        'Basic AI optimization',
        'Standard security features',
        'Email support',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      recommended: false,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing merchants who need advanced payment automation',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 10,000 transactions/month',
        'Advanced AI optimization',
        'Priority security monitoring',
        '24/7 phone & email support',
        'Advanced analytics & reporting',
        'API access included',
        'Custom integrations',
        'Multi-location support'
      ],
      recommended: true,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large-scale merchants with custom requirements',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Unlimited transactions',
        'Custom AI model training',
        'Dedicated security team',
        '24/7 dedicated support',
        'Custom analytics & BI',
        'Full API access',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment option'
      ],
      recommended: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 30-day free trial that includes all Professional plan features. No credit card required. You\'ll get full access to our AI-powered payment optimization and can process up to 10,000 transactions during the trial period.'
    },
    {
      question: 'What happens after the trial ends?',
      answer: 'At the end of your trial, you can choose to continue with any of our paid plans. If you don't select a plan, your account will automatically convert to our Starter plan with the monthly pricing shown above.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle to avoid service interruptions.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), ACH transfers, and wire transfers for Enterprise customers. All payments are processed securely through our PCI DSS Level 1 compliant payment gateway.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. The pricing shown includes all setup costs, onboarding support, and initial configuration of your autonomous payment system.'
    },
    {
      question: 'Do you offer refunds?',
      answer: `We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with PayYoYo within the first 30 days, we'll provide a full refund, no questions asked.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-[#1E40AF]/10 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Saving $720 Annually <br />
              <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">
                With AI Payments
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs and start optimizing payments automatically.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-[#1E40AF] rounded-full transition-colors duration-300 focus:outline-none"
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingPeriod === 'yearly' ? 'transform translate-x-8' : 'transform translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Yearly
                <span className="ml-2 bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-medium">
                  Save 17%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.recommended
                    ? 'border-[#1E40AF] scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all duration-300`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#1E40AF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{plan.description}</p>

                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold text-gray-900">
                          ${billingPeriod === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice! / 12)}
                        </span>
                        <div className="text-left">
                          <div className="text-sm text-gray-600">per month</div>
                          {billingPeriod === 'yearly' && (
                            <div className="text-xs text-green-600 font-medium">
                              Billed ${plan.yearlyPrice}/year
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">
                        Custom Pricing
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      plan.recommended
                        ? 'bg-[#1E40AF] text-white hover:bg-[#1D4ED8] shadow-lg'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Calculate Your Savings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how much you can save annually with PayYoYo's AI-powered payment optimization.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$720</h3>
                <p className="text-gray-600">Average annual savings per user</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$364B</h3>
                <p className="text-gray-600">Global gift card waste eliminated</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99.99%</h3>
                <p className="text-gray-600">Platform uptime guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about getting started with PayYoYo.</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E40AF]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of merchants already saving $720 annually with AI-powered payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1E40AF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1E40AF] transition-colors duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

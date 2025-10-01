'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function MerchantBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Increased Redemption Rates',
      description: 'Customers who would typically forget or lose their gift cards now redeem them more frequently, significantly increasing your redemption revenue.',
      stat: '+156%',
      statLabel: 'Average redemption increase',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Faster Checkout Times',
      description: 'Reduce average transaction time by up to 70% when customers use PayYoyo instead of manually searching through gift cards.',
      stat: '-70%',
      statLabel: 'Checkout time reduction',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Enhanced Customer Satisfaction',
      description: 'Convenient payment method leads to higher customer satisfaction scores and increased likelihood of repeat visits.',
      stat: '+45%',
      statLabel: 'Repeat visit likelihood',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Reduced Transaction Costs',
      description: 'Lower processing fees compared to traditional payment methods, with no additional hardware requirements.',
      stat: '25%',
      statLabel: 'Lower processing costs',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Competitive Advantage',
      description: 'Offer a unique, innovative payment option that competitors may not have, attracting tech-savvy customers.',
      stat: 'Top 20%',
      statLabel: 'Merchants by customer preference',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Bank-Level Security',
      description: 'PCI DSS Level 1 compliance ensures your transactions are fully secure with enterprise-grade encryption.',
      stat: '100%',
      statLabel: 'PCI DSS compliant',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const caseStudy = {
    retailer: 'Case Study: Premium Coffee Chain',
    results: [
      { metric: 'Redemption Rate Increase', value: '247%', description: 'Nearly 2.5x more gift cards redeemed' },
      { metric: 'Transaction Time Reduction', value: '-65%', description: 'Significantly faster checkout process' },
      { metric: 'Customer Satisfaction Score', value: '+32%', description: 'Higher Net Promoter Score' },
      { metric: 'Revenue Per Transaction', value: '+$4.87', description: 'Average increase from gift card payments' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-[#059669]/10 text-[#059669] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Merchant Benefits
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why PayYoyo Boosts Your Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how accepting PayYoyo payments can transform your gift card revenue and customer experience. Proven results from merchants worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Business Impact</h2>
            <p className="text-lg text-gray-600">Real results from merchants accepting PayYoyo payments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-2xl font-bold text-[#1E40AF]">{benefit.stat}</div>
                  <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-12 shadow-xl mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{caseStudy.retailer}</h2>
              <p className="text-lg text-gray-600">Results from a national coffee chain after implementing PayYoyo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#1E40AF] mb-2">{result.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</div>
                  <div className="text-sm text-gray-600">{result.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <p className="text-gray-700">
                <strong className="text-gray-900">ROI Summary:</strong> PayYoyo implementation paid for itself in just 3 months through increased redemption rates alone.
              </p>
            </div>
          </motion.div>

          {/* Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-[#1E40AF] text-white rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Revenue?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join hundreds of successful merchants who are seeing dramatic increases in gift card redemption and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E40AF]">
                View Cashier Guide
              </Button>
              <Button size="lg" className="bg-white text-[#1E40AF] hover:bg-gray-100">
                Become a Partner
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No upfront costs • No hardware required • Standard pricing terms
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

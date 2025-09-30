'use client';

import { motion } from 'framer-motion';

export function Market() {
  const marketStats = [
    {
      value: '$364B',
      label: 'Global Gift Card Market',
      sublabel: 'Total Addressable Market',
    },
    {
      value: '$127B',
      label: 'US & EU Markets',
      sublabel: 'Serviceable Addressable Market',
    },
    {
      value: '$21B',
      label: 'Available Opportunity',
      sublabel: '3-Year Target Market',
    },
    {
      value: '$15.2B',
      label: 'Annual Waste',
      sublabel: 'Paybubu’' + 's Impact Target',
    },
  ];

  const segments = [
    {
      title: 'Urban Professionals',
      size: '75M',
      description: 'Tech-savvy 25-45 year olds with $75K+ income',
      opportunity: '$240/year average savings',
      icon: '🏙️',
    },
    {
      title: 'Family Households',
      size: '43M',
      description: 'Dual-income families managing shared gift cards',
      opportunity: '$360/year household savings',
      icon: '🏡',
    },
    {
      title: 'B2B Corporate',
      size: '85K',
      description: 'Companies distributing gift cards as incentives',
      opportunity: '$1.2M annual corporate savings',
      icon: '🏢',
    },
  ];

  const growth = [
    {
      year: '2025',
      mrr: '$45',
      users: '500K',
      revenue: '$27M',
      description: 'Beta launch and initial traction',
    },
    {
      year: '2026',
      mrr: '$78',
      users: '2.1M',
      revenue: '$120M',
      description: 'Scale operations and international expansion',
    },
    {
      year: '2027',
      mrr: '$150',
      users: '5.5M',
      revenue: '$330M',
      description: 'Market leadership and ecosystem dominance',
    },
    {
      year: '2030',
      mrr: '$450',
      users: '15M+',
      revenue: '$1.2B',
      description: 'Global autonomous payments standard',
    },
  ];

  return (
    <section id="market" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Market Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A $364B Market Waiting for Disruption
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re targeting the $15.2B annual gift card waste problem with a solution that could redefine payments globally.
            </p>
          </motion.div>
        </div>

        {/* Market Size Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {marketStats.map((stat, index) => (
            <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-[#1E40AF] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Target Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Target Segments & Economics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {segment.icon === '🏙️' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                    {segment.icon === '🏡' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                    {segment.icon === '🏢' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1E40AF] mb-2">{segment.size}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{segment.title}</h4>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <div className="bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {segment.opportunity} savings potential
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Revenue Growth Trajectory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growth.map((year, index) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-2xl font-bold text-[#1E40AF] mb-4">{year.year}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{year.mrr}</div>
                    <div className="text-sm text-gray-600">Monthly Recurring Revenue</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-900">{year.users}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-[#10B981]">{year.revenue}</div>
                    <div className="text-sm text-gray-600">Annual Revenue</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">{year.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Moat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-[#1E40AF] to-[#3730A3] rounded-2xl p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Sustainable Competitive Advantages</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Proprietary AI technology and payment intelligence create barriers no competitor can easily overcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AI First Mover',
                description: '5 years of payment AI development advantage',
                icon: '🤖',
              },
              {
                title: 'Network Effects',
                description: 'Merchant and user ecosystems grow exponentially',
                icon: '🔄',
              },
              {
                title: 'Regulatory Compliance',
                description: 'PCI DSS Level 1 certification completed',
                icon: '🛡️',
              },
              {
                title: 'Technical Scalability',
                description: 'Sub-200ms payment processing globally',
                icon: '⚡',
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
              <div className="w-16 h-16 bg-white/20 text-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {advantage.icon === '🤖' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                  {advantage.icon === '🔄' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                  {advantage.icon === '🛡️' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                  {advantage.icon === '⚡' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                </svg>
              </div>
                <h4 className="text-lg font-semibold mb-2">{advantage.title}</h4>
                <p className="text-sm opacity-90">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

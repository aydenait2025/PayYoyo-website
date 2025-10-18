'use client';

import { motion } from 'framer-motion';

export function Problem() {
  const problems = [
    {
      title: '$15.2B Annual Waste',
      description: '51% of gift cards go unspent - Americans lose $53/month, totaling $15.2 billion wasted annually.',
      stat: '$15.2B',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Manual Pain Points',
      description: 'Users spend 3+ minutes per transaction manually checking balances, selecting cards, and calculating optimal combinations.',
      stat: '3-5 min',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-orange-100 text-orange-600',
    },
    {
      title: 'Forgotten Cards',
      description: '22% of Americans have forgotten gift cards, leading to lost value and merchant opportunity costs.',
      stat: '22%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.172 5.172a4 4 0 015.656 0L21 12 12 21 3.172 17.828a4 4 0 010-5.656l2.828-2.828a4 4 0 00-.001-5.655l-2.829-2.829z" />
        </svg>
      ),
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Static Wallet Limitations',
      description: 'Google Pay & Apple Wallet are passive containers - no location awareness, no smart recommendations, no expiration alerts.',
      stat: 'Passive',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <section id="problem" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Hidden Gift Card Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most people have gift cards they&apos;ve completely forgotten about. The average person wastes $53 every month on unused gift cards - that&apos;s money just sitting there, unused.
            </p>
          </motion.div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${problem.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                {problem.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">{problem.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Current Wallets Fall Short */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Google Pay & Apple Wallet Aren&apos;t Enough</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Current digital wallets are just static containers - they store your cards but don&apos;t actively help you use them optimally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <h4 className="font-semibold text-gray-900">Current Wallet Limitations</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Passive:</strong> Manual search required</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>No Location:</strong> No contextual recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>No AI:</strong> No optimal card suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>No Alerts:</strong> No expiration warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>No Prevention:</strong> No waste prevention</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#10B981] text-sm font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">PayYoyo Smart Manager</h4>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Proactive:</strong> Auto-suggests when near stores</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Location-Aware:</strong> GPS-triggered recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>AI-Powered:</strong> Analyzes all factors for best card</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Smart Alerts:</strong> Weekly/daily expiration warnings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Waste Prevention:</strong> Consolidation & transfer suggestions</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

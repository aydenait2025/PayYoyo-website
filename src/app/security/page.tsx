'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function SecurityPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Enterprise Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bank-Level Security <br />
              <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">
                For AI Payments
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              PayYoYo maintains the highest security standards in fintech, with PCI DSS Level 1 compliance and enterprise-grade encryption protecting millions of autonomous payment transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industry-Leading Security Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our comprehensive security framework ensures your financial data is protected at every level.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'PCI DSS Level 1',
                description: 'Certified compliance with the highest level of Payment Card Industry Data Security Standards, the same standards used by major banks.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'End-to-End Encryption',
                description: 'AES-256 encryption protects all financial data in transit and at rest, ensuring complete confidentiality of your payment information.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                title: 'AI Fraud Detection',
                description: 'Advanced machine learning algorithms continuously monitor transactions for fraudulent activity, providing real-time protection.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: '24/7 Monitoring',
                description: 'Round-the-clock security monitoring with automated alerts and immediate response to potential threats by our dedicated security team.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Privacy-First Design',
                description: 'Zero-knowledge architecture ensures we never store sensitive payment information, maintaining your complete financial privacy.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Compliance Audited',
                description: 'Regular third-party security audits and penetration testing ensure our systems meet the highest standards of financial security.'
              }
            ].map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mb-6">
                  {certification.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{certification.title}</h3>
                <p className="text-gray-600 leading-relaxed">{certification.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Security Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multi-layered protection ensuring every transaction is secure from start to finish.</p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                phase: 'Data Collection',
                measures: [
                  'Tokenized payment processing',
                  'Encrypted data transmission',
                  'Secure API gateways'
                ]
              },
              {
                phase: 'AI Processing',
                measures: [
                  'Isolated AI environments',
                  'Encrypted model training data',
                  'Privacy-preserving machine learning'
                ]
              },
              {
                phase: 'Transaction Execution',
                measures: [
                  'Real-time fraud detection',
                  'Multi-factor authentication',
                  'Automated transaction monitoring'
                ]
              },
              {
                phase: 'Data Storage',
                measures: [
                  'Encrypted database storage',
                  'Regular security audits',
                  'Data retention policies'
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.phase}</h3>
                  <ul className="space-y-3">
                    {phase.measures.map((measure, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`w-32 h-32 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
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
              Security You Can Trust
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience peace of mind with bank-level security for your autonomous payments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1E40AF] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Start Secure Payments
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

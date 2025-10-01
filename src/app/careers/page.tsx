'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const jobs = [
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Product',
      shortDescription: 'Lead product strategy for AI-powered autonomous payment features...',
      fullDescription: 'Lead product strategy for AI-powered autonomous payment features. Define requirements for machine learning models, build product roadmaps, and work with engineering teams to implement AI features that drive user engagement and system intelligence across our payment platform.',
      requirements: [
        '5+ years product management experience',
        'Strong technical background in AI/ML',
        'Experience with data-driven product development',
        'Understanding of fintech and payment systems',
        'MBA or equivalent product leadership experience'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Marketing',
      shortDescription: 'Drive marketing strategies to accelerate PayYoyo\'s growth in the autonomous payment space...',
      fullDescription: 'Drive comprehensive marketing strategies to accelerate PayYoyo\'s growth in the autonomous payment space. Develop brand awareness campaigns, content marketing, and go-to-market strategies for our zero-waste payment platform. Build marketing funnels that convert awareness into platform adoption.',
      requirements: [
        '5+ years marketing experience in fintech/B2B SaaS',
        'Digital marketing and growth marketing expertise',
        'Content creation and brand strategy experience',
        'Marketing automation and analytics skills',
        'Experience with fintech or financial services marketing'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Sales',
      shortDescription: 'Lead sales team to capture the $364B global gift card market through strategic partnerships...',
      fullDescription: 'Lead high-performing sales team to capture the $364B global gift card market through strategic partnerships. Build enterprise sales pipeline, negotiate complex deals with financial institutions and merchants, and drive revenue growth for our autonomous payment platform.',
      requirements: [
        '7+ years enterprise sales experience',
        'Track record of closing large fintech/B2B deals',
        'Strong relationship building and negotiation skills',
        'Experience selling to financial institutions',
        'MBA or equivalent business leadership experience'
      ]
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Build beautiful, responsive interfaces for our autonomous payment platform...',
      fullDescription: 'Build beautiful, responsive interfaces for our autonomous payment platform. Work with React, TypeScript, and cutting-edge fintech user experiences. Create intuitive dashboards, payment flows, and mobile-first designs that serve millions of users in our zero-waste payment ecosystem.',
      requirements: [
        '5+ years React/Next.js experience',
        'Expert in TypeScript and modern CSS',
        'Experience with fintech or payment platforms',
        'Strong design system and UX skills',
        'Passion for user-centered design'
      ]
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Build scalable backend systems for high-performance payment processing...',
      fullDescription: 'Build scalable backend systems for high-performance payment processing. Design APIs, databases, and microservices that handle billions in transactions annually. Work with modern cloud technologies to ensure 99.99% uptime for our autonomous payment platform serving millions of users.',
      requirements: [
        '6+ years backend development experience',
        'Expert in Node.js, Python, or Go',
        'Experience with microservices architecture',
        'Strong database design skills (PostgreSQL, Redis)',
        'Knowledge of payment systems and PCI compliance'
      ]
    },
    {
      id: 'mobile-developer',
      title: 'Mobile Developer (React Native)',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Engineering',
      shortDescription: 'Develop cross-platform mobile apps for our autonomous payment system...',
      fullDescription: 'Develop cross-platform mobile apps for our autonomous payment system using React Native. Create seamless mobile experiences that integrate with our AI-powered payment optimization engine. Focus on performance, security, and user experience for iOS and Android platforms serving millions of users.',
      requirements: [
        '4+ years React Native or Flutter experience',
        'Strong JavaScript/TypeScript skills',
        'Experience with mobile app deployment',
        'Understanding of mobile security best practices',
        'Portfolio of published mobile applications'
      ]
    },
    {
      id: 'investment-relations-manager',
      title: 'Investment Relations Manager',
      location: 'Toronto',
      type: 'Full-time',
      department: 'Investor Relations',
      shortDescription: 'Drive our Series A investment process and manage investor relationships...',
      fullDescription: 'Drive our Series A investment process and manage investor relationships. Prepare pitch materials, financial models, and investor updates. Connect with institutional investors and venture capital firms throughout Canada and internationally. Be the voice of PayYoyo in the investment community.',
      requirements: [
        '3+ years investment banking or VC experience',
        'Strong financial modeling and analysis skills',
        'Excellent communication and presentation abilities',
        'Experience with early-stage startups',
        'Network in fintech investment community'
      ]
    },
    {
      id: 'business-development-manager',
      title: 'Business Development Manager',
      location: 'Remote / Toronto',
      type: 'Full-time',
      department: 'Business Development',
      shortDescription: 'Drive partnerships and business growth in the payments ecosystem...',
      fullDescription: 'Drive strategic partnerships and business growth in the payments ecosystem. Identify new market opportunities, negotiate partnership deals with merchants and financial institutions, and expand our autonomous payment platform. Build relationships that accelerate PayYoyo\'s path to capturing the $364B global gift card market.',
      requirements: [
        '5+ years business development experience',
        'Experience in fintech or payments industry',
        'Strong relationship building and negotiation skills',
        'Track record of driving partnership deals',
        'Understanding of financial services and merchant ecosystems'
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.fullDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0l-4 6m-6 0l4-6m6 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6" />
              </svg>
              Join Our Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build the Future of <br />
              <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">
                PayYoYo
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing how the world handles payments through AI-powered, zero-waste technology. Join our talented team and help shape the future of fintech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Join PayYoyo?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Cutting-Edge Technology',
                description: 'Work with proprietary AI algorithms, GPS-enhanced intelligence, and the latest fintech innovations.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Competitive Compensation',
                description: 'Excellent salary, meaningful equity, and comprehensive benefits package for all team members.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Mission-Driven Culture',
                description: 'Join a passionate team solving real problems and making a tangible impact on millions of lives.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-8 hover:shadow-lg rounded-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 mb-8">We&apos;re looking for exceptional talent to join our mission</p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-[#1E40AF] transition-all duration-200"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{job.location}</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{job.type}</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">{job.department}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{job.shortDescription}</p>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#1E40AF] rounded-full mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => window.open(`/careers/${job.id}`, '_blank')}
                    className="text-[#1E40AF] hover:text-[#1D4ED8] font-medium text-sm hover:underline"
                  >
                    Read more...
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg text-gray-600">No positions found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-[#1E40AF] hover:text-[#1D4ED8] font-medium"
              >
                Clear search
              </button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16 bg-[#1E40AF] text-white rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold mb-6">Don&apos;t See Your Position?</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll reach out if there&apos;s a match for your skills.
            </p>
            <Button
              size="lg"
              className="px-8 py-4 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold"
              onClick={() => window.open('mailto:careers@PayYoyoWallet.com?subject=General%20Application', '_blank')}
            >
              Send Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

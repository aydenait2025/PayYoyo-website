'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// TypeScript interfaces for better type safety
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string | null;
}

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

// Constants moved outside component to avoid recreation on re-renders
const TEAM_MEMBERS = [
  {
    name: 'Ayden AI',
    role: 'Founder & CEO',
    description: 'AI expert with 10+ years in fintech innovation',
    image: null,
  },
  // Add more team members as needed
];

const COMPANY_VALUES: CompanyValue[] = [
  {
    title: 'Customer-Centric Innovation',
    description: 'Every feature we build starts with solving real customer pain points.',
    icon: '👥'
  },
  {
    title: 'Merchant Partnership',
    description: 'We believe in win-win relationships that grow everyone\'s business.',
    icon: '🤝'
  },
  {
    title: 'AI-First Approach',
    description: 'Leveraging artificial intelligence to create smarter financial solutions.',
    icon: '🤖'
  },
  {
    title: 'Gift Card Revolution',
    description: 'Transforming how $400B+ in gift cards are managed globally.',
    icon: '💎'
  }
];

// Shared animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-[#1E40AF]/10 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              About PayYoyo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solving the $15.2B Annual Gift Card Waste Crisis
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              PayYoyo was founded to eliminate gift card waste through AI-powered autonomous payments.
              We're building the future of gift card management for both consumers and merchants worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#1E40AF] text-white rounded-xl flex items-center justify-center mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To eliminate $15.2 billion in annual gift card waste by creating the world's
                most intelligent gift card management platform. We empower customers to save money
                and time while helping merchants increase redemption rates through better technology.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-[#10B981] text-white rounded-xl flex items-center justify-center mb-6">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where no gift card goes unused. Through AI-powered autonomous payments,
                we create a seamless ecosystem where customers save money and merchants increase
                sales through strategic partnerships with major retailers like Walmart, Best Buy, and Esso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Make Money</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PayYoyo operates on a sustainable partnership model that benefits all stakeholders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* Affiliate Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Gift Card Issuer Partnerships</h4>
              <p className="text-gray-600 mb-4">
                We earn affiliate commissions when users discover and purchase gift cards from partnered retailers.
                This creates a virtuous cycle where better user experience drives more sales.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-2">2-5% Commission</div>
              <div className="text-sm text-gray-500">Per gift card purchase</div>
            </motion.div>

            {/* Merchant Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Merchant Solutions</h4>
              <p className="text-gray-600 mb-4">
                Premium integrations and analytics for major retailers. We help merchants reclaim
                $15.2B in annual card waste while providing them with valuable customer insights.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-2">$49/month</div>
              <div className="text-sm text-gray-500">Premium merchant dashboard</div>
            </motion.div>

            {/* Free for Customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Free for Customers</h4>
              <p className="text-gray-600 mb-4">
                Customers use PayYoyo completely free. This builds trust and drives organic
                growth through word-of-mouth and merchant partnerships driving user acquisition.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-2">$0</div>
              <div className="text-sm text-gray-500">Forever free for users</div>
            </motion.div>
          </div>

          {/* Realistic Revenue Growth Trajectory (2027-2030) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Realistic Revenue Growth Trajectory (2027-2030)</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">$85K</div>
                <div className="text-green-200 text-sm">ARR 2027</div>
                <div className="text-green-300 text-xs">Beta revenue</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-1">$425K</div>
                <div className="text-blue-200 text-sm">ARR 2028</div>
                <div className="text-blue-300 text-xs">Early traction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-1">$1.2M</div>
                <div className="text-purple-200 text-sm">ARR 2029</div>
                <div className="text-purple-300 text-xs">Product-market fit</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-1">$3.1M</div>
                <div className="text-yellow-200 text-sm">ARR 2030</div>
                <div className="text-yellow-300 text-xs">Scale milestone</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-sm">
                <strong>Realistic timeline:</strong> Product development 2026 → Beta launch Q2 2027 →
                Merchant partnerships drive growth. No revenue before product launch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Passionate about solving real financial problems</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1E40AF] to-[#3730A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join the Gift Card Revolution?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a customer wanting to save money or a merchant looking to boost sales,
              PayYoyo creates win-win opportunities for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E40AF]">
                View Merchant Benefits
              </Button>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Start Saving Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

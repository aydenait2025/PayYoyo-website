'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">PayYoYo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is to revolutionize personal finance through AI-powered autonomous payments, making saving effortless and maximizing every dollar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoYo was founded in 2025 by AydenAIT Solutions with a vision to eliminate the friction and waste associated with traditional payment methods, especially gift cards. We saw a world where consumers were constantly losing value due to forgotten cards, expired balances, and missed discounts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Leveraging cutting-edge AI and GPS technology, we set out to create a smart wallet that not only stores your payment methods but actively manages them to ensure optimal utilization and maximum savings. Our journey is driven by a passion for empowering individuals to spend smarter and live richer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://via.placeholder.com/600x400" // Placeholder image
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: 'Dr. Alex Chen',
                title: 'CEO & Co-founder',
                image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Alex',
                bio: 'A visionary in AI and financial technology, Dr. Chen leads PayYoYo with a decade of experience in developing intelligent systems for consumer finance. His passion lies in empowering users to achieve financial autonomy.',
              },
              {
                name: 'Maria Rodriguez',
                title: 'CTO & Co-founder',
                image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Maria',
                bio: 'Maria is a seasoned software architect with expertise in machine learning, cybersecurity, and scalable cloud infrastructure. She is the engineering force behind PayYoYo\'s robust and secure payment platform.',
              },
              {
                name: 'David Lee',
                title: 'Head of Product',
                image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=David',
                bio: 'With a strong background in user experience and product strategy, David ensures PayYoYo\'s features are intuitive, impactful, and align perfectly with user needs. He champions a user-first approach to innovation.',
              },
              {
                name: 'Sarah Kim',
                title: 'Chief Marketing Officer',
                image: 'https://api.dicebear.com/8.x/adventurer/svg?seed=Sarah',
                bio: 'Sarah is a dynamic marketing leader with a proven track record in launching successful tech products. She is responsible for PayYoYo\'s brand strategy and connecting our innovative solution with a global audience.',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

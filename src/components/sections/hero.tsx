'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { SignupForm } from '@/components/ui/signup-form';
import { VideoDemo } from '@/components/ui/video-demo';

export function Hero() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleGetEarlyAccess = () => {
    setShowSignupModal(true);
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const closeModals = () => {
    setShowSignupModal(false);
    setShowVideoModal(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The World&apos;s First
              <span className="block text-[#1E40AF]">Truly Autonomous</span>
              Payment System
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              PayYoyo helps customers avoid waste, save money and time with smart gift card management. For merchants like Walmart, Best Buy, and Esso, we drive more gift card sales through exclusive partnerships and seamless redemption.
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-[#10B981] text-white p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">$720</p>
                  <p className="text-sm text-gray-600">Annual savings per user</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="px-8 py-4 text-lg" onClick={handleGetEarlyAccess}>
              Join 10,000+ Users on Our Waitlist
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg" onClick={handleWatchDemo}>
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            {/* Security & Trust Badges */}
            <div className="flex justify-center items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>SOC 2 Type II</span>
              </div>
            </div>

            {/* Partner Logos */}
            <p className="text-gray-500 text-sm mb-4">Trusted by leading financial institutions</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-16 h-8 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded">
                VISA
              </div>
              <div className="w-20 h-8 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded">
                MasterCard
              </div>
              <div className="w-24 h-8 bg-blue-800 text-white text-xs font-bold flex items-center justify-center rounded">
                AMEX
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#1E40AF] rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Modals */}
      <Modal isOpen={showSignupModal} onClose={closeModals}>
        <SignupForm onClose={closeModals} />
      </Modal>

      <Modal isOpen={showVideoModal} onClose={closeModals}>
        <VideoDemo onClose={closeModals} />
      </Modal>
    </section>
  );
}

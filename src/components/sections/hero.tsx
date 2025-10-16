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
    <section className="relative py-32 flex justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Never Lose Gift Card Value
              <span className="block text-[#1E40AF]">Again</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our smart gift card wallet automatically pops up when you're near a store, shows you what cards you have available, and saves you money by using the best one first.
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
                  <p className="text-2xl font-bold text-gray-900">$636</p>
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-[#1E40AF]/50" onClick={handleGetEarlyAccess}>
                Start Saving $636 Today →
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF]" onClick={handleWatchDemo}>
                Watch 60-Second Demo
              </Button>
            </motion.div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your Cards Are Safe</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Encrypted & Protected</span>
              </div>
            </div>


          </motion.div>
        </div>

          {/* Right column - Hero mockup image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main mockup image placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  {/* Phone mockup */}
                  <div className="bg-gray-900 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="text-sm font-medium">PayYoYo</span>
                      </div>
                      <span className="text-xs opacity-70">9:41</span>
                    </div>

                    {/* Location indicator */}
                    <div className="bg-[#1E40AF]/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <svg className="w-4 h-4 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Starbucks detected 1.2km away</span>
                      </div>
                    </div>

                    {/* Gift card suggestions */}
                    <div className="space-y-3">
                      <div className="bg-green-600 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs">Use Starbucks Cards</p>
                            <p className="text-green-100 text-xs">$25.50 balance • Expires Mar 2026</p>
                          </div>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">$25</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-3 opacity-60">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs">Credit Card (Visa)</p>
                            <p className="text-gray-300 text-xs">****4532 • Exp 08/26</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-gray-300 text-xs">Visa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment button */}
                    <div className="mt-6">
                      <button className="w-full bg-[#1E40AF] text-white py-3 rounded-lg font-medium">
                        Pay $11.75
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-2">
                        Saves you $2.85 vs credit card alone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Card Found!</p>
                    <p className="text-xs text-gray-500">25% discount applied</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-900">GPS Active</p>
                    <p className="text-xs text-gray-500">Location detected</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>



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

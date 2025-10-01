'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CashierGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PayYoyo Cashier Quick Guide
            </h1>
            <h2 className="text-xl md:text-2xl text-[#1E40AF] font-semibold mb-8">
              The World&#39;s First Autonomous Gift Card Wallet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything merchants and cashiers need to know about accepting PayYoyo payments at the point of sale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What is PayYoyo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gray-50 rounded-xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. What is PayYoyo?</h3>
            <p className="text-gray-600 leading-relaxed">
              PayYoyo lets customers pay with their digital gift cards using one code on their phone. The app automatically picks the correct gift card — no extra steps needed.
            </p>
            <div className="mt-6 bg-white rounded-lg p-4 border-l-4 border-[#1E40AF]">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">For Merchants:</strong> No additional equipment needed. Works with your existing POS system and gift card scanner.
              </p>
            </div>
          </motion.div>

          {/* How to Accept Payments - Modern Apple Pay Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              How to Accept PayYoyo Payments
            </h3>

            {/* Apple Pay Style Horizontal Flow */}
            <div className="relative max-w-6xl mx-auto">

              {/* Connection Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200"></div>

              {/* Steps Container */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col items-center max-w-[200px]"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">Open App</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Customer opens PayYoyo Wallet app → payment code generates automatically.
                    </div>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="md:hidden mt-6 mb-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Desktop Arrow 1 */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  className="hidden md:block"
                >
                  <svg className="w-12 h-12 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-center max-w-[200px]"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">📱</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">Show QR</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Customer shows QR/barcode on phone screen.
                    </div>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="md:hidden mt-6 mb-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Desktop Arrow 2 */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  className="hidden md:block"
                >
                  <svg className="w-12 h-12 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center max-w-[200px]"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">📷</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">Scan</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Cashier scans the code with the POS scanner.
                    </div>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="md:hidden mt-6 mb-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Desktop Arrow 3 */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                  className="hidden md:block"
                >
                  <svg className="w-12 h-12 text-purple-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center max-w-[200px]"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-3xl">✅</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 mb-2">Approval</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      POS shows instant approval or decline.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 italic">
                Simple. Fast. Secure. Compatible with all major POS systems.
              </p>
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    💡
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Screen Scanning Tips</div>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                      <li>Hold the phone steady</li>
                      <li>Increase screen brightness</li>
                      <li>Clean the screen if needed</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ⏰
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Code Expiration</div>
                    <div className="text-sm text-gray-700">Each PayYoyo code is unique and expires after 5 minutes for security</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    🔧
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Fallback Option</div>
                    <div className="text-sm text-gray-700">If scanning fails, customer can tap &quot;Show Gift Card Number&quot; and enter manually</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1E40AF] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    📄
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Receipts & Refunds</div>
                    <div className="text-sm text-gray-700">Process exactly like a normal gift card transaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>



          {/* Support Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions or Need Help?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our merchant success team is here to help you get started and answer any questions about PayYoyo payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Merchant Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/payyoyo-cashier-guide.pdf';
                  link.download = 'PayYoyo-Cashier-Guide.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download PDF Guide
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

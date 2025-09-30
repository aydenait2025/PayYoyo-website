'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { SignupForm } from '@/components/ui/signup-form';

export function Contact() {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const closeModal = () => {
    setShowSignupModal(false);
  };

  const handleScheduleMeeting = () => {
    // Open Calendly scheduling service
    const calendlyUrl = 'https://calendly.com/aydenait2025';

    // Alternative: Use Calendly's popup instead of new tab
    // if (window.Calendly) {
    //   window.Calendly.initPopupWidget({ url: calendlyUrl });
    // } else {
    //   window.open(calendlyUrl, '_blank');
    // }

    window.open(calendlyUrl, '_blank');
  };

  const handleDownloadDeck = () => {
    // Open the investment deck
    window.open('/investment-deck-outline.html', '_blank');
  };

  const handleEmailUs = () => {
    const email = 'investors@PayYoyoWallet.com';
    const subject = 'Investment Inquiry - Investors Deck Request';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Try using window.open first, then fallback to window.location.href
    try {
      window.open(mailtoLink, '_self');
    } catch (error) {
      // Fallback for some browsers that block window.open with mailto
      window.location.href = mailtoLink;
    }
  };

  const handleScheduleInvestmentMeeting = () => {
    setShowSignupModal(true);
  };

  const handleDownloadPitchDeck = () => {
    handleDownloadDeck(); // Reuse the same logic
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-[#1E40AF]/10 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Ready to Invest?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the Future of Payments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of the autonomous payment revolution. Connect with our investment team to learn more about PayYoyo Wallet&apos;s groundbreaking technology and funding opportunities.
            </p>
          </motion.div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Schedule a Call',
              description: 'Book a private meeting with our founding team to discuss investment opportunities.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              action: 'Schedule Meeting',
              primary: true,
            },
            {
              title: 'Investment Deck',
              description: 'Download our complete investor presentation and financial projections.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              action: 'Download Deck',
              primary: false,
            },
            {
              title: 'Direct Contact',
              description: 'Email our investment team directly for confidential discussions.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              action: 'Email Us',
              primary: false,
            },
          ].map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mx-auto mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
              <Button
                variant={option.primary ? "primary" : "outline"}
                className="w-full"
                onClick={
                  option.title === 'Schedule a Call' ? handleScheduleMeeting :
                  option.title === 'Investment Deck' ? handleDownloadDeck :
                  handleEmailUs
                }
              >
                {option.action}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Investment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Opportunity Summary</h3>
            <p className="text-gray-600">We&apos;re seeking strategic investors for our Series A round</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E40AF] mb-2">$15M</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Raise Target</div>
              <div className="text-sm text-gray-600">Series A Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E40AF] mb-2">25%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Equity Available</div>
              <div className="text-sm text-gray-600">Investment Terms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E40AF] mb-2">$60M</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Pre-Money Valuation</div>
              <div className="text-sm text-gray-600">Strategic Pricing</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Use of Funds</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                '60% Product Development',
                '20% Go-to-Market',
                '10% Team Expansion',
                '10% Working Capital',
              ].map((use, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-900">{use}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-[#1E40AF] text-white rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold mb-6">The Time is Now</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            PayYoyo Wallet represents the future of autonomous payments. With our first-mover advantage in AI-powered financial optimization, we are positioned to capture the $364B global gift card market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-4" onClick={handleScheduleInvestmentMeeting}>
              Schedule Investment Meeting
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-[#1E40AF]"
              onClick={handleDownloadPitchDeck}
            >
              Download Pitch Deck
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            NDA available upon request | All discussions treated as confidential
          </p>
        </motion.div>
      </div>

      <Modal isOpen={showSignupModal} onClose={closeModal}>
        <SignupForm onClose={closeModal} />
      </Modal>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Button } from './button';

interface SignupFormProps {
  onClose: () => void;
}

export function SignupForm({ onClose }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Personalized Success Message */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">You&apos;re in, {name.split(' ')[0]}!</h3>
        <p className="text-gray-600 mb-6">
          Welcome to the PayYoYo $636 Annual Savings Club! We&apos;ll notify you instantly when early access launches.
        </p>

        {/* Quick Win Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-blue-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-semibold">Pro Tip:</span>
          </div>
          <p className="text-blue-700 text-sm mt-1">
            You&apos;re now part of the first 1,000 users - get exclusive beta pricing!
          </p>
        </div>

        <Button onClick={onClose} className="w-full">
          Sounds Great!
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Social Proof Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-sm font-medium mb-4">
          🚀 Join 2,547 Users Already Saving Money
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Start Saving $636 This Year
        </h3>
        <p className="text-gray-600 mb-4">
          Join the waitlist to be first in line for the AI-powered wallet that pays for itself.
        </p>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <div className="flex items-center space-x-2 text-green-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-medium">100% Free</span>
          </div>
          <div className="flex items-center space-x-2 text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">30 Sec Setup</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">Zero Risk</span>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-gray-100">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <div>
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">Verified Sign-up</span>
            </div>
            <p className="text-sm text-gray-700 italic">
              &ldquo;I calculated I&apos;d save $480 in the first month. PayYoYo paid for itself instantly!&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-1">- Sarah M., Toronto</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            What should we call you?
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Last"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Best email for notifications?
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Company or Organization
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Optional - for personalized pricing"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-colors"
          />
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Early access guarantee</span>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-[#1E40AF] to-[#2563EB] hover:from-[#1D4ED8] hover:to-[#1D4ED8] text-white py-4 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Securing Your Spot...</span>
            </div>
          ) : (
            'Claim My Early Access →'
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
          <br />
          Your data is secure and never shared. Read our{' '}
          <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
        </p>
      </form>
    </div>
  );
}

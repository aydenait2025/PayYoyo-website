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
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to PayYoyo Wallet!</h3>
        <p className="text-gray-600 mb-6">
          You've been added to our early access list. We'll notify you when we launch!
        </p>
        <Button onClick={onClose} className="w-full">
          Great!
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
        <p className="text-gray-600">Join the waitlist to experience autonomous payments first.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
          />
        </div>

        <Button
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining Waitlist...' : 'Join Early Access'}
        </Button>
      </form>
    </div>
  );
}

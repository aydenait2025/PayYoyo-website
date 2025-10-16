'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with autonomous payments',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Up to 1,000 transactions/month',
        'Basic AI optimization',
        'Standard security features',
        'Email support',
        'Basic analytics dashboard',
        'Mobile app access'
      ],
      recommended: false,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing merchants who need advanced payment automation',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 10,000 transactions/month',
        'Advanced AI optimization',
        'Priority security monitoring',
        '24/7 phone & email support',
        'Advanced analytics & reporting',
        'API access included',
        'Custom integrations',
        'Multi-location support'
      ],
      recommended: true,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large-scale merchants with custom requirements',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Unlimited transactions',
        'Custom AI model training',
        'Dedicated security team',
        '24/7 dedicated support',
        'Custom analytics & BI',
        'Full API access',
        'White-label solutions',
        'SLA guarantees',
        'On-premise deployment option'
      ],
      recommended: false,
      ctaText: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 30-day free trial that includes all Professional plan features. No credit card required. You\'ll get full access to our AI-powered payment optimization and can process up to 10,000 transactions during the trial period.'
    },
    {
      question: 'What happens after the trial ends?',
      answer: `At the end of your trial, you can choose to continue with any of our paid plans. If you don't select a plan, your account will automatically convert to our Starter plan with the monthly pricing shown above.`
    },
    {
      question: 'Can I change plans anytime?',
      answer: `Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle to avoid service interruptions.`
    },
    {
      question: 'What payment methods do you accept?',
      answer: `We accept all major credit cards (Visa, Mastercard, American Express), ACH transfers, and wire transfers for Enterprise customers. All payments are processed securely through our PCI DSS Level 1 compliant payment gateway.`
    },
    {
      question: 'Is there a setup fee?',
      answer: `No setup fees for any of our plans. The pricing shown includes all setup costs, onboarding support, and initial configuration of your autonomous payment system.`
    },
    {
      question: 'Do you offer refunds?',
      answer: `We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with PayYoYo within the first 30 days, we'll provide a full refund, no questions asked.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* ...rest of your JSX unchanged... */}
      <Footer />
    </div>
  );
}

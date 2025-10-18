'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface SavingsCalculatorProps {
  className?: string;
}

export function SavingsCalculator({ className = '' }: SavingsCalculatorProps) {
  const [monthlySpend, setMonthlySpend] = useState(400);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const savingsRate = monthlySpend < 200 ? 1.4 : monthlySpend < 500 ? 1.59 : 1.7;
      const calculatedSavings = Math.round(monthlySpend * savingsRate);
      setAnnualSavings(calculatedSavings);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [monthlySpend]);

  const handleGetAccess = () => {
    const heroButton = document.querySelector('button[onClick*="handleGetEarlyAccess"]') as HTMLButtonElement;
    if (heroButton) heroButton.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 ${className}`}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          AI-Powered Calculation
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          💰 Discover Your Annual PayYoYo Savings
        </h3>
        <p className="text-sm text-gray-600">
          How much do you spend monthly with gift cards?
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <motion.span
            key={monthlySpend}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-blue-600"
          >
            ${monthlySpend.toLocaleString()}
          </motion.span>
          <span className="text-sm text-gray-500">monthly spend</span>
        </div>

        <input
          type="range"
          min="50"
          max="2000"
          step="25"
          value={monthlySpend}
          onChange={(e) => setMonthlySpend(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 slider"
        />

        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>$50</span>
          <span>$1,000</span>
          <span>$2,000+</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center mb-6">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-3"></div>
            <p className="text-sm text-gray-600">AI analyzing your savings potential...</p>
          </div>
        ) : (
          <>
            <motion.div
              key={annualSavings}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <p className="text-4xl font-bold text-green-600 mb-2">
                ${annualSavings.toLocaleString()}
              </p>
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Saved Annually
              </p>
              <p className="text-sm text-gray-600">
                That's ${(annualSavings/12).toFixed(0)} saved each month! 🎉
              </p>
            </motion.div>
          </>
        )}
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={handleGetAccess}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : `Start Saving $${annualSavings.toLocaleString()} Today →`}
        </Button>
      </motion.div>

      <div className="flex items-center justify-center mt-4 space-x-2 text-xs text-gray-500">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Free forever • No credit card required</span>
      </div>
    </motion.div>
  );
}

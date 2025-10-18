'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (process.env.NODE_ENV === 'development') {
      acceptCookies(); // Automatically accept cookies in development
    } else if (!consent) {
      setIsVisible(true);
    } else {
      setHasConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    setHasConsented(true);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    setHasConsented(true);
  };

  const showSettings = () => {
    // You can implement cookie settings modal here
    window.open('/cookie-policy', '_blank');
  };

  if (!isVisible && hasConsented) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    We value your privacy
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                  <a
                    href="/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E40AF] hover:text-[#3B82F6] underline font-medium"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectCookies}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Reject All
                </Button>
                <Button
                  size="sm"
                  onClick={showSettings}
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Cookie Settings
                </Button>
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="bg-[#1E40AF] text-white hover:bg-[#3B82F6]"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

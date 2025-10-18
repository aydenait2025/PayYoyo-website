'use client';

import { motion } from 'framer-motion';

export function Footer() {

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text tracking-wider" style={{fontFamily: 'cursive, serif', fontStyle: 'oblique', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
                PayYoYo
              </h3>
            </motion.div>
            <motion.p
              className="mt-4 text-gray-600 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Turn your wallet into your personal money manager. With AI and GPS intelligence, it spots the right gift cards, discovers discounts, and applies promo codes at the perfect moment — helping you spend smarter, save more, and enjoy life without financial guesswork.
            </motion.p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Product
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Features', href: '/features' },
                  { name: 'Security', href: '/security' },
                  { name: 'API', href: '/api' },
                  { name: 'Pricing', href: '/pricing' }
                ].map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      className="group relative text-gray-600 hover:text-[#1E40AF] transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05, x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', id: 'problem' },
                  { name: 'Careers', href: '/careers' },
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.name}>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        className="group relative text-gray-600 hover:text-[#1E40AF] transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    ) : item.id ? (
                      <motion.a
                        href={`/#${item.id}`}
                        className="group relative text-left text-gray-600 hover:text-[#1E40AF] transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05, x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1E40AF] transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    ) : (
                      <span className="text-gray-400 text-left cursor-default text-sm opacity-60">
                        {item.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a href="/privacy" className="text-xs text-gray-500 hover:text-[#1E40AF] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs text-gray-500 hover:text-[#1E40AF] transition-colors">
              Terms of Service
            </a>
            <a href="/terms-of-use" className="text-xs text-gray-500 hover:text-[#1E40AF] transition-colors">
              Terms of Use
            </a>
            <a href="/cookie-policy" className="text-xs text-gray-500 hover:text-[#1E40AF] transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Main Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs text-center md:text-left space-y-1">
              <p>© 2025 AydenAIT Solutions. All rights reserved.</p>
              <p className="text-xs opacity-75">PayYoYo is a product of AydenAIT Solutions.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Partner Payment Networks */}
              <div className="flex items-center space-x-3 mr-6">
                <span className="text-xs text-gray-500 font-medium">Payment Partners:</span>
                <div className="flex space-x-2">
                  <div className="w-8 h-6 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-sm">
                    VISA
                  </div>
                  <div className="w-10 h-6 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-sm">
                    MC
                  </div>
                  <div className="w-12 h-6 bg-blue-800 text-white text-[10px] font-bold flex items-center justify-center rounded-sm">
                    AMEX
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-[#1E40AF] transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.23 0 010 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-[#1E40AF] transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

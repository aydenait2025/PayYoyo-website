'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import { Logo } from './ui/logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, scroll to section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page (like careers), navigate to home page with anchor
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-4 md:ml-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'About', id: 'problem' },
                { name: 'Solution', id: 'solution' },
                { name: 'Market', id: 'market' },
                { name: 'Advantage', id: 'market' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-700 hover:text-[#1E40AF] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
                  {/* Background hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-md"></span>
                </motion.button>
              ))}
            </div>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

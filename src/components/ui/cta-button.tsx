'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self';
  urgency?: 'low' | 'medium' | 'high';
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  onClick,
  href,
  target = '_self',
  urgency = 'medium',
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] group';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-xl hover:shadow-2xl hover:from-[#1D4ED8] hover:to-[#2563EB]',
    secondary: 'bg-white text-[#1E40AF] border-2 border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent text-[#1E40AF] border-2 border-transparent hover:bg-[#1E40AF] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  // Urgency pulse animation
  const urgencyClasses = urgency === 'high' ? 'animate-pulse' : '';

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${urgencyClasses} ${className}`;

  const buttonContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={buttonClasses}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.button>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  label: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}

export default function HeroSection({ label, headline, subheadline, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[20px] bg-black px-6 sm:px-12 md:px-20 py-20 md:py-28 mb-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-neutral-800" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 max-w-[800px]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase mb-6 block"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg-fluid text-white mb-6"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-[600px] mb-10"
        >
          {subheadline}
        </motion.p>
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors"
        >
          {ctaText}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

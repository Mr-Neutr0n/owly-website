'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
  as?: 'div' | 'article' | 'section';
}

export function GlowingCard({
  children,
  className = '',
  glowColor = 'rgba(10, 10, 10, 0.15)',
  borderRadius = '18px',
  as: Component = 'div',
}: GlowingCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      style={{ borderRadius }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Glow effect layer */}
      <div
        className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})`,
          borderRadius,
        }}
      />

      {/* Animated border */}
      <div
        className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 0.05), rgba(10, 10, 10, 0.2))`,
          borderRadius,
        }}
      />

      {/* Card content */}
      <Component
        className="relative bg-white border border-[#e0e0e0] group-hover:border-transparent transition-colors duration-300 h-full"
        style={{ borderRadius }}
      >
        {children}
      </Component>
    </motion.div>
  );
}

export default GlowingCard;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: 1 | 2;
  className?: string;
  index?: number;
  variant?: 'light' | 'dark';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  colSpan = 1,
  className,
  index = 0,
  variant = 'dark',
}) => {
  const colSpanClasses = {
    1: 'col-span-1',
    2: 'col-span-1 md:col-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(colSpanClasses[colSpan], className)}
    >
      <div
        className={cn(
          'group relative h-full rounded-2xl p-6 md:p-8 transition-all duration-300',
          variant === 'dark'
            ? 'bg-[#18181B] border border-white/10 hover:border-white/20'
            : 'bg-white border border-[#e0e0e0] hover:border-[#c0c0c0]'
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
            variant === 'dark' ? 'bg-white/10' : 'bg-[#f5f5f5]'
          )}
        >
          <Icon
            className={cn(
              'w-6 h-6',
              variant === 'dark' ? 'text-white' : 'text-[#0a0a0a]'
            )}
          />
        </div>

        {/* Content */}
        <h3
          className={cn(
            'text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] mb-2',
            variant === 'dark' ? 'text-white' : 'text-[#0a0a0a]'
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'text-[14px] md:text-[15px] leading-[22px]',
            variant === 'dark' ? 'text-white/60' : 'text-[#6b6b6b]'
          )}
        >
          {description}
        </p>

        {/* Hover glow effect for dark variant */}
        {variant === 'dark' && (
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;

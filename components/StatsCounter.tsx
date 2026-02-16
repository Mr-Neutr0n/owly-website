'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { cn } from '@/lib/utils';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: 'K+', label: 'Videos Delivered' },
  { value: 50, suffix: '+', label: 'Languages Supported' },
  { value: 1000, suffix: '+', label: 'Brand Guidelines Extracted' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
];

export const StatsCounter: React.FC<{ className?: string }> = ({ className }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section className={cn('py-8 md:py-12 bg-white', className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  'flex flex-col items-center py-8 md:py-12',
                  index < stats.length - 1 && 'md:border-r md:border-black/10'
                )}
              >
                <div className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-bold text-[#0a0a0a] tracking-tight leading-none flex items-baseline">
                  <NumberFlow
                    value={isInView ? stat.value : 0}
                    format={{ notation: 'standard' }}
                    transformTiming={{ duration: 1000, easing: 'ease-out' }}
                    spinTiming={{ duration: 1000, easing: 'ease-out' }}
                  />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-[14px] md:text-[16px] text-[#6b6b6b] mt-3 md:mt-4 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;

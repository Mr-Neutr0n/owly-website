'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import { cn } from '@/lib/utils';
import { AnimatedWorkflow } from './AnimatedWorkflow';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface StatsHeroBentoProps {
  className?: string;
}

const stats: StatItem[] = [
  { value: 500, suffix: 'K+', label: 'Videos Delivered' },
  { value: 50, suffix: '+', label: 'Languages Supported' },
  { value: 1000, suffix: '+', label: 'Brand Guidelines Extracted' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
];

export const StatsHeroBento: React.FC<StatsHeroBentoProps> = ({ className }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section className={cn('pt-32 pb-16 md:pb-24 bg-white', className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[11px] md:text-[12px] font-light uppercase tracking-[6px] text-[#6b6b6b]">
            Features
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold tracking-[-2px] md:tracking-[-3px] leading-[1.1] text-[#0a0a0a] mt-4">
            Powering Video Creation
            <br />
            at Scale
          </h1>
        </motion.div>

        {/* Pipeline Visualization - Hidden for now */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden relative min-h-[450px] md:min-h-[500px] flex items-center justify-center"
        >
          {/* Animated Workflow */}
          <AnimatedWorkflow
            inputs={['Brand Assets', 'Company Context', 'Ad Briefs']}
            outputs={['UGC Videos', 'Product Ads', 'Social Clips', 'Educational']}
            className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100"
          />
        </motion.div>

        {/* Stats Row - Below Pipeline */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-32 md:mt-48 pt-16 md:pt-24 border-t border-black/10"
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

export default StatsHeroBento;

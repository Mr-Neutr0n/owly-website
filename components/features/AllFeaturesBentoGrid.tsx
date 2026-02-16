'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'ideate' | 'create' | 'iterate' | 'analyse';
  colSpan?: 1 | 2;
}

interface AllFeaturesBentoGridProps {
  features: FeatureItemProps[];
  className?: string;
}

const FeatureCard: React.FC<FeatureItemProps & { index: number }> = ({
  title,
  description,
  icon: Icon,
  colSpan = 1,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        'relative min-h-[220px] md:min-h-[260px]',
        colSpan === 2 ? 'col-span-1 md:col-span-2' : 'col-span-1'
      )}
    >
      {/* Outer container with GlowingEffect on stroke */}
      <div className="group relative h-full rounded-[26px] p-1">
        {/* Glowing Effect on outer container */}
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Inner card with white background */}
        <div className="relative h-full rounded-[22px] bg-white border border-neutral-200 p-6 md:p-8 flex flex-col">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center mb-auto">
            <Icon className="w-5 h-5 text-neutral-600" />
          </div>

          {/* Content - positioned at bottom */}
          <div className="mt-8">
            <h3 className="text-[18px] md:text-[22px] font-semibold tracking-[-0.5px] text-[#0a0a0a] mb-2">
              {title}
            </h3>
            <p className="text-[14px] md:text-[15px] leading-[22px] text-neutral-500">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const AllFeaturesBentoGrid: React.FC<AllFeaturesBentoGridProps> = ({
  features,
  className,
}) => {
  return (
    <section className={cn('py-24 md:py-32 bg-white', className)}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[12px] md:text-[14px] uppercase tracking-wide text-neutral-400">
            All Features
          </span>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-semibold tracking-[-2px] md:tracking-[-3px] leading-[1.1] text-[#0a0a0a] mt-3">
            Everything you need
          </h2>
          <p className="text-[14px] md:text-[16px] text-neutral-500 max-w-[500px] mx-auto mt-4">
            From ideation to analytics, every tool you need to create winning ad campaigns.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeaturesBentoGrid;

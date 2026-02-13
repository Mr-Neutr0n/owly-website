'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Video, RefreshCw, BarChart3, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StageIndicatorProps {
  icon: LucideIcon;
  label: string;
  href: string;
  index: number;
}

const StageIndicator: React.FC<StageIndicatorProps> = ({
  icon: Icon,
  label,
  href,
  index,
}) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="group flex flex-col items-center gap-3 cursor-pointer"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0a0a0a] group-hover:scale-105">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#0a0a0a] group-hover:text-white transition-colors" />
      </div>
      <span className="text-[12px] md:text-[14px] font-medium text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors">
        {label}
      </span>
    </motion.a>
  );
};

interface FeatureHeroProps {
  className?: string;
}

export const FeatureHero: React.FC<FeatureHeroProps> = ({ className }) => {
  const stages = [
    { icon: Lightbulb, label: 'Ideate', href: '#ideate' },
    { icon: Video, label: 'Create', href: '#create' },
    { icon: RefreshCw, label: 'Iterate', href: '#iterate' },
    { icon: BarChart3, label: 'Analyse', href: '#analyse' },
  ];

  return (
    <section
      className={cn(
        'min-h-[70vh] flex items-center bg-white pt-24',
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] md:text-[14px] uppercase tracking-wide text-[#6b6b6b] mb-4"
          >
            Features
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] sm:text-[56px] md:text-[77px] font-semibold tracking-[-2px] md:tracking-[-4.6px] leading-[1.05] text-[#0a0a0a] mb-6"
          >
            Powerful Features
            <br />
            for Every Step
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[14px] md:text-[16px] text-[#6b6b6b] max-w-[600px] leading-[24px] mb-16"
          >
            From ideation to analysis, Owly streamlines your entire ad creation
            workflow with AI-powered tools at every stage.
          </motion.p>

          {/* Stage indicators */}
          <div className="flex items-center gap-8 md:gap-12">
            {stages.map((stage, index) => (
              <React.Fragment key={stage.label}>
                <StageIndicator
                  icon={stage.icon}
                  label={stage.label}
                  href={stage.href}
                  index={index}
                />
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="hidden sm:block w-12 md:w-20 h-[2px] bg-[#e0e0e0]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[#d0d0d0] flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-[#6b6b6b] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FeatureBentoGrid, FeatureItem } from './FeatureBentoGrid';
import { AnimatedWorkflow } from './AnimatedWorkflow';

interface FeatureListItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureSectionProps {
  stage: string;
  title: string;
  description: string;
  features: FeatureItem[];
  featureList: FeatureListItem[];
  workflowBadges: string[];
  workflowTitle: string;
  variant?: 'light' | 'dark';
  imagePosition?: 'left' | 'right';
  className?: string;
  lightColor?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  stage,
  title,
  description,
  features,
  featureList,
  workflowBadges,
  workflowTitle,
  variant = 'light',
  imagePosition = 'left',
  className,
  lightColor = '#27fda7',
}) => {
  const isDark = variant === 'dark';

  return (
    <section
      className={cn(
        'py-24 md:py-32',
        isDark ? 'bg-[#0a0a0a]' : 'bg-white',
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20 gap-6"
        >
          <div>
            <span
              className={cn(
                'text-[12px] md:text-[14px] uppercase tracking-wide',
                isDark ? 'text-white/50' : 'text-[#6b6b6b]'
              )}
            >
              {stage}
            </span>
            <h2
              className={cn(
                'text-[40px] sm:text-[56px] md:text-[77px] font-semibold tracking-[-2px] md:tracking-[-4.6px] leading-[1.05]',
                isDark ? 'text-white' : 'text-[#0a0a0a]'
              )}
            >
              {title}
            </h2>
          </div>
          <p
            className={cn(
              'max-w-[400px] text-[14px] md:text-[16px] leading-[24px]',
              isDark ? 'text-white/60' : 'text-[#6b6b6b]'
            )}
          >
            {description}
          </p>
        </motion.div>

        {/* Main content - 2 column */}
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20',
            imagePosition === 'right' && 'lg:[&>*:first-child]:order-2'
          )}
        >
          {/* Animated SVG workflow */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <AnimatedWorkflow
              badges={workflowBadges}
              title={workflowTitle}
              lightColor={lightColor}
            />
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {featureList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    'flex gap-4 p-4 rounded-xl transition-all duration-300',
                    isDark
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-[#f5f5f5] hover:bg-[#ebebeb]'
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                      isDark ? 'bg-white/10' : 'bg-white'
                    )}
                  >
                    <Icon
                      className={cn(
                        'w-5 h-5',
                        isDark ? 'text-white' : 'text-[#0a0a0a]'
                      )}
                    />
                  </div>
                  <div>
                    <h4
                      className={cn(
                        'text-[16px] md:text-[18px] font-semibold mb-1',
                        isDark ? 'text-white' : 'text-[#0a0a0a]'
                      )}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={cn(
                        'text-[13px] md:text-[14px] leading-[20px]',
                        isDark ? 'text-white/60' : 'text-[#6b6b6b]'
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <FeatureBentoGrid features={features} variant={variant} />
      </div>
    </section>
  );
};

export default FeatureSection;

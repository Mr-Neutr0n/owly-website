'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { cn } from '@/lib/utils';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: 1 | 2;
}

interface FeatureBentoGridProps {
  features: FeatureItem[];
  className?: string;
  variant?: 'light' | 'dark';
}

export const FeatureBentoGrid: React.FC<FeatureBentoGridProps> = ({
  features,
  className,
  variant = 'dark',
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6',
        className
      )}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          colSpan={feature.colSpan}
          index={index}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default FeatureBentoGrid;

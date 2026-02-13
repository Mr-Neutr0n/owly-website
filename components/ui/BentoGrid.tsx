'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  className?: string;
  delay?: number;
}

const colSpanClasses = {
  1: 'col-span-1',
  2: 'col-span-1 md:col-span-2',
  3: 'col-span-1 md:col-span-3',
};

const rowSpanClasses = {
  1: 'row-span-1',
  2: 'row-span-1 md:row-span-2',
};

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-[16px] md:gap-[20px] lg:gap-[24px] ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className = '',
  delay = 0,
}: BentoGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default BentoGrid;

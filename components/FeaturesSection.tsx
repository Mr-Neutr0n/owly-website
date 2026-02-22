'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/GlowingEffect';
import Image from 'next/image';

// Feature image component - uses the ideate.png for all cards
const FeatureImage = () => (
  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
    <Image
      src="/images/features/ideate.png"
      alt="Feature visual"
      fill
      className="object-cover"
    />
  </div>
);

// Icon components
const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'editor':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case 'cci':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return null;
  }
};

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  iconType?: 'editor' | 'cci';
  index: number;
  imageSrc?: string;
}

// Bottom row card - stacked on mobile, side-by-side on desktop
const FeatureCard = ({ title, description, className = '', iconType, index, imageSrc }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn('relative', className)}
    >
      {/* Outer container with GlowingEffect */}
      <div className="group relative h-full rounded-[26px] p-1">
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
        <div className="relative h-full rounded-[22px] bg-white border border-neutral-200 overflow-hidden flex flex-col">
          {/* Mobile: Stacked layout like top cards */}
          <div className="flex flex-col md:hidden">
            {/* Visual element */}
            <div className="p-5 pb-0">
              {imageSrc ? (
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image src={imageSrc} alt={title} fill className="object-cover" />
                </div>
              ) : (
                <FeatureImage />
              )}
            </div>
            {/* Text content - centered */}
            <div className="p-5 text-center">
              <h3 className="text-[18px] font-semibold tracking-[-0.5px] text-[#0a0a0a] mb-2">
                {title}
              </h3>
              <p className="text-[14px] leading-[22px] text-neutral-500">
                {description}
              </p>
            </div>
          </div>

          {/* Desktop: Side-by-side layout */}
          <div className="hidden md:flex md:flex-row md:items-stretch md:h-full min-h-[340px]">
            {/* Left side - Icon and text */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
              {/* Icon */}
              {iconType && (
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 mb-4">
                  {getIcon(iconType)}
                </div>
              )}
              {/* Text content */}
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] text-[#0a0a0a] mb-2">
                  {title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-[22px] text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
            {/* Right side - Image */}
            <div className="w-[55%] p-4 flex items-center">
              <div className="relative w-full h-full min-h-[280px] rounded-xl overflow-hidden">
                <Image
                  src={imageSrc || "/images/features/ideate.png"}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface TopRowCardProps {
  title: string;
  description: string;
  index: number;
  imageSrc?: string;
}

// Top row card - centered content with larger image
const TopRowCard = ({ title, description, index, imageSrc }: TopRowCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="relative"
  >
    {/* Outer container with GlowingEffect */}
    <div className="group relative h-full rounded-[26px] p-1">
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
      <div className="relative h-full rounded-[22px] bg-white border border-neutral-200 overflow-hidden flex flex-col">
        {/* Visual element - larger */}
        <div className="p-5 pb-0">
          {imageSrc ? (
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <FeatureImage />
          )}
        </div>

        {/* Text content - centered */}
        <div className="p-5 md:p-6 text-center">
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

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="page-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 mb-12 md:mb-16 items-center text-center max-w-5xl mx-auto"
        >
          <h2 className="heading-xl-fluid">
            One workflow from idea to insight
          </h2>
          <span className="text-xs font-medium uppercase tracking-[4px] text-neutral-400">
            Features
          </span>
        </motion.div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4 md:gap-5">
          {/* Top Row - 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <TopRowCard
              title="Onboarding"
              description="Import your brand context, product catalog, past ad performance, and audience data. All in one place."
              index={0}
              imageSrc="/images/onboarding-brand.png"
            />
            <TopRowCard
              title="Ideation"
              description="Reverse engineer winning creatives, research your audience, and brainstorm campaigns with an AI creative partner."
              index={1}
            />
            <TopRowCard
              title="Creation"
              description="Generate storyboards, moodboards, videos, and static social posts. All from a single brief."
              index={2}
              imageSrc="/images/creation-feature.png"
            />
          </div>

          {/* Bottom Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <FeatureCard
              title="Editor"
              description="Converse with an AI editor to add motion graphics, trim clips, color grade, and auto-add B-roll."
              iconType="editor"
              index={3}
              imageSrc="/images/editor-feature.png"
            />
            <FeatureCard
              title="Publish & Analyze"
              description="Publish ads and get creative intelligence on what worked, so every campaign improves the next."
              iconType="cci"
              index={4}
              imageSrc="/images/publish-feature.png"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mt-12 md:mt-16 justify-center"
        >
          <a href="https://app.owly.studio" className="bg-black text-white font-semibold text-base px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors duration-200">
            Try it free
          </a>
          <a href="/#contact" className="border border-neutral-300 text-[#0a0a0a] font-semibold text-base px-6 py-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200">
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

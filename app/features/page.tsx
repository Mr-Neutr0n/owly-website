'use client';

import React from 'react';
import {
  Copy,
  Brain,
  Users,
  Layout,
  Video,
  Camera,
  GitBranch,
  Wand2,
  Image,
  Globe,
  BarChart3,
  PieChart,
} from 'lucide-react';
import { StatsHeroBento } from '@/components/features/StatsHeroBento';
import { WorkflowShowcase } from '@/components/features/WorkflowShowcase';
import { AllFeaturesBentoGrid } from '@/components/features/AllFeaturesBentoGrid';

// All features data consolidated
const allFeatures = [
  // Ideate
  {
    title: 'Clone your Compete',
    description: 'Instantly analyze and recreate successful competitor ad formats. Our AI extracts winning elements and adapts them to your brand.',
    icon: Copy,
    category: 'ideate' as const,
    colSpan: 2 as const,
  },
  {
    title: 'Ideate with AI Agent',
    description: 'Collaborate with an AI creative partner that learns your brand voice and generates fresh concepts.',
    icon: Brain,
    category: 'ideate' as const,
  },
  {
    title: 'Audience Research',
    description: 'Deep dive into your target audience with AI-powered demographic and psychographic analysis.',
    icon: Users,
    category: 'ideate' as const,
  },
  // Create
  {
    title: 'Storyboard + Image',
    description: 'Map out your video narrative with AI-generated storyboards. Automatically create matching visuals for each scene.',
    icon: Layout,
    category: 'create' as const,
    colSpan: 2 as const,
  },
  {
    title: 'Create Videos',
    description: 'Transform concepts into polished video ads with intelligent editing, transitions, and effects.',
    icon: Video,
    category: 'create' as const,
  },
  {
    title: 'Product Photoshoot',
    description: 'Generate professional product photography using AI - no studio required.',
    icon: Camera,
    category: 'create' as const,
  },
  {
    title: 'Variations A/B Testing',
    description: 'Automatically generate multiple ad variations and test them to find your best performers.',
    icon: GitBranch,
    category: 'create' as const,
  },
  // Iterate
  {
    title: 'Agentic AI Editor',
    description: 'Make intelligent edits with an AI assistant that understands your creative intent and suggests improvements.',
    icon: Wand2,
    category: 'iterate' as const,
  },
  {
    title: 'Photo Editor',
    description: 'Professional editing tools with AI-powered enhancements for perfect visuals.',
    icon: Image,
    category: 'iterate' as const,
  },
  {
    title: 'Language Changer',
    description: 'Localize ads for any market with AI that preserves tone and cultural nuance.',
    icon: Globe,
    category: 'iterate' as const,
  },
  // Analyse
  {
    title: 'Ads Manager',
    description: 'Unified dashboard to manage, monitor, and optimize all your ad campaigns across every platform.',
    icon: BarChart3,
    category: 'analyse' as const,
    colSpan: 2 as const,
  },
  {
    title: 'Creative Analyser',
    description: 'AI-powered analysis of your ad creative performance. Understand what drives the best results.',
    icon: PieChart,
    category: 'analyse' as const,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Section 1: Stats Hero with Data Pipeline */}
      <StatsHeroBento />

      {/* Section 2: Main Workflow Showcase */}
      <WorkflowShowcase />

      {/* Dark Section Wrapper - extends into footer margin to remove gap */}
      <div className="bg-[#0a0a0a] mb-[-60px] md:mb-[-100px]">
        {/* Section 3: All Features Bento Grid */}
        <AllFeaturesBentoGrid features={allFeatures} />

        {/* CTA Section */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 text-center">
            <h2 className="text-[40px] sm:text-[56px] md:text-[77px] font-semibold tracking-[-2px] md:tracking-[-4.6px] leading-[1.05] text-white mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/60 max-w-[500px] mx-auto mb-10">
              Join thousands of marketing teams creating better ads in less time.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold hover:bg-neutral-200 transition-colors"
            >
              Get started free
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

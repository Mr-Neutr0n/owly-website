'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/GlowingEffect';
import HeroSection from '@/components/seo/HeroSection';
import HowItWorks from '@/components/seo/HowItWorks';
import FAQSection from '@/components/seo/FAQSection';

interface ToolPageClientProps {
  page: {
    title: string;
    headline: string;
    description: string;
    features: { title: string; description: string }[];
    steps: { step: string; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
  };
  relatedTools: { slug: string; title: string }[];
  relatedMakePages: { slug: string; title: string }[];
}

export default function ToolPageClient({ page, relatedTools, relatedMakePages }: ToolPageClientProps) {
  return (
    <div className="bg-white min-h-screen pt-[90px] pb-[80px]">
      <div className="page-container">
        {/* Hero */}
        <HeroSection
          label="Free Tool"
          headline={page.headline}
          subheadline={page.description}
          ctaText="Try it free"
          ctaHref="https://app.owly.studio"
        />

        {/* Tool placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[20px] mb-20"
        >
          <div className="relative rounded-[20px] border border-neutral-200 bg-white p-12 text-center">
            <GlowingEffect
              disabled={false}
              glow={true}
              borderWidth={3}
              spread={80}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="2">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <p className="text-neutral-500 text-lg mb-2">This tool is coming soon.</p>
            <p className="text-neutral-400 text-sm mb-6">In the meantime, try Owly for full video ad creation.</p>
            <a
              href="https://app.owly.studio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-neutral-800 transition-colors"
            >
              Try Owly instead
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* How it works */}
        <HowItWorks steps={page.steps} />

        {/* Features Grid */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-semibold tracking-[-1.5px] text-black mb-10 text-center"
          >
            Why use this tool
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {page.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative rounded-[20px]"
              >
                <div className="relative rounded-[20px] border border-neutral-200 bg-white p-8 h-full">
                  <GlowingEffect
                    disabled={false}
                    glow={true}
                    borderWidth={3}
                    spread={80}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-[15px] leading-[22px] text-neutral-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={page.faqs} />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-[24px] p-12 text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-4">
            Want the full video creation workflow?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-[500px] mx-auto">
            Owly goes beyond scripts. Storyboard, generate, edit, and publish video ads as a team.
          </p>
          <a
            href="https://app.owly.studio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors"
          >
            Try Owly free
          </a>
        </motion.div>

        {/* Related links */}
        {(relatedTools.length > 0 || relatedMakePages.length > 0) && (
          <div className="pt-8 border-t border-neutral-200 space-y-6">
            {relatedTools.length > 0 && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 mb-3">
                  Related Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {relatedTools.map(rt => (
                    <Link
                      key={rt.slug}
                      href={`/tools/${rt.slug}`}
                      className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-black/50 hover:text-black transition-colors"
                    >
                      {rt.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedMakePages.length > 0 && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 mb-3">
                  Create with Owly
                </h3>
                <div className="flex flex-wrap gap-3">
                  {relatedMakePages.map(rm => (
                    <Link
                      key={rm.slug}
                      href={`/make/${rm.slug}`}
                      className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-black/50 hover:text-black transition-colors"
                    >
                      {rm.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

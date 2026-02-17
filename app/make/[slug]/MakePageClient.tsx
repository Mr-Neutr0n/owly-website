'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/GlowingEffect';
import HeroSection from '@/components/seo/HeroSection';
import HowItWorks from '@/components/seo/HowItWorks';
import FAQSection from '@/components/seo/FAQSection';

interface MakePageProps {
  page: {
    title: string;
    headline: string;
    subheadline: string;
    features: { title: string; description: string }[];
    steps: { step: string; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
    ctaText: string;
    ctaHref: string;
  };
  relatedPages: { slug: string; title: string }[];
}

export default function MakePageClient({ page, relatedPages }: MakePageProps) {
  return (
    <div className="bg-white min-h-screen pt-[90px] pb-[80px]">
      <div className="page-container">
        {/* Hero */}
        <HeroSection
          label={page.title}
          headline={page.headline}
          subheadline={page.subheadline}
          ctaText={page.ctaText}
          ctaHref={page.ctaHref}
        />

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
            What you get
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

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-neutral-400 text-sm tracking-wide mb-20"
        >
          Trusted by marketing teams building better ads, faster.
        </motion.p>

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
            Ready to create {page.title.toLowerCase()}?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-[500px] mx-auto">
            Start creating professional video ads in minutes. No editing skills needed.
          </p>
          <a
            href={page.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors"
          >
            {page.ctaText}
          </a>
        </motion.div>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="pt-8 border-t border-neutral-200">
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 mb-4">
              Related
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map(rp => (
                <Link
                  key={rp.slug}
                  href={`/make/${rp.slug}`}
                  className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-black/50 hover:text-black transition-colors"
                >
                  {rp.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

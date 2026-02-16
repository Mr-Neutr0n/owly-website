'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MakePageProps {
  page: {
    title: string;
    headline: string;
    subheadline: string;
    features: { title: string; description: string }[];
    ctaText: string;
    ctaHref: string;
    relatedSlugs: string[];
  };
  relatedPages: { slug: string; title: string }[];
}

export default function MakePageClient({ page, relatedPages }: MakePageProps) {
  return (
    <div className="pt-[100px] pb-[80px]">
      <div className="page-container">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            {page.title}
          </span>
          <h1 className="heading-lg-fluid mb-6 text-black">
            {page.headline}
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto mb-10">
            {page.subheadline}
          </p>
          <a
            href={page.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            {page.ctaText}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {page.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[20px] border border-[#e5e5e5] bg-[#fafafa]"
            >
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-[15px] leading-[24px]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-[24px] p-12 text-center"
        >
          <h2 className="text-[32px] font-semibold text-white mb-4">
            Ready to create {page.title.toLowerCase()}?
          </h2>
          <p className="text-gray-400 mb-8 max-w-[500px] mx-auto">
            Start creating professional video ads in minutes. No editing skills needed.
          </p>
          <a
            href={page.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            {page.ctaText}
          </a>
        </motion.div>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#e5e5e5]">
            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500 mb-4">
              Related
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map(rp => (
                <Link
                  key={rp.slug}
                  href={`/make/${rp.slug}`}
                  className="px-4 py-2 rounded-full border border-[#e0e0e0] text-sm text-gray-700 hover:border-black/50 hover:text-black transition-colors"
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

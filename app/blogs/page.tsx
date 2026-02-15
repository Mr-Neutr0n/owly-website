'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How AI is Revolutionizing Video Ad Creation',
    excerpt: 'Discover how artificial intelligence is transforming the way brands create and optimize their video advertisements.',
    image: '/images/shine/01-woman-popsicle.png',
    date: 'Feb 15, 2025',
    category: 'AI & Technology',
  },
  {
    title: 'The Future of Performance Marketing',
    excerpt: 'Learn about emerging trends in performance marketing and how video content is driving higher conversion rates.',
    image: '/images/shine/02-billie-pink-product.png',
    date: 'Feb 12, 2025',
    category: 'Marketing',
  },
  {
    title: 'Creating Scroll-Stopping Content',
    excerpt: 'Tips and strategies for creating video ads that capture attention in the first 3 seconds.',
    image: '/images/shine/03-coca-cola-cans.png',
    date: 'Feb 8, 2025',
    category: 'Creative',
  },
  {
    title: 'Scaling Your Video Production',
    excerpt: 'How to produce hundreds of video variations without sacrificing quality or brand consistency.',
    image: '/images/shine/04-phone-cases.png',
    date: 'Feb 5, 2025',
    category: 'Production',
  },
  {
    title: 'Understanding Video Analytics',
    excerpt: 'A deep dive into the metrics that matter most for video ad performance.',
    image: '/images/shine/05-tfit-skincare-beach.png',
    date: 'Feb 1, 2025',
    category: 'Analytics',
  },
  {
    title: 'Brand Guidelines in the AI Era',
    excerpt: 'How to maintain brand consistency while leveraging AI for creative automation.',
    image: '/images/shine/07-nike-golf-ball.png',
    date: 'Jan 28, 2025',
    category: 'Branding',
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-white min-h-screen pt-[100px] pb-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            Blog
          </span>
          <h1 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-6">
            Insights & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Stay up to date with the latest trends in AI video creation, performance marketing, and creative automation.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[240px] rounded-[16px] overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-black rounded-[24px] p-12 text-center"
        >
          <h3 className="text-[32px] font-semibold text-white mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-8 max-w-[500px] mx-auto">
            Get the latest insights on AI video creation and performance marketing delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40"
            />
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

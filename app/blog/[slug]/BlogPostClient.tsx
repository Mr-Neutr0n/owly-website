'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostHeaderProps {
  title: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  author: { name: string; avatar: string };
}

export default function BlogPostClient({ post }: { post: BlogPostHeaderProps }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {post.category}
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-xs text-gray-400">{formattedDate}</span>
        <span className="text-gray-300">|</span>
        <span className="text-xs text-gray-400">{post.readingTime}</span>
      </div>

      <h1 className="text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-2px] text-black mb-8">
        {post.title}
      </h1>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
      </div>

      <div className="relative h-[300px] md:h-[400px] rounded-[16px] overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.header>
  );
}

'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const VideoTypesSection = () => {
  const [activeTab, setActiveTab] = useState('UGC');

  const tabs = [
    { id: 'brand-film', label: 'Brand film' },
    { id: 'UGC', label: 'UGC' },
    { id: 'product-videos', label: 'Product videos' },
    { id: 'short-ads', label: 'Short Ads' },
  ];

  // Gallery images - using the kayak image for now, can be replaced with different images per tab
  const galleryImages = [
    '/images/gallery/kayak-carousel.png',
    '/images/gallery/kayak-carousel.png',
    '/images/gallery/kayak-carousel.png',
    '/images/gallery/kayak-carousel.png',
    '/images/gallery/kayak-carousel.png',
    '/images/gallery/kayak-carousel.png',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col gap-[54px] items-center">
          {/* Tab Navigation and Description */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[254px] items-start lg:items-end w-full justify-between">
            {/* Tabs */}
            <div className="flex gap-[40px] items-center flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-[43px] px-[10px] rounded-[12px] transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white font-semibold'
                      : 'bg-white text-[#0a0a0a] font-medium border-2 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <span className="text-[20px] tracking-[-1px] leading-[21.327px]">
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Description */}
            <div className="max-w-[359px]">
              <p className="text-[16px] leading-[23px] text-black">
                Creator-style videos built to feel native, authentic, and high-converting.
              </p>
            </div>
          </div>

          {/* Expandable Gallery */}
          <div className="flex items-center gap-2 h-[500px] w-full">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative group flex-grow w-24 transition-all rounded-[16px] overflow-hidden h-[500px] duration-500 ease-in-out hover:w-[600px] hover:flex-grow-0 cursor-pointer"
              >
                <img
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={src}
                  alt={`Video type ${idx + 1}`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label on hover */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-lg font-semibold">
                    {tabs[idx % tabs.length]?.label || 'Video'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTypesSection;

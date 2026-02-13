'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Category configuration with aspect ratios and content
// Using existing images as placeholders - replace with actual video thumbnails
const categoryConfig = {
  'brand-film': {
    label: 'Brand film',
    description: 'Cinematic brand stories that capture your identity and connect emotionally with your audience.',
    aspectRatio: 'landscape', // 16:9 style
    videos: [
      { id: 1, title: 'Brand Story', thumbnail: '/images/shine/03-coca-cola-cans.png', videoSrc: '' },
      { id: 2, title: 'Company Vision', thumbnail: '/images/shine/07-nike-golf-ball.png', videoSrc: '' },
      { id: 3, title: 'Heritage Film', thumbnail: '/images/shine/05-tfit-skincare-beach.png', videoSrc: '' },
      { id: 4, title: 'Culture Spotlight', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 5, title: 'Mission Statement', thumbnail: '/images/shine/08-mcdonalds-happy-meal.png', videoSrc: '' },
      { id: 6, title: 'Brand Anthem', thumbnail: '/images/shine/03-coca-cola-cans.png', videoSrc: '' },
      { id: 7, title: 'Values Video', thumbnail: '/images/shine/07-nike-golf-ball.png', videoSrc: '' },
    ],
  },
  'UGC': {
    label: 'UGC',
    description: 'Creator-style videos built to feel native, authentic, and high-converting.',
    aspectRatio: 'vertical', // 9:16 style
    videos: [
      { id: 1, title: 'Creator Review', thumbnail: '/images/shine/01-woman-popsicle.png', videoSrc: '' },
      { id: 2, title: 'Unboxing', thumbnail: '/images/shine/02-billie-pink-product.png', videoSrc: '' },
      { id: 3, title: 'Day in Life', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 4, title: 'Tutorial', thumbnail: '/images/shine/04-phone-cases.png', videoSrc: '' },
      { id: 5, title: 'Testimonial', thumbnail: '/images/shine/01-woman-popsicle.png', videoSrc: '' },
      { id: 6, title: 'Get Ready', thumbnail: '/images/shine/02-billie-pink-product.png', videoSrc: '' },
      { id: 7, title: 'Haul Video', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 8, title: 'Routine', thumbnail: '/images/shine/04-phone-cases.png', videoSrc: '' },
    ],
  },
  'product-videos': {
    label: 'Product videos',
    description: 'Showcase your products with stunning visuals that highlight features and drive purchase intent.',
    aspectRatio: 'landscape', // 16:9 style
    videos: [
      { id: 1, title: 'Product Demo', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 2, title: 'Feature Highlight', thumbnail: '/images/shine/02-billie-pink-product.png', videoSrc: '' },
      { id: 3, title: '360 View', thumbnail: '/images/shine/04-phone-cases.png', videoSrc: '' },
      { id: 4, title: 'Comparison', thumbnail: '/images/shine/05-tfit-skincare-beach.png', videoSrc: '' },
      { id: 5, title: 'How It Works', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 6, title: 'Lifestyle Shot', thumbnail: '/images/shine/03-coca-cola-cans.png', videoSrc: '' },
      { id: 7, title: 'Close-up Detail', thumbnail: '/images/shine/07-nike-golf-ball.png', videoSrc: '' },
    ],
  },
  'short-ads': {
    label: 'Short Ads',
    description: 'Scroll-stopping short-form ads optimized for social feeds and maximum engagement.',
    aspectRatio: 'vertical', // 9:16 style
    videos: [
      { id: 1, title: 'Hook Ad', thumbnail: '/images/shine/01-woman-popsicle.png', videoSrc: '' },
      { id: 2, title: 'Problem-Solution', thumbnail: '/images/shine/03-coca-cola-cans.png', videoSrc: '' },
      { id: 3, title: 'Before-After', thumbnail: '/images/shine/02-billie-pink-product.png', videoSrc: '' },
      { id: 4, title: 'Quick Demo', thumbnail: '/images/shine/07-nike-golf-ball.png', videoSrc: '' },
      { id: 5, title: 'Social Proof', thumbnail: '/images/shine/04-phone-cases.png', videoSrc: '' },
      { id: 6, title: 'Flash Sale', thumbnail: '/images/shine/08-mcdonalds-happy-meal.png', videoSrc: '' },
      { id: 7, title: 'Trending Sound', thumbnail: '/images/gallery/kayak-carousel.png', videoSrc: '' },
      { id: 8, title: 'Challenge Ad', thumbnail: '/images/shine/05-tfit-skincare-beach.png', videoSrc: '' },
    ],
  },
};

type CategoryKey = keyof typeof categoryConfig;

const VideoTypesSection = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('UGC');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const tabs: { id: CategoryKey; label: string }[] = [
    { id: 'brand-film', label: 'Brand film' },
    { id: 'UGC', label: 'UGC' },
    { id: 'product-videos', label: 'Product videos' },
    { id: 'short-ads', label: 'Short Ads' },
  ];

  const currentCategory = categoryConfig[activeTab];
  const isVertical = currentCategory.aspectRatio === 'vertical';

  // Handle hover to play video preview
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video && currentCategory.videos[index]?.videoSrc) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Card dimensions - taller for portfolio showcase, responsive
  const getCardClasses = () => {
    if (isVertical) {
      // 9:16 vertical cards - narrower when expanded
      return {
        container: 'h-[70vh] min-h-[500px] max-h-[750px]',
        base: 'w-12 md:w-16',
        expanded: 'hover:w-[280px] md:hover:w-[380px]', // 9:16 ratio
      };
    } else {
      // 16:9 landscape cards - wider when expanded
      return {
        container: 'h-[70vh] min-h-[500px] max-h-[750px]',
        base: 'w-16 md:w-24',
        expanded: 'hover:w-[500px] md:hover:w-[700px]',
      };
    }
  };

  const cardClasses = getCardClasses();

  return (
    <section className="py-20 bg-white">
      {/* Full width portfolio showcase */}
      <div className="w-full">
        <div className="flex flex-col gap-[54px] items-center">
          {/* Tab Navigation and Description - contained width for readability */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start lg:items-end w-full justify-between max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
            {/* Tabs */}
            <div className="flex gap-[40px] items-center flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`h-[43px] px-[18px] rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'bg-neutral-100 text-[#0a0a0a] hover:bg-neutral-200'
                  }`}
                >
                  <span className="text-[18px] font-medium tracking-[-0.5px]">
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Dynamic Description - fixed height for 3 lines to prevent layout shift */}
            <div className="max-w-[359px] h-[69px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[16px] leading-[23px] text-[#6b6b6b]"
                >
                  {currentCategory.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Expandable Gallery - Matches hero px-2 edge alignment */}
          <div className="w-full h-[70vh] min-h-[500px] max-h-[750px] flex items-start px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center gap-2 ${cardClasses.container} w-full`}
              >
                {currentCategory.videos.map((video, idx) => (
                  <div
                    key={`${activeTab}-${video.id}`}
                    className={`relative group flex-grow ${cardClasses.base} transition-all rounded-[16px] overflow-hidden ${cardClasses.container} duration-500 ease-in-out ${cardClasses.expanded} hover:flex-grow-0 cursor-pointer`}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                  >
                    {/* Thumbnail Image */}
                    <img
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      src={video.thumbnail}
                      alt={video.title}
                    />

                    {/* Video Preview (plays on hover if videoSrc exists) */}
                    {video.videoSrc && (
                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                          hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                        src={video.videoSrc}
                        muted
                        loop
                        playsInline
                      />
                    )}

                    {/* Gradient overlay on hover - NO title shown */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTypesSection;

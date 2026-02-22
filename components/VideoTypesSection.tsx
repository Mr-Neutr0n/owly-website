'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
      { id: 1, title: 'Creator Review', thumbnail: '/images/gallery/ugc-01-thumb.jpg', videoSrc: '/videos/gallery/ugc-01.mp4' },
      { id: 2, title: 'Unboxing', thumbnail: '/images/gallery/ugc-02-thumb.jpg', videoSrc: '/videos/gallery/ugc-02.mp4' },
      { id: 3, title: 'Day in Life', thumbnail: '/images/gallery/ugc-03-thumb.jpg', videoSrc: '/videos/gallery/ugc-03.mp4' },
      { id: 4, title: 'Tutorial', thumbnail: '/images/gallery/ugc-04-thumb.jpg', videoSrc: '/videos/gallery/ugc-04.mp4' },
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
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const tabs: { id: CategoryKey; label: string }[] = [
    { id: 'brand-film', label: 'Brand film' },
    { id: 'UGC', label: 'UGC' },
    { id: 'product-videos', label: 'Product videos' },
    { id: 'short-ads', label: 'Short Ads' },
  ];

  // Sync muted state to all video elements
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = isMuted;
      }
    });
  }, [isMuted]);

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
          <div className="flex flex-col gap-6 items-center w-full page-container-wide">
            {/* Tabs - horizontal scroll on mobile */}
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 sm:gap-4 items-center justify-center min-w-max px-4">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setCurrentSlide(0); // Reset carousel on tab change
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`h-[40px] sm:h-[43px] px-[16px] sm:px-[20px] rounded-full transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-black text-white'
                        : 'bg-neutral-100 text-[#0a0a0a] hover:bg-neutral-200'
                    }`}
                  >
                    <span className="text-[14px] sm:text-[16px] font-medium tracking-[-0.3px] whitespace-nowrap">
                      {tab.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Dynamic Description */}
            <div className="max-w-[359px] flex items-center text-center px-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[14px] sm:text-[16px] leading-[21px] sm:leading-[23px] text-[#6b6b6b]"
                >
                  {currentCategory.description}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Carousel - Shows one video at a time */}
          <div className="md:hidden w-full px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-[9/16] max-h-[70vh] rounded-[20px] overflow-hidden"
              >
                <Image
                  className="h-full w-full object-cover object-center"
                  src={currentCategory.videos[currentSlide]?.thumbnail}
                  alt={currentCategory.videos[currentSlide]?.title}
                  fill
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? currentCategory.videos.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {currentCategory.videos.slice(0, 5).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-black w-6' : 'bg-neutral-300'
                    }`}
                  />
                ))}
                {currentCategory.videos.length > 5 && (
                  <span className="text-[12px] text-neutral-400 ml-1">+{currentCategory.videos.length - 5}</span>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === currentCategory.videos.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Expandable Gallery */}
          <div className="hidden md:flex w-full h-[70vh] min-h-[500px] max-h-[750px] items-start px-2">
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
                    <Image
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 0px, 20vw"
                    />

                    {/* Video Preview (plays on hover if videoSrc exists) */}
                    {video.videoSrc && (
                      <video
                        ref={(el) => { videoRefs.current[idx] = el; }}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${
                          hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                        src={video.videoSrc}
                        muted={isMuted}
                        loop
                        playsInline
                      />
                    )}

                    {/* Gradient overlay on hover - NO title shown */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Mute/Unmute button - shows on hover for videos */}
                    {video.videoSrc && hoveredIndex === idx && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        {isMuted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <line x1="23" y1="9" x2="17" y2="15"></line>
                            <line x1="17" y1="9" x2="23" y2="15"></line>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                        )}
                      </button>
                    )}
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

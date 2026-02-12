'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import CarouselItem from './CarouselItem';
import {
  CarouselProps,
  CarouselConfig,
  DEFAULT_CAROUSEL_CONFIG,
  CarouselImage,
} from './types';

/**
 * Carousel Component
 *
 * A fully-featured, accessible carousel with:
 * - Focus scaling (center image largest, sides progressively smaller)
 * - Infinite scrolling
 * - Keyboard navigation (arrow keys)
 * - Touch/swipe gestures
 * - Auto-play with pause on hover
 * - Responsive design (mobile, tablet, desktop)
 * - Full accessibility (ARIA labels, keyboard navigation, reduced motion)
 * - Navigation dots and arrows
 * - Image counter
 * - Smooth animations with spring physics
 */
const Carousel: React.FC<CarouselProps> = ({
  images,
  initialIndex = 0,
  config: userConfig = {},
  className = '',
  onSlideChange,
}) => {
  // Merge user config with defaults
  const config: CarouselConfig = {
    ...DEFAULT_CAROUSEL_CONFIG,
    ...userConfig,
    desktop: {
      ...DEFAULT_CAROUSEL_CONFIG.desktop!,
      ...(userConfig.desktop || {})
    },
    tablet: {
      ...DEFAULT_CAROUSEL_CONFIG.tablet!,
      ...(userConfig.tablet || {})
    },
    mobile: {
      ...DEFAULT_CAROUSEL_CONFIG.mobile!,
      ...(userConfig.mobile || {})
    },
    springConfig: {
      ...DEFAULT_CAROUSEL_CONFIG.springConfig!,
      ...(userConfig.springConfig || {}),
    },
  };

  // State
  const [focusIndex, setFocusIndex] = useState(initialIndex);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  /**
   * Navigate to a specific index
   * Handles infinite looping if enabled
   */
  const goToIndex = useCallback(
    (index: number) => {
      if (config.infinite) {
        // Infinite loop: wrap around
        const newIndex =
          index < 0
            ? images.length - 1
            : index >= images.length
            ? 0
            : index;
        setFocusIndex(newIndex);
        onSlideChange?.(newIndex);
      } else {
        // No loop: clamp to bounds
        const newIndex = Math.max(0, Math.min(index, images.length - 1));
        setFocusIndex(newIndex);
        onSlideChange?.(newIndex);
      }
    },
    [images.length, config.infinite, onSlideChange]
  );

  /**
   * Navigate to next slide
   */
  const next = useCallback(() => {
    goToIndex(focusIndex + 1);
  }, [focusIndex, goToIndex]);

  /**
   * Navigate to previous slide
   */
  const prev = useCallback(() => {
    goToIndex(focusIndex - 1);
  }, [focusIndex, goToIndex]);

  /**
   * Auto-play functionality
   */
  useEffect(() => {
    if (
      config.autoPlay &&
      !isPaused &&
      !(config.pauseOnHover && isHovered) &&
      !prefersReducedMotion
    ) {
      autoPlayTimerRef.current = setInterval(() => {
        next();
      }, config.autoPlayInterval);

      return () => {
        if (autoPlayTimerRef.current) {
          clearInterval(autoPlayTimerRef.current);
        }
      };
    }
  }, [
    config.autoPlay,
    config.autoPlayInterval,
    config.pauseOnHover,
    isHovered,
    isPaused,
    next,
    prefersReducedMotion,
  ]);

  /**
   * Keyboard navigation
   */
  useEffect(() => {
    if (!config.enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard if carousel is focused or contains focus
      if (
        !carouselRef.current?.contains(document.activeElement) &&
        document.activeElement !== carouselRef.current
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          next();
          break;
        case 'Home':
          e.preventDefault();
          goToIndex(0);
          break;
        case 'End':
          e.preventDefault();
          goToIndex(images.length - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [config.enableKeyboard, next, prev, goToIndex, images.length]);

  /**
   * Touch/Swipe gesture handling
   */
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!config.enableTouch && !config.enableDrag) return;

    const threshold = 50; // pixels
    if (info.offset.x > threshold) {
      prev();
    } else if (info.offset.x < -threshold) {
      next();
    }
  };

  /**
   * Calculate position relative to focus for each image
   */
  const getRelativePosition = (index: number): number => {
    if (!config.infinite) {
      return index - focusIndex;
    }

    // For infinite scroll, handle wrap-around
    const diff = index - focusIndex;
    const halfLength = Math.floor(images.length / 2);

    if (diff > halfLength) {
      return diff - images.length;
    } else if (diff < -halfLength) {
      return diff + images.length;
    }
    return diff;
  };

  /**
   * Determine which images should be rendered
   * Only render visible images + buffer for performance
   */
  const getVisibleImages = (): CarouselImage[] => {
    const visibleCount = config.desktop?.visibleCount || 5;
    const buffer = 2; // Render extra images for smooth transitions
    const totalToRender = visibleCount + buffer * 2;

    if (images.length <= totalToRender || !config.infinite) {
      return images;
    }

    // For infinite scroll with many images, only render visible + buffer
    const result: CarouselImage[] = [];
    const halfCount = Math.floor(totalToRender / 2);

    for (let i = -halfCount; i <= halfCount; i++) {
      const index =
        (focusIndex + i + images.length) % images.length;
      result.push(images[index]);
    }

    return result;
  };

  const visibleImages = getVisibleImages();

  return (
    <div
      ref={carouselRef}
      className={`relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      tabIndex={0}
    >
      {/* Main Carousel Container */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{
          height:
            typeof window !== 'undefined' && window.innerWidth < 768
              ? `${(config.mobile?.focusWidth || 320) * 1.4}px`
              : typeof window !== 'undefined' && window.innerWidth < 1024
              ? `${(config.tablet?.focusWidth || 400) * 1.4}px`
              : `${(config.desktop?.focusWidth || 600) * 1.4}px`,
        }}
        drag={config.enableDrag ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        aria-live="polite"
        aria-atomic="false"
      >
        {/* Render carousel items */}
        {images.map((image, index) => {
          const position = getRelativePosition(index);
          const isVisible = Math.abs(position) <= 2; // Only render nearby items

          if (!isVisible && config.infinite) return null;

          return (
            <CarouselItem
              key={`${image.id}-${index}`}
              image={image}
              position={position}
              focusIndex={focusIndex}
              totalItems={images.length}
              onClick={() => goToIndex(index)}
              config={config}
            />
          );
        })}

        {/* Side gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-20" />
      </motion.div>

      {/* Navigation Arrows */}
      {config.showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
            disabled={!config.infinite && focusIndex === 0}
          >
            <HiChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
            disabled={!config.infinite && focusIndex === images.length - 1}
          >
            <HiChevronRight className="w-6 h-6 text-black" />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {config.showDots && (
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${
                  index === focusIndex
                    ? 'bg-black w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }
              `}
              role="tab"
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === focusIndex}
              aria-controls={`carousel-item-${index}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {config.showCounter && (
        <div
          className="text-center mt-4 text-sm text-neutral-600 font-medium"
          aria-live="polite"
          aria-atomic="true"
        >
          {focusIndex + 1} / {images.length}
        </div>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        Slide {focusIndex + 1} of {images.length}: {images[focusIndex]?.alt}
      </div>
    </div>
  );
};

export default Carousel;

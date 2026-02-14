'use client';

import React, { useRef } from 'react';
import { ZoomParallax } from './ui/ZoomParallax';
import { MagicText } from './ui/magic-text';

const TeamsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Images for the zoom parallax effect
  const parallaxImages = [
    { src: '/images/shine/01-woman-popsicle.png', alt: 'Woman with popsicle' },
    { src: '/images/shine/02-billie-pink-product.png', alt: 'Billie product' },
    { src: '/images/shine/03-coca-cola-cans.png', alt: 'Coca-Cola cans' },
    { src: '/images/shine/04-phone-cases.png', alt: 'Phone cases' },
    { src: '/images/shine/05-tfit-skincare-beach.png', alt: 'Skincare product' },
    { src: '/images/shine/07-nike-golf-ball.png', alt: 'Nike golf ball' },
    { src: '/images/shine/08-mcdonalds-happy-meal.png', alt: 'McDonalds Happy Meal' },
  ];

  return (
    <section ref={sectionRef} className="mt-[255px] bg-white relative z-0 pb-[100px]">
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={parallaxImages} />

      {/* Text Overlay - Fixed position during scroll */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none sticky flex items-center justify-center z-10 bg-white" style={{ top: 0 }}>
        <div className="max-w-[900px] mx-auto px-8 md:px-12 w-full">
          <MagicText
            text="Built for teams that move fast, test ideas often, and scale the video that performs."
            className="text-[107px] font-semibold leading-[99px] tracking-[-6.4px] text-center justify-center text-black"
            scrollTarget={sectionRef}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;

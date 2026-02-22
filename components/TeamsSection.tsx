'use client';

import React from 'react';
import { ZoomParallax } from './ui/ZoomParallax';

/**
 * TeamsSection - Parallax zoom gallery
 *
 * STRUCTURE:
 * - mt-[255px]: Gap between hero and parallax start
 * - pb-[100px]: Padding defines where the section ends after scroll completes
 * - z-0: Low stacking context so white cover can sit above
 * - NO overflow-hidden: Would break position:sticky on inner elements
 *
 * CLIPPING STRATEGY:
 * - Images can scale beyond viewport during animation (intended behavior)
 * - White cover div in page.tsx clips the bottom overflow before next section
 * - overflow-x:clip on html/body (globals.css) prevents horizontal scrollbar
 */
const TeamsSection = () => {
  // Parallax images - popsicle girl (index 0) is the hero that zooms to fill screen
  const parallaxImages = [
    { src: '/images/shine/01-woman-popsicle.png', alt: 'Kodeus x Owly', videoSrc: '/videos/kodeus-owly.mp4', videoPoster: '/videos/kodeus-owly-poster.jpg' },
    { src: '/images/shine/02-billie-pink-product.png', alt: 'Billie product' },
    { src: '/images/shine/03-coca-cola-cans.png', alt: 'Coca-Cola cans' },
    { src: '/images/shine/04-phone-cases.png', alt: 'Phone cases' },
    { src: '/images/shine/05-tfit-skincare-beach.png', alt: 'Skincare product' },
    { src: '/images/shine/07-nike-golf-ball.png', alt: 'Nike golf ball' },
    { src: '/images/shine/08-mcdonalds-happy-meal.png', alt: 'McDonalds Happy Meal' },
  ];

  return (
    <section className="mt-[255px] bg-white relative z-0 pb-[100px]">
      {/*
        ZoomParallax scroll mechanics:
        - Container: h-[300vh] = 3x viewport height for scroll range
        - Sticky layer: stays at top:0 during scroll
        - scrollYProgress: 0→1 as user scrolls through 300vh
        - Popsicle girl (index 0): scales 1→4x, centered via items-center justify-center
        - At progress=1: popsicle girl fills viewport, sticky releases, section scrolls away
      */}
      <ZoomParallax images={parallaxImages} />
    </section>
  );
};

export default TeamsSection;

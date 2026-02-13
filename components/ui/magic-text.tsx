"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef, useEffect } from "react";

export interface MagicTextProps {
  text: string;
  className?: string;
  scrollTarget?: React.RefObject<HTMLElement | null>;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-[0.25em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, className, scrollTarget }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTarget?.current) return;

      const section = scrollTarget.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start animation when section enters viewport
      // Complete animation after scrolling just 300px into the section
      const scrollDistance = 300; // pixels of scroll to complete animation

      // Calculate how far into the section we've scrolled
      const sectionTop = rect.top;
      const startPoint = viewportHeight * 0.8; // Start when section is 80% down viewport

      if (sectionTop <= startPoint) {
        // Calculate progress: 0 at start, 1 after scrollDistance pixels
        const scrolled = startPoint - sectionTop;
        const newProgress = Math.min(1, Math.max(0, scrolled / scrollDistance));
        progress.set(newProgress);
      } else {
        progress.set(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTarget, progress]);

  const words = text.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap ${className || ""}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

"use client"

import * as React from "react"
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
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
  const manualProgress = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  // Use manual scroll tracking when scrollTarget is provided
  useEffect(() => {
    if (!scrollTarget) return;

    const handleScroll = () => {
      if (!scrollTarget.current) return;

      const section = scrollTarget.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = 300;
      const startPoint = viewportHeight * 0.8;

      if (rect.top <= startPoint) {
        const scrolled = startPoint - rect.top;
        const newProgress = Math.min(1, Math.max(0, scrolled / scrollDistance));
        manualProgress.set(newProgress);
      } else {
        manualProgress.set(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTarget, manualProgress]);

  const progress = scrollTarget ? manualProgress : scrollYProgress;
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

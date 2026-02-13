'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WorkflowStage {
  id: string;
  title: string;
  description: string;
  mockupImage: string;
}

interface WorkflowShowcaseProps {
  stages?: WorkflowStage[];
  autoRotateInterval?: number;
  className?: string;
}

const defaultStages: WorkflowStage[] = [
  {
    id: 'ideate',
    title: 'Ideate',
    description: 'Explore campaign ideas, remix existing ads, or clone references from anywhere to start faster.',
    mockupImage: '/images/features/ideate.png',
  },
  {
    id: 'create',
    title: 'Create',
    description: 'Build engaging ad videos with our intuitive creation tools and AI-powered assistance.',
    mockupImage: '/images/features/ideate.png',
  },
  {
    id: 'iterate',
    title: 'Iterate',
    description: 'Refine and improve your videos based on feedback and performance data.',
    mockupImage: '/images/features/ideate.png',
  },
  {
    id: 'publish',
    title: 'Publish',
    description: 'Launch your ad campaigns across multiple platforms seamlessly with one click.',
    mockupImage: '/images/features/ideate.png',
  },
];

export const WorkflowShowcase: React.FC<WorkflowShowcaseProps> = ({
  stages = defaultStages,
  autoRotateInterval = 2500,
  className,
}) => {
  const [activeStage, setActiveStage] = useState(stages[0]?.id || 'ideate');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stageIds = stages.map((s) => s.id);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting && entry.intersectionRatio > 0.3;
        setIsInView(inView);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate through stages when in view
  useEffect(() => {
    if (isInView) {
      intervalRef.current = setInterval(() => {
        setActiveStage((current) => {
          const currentIndex = stageIds.indexOf(current);
          const nextIndex = (currentIndex + 1) % stageIds.length;
          return stageIds[nextIndex];
        });
      }, autoRotateInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInView, autoRotateInterval, stageIds]);

  const currentStage = stages.find((s) => s.id === activeStage) || stages[0];

  const handleStageClick = (stageId: string) => {
    setActiveStage(stageId);
    // Reset interval on manual selection
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isInView) {
      intervalRef.current = setInterval(() => {
        setActiveStage((current) => {
          const currentIndex = stageIds.indexOf(current);
          const nextIndex = (currentIndex + 1) % stageIds.length;
          return stageIds[nextIndex];
        });
      }, autoRotateInterval);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        'py-20 md:py-28 lg:py-32 bg-white flex items-center',
        className
      )}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center justify-between">
          {/* Left Column - Features Content */}
          <div className="w-full lg:w-[450px] flex flex-col gap-[50px]">
            {/* Text Container */}
            <div className="flex flex-col gap-[22px]">
              {/* Features Label */}
              <span className="text-[11px] font-light uppercase tracking-[6.05px] text-[#010b10]">
                Features
              </span>

              {/* Heading */}
              <h2 className="text-[40px] md:text-[50px] lg:text-[56px] font-semibold leading-[1] tracking-[-2px] text-black">
                Create ad videos
                <br />
                end-to-end
              </h2>

              {/* Buttons */}
              <div className="flex gap-[12px] items-center">
                <button className="bg-black text-[#fbfbef] font-semibold text-[17px] tracking-[-0.5px] px-[20px] py-[12px] rounded-full hover:bg-neutral-800 transition-colors duration-200">
                  Try it free
                </button>
                <button className="border border-[#474747] text-[#1a2a3b] font-semibold text-[17px] tracking-[-0.5px] px-[20px] py-[12px] rounded-full hover:bg-neutral-50 transition-colors duration-200">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-[32px]">
              {stages.map((stage) => {
                const isActive = activeStage === stage.id;

                return (
                  <div
                    key={stage.id}
                    className="flex gap-[16px] items-start cursor-pointer"
                    onClick={() => handleStageClick(stage.id)}
                  >
                    {/* Vertical Line */}
                    <div className="flex items-center justify-center w-0 flex-shrink-0">
                      <div
                        className="w-[2px] bg-black origin-top transition-all duration-500 ease-out"
                        style={{
                          height: isActive ? 106 : 33,
                          opacity: isActive ? 1 : 0.3,
                        }}
                      />
                    </div>

                    {/* Feature Content */}
                    <div className="flex flex-col gap-[10px]">
                      <span
                        className={cn(
                          'text-[24px] md:text-[30px] tracking-[-1.5px] text-[#010b10] transition-all duration-300',
                          isActive ? 'font-bold opacity-100' : 'font-light opacity-50'
                        )}
                      >
                        {stage.title}
                      </span>

                      <div
                        className="overflow-hidden transition-all duration-500 ease-out"
                        style={{
                          maxHeight: isActive ? 100 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        <p className="text-[15px] md:text-[16px] font-light leading-[24px] text-[#444] max-w-[380px]">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Mockup */}
          <div className="w-full lg:flex-1 lg:max-w-[750px] h-[450px] md:h-[550px] lg:h-[620px] relative rounded-[20px] overflow-hidden bg-[#0a0a0a]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={currentStage.mockupImage}
                  alt={currentStage.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Feature label */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-[14px] font-medium px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                    {currentStage.title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              {stages.map((stage) => (
                <div
                  key={stage.id}
                  className="h-1 rounded-full bg-white cursor-pointer transition-all duration-300"
                  style={{
                    width: activeStage === stage.id ? 32 : 8,
                    opacity: activeStage === stage.id ? 1 : 0.4,
                  }}
                  onClick={() => handleStageClick(stage.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;

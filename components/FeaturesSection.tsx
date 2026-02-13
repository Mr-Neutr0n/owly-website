'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState('ideate');
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      id: 'ideate',
      title: 'Ideate',
      description: 'Explore campaign ideas, remix existing ads, or clone references from anywhere to start faster.',
      image: '/images/features/ideate.png',
    },
    {
      id: 'create',
      title: 'Create',
      description: 'Build engaging ad videos with our intuitive creation tools and AI-powered assistance.',
      image: '/images/features/ideate.png',
    },
    {
      id: 'iterate',
      title: 'Iterate',
      description: 'Refine and improve your videos based on feedback and performance data.',
      image: '/images/features/ideate.png',
    },
    {
      id: 'publish',
      title: 'Publish',
      description: 'Launch your ad campaigns across multiple platforms seamlessly with one click.',
      image: '/images/features/ideate.png',
    },
  ];

  const featureIds = features.map(f => f.id);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting && entry.intersectionRatio > 0.3;
        setIsInView(inView);
        if (inView && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Auto-traverse through features when in view
  useEffect(() => {
    if (isInView) {
      intervalRef.current = setInterval(() => {
        setActiveFeature((current) => {
          const currentIndex = featureIds.indexOf(current);
          const nextIndex = (currentIndex + 1) % featureIds.length;
          return featureIds[nextIndex];
        });
      }, 2500);
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
  }, [isInView]);

  const currentFeature = features.find(f => f.id === activeFeature);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 md:py-28 lg:py-32 bg-white flex items-center"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center justify-between">
          {/* Left Column - Features Content */}
          <div className="w-full lg:w-[450px] flex flex-col gap-[63px]">
            {/* Text Container */}
            <div className="flex flex-col gap-[22px]">
              {/* Features Label */}
              <span className="text-[11px] font-light uppercase tracking-[6.05px] text-[#010b10]">
                Features
              </span>

              {/* Heading */}
              <h2 className="text-[40px] md:text-[50px] lg:text-[56px] font-semibold leading-[1] tracking-[-2px] text-black">
                Create ad videos end-to-end
              </h2>

              {/* Buttons */}
              <div className="flex gap-[12px] items-center">
                <button className="bg-black text-[#fbfbef] font-semibold text-[19px] tracking-[-1.15px] px-[17px] py-[10px] h-[50px] rounded-[16px] hover:bg-neutral-800 transition-colors duration-200">
                  Try it free
                </button>
                <button className="border border-[#474747] text-[#1a2a3b] font-semibold text-[19px] tracking-[-1.15px] px-[17px] py-[10px] h-[50px] rounded-[16px] hover:bg-neutral-50 transition-colors duration-200">
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-[37px]">
              {features.map((feature) => {
                const isActive = activeFeature === feature.id;

                return (
                  <div
                    key={feature.id}
                    className="flex gap-[16px] items-start cursor-pointer"
                    onClick={() => setActiveFeature(feature.id)}
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
                    <div className="flex flex-col gap-[12px]">
                      <span
                        className={`text-[26px] md:text-[32px] tracking-[-1.5px] text-[#010b10] transition-all duration-300 ${
                          isActive ? 'font-bold opacity-100' : 'font-light opacity-50'
                        }`}
                      >
                        {feature.title}
                      </span>

                      <div
                        className="overflow-hidden transition-all duration-500 ease-out"
                        style={{
                          maxHeight: isActive ? 100 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        <p className="text-[15px] md:text-[17px] font-light leading-[24px] text-[#444] max-w-[400px]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Image */}
          <div className="w-full lg:flex-1 lg:max-w-[800px] h-[500px] md:h-[600px] lg:h-[680px] relative rounded-[23px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={currentFeature?.image || features[0].image}
                  alt={currentFeature?.title || 'Feature'}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Feature label */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-[14px] font-medium px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                    {currentFeature?.title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="h-1 rounded-full bg-white cursor-pointer transition-all duration-300"
                  style={{
                    width: activeFeature === feature.id ? 32 : 8,
                    opacity: activeFeature === feature.id ? 1 : 0.4,
                  }}
                  onClick={() => setActiveFeature(feature.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

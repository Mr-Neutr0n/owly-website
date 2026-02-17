'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface Step {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[32px] md:text-[40px] font-semibold tracking-[-1.5px] text-black mb-10 text-center"
      >
        How it works
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative rounded-[20px]"
          >
            <div className="relative rounded-[20px] border border-neutral-200 bg-white p-8 h-full">
              <GlowingEffect
                disabled={false}
                glow={true}
                borderWidth={3}
                spread={80}
                proximity={64}
                inactiveZone={0.01}
              />
              <span className="text-[48px] font-bold text-neutral-100 leading-none block mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-[15px] leading-[22px] text-neutral-500">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

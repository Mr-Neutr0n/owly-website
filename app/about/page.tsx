'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Team members data
const teamMembers = [
  {
    name: 'Aadith',
    role: '',
    image: '/images/team/aadith.jpeg',
    link: 'https://www.linkedin.com/in/aadith-v-a-/',
  },
  {
    name: 'Adi Narayan',
    role: '',
    image: '/images/team/adi-narayan.jpeg',
    link: 'https://adinarayanan.com',
  },
  {
    name: 'Hari',
    role: '',
    image: '/images/team/hari.jpeg',
    link: 'https://harikp.com',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-[70px]">
      {/* Collaboration Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-[1442px] mx-auto px-4 sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] mx-auto text-center"
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[77px] lg:text-[77px] font-semibold text-[#0a0a0a] leading-[1.1] tracking-[-2px] md:tracking-[-4.6px] mb-[20px]">
              Bringing performance & creative teams together.
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[25px] text-[#6b6b6b] max-w-[500px] mx-auto">
              We bridge the gap between data-driven performance marketing and creative storytelling,
              enabling teams to create content that converts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-[1442px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[40px] sm:text-[56px] md:text-[77px] font-semibold leading-[1.1] tracking-[-2px] md:tracking-[-4.6px] text-[#0a0a0a] mb-[20px]">
                The faces behind our{' '}
                Videos
              </h2>

              <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[25px] text-[#6b6b6b] mb-[32px] max-w-[500px]">
                "We believe in the power of collaboration. When performance meets creativity,
                magic happens."
              </p>

              {/* CTA */}
              <a
                href="/#contact"
                className="inline-flex items-center gap-[8px] px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-neutral-800 transition-colors"
              >
                Contact us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>

            {/* Right - Team Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-[16px]"
            >
              {teamMembers.map((member, index) => (
                <a
                  key={member.name}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative rounded-[18px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${
                    index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-[16px] sm:p-[20px] bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-[18px] sm:text-[20px] font-semibold tracking-[-1px]">{member.name}</p>
                    {member.role && <p className="text-white/70 text-[14px] sm:text-[15px]">{member.role}</p>}
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

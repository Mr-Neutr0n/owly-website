'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VideoTypesSection from '@/components/VideoTypesSection';
import FeaturesSection from '@/components/FeaturesSection';
import InteractiveProduct from '@/components/InteractiveProduct';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import WorkflowOrbit from '@/components/WorkflowOrbit';
import TeamsSection from '@/components/TeamsSection';
import StatsCounter from '@/components/StatsCounter';

export default function Home() {
  const [shineScale, setShineScale] = useState(1);

  useEffect(() => {
    const updateShineScale = () => {
      const availableWidth = window.innerWidth - 32; // 32px = 2rem padding
      const scale = Math.min(1, availableWidth / 1495);
      setShineScale(scale);
    };
    updateShineScale();
    window.addEventListener('resize', updateShineScale);
    return () => window.removeEventListener('resize', updateShineScale);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-[70px]">
      {/* Hero Section with Image Background - Full Width */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[calc(100vh-80px)] min-h-[500px] w-full px-2 pt-2 pb-[6px] mt-[5px]"
      >
        {/* Inner container - creates the rounded inset card with spacing on all sides */}
        <div className="relative w-full h-full rounded-[14px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/hero/hero-background.png"
            alt="Hero background"
            fill
            priority
            className="absolute inset-0 w-full h-full object-cover scale-125 pointer-events-none"
          />

          {/* Gradient Overlay - Full height fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-transparent">
            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-[10px] px-4 sm:px-6 lg:px-[38px] pt-6 sm:pt-8 lg:pt-[40px] max-w-[845px]"
            >
              {/* Main Headline */}
              <div className="font-semibold text-white leading-[1.05] tracking-[-3px] sm:tracking-[-4px] lg:tracking-[-6.55px]">
                <h1 className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[109px]">
                  <span className="whitespace-nowrap">Re-invent your Ad</span>
                </h1>
                <h2 className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[109px]">
                  workflow
                </h2>
              </div>

              {/* Description */}
              <p className="text-white text-[16px] sm:text-[22px] md:text-[30px] lg:text-[42px] leading-[1.1] tracking-[-0.5px] sm:tracking-[-1.5px] lg:tracking-[-2.5px] max-w-[850px]">
                Owly unifies ideation, video creation, editing, publishing, and performance analytics into one intelligent workflow, so every campaign makes the next one better.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Types Headline */}
      <section className="pt-32 md:pt-40 -mb-16 md:-mb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="heading-xl-fluid">
            Create every kind of video your marketing needs.
          </h2>
        </div>
      </section>

      {/* Teams Section with Zoom Parallax */}
      <TeamsSection />

      {/* White cover to hide parallax bleed - reduced to show more of popsicle girl */}
      <div className="relative z-50 bg-white h-[80px] -mt-[80px]" />

      {/* Try it yourself Section - Full Width with Scroll Animation */}
      <div className="relative z-50 bg-white pt-16 md:pt-24 pb-16 md:pb-24">
        <InteractiveProduct />
      </div>

      {/* Features Section - Create ad videos end-to-end */}
      <div className="relative z-50 bg-white">
        <FeaturesSection />
      </div>

      <div className="page-container relative z-50 bg-white">
      {/* Video Formats Subheading */}
      <div className="pt-12 md:pt-16 text-center">
        <h2 className="heading-xl-fluid">
          One workflow. Multiple video formats.
        </h2>
      </div>

      {/* Video Types Gallery Section */}
      <VideoTypesSection />

      {/* Your new secret weapon Section - Before/After Comparison */}
      <section className="mt-[80px] sm:mt-[120px] md:mt-[180px] lg:mt-[clamp(180px,15vw,255px)] py-12 sm:py-16 lg:py-20 bg-white">
        <div className="page-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[32px] sm:mb-[40px] lg:mb-[57px]"
          >
            <h2 className="heading-lg-fluid mb-4">
              Your new secret weapon<br className="hidden sm:block" /><span className="sm:hidden"> </span>for video Ads
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#6b6b6b] max-w-[500px] mx-auto px-4 sm:px-0">
              Stop launching ads based on guesswork. Use a structured creative workflow trusted by modern performance teams.
            </p>
          </motion.div>

          {/* Before/After Cards */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-[24px] justify-center">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:flex-1 lg:max-w-[680px] h-[380px] sm:h-[480px] lg:h-[580px] bg-white border border-[#c2c2c2] rounded-[18px] overflow-hidden relative"
            >
              {/* Text Content */}
              <div className="absolute left-[20px] sm:left-[40px] lg:left-[54px] top-[20px] sm:top-[28px] lg:top-[32px] w-[calc(100%-40px)] sm:w-[280px] lg:w-[331px]">
                <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-1px] text-black mb-[10px] sm:mb-[13px]">
                  Before
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#6b6b6b]">
                  Multiple group chats, endless revisions, and slow turnaround.
                </p>
              </div>
              {/* Chaos Image - positioned exactly as in Figma */}
              <div className="absolute left-[-1px] top-[110px] sm:top-[130px] lg:top-[145px] w-full h-[270px] sm:h-[350px] lg:h-[434px] rounded-[11px] overflow-hidden">
                <Image
                  src="/images/secret-weapon/before-chaos.png"
                  alt="Chaotic workflow with multiple apps"
                  width={1622}
                  height={925}
                  className="absolute w-[316%] h-[261%] max-w-none"
                  style={{ left: '-51.9%', top: '-138.18%' }}
                />
              </div>
            </motion.div>

            {/* After Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:flex-1 lg:max-w-[680px] h-[380px] sm:h-[480px] lg:h-[580px] bg-black rounded-[18px] overflow-hidden relative"
            >
              <div className="p-[20px] sm:p-[40px] lg:p-[54px] pb-0">
                <div className="flex items-center gap-[8px] mb-[10px] sm:mb-[13px]">
                  <h3 className="text-[18px] sm:text-[20px] font-semibold tracking-[-1px] text-white">
                    After
                  </h3>
                  <Image
                    src="/images/secret-weapon/owly-logo-white.svg"
                    alt="Owly"
                    width={61}
                    height={19}
                    className="w-[50px] sm:w-[61px] h-auto"
                  />
                </div>
                <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#a0a0a0] max-w-[280px] sm:max-w-[331px]">
                  A single, end-to-end workflow for building, testing, and improving ad creative.
                </p>
              </div>

              {/* Animated Circular Workflow Diagram */}
              <div className="absolute bottom-[10px] sm:bottom-[15px] lg:bottom-[20px] left-1/2 -translate-x-1/2 scale-[0.65] sm:scale-[0.85] lg:scale-100 origin-bottom">
                <WorkflowOrbit />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still not convinced Section - Testimonials */}
      <div className="mt-[120px]">
        <TestimonialsSection
          title="Still not convinced"
          description="Stop launching ads based on guesswork. Use a structured creative workflow trusted by modern performance teams."
          testimonials={[
            {
              author: {
                name: "Sarah Chen",
                handle: "@sarahchen • Marketing Director at TechFlow",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
              },
              text: "Owly transformed our ad workflow completely. We went from 2-week production cycles to launching new creatives in hours.",
            },
            {
              author: {
                name: "Marcus Johnson",
                handle: "@marcusj • Performance Lead at GrowthLabs",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              },
              text: "The iteration speed is unreal. We can now test 10x more creative variations and actually see what resonates with our audience.",
            },
            {
              author: {
                name: "Emily Rodriguez",
                handle: "@emilyrod • Creative Director at BrandCraft",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
              },
              text: "Finally, a tool that understands the needs of performance marketing teams. Brand consistency + speed = chef's kiss.",
            },
            {
              author: {
                name: "David Park",
                handle: "@davidpark • Growth Manager at ScaleUp",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
              },
              text: "Our ROAS improved 40% after switching to Owly. The ability to rapidly test and iterate on creatives is a game changer.",
            },
            {
              author: {
                name: "Lisa Thompson",
                handle: "@lisathompson • Brand Manager at MediaPro",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
              },
              text: "As a brand manager, I love how Owly keeps everything on-brand while giving our performance team the speed they need.",
            },
          ]}
        />
      </div>

      {/* Stats Counter Section */}
      <StatsCounter />
      </div>
      {/* End page-container - shine section needs full width */}

      {/* Want Your Business to Shine - Matching Figma Layout */}
      <section className="mt-[120px] py-12 lg:py-20 bg-white">
        <div className="max-w-[1495px] mx-auto px-4 lg:px-0">

          {/* Mobile Layout - Hidden on desktop */}
          <div className="lg:hidden flex flex-col gap-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 items-center text-center"
            >
              <div className="border border-[#e0e0e0] rounded-[13px] px-[12px] py-[8px]">
                <span className="font-medium text-[14px] text-black uppercase">
                  Owly your video partner
                </span>
              </div>
              <h2 className="text-[40px] sm:text-[56px] font-semibold leading-[1] tracking-[-2px] text-[#0a0a0a]">
                Want Your Business to Shine?
              </h2>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Woman with Popsicle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/01-woman-popsicle.png"
                  alt="Woman eating popsicle"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Image src="/images/shine/owly-logo.svg" alt="Owly" width={40} height={12} />
                </div>
              </motion.div>

              {/* Billie Pink Product */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/02-billie-pink-product.png"
                  alt="Billie product"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Image src="/images/shine/owly-logo.svg" alt="Owly" width={40} height={12} />
                </div>
              </motion.div>

              {/* Coca-Cola Cans */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/03-coca-cola-cans.png"
                  alt="Coca-Cola cans"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <Image src="/images/shine/owly-logo.svg" alt="Owly" width={40} height={12} />
                </div>
              </motion.div>

              {/* Phone Cases */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/04-phone-cases.png"
                  alt="Colorful phone cases"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Image src="/images/shine/owly-logo.svg" alt="Owly" width={40} height={12} />
                </div>
              </motion.div>

              {/* tfit Skincare */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-[4/3] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/05-tfit-skincare-beach.png"
                  alt="tfit skincare product"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Nike Golf Ball */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative aspect-[4/3] rounded-[16px] overflow-hidden"
              >
                <Image
                  src="/images/shine/07-nike-golf-ball.png"
                  alt="Nike golf ball"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Image src="/images/shine/owly-logo.svg" alt="Owly" width={40} height={12} />
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 text-center px-4"
            >
              <p className="text-[16px] text-[#6b6b6b] max-w-[344px]">
                Generate branded promotional content that converts viewers into customers.
              </p>
              <a href="https://app.owly.studio" className="w-full max-w-[357px] h-[64px] bg-black text-white text-[18px] font-bold rounded-[16px] hover:bg-neutral-800 transition-colors flex items-center justify-center">
                Try it free
              </a>
            </motion.div>
          </div>

          {/* Desktop Layout - Hidden on mobile, scales responsively */}
          <div
            className="hidden lg:flex justify-center"
            style={{
              height: `${993 * shineScale}px`,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${1495 * shineScale}px`,
                height: `${993 * shineScale}px`,
                transform: `scale(${shineScale})`,
                transformOrigin: 'top left',
              }}
            >

            {/* Left Column - Woman with Popsicle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-[89px] w-[357px] h-[459px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/01-woman-popsicle.png"
                alt="Woman eating popsicle"
                fill
                className="object-cover"
              />
              <div className="absolute top-5 right-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            {/* Left Column - Billie Pink Product */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-0 top-[571px] w-[357px] h-[422px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/02-billie-pink-product.png"
                alt="Billie product"
                fill
                className="object-cover"
              />
              <div className="absolute top-2.5 right-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            {/* Daisy Flowers - Top right area */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-[620px] top-[-40px] w-[750px] h-[500px] z-[5]"
            >
              <Image
                src="/images/shine/06-daisy-flowers.png"
                alt="Daisy flowers"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Text Content - Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-[400px] top-[89px] w-[577px] z-20"
            >
              <div className="flex flex-col gap-[21px] items-start">
                <div className="border border-[#e0e0e0] rounded-[13px] px-[12px] py-[8px]">
                  <span className="font-medium text-[14px] text-black uppercase leading-[22.441px]">
                    Owly your video partner
                  </span>
                </div>
                <h2 className="text-[111.325px] font-semibold leading-[102.419px] tracking-[-6.6795px] text-[#0a0a0a]">
                  Want Your<br />Business to<br />Shine?
                </h2>
              </div>
            </motion.div>

            {/* Coca-Cola Cans - Center left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[384px] top-[479px] w-[357px] h-[514px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/03-coca-cola-cans.png"
                alt="Coca-Cola cans"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            {/* Phone Cases - Center right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-[762px] top-[396px] w-[357px] h-[431px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/04-phone-cases.png"
                alt="Colorful phone cases"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            {/* CTA Section - Below phone cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute left-[761px] top-[846px] w-[357px] flex flex-col items-center gap-[18px]"
            >
              <p className="font-normal text-[16px] text-[#6b6b6b] w-[344px]">
                Generate branded promotional content that converts viewers into customers.
              </p>
              <a href="https://app.owly.studio" className="w-full h-[87px] bg-black text-white text-[24px] font-bold rounded-[20px] hover:bg-neutral-800 transition-colors flex items-center justify-center">
                Try it free
              </a>
            </motion.div>

            {/* Right Column - tfit Skincare */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-[1030px] top-[89px] w-[439px] h-[289px] rounded-[22px] overflow-hidden z-[1]"
            >
              <Image
                src="/images/shine/05-tfit-skincare-beach.png"
                alt="tfit skincare product"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Right Column - Nike Golf Ball */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-[1138px] top-[396px] w-[357px] h-[333px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/07-nike-golf-ball.png"
                alt="Nike golf ball"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            {/* Right Column - McDonald's Happy Meal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute left-[1138px] top-[745px] w-[357px] h-[248px] rounded-[21px] overflow-hidden z-[10]"
            >
              <Image
                src="/images/shine/08-mcdonalds-happy-meal.png"
                alt="McDonald's Happy Meal"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-5">
                <Image src="/images/shine/owly-logo.svg" alt="Owly" width={49} height={15} />
              </div>
            </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Get in touch today Section */}
      <section id="contact" className="mt-[80px] sm:mt-[120px] lg:mt-[clamp(180px,15vw,255px)] py-12 sm:py-16 lg:py-20 bg-white">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[69px] items-center">
            {/* Left side - Form with background image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-[655px] min-h-[500px] sm:min-h-[580px] lg:min-h-[645px] rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] overflow-hidden flex-shrink-0"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/contact/contact-background.png"
                  alt="Contact background"
                  fill
                  className="w-full h-full object-cover scale-125 sm:scale-150"
                />
              </div>

              {/* Form Container */}
              <div className="relative m-4 sm:m-8 lg:m-[72px] lg:mt-[78px]">
                {/* Solid white background */}
                <div className="absolute inset-0 bg-white rounded-[16px] sm:rounded-[20px] shadow-[0px_4px_18px_rgba(0,0,0,0.12)]" />

                {/* Form Fields */}
                <div className="relative p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 lg:gap-7">
                  {/* Name and Email Row */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-[12px] font-medium text-black">Name</label>
                      <input
                        type="text"
                        placeholder="Ex: John"
                        className="h-[44px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[10px] px-4 sm:px-5 text-[13px] text-black placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-[12px] font-medium text-black">Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="h-[44px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[10px] px-4 sm:px-5 text-[13px] text-black placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-[12px] font-medium text-black">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 9188589920"
                        className="h-[44px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[10px] px-4 sm:px-5 text-[13px] text-black placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-[12px] font-medium text-black">Company</label>
                      <input
                        type="text"
                        placeholder="Ex: Microsoft"
                        className="h-[44px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[10px] px-4 sm:px-5 text-[13px] text-black placeholder:text-[#999] focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-black">Message</label>
                    <textarea
                      placeholder="Please type your message here..."
                      className="h-[100px] sm:h-[120px] lg:h-[139px] bg-[#f7f7f7] border border-[#e5e5e5] rounded-[10px] px-4 sm:px-5 py-4 sm:py-5 text-[13px] text-black placeholder:text-[#999] resize-none focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Send Button */}
                  <button className="w-full h-[50px] sm:h-[55px] lg:h-[59px] bg-black rounded-[12px] sm:rounded-[15px] flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-semibold text-white hover:bg-neutral-800 transition-colors">
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8 lg:gap-[49px] w-full lg:w-[417px] text-center lg:text-left"
            >
              {/* Header */}
              <div className="flex flex-col gap-[13px] items-center lg:items-start">
                <div className="border border-[#e0e0e0] rounded-[13px] px-3 py-2 w-fit">
                  <span className="text-[14px] text-black uppercase">Let's talk</span>
                </div>
                <h2 className="heading-lg-fluid">
                  Get in touch today
                </h2>
                <p className="text-[14px] text-[#6b6b6b] leading-normal max-w-[400px]">
                  Tell us what you want to build and we will get back with a tailored plan for your ad workflow.
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col w-full max-w-[296px] mx-auto lg:mx-0">
                {/* Email */}
                <div className="flex items-center gap-1.5 py-3.5 border-b border-[#f2f2f2]">
                  <div className="p-2.5 rounded-[9px]">
                    <svg className="w-4 h-3" fill="none" stroke="#616161" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#616161]">hari@owly.studio</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-1.5 py-3.5 border-b border-[#f2f2f2]">
                  <div className="p-2.5 rounded-[9px]">
                    <svg className="w-4 h-4" fill="none" stroke="#616161" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#616161]">+91 9188589920</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 py-3.5">
                  <div className="p-2.5 rounded-[9px]">
                    <svg className="w-4 h-5" fill="none" stroke="#616161" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#616161]">Bengaluru, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

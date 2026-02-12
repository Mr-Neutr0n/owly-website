'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VideoTypesSection from '@/components/VideoTypesSection';
import FeaturesSection from '@/components/FeaturesSection';
import InteractiveProduct from '@/components/InteractiveProduct';
import TeamsSection from '@/components/TeamsSection';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1442px] mx-auto px-4">
      {/* Hero Section with Image Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[792px] overflow-hidden rounded-[14px] max-w-[1401px] mx-auto"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden rounded-[14px]">
          <Image
            src="/images/hero/hero-background.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-transparent h-[228px]"></div>
        </div>

        {/* Content */}
        <div className="relative px-[38px] py-[46px] flex justify-between items-start">
          {/* Left side - Main headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[554px]"
          >
            <h1 className="text-[68.6px] font-semibold text-white leading-[63px] tracking-[-4.116px]">
              Re-invent your Ad workflow
            </h1>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[374px]"
          >
            <p className="text-white text-[16px] leading-[25.4px] text-right">
              Owly helps performance and brand teams plan, create, iterate, and launch ad videos
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Teams Section */}
      <TeamsSection />

      {/* Try it yourself Section */}
      <div className="mt-[255px]">
        <InteractiveProduct />
      </div>

      {/* Video Formats Text Section */}
      <section className="mt-[255px] py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="flex flex-col gap-[35px] items-center text-center">
            <h2 className="text-[111.325px] font-semibold leading-[102.419px] tracking-[-6.6795px] text-[#0a0a0a]">
              Create every kind of video your marketing needs.
            </h2>
            <p className="text-[31.439px] leading-[49.814px] text-black">
              One workflow. Multiple video formats.
            </p>
          </div>
        </div>
      </section>

      {/* Video Types Gallery Section */}
      <VideoTypesSection />

      {/* Features Section */}
      <div className="mt-[255px]">
        <FeaturesSection />
      </div>

      {/* Your new secret weapon Section - Before/After Comparison */}
      <section className="mt-[255px] py-20 bg-white">
        <div className="max-w-[1047px] mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[57px]"
          >
            <h2 className="text-[54px] font-semibold leading-[50px] tracking-[-3.26px] text-[#0a0a0a] mb-4">
              Your new secret weapon<br />for video Ads
            </h2>
            <p className="text-[15px] leading-[24px] text-black max-w-[500px] mx-auto">
              Stop launching ads based on guesswork. Use a structured creative workflow trusted by modern performance teams.
            </p>
          </motion.div>

          {/* Before/After Cards */}
          <div className="flex flex-col lg:flex-row gap-[21px]">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[513px] h-[500px] bg-white border border-[#c2c2c2] rounded-[18px] overflow-hidden relative flex-shrink-0"
            >
              {/* Text Content */}
              <div className="absolute left-[54px] top-[32px] w-[331px]">
                <h3 className="text-[20px] font-semibold tracking-[-1px] text-black mb-[13px]">
                  Before
                </h3>
                <p className="text-[15px] leading-[24px] text-black">
                  Multiple group chats, endless revisions, and slow turnaround.
                </p>
              </div>
              {/* Chaos Image - positioned exactly as in Figma */}
              <div className="absolute left-[-1px] top-[145px] w-[513px] h-[354px] rounded-[11px] overflow-hidden">
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
              className="flex-1 h-[500px] bg-black rounded-[18px] overflow-hidden relative"
            >
              <div className="p-[54px] pb-0">
                <div className="flex items-center gap-[10px] mb-[13px]">
                  <h3 className="text-[20px] font-semibold tracking-[-1px] text-white">
                    After
                  </h3>
                  <Image
                    src="/images/secret-weapon/owly-logo-white.svg"
                    alt="Owly"
                    width={61}
                    height={19}
                  />
                </div>
                <p className="text-[15px] leading-[24px] text-[#e0e0e0] max-w-[331px]">
                  A single, end-to-end workflow for building, testing, and improving ad creative.
                </p>
              </div>

              {/* Circular Workflow Diagram */}
              <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-[406px] h-[338px]">
                {/* Outer Circle */}
                <div className="absolute left-[72px] top-[38px] w-[262px] h-[262px]">
                  <Image
                    src="/images/secret-weapon/circle-outer.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Inner Circle */}
                <div className="absolute left-[129px] top-[95px] w-[148px] h-[148px]">
                  <Image
                    src="/images/secret-weapon/circle-inner.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Center Owly Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[54px]">
                  <Image
                    src="/images/secret-weapon/owly-icon.svg"
                    alt="Owly"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Labels */}
                <div className="absolute left-[91px] top-[50px] bg-[#1e2025] px-[6px] py-[6px] rounded-[7px]">
                  <span className="text-[12px] font-semibold text-white tracking-[-0.58px]">Production</span>
                </div>
                <div className="absolute right-[28px] top-[125px] bg-[#1e2025] px-[6px] py-[6px] rounded-[7px]">
                  <span className="text-[12px] font-semibold text-white tracking-[-0.58px]">Iteration</span>
                </div>
                <div className="absolute right-[57px] bottom-[70px] bg-[#1e2025] px-[6px] py-[6px] rounded-[7px]">
                  <span className="text-[12px] font-semibold text-white tracking-[-0.58px]">Analyse</span>
                </div>
                <div className="absolute left-[47px] bottom-[82px] bg-[#1e2025] px-[6px] py-[6px] rounded-[7px]">
                  <span className="text-[12px] font-semibold text-white tracking-[-0.58px]">Ideation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still not convinced Section - Testimonials */}
      <div className="mt-[255px]">
        <TestimonialsSection
          title="Still not convinced?"
          description="See what marketing teams are saying about Owly"
          testimonials={[
            {
              author: {
                name: "Sarah Chen",
                handle: "@sarahchen_marketing",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              },
              text: "Owly transformed our ad workflow completely. We went from 2-week production cycles to launching new creatives in hours.",
            },
            {
              author: {
                name: "Marcus Johnson",
                handle: "@marcusj_ads",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              text: "The iteration speed is unreal. We can now test 10x more creative variations and actually see what resonates with our audience.",
            },
            {
              author: {
                name: "Emily Rodriguez",
                handle: "@emilyrod_creative",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
              },
              text: "Finally, a tool that understands the needs of performance marketing teams. Brand consistency + speed = chef's kiss.",
            },
            {
              author: {
                name: "David Park",
                handle: "@davidpark_growth",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              text: "Our ROAS improved 40% after switching to Owly. The ability to rapidly test and iterate on creatives is a game changer.",
            },
            {
              author: {
                name: "Lisa Thompson",
                handle: "@lisathompson_brand",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              },
              text: "As a brand manager, I love how Owly keeps everything on-brand while giving our performance team the speed they need.",
            },
          ]}
        />
      </div>

      {/* Want Your Business to Shine - Matching Figma Layout */}
      <section className="mt-[255px] py-20 bg-white">
        <div className="max-w-[1495px] mx-auto px-4">
          {/* Relative container for absolute positioning */}
          <div className="relative h-[993px]">

            {/* Left Column - Woman with Popsicle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-[89px] w-[357px] h-[459px] rounded-[21px] overflow-hidden"
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
              className="absolute left-0 top-[571px] w-[357px] h-[422px] rounded-[21px] overflow-hidden"
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
              className="absolute left-[620px] top-[-40px] w-[750px] h-[500px] z-10"
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
              className="absolute left-[384px] top-[479px] w-[357px] h-[514px] rounded-[21px] overflow-hidden"
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
              className="absolute left-[762px] top-[396px] w-[357px] h-[431px] rounded-[21px] overflow-hidden"
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
              <button className="w-full h-[87px] bg-black text-white text-[24px] font-bold rounded-[20px] hover:bg-neutral-800 transition-colors flex items-center justify-center">
                Give it a try!
              </button>
            </motion.div>

            {/* Right Column - tfit Skincare */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-[1030px] top-[89px] w-[439px] h-[289px] rounded-[22px] overflow-hidden"
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
              className="absolute left-[1138px] top-[396px] w-[357px] h-[333px] rounded-[21px] overflow-hidden"
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
              className="absolute left-[1138px] top-[745px] w-[357px] h-[248px] rounded-[21px] overflow-hidden"
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
      </section>

      {/* Get in touch today Section */}
      <section className="mt-[255px] py-20 bg-gradient-to-br from-emerald-100 via-teal-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Form mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white shadow-xl"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Name</label>
                  <div className="h-12 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <div className="h-12 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <div className="h-32 bg-white rounded-xl border border-neutral-200"></div>
                </div>
                <button className="w-full py-4 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-colors">
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Right side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in touch<br />
                today
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Ready to transform your ad workflow? Let's talk about how Owly can help your team create better video ads, faster.
              </p>
              <div className="space-y-4 text-neutral-600">
                <p>✓ Free consultation</p>
                <p>✓ Custom demo tailored to your needs</p>
                <p>✓ No commitment required</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

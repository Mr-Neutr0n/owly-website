'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ShineSection = () => {
  return (
    <section className="mt-[clamp(80px,10vw,120px)] py-12 lg:py-20 bg-white">
      <div className="page-container-wide">

        {/* Mobile Layout - Hidden on desktop */}
        <div className="xl:hidden flex flex-col gap-8">
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
            <h2 className="heading-sm-fluid">
              Want Your Business to Shine?
            </h2>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
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

            {/* tfit Skincare */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
            >
              <Image
                src="/images/shine/05-tfit-skincare-beach.png"
                alt="tfit skincare product"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Billie Pink Product */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              transition={{ duration: 0.5, delay: 0.3 }}
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
              transition={{ duration: 0.5, delay: 0.4 }}
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

            {/* Nike Golf Ball */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative aspect-[3/4] rounded-[16px] overflow-hidden"
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

            {/* McDonald's Happy Meal - Full width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative aspect-[4/3] rounded-[16px] overflow-hidden col-span-2"
            >
              <Image
                src="/images/shine/08-mcdonalds-happy-meal.png"
                alt="McDonald's Happy Meal"
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
            <button className="w-full max-w-[357px] h-[64px] bg-black text-white text-[18px] font-bold rounded-[16px] hover:bg-neutral-800 transition-colors">
              Give it a try!
            </button>
          </motion.div>
        </div>

        {/* Desktop Layout - Matching Figma exactly */}
        <div className="hidden xl:block relative" style={{ height: 'clamp(700px, 66vw, 993px)' }}>

          {/* Left Column - Woman with Popsicle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 rounded-[22px] overflow-hidden z-[10]"
            style={{ top: '9%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(280px, 46.2%, 459px)' }}
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
            className="absolute left-0 rounded-[22px] overflow-hidden z-[10]"
            style={{ top: '57.5%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(260px, 42.5%, 422px)' }}
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

          {/* Daisy Flowers - Decorative top center */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute z-[5] pointer-events-none"
            style={{ left: '47%', top: '-4%', width: 'clamp(380px, 40.5%, 605px)', height: 'clamp(250px, 39.9%, 396px)' }}
          >
            <Image
              src="/images/shine/06-daisy-flowers.png"
              alt="Daisy flowers"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text Content - Center left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute z-20"
            style={{ left: '26.7%', top: '9%', width: 'clamp(350px, 38.6%, 577px)' }}
          >
            <div className="flex flex-col gap-[21px] items-start">
              <div className="border border-[#e0e0e0] rounded-[13px] px-[12px] py-[8px]">
                <span className="font-medium text-[14px] text-black uppercase leading-[22.441px]">
                  Owly your video partner
                </span>
              </div>
              <h2
                className="font-semibold text-[#0a0a0a]"
                style={{
                  fontSize: 'clamp(60px, 7.45vw, 111px)',
                  lineHeight: '0.92',
                  letterSpacing: '-0.06em'
                }}
              >
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
            className="absolute rounded-[22px] overflow-hidden z-[10]"
            style={{ left: '25.7%', top: '48.2%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(320px, 51.8%, 514px)' }}
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
            className="absolute rounded-[22px] overflow-hidden z-[10]"
            style={{ left: '51%', top: '39.9%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(270px, 43.4%, 431px)' }}
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
            className="absolute flex flex-col items-center gap-[18px] z-20"
            style={{ left: '51%', top: '85%', width: 'clamp(220px, 23.9%, 357px)' }}
          >
            <p className="font-normal text-[16px] text-[#6b6b6b] w-full">
              Generate branded promotional content that converts viewers into customers.
            </p>
            <button className="w-full h-[clamp(64px, 5.8vw, 87px)] bg-black text-white text-[clamp(18px,1.6vw,24px)] font-bold rounded-[20px] hover:bg-neutral-800 transition-colors flex items-center justify-center">
              Give it a try!
            </button>
          </motion.div>

          {/* Right Column - tfit Skincare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute rounded-[22px] overflow-hidden z-[1]"
            style={{ left: '68.9%', top: '9%', width: 'clamp(270px, 29.4%, 439px)', height: 'clamp(180px, 29.1%, 289px)' }}
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
            className="absolute rounded-[22px] overflow-hidden z-[10]"
            style={{ left: '76.1%', top: '39.9%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(210px, 33.5%, 333px)' }}
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
            className="absolute rounded-[22px] overflow-hidden z-[10]"
            style={{ left: '76.1%', top: '75%', width: 'clamp(220px, 23.9%, 357px)', height: 'clamp(155px, 25%, 248px)' }}
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
  );
};

export default ShineSection;

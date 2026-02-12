'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mic, ArrowRight } from 'lucide-react';

const InteractiveProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleInteraction = () => {
    window.location.href = '/signin';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[68.6px] font-semibold leading-[63.111px] tracking-[-4.116px] text-[#0a0a0a] text-center mb-[68px]"
        >
          Try it yourself.
        </motion.h2>

        {/* Interactive Product Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black rounded-[12px] p-2 flex gap-[3px] max-w-[1396px] mx-auto h-[875px] overflow-hidden"
        >
          {/* Animated Sidebar */}
          <motion.div
            className="bg-[#040404] border border-[rgba(64,64,64,0.15)] rounded-[12px] h-full flex-shrink-0 shadow-[0px_8px_31px_0px_rgba(0,0,0,0.3),inset_0px_1px_0px_0px_rgba(64,64,64,0.2)] overflow-hidden"
            animate={{
              width: sidebarOpen ? '273px' : '66px',
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            onMouseEnter={() => setSidebarOpen(true)}
            onMouseLeave={() => setSidebarOpen(false)}
          >
            <div className="flex flex-col justify-between h-full px-[6px] py-[13px]">
              {/* Top Section */}
              <div className="flex flex-col gap-[22px]">
                {/* Logo - Animated width reveal */}
                <div className="flex items-center justify-between w-full px-[4px]">
                  <motion.div
                    className="h-[35px] relative overflow-hidden"
                    animate={{ width: sidebarOpen ? '85px' : '23px' }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Logo positioned to show owl icon, revealing text on expand */}
                    <img
                      src="/images/interactive-product/owly-logo-full.png"
                      alt="Owly"
                      className="absolute h-full max-w-none"
                      style={{
                        width: '105px',
                        left: '-12px',
                        top: '0',
                      }}
                    />
                  </motion.div>
                  <motion.button
                    className="w-[17px] h-[17px] flex items-center justify-center"
                    animate={{ opacity: sidebarOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/images/interactive-product/sidebar-toggle.svg"
                      alt="Toggle"
                      width={17}
                      height={17}
                    />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-[6px]">
                  {/* Create New Video - Selected */}
                  <div className="bg-[#111] rounded-[8px] px-[10px] py-[12px] flex items-center gap-[10px] cursor-pointer">
                    <div className="w-[23px] h-[23px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/interactive-product/create-icon-new.svg"
                        alt="Create"
                        width={14}
                        height={14}
                      />
                    </div>
                    <motion.span
                      className="text-[#a8a8a8] text-[14px] font-medium whitespace-nowrap overflow-hidden"
                      animate={{
                        opacity: sidebarOpen ? 1 : 0,
                        width: sidebarOpen ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Create New Video
                    </motion.span>
                  </div>

                  {/* Video Library */}
                  <div className="rounded-[8px] px-[10px] py-[6px] flex items-center gap-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
                    <div className="w-[23px] h-[23px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/interactive-product/library-icon-new.svg"
                        alt="Library"
                        width={15}
                        height={15}
                      />
                    </div>
                    <motion.span
                      className="text-[#a8a8a8] text-[14px] font-medium whitespace-nowrap overflow-hidden"
                      animate={{
                        opacity: sidebarOpen ? 1 : 0,
                        width: sidebarOpen ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Video Library
                    </motion.span>
                  </div>

                  {/* Explores */}
                  <div className="rounded-[8px] px-[10px] py-[6px] flex items-center gap-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
                    <div className="w-[23px] h-[23px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/interactive-product/explore-icon-new.svg"
                        alt="Explore"
                        width={21}
                        height={21}
                      />
                    </div>
                    <motion.span
                      className="text-[#a8a8a8] text-[14px] font-medium whitespace-nowrap overflow-hidden"
                      animate={{
                        opacity: sidebarOpen ? 1 : 0,
                        width: sidebarOpen ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Explores
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-[6px]">
                {/* Credits Section */}
                <div className="bg-[#131313] rounded-[9px] p-[7px]">
                  <div className="flex items-center gap-[8px] mb-[5px]">
                    <div className="h-[46px] w-[46px] relative flex-shrink-0">
                      <Image
                        src="/images/interactive-product/remaining-credits-icon.png"
                        alt="Credits"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <motion.div
                      className="flex flex-col gap-[8px] overflow-hidden"
                      animate={{
                        opacity: sidebarOpen ? 1 : 0,
                        width: sidebarOpen ? '178px' : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[#a6a6a6] text-[14px] whitespace-nowrap">45 % Credit left</span>
                      <div className="h-[4px] bg-[#333] rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-gradient-to-r from-[#27fda7] to-[#4f46e5] rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                  <motion.button
                    className="w-full bg-[#050505] rounded-[8px] px-[10px] py-[15px] text-[#d9d9d9] text-[14px] font-medium hover:bg-[rgba(255,255,255,0.05)] transition-colors overflow-hidden"
                    animate={{
                      opacity: sidebarOpen ? 1 : 0,
                      height: sidebarOpen ? 'auto' : 0,
                      padding: sidebarOpen ? '15px 10px' : '0px 10px',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Upgrade Now
                  </motion.button>
                </div>

                {/* User Info */}
                <div className="bg-[#131313] rounded-[8px] p-[12px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <div className="w-[35px] h-[35px] bg-[#411d73] rounded-[6px] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#d5d5d5] text-[14px] font-bold">AV</span>
                      </div>
                      <motion.div
                        className="overflow-hidden"
                        animate={{
                          opacity: sidebarOpen ? 1 : 0,
                          width: sidebarOpen ? '112px' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-white text-[14px] whitespace-nowrap">Aadith V A</p>
                        <p className="text-[#d5d5d5] text-[12px] truncate">aaadithachu@gmail.com</p>
                      </motion.div>
                    </div>
                    <motion.div
                      className="w-[16px] h-[15px]"
                      animate={{ opacity: sidebarOpen ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/images/interactive-product/settings-icon.svg"
                        alt="Settings"
                        width={16}
                        height={15}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1 relative rounded-[11px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/interactive-product/main-bg.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-[7px]">
              {/* Top Header */}
              <div className="bg-[rgba(0,0,0,0.59)] rounded-[6px] px-[17px] py-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[8px] opacity-70">
                  <div className="w-[23px] h-[23px] rounded-md overflow-hidden">
                    <Image
                      src="/images/interactive-product/header-user.svg"
                      alt="User"
                      width={23}
                      height={23}
                    />
                  </div>
                  <span className="text-[#f3f3f3] text-[12px] font-bold">Quenzy</span>
                </div>
                <button className="text-gray-400 hover:text-gray-200">
                  <Image
                    src="/images/interactive-product/header-menu.svg"
                    alt="Menu"
                    width={23}
                    height={24}
                  />
                </button>
              </div>

              {/* Center Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-[100px]">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-30 pointer-events-none">
                  <Image
                    src="/images/interactive-product/glow-effect.png"
                    alt=""
                    fill
                    className="object-contain mix-blend-screen"
                  />
                </div>

                <h3 className="text-white text-[62px] font-normal leading-[54px] mb-4 relative z-10" style={{ fontFamily: 'Didact Gothic, sans-serif' }}>
                  Hey Hari!
                </h3>
                <p className="text-[rgba(255,255,255,0.37)] text-[46px] leading-[54px] tracking-[-1.24px] relative z-10">
                  What are we creating today?
                </p>

                {/* Input Bar */}
                <div className="mt-[60px] relative z-10">
                  <div className="bg-[#171717] rounded-[14px] shadow-[0px_4px_17px_0px_rgba(0,0,0,0.17),inset_0px_4px_3px_0px_rgba(0,0,0,0.03)] h-[99px] flex items-center justify-between px-[12px]">
                    <div className="flex items-center gap-[6px]">
                      {/* Plus Button */}
                      <button
                        onClick={handleInteraction}
                        className="w-[23px] h-[23px] flex items-center justify-center hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src="/images/interactive-product/plus-icon.svg"
                          alt="Add"
                          width={23}
                          height={23}
                        />
                      </button>

                      {/* Create Tag */}
                      <div className="bg-[#111] rounded-[8px] px-[8px] py-[8px] flex items-center gap-[8px] h-[29px]">
                        <Image
                          src="/images/interactive-product/tag-create.svg"
                          alt="Create"
                          width={14}
                          height={14}
                        />
                        <span className="text-[#27fda7] text-[12px]">Create</span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-[8px] px-[8px]">
                        <Image
                          src="/images/interactive-product/tag-duration.svg"
                          alt="Duration"
                          width={14}
                          height={14}
                        />
                        <span className="text-[#9a9a9a] text-[14px]">30 sec</span>
                      </div>

                      <div className="h-[16px] w-px bg-[#333]" />

                      {/* Aspect Ratio */}
                      <div className="flex items-center gap-[8px] px-[8px]">
                        <Image
                          src="/images/interactive-product/tag-ratio.svg"
                          alt="Ratio"
                          width={16}
                          height={16}
                        />
                        <span className="text-[#9a9a9a] text-[14px]">9:16</span>
                      </div>

                      <div className="h-[16px] w-px bg-[#333]" />

                      {/* Style */}
                      <div className="flex items-center gap-[8px] px-[8px]">
                        <Image
                          src="/images/interactive-product/tag-style.svg"
                          alt="Style"
                          width={16}
                          height={16}
                        />
                        <span className="text-[#9a9a9a] text-[14px]">Cinematic</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-[6px]">
                      <button
                        onClick={handleInteraction}
                        className="w-[35px] h-[35px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.05)] rounded-full transition-colors"
                      >
                        <Mic className="w-[20px] h-[20px] text-gray-400" />
                      </button>
                      <button
                        onClick={handleInteraction}
                        className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <ArrowRight className="w-[20px] h-[20px] text-black rotate-[-90deg]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom spacer */}
              <div />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveProduct;

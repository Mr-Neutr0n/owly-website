'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, ArrowUp, Check } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

const InteractiveProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('30 sec');
  const [selectedRatio, setSelectedRatio] = useState('9:16');
  const [selectedStyle, setSelectedStyle] = useState('Cinematic');
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [showRatioDropdown, setShowRatioDropdown] = useState(false);
  const [showStyleDropdown, setShowStyleDropdown] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const durationRef = useRef<HTMLDivElement>(null);
  const ratioRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);

  const durations = ['15 sec', '20 sec', '25 sec', '30 sec', '45 sec', '60 sec'];
  const ratios = [
    { value: '9:16', label: '9:16', desc: 'Vertical (TikTok, Reels)' },
    { value: '16:9', label: '16:9', desc: 'Horizontal (YouTube)' },
    { value: '1:1', label: '1:1', desc: 'Square (Instagram)' },
    { value: '4:5', label: '4:5', desc: 'Portrait (Instagram)' },
    { value: '4:3', label: '4:3', desc: 'Standard' },
  ];
  const styles = ['Cinematic', 'Minimal', 'Bold', 'Playful', 'Corporate', 'Retro'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (durationRef.current && !durationRef.current.contains(e.target as Node)) {
        setShowDurationDropdown(false);
      }
      if (ratioRef.current && !ratioRef.current.contains(e.target as Node)) {
        setShowRatioDropdown(false);
      }
      if (styleRef.current && !styleRef.current.contains(e.target as Node)) {
        setShowStyleDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="bg-white">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-[68.6px] font-semibold leading-tight md:leading-[63.111px] tracking-[-2px] md:tracking-[-4.116px] text-[#0a0a0a] text-center mb-4">
              Try it yourself.
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl text-center">
              Experience the Owly workflow. Create stunning ad videos in minutes.
            </p>
          </div>
        }
      >
        {/* Interactive Product Container */}
        <div className="bg-black rounded-[14px] p-2 flex gap-[3px] w-full h-full overflow-hidden">
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
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-[50px] md:px-[100px]">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[300px] md:h-[400px] opacity-30 pointer-events-none">
                  <Image
                    src="/images/interactive-product/glow-effect.png"
                    alt=""
                    fill
                    className="object-contain mix-blend-screen"
                  />
                </div>

                <h3 className="text-white text-[32px] md:text-[48px] font-normal leading-[36px] md:leading-[42px] tracking-[-0.5px] md:tracking-[-0.96px] mb-3 relative z-10 font-didact">
                  Hey Guest!
                </h3>
                <p className="text-[rgba(255,255,255,0.37)] text-[24px] md:text-[36px] leading-[28px] md:leading-[42px] tracking-[-0.5px] md:tracking-[-0.72px] relative z-10 font-didact">
                  What are we Creating today?
                </p>

                {/* Input Bar - New Design */}
                <div className="mt-[30px] md:mt-[60px] relative z-10">
                  <div className="relative bg-[#181818] rounded-[15px] shadow-[0px_4px_18px_0px_rgba(0,0,0,0.17)] min-h-[90px] md:min-h-[106px] w-full max-w-[754px] mx-auto flex flex-col px-3 md:px-4 py-3">
                    <GlowingEffect
                      blur={0}
                      borderWidth={2}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={100}
                      inactiveZone={0.01}
                    />
                    {/* Text Input Area */}
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Describe your video idea..."
                      className="w-full bg-transparent text-white text-[14px] placeholder:text-[#6a6a6a] resize-none focus:outline-none min-h-[40px] max-h-[120px] mb-2"
                      rows={1}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 120) + 'px';
                      }}
                    />

                    {/* Bottom Controls - Anchored to bottom */}
                    <div className="flex items-center justify-between mt-auto">
                      {/* Left side - Plus and Create */}
                      <div className="flex items-center gap-2">
                        {/* Plus Icon */}
                        <button className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity">
                          <img
                            src="/images/input-bar/plus-icon.svg"
                            alt="Add"
                            className="w-6 h-6"
                            style={{ filter: 'brightness(0.85)' }}
                          />
                        </button>

                        {/* Create Tag */}
                        <div className="bg-[#111] rounded-lg px-2 py-1.5 flex items-center gap-2 h-[30px]">
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img
                              src="/images/input-bar/create-icon.svg"
                              alt="Create"
                              className="w-4 h-4"
                            />
                          </div>
                          <span className="text-[#27fda7] text-[12px] font-medium">Create</span>
                        </div>

                        {/* Divider and Options - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-1">
                          {/* Duration Dropdown */}
                          <div ref={durationRef} className="relative">
                            <button
                              onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <img
                                src="/images/input-bar/time-icon.svg"
                                alt="Duration"
                                className="w-[15px] h-[15px]"
                              />
                              <span className="text-[#9a9a9a] text-[14px]">{selectedDuration}</span>
                            </button>

                            {/* Duration Dropdown Menu */}
                            <AnimatePresence>
                              {showDurationDropdown && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute bottom-full left-0 mb-2 bg-[#222] rounded-lg shadow-xl border border-white/10 py-1 min-w-[120px] z-50"
                                >
                                  {durations.map((duration) => (
                                    <button
                                      key={duration}
                                      onClick={() => {
                                        setSelectedDuration(duration);
                                        setShowDurationDropdown(false);
                                      }}
                                      className={`w-full px-3 py-2 text-left text-[14px] hover:bg-white/10 transition-colors flex items-center justify-between ${
                                        selectedDuration === duration ? 'text-[#27fda7]' : 'text-white/70'
                                      }`}
                                    >
                                      {duration}
                                      {selectedDuration === duration && <Check className="w-4 h-4" />}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Separator */}
                          <div className="w-[1px] h-[17px] bg-white/20"></div>

                          {/* Aspect Ratio Dropdown */}
                          <div ref={ratioRef} className="relative">
                            <button
                              onClick={() => setShowRatioDropdown(!showRatioDropdown)}
                              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <img
                                src="/images/input-bar/aspect-ratio-icon.svg"
                                alt="Aspect Ratio"
                                className="w-4 h-4"
                              />
                              <span className="text-[#9a9a9a] text-[14px]">{selectedRatio}</span>
                            </button>

                            {/* Ratio Dropdown Menu */}
                            <AnimatePresence>
                              {showRatioDropdown && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute bottom-full left-0 mb-2 bg-[#222] rounded-lg shadow-xl border border-white/10 py-1 min-w-[180px] z-50"
                                >
                                  {ratios.map((ratio) => (
                                    <button
                                      key={ratio.value}
                                      onClick={() => {
                                        setSelectedRatio(ratio.value);
                                        setShowRatioDropdown(false);
                                      }}
                                      className={`w-full px-3 py-2 text-left hover:bg-white/10 transition-colors flex items-center justify-between ${
                                        selectedRatio === ratio.value ? 'text-[#27fda7]' : 'text-white/70'
                                      }`}
                                    >
                                      <div>
                                        <span className="text-[14px]">{ratio.label}</span>
                                        <span className="text-[11px] text-white/40 ml-2">{ratio.desc}</span>
                                      </div>
                                      {selectedRatio === ratio.value && <Check className="w-4 h-4" />}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Separator */}
                          <div className="w-[1px] h-[17px] bg-white/20"></div>

                          {/* Style Dropdown */}
                          <div ref={styleRef} className="relative">
                            <button
                              onClick={() => setShowStyleDropdown(!showStyleDropdown)}
                              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              <img
                                src="/images/input-bar/cinematic-icon.svg"
                                alt="Style"
                                className="w-[17px] h-[17px]"
                              />
                              <span className="text-[#9a9a9a] text-[14px]">{selectedStyle}</span>
                            </button>

                            {/* Style Dropdown Menu */}
                            <AnimatePresence>
                              {showStyleDropdown && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.15 }}
                                  className="absolute bottom-full left-0 mb-2 bg-[#222] rounded-lg shadow-xl border border-white/10 py-1 min-w-[140px] z-50"
                                >
                                  {styles.map((style) => (
                                    <button
                                      key={style}
                                      onClick={() => {
                                        setSelectedStyle(style);
                                        setShowStyleDropdown(false);
                                      }}
                                      className={`w-full px-3 py-2 text-left text-[14px] hover:bg-white/10 transition-colors flex items-center justify-between ${
                                        selectedStyle === style ? 'text-[#27fda7]' : 'text-white/70'
                                      }`}
                                    >
                                      {style}
                                      {selectedStyle === style && <Check className="w-4 h-4" />}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Mic and Send */}
                      <div className="flex items-center gap-2">
                        {/* Microphone */}
                        <button className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2"/>
                            <path d="M5 10V11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M12 18V22M12 22H8M12 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>

                        {/* Send Button */}
                        <button
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                            inputValue.trim() ? 'bg-white hover:bg-gray-200' : 'bg-white/20'
                          }`}
                          disabled={!inputValue.trim()}
                        >
                          <ArrowUp className={`w-5 h-5 ${inputValue.trim() ? 'text-black' : 'text-white/40'}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom spacer */}
              <div />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default InteractiveProduct;

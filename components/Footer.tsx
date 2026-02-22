'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DottedSurface } from './ui/DottedSurface';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Rectangle */}
      <div
        className="absolute bg-black inset-x-0 top-0 bottom-0 overflow-hidden"
        style={{
          width: 'calc(100% + 52px)',
          left: '-26px',
          borderRadius: '22.16px'
        }}
      >
        {/* Dotted Surface Animation - fixed height at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] overflow-hidden">
          <DottedSurface className="opacity-50" />
        </div>
      </div>

      <div className="relative min-h-[400px] md:min-h-[566px] px-6 md:px-[70px] py-12 md:py-[80px] flex flex-col">
        {/* Main Content - Flex Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20">
          {/* Left Section - Logo and Social */}
          <div className="flex flex-col gap-6">
            {/* Large OWLY Logo */}
            <div className="w-full max-w-[280px] md:max-w-[391px]">
              <Image
                src="/images/footer/owly-logo-large.svg"
                alt="Owly"
                width={391}
                height={119}
                className="w-full h-auto"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-4 md:mt-[40px]">
              {/* X (Twitter) */}
              <Link href="https://x.com" className="text-white hover:text-gray-300 transition-colors" aria-label="Owly on X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              {/* Discord */}
              <Link href="https://discord.com" className="text-white hover:text-gray-300 transition-colors" aria-label="Owly on Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com" className="text-white hover:text-gray-300 transition-colors" aria-label="Owly on LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Section - Services and Contact */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-[60px]">
            {/* Services */}
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h4 className="text-white font-semibold text-[15px] uppercase tracking-wide" style={{ fontFamily: 'Sono, monospace' }}>
                Services
              </h4>
              <div className="flex flex-col gap-2 md:gap-[10px] text-[#dbdbdb] text-[15px]">
                <Link href="/learn/ugc-video-ads" className="hover:text-white transition-colors">Content Inspiration</Link>
                <Link href="/features" className="hover:text-white transition-colors">Engagement</Link>
                <Link href="/blog/understanding-video-analytics" className="hover:text-white transition-colors">Analytics</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h4 className="text-white font-semibold text-[15px] uppercase tracking-wide" style={{ fontFamily: 'Sono, monospace' }}>
                Resources
              </h4>
              <div className="flex flex-col gap-2 md:gap-[10px] text-[#dbdbdb] text-[15px]">
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Link href="/learn/ugc-video-ads" className="hover:text-white transition-colors">Learn</Link>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>

            {/* Create */}
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h4 className="text-white font-semibold text-[15px] uppercase tracking-wide" style={{ fontFamily: 'Sono, monospace' }}>
                Create
              </h4>
              <div className="flex flex-col gap-2 md:gap-[10px] text-[#dbdbdb] text-[15px]">
                <Link href="/make/instagram-video-ads" className="hover:text-white transition-colors">Instagram Ads</Link>
                <Link href="/make/tiktok-video-ads" className="hover:text-white transition-colors">TikTok Ads</Link>
                <Link href="/tools/video-ad-script-generator" className="hover:text-white transition-colors">Script Generator</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h4 className="text-white font-semibold text-[15px] uppercase tracking-wide" style={{ fontFamily: 'Sono, monospace' }}>
                Contact
              </h4>
              <div className="flex flex-col gap-2 md:gap-[10px] text-[#dbdbdb] text-[15px]">
                <Link href="https://www.linkedin.com" className="hover:text-white transition-colors">LinkedIn</Link>
                <Link href="https://x.com" className="hover:text-white transition-colors">Twitter</Link>
                <Link href="https://instagram.com" className="hover:text-white transition-colors">Instagram</Link>
                <p className="mt-2 md:mt-[10px]">(123) 456 - 789</p>
                <p>Bangalore, India, 94102</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-[48px] mt-auto pt-10 md:pt-16 text-[#888888] text-[12px] uppercase text-center sm:text-left">
          <p>2025 Owly.Studio . All right reserved</p>
          <Link href="/privacy" className="hover:text-gray-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-500 transition-colors">Terms of services</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

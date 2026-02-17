"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="group relative inline-block overflow-hidden text-sm h-[20px]">
      <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-[20px]">
        <span className="text-gray-500 h-[20px] flex items-center">{children}</span>
        <span className="text-black h-[20px] flex items-center">{children}</span>
      </div>
    </Link>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Track if user has scrolled for backdrop blur effect
      setHasScrolled(currentScrollY > 50);

      // Always show navbar at the very top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDelta > 10) {
        // Only hide after scrolling down more than 10px
        setIsVisible(false);
      } else if (scrollDelta < -5) {
        // Show quickly on scroll up (5px threshold)
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinksData = [
    { label: 'Features', href: '/features' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const loginButtonElement = (
    <a href="/#contact" className="px-4 py-2 sm:px-4 text-xs sm:text-sm border border-[#e0e0e0] bg-transparent text-gray-600 rounded-full hover:border-black/50 hover:text-black transition-colors duration-200 w-full sm:w-auto text-center">
      Book a Demo
    </a>
  );

  const signupButtonElement = (
    <a href="https://app.owly.studio" className="px-4 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-colors duration-200 w-full sm:w-auto text-center">
      Try it free
    </a>
  );

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-400 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
      <header className={`flex flex-col items-center px-4 md:px-6 lg:px-8 py-[14px] w-full transition-all duration-300 ${hasScrolled ? 'backdrop-blur-md bg-white/95 border-b border-[#e5e5e5]' : 'bg-white'}`}>

      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/images/logo/owly-logo.svg"
            alt="Owly Logo"
            width={80}
            height={24}
            className="h-[24px] w-auto"
            priority
          />
        </Link>

        {/* Center-aligned nav links */}
        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm absolute left-1/2 -translate-x-1/2">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3 z-10">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-black transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navigation;

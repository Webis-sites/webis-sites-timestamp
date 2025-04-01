'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  // Refs for animation elements
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for headline
    if (headlineRef.current) {
      headlineRef.current.style.opacity = '0';
      headlineRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (headlineRef.current) {
          headlineRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          headlineRef.current.style.opacity = '1';
          headlineRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    }

    // Animation for subheadline
    if (subheadlineRef.current) {
      subheadlineRef.current.style.opacity = '0';
      subheadlineRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (subheadlineRef.current) {
          subheadlineRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          subheadlineRef.current.style.opacity = '1';
          subheadlineRef.current.style.transform = 'translateY(0)';
        }
      }, 600);
    }

    // Animation for CTA button
    if (ctaRef.current) {
      ctaRef.current.style.opacity = '0';
      ctaRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          ctaRef.current.style.opacity = '1';
          ctaRef.current.style.transform = 'translateY(0)';
        }
      }, 900);
    }

    // Animation for overlay
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0';
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.transition = 'opacity 1.2s ease-out';
          overlayRef.current.style.opacity = '0.6';
        }
      }, 100);
    }
  }, []);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden" 
      dir="rtl" 
      aria-label="סטודיו לצילום מוביל בישראל"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/photography-studio.jpg" // Replace with your actual image path
          alt="סטודיו לצילום מקצועי"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        {/* Gradient overlay for better text readability */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-end h-full text-white">
          <div className="max-w-2xl space-y-8 text-right">
            {/* Headline */}
            <h1 
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-[#D4A5A5]">סטודיו לצילום</span> מוביל בישראל
            </h1>
            
            {/* Subheadline */}
            <p 
              ref={subheadlineRef}
              className="text-xl md:text-2xl font-light text-gray-100 mt-4"
            >
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            {/* CTA Button */}
            <div className="mt-8">
              <button
                ref={ctaRef}
                onClick={handleCtaClick}
                className="px-8 py-4 bg-[#45B7D1] hover:bg-[#3da6be] text-white font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:ring-opacity-50"
                aria-label="קבע תור עכשיו לסטודיו הצילום"
              >
                קבע תור עכשיו
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Minimal Photography-related shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-[#D4A5A5] rounded-full opacity-60 z-10 hidden md:block" 
        style={{
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      <div className="absolute top-20 right-20 w-12 h-12 border-2 border-[#45B7D1] opacity-60 z-10 hidden md:block"
        style={{
          animation: 'float 4s ease-in-out infinite 1s'
        }}
      ></div>

      {/* Add animation keyframes via style tag */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
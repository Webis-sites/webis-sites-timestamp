'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Minimal animation effect on component mount
  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.style.opacity = '0';
      heroElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heroElement.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        heroElement.style.opacity = '1';
        heroElement.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      dir="rtl" 
      className={`relative min-h-[90vh] overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#45B7D1]/20 to-[#D4A5A5]/30 z-0"></div>
      
      {/* Decorative circles - glassmorphism elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#45B7D1]/20 backdrop-blur-md border border-white/20 shadow-lg z-0"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-[#D4A5A5]/20 backdrop-blur-md border border-white/20 shadow-lg z-0"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 text-right">
          <div className="backdrop-blur-sm bg-white/30 p-8 md:p-10 rounded-2xl border border-white/40 shadow-lg">
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight"
              style={{ fontFamily: 'var(--font-playful, sans-serif)' }}
            >
              חנות בגדים מוביל בישראל
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              חווית לקוח מושלמת בכל ביקור
            </p>
            
            <button 
              className="bg-[#45B7D1] hover:bg-[#3aa6c0] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </button>
          </div>
        </div>
        
        {/* Image container with glassmorphism effect */}
        <div className="w-full md:w-1/2 relative">
          <div className="backdrop-blur-md bg-white/20 p-3 rounded-2xl border border-white/30 shadow-xl overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/tech-clothing-image.jpg" // Replace with your actual image path
                alt="בגדים בסגנון טכנולוגי מודרני"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              
              {/* Overlay with brand name */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#45B7D1]/60 to-transparent">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-playful, sans-serif)' }}>
                  חנות בגדים ביתא
                </h2>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[#D4A5A5]/40 backdrop-blur-sm border border-white/20 shadow-lg z-0"></div>
        </div>
      </div>
      
      {/* Floating elements for added depth */}
      <div className="absolute top-[30%] left-[15%] w-16 h-16 rounded-full bg-[#45B7D1]/30 backdrop-blur-sm border border-white/20 shadow-md"></div>
      <div className="absolute bottom-[20%] right-[20%] w-24 h-24 rounded-full bg-[#D4A5A5]/30 backdrop-blur-sm border border-white/20 shadow-md"></div>
    </section>
  );
};

export default HeroSection;
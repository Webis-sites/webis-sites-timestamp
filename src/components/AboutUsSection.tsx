'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = '' }) => {
  // Refs for animation elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInElements = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    const observer = new IntersectionObserver(fadeInElements, observerOptions);
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      dir="rtl" 
      className={`py-16 md:py-24 bg-white overflow-hidden ${className}`}
      aria-labelledby="about-us-title"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 
              id="about-us-title"
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-6 text-[#D4A5A5] opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
              אודות סטודיו לצילום דלתא
            </h2>
            
            <div 
              ref={descriptionRef}
              className="space-y-4 opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                אנחנו סטודיו לצילום מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                הצוות המקצועי שלנו מורכב מצלמים מנוסים בעלי עין אומנותית וידע טכני מעמיק, המחויבים להפיק תמונות באיכות הגבוהה ביותר.
              </p>
              
              <div className="pt-4">
                <span className="inline-block h-1 w-12 bg-[#45B7D1] mb-2 rounded-full"></span>
                <span className="inline-block h-1 w-24 bg-[#D4A5A5] mr-1 rounded-full"></span>
              </div>
              
              <div className="pt-6">
                <button className="bg-[#45B7D1] hover:bg-[#3da6be] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50">
                  צור קשר
                </button>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div 
            ref={imageRef}
            className="order-1 md:order-2 opacity-0 translate-y-10 transition-all duration-700 delay-400 ease-out"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/studio-equipment.jpg" // Replace with your actual image path
                alt="ציוד צילום מקצועי בסטודיו דלתא"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D4A5A5] opacity-30 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#45B7D1] opacity-30 rounded-full"></div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { number: '+15', label: 'שנות ניסיון' },
            { number: '+500', label: 'פרויקטים' },
            { number: '+200', label: 'לקוחות מרוצים' },
            { number: '+50', label: 'פרסים' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-gray-50 shadow-sm transform transition-all duration-500 hover:shadow-md hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-[#45B7D1]">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
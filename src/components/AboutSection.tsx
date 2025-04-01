'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 md:py-24 overflow-hidden transition-all duration-1000 ease-out opacity-0 translate-y-10 ${className}`}
      dir="rtl"
      aria-labelledby="about-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#45B7D1]/20 to-[#D4A5A5]/20 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#45B7D1]/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#D4A5A5]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Glassmorphism card */}
          <div className="backdrop-blur-md bg-white/30 rounded-2xl p-8 md:p-12 border border-white/20 shadow-lg relative overflow-hidden">
            {/* Inner decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#45B7D1]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4A5A5]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image container */}
              <div className="w-full lg:w-2/5 relative">
                <div className="aspect-square relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg">
                  <Image
                    src="/images/tech-clothing-store.jpg" 
                    alt="חנות בגדים ביתא - חנות בגדי טכנולוגיה מובילה"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Fallback in case the image doesn't load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#45B7D1]/50 to-[#D4A5A5]/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content container */}
              <div className="w-full lg:w-3/5">
                <h2 
                  id="about-heading"
                  className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#45B7D1] to-[#D4A5A5] font-display"
                >
                  אודות חנות בגדים ביתא
                </h2>
                
                <div className="space-y-4 text-gray-800">
                  <p className="text-lg leading-relaxed">
                    אנחנו בחנות בגדים ביתא גאים להיות מובילים בתחום בגדי הטכנולוגיה עם ניסיון של שנים רבות. המומחיות שלנו היא במתן שירות מקצועי ואיכותי לכל לקוחותינו.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    כחנות המתמחה בעולם הטכנולוגיה, אנחנו מציעים מגוון רחב של בגדים חדשניים המשלבים אלמנטים טכנולוגיים עם עיצוב מודרני ונוח. מהחולצות החכמות ועד לאביזרים המשלימים - כל מוצר נבחר בקפידה כדי להתאים לסגנון החיים הדיגיטלי של היום.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    הצוות המקצועי שלנו תמיד זמין לענות על שאלות, לתת המלצות אישיות ולהבטיח שתקבלו את החוויה הטובה ביותר בכל ביקור בחנות.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                    <span className="text-[#45B7D1]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>איכות מעולה</span>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                    <span className="text-[#45B7D1]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>חדשנות טכנולוגית</span>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-sm flex items-center gap-2">
                    <span className="text-[#45B7D1]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>שירות אישי</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
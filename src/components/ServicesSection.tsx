'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define types for service items
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// SVG Icons as React components
const TailoringIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ConsultationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const TechClothingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const FabricIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const ServicesSection: React.FC = () => {
  // Services data in Hebrew
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "תפירה מותאמת אישית",
      description: "שירות תפירה מקצועי המותאם למידותיך המדויקות, עם אפשרות לבחירת בדים וסגנונות ייחודיים.",
      icon: <TailoringIcon />,
    },
    {
      id: 2,
      title: "ייעוץ סטייל",
      description: "פגישות אישיות עם מעצבי אופנה מקצועיים שיעזרו לך למצוא את הסגנון המושלם עבורך.",
      icon: <ConsultationIcon />,
    },
    {
      id: 3,
      title: "ביגוד בהשראת טכנולוגיה",
      description: "קולקציה ייחודית של בגדים בהשראת עולם הטכנולוגיה, עם עיצובים חדשניים ופונקציונליים.",
      icon: <TechClothingIcon />,
    },
    {
      id: 4,
      title: "בדים איכותיים",
      description: "מבחר רחב של בדים איכותיים מהספקים המובילים בעולם, עם דגש על נוחות ועמידות לאורך זמן.",
      icon: <FabricIcon />,
    },
  ];

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#f0f9fb] to-[#f9f0f0] dir-rtl"
      style={{ direction: 'rtl' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333] relative inline-block">
            <span className="relative z-10">השירותים שלנו</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#45B7D1] opacity-30 -z-10"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            חנות בגדים ביתא מציעה מגוון שירותים מקצועיים כדי להבטיח שתקבלו את החוויה הטובה ביותר
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#45B7D1]/20 to-[#D4A5A5]/20 backdrop-blur-[8px] -z-10"></div>
              <div className="border border-white/20 bg-white/30 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#45B7D1]/10 hover:translate-y-[-5px]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#45B7D1] bg-white/50 border border-[#45B7D1]/20 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#333]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-auto pt-4">
                  <button className="text-[#45B7D1] font-medium hover:text-[#D4A5A5] transition-colors duration-300 flex items-center">
                    <span>קרא עוד</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
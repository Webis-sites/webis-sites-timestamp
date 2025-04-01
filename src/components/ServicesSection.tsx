'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define types for our services
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Services data
const services: Service[] = [
  {
    id: 1,
    title: 'צילום פורטרטים',
    description: 'צילומי פורטרט מקצועיים המדגישים את האישיות והייחודיות של כל אדם',
    icon: '/icons/portrait.svg',
  },
  {
    id: 2,
    title: 'צילום מוצרים',
    description: 'צילומי מוצר באיכות גבוהה המציגים את המוצרים שלך בצורה הטובה ביותר',
    icon: '/icons/product.svg',
  },
  {
    id: 3,
    title: 'צילום אירועים',
    description: 'הנצחת רגעים מיוחדים באירועים שלך עם צילומים מקצועיים ואיכותיים',
    icon: '/icons/event.svg',
  },
  {
    id: 4,
    title: 'צילום תאגידי',
    description: 'צילומים מקצועיים לעסקים, כולל תמונות פרופיל, צילומי צוות ואווירה משרדית',
    icon: '/icons/corporate.svg',
  },
  {
    id: 5,
    title: 'צילומי נוף וארכיטקטורה',
    description: 'צילומי נוף מרהיבים ותיעוד מבנים ארכיטקטוניים בזוויות ייחודיות',
    icon: '/icons/architecture.svg',
  },
  {
    id: 6,
    title: 'צילומי משפחה',
    description: 'הנצחת רגעים משפחתיים מיוחדים בצילומים איכותיים שיישארו למזכרת לדורות',
    icon: '/icons/family.svg',
  },
];

// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dir-rtl" id="services">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundColor: '#D4A5A5' }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            אנו מציעים מגוון רחב של שירותי צילום מקצועיים המותאמים לצרכים הייחודיים של כל לקוח
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(212, 165, 165, 0.15)' }}
              >
                {/* Placeholder for icon - in a real implementation, you would use actual SVG icons */}
                <div className="w-8 h-8 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                    className="text-primary"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <button 
                className="text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#45B7D1' }}
                aria-label={`קרא עוד על ${service.title}`}
              >
                קרא עוד
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
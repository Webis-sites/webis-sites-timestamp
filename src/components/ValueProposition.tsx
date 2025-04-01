'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="flex flex-col items-end p-6 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#45B7D1]/10 to-[#D4A5A5]/10 -z-10"></div>
      <div className="text-[#45B7D1] text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-right text-gray-800">{title}</h3>
      <p className="text-right text-gray-600">{description}</p>
    </motion.div>
  );
};

const ValueProposition: FC = () => {
  const features: FeatureProps[] = [
    {
      icon: '✨',
      title: 'חומרים איכותיים',
      description: 'אנו בוחרים רק את החומרים הטובים ביותר כדי להבטיח שהבגדים שלנו נוחים, עמידים ומסוגננים.'
    },
    {
      icon: '👔',
      title: 'שירות מקצועי',
      description: 'הצוות המיומן שלנו מוכן תמיד לעזור לך למצוא את הפריטים המושלמים שיתאימו לסגנון האישי שלך.'
    },
    {
      icon: '🏆',
      title: 'ניסיון רב שנים',
      description: 'עם שנים רבות בתעשייה, צברנו את הידע והמומחיות כדי להציע לך את החוויה הטובה ביותר.'
    },
    {
      icon: '❤️',
      title: 'שביעות רצון לקוחות',
      description: 'הלקוחות שלנו הם העדיפות הראשונה שלנו, ואנו עושים הכל כדי להבטיח שתהיו מרוצים מהקנייה שלכם.'
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden" dir="rtl">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#45B7D1]/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4A5A5]/20 blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            למה לבחור ב<span className="text-[#45B7D1]">חנות בגדים ביתא</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            אנחנו מציעים לכם את המוצרים האיכותיים ביותר עם שירות מעולה שיעלה על כל הציפיות שלכם
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
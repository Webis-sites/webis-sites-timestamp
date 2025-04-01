import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaStore } from 'react-icons/fa';

interface BusinessHour {
  day: string;
  hours: string;
}

interface LocationSectionProps {
  address: string;
  phone: string;
  email: string;
  businessHours: BusinessHour[];
  mapUrl?: string;
  storeName: string;
}

/**
 * LocationSection Component
 * 
 * A responsive location section for a clothing store with RTL support,
 * featuring glassmorphism design style with transparent elements,
 * subtle shadows, and gradients.
 */
const LocationSection: React.FC<LocationSectionProps> = ({
  address,
  phone,
  email,
  businessHours,
  mapUrl = "https://via.placeholder.com/600x300?text=מפה",
  storeName,
}) => {
  return (
    <section 
      className="py-16 px-4 md:px-8 relative overflow-hidden rtl" 
      dir="rtl"
      aria-labelledby="location-title"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#45B7D1]/20 to-[#D4A5A5]/30 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#45B7D1]/20 blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#D4A5A5]/20 blur-3xl -z-5"></div>
      
      <div className="max-w-7xl mx-auto">
        <h2 
          id="location-title" 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 font-['Rubik','sans-serif']"
        >
          המיקום שלנו
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map and Image Container */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* Map Container with glassmorphism */}
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
              <Image
                src={mapUrl}
                alt="מפת המיקום של החנות"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#45B7D1]/40 to-transparent opacity-60"></div>
            </div>
            
            {/* Store Image */}
            <div className="relative h-[200px] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/30 border border-white/40 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <FaStore className="text-8xl text-[#45B7D1]/70" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#45B7D1]/70 py-3 px-4 text-white text-center font-medium">
                {storeName}
              </div>
            </div>
          </div>
          
          {/* Contact Information Container */}
          <div className="order-1 lg:order-2 backdrop-blur-md bg-white/40 rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-[#45B7D1] font-['Rubik','sans-serif']">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 transition-transform hover:translate-x-2 duration-300">
                <div className="bg-[#45B7D1] p-3 rounded-full shadow-md">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">כתובת</h4>
                  <p className="text-gray-700">{address}</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4 transition-transform hover:translate-x-2 duration-300">
                <div className="bg-[#D4A5A5] p-3 rounded-full shadow-md">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">טלפון</h4>
                  <p className="text-gray-700 hover:text-[#45B7D1] transition-colors">
                    <a href={`tel:${phone}`} aria-label="מספר טלפון">{phone}</a>
                  </p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4 transition-transform hover:translate-x-2 duration-300">
                <div className="bg-[#45B7D1] p-3 rounded-full shadow-md">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">דוא"ל</h4>
                  <p className="text-gray-700 hover:text-[#45B7D1] transition-colors">
                    <a href={`mailto:${email}`} aria-label="כתובת אימייל">{email}</a>
                  </p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#D4A5A5] p-3 rounded-full shadow-md">
                  <FaClock className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">שעות פעילות</h4>
                  <div className="space-y-2">
                    {businessHours.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                      >
                        <span className="font-medium text-gray-800">{item.day}</span>
                        <span className="text-gray-700">{item.hours}</span>
                      </div>
                    ))}
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

export default LocationSection;

// Example usage:
export const LocationSectionExample = () => {
  const businessHours: BusinessHour[] = [
    { day: "ראשון - חמישי", hours: "09:00 - 21:00" },
    { day: "שישי", hours: "09:00 - 14:00" },
    { day: "שבת", hours: "סגור" },
  ];

  return (
    <LocationSection
      storeName="חנות בגדים ביתא"
      address="רחוב הרצל 123, תל אביב"
      phone="03-1234567"
      email="contact@betagarments.co.il"
      businessHours={businessHours}
    />
  );
};
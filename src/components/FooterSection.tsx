import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface FooterLinkProps {
  href: string;
  label: string;
}

interface FooterSectionProps {
  businessName?: string;
  year?: number;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li className="mb-2">
      <Link 
        href={href}
        className="text-white hover:text-gray-200 transition duration-300 text-base font-medium"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ 
  href, 
  icon,
  label 
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mx-2 text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterSection: React.FC<FooterSectionProps> = ({ 
  businessName = 'חנות בגדים ביתא',
  year = new Date().getFullYear() 
}) => {
  return (
    <footer dir="rtl" className="relative overflow-hidden font-sans">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#45B7D1]/30 to-[#D4A5A5]/40 -z-10"></div>
      
      {/* Glassmorphism container */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description section */}
            <div className="md:col-span-1">
              <div className="flex flex-col items-end">
                <div className="relative h-16 w-40 mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="h-full w-full bg-gradient-to-r from-[#45B7D1] to-[#D4A5A5] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {businessName}
                  </div>
                </div>
                <p className="text-white text-sm leading-relaxed text-right">
                  אנחנו חנות בגדים מוביל בתחום המזון עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-4 text-right">ניווט מהיר</h3>
              <ul className="text-right">
                <FooterLink href="/" label="בית" />
                <FooterLink href="/about" label="אודות" />
                <FooterLink href="/services" label="שירותים" />
                <FooterLink href="/contact" label="צור קשר" />
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-4 text-right">השירותים שלנו</h3>
              <ul className="text-right">
                <FooterLink href="/services/clothing" label="בגדי יוקרה" />
                <FooterLink href="/services/accessories" label="אקססוריז" />
                <FooterLink href="/services/shoes" label="נעליים" />
                <FooterLink href="/services/custom" label="הזמנות מיוחדות" />
              </ul>
            </div>

            {/* Contact information */}
            <div className="md:col-span-1">
              <h3 className="text-white text-xl font-bold mb-4 text-right">צור קשר</h3>
              <div className="text-white text-right">
                <p className="mb-2">רחוב הטכנולוגיה 123, תל אביב</p>
                <p className="mb-2">טלפון: 03-1234567</p>
                <p className="mb-2">דוא"ל: info@clothingbeta.co.il</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 my-8"></div>

          {/* Bottom section with social and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 order-2 md:order-1">
              <p className="text-white text-sm">
                &copy; {year} {businessName}. כל הזכויות שמורות.
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex order-1 md:order-2 mb-4 md:mb-0">
              <SocialIcon 
                href="https://facebook.com" 
                icon={<FaFacebook size={24} />} 
                label="פייסבוק"
              />
              <SocialIcon 
                href="https://twitter.com" 
                icon={<FaTwitter size={24} />} 
                label="טוויטר"
              />
              <SocialIcon 
                href="https://instagram.com" 
                icon={<FaInstagram size={24} />} 
                label="אינסטגרם"
              />
              <SocialIcon 
                href="https://linkedin.com" 
                icon={<FaLinkedin size={24} />} 
                label="לינקדאין"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
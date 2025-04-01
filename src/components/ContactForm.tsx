'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'נא למלא את השם';
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא למלא את מספר הטלפון';
    } else if (!/^[0-9]{9,10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'נא למלא את האימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'נא למלא את ההודעה';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      
      setIsSubmitted(true);
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden p-6 md:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-md border border-white/20 shadow-lg" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#45B7D1]/30 to-[#45B7D1]/10 blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-[#D4A5A5]/30 to-[#D4A5A5]/10 blur-xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-right text-gray-800">צור קשר</h2>
        <p className="text-lg mb-6 text-gray-600 leading-relaxed">
          לקוחות יקרים, מוזמנים ליצור איתנו קשר לכל שאלה, בקשה או קביעת פגישה. צוות חנות בגדים ביתא ישמח לעמוד לשירותכם!
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold text-green-800 mb-2">תודה על פנייתך!</h3>
            <p className="text-green-700">הודעתך התקבלה בהצלחה. ניצור איתך קשר בהקדם.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                שם מלא <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border ${
                  errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#45B7D1]'
                } focus:outline-none transition-colors duration-200`}
                placeholder="הכנס את שמך המלא"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                טלפון <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border ${
                  errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#45B7D1]'
                } focus:outline-none transition-colors duration-200`}
                placeholder="הכנס את מספר הטלפון שלך"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.phone}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                אימייל <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border ${
                  errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#45B7D1]'
                } focus:outline-none transition-colors duration-200`}
                placeholder="הכנס את כתובת האימייל שלך"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                הודעה <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border ${
                  errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[#45B7D1]'
                } focus:outline-none transition-colors duration-200`}
                placeholder="כתוב את הודעתך כאן..."
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.message}
                </p>
              )}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-[#45B7D1] hover:bg-[#3aa0b9] text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    שולח...
                  </span>
                ) : (
                  'שלח'
                )}
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>03-1234567</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@clothingstore.co.il</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// Add these custom animations to your global CSS file:
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
*/
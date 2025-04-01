'use client';

import ContactForm from '../components/ContactForm';

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">ברוכים הבאים</h1>
      {/* רכיבים */}
      <ContactForm />
      
    </main>
  );
}

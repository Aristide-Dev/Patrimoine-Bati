import React from 'react';
import Header from '@/Components/Header';
import Hero from '@/Components/Home/Hero';
// import NewsSection from '@/Components/Home/NewsSection';
import Footer from '@/Components/Footer';
import BackToTop from '@/Components/BackToTop';

export default function AppLayout({header, children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};
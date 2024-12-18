import React from 'react';
import Header from '@/Components/Header';
import Hero from '@/Components/Home/Hero';
import NewsSection from '@/Components/Home/NewsSection';
import Footer from '@/Components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
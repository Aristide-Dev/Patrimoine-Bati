import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import BackToTop from '@/Components/BackToTop';

export default function AppLayout({ children }) {
  const { flash } = usePage().props;
  const [showFlash, setShowFlash] = useState(!!flash.message);

  useEffect(() => {
    if (flash.message) {
      const timer = setTimeout(() => setShowFlash(false), 5000); // 5 secondes
      return () => clearTimeout(timer); // Nettoyage si le composant est démonté
    }
  }, [flash.message]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Flash Messages */}
      {showFlash && flash.message && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 py-4 text-white text-center transition-opacity duration-300 ${
            flash.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {flash.message}
        </div>
      )}

      <main className="flex-grow">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import MobileNav from '@/Components/Menu/MobileNav';

export default function AppLayout({ children }) {
  const { flash } = usePage().props;
  const [state, setState] = useState({
    showFlash: !!flash.message,
    showBackToTop: false,
    isMobileNavOpen: false,
    isScrolled: false
  });

  const updateState = (updates) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    const handleScroll = () => {
      updateState({
        showBackToTop: window.scrollY > 400,
        isScrolled: window.scrollY > 0
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (flash.message) {
      updateState({ showFlash: true });
      const timer = setTimeout(() => updateState({ showFlash: false }), 5000);
      return () => clearTimeout(timer);
    }
  }, [flash.message]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileNav = () => {
    updateState({ isMobileNavOpen: !state.isMobileNavOpen });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header onMobileNavToggle={toggleMobileNav} />

      {/* Menu Mobile */}
      <MobileNav 
        isOpen={state.isMobileNavOpen} 
        onClose={() => updateState({ isMobileNavOpen: false })} 
      />

      {/* Messages Flash */}
      {state.showFlash && flash.message && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slideDown">
          <div className={`max-w-md mx-auto m-4 p-4 rounded-lg shadow-lg ${
            flash.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
            <p>{flash.message}</p>
          </div>
        </div>
      )}

      {/* Contenu Principal */}
      <main className="flex-grow pt-28">
        {children}
      </main>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ${
          state.showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Footer */}
      <Footer />
    </div>
  );
}

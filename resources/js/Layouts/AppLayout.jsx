import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { ArrowUp, X, Bell, Menu } from 'lucide-react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function AppLayout({ children }) {
  const { flash } = usePage().props;
  const [state, setState] = useState({
    showFlash: !!flash.message,
    showBackToTop: false,
    isMobileMenuOpen: false,
    notifications: [],
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Flash Messages */}
      {state.showFlash && flash.message && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slideDown">
          <div className={`max-w-md mx-auto m-4 p-4 rounded-lg shadow-lg ${
            flash.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
            <div className="flex items-center justify-between">
              <p>{flash.message}</p>
              <button
                onClick={() => updateState({ showFlash: false })}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow pt-20 mt-14">
        {children}
      </main>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 ${
          state.showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Footer */}
      
      <Footer />
      {/* <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">À propos</h3>
              <p className="text-gray-400">
                MAMRI œuvre pour le développement territorial et la gouvernance locale en République de Guinée.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@mamri.gov.gn</li>
                <li>+224 99 99 99 99</li>
                <li>Conakry, Guinée</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MAMRI - Tous droits réservés</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

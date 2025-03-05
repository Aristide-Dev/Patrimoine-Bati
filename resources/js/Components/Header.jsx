import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TopBar } from './TopBar';
import { DesktopNav } from '@/Components/Menu/DesktopNav';
import { MobileNav } from '@/Components/Menu/MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(currentScrollPos < 10 || !isScrollingDown);
      setIsScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header 
        className={`fixed w-full transition-all duration-500 ease-in-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled ? 'bg-gradient-to-r from-primary-900 to-primary-800 shadow-xl' : 'bg-gradient-to-r from-primary-800/95 to-primary-700/95 backdrop-blur-md'}
          ${isMenuOpen ? 'z-50' : 'z-30'}
        `}
      >
        <div 
          className={`w-full transition-all duration-500 ease-in-out
            ${isScrolled && !isMenuOpen ? 'opacity-0 h-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'}
          `}
        >
          <TopBar />
        </div>

        <div className="relative mx-auto px-4 container">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled && !isMenuOpen ? 'py-3' : 'py-4'}`}>
            <a 
              href="/" 
              className="flex items-center group relative overflow-hidden rounded-xl"
              aria-label="Retour à l'accueil"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/images/logo/logo-pbp.png" 
                  alt="Logo PBP" 
                  className={`transition-all duration-300 transform group-hover:scale-105
                    ${isScrolled && !isMenuOpen ? 'h-12 w-auto' : 'h-16 w-auto'}
                  `}
                />
              </div>
            </a>

            <DesktopNav />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative z-50 p-2.5 rounded-lg 
                transition-all duration-300 ease-in-out
                ${isMenuOpen 
                  ? 'bg-white text-primary-800 hover:bg-gray-100 shadow-lg' 
                  : 'hover:bg-white/15 text-white'}
                transform hover:scale-105 active:scale-95
              `}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <X 
                  className={`absolute inset-0 transition-all duration-300
                    ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}
                  `} 
                />
                <Menu 
                  className={`absolute inset-0 transition-all duration-300
                    ${isMenuOpen ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
                  `} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay amélioré pour le menu mobile */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 md:hidden
          ${isMenuOpen 
            ? 'opacity-100 visible z-40' 
            : 'opacity-0 invisible -z-10'}
        `}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <MobileNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
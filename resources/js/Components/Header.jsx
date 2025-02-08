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

  // Gestion du scroll pour masquer/afficher le header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      setVisible(currentScrollPos < 10 || !isScrollingDown);
      setIsScrolled(currentScrollPos > 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Désactiver le scroll quand le menu mobile est ouvert
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

  // Gérer la fermeture du menu avec la touche Escape
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-gradient-to-r from-primary to-primary-800 shadow-2xl' : 'bg-gradient-to-r from-primary/95 to-primary-800/95 backdrop-blur-sm'}
      `}
    >
      <div 
        className={`w-full transition-all duration-300 ease-in-out
          ${isScrolled ? 'opacity-0 h-0' : 'opacity-100'}
        `}
      >
        <TopBar />
      </div>

      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between py-3 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <a 
            href="/" 
            className="flex items-center group relative overflow-hidden rounded-lg"
            aria-label="Retour à l'accueil"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src="/images/logo/logo-pbp.png" 
              alt="Logo PBP" 
              className={`transition-all duration-300 transform group-hover:scale-105
                ${isScrolled ? 'h-12 w-32' : 'h-16 w-36'}
              `}
            />
          </a>

          <DesktopNav />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'bg-white text-primary' : 'hover:bg-white/10 text-white'}
            `}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <X 
                className={`absolute inset-0 transition-all duration-300
                  ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}
                `} 
              />
              <Menu 
                className={`absolute inset-0 transition-all duration-300
                  ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}
                `} 
              />
            </div>
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <MobileNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
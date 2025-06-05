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
        className={`fixed w-full transition-all duration-700 ease-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled 
            ? 'bg-gradient-to-r from-primary-900/95 via-primary-800/95 to-primary-700/95 shadow-2xl border-b border-white/10' 
            : 'bg-gradient-to-r from-primary-800/90 via-primary-700/90 to-primary-600/90 backdrop-blur-xl'}
          ${isMenuOpen ? 'z-50' : 'z-30'}
          backdrop-blur-xl backdrop-saturate-150
        `}
        style={{
          background: isScrolled && !isMenuOpen 
            ? 'linear-gradient(135deg, rgba(var(--primary-900), 0.95) 0%, rgba(var(--primary-800), 0.98) 50%, rgba(var(--primary-700), 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(var(--primary-800), 0.9) 0%, rgba(var(--primary-700), 0.92) 30%, rgba(var(--primary-600), 0.9) 100%)'
        }}
      >
        {/* Effet de brillance subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-900 to-primary-700" />
        
        {/* Bordure lumineuse en bas */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-60'}`} />

        <div 
          className={`w-full transition-all duration-700 ease-out overflow-hidden
            ${isScrolled && !isMenuOpen 
              ? 'opacity-0 h-0 transform -translate-y-full scale-95' 
              : 'opacity-100 transform translate-y-0 scale-100'}
          `}
        >
          <div className="relative">
            <TopBar />
            {/* Ligne de séparation avec effet de dégradé */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        <div className="w-full px-4 container">
          <div className={`flex items-center justify-between transition-all duration-500 ease-out
            ${isScrolled && !isMenuOpen ? 'py-3' : 'py-4'}
          `}>
            {/* Logo avec effets améliorés */}
            <a 
              href="/" 
              className="flex items-center group relative overflow-hidden rounded-2xl p-2 -m-2"
              aria-label="Retour à l'accueil"
            >
              {/* Effet de hover avec glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl backdrop-blur-sm border border-white/10" />
              
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded-2xl transform -skew-x-12 group-hover:animate-pulse" />
              
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/images/logo/logo-pbp.png" 
                  alt="Logo PBP" 
                  className={`transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:brightness-110
                    ${isScrolled && !isMenuOpen ? 'h-12 w-auto' : 'h-16 w-auto'}
                    filter drop-shadow-lg
                  `}
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) brightness(1.05)'
                  }}
                />
              </div>
            </a>

            {/* Navigation desktop avec wrapper pour les effets */}
            <div className="hidden md:block relative">
              <DesktopNav />
            </div>

            {/* Bouton menu mobile amélioré */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative z-50 p-3 rounded-2xl 
                transition-all duration-500 ease-out
                ${isMenuOpen 
                  ? 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-primary-800 hover:from-gray-50 hover:to-white shadow-2xl border border-white/50' 
                  : 'hover:bg-gradient-to-br hover:from-white/20 hover:via-white/15 hover:to-white/10 text-white border border-white/10 hover:border-white/30 backdrop-blur-sm'}
                transform hover:scale-110 active:scale-95 hover:rotate-3 active:rotate-0
                shadow-lg hover:shadow-2xl
              `}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              {/* Effet de brillance pour le bouton */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative w-6 h-6">
                <X 
                  className={`absolute inset-0 transition-all duration-400 ease-out
                    ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'}
                  `} 
                />
                <Menu 
                  className={`absolute inset-0 transition-all duration-400 ease-out
                    ${isMenuOpen ? 'opacity-0 -rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'}
                  `} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Effet de particules subtil */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft glowing particles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`glow-${i}`}
              className={`absolute rounded-full bg-white/10 animate-ping`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 10 + 4}px`,
                animationDelay: `${i * 500}ms`,
              }}
            />
          ))}

          {/* Pulse points */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`pulse-${i}`}
              className="absolute w-3 h-3 bg-white/20 rounded-full animate-pulse"
              style={{
                top: `${30 + i * 20}%`,
                right: `${10 + i * 5}%`,
                animationDelay: `${1000 + i * 700}ms`,
              }}
            />
          ))}

          {/* Bounce orbits */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`bounce-${i}`}
              className="absolute w-3 h-3 bg-white/15 rounded-full animate-bounce"
              style={{
                top: `${50 + (i % 2 === 0 ? -10 : 10)}%`,
                left: `${25 + i * 10}%`,
                animationDelay: `${1500 + i * 300}ms`,
              }}
            />
          ))}
        </div>
      </header>

      {/* Overlay amélioré avec effet de flou dynamique */}
      <div 
        className={`fixed inset-0 transition-all duration-700 ease-out md:hidden
          ${isMenuOpen 
            ? 'opacity-100 visible z-40 backdrop-blur-md bg-gradient-to-br from-black/70 via-black/60 to-black/50' 
            : 'opacity-0 invisible -z-10 backdrop-blur-none bg-black/0'}
        `}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      >
        {/* Effet de grain subtil */}
        <div className="absolute inset-0 opacity-20 bg-noise mix-blend-soft-light" />
      </div>

      <MobileNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Styles pour les animations personnalisées */}
      <style>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
};

export default Header;
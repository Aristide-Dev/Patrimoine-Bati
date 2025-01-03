import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TopBar } from './TopBar';
import { Logo } from './Logo';
import { DesktopNav } from '@/Components/Menu/DesktopNav';
import { MobileNav } from '@/Components/Menu/MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-primary to-primary-800 shadow-md">
      <TopBar />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <DesktopNav />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-primary-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <MobileNav isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
import { Link, usePage } from '@inertiajs/react';
import { useState, useRef } from 'react';

import { Menu, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { mainMenuItems } from './MenuItems';

export default function Header({ onMobileMenuToggle, setContactOpen, setDownloadOpen }) {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const isActiveRoute = (routeName) => routeName ?? route().current(routeName);

  const getLinkClasses = (active) =>
    `relative text-base font-medium transition-colors duration-200 hover:text-primary group ${active ? 'text-primary' : 'text-gray-700'
    }`;

  const getDropdownLinkClasses = (active) =>
    `block w-full px-4 py-2 text-sm transition-colors duration-200 ${active
      ? 'bg-primary/10 text-primary font-medium'
      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
    }`;

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleFocus = (menu) => {
    setOpenDropdown(menu);
  };

  const handleBlur = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed w-full top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top Navigation">
        <div className="w-full py-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex flex-row gap-0">
              <img
                className="h-8 w-auto"
                src="/images/logo/brandingGn.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Bouton Télécharger & Contact */}
          <div className="flex ml-10 space-x-4">
            <button
              onClick={() => setDownloadOpen(true)}
              className="btn-primary inline-flex items-center px-4 py-2 rounded-lg font-medium text-white bg-primary hover:bg-primary-600"
              aria-label="Télécharger l'application"
            >
              <Download className="h-5 w-5 mr-2" />
              Télécharger App
            </button>

            {/* Bouton pour ouvrir l'offcanvas de contact */}
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary border border-gray-200"
              aria-label="Informations de contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex flex-row gap-0">
              <img
                className="h-16 w-auto bg-primary px-2 rounded"
                src="/images/logo/logo-mamri-02.png"
                alt="Logo Lassiri"
                loading="lazy"
              />
            </Link>

            {/* Navigation principale */}
            <div className="hidden ml-10 space-x-8 md:flex">
              {mainMenuItems.map(item => {
                const active = isActiveRoute(item.routeName);

                if (item.submenu) {
                  // Menu avec sous-menu
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href=""
                        // href={route(item.routeName)}
                        className={getLinkClasses(active)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.key}
                      >
                        {item.label}
                      </Link>
                      <div
                        className={`absolute left-0 mt-2 w-48 bg-gray-50 shadow-lg rounded-md py-2 z-50 ${openDropdown === item.key ? 'block' : 'hidden'}`}
                        role="menu"
                        aria-label={`Menu ${item.label}`}
                      >
                        {item.submenu.map(subItem => {
                          const subActive = subItem.routeName ? isActiveRoute(subItem.routeName) : false;
                          if (subItem.type === 'link') {
                            return (
                              <Link
                                key={subItem.routeName || subItem.name}
                                href="#"
                                // href={route(subItem.routeName)}
                                className={getDropdownLinkClasses(subActive)}
                                role="menuitem"
                              >
                                {subItem.name}
                              </Link>
                            );
                          } else if (subItem.type === 'action') {
                            // Par exemple ouvrir l'offcanvas livraison
                            return (
                              <button
                                key={subItem.name}
                                onClick={() => {
                                  if (subItem.actionKey === 'openOffcanvasLivraison') {
                                    setOffcanvasLivraisonOpen(true);
                                  }
                                }}
                                className={`${getDropdownLinkClasses(false)} text-left w-full`}
                                role="menuitem"
                              >
                                {subItem.name}
                              </button>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                } else {
                  // Item sans sous-menu
                  if (item.type === 'link' && item.routeName !== 'null') {
                    return (
                      <Link
                        key={item.routeName || item.label}
                        href="#"
                        // href={route(item.routeName)}
                        className={getLinkClasses(active)}
                      >
                        {item.label}
                      </Link>
                    );
                  } else if (item.type === 'action') {
                    // Par exemple ouvrir le offcanvas contact
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.actionKey === 'openContact') {
                            setContactOpen(true);
                          }
                        }}
                        className={getLinkClasses(false)}
                      >
                        {item.label}
                      </button>
                    );
                  }
                }
              })}
            </div>
          </div>

          {/* Menu mobile */}
          <motion.button
            className="lg:hidden p-2"
            onClick={onMobileMenuToggle}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>

    </header>
  );
}

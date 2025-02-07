import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { menuItems } from '../constants/menuItems';

export default function Header({ onMobileMenuToggle }) {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActiveRoute = (routeName) => routeName && route().current(routeName);

  const getLinkClasses = (active) =>
    `relative text-base font-medium transition-colors duration-200 hover:text-primary group ${
      active ? 'text-primary' : 'text-gray-700'
    }`;

  const getDropdownLinkClasses = (active) =>
    `block w-full px-4 py-2 text-sm transition-colors duration-200 ${
      active
        ? 'bg-primary/10 text-primary font-medium'
        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
    }`;

  return (
    <header className="fixed w-full top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      {/* Barre supérieure */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:+224655358284" className="hover:text-secondary">
              (+224) 655-35-82-84
            </a>
            <a href="mailto:contact@patrimoinebatipublic.com" className="hover:text-secondary">
              contact@patrimoinebatipublic.com
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" aria-label="Retour à l'accueil" className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/images/logo/logo-pbp.png"
                alt="Logo PBP"
                loading="lazy"
              />
            </Link>

            {/* Menu Desktop */}
            <div className="hidden ml-10 space-x-8 md:flex">
              {menuItems.map((item) => {
                const active = isActiveRoute(item.route);
                const isDropdownActive = item.subItems?.some(subItem => 
                  isActiveRoute(subItem.route)
                );

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {!item.subItems ? (
                      <Link
                        href={item.route ? route(item.route) : '/'}
                        className={getLinkClasses(active)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={getLinkClasses(isDropdownActive)}
                        >
                          <span>{item.label}</span>
                        </button>
                        
                        {openDropdown === item.label && (
                          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                            {item.subItems.map((subItem) => {
                              const isSubItemActive = isActiveRoute(subItem.route);
                              return (
                                <Link
                                  key={subItem.label}
                                  href={subItem.route ? route(subItem.route) : '/'}
                                  className={getDropdownLinkClasses(isSubItemActive)}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <motion.button
            className="md:hidden p-2"
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
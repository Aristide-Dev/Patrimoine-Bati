import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';


export const MobileNav = ({ isOpen, onClose }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setOpenSubmenus({});
    }
  }, [isOpen]);

  const toggleSubmenu = (label) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const isActiveRoute = (routeName) => route().current(routeName);

  if (!isOpen) return null;

  return (
    <nav 
      className={`fixed min-h-4/5 inset-x-0 top-36 bottom-0 bg-gradient-to-b from-primary-900/98 to-primary-800/98 backdrop-blur-md overflow-y-auto md:hidden z-50
        animate-in slide-in-from-right duration-300
      `}
      role="navigation"
      aria-label="Menu mobile"
    >
      <div className="px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
          const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);
          const isOpen = openSubmenus[item.label];

          return (
            <div key={item.label} className="relative">
              {!item.children ? (
                <a
                  href={item.href && item.href !== '#' ? route(item.href) : '#'}
                  onClick={onClose}
                  className={`flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300
                    ${isActive ? 
                      'bg-white text-primary shadow-lg' : 
                      'text-white/90 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {item.icon && (
                    <item.icon className="w-5 h-5 mr-3" />
                  )}
                  <span>{item.label}</span>
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300
                      ${isDropdownActive || isOpen ? 
                        'bg-white text-primary shadow-lg' : 
                        'text-white/90 hover:bg-white/10 hover:text-white'
                      }
                    `}
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${item.label}`}
                  >
                    <div className="flex items-center">
                      {item.icon && (
                        <item.icon className="w-5 h-5 mr-3" />
                      )}
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <div
                    id={`submenu-${item.label}`}
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-4 py-2 space-y-1">
                      {item.children.map((child) => {
                        const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                        
                        return (
                          <a
                            key={child.label}
                            href={child.href && child.href !== '#' ? route(child.href) : '#'}
                            onClick={onClose}
                            className={`flex items-center px-4 py-3 pl-12 rounded-xl text-base transition-all duration-300 group relative
                              ${isChildActive ? 
                                'bg-white/10 text-white font-semibold' : 
                                'text-white/80 hover:bg-white/5 hover:text-white'
                              }
                            `}
                          >
                            {child.icon && (
                              <child.icon className="w-4 h-4 mr-3 opacity-75 group-hover:opacity-100" />
                            )}
                            <span>{child.label}</span>
                            <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
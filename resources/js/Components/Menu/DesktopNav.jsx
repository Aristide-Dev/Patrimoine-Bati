import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export const DesktopNav = () => {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  const isActiveRoute = (routeName) => route().current(routeName);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !dropdownRefs.current[openDropdown]?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && openDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openDropdown]);

  const handleItemHover = (label, isEntering) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (isEntering) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(label);
      }, 50);
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
      }, 100);
    }
  };

  return (
    <motion.nav 
      className="hidden md:flex items-center space-x-2 whitespace-nowrap m-0 px-6 py-2 bg-white/5 backdrop-blur-sm rounded-xl"
      role="navigation"
      aria-label="Menu principal"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {menuItems.map((item) => {
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
        const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);
        const isHovered = hoveredItem === item.label;

        return (
          <motion.div 
            key={item.label} 
            className="relative" 
            ref={(el) => (dropdownRefs.current[item.label] = el)}
            onMouseEnter={() => handleItemHover(item.label, true)}
            onMouseLeave={() => handleItemHover(item.label, false)}
          >
            {!item.children ? (
              <motion.a
                href={item.href && item.href !== '#' ? route(item.href) : '#'}
                className={`flex items-center px-4 py-2 rounded-lg text-md font-medium
                  ${isActive ? 
                    'bg-white text-primary shadow-lg' : 
                    'text-white hover:bg-white/10'
                  }
                  ${isHovered ? 'shadow-md' : ''}
                `}
              >
                {item.icon && (
                  <motion.div>
                    <item.icon className="w-4 h-4 mr-2" />
                  </motion.div>
                )}
                <span>{item.label}</span>
              </motion.a>
            ) : (
              <>
                <motion.button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center px-4 py-2 rounded-lg text-md font-medium
                    ${isDropdownActive || openDropdown === item.label ? 
                      'bg-white text-primary shadow-lg' : 
                      'text-white hover:bg-white/10'
                    }
                    ${isHovered ? 'shadow-md' : ''}
                  `}
                >
                  {item.icon && (
                    <motion.div>
                      <item.icon className="w-4 h-4 mr-2" />
                    </motion.div>
                  )}
                  <span>{item.label}</span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ 
                      rotate: openDropdown === item.label ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-sm border border-white/20 
                        rounded-lg shadow-xl py-2 min-w-[240px] z-10"
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 22,
                        mass: 0.8
                      }}
                    >
                      {item.children.map((child, index) => {
                        const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                        return (
                          <motion.a
                            key={child.label}
                            href={child.href && child.href !== '#' ? route(child.href) : '#'}
                            className={`flex items-center px-4 py-3 text-sm transition-all duration-300 relative group
                              ${isChildActive ? 
                                'bg-primary/10 text-primary font-semibold' : 
                                'text-gray-700 hover:bg-primary/5 hover:text-primary'
                              }
                            `}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.2, 
                              delay: index * 0.03
                            }}
                          >
                            <motion.div 
                              className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: isChildActive ? 1 : 0 }}
                              transition={{ duration: 0.2 }}
                            />
                            {child.icon && (
                              <child.icon className="w-4 h-4 mr-3 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                            )}
                            <span>{child.label}</span>
                            <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        );
      })}
    </motion.nav>
  );
};

export default DesktopNav;
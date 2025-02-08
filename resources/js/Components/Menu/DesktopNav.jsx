import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { usePage } from '@inertiajs/react';

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
    <nav 
      className="hidden md:flex items-center space-x-2 whitespace-nowrap m-0 px-6 py-2 bg-white/5 backdrop-blur-sm rounded-xl"
      role="navigation"
      aria-label="Menu principal"
    >
      {menuItems.map((item) => {
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
        const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);
        const isHovered = hoveredItem === item.label;

        return (
          <div 
            key={item.label} 
            className="relative" 
            ref={(el) => (dropdownRefs.current[item.label] = el)}
            onMouseEnter={() => handleItemHover(item.label, true)}
            onMouseLeave={() => handleItemHover(item.label, false)}
          >
            {!item.children ? (
              <a
                href={item.href && item.href !== '#' ? route(item.href) : '#'}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-md font-medium
                  ${isActive ? 
                    'bg-white text-primary shadow-lg scale-105' : 
                    'text-white hover:bg-white/10 hover:shadow-md hover:scale-105'
                  }
                  ${isHovered ? 'scale-105' : ''}
                `}
              >
                {item.icon && (
                  <item.icon 
                    className={`w-4 h-4 mr-2 transition-transform duration-300
                      ${isHovered ? 'scale-110' : ''}
                    `} 
                  />
                )}
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-md font-medium
                    ${isDropdownActive || openDropdown === item.label ? 
                      'bg-white text-primary shadow-lg scale-105' : 
                      'text-white hover:bg-white/10 hover:shadow-md hover:scale-105'
                    }
                    ${isHovered ? 'scale-105' : ''}
                  `}
                >
                  {item.icon && (
                    <item.icon 
                      className={`w-4 h-4 mr-2 transition-transform duration-300
                        ${isHovered ? 'scale-110' : ''}
                      `} 
                    />
                  )}
                  <span>{item.label}</span>
                  <ChevronDown 
                    className={`w-4 h-4 ml-1 transition-transform duration-300
                      ${openDropdown === item.label ? 'rotate-180' : ''}
                      ${isHovered ? 'translate-y-0.5' : ''}
                    `} 
                  />
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 bg-white/95 backdrop-blur-sm border border-white/20 
                    rounded-lg shadow-xl py-2 min-w-[240px] transition-all duration-300 origin-top-left
                    ${openDropdown === item.label ? 
                      'opacity-100 visible translate-y-0 scale-100' : 
                      'opacity-0 invisible -translate-y-2 scale-95'
                    }
                  `}
                >
                  {item.children.map((child) => {
                    const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                    return (
                      <a
                        key={child.label}
                        href={child.href && child.href !== '#' ? route(child.href) : '#'}
                        className={`flex items-center px-4 py-3 text-sm transition-all duration-300 relative group
                          ${isChildActive ? 
                            'bg-primary/10 text-primary font-semibold' : 
                            'text-gray-700 hover:bg-primary/5 hover:text-primary'
                          }
                        `}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                        {child.icon && (
                          <child.icon 
                            className="w-4 h-4 mr-3 text-primary/70 group-hover:text-primary transition-colors duration-300" 
                          />
                        )}
                        <span>{child.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
};
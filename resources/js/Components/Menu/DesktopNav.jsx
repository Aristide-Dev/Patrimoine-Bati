import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = () => {
  const { url } = usePage();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // Fonction utilitaire pour déterminer si une route est active.
  const isActiveRoute = (routeName) => route().current(routeName);

  // Fermer le menu déroulant si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !dropdownRefs.current[openDropdown]?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <nav className="hidden md:flex items-center space-x-1 whitespace-nowrap shadow-sm m-0 px-4 py-1 bg-transparent rounded-lg">
      {menuItems.map((item) => {
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
        const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);

        return (
          <div key={item.label} className="relative" ref={(el) => (dropdownRefs.current[item.label] = el)}>
            {!item.children ? (
              <a
                href={item.href && item.href !== '#' ? route(item.href) : '#'}
                className={`flex items-center px-4 py-2 rounded-md transition-colors text-md font-medium ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-primary-100 hover:bg-primary hover:text-white hover:shadow-md'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors text-md font-medium ${
                    isDropdownActive || openDropdown === item.label
                      ? 'bg-primary text-white shadow-md'
                      : 'text-primary-100 hover:bg-primary hover:text-white hover:shadow-md'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Menu déroulant */}
                <div
                  className={`absolute left-0 top-full mt-1 bg-white border border-primary-200 rounded-md shadow-lg py-2 min-w-[200px] transition-opacity duration-200 ${
                    openDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.children.map((child) => {
                    const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                    return (
                      <a
                        key={child.label}
                        href={child.href && child.href !== '#' ? route(child.href) : '#'}
                        className={`flex items-center px-4 py-2 text-sm transition-colors ${
                          isChildActive
                            ? 'bg-primary text-primary-100 font-semibold'
                            : 'text-primary-700 hover:bg-primary-100'
                        }`}
                      >
                        {child.icon && <child.icon className="w-4 h-4 mr-2" />}
                        <span>{child.label}</span>
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
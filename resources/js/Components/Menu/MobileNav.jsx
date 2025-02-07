import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';

export default function MobileNav({ isOpen }) {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;
  
  // Fonction utilitaire pour déterminer si une route est active.
  const isActiveRoute = (routeName) => route().current(routeName);

  return (
    <nav className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2">
        {menuItems.map((item) => {
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);
        const isDropdownActive = item.actif && item.actif !== '#' && isActiveRoute(item.actif);

          return (<div key={item.label} className="border-b border-gray-100 last:border-0">
            {!item.children ? (
              <a
                href={item.href && item.href !== '#' ? route(item.href) : '#'}
                className={`flex items-center px-2 py-3 rounded-md transition-colors text-md font-medium ${
                  isActive
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-800 hover:bg-primary-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className={`flex items-center justify-between w-full px-2 py-3 transition-colors text-md font-medium ${
                    isDropdownActive
                      ? 'bg-primary-800 text-white'
                      : 'text-primary-800 hover:bg-primary-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.label}</span>
                  </div>
                  {openSubmenus[item.label] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openSubmenus[item.label] && (
                  <div className="pl-4 pb-2">
                    {item.children.map((child) => {
                    const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                      return (
                        <a
                          key={child.label}
                          href={child.href && child.href !== '#' ? route(child.href) : '#'}
                          className={`flex items-center p-2 my-1 text-sm transition-colors rounded-md ${
                            isChildActive
                              ? 'bg-primary-700 text-primary-100 font-semibold'
                              : 'text-primary-700 hover:bg-primary-100'
                          }`}
                        >
                          <child.icon className="w-4 h-4 mr-3" />
                          <span>{child.label}</span>
                        </a>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>)
        })}
      </div>
    </nav>
  );
};
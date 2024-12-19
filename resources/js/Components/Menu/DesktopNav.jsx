import React from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = () => {
  const { url } = usePage();
  
  // Fonction utilitaire pour déterminer si une route est active.
  const isActiveRoute = (routeName) => route().current(routeName);
  

  return (
    <nav className="hidden md:flex items-center space-x-1 whitespace-nowrap shadow-sm px-2 py-1">
      {menuItems.map((item) => {
        // On vérifie qu'on a un href et qu'il n'est pas '#', puis on utilise isActiveRoute
        const isActive = item.href && item.href !== '#' && isActiveRoute(item.href);

        return (
          <div key={item.label} className="relative group">
            {!item.children ? (
              <a
                href={item.href}
                className={`flex items-center px-2 py-1 rounded-md transition-colors text-md font-medium ${
                  isActive
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-700'
                }`}
              >
                
                <item.icon className="w-4 h-4 mr-2" />
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  className="flex items-center px-2 py-1 rounded-md transition-colors text-md font-medium text-primary-100 hover:bg-primary-700"
                >
                  
                <item.icon className="w-4 h-4 mr-2" />
                  <span>{item.label}</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <div className="absolute left-0 top-full bg-white border border-primary-200 rounded-md shadow-lg py-2 min-w-[200px] hidden group-hover:block z-50">
                  {item.children.map((child) => {
                    const isChildActive = child.href && child.href !== '#' && isActiveRoute(child.href);
                    return (
                      <a
                        key={child.label}
                        href={child.href}
                        className={`flex items-center px-3 py-1 text-sm transition-colors ${
                          isChildActive
                            ? 'bg-primary-100 text-primary-700 font-semibold'
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

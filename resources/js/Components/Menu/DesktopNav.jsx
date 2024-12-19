import React from 'react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { usePage } from '@inertiajs/react';

export const DesktopNav = () => {
  const { url } = usePage();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => {
        const isActive = !item.children && url === item.href; 
        // Pour les items sans enfants, isActive est vrai si l'URL actuelle correspond à href.

        return (
          <div key={item.label} className="relative group">
            {!item.children ? (
              <a
                href={item.href}
                className={`flex items-center p-2 rounded-md transition-colors uppercase text-sm ${
                  isActive
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  className="flex items-center p-2 text-primary-100 hover:bg-primary-800 hover:text-white rounded-md transition-colors uppercase text-sm"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 top-full bg-white border border-primary-200 rounded-md shadow-lg py-2 min-w-[240px] hidden group-hover:block z-50">
                  {item.children.map((child) => {
                    const isChildActive = url === child.href;
                    return (
                      <a
                        key={child.label}
                        href={child.href}
                        className={`flex items-center px-4 py-2 transition-colors ${
                          isChildActive
                            ? 'bg-primary-100 text-primary-700 font-semibold'
                            : 'text-primary-700 hover:bg-primary-100'
                        }`}
                      >
                        <child.icon className="w-4 h-4 mr-2" />
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

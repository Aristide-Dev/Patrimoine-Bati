import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';

export const MobileNav = ({ isOpen }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white border-t border-gray-200">
      <div className="px-4 py-2">
        {menuItems.map((item) => (
          <div key={item.label} className="border-b border-gray-100 last:border-0">
            {!item.children ? (
              <a
                href={item.href}
                className="flex items-center px-2 py-3 text-gray-700 hover:bg-gray-50 uppercase"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
            ) : (
              <>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="flex items-center justify-between w-full px-2 py-3 text-gray-700 hover:bg-gray-50 uppercase"
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
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                      >
                        <child.icon className="w-4 h-4 mr-3" />
                        <span>{child.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';

export const MobileNav = ({ isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleSubmenuClick = (label) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <div 
                className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl 
                    transform transition-transform duration-300 ease-in-out z-50
                    rounded-l-3xl overflow-hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 left-4 z-10 
                        bg-gray-100 hover:bg-gray-200 
                        p-2 rounded-full 
                        transition-colors duration-200"
                    aria-label="Fermer le menu"
                >
                    <X className="h-6 w-6 text-gray-600" />
                </button>

                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="px-6 pt-16 pb-8 bg-gradient-to-br from-primary-800 to-primary-600 
                        relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="pattern" patternUnits="userSpaceOnUse" width="100" height="100">
                                        <path d="M0 0 L50 50 L100 0 Z" fill="white" fillOpacity="0.1" />
                                    </pattern>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <img 
                                    src="/images/logo/logo-pbp.png" 
                                    alt="Logo PBP" 
                                    className="h-20 w-auto transform transition-transform hover:scale-105 drop-shadow-md"
                                />
                            </div>
                            <h2 className="text-white text-xl font-bold text-center tracking-wider uppercase opacity-90">
                                Patrimoine Bâti Public
                            </h2>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="space-y-2">
                            {menuItems.map((item, index) => {
                                const Icon = item.icon;
                                
                                if (item.children) {
                                    return (
                                        <div key={index} className="space-y-1">
                                            <button
                                                onClick={() => handleSubmenuClick(item.label)}
                                                className="w-full group flex items-center px-4 py-3.5 
                                                    text-gray-700 rounded-xl
                                                    hover:bg-primary-50 hover:text-primary-800
                                                    transition-all duration-300 ease-in-out
                                                    active:scale-[0.98]"
                                            >
                                                <Icon className="h-6 w-6 mr-4 
                                                    text-gray-500 group-hover:text-primary-600 
                                                    transition-colors duration-200" />
                                                <span className="flex-1 font-medium text-base">
                                                    {item.label}
                                                </span>
                                                <ChevronDown 
                                                    className={`h-5 w-5 text-gray-400 
                                                        group-hover:text-primary-600 
                                                        transform transition-transform duration-200
                                                        ${openSubmenu === item.label ? 'rotate-180' : ''}
                                                    `} 
                                                />
                                            </button>
                                            
                                            {/* Sous-menu */}
                                            <div className={`pl-14 space-y-1 overflow-hidden transition-all duration-300
                                                ${openSubmenu === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                            `}>
                                                {item.children.map((child, childIndex) => (
                                                    <Link
                                                        key={childIndex}
                                                        href={route(child.href)}
                                                        className="flex items-center px-4 py-3 
                                                            text-gray-600 rounded-lg
                                                            hover:bg-primary-50 hover:text-primary-700
                                                            transition-all duration-200"
                                                        onClick={onClose}
                                                    >
                                                        {child.icon && (
                                                            <child.icon className="h-5 w-5 mr-3 text-gray-500" />
                                                        )}
                                                        <span className="text-sm font-medium">{child.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={route(item.href)}
                                        className="group flex items-center px-4 py-3.5 
                                            text-gray-700 rounded-xl
                                            hover:bg-primary-50 hover:text-primary-800
                                            transition-all duration-300 ease-in-out
                                            active:scale-[0.98]"
                                        onClick={onClose}
                                    >
                                        <Icon className="h-6 w-6 mr-4 
                                            text-gray-500 group-hover:text-primary-600 
                                            transition-colors duration-200" />
                                        <span className="flex-1 font-medium text-base">
                                            {item.label}
                                        </span>
                                        <ChevronRight className="h-5 w-5 text-gray-400 
                                            group-hover:text-primary-600 
                                            transform group-hover:translate-x-1 
                                            transition-transform duration-200" />
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                        <div className="flex flex-col space-y-4">
                            <div className="text-sm text-gray-600">
                                <p className="font-semibold text-primary-700 mb-2 uppercase tracking-wider">
                                    Contactez-nous
                                </p>
                                <div className="space-y-2">
                                    <p className="flex items-center">
                                        <span className="bg-primary-100 p-1.5 rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </span>
                                        (+224) 629 00 13 79
                                    </p>
                                    <p className="flex items-center">
                                        <span className="bg-primary-100 p-1.5 rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </span>
                                        contacts@PBP.gov.gn
                                    </p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 text-center border-t border-gray-200 pt-4">
                                © 2024 Patrimoine Bâti Public. 
                                <br />
                                Tous droits réservés.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
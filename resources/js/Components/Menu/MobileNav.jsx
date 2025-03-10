import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight, X, ChevronDown, Menu } from 'lucide-react';
import { menuItems } from '../../constants/menuItems';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = ({ isOpen, onClose }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    // Ferme les sous-menus lorsqu'on ferme le menu principal
    useEffect(() => {
        if (!isOpen) {
            setOpenSubmenu(null);
        }
    }, [isOpen]);

    const handleSubmenuClick = (label) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    return (
        <>
            {/* Overlay avec animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>

            {/* Menu mobile avec animation */}
            <motion.div 
                className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl 
                    z-50 rounded-l-3xl overflow-hidden flex flex-col`}
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ 
                    type: "spring", 
                    damping: 30, 
                    stiffness: 300,
                    mass: 1
                }}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                    <div className="text-xl font-semibold text-primary-600">Menu</div>
                    <motion.button 
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                        onClick={onClose}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <X className="h-6 w-6" />
                    </motion.button>
                </div>

                <div className="flex-grow overflow-y-auto">
                    <div className="py-4">
                        <ul className="space-y-2 px-3">
                            {menuItems.map((item) => (
                                <li key={item.label}>
                                    {!item.children ? (
                                        <Link
                                            href={item.href !== '#' ? route(item.href) : '#'}
                                            className="flex items-center py-3 px-4 rounded-xl text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-all"
                                            onClick={onClose}
                                        >
                                            {item.icon && <item.icon className="h-5 w-5 mr-3 text-primary-500" />}
                                            <span className="font-medium">{item.label}</span>
                                        </Link>
                                    ) : (
                                        <div>
                                            <motion.button
                                                className={`flex w-full items-center justify-between py-3 px-4 rounded-xl transition-all
                                                    ${openSubmenu === item.label ? 'bg-primary-50 text-primary-600' : 'text-gray-800 hover:bg-gray-50'}`}
                                                onClick={() => handleSubmenuClick(item.label)}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className="flex items-center">
                                                    {item.icon && <item.icon className="h-5 w-5 mr-3 text-primary-500" />}
                                                    <span className="font-medium">{item.label}</span>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: openSubmenu === item.label ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                                </motion.div>
                                            </motion.button>

                                            <AnimatePresence>
                                                {openSubmenu === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <ul className="pl-8 pt-1 pb-2 space-y-1">
                                                            {item.children.map((child) => (
                                                                <motion.li 
                                                                    key={child.label}
                                                                    initial={{ x: -10, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    <Link
                                                                        href={child.href !== '#' ? route(child.href) : '#'}
                                                                        className="flex items-center py-2.5 px-4 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
                                                                        onClick={onClose}
                                                                    >
                                                                        {child.icon && <child.icon className="h-4 w-4 mr-3 text-primary-400" />}
                                                                        <span>{child.label}</span>
                                                                        <ChevronRight className="h-4 w-4 ml-auto text-gray-300" />
                                                                    </Link>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer du menu */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <div className="grid gap-4">
                        <div className="text-sm text-gray-500">
                            <div className="space-y-3">
                                <p className="font-medium text-primary-700">Besoin d'assistance?</p>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className="bg-primary-100 p-1.5 rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </span>
                                        <div className="flex flex-col">
                                            <span>(+224) 655-35-82-84</span>
                                            <span>(+224) 611-98-19-28</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-primary-100 p-1.5 rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </span>
                                        <div className="flex flex-col">
                                            <span>contact@patrimoinebatipublic.com</span>
                                            <span>serviceaccueil@patrimoinebatipublic.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 text-center border-t border-gray-200 pt-4 mt-4">
                                © 2024 Patrimoine Bâti Public. 
                                <br />
                                Tous droits réservés.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default MobileNav;
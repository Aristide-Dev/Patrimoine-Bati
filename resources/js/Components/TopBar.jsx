import React, { useState, useCallback } from 'react';
import { Phone, Mail, Search, X } from 'lucide-react';
import { router } from '@inertiajs/react';

export const TopBar = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = useCallback((e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            alert("Veuillez entrer un terme de recherche.");
            return;
        }

        setLoading(true);
        router.get(route('search.index'), { 
            q: searchQuery 
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => setLoading(false),
            onError: () => setLoading(false)
        });
        setShowSearchInput(false);
        setSearchQuery('');
    }, [searchQuery]);

    return (
        <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-white shadow-lg border-b border-white/10">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left Section: Logos and Contact Info */}
                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 w-full">
                    <div className="flex items-center space-x-6">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img 
                                src="/images/logo/brandingGn.png" 
                                alt="Logo République de Guinée" 
                                className="h-14 w-auto relative transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img 
                                src="/images/logo/SIMANDOU2024.png" 
                                alt="Logo Ministère" 
                                className="h-16 w-20 relative transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/90">
                        <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                <Phone size={18} className="text-white" />
                            </div>
                            <span className="text-sm font-medium tracking-wide">
                                (+224) 629 00 13 79
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                                <Mail size={18} className="text-white" />
                            </div>
                            <span className="text-sm font-medium tracking-wide">
                                contacts@PBP.gov.gn
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Section: Search */}
                <div className="flex items-center relative w-full md:w-auto justify-end">
                    {showSearchInput ? (
                        <form 
                            onSubmit={handleSearch} 
                            className="flex items-center w-full md:w-72 transition-all duration-300 ease-in-out"
                        >
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Rechercher..."
                                    className="w-full px-4 py-2.5 pl-12 rounded-full 
                                        bg-white/10 text-white 
                                        placeholder-white/50 
                                        border border-white/20 
                                        focus:outline-none 
                                        focus:ring-2 focus:ring-white/30
                                        focus:bg-white/20
                                        transition-all duration-300"
                                    autoFocus
                                    aria-label="Champ de recherche"
                                />
                                <Search 
                                    size={20} 
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" 
                                />
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setShowSearchInput(false);
                                        setSearchQuery('');
                                    }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 
                                        text-white/70 hover:text-white 
                                        transition-colors duration-200"
                                    aria-label="Fermer la recherche"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </form>
                    ) : (
                        <button 
                            onClick={() => setShowSearchInput(true)}
                            className="text-white/90 hover:text-white 
                                bg-white/10 hover:bg-white/20 
                                p-2.5 rounded-full 
                                transition-all duration-300 
                                flex items-center justify-center
                                hover:shadow-lg hover:shadow-black/5"
                            aria-label="Ouvrir la recherche"
                        >
                            {loading ? (
                                <div className="loader border-t-2 border-white border-solid rounded-full h-5 w-5 animate-spin"></div>
                            ) : (
                                <Search size={20} />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
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
        <div className="bg-white/30 text-white py-2">
            <div className="container mx-auto px-4 flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 pb-2 border-b-2 border-primary md:border-none">
                    <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span className="text-sm">(+224) 629 00 13 79</span>
                    </div>
                    <div className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        <span className="text-sm">contacts@PBP.gov.gn</span>
                    </div>
                </div>
                <div className="flex items-center relative">
                    {showSearchInput ? (
                        <form onSubmit={handleSearch} className="flex items-center">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Rechercher articles, médias, documents..."
                                className="px-4 py-1 pr-8 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 w-64 ring-3 ring-primary-800"
                                autoFocus
                                aria-label="Champ de recherche"
                            />
                            <button 
                                type="button"
                                onClick={() => {
                                    setShowSearchInput(false);
                                    setSearchQuery('');
                                }}
                                className="absolute right-2 text-gray-500 hover:text-gray-700"
                                aria-label="Fermer la recherche"
                            >
                                <X size={16} />
                            </button>
                        </form>
                    ) : (
                        <button 
                            onClick={() => setShowSearchInput(true)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Ouvrir la recherche"
                        >
                            {loading ? (
                                <div className="loader border-t-2 border-primary-300 border-solid rounded-full h-6 w-6 animate-spin "></div>
                            ) : (
                                <Search size={20}  className='font-bold text-primary-100'/>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

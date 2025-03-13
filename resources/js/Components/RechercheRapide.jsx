import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { 
    Search, 
    MapPin, 
    Building, 
    Square,
    Calendar,
    Filter,
    Bed,
    Bath,
    Home,
    Building2,
    Loader2,
    X,
    Heart,
    ChevronRight,
    Info
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Slider } from '@/Components/ui/slider';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import BienCard from '@/Components/BienCard';

export default function RechercheRapide({ regions, prefectures, typesBien, zones }) {
    // État pour les filtres de recherche
    const [filters, setFilters] = useState({
        region: '',
        prefecture: '',
        typeBien: '',
        surface: [0, 500],
        zone: '',
        disponibilite: 'tous'
    });

    // États pour les résultats et le chargement
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [expanded, setExpanded] = useState(true);

    // Filtres dynamiques basés sur la sélection
    const [prefecturesFiltrees, setPrefecturesFiltrees] = useState([]);
    const [activeTab, setActiveTab] = useState('location');

    // Filtrer les préfectures en fonction de la région sélectionnée
    useEffect(() => {
        if (filters.region) {
            setPrefecturesFiltrees(prefectures.filter(p => p.region_id === filters.region));
        } else {
            setPrefecturesFiltrees([]);
        }
        // Réinitialiser la préfecture si la région change
        setFilters(prev => ({ ...prev, prefecture: ''}));
    }, [filters.region, prefectures]);

    // Charger les favoris depuis le localStorage
    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteProperties');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    // Gérer les changements de filtres
    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    // Récupérer l'icône correspondant au type de bien
    const getPropertyIcon = (type) => {
        switch (type) {
            case 'villa':
            case 'appartement':
                return <Home className="h-4 w-4" />;
            case 'bureau':
            case 'magasin':
            case 'immeuble':
                return <Building className="h-4 w-4" />;
            case 'entrepot':
                return <Building2 className="h-4 w-4" />;
            default:
                return <MapPin className="h-4 w-4" />;
        }
    };

    // Réinitialiser tous les filtres
    const resetFilters = () => {
        setFilters({
            region: 'toutes',
            prefecture: 'toutes',
            typeBien: 'tous',
            surface: [0, 500],
            zone: '',
            disponibilite: 'tous'
        });
    };

    // Lancer la recherche
    const handleSearch = async () => {
        setLoading(true);
        
        try {
            // Préparer les données de recherche
            const searchData = {
                ...filters,
                type: activeTab,
                // Ne pas envoyer les filtres vides ou avec valeurs par défaut
                ...(filters.region === 'toutes' && { region: undefined }),
                ...(filters.prefecture === 'toutes' && { prefecture: undefined }),
                ...(filters.typeBien === 'tous' && { typeBien: undefined }),
                ...(filters.disponibilite === 'tous' && { disponibilite: undefined })
            };

            // Supprimer les valeurs undefined
            Object.keys(searchData).forEach(key => 
                searchData[key] === undefined && delete searchData[key]
            );

            const response = await axios.post(route('demandes.recherche-biens'), searchData);
            setResults(response.data);
            setShowResults(true);
        } catch (error) {
            console.error('Erreur lors de la recherche:', error);
        } finally {
            setLoading(false);
        }
    };

    // Voir plus de détails sur un bien
    const handleViewDetails = (id) => {
        router.visit(route('demandes.detail', id));
    };

    // Ajouter/Supprimer des favoris
    const toggleFavorite = (id) => {
        let newFavorites;
        if (favorites.includes(id)) {
            newFavorites = favorites.filter(favId => favId !== id);
        } else {
            newFavorites = [...favorites, id];
        }
        setFavorites(newFavorites);
        localStorage.setItem('favoriteProperties', JSON.stringify(newFavorites));
    };

    return (
        <div className="space-y-8">
            <motion.div 
                className="bg-primary-800/80 rounded-xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4 sm:mb-0">Recherche de Biens</h2>
                        <div className="flex items-center">
                            <Button
                                onClick={resetFilters}
                                variant="outline"
                                className="flex items-center gap-2 bg-white/10 text-white hover:bg-white hover:text-red-600 transition-colors"
                                title="Réinitialiser tous les filtres"
                            >
                                <X className="h-4 w-4" />
                                Réinitialiser les filtres
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 transition-all duration-300">
                        {/* Région */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-300">
                                <MapPin className="w-4 h-4 mr-1" />
                                Région
                            </label>
                            <Select
                                value={filters.region}
                                onValueChange={(value) => handleFilterChange('region', value)}
                            >
                                <SelectTrigger className="bg-gray-50 border-0 hover:bg-gray-100 transition-colors">
                                    <SelectValue placeholder="Toutes les régions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="toutes">Toutes les régions</SelectItem>
                                    {regions?.map((region) => (
                                        <SelectItem key={region.id} value={region.id ? region.id.toString() : `region-${region.nom}`}>
                                            {region.nom}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Préfecture/Commune */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-300">
                                <MapPin className="w-4 h-4 mr-1" />
                                Préfecture/Commune
                            </label>
                            <Select
                                value={filters.prefecture}
                                onValueChange={(value) => handleFilterChange('prefecture', value)}
                                disabled={!filters.region || filters.region === "toutes"}
                            >
                                <SelectTrigger className={`${!filters.region || filters.region === "toutes" ? 'bg-gray-100 text-gray-400' : 'bg-gray-50 hover:bg-gray-100'} border-0 transition-colors`}>
                                    <SelectValue placeholder={filters.region && filters.region !== "toutes" ? "Toutes les préfectures" : "Sélectionnez d'abord une région"} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="toutes">Toutes les préfectures</SelectItem>
                                    {prefecturesFiltrees.map(prefecture => (
                                        <SelectItem key={prefecture.id} value={prefecture.id ? prefecture.id.toString() : `prefecture-${prefecture.nom}`}>
                                            {prefecture.nom}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Type de bien */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-300">
                                <Building className="w-4 h-4 mr-1" />
                                Type de bien
                            </label>
                            <Select
                                value={filters.typeBien}
                                onValueChange={(value) => handleFilterChange('typeBien', value)}
                            >
                                <SelectTrigger className="bg-gray-50 border-0 hover:bg-gray-100 transition-colors">
                                    <SelectValue placeholder="Tous les types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="tous">Tous les types</SelectItem>
                                    {typesBien?.map((type) => (
                                        <SelectItem key={type.id} value={type.id ? type.id.toString() : `type-${type.nom}`}>
                                            {type.nom}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Surface */}
                        <div className="space-y-2">
                            <label className="flex items-center justify-between text-sm font-medium text-gray-300">
                                <div className="flex items-center">
                                    <Square className="w-4 h-4 mr-1" />
                                    Surface
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    {filters.surface[0]} - {filters.surface[1]} m²
                                </span>
                            </label>
                            <Slider
                                min={0}
                                max={500}
                                step={10}
                                value={filters.surface}
                                onValueChange={(value) => handleFilterChange('surface', value)}
                                className="my-2"
                            />
                        </div>

                        {/* Disponibilité */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-300">
                                <Calendar className="w-4 h-4 mr-1" />
                                Disponibilité
                            </label>
                            <Select
                                value={filters.disponibilite}
                                onValueChange={(value) => handleFilterChange('disponibilite', value)}
                            >
                                <SelectTrigger className="bg-gray-50 border-0 hover:bg-gray-100 transition-colors">
                                    <SelectValue placeholder="Tous" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="tous">Tous</SelectItem>
                                    <SelectItem value="disponible">Disponible immédiatement</SelectItem>
                                    <SelectItem value="bientot">Bientôt disponible</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <Button
                            onClick={handleSearch}
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            disabled={loading}
                            size="lg"
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Recherche en cours...
                                </div>
                            ) : (
                                <>
                                    <Search className="mr-2 h-4 w-4" />
                                    Rechercher un bien
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Section des résultats */}
            <AnimatePresence>
                {showResults && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 mt-8"
                    >
                        <div className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-lg font-semibold">Résultats de la recherche</h2>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button className="ml-2 text-gray-400 hover:text-gray-600">
                                                <Info className="h-4 w-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="max-w-xs">Les résultats sont triés par pertinence en fonction de vos critères</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-2">
                                    {results.length} bien{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''}
                                </span>
                                {results.length > 0 && (
                                    <Select value="pertinence" onValueChange={(value) => console.log(`Tri: ${value}`)}>
                                        <SelectTrigger className="w-40 text-xs bg-gray-50 border-0">
                                            <SelectValue placeholder="Trier par" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pertinence">Pertinence</SelectItem>
                                            <SelectItem value="surface_asc">Surface croissante</SelectItem>
                                            <SelectItem value="surface_desc">Surface décroissante</SelectItem>
                                            <SelectItem value="date">Date</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>
                        </div>

                        {results.length === 0 ? (
                            <motion.div 
                                className="bg-white rounded-lg shadow-sm border p-8 text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <Search className="h-8 w-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun bien trouvé</h3>
                                <p className="text-gray-500 mb-6">
                                    Aucun bien ne correspond à vos critères de recherche. Essayez d'élargir vos critères.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={resetFilters}
                                >
                                    Réinitialiser les filtres
                                </Button>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence>
                                    {results.map((bien, index) => (
                                        <BienCard
                                            key={bien.id}
                                            bien={bien}
                                            typesBien={typesBien}
                                            communes={'communes'}
                                            prefectures={prefectures}
                                            isFavorite={favorites.includes(bien.id)}
                                            onToggleFavorite={toggleFavorite}
                                            onViewDetails={handleViewDetails}
                                            index={index}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {results.length > 9 && (
                            <div className="flex justify-center mt-8">
                                <Button 
                                    variant="outline"
                                    onClick={() => router.visit(route('demandes.rechercher', filters))}
                                    className="px-8 py-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                                >
                                    Voir tous les résultats
                                </Button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
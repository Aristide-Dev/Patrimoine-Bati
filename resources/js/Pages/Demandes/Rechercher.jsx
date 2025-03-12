import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Slider } from '@/Components/ui/slider';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Badge } from '@/Components/ui/badge';
import { Separator } from '@/Components/ui/separator';
import {
    Search, Building2, MapPin, Bed, Bath, Square, History,
    Filter, Building, Home
} from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import BienCard from '@/Components/BienCard';

export default function Rechercher({ regions, prefectures, communes, typesBien, zones, initialResults = [], initialFilters = {} }) {
    // État pour les filtres de recherche - initialiser avec les filtres passés s'ils existent
    const [filters, setFilters] = useState({
        region: initialFilters.region || '',
        prefecture: initialFilters.prefecture || '',
        commune: initialFilters.commune || '',
        typeBien: initialFilters.typeBien || '',
        surface: initialFilters.surfaceMin && initialFilters.surfaceMax 
            ? [parseInt(initialFilters.surfaceMin), parseInt(initialFilters.surfaceMax)] 
            : [0, 500],
        zone: initialFilters.zone || '',
        disponibilite: initialFilters.disponibilite || 'tous'
    });

    // État pour les résultats de recherche - initialiser avec les résultats passés s'ils existent
    const [results, setResults] = useState(initialResults);
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(true);

    // Filtres dynamiques basés sur la sélection
    const [prefecturesFiltrees, setPrefecturesFiltrees] = useState([]);
    const [communesFiltrees, setCommunesFiltrees] = useState([]);

    // Ajout d'un état pour les animations séquentielles
    const [isInitialized, setIsInitialized] = useState(false);
    
    // Ajout des filtres spécifiques aux appartements
    const [apartmentFilters, setApartmentFilters] = useState({
        immeuble: false,
        etage: '',
        nombrePieces: '',
        nombreAppartementsDispo: '',
        ascenseur: false,
        balcon: false,
        exposition: '',
    });
    
    // Effet pour l'animation initiale
    useEffect(() => {
        setIsInitialized(true);
    }, []);

    // Filtrer les préfectures en fonction de la région sélectionnée
    useEffect(() => {
        if (filters.region) {
            setPrefecturesFiltrees(prefectures.filter(p => p.region_id === filters.region));
        } else {
            setPrefecturesFiltrees([]);
        }
        // Réinitialiser la préfecture si la région change
        setFilters(prev => ({ ...prev, prefecture: '' }));
    }, [filters.region]);

    // Filtrer les communes en fonction de la préfecture sélectionnée
    useEffect(() => {
        if (filters.prefecture) {
            setCommunesFiltrees(communes.filter(c => c.prefecture_id === filters.prefecture));
        } else {
            setCommunesFiltrees([]);
        }
        // Réinitialiser la commune si la préfecture change
        setFilters(prev => ({ ...prev, commune: '' }));
    }, [filters.prefecture]);

    // Gérer les changements de filtres
    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    // Gérer les changements dans les filtres d'appartement
    const handleApartmentFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setApartmentFilters(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Réinitialiser tous les filtres
    const resetFilters = () => {
        setFilters({
            region: '',
            prefecture: '',
            commune: '',
            typeBien: '',
            surface: [0, 500],
            zone: '',
            disponibilite: 'tous'
        });
        
        setApartmentFilters({
            immeuble: false,
            etage: '',
            nombrePieces: '',
            nombreAppartementsDispo: '',
            ascenseur: false,
            balcon: false,
            exposition: '',
        });
    };

    // Lancer la recherche
    const handleSearch = async () => {
        setLoading(true);

        try {
            const response = await axios.post(route('demandes.recherche-biens'), filters);
            setResults(response.data);
        } catch (error) {
            console.error('Erreur lors de la recherche:', error);
        } finally {
            setLoading(false);
        }
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

    return (
        <AppLayout>
            <Head title="Rechercher un bien" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col space-y-4">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-2xl font-semibold text-gray-900">Rechercher un bien du patrimoine public</h1>
                            <p className="mt-1 text-sm text-gray-600">
                                Explorez les biens immobiliers disponibles dans le Patrimoine Bâti Public de Guinée.
                            </p>
                        </motion.div>

                        <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
                            {/* Filtres de recherche */}
                            <motion.div 
                                className="lg:w-1/4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className="hover-lift">
                                    <CardHeader className="pb-3">
                                        <CardTitle>Filtres</CardTitle>
                                        <CardDescription>
                                            Affinez votre recherche selon vos critères
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-5">
                                        {/* Localisation */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
                                                Localisation
                                            </h3>

                                            <div className="space-y-3">
                                                <div className="space-y-1">
                                                    <Label htmlFor="region">Région</Label>
                                                    <Select
                                                        value={filters.region}
                                                        onValueChange={(value) => handleFilterChange('region', value)}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Toutes les régions" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="all">Toutes les régions</SelectItem>
                                                            {regions.map((region) => (
                                                                <SelectItem key={region.id} value={region.id.toString()}>
                                                                    {region.nom}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-1">
                                                    <Label htmlFor="prefecture">Préfecture/Commune</Label>
                                                    <Select
                                                        value={filters.prefecture}
                                                        onValueChange={(value) => handleFilterChange('prefecture', value)}
                                                        disabled={!filters.region}
                                                    >
                                                        <SelectTrigger id="prefecture">
                                                            <SelectValue placeholder={filters.region ? "Toutes les préfectures" : "Sélectionnez d'abord une région"} />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="">Toutes les préfectures</SelectItem>
                                                            {prefecturesFiltrees.map(prefecture => (
                                                                <SelectItem key={prefecture.id} value={prefecture.id}>
                                                                    {prefecture.nom}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Type de bien */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
                                                Type de bien
                                            </h3>

                                            <div className="space-y-1">
                                                <Select
                                                    value={filters.typeBien}
                                                    onValueChange={(value) => handleFilterChange('typeBien', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Tous les types" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">Tous les types</SelectItem>
                                                        {typesBien.map((type) => (
                                                            <SelectItem key={type.id} value={type.id.toString()}>
                                                                {type.nom}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Surface */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider flex justify-between">
                                                <span>Surface</span>
                                                <span className="font-normal text-gray-500">
                                                    {filters.surface[0]} - {filters.surface[1]} m²
                                                </span>
                                            </h3>

                                            <Slider
                                                min={0}
                                                max={500}
                                                step={10}
                                                value={filters.surface}
                                                onValueChange={(value) => handleFilterChange('surface', value)}
                                                className="my-6"
                                            />
                                        </div>

                                        <Separator />

                                        {/* Zone */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
                                                Zone
                                            </h3>

                                            <div className="space-y-2">
                                                <Select
                                                    value={filters.zone}
                                                    onValueChange={(value) => handleFilterChange('zone', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Toutes les zones" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="">Toutes les zones</SelectItem>
                                                        {zones.map(zone => (
                                                            <SelectItem key={zone.id} value={zone.id}>
                                                                {zone.nom}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Disponibilité */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
                                                Disponibilité
                                            </h3>

                                            <Select
                                                value={filters.disponibilite}
                                                onValueChange={(value) => handleFilterChange('disponibilite', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Tous" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="tous">Tous</SelectItem>
                                                    <SelectItem value="disponible">Disponible immédiatement</SelectItem>
                                                    <SelectItem value="bientot">Bientôt disponible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Filtres spécifiques aux appartements */}
                                        {filters.typeBien === 'appartement' && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="border-t pt-4 mt-4"
                                            >
                                                <h3 className="font-medium text-sm mb-3">Spécificités de l'appartement</h3>
                                                
                                                <div className="space-y-4">
                                                    {/* Type d'immeuble */}
                                                    <div className="flex items-center">
                                                        <Checkbox 
                                                            id="immeuble" 
                                                            name="immeuble"
                                                            checked={apartmentFilters.immeuble}
                                                            onCheckedChange={(checked) => 
                                                                setApartmentFilters(prev => ({...prev, immeuble: checked}))
                                                            }
                                                        />
                                                        <Label htmlFor="immeuble" className="ml-2">
                                                            Dans un immeuble
                                                        </Label>
                                                    </div>
                                                    
                                                    {/* Nombre de pièces */}
                                                    <div>
                                                        <Label htmlFor="nombrePieces" className="mb-1 block text-sm">
                                                            Nombre de pièces
                                                        </Label>
                                                        <Select 
                                                            value={apartmentFilters.nombrePieces}
                                                            onValueChange={(value) => 
                                                                setApartmentFilters(prev => ({...prev, nombrePieces: value}))
                                                            }
                                                        >
                                                            <SelectTrigger id="nombrePieces">
                                                                <SelectValue placeholder="Toutes" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="">Toutes</SelectItem>
                                                                <SelectItem value="1">1 pièce (Studio)</SelectItem>
                                                                <SelectItem value="2">2 pièces</SelectItem>
                                                                <SelectItem value="3">3 pièces</SelectItem>
                                                                <SelectItem value="4">4 pièces</SelectItem>
                                                                <SelectItem value="5">5 pièces et plus</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    
                                                    {/* Étage */}
                                                    <div>
                                                        <Label htmlFor="etage" className="mb-1 block text-sm">
                                                            Étage
                                                        </Label>
                                                        <Select 
                                                            value={apartmentFilters.etage}
                                                            onValueChange={(value) => 
                                                                setApartmentFilters(prev => ({...prev, etage: value}))
                                                            }
                                                        >
                                                            <SelectTrigger id="etage">
                                                                <SelectValue placeholder="Tous les étages" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="">Tous les étages</SelectItem>
                                                                <SelectItem value="rdc">Rez-de-chaussée</SelectItem>
                                                                <SelectItem value="1">1er étage</SelectItem>
                                                                <SelectItem value="2">2ème étage</SelectItem>
                                                                <SelectItem value="3">3ème étage</SelectItem>
                                                                <SelectItem value="4">4ème étage</SelectItem>
                                                                <SelectItem value="5+">5ème étage et plus</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    
                                                    {/* Nombre d'appartements disponibles */}
                                                    {apartmentFilters.immeuble && (
                                                        <div>
                                                            <Label htmlFor="nombreAppartementsDispo" className="mb-1 block text-sm">
                                                                Nombre d'appartements disponibles dans l'immeuble
                                                            </Label>
                                                            <Select 
                                                                value={apartmentFilters.nombreAppartementsDispo}
                                                                onValueChange={(value) => 
                                                                    setApartmentFilters(prev => ({...prev, nombreAppartementsDispo: value}))
                                                                }
                                                            >
                                                                <SelectTrigger id="nombreAppartementsDispo">
                                                                    <SelectValue placeholder="Tous" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="">Tous</SelectItem>
                                                                    <SelectItem value="1">1 appartement</SelectItem>
                                                                    <SelectItem value="2-5">2 à 5 appartements</SelectItem>
                                                                    <SelectItem value="6-10">6 à 10 appartements</SelectItem>
                                                                    <SelectItem value="10+">Plus de 10 appartements</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    )}
                                                    
                                                    {/* Options supplémentaires */}
                                                    <div className="flex flex-wrap gap-3">
                                                        <div className="flex items-center">
                                                            <Checkbox 
                                                                id="ascenseur" 
                                                                name="ascenseur"
                                                                checked={apartmentFilters.ascenseur}
                                                                onCheckedChange={(checked) => 
                                                                    setApartmentFilters(prev => ({...prev, ascenseur: checked}))
                                                                }
                                                            />
                                                            <Label htmlFor="ascenseur" className="ml-2 text-sm">
                                                                Avec ascenseur
                                                            </Label>
                                                        </div>
                                                        
                                                        <div className="flex items-center">
                                                            <Checkbox 
                                                                id="balcon" 
                                                                name="balcon"
                                                                checked={apartmentFilters.balcon}
                                                                onCheckedChange={(checked) => 
                                                                    setApartmentFilters(prev => ({...prev, balcon: checked}))
                                                                }
                                                            />
                                                            <Label htmlFor="balcon" className="ml-2 text-sm">
                                                                Avec balcon/terrasse
                                                            </Label>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Exposition */}
                                                    <div>
                                                        <Label htmlFor="exposition" className="mb-1 block text-sm">
                                                            Exposition
                                                        </Label>
                                                        <Select 
                                                            value={apartmentFilters.exposition}
                                                            onValueChange={(value) => 
                                                                setApartmentFilters(prev => ({...prev, exposition: value}))
                                                            }
                                                        >
                                                            <SelectTrigger id="exposition">
                                                                <SelectValue placeholder="Toutes expositions" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="">Toutes expositions</SelectItem>
                                                                <SelectItem value="est">Est</SelectItem>
                                                                <SelectItem value="ouest">Ouest</SelectItem>
                                                                <SelectItem value="nord">Nord</SelectItem>
                                                                <SelectItem value="sud">Sud</SelectItem>
                                                                <SelectItem value="sud-est">Sud-Est</SelectItem>
                                                                <SelectItem value="sud-ouest">Sud-Ouest</SelectItem>
                                                                <SelectItem value="nord-est">Nord-Est</SelectItem>
                                                                <SelectItem value="nord-ouest">Nord-Ouest</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="pt-6 flex flex-col gap-3">
                                            <Button
                                                type="submit"
                                                className="w-full transition-transform duration-200 active:scale-95 text-white bg-primary"
                                                onClick={handleSearch}
                                            >
                                                <Search className="mr-2 h-4 w-4" />
                                                Rechercher
                                            </Button>

                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full transition-transform duration-200 active:scale-95"
                                                onClick={resetFilters}
                                            >
                                                Réinitialiser
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Résultats */}
                            <motion.div 
                                className="lg:flex-1 space-y-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.div 
                                    className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
                                    whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="lg:hidden"
                                    >
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filtres
                                    </Button>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">
                                            {results.length} bien{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''}
                                        </span>
                                        <Select defaultValue="recent">
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Trier par" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="recent">Plus récents</SelectItem>
                                                <SelectItem value="surface_asc">Surface croissante</SelectItem>
                                                <SelectItem value="surface_desc">Surface décroissante</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </motion.div>

                                {loading ? (
                                    /* Skeleton Loader */
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[1, 2, 3, 4].map((item) => (
                                            <motion.div 
                                                key={item}
                                                className="bg-white rounded-lg overflow-hidden shadow-sm border"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, delay: item * 0.1 }}
                                            >
                                                <div className="h-48 skeleton"></div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex justify-between">
                                                        <div className="skeleton h-6 w-2/3"></div>
                                                        <div className="skeleton h-6 w-1/4"></div>
                                                    </div>
                                                    <div className="skeleton h-4 w-3/4"></div>
                                                    <div className="flex space-x-2">
                                                        <div className="skeleton h-4 w-1/4"></div>
                                                        <div className="skeleton h-4 w-1/4"></div>
                                                        <div className="skeleton h-4 w-1/4"></div>
                                                    </div>
                                                    <div className="skeleton h-10 w-full mt-4"></div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : results.length === 0 ? (
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
                                        <Button onClick={resetFilters} variant="outline">
                                            Réinitialiser les filtres
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <AnimatePresence>
                                            {results.map((bien, index) => (
                                                <BienCard
                                                    key={bien.id}
                                                    bien={bien}
                                                    typesBien={typesBien}
                                                    communes={communes}
                                                    prefectures={prefectures}
                                                    isFavorite={false} // Vous pouvez ajouter la gestion des favoris si nécessaire
                                                    onToggleFavorite={() => {}} // Implémentez la gestion des favoris si nécessaire
                                                    onViewDetails={(id) => router.visit(route('demandes.detail', id))}
                                                    index={index}
                                                    isInitialized={isInitialized}
                                                />
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                )}

                                {results.length > 0 && (
                                    <motion.div 
                                        className="flex justify-center mt-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <Button 
                                            variant="outline"
                                            className="transition-transform duration-200 active:scale-95"
                                        >
                                            Voir plus de résultats
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
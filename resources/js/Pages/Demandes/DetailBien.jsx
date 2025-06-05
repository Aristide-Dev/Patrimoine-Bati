import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import AppLayout from '@/Layouts/AppLayout';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent } from '@/Components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { 
    MapPin, 
    Bed, 
    Bath, 
    Square, 
    Calendar, 
    Phone, 
    Mail, 
    Share2, 
    Heart, 
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Check,
    X,
    ExternalLink
} from 'lucide-react';
import { DGPBP } from '@/utils/dgpbp';

// Fonction utilitaire pour formater les prix
const formatPrice = (price) => {
    if (!price) return "Prix non défini";
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};

export default function DetailBien({ bien, typesBien, prefectures, communes, commodites, biensSimilaires }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    
    // Simuler un chargement
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    // Fonction pour naviguer dans la galerie d'images
    const navigateGallery = (direction) => {
        if (direction === 'next') {
            setCurrentImageIndex((prev) => 
                prev === bien.images.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentImageIndex((prev) => 
                prev === 0 ? bien.images.length - 1 : prev - 1
            );
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Vérifier la validité des URLs d'images
    const getValidImages = () => {
        if (!bien.images || !Array.isArray(bien.images) || bien.images.length === 0) {
            return ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3'];
        }
        return bien.images;
    };
    
    const safeImages = getValidImages();

    // Fonction pour obtenir le nom du type de bien
    const getTypeBienNom = (typeId) => {
        const type = typesBien.find(t => t.id === typeId);
        return type ? type.nom : '';
    };

    // Fonction pour obtenir le nom de la commune
    const getCommuneNom = (communeId) => {
        const commune = communes.find(c => c.id === communeId);
        return commune ? commune.nom : '';
    };

    // Fonction pour obtenir le nom de la préfecture
    const getPrefectureNom = (prefectureId) => {
        const prefecture = prefectures.find(p => p.id === prefectureId);
        return prefecture ? prefecture.nom : '';
    };

    return (
        <AppLayout>
            <Head title={bien.titre + " | Patrimoine Bâti Public"} />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <div className="space-y-8">
                            <div className="h-8 w-64 skeleton rounded-md"></div>
                            <div className="h-96 w-full skeleton rounded-xl"></div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="h-40 skeleton rounded-lg col-span-2"></div>
                                <div className="h-40 skeleton rounded-lg"></div>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            {/* Navigation et actions */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-wrap justify-between items-center mb-6"
                            >
                                {/* <Link 
                                    href={route('demandes.rechercher')} 
                                    className="flex items-center text-primary hover:underline mb-4 sm:mb-0"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Retour aux résultats
                                </Link> */}
                                
                                {/* <div className="flex space-x-3">
                                    <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className={isFavorite ? "text-red-500" : ""}
                                    >
                                        <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-red-500" : ""}`} />
                                        {isFavorite ? "Favori" : "Ajouter aux favoris"}
                                    </Button>
                                    
                                    <Button variant="outline" size="sm">
                                        <Share2 className="h-4 w-4 mr-2" />
                                        Partager
                                    </Button>
                                </div> */}
                            </motion.div>

                            {/* Titre et informations principales */}
                            <motion.div variants={itemVariants} className="space-y-3">
                                <div className="flex flex-wrap items-start justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold text-gray-900">{bien.titre}</h1>
                                        <div className="flex items-center mt-2 text-gray-600">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            <span>
                                                {bien.quartier}, {getCommuneNom(bien.commune)},
                                                {' '}{getPrefectureNom(bien.prefecture)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-3 mt-3">
                                    <Badge variant="outline" className="capitalize">
                                        {getTypeBienNom(bien.type)}
                                    </Badge>
                                    
                                    {bien.disponibilite === 'bientot' && (
                                        <Badge className="bg-amber-500 hover:bg-amber-600">
                                            Bientôt disponible
                                        </Badge>
                                    )}
                                    
                                    {bien.disponibilite === 'disponible' && (
                                        <Badge className="bg-green-500 hover:bg-green-600">
                                            Disponible
                                        </Badge>
                                    )}
                                </div>
                            </motion.div>

                            {/* Galerie d'images */}
                            <motion.div variants={itemVariants} className="relative rounded-xl overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                    <img 
                                        src={safeImages[currentImageIndex]} 
                                        alt={`${bien.titre} - Image ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3';
                                        }}
                                    />
                                </div>
                                
                                {safeImages.length > 1 && (
                                    <>
                                        <button 
                                            onClick={() => navigateGallery('prev')}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </button>
                                        <button 
                                            onClick={() => navigateGallery('next')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                        >
                                            <ChevronRight className="h-6 w-6" />
                                        </button>
                                        
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                            {safeImages.map((_, index) => (
                                                <button 
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                                        index === currentImageIndex 
                                                            ? 'bg-white' 
                                                            : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                                    aria-label={`Voir image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </motion.div>

                            {/* Caractéristiques principales */}
                            <motion.div 
                                variants={itemVariants}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                                    <Bed className="h-6 w-6 text-primary mb-2" />
                                    <span className="text-sm text-gray-500">Chambres</span>
                                    <span className="font-semibold">{bien.chambres}</span>
                                </div>
                                
                                <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                                    <Bath className="h-6 w-6 text-primary mb-2" />
                                    <span className="text-sm text-gray-500">Salles de bain</span>
                                    <span className="font-semibold">{bien.salles_de_bain}</span>
                                </div>
                                
                                <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                                    <Square className="h-6 w-6 text-primary mb-2" />
                                    <span className="text-sm text-gray-500">Surface</span>
                                    <span className="font-semibold">{bien.surface} m²</span>
                                </div>
                                
                                <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                                    <Calendar className="h-6 w-6 text-primary mb-2" />
                                    <span className="text-sm text-gray-500">Année</span>
                                    <span className="font-semibold">{bien.annee_construction || "N/A"}</span>
                                </div>
                            </motion.div>

                            {/* Contenu principal avec onglets */}
                            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <Tabs defaultValue="description" className="w-full">
                                        <TabsList className="w-full justify-start mb-6">
                                            <TabsTrigger value="description">Description</TabsTrigger>
                                            <TabsTrigger value="commodites">Commodités</TabsTrigger>
                                            <TabsTrigger value="localisation">Localisation</TabsTrigger>
                                        </TabsList>
                                        
                                        <TabsContent value="description" className="space-y-4">
                                            <div className="prose max-w-none">
                                                <h3 className="text-xl font-semibold mb-4">À propos de ce bien</h3>
                                                <p className="text-gray-700 whitespace-pre-line">
                                                    {bien.description}
                                                </p>
                                            </div>
                                            
                                            {bien.details && (
                                                <div className="mt-6">
                                                    <h4 className="text-lg font-medium mb-3">Détails supplémentaires</h4>
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {Object.entries(bien.details).map(([key, value]) => (
                                                            <li key={key} className="flex items-start">
                                                                <span className="text-gray-600 mr-2">•</span>
                                                                <span className="text-gray-700">
                                                                    <span className="font-medium">{key}:</span> {value}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </TabsContent>
                                        
                                        <TabsContent value="commodites" className="space-y-4">
                                            <h3 className="text-xl font-semibold mb-4">Commodités</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {bien.commodites.map(comId => {
                                                    const commodite = commodites.find(c => c.id === comId);
                                                    return (
                                                        <div key={comId} className="flex items-center">
                                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                                            <span>{commodite?.nom || comId}</span>
                                                        </div>
                                                    );
                                                })}
                                                
                                                {commodites
                                                    .filter(c => !bien.commodites.includes(c.id))
                                                    .slice(0, 4)
                                                    .map(commodite => (
                                                        <div key={commodite.id} className="flex items-center text-gray-400">
                                                            <X className="h-5 w-5 mr-2" />
                                                            <span>{commodite.nom}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </TabsContent>
                                        
                                        <TabsContent value="localisation" className="space-y-4">
                                            <h3 className="text-xl font-semibold mb-4">Localisation</h3>
                                            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                                                {/* Ici, vous pourriez intégrer une carte Google Maps ou OpenStreetMap */}
                                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                    <MapPin className="h-8 w-8 text-gray-400 mr-2" />
                                                    <span className="text-gray-600">
                                                        Carte de localisation à intégrer
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-4">
                                                <h4 className="text-lg font-medium mb-3">Adresse</h4>
                                                <p className="text-gray-700">
                                                    {bien.quartier}, {getCommuneNom(bien.commune)},
                                                    {' '}{getPrefectureNom(bien.prefecture)}
                                                </p>
                                            </div>
                                            
                                            {bien.proximite && (
                                                <div className="mt-4">
                                                    <h4 className="text-lg font-medium mb-3">À proximité</h4>
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {Object.entries(bien.proximite).map(([key, value]) => (
                                                            <li key={key} className="flex items-start">
                                                                <span className="text-gray-600 mr-2">•</span>
                                                                <span className="text-gray-700">
                                                                    <span className="font-medium">{key}:</span> {value}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </TabsContent>
                                    </Tabs>
                                </div>
                                
                                {/* Sidebar avec contact et informations complémentaires */}
                                <div className="lg:col-span-1 space-y-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
                                            
                                            <div className="space-y-4">
                                                <a href={`tel:${DGPBP.contactInfo.unespace_phones[0]}`} className="w-full bg-primary text-white p-2 rounded-md flex items-center justify-center">
                                                    <Phone className="h-4 w-4 mr-2" />
                                                    Appeler {DGPBP.contactInfo.phones[0]}
                                                </a>
                                                
                                                <a href={`tel:${DGPBP.contactInfo.unespace_phones[1]}`} className="w-full bg-primary text-white p-2 rounded-md flex items-center justify-center">
                                                    <Phone className="h-4 w-4 mr-2" />
                                                    Appeler {DGPBP.contactInfo.phones[1]}
                                                </a>
                                                
                                                <a href={`mailto:${DGPBP.contactInfo.emails[0]}`} className="w-full bg-primary text-white p-2 rounded-md flex items-center justify-center">
                                                    <Mail className="h-4 w-4 mr-2" />
                                                    Envoyer un mail
                                                </a>
                                                
                                                <div className="pt-4 border-t border-gray-200">
                                                    <p className="text-sm text-gray-500 mb-2">
                                                        Référence: <span className="font-medium text-gray-700">{bien.reference || "PBP-" + bien.id}</span>
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Publié le: <span className="font-medium text-gray-700">{new Date(bien.date_publication || Date.now()).toLocaleDateString('fr-FR')}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-semibold mb-3">Documents disponibles</h3>
                                            
                                            <ul className="space-y-2">
                                                {bien.documents?.map((doc, index) => (
                                                    <li key={index}>
                                                        <a 
                                                            href={doc.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="flex items-center text-primary hover:underline"
                                                        >
                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                            {doc.nom}
                                                        </a>
                                                    </li>
                                                )) || (
                                                    <li className="text-gray-500 text-sm">
                                                        Aucun document disponible pour ce bien
                                                    </li>
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-semibold mb-3">Biens similaires du patrimoine public</h3>
                                            
                                            <div className="space-y-3">
                                                {biensSimilaires && biensSimilaires.length > 0 ? (
                                                    biensSimilaires.map((bienSim, index) => (
                                                        <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                                            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                                                <img 
                                                                    src={bienSim.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3'} 
                                                                    alt={bienSim.titre}
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3';
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium text-sm">{bienSim.titre}</h4>
                                                                <p className="text-sm text-gray-500">{bienSim.quartier}, {bienSim.commune}</p>
                                                                <p className="text-sm font-medium text-primary">
                                                                    {formatPrice(bienSim.prix)}
                                                                </p>
                                                            </div>
                                                            <Button 
                                                                variant="outline" 
                                                                size="sm"
                                                                onClick={() => window.location.href = route('demandes.detail', bienSim.id)}
                                                            >
                                                                Voir
                                                            </Button>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-gray-500 text-sm">
                                                        Aucun bien similaire disponible dans le patrimoine public pour le moment
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
} 
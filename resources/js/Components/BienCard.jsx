import React from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, 
    Building, 
    Square,
    Bed,
    Bath,
    Home,
    Building2,
    Heart,
    ChevronRight,
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardFooter } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';

export default function BienCard({ 
    bien, 
    typesBien, 
    communes, 
    prefectures, 
    isFavorite, 
    onToggleFavorite, 
    onViewDetails,
    index = 0,
    isInitialized = true 
}) {
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
        <motion.div
            key={bien.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
                duration: 0.4, 
                delay: isInitialized ? 0 : index * 0.05 
            }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                <div className="relative h-48 overflow-hidden group">
                    <img
                        src={bien.image}
                        alt={bien.titre}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3';
                        }}
                    />
                    {bien.disponibilite === 'bientot' && (
                        <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600 text-white shadow-md">
                            Bientôt disponible
                        </Badge>
                    )}
                    <button 
                        className={`absolute bottom-3 right-3 p-2 rounded-full transition-all ${
                            isFavorite
                                ? 'bg-red-500 text-white' 
                                : 'bg-white/80 text-gray-700 hover:bg-white'
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(bien.id);
                        }}
                    >
                        <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
                    </button>
                </div>

                <CardContent className="p-5 flex-grow">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold line-clamp-1">{bien.titre}</h3>
                        <Badge variant="outline" className="capitalize ml-2 flex-shrink-0">
                            {getPropertyIcon(typesBien.find(t => t.id === bien.type)?.nom || bien.type)}
                            <span className="ml-1">{typesBien.find(t => t.id === bien.type)?.nom || bien.type}</span>
                        </Badge>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="line-clamp-1">
                            {bien.quartier}, 
                            {communes.find(c => c.id === bien.commune)?.nom || bien.commune},
                            {' '}{prefectures.find(p => p.id === bien.prefecture)?.nom || bien.prefecture}
                        </span>
                    </div>

                    {/* Information spécifique aux immeubles */}
                    {bien.immeuble && (
                        <div className="flex items-center text-emerald-600 text-sm mb-3 font-medium">
                            <Building className="h-4 w-4 mr-1" />
                            <span>
                                {bien.nom_immeuble} - {typeof bien.etage === 'string' ? bien.etage : `Étage ${bien.etage}`}
                                {bien.ascenseur && " - Avec ascenseur"}
                            </span>
                        </div>
                    )}

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {bien.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="flex items-center text-gray-600">
                            <Bed className="h-4 w-4 mr-1" />
                            <span className="text-sm">{bien.chambres} ch.</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Bath className="h-4 w-4 mr-1" />
                            <span className="text-sm">{bien.salles_de_bain} SdB</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Square className="h-4 w-4 mr-1" />
                            <span className="text-sm">{bien.surface} m²</span>
                        </div>
                    </div>

                    {/* Affichage des appartements disponibles si c'est un immeuble */}
                    {bien.immeuble && bien.nombre_appartements_disponibles > 1 && (
                        <div className="mb-4 flex items-center text-sm text-orange-600 font-medium">
                            <Home className="h-4 w-4 mr-1" />
                            <span>{bien.nombre_appartements_disponibles} appartements disponibles</span>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="p-5 pt-0">
                    <Button 
                        className="w-full text-white hover:bg-primary-dark group"
                        onClick={() => onViewDetails(bien.id)}
                    >
                        <span>Voir les détails</span>
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
} 
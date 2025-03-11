import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Progress } from '@/Components/ui/progress';
import { Badge } from '@/Components/ui/badge';
import { Separator } from '@/Components/ui/separator';
import { 
    Building2, Home, Building, MapPin, TrendingUp, Users, Warehouse, Scale,
    Banknote, Clock, ThumbsUp, Settings, Activity, BarChart3, PieChart,
    Calendar, AlertTriangle, CheckCircle, RefreshCcw
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ParcImmobilier({ statistiques }) {
    const formatNumber = (number) => {
        return new Intl.NumberFormat('fr-FR').format(number);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'GNF',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    const StatCard = ({ title, value, icon: Icon, description, color }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">{title}</CardTitle>
                    <Icon className={`w-4 h-4 ${color}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{value}</div>
                    {description && (
                        <p className="text-xs text-muted-foreground mt-1">
                            {description}
                        </p>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );

    const ProgressCard = ({ title, value, max, color }) => (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span>{title}</span>
                <span className="font-medium">{value}/{max}</span>
            </div>
            <Progress value={(value / max) * 100} className={`h-2 ${color}`} />
        </div>
    );

    return (
        <AppLayout>
            <Head title="Parc Immobilier - Statistiques" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-2xl font-semibold text-gray-900">Statistiques du Parc Immobilier</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Vue d'ensemble des biens immobiliers du patrimoine public
                        </p>
                    </motion.div>

                    {/* Statistiques principales */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="Total des Biens"
                            value={formatNumber(statistiques.totalBiens)}
                            icon={Building2}
                            description="Nombre total de biens dans le parc"
                            color="text-blue-500"
                        />
                        <StatCard
                            title="Biens Occupés"
                            value={formatNumber(statistiques.biensOccupes)}
                            icon={Home}
                            description={`${statistiques.tauxOccupation}% d'occupation`}
                            color="text-green-500"
                        />
                        <StatCard
                            title="Biens Disponibles"
                            value={formatNumber(statistiques.biensDisponibles)}
                            icon={Building}
                            description="Prêts à être attribués"
                            color="text-yellow-500"
                        />
                        <StatCard
                            title="En Maintenance"
                            value={formatNumber(statistiques.biensEnMaintenance)}
                            icon={Warehouse}
                            description="Biens en rénovation/maintenance"
                            color="text-orange-500"
                        />
                    </div>

                    {/* Valeur et Performance */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Banknote className="w-5 h-5 mr-2 text-green-500" />
                                    Valeur du Patrimoine
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-green-600 mb-2">
                                    {formatCurrency(statistiques.valeurTotaleEstimee)}
                                </div>
                                <div className="space-y-4">
                                    <ProgressCard
                                        title="Excellent état"
                                        value={statistiques.etatBiens.excellent}
                                        max={statistiques.totalBiens}
                                        color="bg-green-500"
                                    />
                                    <ProgressCard
                                        title="Bon état"
                                        value={statistiques.etatBiens.bon}
                                        max={statistiques.totalBiens}
                                        color="bg-blue-500"
                                    />
                                    <ProgressCard
                                        title="État moyen"
                                        value={statistiques.etatBiens.moyen}
                                        max={statistiques.totalBiens}
                                        color="bg-yellow-500"
                                    />
                                    <ProgressCard
                                        title="À rénover"
                                        value={statistiques.etatBiens.aRenover}
                                        max={statistiques.totalBiens}
                                        color="bg-red-500"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Activity className="w-5 h-5 mr-2 text-blue-500" />
                                    Indicateurs de Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Délai d'attribution</span>
                                    <Badge variant="secondary">
                                        {statistiques.indicateursPerformance.delaiMoyenAttribution} jours
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Satisfaction</span>
                                    <Badge variant="secondary" className="bg-green-100">
                                        {statistiques.indicateursPerformance.tauxSatisfaction}%
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Taux de renouvellement</span>
                                    <Badge variant="secondary" className="bg-blue-100">
                                        {statistiques.indicateursPerformance.tauxRenouvellement}%
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Durée d'occupation moyenne</span>
                                    <Badge variant="secondary" className="bg-purple-100">
                                        {statistiques.indicateursPerformance.dureeOccupationMoyenne} ans
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Settings className="w-5 h-5 mr-2 text-orange-500" />
                                    Maintenance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                                            <div className="text-lg font-semibold text-orange-600">
                                                {statistiques.maintenance.programmee}
                                            </div>
                                            <div className="text-xs text-gray-600">Programmées</div>
                                        </div>
                                        <div className="text-center p-3 bg-red-50 rounded-lg">
                                            <div className="text-lg font-semibold text-red-600">
                                                {statistiques.maintenance.urgente}
                                            </div>
                                            <div className="text-xs text-gray-600">Urgentes</div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium">Types d'intervention</div>
                                        {Object.entries(statistiques.maintenance.principauxTypes).map(([type, pourcentage]) => (
                                            <div key={type} className="flex items-center justify-between text-sm">
                                                <span>{type}</span>
                                                <span>{pourcentage}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Répartition détaillée */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <PieChart className="w-5 h-5 mr-2 text-indigo-500" />
                                    Répartition par Type
                                </CardTitle>
                                <CardDescription>Distribution détaillée des biens par catégorie</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {statistiques.repartitionParType.map((type, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className={`w-2 h-2 rounded-full mr-2 bg-${type.color}-500`} />
                                                    <span className="font-medium">{type.nom}</span>
                                                </div>
                                                <Badge variant="secondary">
                                                    {type.nombre} ({type.pourcentage}%)
                                                </Badge>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>Surface moyenne: {type.surfaceMoyenne} m²</div>
                                                <div>Taux d'occupation: {type.tauxOccupation}%</div>
                                            </div>
                                            {type.details && (
                                                <div className="bg-gray-50 p-3 rounded-md text-sm">
                                                    <div className="font-medium mb-2">Détails</div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {Object.entries(type.details).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between">
                                                                <span className="text-gray-600">{key}:</span>
                                                                <span className="font-medium">{value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                                    Répartition Géographique
                                </CardTitle>
                                <CardDescription>Distribution détaillée par région</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {statistiques.repartitionGeographique.map((region, index) => (
                                        <div key={index} className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{region.nom}</span>
                                                <Badge variant="secondary">
                                                    {region.nombre} ({region.pourcentage}%)
                                                </Badge>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>Valeur moyenne: {formatCurrency(region.valeurMoyenne)}</div>
                                                <div>Surface totale: {formatNumber(region.surfaceTotale)} m²</div>
                                            </div>
                                            {region.zones && (
                                                <div className="bg-gray-50 p-3 rounded-md">
                                                    <div className="text-sm font-medium mb-2">Distribution par zone</div>
                                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                                        {Object.entries(region.zones).map(([zone, nombre]) => (
                                                            <div key={zone} className="flex justify-between">
                                                                <span className="text-gray-600">{zone}:</span>
                                                                <span className="font-medium">{nombre}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Tendances et Évolution */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BarChart3 className="w-5 h-5 mr-2 text-purple-500" />
                                    Évolution Mensuelle
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">
                                            {statistiques.evolutionMensuelle.nouveauxBiens}
                                        </div>
                                        <p className="text-sm text-gray-500">nouveaux biens ce mois</p>
                                    </div>
                                    <Separator />
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center">
                                            <div className="font-medium">{statistiques.evolutionMensuelle.biensRenovés}</div>
                                            <p className="text-gray-500">rénovés</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-medium">{statistiques.evolutionMensuelle.demandesTraitées}</div>
                                            <p className="text-gray-500">demandes traitées</p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between text-sm mb-2">
                                            <span>Taux de croissance</span>
                                            <Badge variant="secondary" className="bg-green-100">
                                                +{statistiques.evolutionMensuelle.tauxCroissance}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                                    Tendances
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-sm font-medium mb-2">Types les plus recherchés</div>
                                        {Object.entries(statistiques.tendances.typesPlusRecherches).map(([type, pourcentage]) => (
                                            <div key={type} className="flex items-center justify-between text-sm">
                                                <span>{type}</span>
                                                <span>{pourcentage}%</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Separator />
                                    <div>
                                        <div className="text-sm font-medium mb-2">Évolution des prix</div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Augmentation annuelle</span>
                                            <Badge variant="secondary" className="bg-green-100">
                                                +{statistiques.tendances.evolutionPrix.augmentation}%
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                                    Activité Récente
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">Demandes en attente</span>
                                        <Badge>
                                            {statistiques.evolutionMensuelle.demandesReçues - statistiques.evolutionMensuelle.demandesTraitées}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">Taux de traitement</span>
                                        <Badge variant="secondary" className="bg-green-100">
                                            {Math.round((statistiques.evolutionMensuelle.demandesTraitées / statistiques.evolutionMensuelle.demandesReçues) * 100)}%
                                        </Badge>
                                    </div>
                                    <Separator />
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">
                                                {statistiques.evolutionMensuelle.biensRenovés}
                                            </div>
                                            <p className="text-xs text-gray-500">Rénovations</p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">
                                                {statistiques.evolutionMensuelle.biensVendus}
                                            </div>
                                            <p className="text-xs text-gray-500">Attributions</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Progress } from '@/Components/ui/progress';
import { Badge } from '@/Components/ui/badge';
import { Separator } from '@/Components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { ScrollArea } from '@/Components/ui/scroll-area';
import { 
    Building2, Home, Building, MapPin, TrendingUp, Users, Warehouse,
    Banknote, Clock, ThumbsUp, Settings, Activity, BarChart3, PieChart,
    Calendar, AlertTriangle, CheckCircle, RefreshCcw, ChevronRight,
    Search, Blend, Eye, Filter, Download, Bell, Zap, Globe, Star, ArrowUpRight, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ParcImmobilier({ statistiques }) {
    const [activeFilter, setActiveFilter] = useState('tous');
    const [showDetails, setShowDetails] = useState({});

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

    const toggleDetails = (id) => {
        setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const StatCard = ({ title, value, icon: Icon, description, color, trend, gradient, bgPattern }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative group cursor-pointer"
        >
            <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${gradient}`}>
                {/* Motif de fond animé */}
                <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 ${color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        <Icon className="w-full h-full" />
                    </div>
                    {bgPattern && (
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
                    )}
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                    <div>
                        <CardTitle className="text-sm font-medium text-white/90">{title}</CardTitle>
                        <div className="flex items-center mt-1">
                            <Icon className={`w-5 h-5 text-white mr-2`} />
                            {trend && (
                                <motion.span 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${
                                        trend > 0 ? 'bg-emerald-500/20 text-emerald-100' : 'bg-red-500/20 text-red-100'
                                    }`}
                                >
                                    {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
                                </motion.span>
                            )}
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-full bg-white/20 backdrop-blur-sm`}
                    >
                        <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                    <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-3xl font-bold text-white mb-2"
                    >
                        {value}
                    </motion.div>
                    {description && (
                        <p className="text-white/80 text-sm">{description}</p>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );

    const ModernDetailCard = ({ title, icon: Icon, color, children, className = "" }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            className={`relative ${className}`}
        >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <CardTitle className="flex items-center text-lg">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`p-2 rounded-lg ${color.replace('text-', 'bg-')}/10 mr-3`}
                        >
                            <Icon className={`w-5 h-5 ${color}`} />
                        </motion.div>
                        {title}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto"
                        >
                            <Badge variant="secondary" className="bg-white shadow-sm">
                                <Eye className="w-3 h-3 mr-1" />
                                Live
                            </Badge>
                        </motion.div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">{children}</CardContent>
            </Card>
        </motion.div>
    );

    const AnimatedProgress = ({ value, label, count, color = "blue" }) => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-3 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300"
        >
            <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 capitalize">{label}</span>
                <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                        {count} biens
                    </Badge>
                    <span className="text-sm font-bold text-gray-900">{value.toFixed(1)}%</span>
                </div>
            </div>
            <div className="relative">
                <Progress 
                    value={value}
                    className={`h-3 bg-gray-100`}
                />
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${
                        label === 'excellent' ? 'from-emerald-400 to-emerald-600' :
                        label === 'bon' ? 'from-blue-400 to-blue-600' :
                        label === 'moyen' ? 'from-amber-400 to-amber-600' :
                        'from-red-400 to-red-600'
                    }`}
                />
            </div>
        </motion.div>
    );

    const InteractiveMetric = ({ label, value, onClick }) => (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
        >
            <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {value}
            </div>
            <div className="text-sm text-gray-600 mt-1">{label}</div>
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-2"
            >
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </motion.div>
        </motion.div>
    );

    return (
        <AppLayout>
            <Head title="Parc Immobilier - Tableau de Bord" />

            {/* Hero Section Améliorée */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
                {/* Motif de fond animé */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>

                {/* Contenu principal */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 gap-2"
                        >
                            <Globe className="w-4 h-4" />
                            <span>Patrimoine Bâti de Guinée</span>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </motion.div>
                        
                        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            Gestion du Parc Immobilier
                        </h1>
                        
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                            Plateforme de supervision intelligente pour une gestion optimisée du patrimoine immobilier de l'État
                        </p>

                        {/* Statistiques Clés */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Building2 className="w-8 h-8 text-blue-300" />
                                    <ArrowUpRight className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-1">{formatNumber(statistiques.totalBiens)}</h3>
                                <p className="text-blue-200">Biens Immobiliers</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Users className="w-8 h-8 text-emerald-300" />
                                    <Badge className="bg-emerald-500/20 text-emerald-200 border-0">
                                        +{statistiques.evolutionMensuelle.nouveauxBiens}
                                    </Badge>
                                </div>
                                <h3 className="text-3xl font-bold mb-1">{statistiques.tauxOccupation}%</h3>
                                <p className="text-blue-200">Taux d'Occupation</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Banknote className="w-8 h-8 text-purple-300" />
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-1">{formatCurrency(statistiques.valeurTotaleEstimee)}</h3>
                                <p className="text-blue-200">Valeur Totale</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Activity className="w-8 h-8 text-amber-300" />
                                    <Badge className="bg-amber-500/20 text-amber-200 border-0">
                                        {statistiques.indicateursPerformance.tauxSatisfaction}%
                                    </Badge>
                                </div>
                                <h3 className="text-3xl font-bold mb-1">{statistiques.etatBiens.excellent + statistiques.etatBiens.bon}</h3>
                                <p className="text-blue-200">Biens en Bon État</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Indicateur de défilement */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </div>

            {/* Contenu Principal */}
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    {/* Section Bâtiments Spéciaux */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Bâtiments Spéciaux</h2>
                                <p className="text-gray-500">Gestion des complexes résidentiels et administratifs stratégiques</p>
                            </div>
                            <Badge variant="outline" className="text-blue-600 border-blue-200">
                                {statistiques.batimentsSpeciaux.length} bâtiments
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {statistiques.batimentsSpeciaux.map((batiment, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                    {batiment.nom}
                                                    <Badge variant="secondary" className="ml-2 bg-amber-50 text-amber-700 border-amber-200">
                                                        Premium
                                                    </Badge>
                                                </h3>
                                                <p className="text-sm text-gray-500 flex items-center mt-1">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    {batiment.localisation}
                                                </p>
                                            </div>
                                            <Badge variant={
                                                batiment.etat === 'excellent' ? 'success' :
                                                batiment.etat === 'bon' ? 'default' :
                                                'warning'
                                            }>
                                                {batiment.etat}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {batiment.surface}m²
                                                </div>
                                                <div className="text-xs text-gray-500">Surface</div>
                                            </div>
                                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {batiment.capacite}
                                                </div>
                                                <div className="text-xs text-gray-500">Capacité</div>
                                            </div>
                                            <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                <div className="text-lg font-semibold text-gray-900">
                                                    {batiment.tauxOccupation}%
                                                </div>
                                                <div className="text-xs text-gray-500">Occupation</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-gray-700">Services</div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {batiment.services.map((service, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-gray-600">
                                                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                                        {service}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-600">Valeur estimée:</span>
                                                <span className="font-semibold text-gray-900">
                                                    {formatCurrency(batiment.valeurEstimee)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section Répartition par Type */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Répartition par Type</h2>
                                <p className="text-gray-500">Distribution des biens immobiliers par catégorie</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {statistiques.repartitionParType.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-4 h-4 rounded-full bg-${type.color}-500`} />
                                            <h3 className="font-semibold text-gray-900">{type.nom}</h3>
                                        </div>
                                        <Badge variant="outline">
                                            {type.nombre} ({type.pourcentage}%)
                                        </Badge>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Surface moyenne: {type.surfaceMoyenne}m²</span>
                                            <span>Taux d'occupation: {type.tauxOccupation}%</span>
                                        </div>

                                        {type.caracteristiques && (
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                {Object.entries(type.caracteristiques).map(([key, value]) => (
                                                    <div key={key} className="flex items-center space-x-2 text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                        <span>{key}: {value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section État des Biens */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">État des Biens</h2>
                                <p className="text-gray-500">Analyse de l'état général du patrimoine</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="space-y-4">
                                    {Object.entries(statistiques.etatBiens).map(([etat, nombre]) => (
                                        <AnimatedProgress
                                            key={etat}
                                            label={etat}
                                            value={(nombre / statistiques.totalBiens) * 100}
                                            count={nombre}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(statistiques.indicateursPerformance.indicateursQualite)
                                        .map(([indicateur, valeur]) => (
                                        <InteractiveMetric
                                            key={indicateur}
                                            label={indicateur}
                                            value={valeur}
                                            onClick={() => toggleDetails(indicateur)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}
import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Search, Loader2, CheckCircle, Clock, XCircle, AlertCircle, Download, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Tooltip } from '@/Components/ui/tooltip';
import { Alert, AlertDescription } from '@/Components/ui/alert';

export default function Verification({ title, description }) {
    const [numeroReference, setNumeroReference] = useState('');
    const [loading, setLoading] = useState(false);
    const [demande, setDemande] = useState(null);
    const [error, setError] = useState(null);
    const [recentSearches, setRecentSearches] = useState([]);

    // Charger les recherches récentes du localStorage au chargement
    useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches));
        }
    }, []);

    // Sauvegarder une recherche récente
    const saveRecentSearch = (reference, status) => {
        const newSearch = { reference, status, timestamp: new Date().toISOString() };
        const updatedSearches = [newSearch, ...recentSearches.filter(s => s.reference !== reference)].slice(0, 5);
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!numeroReference.trim()) {
            setError('Veuillez saisir un numéro de référence');
            return;
        }
        
        setLoading(true);
        setError(null);
        setDemande(null);

        try {
            // Ajouter un délai minimum de 500ms pour montrer l'animation de chargement
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const response = await fetch(route('demandes.verification', { numero_reference: numeroReference }));
            const data = await response.json();

            if (response.ok) {
                setDemande(data);
                saveRecentSearch(data.numero_reference, data.statut);
            } else {
                setError(data.message || 'Numéro de référence invalide');
            }
        } catch (err) {
            setError('Une erreur est survenue lors de la vérification');
        } finally {
            setLoading(false);
        }
    };

    const handleSearchHistory = (reference) => {
        setNumeroReference(reference);
        // Déclencher la recherche automatiquement
        const formEvent = { preventDefault: () => {} };
        handleSubmit(formEvent);
    };

    const getStatusColor = (statut) => {
        switch (statut) {
            case 'approuve':
                return 'bg-green-100 text-green-800';
            case 'en_cours':
                return 'bg-blue-100 text-blue-800';
            case 'rejete':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (statut) => {
        switch (statut) {
            case 'approuve':
                return <CheckCircle className="w-4 h-4 mr-1" />;
            case 'en_cours':
                return <Clock className="w-4 h-4 mr-1" />;
            case 'rejete':
                return <XCircle className="w-4 h-4 mr-1" />;
            default:
                return <AlertCircle className="w-4 h-4 mr-1" />;
        }
    };

    const getStatusText = (statut) => {
        switch (statut) {
            case 'approuve':
                return 'Approuvée';
            case 'en_cours':
                return 'En cours';
            case 'rejete':
                return 'Rejetée';
            default:
                return 'Inconnu';
        }
    };

    // Fonction pour calculer le pourcentage d'avancement
    const calculateProgress = (etapes) => {
        if (!etapes || etapes.length === 0) return 0;
        const completedSteps = etapes.filter(etape => etape.complete).length;
        return Math.round((completedSteps / etapes.length) * 100);
    };

    return (
        <AppLayout>
            <Head title={title} />

            <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
                <Card className="shadow-lg border-t-4 border-primary-500 overflow-hidden">
                    <CardHeader className="bg-slate-50 border-b">
                        <CardTitle className="text-2xl font-bold text-gray-900">
                            {title}
                        </CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1">
                                    Numéro de référence
                                </label>
                                <div className="relative">
                                    <Input
                                        id="reference"
                                        type="text"
                                        value={numeroReference}
                                        onChange={(e) => setNumeroReference(e.target.value.toUpperCase())}
                                        placeholder="Ex: DEM-2024-001"
                                        className="block w-full pr-10"
                                        required
                                    />
                                    {numeroReference && (
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                                            onClick={() => setNumeroReference('')}
                                        >
                                            <XCircle className="h-5 w-5" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full transition-all duration-200 hover:scale-[1.02]"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Vérification en cours...
                                    </>
                                ) : (
                                    <>
                                        <Search className="mr-2 h-4 w-4" />
                                        Vérifier la demande
                                    </>
                                )}
                            </Button>
                        </form>

                        {/* Recherches récentes */}
                        {recentSearches.length > 0 && !demande && !loading && (
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Recherches récentes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {recentSearches.map((search, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSearchHistory(search.reference)}
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs 
                                                      ${getStatusColor(search.status)} hover:opacity-80 transition-opacity`}
                                        >
                                            {getStatusIcon(search.status)}
                                            {search.reference}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {error && (
                            <Alert variant="destructive" className="mt-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {demande && (
                            <div className="mt-8 space-y-6">
                                <div className="bg-white p-6 rounded-lg border border-gray-200 relative">
                                    {/* Badge de statut flottant */}
                                    <div className="absolute -top-3 right-4">
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow ${getStatusColor(demande.statut)}`}>
                                            {getStatusIcon(demande.statut)}
                                            {getStatusText(demande.statut)}
                                        </div>
                                    </div>
                                    
                                    {/* Barre de progression */}
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-gray-500">Progression de la demande</span>
                                            <span className="text-xs font-medium">{calculateProgress(demande.etapes)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full ${demande.statut === 'rejete' ? 'bg-red-500' : 'bg-primary-500'}`} 
                                                style={{ width: `${calculateProgress(demande.etapes)}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                Informations de la demande
                                            </h3>
                                            <dl className="space-y-3">
                                                <div>
                                                    <dt className="text-sm text-gray-500">Numéro de référence</dt>
                                                    <dd className="text-sm font-medium text-gray-900">{demande.numero_reference}</dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm text-gray-500">Type de demande</dt>
                                                    <dd className="text-sm font-medium text-gray-900">{demande.type_demande}</dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm text-gray-500">Date de soumission</dt>
                                                    <dd className="text-sm font-medium text-gray-900">
                                                        {format(new Date(demande.date_soumission), 'dd MMMM yyyy', { locale: fr })}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                Informations du demandeur
                                            </h3>
                                            <dl className="space-y-3">
                                                <div>
                                                    <dt className="text-sm text-gray-500">Nom complet</dt>
                                                    <dd className="text-sm font-medium text-gray-900">
                                                        {demande.demandeur.prenom} {demande.demandeur.nom}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm text-gray-500">Email</dt>
                                                    <dd className="text-sm font-medium text-gray-900 flex items-center">
                                                        {demande.demandeur.email}
                                                        <button 
                                                            className="ml-2 text-primary-500 hover:text-primary-600"
                                                            title="Envoyer un email"
                                                        >
                                                            <Mail className="h-4 w-4" />
                                                        </button>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center justify-between">
                                        <span>Suivi de la demande</span>
                                        {demande.statut === 'approuve' && (
                                            <Button size="sm" variant="outline" className="text-xs h-8">
                                                <Download className="h-3.5 w-3.5 mr-1" />
                                                Télécharger l'attestation
                                            </Button>
                                        )}
                                    </h3>
                                    <div className="space-y-8">
                                        {demande.etapes.map((etape, index) => (
                                            <div key={etape.numero} className="relative">
                                                {index !== demande.etapes.length - 1 && (
                                                    <div className={`absolute top-8 left-4 h-full w-0.5 ${etape.complete ? 'bg-primary-500' : 'bg-gray-200'}`} />
                                                )}
                                                <div className="relative flex items-start group">
                                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 
                                                                    ${etape.complete ? 'bg-primary-500 shadow-md' : 'bg-gray-200'} 
                                                                    group-hover:scale-110`}>
                                                        {etape.complete ? (
                                                            <CheckCircle className="w-5 h-5 text-white" />
                                                        ) : demande.statut === 'rejete' && index === demande.etapes.findIndex(e => !e.complete) ? (
                                                            <XCircle className="w-5 h-5 text-gray-400" />
                                                        ) : (
                                                            <Clock className="w-5 h-5 text-gray-400" />
                                                        )}
                                                    </div>
                                                    <div className="ml-4 group-hover:bg-slate-50 p-2 rounded-md transition-colors duration-200 w-full">
                                                        <h4 className="text-base font-medium text-gray-900">
                                                            {etape.titre}
                                                        </h4>
                                                        <p className="mt-1 text-sm text-gray-600">
                                                            {etape.description}
                                                        </p>
                                                        {etape.date && (
                                                            <p className="mt-1 text-xs text-gray-400">
                                                                {format(new Date(etape.date), 'dd MMMM yyyy', { locale: fr })}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </CardContent>
                    
                    {demande && (
                        <CardFooter className="bg-slate-50 border-t flex justify-between">
                            <p className="text-xs text-gray-500">
                                Dernière mise à jour: {format(new Date(), 'dd MMMM yyyy à HH:mm', { locale: fr })}
                            </p>
                            <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => {
                                    setDemande(null);
                                    setNumeroReference('');
                                }}
                            >
                                Nouvelle recherche
                            </Button>
                        </CardFooter>
                    )}
                </Card>
            </div>
        </AppLayout>
    );
}
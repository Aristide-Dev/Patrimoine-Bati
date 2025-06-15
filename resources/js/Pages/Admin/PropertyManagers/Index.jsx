import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { 
    Building2, Search, Filter, Plus, Edit, Trash2, Phone, Mail, 
    MapPin, UserCheck, AlertCircle 
} from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Link } from '@inertiajs/react';

export default function Index({ managers, filters, communes, statuts }) {
    return (
        <AuthenticatedLayout>
            <Head title="Gestion des Gérants Immobiliers" />

            <div className="container mx-auto py-6">
                {/* En-tête */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Gérants Immobiliers</h1>
                        <p className="text-gray-500">Gestion des gérants par commune</p>
                    </div>
                    <Link href={route('admin.property-managers.create')}>
                        <Button className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Nouveau Gérant
                        </Button>
                    </Link>
                </div>

                {/* Filtres */}
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Filtres de recherche</CardTitle>
                        <CardDescription>Affinez votre recherche de gérants</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    type="search"
                                    placeholder="Rechercher..."
                                    className="pl-10"
                                    value={filters.search}
                                    onChange={e => router.get(route('admin.property-managers.index'), { search: e.target.value }, { preserveState: true })}
                                />
                            </div>
                            <Select
                                value={filters.commune}
                                onValueChange={value => router.get(route('admin.property-managers.index'), { commune: value }, { preserveState: true })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Filtrer par commune" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(communes).map(([key, value]) => (
                                        <SelectItem key={key} value={key}>{key}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select
                                value={filters.statut}
                                onValueChange={value => router.get(route('admin.property-managers.index'), { statut: value }, { preserveState: true })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Filtrer par statut" />
                                </SelectTrigger>
                                <SelectContent>
                                    {statuts.map(statut => (
                                        <SelectItem key={statut} value={statut}>{statut}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button 
                                variant="outline"
                                onClick={() => router.get(route('admin.property-managers.index'), {}, { preserveState: true })}
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Réinitialiser
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Liste des gérants */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {managers.data.map(manager => (
                        <Card key={manager.id} className="relative group">
                            <CardContent className="p-6">
                                {/* Actions */}
                                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={route('admin.property-managers.edit', manager.id)}>
                                        <Button size="sm" variant="outline">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Button 
                                        size="sm" 
                                        variant="destructive"
                                        onClick={() => {
                                            if (confirm('Êtes-vous sûr de vouloir supprimer ce gérant ?')) {
                                                router.delete(route('admin.property-managers.destroy', manager.id));
                                            }
                                        }}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>

                                {/* Informations du gérant */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={manager.photo ? `/storage/${manager.photo}` : '/images/our-team/agent.png'} 
                                            alt={manager.nom}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">{manager.nom}</h3>
                                        <p className="text-sm text-gray-500">{manager.service}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge variant="outline">{manager.matricule}</Badge>
                                            <Badge 
                                                variant={manager.is_active ? "success" : "secondary"}
                                            >
                                                {manager.is_active ? 'Actif' : 'Inactif'}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Détails */}
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <UserCheck className="w-4 h-4 mr-2" />
                                        {manager.poste}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {manager.commune}
                                    </div>
                                    {manager.telephone && (
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Phone className="w-4 h-4 mr-2" />
                                            {manager.telephone}
                                        </div>
                                    )}
                                </div>

                                {/* Statistiques */}
                                {manager.statistiques && (
                                    <div className="mt-4 grid grid-cols-3 gap-2 bg-gray-50 rounded-lg p-3">
                                        <div className="text-center">
                                            <div className="text-lg font-semibold text-primary-600">
                                                {manager.statistiques.batiments}
                                            </div>
                                            <div className="text-xs text-gray-500">Bâtiments</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-semibold text-blue-600">
                                                {manager.statistiques.locataires}
                                            </div>
                                            <div className="text-xs text-gray-500">Locataires</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-semibold text-emerald-600">
                                                {manager.statistiques.taux_occupation}
                                            </div>
                                            <div className="text-xs text-gray-500">Occupation</div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                {managers.links && (
                    <div className="mt-6">
                        {/* Votre composant de pagination ici */}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
} 
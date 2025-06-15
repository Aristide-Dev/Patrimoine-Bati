import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
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
import { Textarea } from '@/Components/ui/textarea';
import { Switch } from '@/Components/ui/switch';
import InputError from '@/Components/InputError';

export default function Edit({ manager, communes, statuts }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: 'PUT',
        matricule: manager.matricule,
        nom: manager.nom,
        service: manager.service,
        poste: manager.poste,
        telephone: manager.telephone,
        statut: manager.statut,
        commune: manager.commune,
        description: manager.description,
        statistiques: manager.statistiques || {
            batiments: '0',
            locataires: '0',
            taux_occupation: '0%'
        },
        photo: null,
        is_active: manager.is_active
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.property-managers.update', manager.id), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Modifier ${manager.nom}`} />

            <div className="container mx-auto py-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Modifier le Gérant</h1>
                        <div className="flex items-center space-x-2">
                            <img
                                src={manager.photo ? `/storage/${manager.photo}` : '/images/our-team/agent.png'}
                                alt={manager.nom}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium">{manager.nom}</p>
                                <p className="text-sm text-gray-500">{manager.matricule}</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Informations Personnelles</CardTitle>
                                <CardDescription>Modifier les informations de base du gérant</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="matricule">Matricule</Label>
                                        <Input
                                            id="matricule"
                                            value={data.matricule}
                                            onChange={e => setData('matricule', e.target.value)}
                                            className={errors.matricule ? 'border-red-500' : ''}
                                        />
                                        <InputError message={errors.matricule} />
                                    </div>
                                    <div>
                                        <Label htmlFor="nom">Nom Complet</Label>
                                        <Input
                                            id="nom"
                                            value={data.nom}
                                            onChange={e => setData('nom', e.target.value)}
                                            className={errors.nom ? 'border-red-500' : ''}
                                        />
                                        <InputError message={errors.nom} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="service">Service</Label>
                                        <Input
                                            id="service"
                                            value={data.service}
                                            onChange={e => setData('service', e.target.value)}
                                            error={errors.service}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="poste">Poste</Label>
                                        <Input
                                            id="poste"
                                            value={data.poste}
                                            onChange={e => setData('poste', e.target.value)}
                                            error={errors.poste}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="telephone">Téléphone</Label>
                                        <Input
                                            id="telephone"
                                            value={data.telephone}
                                            onChange={e => setData('telephone', e.target.value)}
                                            error={errors.telephone}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="statut">Statut</Label>
                                        <Select
                                            value={data.statut}
                                            onValueChange={value => setData('statut', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Sélectionner un statut" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {statuts.map(statut => (
                                                    <SelectItem key={statut} value={statut}>
                                                        {statut}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Affectation et Description</CardTitle>
                                <CardDescription>Modifier les détails de la commune et les responsabilités</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="commune">Commune</Label>
                                    <Select
                                        value={data.commune}
                                        onValueChange={value => setData('commune', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionner une commune" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(communes).map(([key, value]) => (
                                                <SelectItem key={key} value={key}>
                                                    {key} - {value}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        error={errors.description}
                                        rows={4}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Statistiques</CardTitle>
                                <CardDescription>Modifier les données de gestion immobilière</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <Label htmlFor="batiments">Bâtiments</Label>
                                        <Input
                                            id="batiments"
                                            type="number"
                                            value={data.statistiques.batiments}
                                            onChange={e => setData('statistiques', {
                                                ...data.statistiques,
                                                batiments: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="locataires">Locataires</Label>
                                        <Input
                                            id="locataires"
                                            type="number"
                                            value={data.statistiques.locataires}
                                            onChange={e => setData('statistiques', {
                                                ...data.statistiques,
                                                locataires: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="taux_occupation">Taux d'occupation</Label>
                                        <Input
                                            id="taux_occupation"
                                            type="text"
                                            value={data.statistiques.taux_occupation}
                                            onChange={e => setData('statistiques', {
                                                ...data.statistiques,
                                                taux_occupation: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Photo et Statut</CardTitle>
                                <CardDescription>Modifier la photo de profil et l'état du compte</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="photo">Nouvelle Photo</Label>
                                    <Input
                                        id="photo"
                                        type="file"
                                        onChange={e => setData('photo', e.target.files[0])}
                                        className={errors.photo ? 'border-red-500' : ''}
                                        accept="image/*"
                                    />
                                    <InputError message={errors.photo} />
                                    {progress && (
                                        <div className="mt-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-primary-600 h-2.5 rounded-full"
                                                    style={{ width: `${progress.percentage}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {progress.percentage}% Téléchargé
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="is_active"
                                        checked={data.is_active}
                                        onCheckedChange={value => setData('is_active', value)}
                                    />
                                    <Label htmlFor="is_active">Compte actif</Label>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end space-x-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Annuler
                            </Button>
                            <Button
                                type="submit"
                                disabled={processing}
                            >
                                Mettre à jour
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 
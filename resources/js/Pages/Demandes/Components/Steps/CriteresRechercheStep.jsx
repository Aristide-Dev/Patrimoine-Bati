import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Checkbox } from '@/Components/ui/checkbox';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2, Home } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function CriteresRechercheStep({ data, setData, errors }) {
  // Commodités disponibles
  const commodites = [
    { id: 'parking', label: 'Parking' },
    { id: 'securite_24h', label: 'Sécurité 24h/24' },
    { id: 'climatisation', label: 'Climatisation' },
    { id: 'ascenseur', label: 'Ascenseur' },
    { id: 'piscine', label: 'Piscine' },
    { id: 'salle_sport', label: 'Salle de sport' },
    { id: 'jardin', label: 'Jardin' },
  ];

  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim() !== '';
  };

  // Liste des champs obligatoires
  const requiredFields = ['type_propriete', 'nombre_chambres'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  // Compter les commodités sélectionnées
  const commoditesSelectionnees = commodites.filter(com => data[com.id]).length;

  return (
    <Card className="border-t-4 border-green-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Critères de recherche</h2>
            <p className="text-gray-500 mt-1">Précisez les caractéristiques du bien immobilier recherché</p>
          </div>
          <div className="flex flex-col items-end">
            <Badge variant={completionPercentage === 100 ? "success" : "secondary"} className="mb-2">
              {completionPercentage === 100 ? (
                <span className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Complet
                </span>
              ) : `${completionPercentage}% complété`}
            </Badge>
            <span className="text-xs text-gray-500">* Champs obligatoires</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="type_propriete" className="font-semibold">Type de propriété*</Label>
              {isFieldComplete('type_propriete') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Select
              value={data.type_propriete}
              onValueChange={(value) => setData('type_propriete', value)}
            >
              <SelectTrigger id="type_propriete" className={`w-full ${errors.type_propriete ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}>
                <SelectValue placeholder="Sélectionnez le type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="appartement">Appartement</SelectItem>
                <SelectItem value="maison">Maison</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="bureau">Bureau</SelectItem>
                <SelectItem value="local_commercial">Local commercial</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.type_propriete} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="nombre_chambres" className="font-semibold">Nombre de chambres*</Label>
              {isFieldComplete('nombre_chambres') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Select
              value={data.nombre_chambres}
              onValueChange={(value) => setData('nombre_chambres', value)}
            >
              <SelectTrigger id="nombre_chambres" className={`w-full ${errors.nombre_chambres ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}>
                <SelectValue placeholder="Nombre de chambres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 chambre</SelectItem>
                <SelectItem value="2">2 chambres</SelectItem>
                <SelectItem value="3">3 chambres</SelectItem>
                <SelectItem value="4">4 chambres</SelectItem>
                <SelectItem value="5+">5 chambres ou plus</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.nombre_chambres} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quartier_prefere" className="font-semibold">Quartier préféré</Label>
            <Input
              id="quartier_prefere"
              value={data.quartier_prefere || ''}
              onChange={(e) => setData('quartier_prefere', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Almadies, Plateau, Sacré-Cœur..."
            />
            <InputError message={errors.quartier_prefere} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="budget_max" className="font-semibold">Budget maximum</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Montant maximal que vous êtes prêt à investir (en FCFA)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="budget_max"
              type="number"
              value={data.budget_max || ''}
              onChange={(e) => setData('budget_max', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: 250000"
            />
            <InputError message={errors.budget_max} className="mt-1 text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Label className="font-semibold">Commodités souhaitées</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Sélectionnez les équipements et services que vous souhaitez</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Badge variant="outline" className="bg-gray-100">
              {commoditesSelectionnees} sélectionnée{commoditesSelectionnees > 1 ? 's' : ''}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 p-4 border rounded-md bg-gray-50">
            {commodites.map((commodite) => (
              <div key={commodite.id} className="flex items-center space-x-2">
                <Checkbox
                  id={commodite.id}
                  checked={data[commodite.id] || false}
                  onCheckedChange={(checked) => setData(commodite.id, checked)}
                  className="text-green-500 focus:ring-green-500"
                />
                <Label htmlFor={commodite.id} className="text-sm font-medium cursor-pointer">{commodite.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="commentaires" className="font-semibold">Commentaires supplémentaires</Label>
          <textarea
            id="commentaires"
            value={data.commentaires || ''}
            onChange={(e) => setData('commentaires', e.target.value)}
            className="w-full h-24 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Précisez ici toute autre exigence ou information importante concernant votre recherche..."
          ></textarea>
          <InputError message={errors.commentaires} className="mt-1 text-sm" />
        </div>
      </CardContent>
    </Card>
  );
}
import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2, MapPin } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function LocalisationStep({ data, setData, errors }) {
  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim && data[fieldName].trim() !== '' || 
           (typeof data[fieldName] === 'number' && !isNaN(data[fieldName]));
  };

  // Liste des champs obligatoires
  const requiredFields = ['region', 'prefecture', 'commune', 'quartier'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  return (
    <Card className="border-t-4 border-green-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Localisation</h2>
            <p className="text-gray-500 mt-1">Veuillez fournir les informations de votre localisation</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="region" className="font-semibold">Région*</Label>
              {isFieldComplete('region') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Select
              value={data.region} 
              onValueChange={(value) => setData('region', value)}
            >
              <SelectTrigger className={`w-full ${errors.region ? 'border-red-500' : 'focus:border-green-500'} transition-colors`}>
                <SelectValue placeholder="Sélectionnez la région" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conakry">Conakry</SelectItem>
                <SelectItem value="boke">Boké</SelectItem>
                <SelectItem value="kindia">Kindia</SelectItem>
                <SelectItem value="mamou">Mamou</SelectItem>
                <SelectItem value="labe">Labé</SelectItem>
                <SelectItem value="kankan">Kankan</SelectItem>
                <SelectItem value="faranah">Faranah</SelectItem>
                <SelectItem value="nzerekore">N'Zérékoré</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.region} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="prefecture" className="font-semibold">Préfecture*</Label>
              {isFieldComplete('prefecture') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="prefecture"
              value={data.prefecture}
              onChange={(e) => setData('prefecture', e.target.value)}
              className={`border ${errors.prefecture ? 'border-red-500' : 'focus:border-green-500'} transition-colors`}
              placeholder="Entrez votre préfecture"
            />
            <InputError message={errors.prefecture} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="commune" className="font-semibold">Commune*</Label>
              {isFieldComplete('commune') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="commune"
              value={data.commune}
              onChange={(e) => setData('commune', e.target.value)}
              className={`border ${errors.commune ? 'border-red-500' : 'focus:border-green-500'} transition-colors`}
              placeholder="Entrez votre commune"
            />
            <InputError message={errors.commune} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="quartier" className="font-semibold">Quartier*</Label>
              {isFieldComplete('quartier') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="quartier"
              value={data.quartier}
              onChange={(e) => setData('quartier', e.target.value)}
              className={`border ${errors.quartier ? 'border-red-500' : 'focus:border-green-500'} transition-colors`}
              placeholder="Entrez votre quartier"
            />
            <InputError message={errors.quartier} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="zone" className="font-semibold">Zone</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Indiquez la classification de votre zone d'habitation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select
              value={data.zone}
              onValueChange={(value) => setData('zone', value)}
            >
              <SelectTrigger className="w-full focus:border-green-500 transition-colors">
                <SelectValue placeholder="Sélectionnez la zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urbaine">Urbaine</SelectItem>
                <SelectItem value="periurbaine">Périurbaine</SelectItem>
                <SelectItem value="rurale">Rurale</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.zone} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="adresse" className="font-semibold">Adresse</Label>
            <Input
              id="adresse"
              value={data.adresse}
              onChange={(e) => setData('adresse', e.target.value)}
              className="focus:border-green-500 transition-colors"
              placeholder="Ex: Rue 10, Porte 123"
            />
            <InputError message={errors.adresse} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="longitude" className="font-semibold">Longitude</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Coordonnée géographique est-ouest (entre -180 et 180)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="longitude"
              type="number"
              step="0.000001"
              value={data.longitude}
              onChange={(e) => setData('longitude', e.target.value)}
              className="focus:border-green-500 transition-colors"
              placeholder="Ex: -13.712"
            />
            <InputError message={errors.longitude} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="latitude" className="font-semibold">Latitude</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Coordonnée géographique nord-sud (entre -90 et 90)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="latitude"
              type="number"
              step="0.000001"
              value={data.latitude}
              onChange={(e) => setData('latitude', e.target.value)}
              className="focus:border-green-500 transition-colors"
              placeholder="Ex: 9.509"
            />
            <InputError message={errors.latitude} className="mt-1 text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
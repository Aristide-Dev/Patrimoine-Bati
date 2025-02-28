import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2 } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function DetailsFonctionnaireStep({ data, setData, errors }) {
  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim() !== '';
  };

  // Liste des champs obligatoires
  const requiredFields = ['matricule', 'ministere', 'fonction'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  return (
    <Card className="border-t-4 border-green-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Informations professionnelles</h2>
            <p className="text-gray-500 mt-1">Veuillez fournir vos informations professionnelles</p>
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
              <Label htmlFor="matricule" className="font-semibold">Matricule*</Label>
              {isFieldComplete('matricule') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="matricule"
              value={data.matricule}
              onChange={(e) => setData('matricule', e.target.value)}
              className={`border ${errors.matricule ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Entrez votre matricule"
            />
            <InputError message={errors.matricule} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="ministere" className="font-semibold">Ministère*</Label>
              {isFieldComplete('ministere') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Select
              value={data.ministere}
              onValueChange={(value) => setData('ministere', value)}
            >
              <SelectTrigger className={`w-full ${errors.ministere ? 'border-red-500' : 'focus:border-blue-500'}`}>
                <SelectValue placeholder="Sélectionnez votre ministère" />
              </SelectTrigger>
              <SelectContent searchable>
                <SelectItem value="education">Ministère de l'Éducation</SelectItem>
                <SelectItem value="sante">Ministère de la Santé</SelectItem>
                <SelectItem value="finance">Ministère des Finances</SelectItem>
                <SelectItem value="justice">Ministère de la Justice</SelectItem>
                <SelectItem value="defense">Ministère de la Défense</SelectItem>
                <SelectItem value="agriculture">Ministère de l'Agriculture</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.ministere} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="direction" className="font-semibold">Direction</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Indiquez la direction à laquelle vous êtes rattaché</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="direction"
              value={data.direction}
              onChange={(e) => setData('direction', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Direction des Ressources Humaines"
            />
            <InputError message={errors.direction} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="font-semibold">Service</Label>
            <Input
              id="service"
              value={data.service}
              onChange={(e) => setData('service', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Service Formation"
            />
            <InputError message={errors.service} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="fonction" className="font-semibold">Fonction*</Label>
              {isFieldComplete('fonction') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="fonction"
              value={data.fonction}
              onChange={(e) => setData('fonction', e.target.value)}
              className={`border ${errors.fonction ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Ex: Chef de service"
            />
            <InputError message={errors.fonction} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="categorie" className="font-semibold">Catégorie</Label>
            <Select
              value={data.categorie}
              onValueChange={(value) => setData('categorie', value)}
            >
              <SelectTrigger className="w-full focus:border-blue-500">
                <SelectValue placeholder="Sélectionnez votre catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">Catégorie A</SelectItem>
                <SelectItem value="B">Catégorie B</SelectItem>
                <SelectItem value="C">Catégorie C</SelectItem>
                <SelectItem value="D">Catégorie D</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.categorie} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date_recrutement" className="font-semibold">Date de recrutement</Label>
            <Input
              id="date_recrutement"
              type="date"
              value={data.date_recrutement}
              onChange={(e) => setData('date_recrutement', e.target.value)}
              className="focus:border-blue-500 transition-colors"
            />
            <InputError message={errors.date_recrutement} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lieu_travail" className="font-semibold">Lieu de travail</Label>
            <Input
              id="lieu_travail"
              value={data.lieu_travail}
              onChange={(e) => setData('lieu_travail', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Dakar Centre"
            />
            <InputError message={errors.lieu_travail} className="mt-1 text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
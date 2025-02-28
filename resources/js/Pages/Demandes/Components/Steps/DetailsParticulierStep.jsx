import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2 } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function DetailsParticulierStep({ data, setData, errors }) {
  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim() !== '';
  };

  // Liste des champs obligatoires
  const requiredFields = ['profession', 'employeur', 'revenu_mensuel'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  return (
    <Card className="border-t-4 border-blue-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Informations professionnelles</h2>
            <p className="text-gray-500 mt-1">Veuillez fournir vos détails professionnels</p>
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
              <Label htmlFor="profession" className="font-semibold">Profession*</Label>
              {isFieldComplete('profession') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="profession"
              value={data.profession}
              onChange={(e) => setData('profession', e.target.value)}
              className={`border ${errors.profession ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Entrez votre profession"
            />
            <InputError message={errors.profession} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="employeur" className="font-semibold">Employeur*</Label>
              {isFieldComplete('employeur') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="employeur"
              value={data.employeur}
              onChange={(e) => setData('employeur', e.target.value)}
              className={`border ${errors.employeur ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Nom de votre employeur actuel"
            />
            <InputError message={errors.employeur} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="duree_emploi" className="font-semibold">Durée dans l'emploi actuel</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Indiquez depuis combien de temps vous travaillez à ce poste (en années et mois)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {isFieldComplete('duree_emploi') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="duree_emploi"
              value={data.duree_emploi}
              onChange={(e) => setData('duree_emploi', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: 2 ans et 6 mois"
            />
            <InputError message={errors.duree_emploi} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="revenu_mensuel" className="font-semibold">Revenu mensuel*</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Montant brut de votre salaire mensuel</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {isFieldComplete('revenu_mensuel') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="revenu_mensuel"
              type="number"
              value={data.revenu_mensuel}
              onChange={(e) => setData('revenu_mensuel', e.target.value)}
              className={`border ${errors.revenu_mensuel ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Ex: 300000"
            />
            <InputError message={errors.revenu_mensuel} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="secteur_activite" className="font-semibold">Secteur d'activité</Label>
            <Input
              id="secteur_activite"
              value={data.secteur_activite}
              onChange={(e) => setData('secteur_activite', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Technologies, Santé, Éducation..."
            />
            <InputError message={errors.secteur_activite} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="adresse_professionnelle" className="font-semibold">Adresse professionnelle</Label>
            <Input
              id="adresse_professionnelle"
              value={data.adresse_professionnelle}
              onChange={(e) => setData('adresse_professionnelle', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Adresse complète de votre lieu de travail"
            />
            <InputError message={errors.adresse_professionnelle} className="mt-1 text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
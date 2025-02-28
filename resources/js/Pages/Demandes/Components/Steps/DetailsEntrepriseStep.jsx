import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2 } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function DetailsEntrepriseStep({ data, setData, errors }) {
  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim() !== '';
  };

  // Liste des champs obligatoires
  const requiredFields = ['nom_entreprise', 'ninea', 'registre_commerce'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  return (
    <Card className="border-t-4 border-purple-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Informations de l'entreprise</h2>
            <p className="text-gray-500 mt-1">Veuillez fournir les détails de votre entreprise</p>
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
              <Label htmlFor="nom_entreprise" className="font-semibold">Nom de l'entreprise*</Label>
              {isFieldComplete('nom_entreprise') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="nom_entreprise"
              value={data.nom_entreprise}
              onChange={(e) => setData('nom_entreprise', e.target.value)}
              className={`border ${errors.nom_entreprise ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Entrez le nom de l'entreprise"
            />
            <InputError message={errors.nom_entreprise} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="ninea" className="font-semibold">NINEA*</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Numéro d'Identification Nationale des Entreprises et Associations</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {isFieldComplete('ninea') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="ninea"
              value={data.ninea}
              onChange={(e) => setData('ninea', e.target.value)}
              className={`border ${errors.ninea ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Ex: SN-DAK-XXXX-XXXX"
            />
            <InputError message={errors.ninea} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="registre_commerce" className="font-semibold">Registre de commerce*</Label>
              {isFieldComplete('registre_commerce') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="registre_commerce"
              value={data.registre_commerce}
              onChange={(e) => setData('registre_commerce', e.target.value)}
              className={`border ${errors.registre_commerce ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Ex: SNDKRXXXX-XXXX"
            />
            <InputError message={errors.registre_commerce} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="secteur_activite" className="font-semibold">Secteur d'activité</Label>
            <Input
              id="secteur_activite"
              value={data.secteur_activite}
              onChange={(e) => setData('secteur_activite', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Technologies, Commerce, Services..."
            />
            <InputError message={errors.secteur_activite} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="nom_administrateur" className="font-semibold">Nom de l'administrateur</Label>
              {isFieldComplete('nom_administrateur') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="nom_administrateur"
              value={data.nom_administrateur}
              onChange={(e) => setData('nom_administrateur', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Nom complet de l'administrateur"
            />
            <InputError message={errors.nom_administrateur} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="poste_demandeur" className="font-semibold">Poste du demandeur</Label>
            <Input
              id="poste_demandeur"
              value={data.poste_demandeur}
              onChange={(e) => setData('poste_demandeur', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Directeur Général, Responsable RH..."
            />
            <InputError message={errors.poste_demandeur} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="adresse_entreprise" className="font-semibold">Adresse</Label>
            <Input
              id="adresse_entreprise"
              value={data.adresse_entreprise}
              onChange={(e) => setData('adresse_entreprise', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Adresse complète de l'entreprise"
            />
            <InputError message={errors.adresse_entreprise} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone_entreprise" className="font-semibold">Téléphone entreprise</Label>
            <Input
              id="telephone_entreprise"
              value={data.telephone_entreprise}
              onChange={(e) => setData('telephone_entreprise', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: 33 XXX XX XX"
            />
            <InputError message={errors.telephone_entreprise} className="mt-1 text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
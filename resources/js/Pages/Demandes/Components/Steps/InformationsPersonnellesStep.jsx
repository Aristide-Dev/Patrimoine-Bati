import React from 'react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2 } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function InformationsPersonnellesStep({ data, setData, errors }) {
  // Fonction pour vérifier si un champ est rempli
  const isFieldComplete = (fieldName) => {
    return data[fieldName] && data[fieldName].trim() !== '';
  };

  // Liste des champs obligatoires
  const requiredFields = ['nom', 'prenom', 'email', 'telephone'];
  
  // Calculer le pourcentage de complétion
  const completedRequiredFields = requiredFields.filter(field => isFieldComplete(field)).length;
  const completionPercentage = Math.round((completedRequiredFields / requiredFields.length) * 100);

  return (
    <Card className="border-t-4 border-blue-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Informations personnelles</h2>
            <p className="text-gray-500 mt-1">Veuillez fournir vos informations d'identité</p>
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
              <Label htmlFor="nom" className="font-semibold">Nom*</Label>
              {isFieldComplete('nom') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="nom"
              value={data.nom}
              onChange={(e) => setData('nom', e.target.value)}
              className={`border ${errors.nom ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Entrez votre nom de famille"
            />
            <InputError message={errors.nom} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="prenom" className="font-semibold">Prénom*</Label>
              {isFieldComplete('prenom') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="prenom"
              value={data.prenom}
              onChange={(e) => setData('prenom', e.target.value)}
              className={`border ${errors.prenom ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Entrez votre prénom"
            />
            <InputError message={errors.prenom} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date_naissance" className="font-semibold">Date de naissance</Label>
            <Input
              id="date_naissance"
              type="date"
              value={data.date_naissance}
              onChange={(e) => setData('date_naissance', e.target.value)}
              className="focus:border-blue-500 transition-colors"
            />
            <InputError message={errors.date_naissance} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lieu_naissance" className="font-semibold">Lieu de naissance</Label>
            <Input
              id="lieu_naissance"
              value={data.lieu_naissance}
              onChange={(e) => setData('lieu_naissance', e.target.value)}
              className="focus:border-blue-500 transition-colors"
              placeholder="Ex: Macenta"
            />
            <InputError message={errors.lieu_naissance} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="nationalite" className="font-semibold">Nationalité</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-64">Indiquez votre nationalité telle qu'elle figure sur votre pièce d'identité</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select
              value={data.nationalite}
              onValueChange={(value) => setData('nationalite', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre nationalité" />
              </SelectTrigger>
              <SelectContent searchable>
                <SelectItem Select={true} value="guinéenne">Guinéenne</SelectItem>
                {/* <SelectItem value="senegalaise">Sénégalaise</SelectItem>
                <SelectItem value="malienne">Malienne</SelectItem>
                <SelectItem value="ivoirienne">Ivoirienne</SelectItem>
                <SelectItem value="française">Française</SelectItem>
                <SelectItem value="gambienne">Gambienne</SelectItem>
                <SelectItem value="autre">Autre</SelectItem> */}
              </SelectContent>
            </Select>
            <InputError message={errors.nationalite} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="situation_familiale" className="font-semibold">Situation familiale</Label>
            <Select
              value={data.situation_familiale}
              onValueChange={(value) => setData('situation_familiale', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre situation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="celibataire">Célibataire</SelectItem>
                <SelectItem value="marie">Marié(e)</SelectItem>
                <SelectItem value="divorce">Divorcé(e)</SelectItem>
                <SelectItem value="veuf">Veuf(ve)</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.situation_familiale} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="email" className="font-semibold">Email*</Label>
              {isFieldComplete('email') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className={`border ${errors.email ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="amadoudia@exemple.com"
            />
            <InputError message={errors.email} className="mt-1 text-sm" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="telephone" className="font-semibold">Téléphone*</Label>
              {isFieldComplete('telephone') && <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />}
            </div>
            <Input
              id="telephone"
              value={data.telephone}
              onChange={(e) => setData('telephone', e.target.value)}
              className={`border ${errors.telephone ? 'border-red-500' : 'focus:border-blue-500'} transition-colors`}
              placeholder="Ex: 6xx xx xx xx"
            />
            <InputError message={errors.telephone} className="mt-1 text-sm" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
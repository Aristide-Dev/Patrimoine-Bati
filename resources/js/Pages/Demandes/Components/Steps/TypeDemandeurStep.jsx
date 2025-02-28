import React from 'react';
import { Label } from '@/Components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Card, CardContent } from "@/Components/ui/card";
import { BadgeInfo, Building2, Briefcase, User } from 'lucide-react';
import InputError from '@/Components/InputError';
import { Alert, AlertDescription } from '@/Components/ui/alert';

export default function TypeDemandeurStep({ data, setData, errors }) {
  const demandeurTypes = [
    {
      id: 'fonctionnaire',
      label: 'Fonctionnaire',
      description: 'Agents de l\'État et employés du secteur public',
      icon: <Briefcase className="h-8 w-8 text-blue-500" />
    },
    {
      id: 'entreprise',
      label: 'Entreprise',
      description: 'Sociétés, organisations et entités commerciales',
      icon: <Building2 className="h-8 w-8 text-indigo-500" />
    },
    {
      id: 'particulier',
      label: 'Particulier',
      description: 'Personnes individuelles ou indépendantes',
      icon: <User className="h-8 w-8 text-green-500" />
    },
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Choisissez votre type de demandeur</h2>
        <p className="text-gray-600 mt-2">
          Le type de demandeur détermine les informations et documents qui vous seront demandés
        </p>
      </div>
      
      {!data.type_demandeur && (
        <Alert className="bg-blue-50 border-blue-200 text-blue-800 mb-6">
          <BadgeInfo className="h-4 w-4 text-blue-500" />
          <AlertDescription>
            Veuillez sélectionner le type de demandeur qui correspond le mieux à votre situation.
          </AlertDescription>
        </Alert>
      )}

      <RadioGroup
        value={data.type_demandeur}
        onValueChange={(value) => setData('type_demandeur', value)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {demandeurTypes.map((type) => (
          <div key={type.id} className="relative">
            <RadioGroupItem
              value={type.id}
              id={type.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={type.id}
              className="flex flex-col h-full p-6 border-2 rounded-lg cursor-pointer transition-all
              peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2
              peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50
              hover:border-blue-300 hover:bg-blue-50/50"
            >
              <div className="flex items-center justify-center mb-4">
                {type.icon}
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">{type.label}</h3>
                <p className="text-sm text-gray-500 mt-1">{type.description}</p>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
      
      <InputError message={errors.type_demandeur} className="mt-2" />
    </div>
  );
}
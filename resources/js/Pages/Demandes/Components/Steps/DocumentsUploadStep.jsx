import React from 'react';
import { Label } from '@/Components/ui/label';
import { FileInput } from '@/Components/ui/file-input';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2, FileText, AlertTriangle } from 'lucide-react';
import InputError from '@/Components/InputError';
import { toast } from 'sonner';

export default function DocumentsUploadStep({ data, setData, errors }) {
  const getDocumentsRequis = () => {
    const documentsCommuns = [
      { id: 'cni', label: "Copie de la Carte Nationale d'Identité", required: true },
      { id: 'photo', label: "Photo d'identité récente", required: true },
      { id: 'certificat_residence', label: "Certificat de résidence", required: true },
    ];

    const documentsSpecifiques = {
      fonctionnaire: [
        { id: 'carte_professionnelle', label: "Carte professionnelle", required: true },
        { id: 'attestation_service', label: "Attestation de service", required: true },
        { id: 'bulletin_salaire', label: "Les 3 derniers bulletins de salaire", required: true },
        { id: 'decision_affectation', label: "Décision d'affectation", required: true },
      ],
      entreprise: [
        { id: 'registre_commerce', label: "Registre de commerce", required: true },
        { id: 'ninea', label: "Attestation NINEA", required: true },
        { id: 'statuts', label: "Statuts de l'entreprise", required: true },
        { id: 'bilan', label: "Bilan des 2 derniers exercices", required: true },
      ],
      particulier: [
        { id: 'attestation_travail', label: "Attestation de travail", required: true },
        { id: 'bulletins_salaire', label: "Les 3 derniers bulletins de salaire", required: true },
      ],
    };

    return [
      ...documentsCommuns,
      ...(documentsSpecifiques[data.type_demandeur] || []),
    ];
  };

  const handleFileChange = (documentId, file) => {
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error('Fichier trop volumineux', {
        description: 'La taille maximale autorisée est de 5MB'
      });
      return;
    }

    setData('documents', {
      ...data.documents,
      [documentId]: file
    });
  };

  const documents = getDocumentsRequis();
  
  // Calculer le pourcentage de complétion
  const uploadedDocuments = Object.keys(data.documents || {}).length;
  const requiredDocuments = documents.filter(doc => doc.required).length;
  const completionPercentage = Math.round((uploadedDocuments / requiredDocuments) * 100);
  
  // Vérifier si un document est téléchargé
  const isDocumentUploaded = (documentId) => {
    return data.documents && data.documents[documentId];
  };

  // Formater la taille du fichier
  const formatFileSize = (size) => {
    if (size < 1024) return `${size} o`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} Ko`;
    return `${(size / (1024 * 1024)).toFixed(2)} Mo`;
  };

  return (
    <Card className="border-t-4 border-amber-500 shadow-md">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Documents requis</h2>
            <p className="text-gray-500 mt-1">Veuillez télécharger les documents demandés pour compléter votre dossier</p>
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
            <span className="text-xs text-gray-500">* Documents obligatoires</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
            <div>
              <p className="text-amber-800 font-medium">Instructions importantes</p>
              <ul className="text-sm text-amber-700 mt-1 list-disc list-inside">
                <li>Formats acceptés : PDF, JPG, PNG</li>
                <li>Taille maximale par fichier : 5 Mo</li>
                <li>Les documents doivent être lisibles et non expirés</li>
                <li>Pour des documents comportant plusieurs pages, merci de les scanner dans un seul fichier PDF</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className={`p-4 border rounded-md ${isDocumentUploaded(doc.id) ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'} transition-colors`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className={`h-5 w-5 ${isDocumentUploaded(doc.id) ? 'text-green-500' : 'text-gray-400'} mr-2`} />
                    <Label htmlFor={doc.id} className="font-semibold">
                      {doc.label}
                      {doc.required && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                  </div>
                  {isDocumentUploaded(doc.id) && (
                    <Badge variant="success" className="bg-green-100 text-green-800 flex items-center">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Téléchargé
                    </Badge>
                  )}
                </div>
                
                <FileInput
                  id={doc.id}
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(doc.id, e.target.files[0])}
                  className={`w-full ${isDocumentUploaded(doc.id) ? 'border-green-300' : ''}`}
                />
                
                <InputError message={errors[`documents.${doc.id}`]} className="mt-1 text-sm" />
                
                {isDocumentUploaded(doc.id) ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600 font-medium">
                      {data.documents[doc.id].name.length > 25 
                        ? `${data.documents[doc.id].name.substring(0, 25)}...` 
                        : data.documents[doc.id].name}
                    </span>
                    <span className="text-gray-500">
                      {formatFileSize(data.documents[doc.id].size)}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center mt-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64">Assurez-vous que le document est clair, complet et à jour</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <p className="text-xs text-gray-500 ml-2">
                      Cliquez ou glissez-déposez votre fichier ici
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
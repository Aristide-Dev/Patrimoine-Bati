import React from 'react';
import { Label } from '@/Components/ui/label';
import { FileInput } from '@/Components/ui/file-input';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { InfoIcon, CheckCircle2, FileText, User, Building, Briefcase, AlertTriangle } from 'lucide-react';
import InputError from '@/Components/InputError';
import { toast } from 'sonner';
import { Checkbox } from '@/Components/ui/checkbox';

export default function ConfirmationStep({ data, setData, errors }) {
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
        { id: 'attestation_regularite', label: "Attestation de régularité fiscale", required: true },
      ],
      particulier: [
        { id: 'attestation_travail', label: "Attestation de travail", required: true },
        { id: 'bulletins_salaire', label: "Les 3 derniers bulletins de salaire", required: true },
        { id: 'attestation_revenus', label: "Attestation de revenus pour les non-salariés", required: false },
        { id: 'releve_bancaire', label: "Relevés bancaires des 3 derniers mois", required: true },
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

  // Obtenir l'icône correspondant au type de demandeur
  const getDemandeurIcon = () => {
    switch (data.type_demandeur) {
      case 'fonctionnaire':
        return <Briefcase className="h-5 w-5 text-blue-500" />;
      case 'entreprise':
        return <Building className="h-5 w-5 text-indigo-500" />;
      case 'particulier':
        return <User className="h-5 w-5 text-emerald-500" />;
      default:
        return <User className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-blue-500 shadow-md">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Confirmation de la demande</h2>
              <p className="text-gray-500 mt-1">Vérifiez les informations de votre demande et téléchargez les documents nécessaires</p>
            </div>
            <div className="flex flex-col items-end">
              <Badge variant={completionPercentage === 100 ? "success" : "secondary"} className="mb-2">
                {completionPercentage === 100 ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Dossier complet
                  </span>
                ) : `${completionPercentage}% complété`}
              </Badge>
            </div>
          </div>

          {/* Récapitulatif des informations */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-5 mb-6">
            <div className="flex items-center mb-4">
              {getDemandeurIcon()}
              <h3 className="font-semibold text-blue-700 ml-2">Récapitulatif du demandeur</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Type de demandeur</p>
                  <p className="font-medium capitalize text-gray-800">{data.type_demandeur}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nom complet</p>
                  <p className="font-medium text-gray-800">{`${data.nom} ${data.prenom}`}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="font-medium text-gray-800">{data.email}</p>
                  <p className="font-medium text-gray-800">{data.telephone}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="font-medium text-gray-800">{`${data.commune}, ${data.quartier}`}</p>
                  <p className="font-medium text-gray-800">{data.adresse}</p>
                </div>

                {/* Informations spécifiques selon le type de demandeur */}
                {data.type_demandeur === 'fonctionnaire' && (
                  <div className="bg-blue-100 p-3 rounded-md">
                    <p className="text-sm text-blue-700 font-medium">Informations professionnelles</p>
                    <p className="text-sm mt-1"><span className="text-gray-500">Matricule:</span> <span className="font-medium">{data.matricule}</span></p>
                    <p className="text-sm mt-1"><span className="text-gray-500">Ministère:</span> <span className="font-medium">{data.ministere}</span></p>
                  </div>
                )}

                {data.type_demandeur === 'entreprise' && (
                  <div className="bg-indigo-100 p-3 rounded-md">
                    <p className="text-sm text-indigo-700 font-medium">Informations entreprise</p>
                    <p className="text-sm mt-1"><span className="text-gray-500">Entreprise:</span> <span className="font-medium">{data.nom_entreprise}</span></p>
                    <p className="text-sm mt-1"><span className="text-gray-500">NINEA:</span> <span className="font-medium">{data.ninea}</span></p>
                  </div>
                )}

                {data.type_demandeur === 'particulier' && (
                  <div className="bg-emerald-100 p-3 rounded-md">
                    <p className="text-sm text-emerald-700 font-medium">Informations professionnelles</p>
                    <p className="text-sm mt-1"><span className="text-gray-500">Profession:</span> <span className="font-medium">{data.profession}</span></p>
                    <p className="text-sm mt-1"><span className="text-gray-500">Employeur:</span> <span className="font-medium">{data.employeur}</span></p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Alerte pour les documents */}
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
              <div>
                <p className="text-amber-800 font-medium">Veuillez vérifier et finaliser votre dossier</p>
                <ul className="text-sm text-amber-700 mt-1 list-disc list-inside">
                  <li>Assurez-vous que toutes vos informations sont correctes</li>
                  <li>Téléchargez tous les documents obligatoires pour compléter votre dossier</li>
                  <li>Formats acceptés : PDF, JPG, PNG (max. 5 Mo par fichier)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liste des documents */}
          <h3 className="font-semibold text-gray-800 mb-4">Documents requis <span className="text-xs text-gray-500">* obligatoire</span></h3>
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

      <Card className="p-6">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="confidentialite"
            checked={data.confidentialite_acceptee}
            onCheckedChange={(checked) => {
              setData('confidentialite_acceptee', checked);
            }}
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="confidentialite"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              J'accepte les conditions de confidentialité
            </Label>
            <p className="text-sm text-gray-500">
              En cochant cette case, vous acceptez que vos informations personnelles soient traitées conformément à notre politique de confidentialité.
            </p>
          </div>
        </div>
        {errors.confidentialite_acceptee && (
          <p className="text-sm text-red-500 mt-1">{errors.confidentialite_acceptee}</p>
        )}
      </Card>
    </div>
  );
}
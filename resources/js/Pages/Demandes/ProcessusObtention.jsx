import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Clock, Users, FileText, CheckCircle } from 'lucide-react';

const ProcessusObtention = () => {
  return (
    <AppLayout>
      <Head title="Processus d'Obtention de Bien Immobilier" />
      <div className="max-w-7xl mx-auto py-32 md:py-16 px-4">
        <Card className="shadow-lg border-t-4 border-blue-600 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900">Processus d'Obtention de Bien Immobilier</CardTitle>
            <CardDescription className="text-gray-700">
              Guide des étapes et documents nécessaires pour obtenir un bien immobilier via le Patrimoine Bâti Public en Guinée.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-4">
              Le Patrimoine Bâti Public en Guinée offre aux citoyens la possibilité d'acquérir des biens immobiliers à des conditions avantageuses. Ce guide vous explique les documents requis, les services concernés et le processus à suivre.
            </p>
          </CardContent>
        </Card>

        {/* Processus d'Obtention avec délais et services */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Processus d'Obtention et Délais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {etapesProcessus.map((etape, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{etape.nom}</h3>
                    <p className="text-gray-700 text-sm mt-1">{etape.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex items-center gap-2 text-gray-800 mb-1">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Délai de traitement :</span>
                        </div>
                        <p className="text-gray-700 text-sm">{etape.delai}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex items-center gap-2 text-gray-800 mb-1">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Service responsable :</span>
                        </div>
                        <p className="text-gray-700 text-sm">{etape.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Documents Requis */}
        <Card className="shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600" />
              Documents Requis
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4">
            {documentsRequis.map((doc, index) => (
              <div key={index} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0">
                <div className="bg-gray-100 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{doc.nom}</h3>
                  <p className="text-gray-700 text-sm mt-1">{doc.description}</p>
                  {doc.serviceVerification && (
                    <p className="text-sm text-blue-600 mt-1">
                      <span className="font-medium">Service de vérification :</span> {doc.serviceVerification}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Coordonnées des Services */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              Coordonnées des Services
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesContacts.map((service, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-900">{service.nom}</h3>
                <p className="text-gray-700 text-sm mt-1">{service.description}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p><span className="font-medium">Téléphone :</span> {service.telephone}</p>
                  <p><span className="font-medium">Email :</span> {service.email}</p>
                  <p><span className="font-medium">Heures d'ouverture :</span> {service.horaires}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bouton de contact d'assistance */}
        <div className="mt-8 text-center">
          <a href={route('demandes.new')} className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Déposer une demande
          </a>
          <p className="mt-3 text-gray-500 text-sm">
            Pour toute assistance, contactez notre service client au 
            <span className="text-blue-600 font-medium">+224 655 35 82 84</span> ou <span className="text-blue-600 font-medium">+224 611 98 19 28</span>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

// Données pour le contenu
const etapesProcessus = [
  {
    nom: "Soumission de la Demande",
    description: "Dépôt du formulaire de demande avec tous les documents requis.",
    delai: "Traitement initial sous 3 jours ouvrables",
    service: "Bureau des Demandes Initiales (BDI)"
  },
  {
    nom: "Vérification des Documents",
    description: "Contrôle de l'authenticité et de la validité de tous les documents fournis.",
    delai: "5 à 7 jours ouvrables",
    service: "Service de Vérification et Conformité (SVC)"
  },
  {
    nom: "Évaluation de la Demande",
    description: "Analyse complète du dossier selon les critères d'éligibilité établis.",
    delai: "10 à 15 jours ouvrables",
    service: "Comité d'Évaluation des Dossiers (CED)"
  },
  {
    nom: "Visite du Bien",
    description: "Organisation d'une visite du bien immobilier sélectionné.",
    delai: "Sur rendez-vous, dans les 5 jours après approbation",
    service: "Service des Visites Immobilières (SVI)"
  },
  {
    nom: "Signature du Contrat",
    description: "Préparation et signature officielle du contrat d'acquisition.",
    delai: "3 à 5 jours ouvrables après la visite",
    service: "Département Juridique et Notarial (DJN)"
  },
  {
    nom: "Remise des Clés",
    description: "Finalisation administrative et remise des clés du bien.",
    delai: "Dans les 48h après finalisation des paiements",
    service: "Service de Gestion Patrimoniale (SGP)"
  }
];

const documentsRequis = [
  {
    nom: "Carte Nationale d'Identité (CNI)",
    description: "Original et photocopie. Validité minimum de 6 mois à compter de la date de demande.",
    serviceVerification: "Service d'Identification Nationale (SIN)"
  },
  {
    nom: "Certificat de Résidence",
    description: "Document datant de moins de 3 mois, délivré par les autorités locales.",
    serviceVerification: "Administration Territoriale (AT)"
  },
  {
    nom: "Attestation de Travail",
    description: "Document original signé et cacheté par l'employeur, précisant l'ancienneté et le type de contrat.",
    serviceVerification: "Service de Vérification Professionnelle (SVP)"
  },
  {
    nom: "Bulletins de Salaire",
    description: "Les trois derniers bulletins de salaire originaux ou certifiés conformes.",
    serviceVerification: "Service de Vérification Financière (SVF)"
  },
  {
    nom: "Registre de Commerce",
    description: "Pour les entrepreneurs, copie certifiée conforme du registre de commerce.",
    serviceVerification: "Chambre de Commerce et d'Industrie (CCI)"
  },
  {
    nom: "Document NINEA",
    description: "Numéro d'Identification Nationale des Entreprises et des Associations, avec justificatif fiscal.",
    serviceVerification: "Direction des Impôts et Taxes (DIT)"
  },
  {
    nom: "Attestation de Non-Engagement Hypothécaire",
    description: "Document prouvant l'absence d'hypothèques sur d'autres biens au nom du demandeur.",
    serviceVerification: "Conservation Foncière (CF)"
  }
];

const servicesContacts = [
  {
    nom: "Bureau des Demandes Initiales (BDI)",
    description: "Service chargé de la réception et du traitement initial des demandes d'acquisition.",
    telephone: "+224 622 00 11 22",
    email: "bdi@patrimoine-public.gn",
    horaires: "Lundi au Vendredi, 8h à 16h"
  },
  {
    nom: "Service de Vérification et Conformité (SVC)",
    description: "Chargé de vérifier l'authenticité et la conformité des documents soumis.",
    telephone: "+224 622 00 11 23",
    email: "svc@patrimoine-public.gn",
    horaires: "Lundi au Vendredi, 9h à 17h"
  },
  {
    nom: "Comité d'Évaluation des Dossiers (CED)",
    description: "Responsable de l'évaluation complète des dossiers de candidature.",
    telephone: "+224 622 00 11 24",
    email: "ced@patrimoine-public.gn",
    horaires: "Lundi au Jeudi, 9h à 15h"
  },
  {
    nom: "Département Juridique et Notarial (DJN)",
    description: "En charge de la préparation et finalisation des contrats d'acquisition.",
    telephone: "+224 622 00 11 25",
    email: "djn@patrimoine-public.gn",
    horaires: "Lundi au Vendredi, 8h30 à 16h30"
  }
];

export default ProcessusObtention;
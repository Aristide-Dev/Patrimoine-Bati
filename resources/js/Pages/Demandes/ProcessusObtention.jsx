import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Clock, Users, FileText, CheckCircle, Briefcase, Building2, 
  User, AlertCircle, ArrowRight, Calendar, Search, Download, Info,
  ChevronRight, ChevronLeft, HelpCircle, MapPin
} from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { Progress } from '@/Components/ui/progress';

// Données pour le contenu (importées depuis le fichier de données)
import { 
  etapesProcessus, 
  documentsCommuns, 
  documentsFonctionnaire, 
  documentsEntreprise, 
  documentsParticulier, 
  servicesContacts,
  titrePagePrincipal,
  descriptionPagePrincipale,
  introductionTexte,
  titreSectionProcessus,
  titreSectionDocuments,
  descriptionSectionDocuments,
  noteImportanteDocuments,
  titreSectionServices,
  texteBoutonDemande,
  texteAssistance,
  contactTelephone1,
  contactTelephone2
} from './data/ProcessusObtentionData';

const ProcessusObtention = () => {
  const [activeTab, setActiveTab] = useState('fonctionnaire');
  const [searchTerm, setSearchTerm] = useState('');
  const [showGuide, setShowGuide] = useState(true);

  // Statistiques calculées
  const statsDocuments = {
    fonctionnaire: documentsFonctionnaire.length,
    entreprise: documentsEntreprise.length,
    particulier: documentsParticulier.length,
    communs: documentsCommuns.length
  };

  // Fonction pour filtrer les documents selon le terme de recherche
  const filterDocuments = (documents) => {
    if (!searchTerm) return documents;
    return documents.filter(doc => 
      doc.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredDocuments = {
    fonctionnaire: filterDocuments(documentsFonctionnaire),
    entreprise: filterDocuments(documentsEntreprise),
    particulier: filterDocuments(documentsParticulier),
    communs: filterDocuments(documentsCommuns)
  };

  return (
    <AppLayout>
      <Head title={titrePagePrincipal} />
      
      {/* Hero Section avec image de fond */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/building-pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">{titrePagePrincipal}</h1>
            <p className="text-xl text-blue-100 mb-8">{descriptionPagePrincipale}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-blue-800/50 hover:text-white backdrop-blur-sm">
                <FileText className="mr-2 h-5 w-5" />
                Télécharger le guide complet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fil d'Ariane */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Accueil</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">Espace Client</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">Guide du processus d'obtention</span>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guide du processus d'obtention</h2>
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-600 mb-8">{introductionTexte}</p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
              <p className="text-sm text-blue-900">
                Ce guide détaille la procédure d'obtention d'un bien immobilier du patrimoine bâti. 
                Il présente les étapes, les documents requis et les services concernés. Pour toute information 
                complémentaire, nous vous invitons à contacter nos services.
              </p>
            </div>
          </div>
        </div>

        {/* Processus d'Obtention */}
<div id="processus" className="mb-16 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 border border-blue-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
    {titreSectionProcessus}
    <div className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></div>
  </h2>
  
  <div className="space-y-6">
    {etapesProcessus.map((etape, index) => (
      <div 
        key={index} 
        className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-200 hover:shadow-lg hover:border-blue-200"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg shadow-md">
              {index + 1}
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              {etape.nom}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{etape.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-200 hover:bg-blue-100">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Délai estimé</h4>
                </div>
                <p className="text-gray-700 font-medium">{etape.delai}</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transition-all duration-200 hover:bg-blue-100">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-gray-900">Service responsable</h4>
                </div>
                <p className="text-gray-700 font-medium">{etape.service}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Documents Requis Section */}
        <div id="documents" className="mb-16 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{titreSectionDocuments}</h2>
          
          {/* Note importante */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
            <h3 className="font-semibold text-amber-800 mb-1">Important</h3>
            <p className="text-amber-700 text-sm">{noteImportanteDocuments}</p>
          </div>

          {/* Sélection du type de demandeur */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Liste des documents par type de demandeur</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant={activeTab === 'fonctionnaire' ? 'default' : 'outline'}
                onClick={() => setActiveTab('fonctionnaire')}
                className="flex items-center"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Fonctionnaire
              </Button>
              <Button 
                variant={activeTab === 'entreprise' ? 'default' : 'outline'}
                onClick={() => setActiveTab('entreprise')}
                className="flex items-center"
              >
                <Building2 className="h-4 w-4 mr-2" />
                Entreprise
              </Button>
              <Button 
                variant={activeTab === 'particulier' ? 'default' : 'outline'}
                onClick={() => setActiveTab('particulier')}
                className="flex items-center"
              >
                <User className="h-4 w-4 mr-2" />
                Particulier
              </Button>
            </div>
          </div>

          {/* Documents spécifiques et communs */}
          <div className="space-y-8">
            {/* Documents spécifiques */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                {activeTab === 'fonctionnaire' && <Briefcase className="h-5 w-5 mr-2 text-blue-600" />}
                {activeTab === 'entreprise' && <Building2 className="h-5 w-5 mr-2 text-blue-600" />}
                {activeTab === 'particulier' && <User className="h-5 w-5 mr-2 text-blue-600" />}
                Documents spécifiques {activeTab === 'fonctionnaire' ? 'aux fonctionnaires' : activeTab === 'entreprise' ? 'aux entreprises' : 'aux particuliers'}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredDocuments[activeTab].map((doc, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">{doc.nom}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                    {doc.serviceVerification && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <Info className="h-3 w-3 mr-1" />
                        Vérifié par: {doc.serviceVerification}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents communs */}
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                <CheckCircle className="h-5 w-5 mr-2 text-amber-600" />
                Documents communs à tous les demandeurs
                <Badge className="ml-2 bg-amber-100 text-amber-800 border-amber-300">
                  {statsDocuments.communs} obligatoires
                </Badge>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredDocuments.communs.map((doc, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-amber-100">
                    <h4 className="font-medium text-gray-900 mb-2">{doc.nom}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                    {doc.serviceVerification && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <Info className="h-3 w-3 mr-1" />
                        Vérifié par: {doc.serviceVerification}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services de contact */}
        <div id="services" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{titreSectionServices}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesContacts.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{service.nom}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Téléphone</p>
                      <p className="text-sm text-gray-800">{service.telephone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Email</p>
                      <p className="text-sm text-gray-800">{service.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-2 mr-3">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Heures d'ouverture</p>
                      <p className="text-sm text-gray-800">{service.horaires}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer informatif */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin de plus d'informations ?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Pour toute question concernant le processus d'obtention, n'hésitez pas à contacter nos services.
          </p>
          <p className="text-gray-500 text-sm">
            {texteAssistance}
            <span className="text-gray-900 font-medium"> {contactTelephone1}</span> ou <span className="text-gray-900 font-medium">{contactTelephone2}</span>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProcessusObtention;
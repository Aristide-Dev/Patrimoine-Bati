import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Clock, Users, FileText, CheckCircle, Briefcase, Building2, 
  User, AlertCircle, Info, ChevronRight, HelpCircle, Sparkles, 
  Award, Shield, Star,
} from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import ProcessusObtentionPDF from './Components/ProcessusObtentionPDF';

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
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % etapesProcessus.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  const tabConfigs = {
    fonctionnaire: { icon: Briefcase, color: 'blue', label: 'Fonctionnaire' },
    entreprise: { icon: Building2, color: 'purple', label: 'Entreprise' },
    particulier: { icon: User, color: 'green', label: 'Particulier' }
  };

  return (
    <AppLayout>
      <Head title={titrePagePrincipal} />
      
      {/* Hero Section avec animations et dégradés */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,transparent_60deg,rgba(255,255,255,0.1)_120deg,transparent_180deg,rgba(255,255,255,0.1)_240deg,transparent_300deg,rgba(255,255,255,0.1)_360deg)]"></div>
        </div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-100 text-sm font-medium mb-6 border border-blue-400/30">
              <Sparkles className="h-4 w-4 mr-2" />
              Guide Officiel Immobilier
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {titrePagePrincipal}
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {descriptionPagePrincipale}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ProcessusObtentionPDF />
            
              <Link href={route('demandes.new')} size="lg" className="flex items-center py-3 px-4 bg-white text-slate-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg group rounded-lg">
                <FileText className="mr-2 h-5 w-5 group-hover:rotate-6 transition-transform" />
                Faire une demande en ligne
              </Link>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Fil d'Ariane moderne */}
      <div className="bg-white/50 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Accueil
            </a>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-blue-600 font-medium">Espace Client</span>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Guide du processus d'obtention</span>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Introduction améliorée */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Guide Complet
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Guide du processus d'obtention
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {introductionTexte}
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-2xl p-8 text-left">
            <div className="flex items-start">
              <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">À propos de ce guide</h3>
                <p className="text-blue-800 leading-relaxed">
                  Ce guide détaille la procédure d'obtention d'un bien immobilier du patrimoine bâti. 
                  Il présente les étapes, les documents requis et les services concernés. Pour toute information 
                  complémentaire, nous vous invitons à contacter nos services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Processus d'Obtention avec animations */}
        <div id="processus" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {titreSectionProcessus}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid gap-8">
            {etapesProcessus.map((etape, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 hover:shadow-2xl ${
                  index === currentStep 
                    ? 'border-blue-500 shadow-2xl scale-[1.02] bg-gradient-to-br from-white to-blue-50' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {/* Ligne de connexion */}
                {index < etapesProcessus.length - 1 && (
                  <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent transform translate-y-0"></div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className={`relative bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl h-16 w-16 flex items-center justify-center font-bold text-xl shadow-lg transform transition-transform group-hover:scale-110 ${
                      index === currentStep ? 'animate-pulse' : ''
                    }`}>
                      {index + 1}
                      {index === currentStep && (
                        <div className="absolute -inset-2 bg-blue-400 rounded-2xl animate-ping opacity-20"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      {etape.nom}
                      {index === currentStep && (
                        <div className="ml-3 px-2 py-1 bg-blue-500 text-white text-xs rounded-full animate-bounce">
                          Actuel
                        </div>
                      )}
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{etape.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 group-hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                          <div className="bg-blue-500 rounded-lg p-2 mr-3">
                            <Clock className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900">Délai estimé</h4>
                        </div>
                        <p className="text-gray-800 font-medium text-lg">{etape.delai}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 group-hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                          <div className="bg-purple-500 rounded-lg p-2 mr-3">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900">Service responsable</h4>
                        </div>
                        <p className="text-gray-800 font-medium text-lg">{etape.service}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          {/* <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Progression du processus</span>
              <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / etapesProcessus.length) * 100)}%</span>
            </div>
            <Progress value={((currentStep + 1) / etapesProcessus.length) * 100} className="h-2" />
          </div> */}
        </div>

        {/* Documents Requis Section améliorée */}
        <div id="documents" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{titreSectionDocuments}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto"></div>
          </div>
          
          {/* Search bar */}
          {/* <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un document..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div> */}

          {/* Note importante avec design amélioré */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-2xl p-8 mb-12">
            <div className="flex items-start">
              <div className="bg-amber-500 rounded-full p-2 mr-4 mt-1">
                <AlertCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 mb-2 text-lg">Important à retenir</h3>
                <p className="text-amber-700 leading-relaxed">{noteImportanteDocuments}</p>
              </div>
            </div>
          </div>

          {/* Sélection du type de demandeur avec style moderne */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl mb-12 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Sélectionnez votre profil
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(tabConfigs).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <Button 
                    key={key}
                    variant={activeTab === key ? 'default' : 'outline'}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-6 py-3 text-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                      activeTab === key 
                        ? `bg-gradient-to-r from-${config.color}-500 to-${config.color}-600 text-white shadow-lg` 
                        : 'hover:shadow-md'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {config.label}
                    <Badge className="ml-2 bg-white/20 text-current border-0">
                      {statsDocuments[key]}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Documents avec animations */}
          <div className="space-y-12">
            {/* Documents spécifiques */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center mb-8">
                {React.createElement(tabConfigs[activeTab].icon, { 
                  className: `h-8 w-8 mr-3 text-${tabConfigs[activeTab].color}-600` 
                })}
                <h3 className="text-2xl font-bold text-gray-900">
                  Documents spécifiques {activeTab === 'fonctionnaire' ? 'aux fonctionnaires' : activeTab === 'entreprise' ? 'aux entreprises' : 'aux particuliers'}
                </h3>
                <Badge className={`ml-4 bg-${tabConfigs[activeTab].color}-100 text-${tabConfigs[activeTab].color}-800`}>
                  {filteredDocuments[activeTab].length} documents
                </Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredDocuments[activeTab].map((doc, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-lg">{doc.nom}</h4>
                      <div className="bg-blue-500 rounded-full p-1">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{doc.description}</p>
                    {doc.serviceVerification && (
                      <div className="flex items-center text-sm text-gray-500 bg-white/50 rounded-lg p-2">
                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                        Vérifié par: <span className="font-medium ml-1">{doc.serviceVerification}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents communs */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 border-2 border-amber-200 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-amber-500 rounded-full p-2 mr-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Documents communs à tous les demandeurs
                </h3>
                <Badge className="ml-4 bg-amber-200 text-amber-800 border-amber-300">
                  {statsDocuments.communs} obligatoires
                </Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredDocuments.communs.map((doc, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 text-lg">{doc.nom}</h4>
                      <div className="bg-amber-500 rounded-full p-1">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{doc.description}</p>
                    {doc.serviceVerification && (
                      <div className="flex items-center text-sm text-gray-500 bg-amber-50/50 rounded-lg p-2">
                        <Shield className="h-4 w-4 mr-2 text-green-500" />
                        Vérifié par: <span className="font-medium ml-1">{doc.serviceVerification}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services de contact modernisés */}
        <div id="services" className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{titreSectionServices}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesContacts.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{service.nom}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Téléphone</p>
                      <p className="font-medium text-gray-800">{service.telephone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="font-medium text-gray-800">{service.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                    <div className="bg-orange-100 rounded-full p-2 mr-3">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Heures d'ouverture</p>
                      <p className="font-medium text-gray-800">{service.horaires}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer informatif amélioré */}
        <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6">
              <HelpCircle className="h-12 w-12 text-white mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Besoin de plus d'informations ?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Pour toute question concernant le processus d'obtention, n'hésitez pas à contacter nos services.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-blue-100">
                {texteAssistance}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <span className="bg-white/20 px-4 py-2 rounded-lg text-white font-medium">
                  {contactTelephone1}
                </span>
                <span className="text-blue-200">ou</span>
                <span className="bg-white/20 px-4 py-2 rounded-lg text-white font-medium">
                  {contactTelephone2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProcessusObtention;
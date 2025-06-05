import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Loader2, Save, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Home, Building2, UserCircle2, MapPin, FileSearch, Upload, CheckSquare } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

// Import des composants spécifiques aux demandes
import ProgressBar from '@/Pages/Demandes/Components/ProgressBar';
import TypeDemandeurStep from '@/Pages/Demandes/Components/Steps/TypeDemandeurStep';
import InformationsPersonnellesStep from '@/Pages/Demandes/Components/Steps/InformationsPersonnellesStep';
import LocalisationStep from '@/Pages/Demandes/Components/Steps/LocalisationStep';
import DetailsFonctionnaireStep from '@/Pages/Demandes/Components/Steps/DetailsFonctionnaireStep';
import DetailsEntrepriseStep from '@/Pages/Demandes/Components/Steps/DetailsEntrepriseStep';
import DetailsParticulierStep from '@/Pages/Demandes/Components/Steps/DetailsParticulierStep';
import CriteresRechercheStep from '@/Pages/Demandes/Components/Steps/CriteresRechercheStep';
import ConfirmationStep from '@/Pages/Demandes/Components/Steps/ConfirmationStep';
import DocumentsUploadStep from '@/Pages/Demandes/Components/Steps/DocumentsUploadStep';

// Animations variants
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const stepIcons = {
  1: <UserCircle2 className="h-6 w-6" />,
  2: <Home className="h-6 w-6" />,
  3: <MapPin className="h-6 w-6" />,
  4: <Building2 className="h-6 w-6" />,
  5: <FileSearch className="h-6 w-6" />,
  6: <Upload className="h-6 w-6" />,
  7: <CheckSquare className="h-6 w-6" />
};

export default function NewDemande() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(7);
  const [stepValidation, setStepValidation] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  const { data, setData, post, processing, errors, reset, transform } = useForm({
    type_demandeur: '',
    // Informations personnelles
    nom: '',
    prenom: '',
    date_naissance: '',
    lieu_naissance: '',
    nationalite: 'Sénégalaise', // Valeur par défaut
    situation_familiale: '',
    email: '',
    telephone: '',
    
    // Informations spécifiques fonctionnaire
    matricule: '',
    ministere: '',
    direction: '',
    service: '',
    fonction: '',
    categorie: '',
    
    // Informations spécifiques entreprise
    nom_entreprise: '',
    ninea: '',
    registre_commerce: '',
    nom_administrateur: '',
    poste_demandeur: '',
    
    // Informations spécifiques particulier
    profession: '',
    employeur: '',
    duree_emploi: '',
    revenu_mensuel: '',
    
    // Critères de recherche
    type_propriete: '',
    nombre_chambres: '',
    budget_min: '',
    budget_max: '',
    superficie_min: '',
    superficie_max: '',
    parking: false,
    securite_24h: false,
    climatisation: false,
    ascenseur: false,
    piscine: false,
    salle_sport: false,
    jardin: false,
    meuble: false,
    balcon: false,
    
    // Informations de localisation
    region: '',
    prefecture: '',
    sous_prefecture: '',
    commune: '',
    quartier: '',
    zone: '',
    adresse: '',
    adresse_complementaire: '',
    
    // Coordonnées GPS
    longitude: '',
    latitude: '',
    
    // Informations du site
    code_site: '',
    nom_site: '',
    categorie_site: '',
    type_site: '',
    
    // Détails techniques
    tenure: '',
    superficie_terrain: '',
    espace_bati: '',
    documents: {
      cni: null,
      photo: null,
      certificat_residence: null,
      attestation_travail: null,
      bulletins_salaire: null,
      registre_commerce: null,
      ninea_document: null,
      autres: []
    },
    
    // Préférences de contact
    mode_contact_prefere: 'email',
    horaires_contact: [],
    notes_supplementaires: '',
    confidentialite_acceptee: false,
  });

  const validateStep = (stepNumber) => {
    let isValid = true;
    let missingFields = [];
    
    switch (stepNumber) {
      case 1: // Type de demandeur
        if (!data.type_demandeur) {
          missingFields.push('Type de demandeur');
          isValid = false;
        }
        break;
      case 2: // Informations personnelles
        if (!data.nom) missingFields.push('Nom');
        if (!data.prenom) missingFields.push('Prénom');
        if (!data.email) missingFields.push('Email');
        if (!data.telephone) missingFields.push('Téléphone');
        isValid = missingFields.length === 0;
        break;
      case 3: // Localisation
        if (!data.region) missingFields.push('Région');
        if (!data.commune) missingFields.push('Commune');
        isValid = missingFields.length === 0;
        break;
      case 4: // Détails spécifiques
        if (data.type_demandeur === 'fonctionnaire') {
          if (!data.matricule) missingFields.push('Matricule');
          if (!data.ministere) missingFields.push('Ministère');
        } else if (data.type_demandeur === 'entreprise') {
          if (!data.nom_entreprise) missingFields.push('Nom de l\'entreprise');
          if (!data.ninea) missingFields.push('NINEA');
        } else {
          if (!data.profession) missingFields.push('Profession');
        }
        isValid = missingFields.length === 0;
        break;
      case 5: // Critères de recherche
        if (!data.type_propriete) missingFields.push('Type de propriété');
        isValid = missingFields.length === 0;
        break;
      case 6: // Documents
        if (!data.documents.cni) missingFields.push('CNI');
        isValid = missingFields.length === 0;
        break;
      case 7: // Confirmation
        if (!data.confidentialite_acceptee) missingFields.push('Acceptation des conditions de confidentialité');
        isValid = missingFields.length === 0;
        break;
      default:
        isValid = true;
    }
    
    return { isValid, missingFields };
  };

  const validateCurrentStep = () => {
    const result = validateStep(currentStep);
    setStepValidation(prev => ({ ...prev, [currentStep]: result.isValid }));
    return result;
  };

  const nextStep = () => {
    const { isValid, missingFields } = validateStep(currentStep);
    
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    } else {
      toast.error("Validation échouée", {
        description: `Champs manquants : ${missingFields.join(', ')}`,
        className: 'z-50 mt-44'
      });
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const goToStep = (step) => {
    if (step <= currentStep || Object.values(stepValidation).slice(0, step - 1).every(Boolean)) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
    } else {
      toast.warning("Navigation bloquée", {
        description: "Veuillez compléter les étapes précédentes avant d'accéder à celle-ci.",
        className: 'z-50 mt-44'
      });
    }
  };

  const saveDraft = () => {
    toast.success('Brouillon sauvegardé avec succès', {
      description: 'Vous pourrez reprendre votre demande plus tard',
      className: 'z-50 mt-44'
    });
    setDraftSaved(true);
  };

  const handleSubmit = () => {
    // Valider toutes les étapes
    let allMissingFields = [];
    let allValid = true;
    
    for (let step = 1; step <= totalSteps; step++) {
      const { isValid, missingFields } = validateStep(step);
      if (!isValid) {
        allValid = false;
        allMissingFields = [...allMissingFields, ...missingFields];
      }
    }
    
    if (allValid) {
      transform(data => ({
        ...data,
        is_draft: false
      }));
      
      post(route('demandes.store'), {
        onSuccess: () => {
          toast.success('Demande soumise avec succès', {
            className: 'z-50 mt-44'
          });
          setFormSubmitted(true);
        },
        onError: () => {
          toast.error('Erreur lors de la soumission', {
            description: 'Veuillez vérifier les informations saisies',
            className: 'z-50 mt-44'
          });
        }
      });
    } else {
      // Trouver la première étape non valide et y aller
      for (let step = 1; step <= totalSteps; step++) {
        if (!validateStep(step).isValid) {
          setCurrentStep(step);
          break;
        }
      }
      
      toast.error("Validation échouée", {
        description: `Champs manquants : ${[...new Set(allMissingFields)].join(', ')}`,
        className: 'z-50 mt-44',
        duration: 5000
      });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <TypeDemandeurStep data={data} setData={setData} errors={errors} />;
      case 2:
        return <InformationsPersonnellesStep data={data} setData={setData} errors={errors} />;
      case 3:
        return <LocalisationStep data={data} setData={setData} errors={errors} />;
      case 4:
        switch (data.type_demandeur) {
          case 'fonctionnaire':
            return <DetailsFonctionnaireStep data={data} setData={setData} errors={errors} />;
          case 'entreprise':
            return <DetailsEntrepriseStep data={data} setData={setData} errors={errors} />;
          default:
            return <DetailsParticulierStep data={data} setData={setData} errors={errors} />;
        }
      case 5:
        return <CriteresRechercheStep data={data} setData={setData} errors={errors} />;
      case 6:
        return <DocumentsUploadStep data={data} setData={setData} errors={errors} />;
      case 7:
        return <ConfirmationStep data={data} setData={setData} errors={errors} />;
      default:
        return null;
    }
  };

  // Si le formulaire a été soumis avec succès, afficher la confirmation
  if (formSubmitted) {
    return (
      <AppLayout>
        <Head title="Demande soumise" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto py-12 px-4"
        >
          <Card className="bg-gradient-to-br from-green-50 to-white border-none shadow-xl">
            <CardHeader>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4"
              >
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </motion.div>
              <CardTitle className="text-center text-2xl text-green-600">
                Demande soumise avec succès !
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-lg mb-4">
                  Votre demande a été enregistrée et sera traitée dans les meilleurs délais.
                </p>
                <p className="mb-6">
                  Un email de confirmation a été envoyé à <span className="font-semibold">{data.email}</span>
                </p>
                <div className="bg-green-50 rounded-lg p-4 mb-6 inline-block">
                  <p className="text-sm text-green-800">
                    Référence de votre demande: <span className="font-bold">DMD-{Math.floor(Math.random() * 1000000)}</span>
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = '/dashboard'}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    Retour au tableau de bord
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/demandes/new'}
                    className="bg-green-600 hover:bg-green-700 transition-all duration-200"
                  >
                    Nouvelle demande
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </AppLayout>
    );
  }

  const stepTitles = [
    "Type de demandeur",
    "Informations personnelles",
    "Localisation",
    "Détails spécifiques",
    "Critères de recherche",
    "Documents",
    "Confirmation"
  ];

  return (
    <AppLayout>
      <Head title="Formulaire de Demande" />
      <Toaster 
        position="top-right" 
        className="z-[100]"
        toastOptions={{
          className: 'z-[100]'
        }}
      />
      <div className="max-w-8xl mx-auto py-8 px-4">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          <Card className="shadow-2xl border-none bg-gradient-to-br from-primary-50 via-white to-primary-50">
            <CardHeader className="border-b border-primary-100/20 pb-6">
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                    Nouvelle demande
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg mt-2">
                    <div className="flex items-center flex-wrap gap-1">
                      <span className="font-medium text-primary-600">Étape {currentStep}</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-gray-600">{totalSteps}</span>
                      <span className="text-gray-600 hidden sm:inline">:</span>
                      <span className="text-gray-600 w-full sm:w-auto mt-1 sm:mt-0">{stepTitles[currentStep-1]}</span>
                    </div>
                  </CardDescription>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={saveDraft} 
                    disabled={processing}
                    className="hover:bg-primary-50 transition-all duration-200 w-full sm:w-auto justify-center"
                  >
                    {draftSaved ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2 sm:mr-2 text-green-500" />
                        <span>Brouillon sauvegardé</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2 sm:mr-2" />
                        <span>Sauvegarder</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Barre de progression mobile */}
              <div className="mt-4 sm:hidden">
                <div className="h-2 bg-primary-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-600 transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Début</span>
                  <span>Étape {currentStep}/{totalSteps}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-8">
              <div className="mb-12">
                <ProgressBar 
                  currentStep={currentStep} 
                  totalSteps={totalSteps} 
                  stepTitles={stepTitles}
                  stepValidation={stepValidation}
                  onStepClick={goToStep}
                  stepIcons={stepIcons}
                />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[400px] bg-white p-6 rounded-xl shadow-sm"
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>
              
              <motion.div 
                className="flex justify-between mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  onClick={previousStep}
                  disabled={currentStep === 1 || processing}
                  className="flex items-center hover:bg-primary-50 transition-all duration-200"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Précédent
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    disabled={processing}
                    className="flex items-center bg-primary-600 hover:bg-primary-700 text-gray-200 hover:text-white transition-all duration-200"
                  >
                    Suivant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={processing}
                    className="flex items-center bg-green-600 hover:bg-green-700 transition-all duration-200"
                  >
                    {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Soumettre la demande
                  </Button>
                )}
              </motion.div>
              
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert variant="destructive" className="mt-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erreurs de validation</AlertTitle>
                    <AlertDescription>
                      Veuillez corriger les erreurs ci-dessus avant de continuer.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AppLayout>
  );
}
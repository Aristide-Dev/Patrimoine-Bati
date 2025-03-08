import React, { useState, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Loader2, Save, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert';
import { Toaster, toast } from 'sonner';

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

export default function NewDemande() {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(7); // Ajout d'une étape pour l'upload des documents
  const [stepValidation, setStepValidation] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);
  const [viewMode, setViewMode] = useState('steps'); // 'steps' ou 'tabs'

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

  // Vérifier si l'étape actuelle est valide
  const validateCurrentStep = () => {
    let isValid = true;
    
    switch (currentStep) {
      case 1: // Type de demandeur
        isValid = !!data.type_demandeur;
        break;
      case 2: // Informations personnelles
        isValid = !!data.nom && !!data.prenom && !!data.email && !!data.telephone;
        break;
      case 3: // Localisation
        isValid = !!data.region && !!data.commune;
        break;
      case 4: // Détails spécifiques
        if (data.type_demandeur === 'fonctionnaire') {
          isValid = !!data.matricule && !!data.ministere;
        } else if (data.type_demandeur === 'entreprise') {
          isValid = !!data.nom_entreprise && !!data.ninea;
        } else {
          isValid = !!data.profession;
        }
        break;
      case 5: // Critères de recherche
        isValid = !!data.type_propriete;
        break;
      case 6: // Documents
        isValid = !!data.documents.cni;
        break;
      case 7: // Confirmation
        isValid = data.confidentialite_acceptee;
        break;
      default:
        isValid = true;
    }
    
    setStepValidation(prev => ({ ...prev, [currentStep]: isValid }));
    return isValid;
  };

  // Effet pour valider l'étape actuelle lorsque les données changent
  useEffect(() => {
    validateCurrentStep();
  }, [data, currentStep]);

  const nextStep = () => {
    const isValid = validateCurrentStep();
    
    if (isValid) {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    } else {
      toast.error("Validation échouée", {
        description: "Veuillez remplir tous les champs obligatoires avant de continuer."
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
        description: "Veuillez compléter les étapes précédentes avant d'accéder à celle-ci."
      });
    }
  };

  const saveDraft = () => {
    // Utilisation de Sonner pour les notifications
    toast.success('Brouillon sauvegardé avec succès', {
      description: 'Vous pourrez reprendre votre demande plus tard'
    });
    setDraftSaved(true);
  };

  const handleSubmit = () => {
    const isValid = validateCurrentStep();
    
    if (isValid) {
      transform(data => ({
        ...data,
        is_draft: false
      }));
      
      post('/demandes', {
        onSuccess: () => {
          toast.success('Demande soumise avec succès');
          setFormSubmitted(true);
        },
        onError: () => {
          toast.error('Erreur lors de la soumission', {
            description: 'Veuillez vérifier les informations saisies'
          });
        }
      });
    } else {
      toast.error("Validation échouée", {
        description: "Veuillez remplir tous les champs obligatoires avant de soumettre."
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
        <div className="max-w-4xl mx-auto py-12 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-green-600 flex items-center justify-center">
                <CheckCircle2 className="mr-2 h-6 w-6" />
                Demande soumise avec succès
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg mb-4">
                Votre demande a été enregistrée et sera traitée dans les meilleurs délais.
              </p>
              <p className="mb-6">
                Un email de confirmation a été envoyé à l'adresse {data.email}.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Référence de votre demande: <span className="font-bold">DMD-{Math.floor(Math.random() * 1000000)}</span>
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => window.location.href = '/dashboard'}>
                  Retour au tableau de bord
                </Button>
                <Button onClick={() => window.location.href = '/demandes/new'}>
                  Nouvelle demande
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
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
      <Toaster position="top-right" className="z-50" />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <Card className="shadow-lg border-t-4 border-blue-500">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-800">Nouvelle demande</CardTitle>
                <CardDescription>
                  Étape {currentStep}/{totalSteps}: {stepTitles[currentStep-1]}
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === 'steps' ? 'tabs' : 'steps')}>
                  {viewMode === 'steps' ? 'Mode onglets' : 'Mode étapes'}
                </Button>
                <Button variant="outline" size="sm" onClick={saveDraft} disabled={processing}>
                  <Save className="mr-2 h-4 w-4" />
                  {draftSaved ? 'Brouillon sauvegardé' : 'Sauvegarder brouillon'}
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {viewMode === 'steps' ? (
              <>
                <ProgressBar 
                  currentStep={currentStep} 
                  totalSteps={totalSteps} 
                  stepTitles={stepTitles}
                  stepValidation={stepValidation}
                  onStepClick={goToStep}
                />
                
                <div className="mt-8">
                  {renderStepContent()}
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={previousStep}
                    disabled={currentStep === 1 || processing}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      disabled={processing || !stepValidation[currentStep]}
                      className="flex items-center bg-blue-100 hover:bg-blue-200"
                    >
                      Suivant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={processing || !stepValidation[currentStep]}
                      className="flex items-center bg-green-600 hover:bg-green-700"
                    >
                      {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Soumettre la demande
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <Tabs defaultValue={`step-${currentStep}`} className="mt-4">
                <TabsList className="grid grid-cols-7 mb-8">
                  {stepTitles.map((title, index) => (
                    <TabsTrigger 
                      key={`step-${index + 1}`} 
                      value={`step-${index + 1}`}
                      disabled={index + 1 > currentStep && !Object.values(stepValidation).slice(0, index).every(Boolean)}
                      onClick={() => setCurrentStep(index + 1)}
                    >
                      {index + 1}. {title.split(' ')[0]}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {stepTitles.map((title, index) => (
                  <TabsContent key={`step-${index + 1}`} value={`step-${index + 1}`}>
                    <h3 className="text-lg font-medium mb-4">{title}</h3>
                    {currentStep === index + 1 && renderStepContent()}
                    
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={previousStep}
                        disabled={index + 1 === 1 || processing}
                        className="flex items-center"
            >
                        <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
                      
                      {index + 1 < totalSteps ? (
                        <Button
                          onClick={nextStep}
                          disabled={processing || !stepValidation[index + 1]}
                          className="flex items-center bg-blue-600 hover:bg-blue-700"
                        >
                          Suivant
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
            <Button
                          onClick={handleSubmit}
                          disabled={processing || !stepValidation[index + 1]}
                          className="flex items-center bg-green-600 hover:bg-green-700"
            >
              {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Soumettre la demande
            </Button>
                      )}
          </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
            
            {Object.keys(errors).length > 0 && (
              <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreurs de validation</AlertTitle>
                <AlertDescription>
                  Veuillez corriger les erreurs ci-dessus avant de continuer.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
import { DGPBP } from '@/utils/dgpbp';

// Textes et titres
export const titrePagePrincipal = "Processus d'Obtention de Bien Immobilier";
export const descriptionPagePrincipale = "Guide des étapes et documents nécessaires pour obtenir un bien immobilier via le Patrimoine Bâti Public en Guinée.";
export const introductionTexte = "Le Patrimoine Bâti Public en Guinée offre aux citoyens la possibilité d'acquérir des biens immobiliers à des conditions avantageuses. Ce guide vous explique les documents requis, les services concernés et le processus à suivre.";

// Titres des sections
export const titreSectionProcessus = "Processus d'Obtention et Délais";
export const titreSectionDocuments = "Documents Requis par Type de Demandeur";
export const titreSectionServices = "Coordonnées des Services";

// Textes descriptifs
export const descriptionSectionDocuments = "Sélectionnez votre profil pour voir la liste des documents spécifiques à fournir. Tous les demandeurs doivent également fournir les documents communs listés en bas de page.";
export const noteImportanteDocuments = "Tous les documents doivent être fournis en version originale et photocopie. Les documents en langue étrangère doivent être accompagnés d'une traduction officielle en français.";

// Textes des boutons et contacts
export const texteBoutonDemande = "Déposer une demande";
export const texteAssistance = "Pour toute assistance, contactez notre service client au";
export const contactTelephone1 = DGPBP.contactInfo.unespace_phones[0];
export const contactTelephone2 = DGPBP.contactInfo.unespace_phones[1];

// Étapes du processus d'obtention
export const etapesProcessus = [
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

// Documents communs à tous les types de demandeurs
export const documentsCommuns = [
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
    nom: "Photo d'identité récente",
    description: "4 photos d'identité récentes (moins de 3 mois) sur fond blanc.",
    serviceVerification: "Service de Vérification et Conformité (SVC)"
  },
  {
    nom: "Attestation de Non-Engagement Hypothécaire",
    description: "Document prouvant l'absence d'hypothèques sur d'autres biens au nom du demandeur.",
    serviceVerification: "Conservation Foncière (CF)"
  }
];

// Documents spécifiques aux fonctionnaires
export const documentsFonctionnaire = [
  {
    nom: "Attestation de Travail",
    description: "Document original signé et cacheté par l'administration, précisant l'ancienneté et le grade.",
    serviceVerification: "Direction des Ressources Humaines de l'État (DRHE)"
  },
  {
    nom: "Carte Professionnelle",
    description: "Photocopie légalisée de la carte professionnelle en cours de validité.",
    serviceVerification: "Service de Vérification Professionnelle (SVP)"
  },
  {
    nom: "Bulletins de Salaire",
    description: "Les trois derniers bulletins de salaire originaux ou certifiés conformes.",
    serviceVerification: "Service de Vérification Financière (SVF)"
  },
  {
    nom: "Attestation de Matricule",
    description: "Document officiel indiquant le matricule de la fonction publique.",
    serviceVerification: "Ministère de la Fonction Publique (MFP)"
  },
  {
    nom: "Attestation de Service",
    description: "Document attestant de l'affectation actuelle et du service.",
    serviceVerification: "Direction des Ressources Humaines (DRH)"
  }
];

// Documents spécifiques aux entreprises
export const documentsEntreprise = [
  {
    nom: "Registre de Commerce",
    description: "Copie certifiée conforme du registre de commerce datant de moins de 3 mois.",
    serviceVerification: "Chambre de Commerce et d'Industrie (CCI)"
  },
  {
    nom: "Statuts de l'Entreprise",
    description: "Copie certifiée conforme des statuts de l'entreprise.",
    serviceVerification: "Greffe du Tribunal de Commerce (GTC)"
  },
  {
    nom: "Bilan Financier",
    description: "Bilan financier des deux derniers exercices certifié par un expert-comptable agréé.",
    serviceVerification: "Direction Générale des Impôts (DGI)"
  },
  {
    nom: "Procès-verbal de nomination",
    description: "PV de nomination du représentant légal ou mandat pour le signataire de la demande.",
    serviceVerification: "Notaire ou Greffe du Tribunal"
  },
  {
    nom: "Attestation de Régularité Fiscale",
    description: "Document prouvant que l'entreprise est à jour de ses obligations fiscales.",
    serviceVerification: "Direction Générale des Impôts (DGI)"
  }
];

// Documents spécifiques aux particuliers
export const documentsParticulier = [
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
    nom: "Relevés Bancaires",
    description: "Relevés bancaires des trois derniers mois pour justifier de la capacité financière.",
    serviceVerification: "Service de Vérification Financière (SVF)"
  },
  {
    nom: "Attestation de Revenus",
    description: "Pour les professions libérales ou commerçants, document attestant des revenus.",
    serviceVerification: "Direction Générale des Impôts (DGI)"
  },
  {
    nom: "Contrat de Travail",
    description: "Copie du contrat de travail en cours (pour les salariés du secteur privé).",
    serviceVerification: "Inspection du Travail (IT)"
  }
];

// Coordonnées des services
export const servicesContacts = [
  {
    nom: "Bureau des Demandes Initiales (BDI)",
    description: "Service chargé de la réception et du traitement initial des demandes d'acquisition.",
    telephone: "+224 622 00 11 22",
    email: "bdi@dgpbpguinee.com",
    horaires: "Lundi au Vendredi, 8h à 16h"
  },
  {
    nom: "Service de Vérification et Conformité (SVC)",
    description: "Chargé de vérifier l'authenticité et la conformité des documents soumis.",
    telephone: "+224 622 00 11 23",
    email: "svc@dgpbpguinee.com",
    horaires: "Lundi au Vendredi, 9h à 17h"
  },
  {
    nom: "Comité d'Évaluation des Dossiers (CED)",
    description: "Responsable de l'évaluation complète des dossiers de candidature.",
    telephone: "+224 622 00 11 24",
    email: "ced@dgpbpguinee.com",
    horaires: "Lundi au Jeudi, 9h à 15h"
  },
  {
    nom: "Département Juridique et Notarial (DJN)",
    description: "En charge de la préparation et finalisation des contrats d'acquisition.",
    telephone: "+224 622 00 11 25",
    email: "djn@dgpbpguinee.com",
    horaires: "Lundi au Vendredi, 8h30 à 16h30"
  }
]; 
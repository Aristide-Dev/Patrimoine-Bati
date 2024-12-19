import { 
  Home,
  Newspaper,
  Building2,
  FileText,
  Link,
  Mail,
  MessageSquare,
  Image,
  Users,
  Briefcase,
  PieChart,
  Boxes,
  Coins,
  Binary,
  FileBarChart
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'welcome', // route('welcome')
    icon: Home,
  },
  {
    label: 'Actualités et Ressources',
    icon: Newspaper,
    actif: 'actualites.*', // route('actualites.index')
    children: [
      { label: 'Actualités', href: 'actualites.communiques', icon: MessageSquare }, // route('actualites.communiques')
      { label: 'Rapports et Publications', href: 'actualites.rapports', icon: FileText }, // route('actualites.rapports')
      { label: 'Médias', href: 'actualites.medias', icon: Image }, // route('actualites.medias')
    ]
  },
  {
    label: 'Missions',
    icon: Briefcase,
    href: 'missions.index', // route('missions.index')
    children: [
      { label: 'Missions Générales', href: 'missions.generales', icon: Briefcase }, // route('missions.generales')
      { label: 'Niveaux d’Intervention', href: 'missions.niveaux_intervention', icon: Users }, // route('missions.niveaux_intervention')
      { label: 'Thématiques d’Intervention', href: 'missions.thematiques', icon: PieChart }, // route('missions.thematiques')
    ]
  },
  {
    label: 'Les Directions de Projet',
    icon: Building2,
    // Pas de route parent dédiée, vous pouvez laisser tel quel ou ajouter une route si vous en créez une
    children: [
      {
        label: 'Ressources Fiscales',
        icon: PieChart,
        children: [
          { label: 'Organisation et Missions', href: 'directions.fiscales_organisation', icon: Briefcase }, // route('directions.fiscales_organisation')
          { label: 'Contexte, Réformes, Études', href: 'directions.fiscales_contexte', icon: FileText }, // route('directions.fiscales_contexte')
        ]
      },
      {
        label: 'Ressources Douanières',
        icon: Boxes,
        children: [
          { label: 'Organisation et Missions', href: 'directions.douanieres_organisation', icon: Briefcase }, // route('directions.douanieres_organisation')
          { label: 'Réformes, Résultats, Perspectives', href: 'directions.douanieres_reformes', icon: FileBarChart }, // route('directions.douanieres_reformes')
        ]
      },
      {
        label: 'Ressources Non Fiscales',
        icon: Coins,
        children: [
          { label: 'Définition, Enjeux, Réformes', href: 'directions.non_fiscales_definition', icon: FileText }, // route('directions.non_fiscales_definition')
        ]
      },
      {
        label: 'Maîtrise des Dépenses Fiscales et Apurement des Arriérés',
        icon: FileBarChart,
        children: [
          { label: 'Dépenses Fiscales (Évaluation, Rationalisation)', href: 'directions.depenses_fiscales', icon: FileBarChart }, // route('directions.depenses_fiscales')
          { label: 'Arriérés Fiscaux (Réduction, Mécanismes)', href: 'directions.arrieres_fiscaux', icon: FileBarChart }, // route('directions.arrieres_fiscaux')
        ]
      },
      {
        label: 'Digitalisation',
        icon: Binary,
        children: [
          { label: 'Enjeux, Stratégies, Diagnostic', href: 'directions.digitalisation_enjeux', icon: FileText }, // route('directions.digitalisation_enjeux')
          { label: 'Renforcement des Capacités, Projets en Cours', href: 'directions.digitalisation_renforcement', icon: MessageSquare }, // route('directions.digitalisation_renforcement')
        ]
      },
    ]
  },
  {
    label: 'Partenariats',
    icon: Link,
    href: 'partenariats.index', // route('partenariats.index')
    children: [
      { label: 'Partenaires Institutionnels (FMI, Banque Mondiale, UE, FERDI)', href: 'partenariats.institutionnels', icon: Users }, // route('partenariats.institutionnels')
      { label: 'Rôles (Appui technique, financier)', href: 'partenariats.roles', icon: Briefcase }, // route('partenariats.roles')
      { label: 'Projets et Résultats', href: 'partenariats.projets_resultats', icon: FileText }, // route('partenariats.projets_resultats')
    ]
  },
  {
    label: 'À Propos',
    href: 'about', // route('about')
    icon: FileText,
  },
  {
    label: 'Contact',
    icon: Mail,
    href: 'contact.index' // route('contact.index')
  }
];

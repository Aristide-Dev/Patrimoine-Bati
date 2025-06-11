import { 
  Home,
  Building2,
  Building,
  FileText,
  Image,
  Mail,
  Users,
  User,
  History,
  MessageSquare,
  BookOpen,
  Target,
  Search,
  Newspaper,
  File,
  Map,
  Castle,
  MapPin,
  Grid3X3
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'home',
    icon: Home,
  },
  {
    label: 'Qui sommes-nous',
    icon: Users,
    actif: 'about.*',
    children: [
      { label: 'Présentation', href: 'about.index', icon: Building2 },
      { label: 'Mot de la Directrice', href: 'about.mot-directrice', icon: MessageSquare },
    ]
  },
  // {
  //   label: 'Documentation',
  //   icon: BookOpen,
  //   actif: 'documentation.*',
  //   children: [
  //     { label: 'Guides', href: 'documentation.guides', icon: BookOpen },
  //     { label: 'Réglementation', href: 'documentation.regulations', icon: FileText },
  //     { label: 'Formulaires', href: 'documentation.forms', icon: FileText }
  //   ]
  // },
  {
    label: 'Actualité',
    icon: Newspaper,
    actif: 'actualites.*', // route('actualites.index')
    children: [
      { label: 'Actualités', href: 'actualites.index', icon: MessageSquare }, // route('actualites.articles')
      { label: 'Rapports et Publications', href: 'actualites.rapports', icon: FileText }, // route('actualites.rapports')
      { label: 'Médias', href: 'actualites.medias', icon: Image }, // route('actualites.medias')
    ]
  },
  {
    label: 'Patrimoine Bâti',
    icon: Building2,
    actif: 'patrimoine.*',
    children: [
      { label: 'Parc Immobilier', href: 'patrimoine.demandes.parc_immobilier', icon: Building },
      { label: 'Rechercher un bien', href: 'patrimoine.demandes.rechercher', icon: Search },
      { label: 'Patrimoine Historique', href: 'patrimoine.historic', icon: Castle },
    ]
  },
  {
    label: 'Espace Client',
    icon: Users,
    actif: 'demandes.*',
    children: [
      { label: 'Processus d\'obtention', href: 'demandes.processus', icon: FileText },
      { label: 'Faire une Demande', href: 'demandes.new', icon: File }, // route('actualites.articles')
      { label: 'Vérifier ma demande', href: 'demandes.verifier', icon: History }, 
      { label: 'Se Connecter', href: 'login', icon: User }, // route('actualites.rapports')// route('actualites.medias')
    ]
  },
  // {
  //   label: 'Médiathèque',
  //   icon: Image,
  //   actif: 'media.*',
  //   children: [
  //     { label: 'Photos', href: 'media.photos', icon: Image },
  //     { label: 'Vidéos', href: 'media.videos', icon: MessageSquare },
  //     { label: 'Publications', href: 'media.publications', icon: FileText }
  //   ]
  // },
  {
    label: 'Nous Contacter',
    icon: Mail,
    href: 'contact.index',
  }
];

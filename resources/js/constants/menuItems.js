import { 
  Home,
  Building2,
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
  File
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'home',
    icon: Home,
  },
  {
    label: 'Qui sommes-nous',
    href: 'about.index',
    icon: Users,
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
    label: 'Espace Immobilier',
    icon: Building2,
    actif: 'demandes.*', // route('actualites.index')
    children: [
      { label: 'Rechercher un bien', href: 'demandes.rechercher', icon: Search },
      { label: 'Processus d\'obtention', href: 'demandes.processus', icon: FileText },
      { label: 'Faire une Demande', href: 'demandes.new', icon: File }, // route('actualites.articles')
      { label: 'Vérifier ma demande', href: 'demandes.verifier', icon: Search }, 
      // { label: 'Se Connecter à mon compte', href: 'login', icon: User }, // route('actualites.rapports')// route('actualites.medias')
    ]
  },
  {
    label: 'Espace Citoyen',
    icon: Users,
    href: 'login'
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

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
    label: 'Espace Clients',
    icon: Users,
    actif: 'demandes.*', // route('actualites.index')
    children: [
      { label: 'Processus d\'obtention', href: 'demandes.processus', icon: FileText },
      { label: 'Vérifier ma demande', href: 'demandes.verifier', icon: Search }, 
      { label: 'Faire une Demande', href: 'demandes.new', icon: File }, // route('actualites.articles')
      { label: 'Se Connecter à mon compte', href: 'login', icon: User }, // route('actualites.rapports')// route('actualites.medias')
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

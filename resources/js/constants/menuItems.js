import { 
  Home,
  Building2,
  MapPin,
  FileText,
  Image,
  Mail,
  Users,
  History,
  MessageSquare,
  Key,
  Search,
  LayoutGrid,
  BookOpen
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'home',
    icon: Home,
  },
  {
    label: 'Patrimoine',
    icon: Building2,
    actif: 'patrimoine.*',
    children: [
      { label: 'Carte', href: 'patrimoine.map', icon: MapPin },
      { label: 'Catégories', href: 'patrimoine.categories', icon: LayoutGrid },
      { label: 'Localisations', href: 'patrimoine.locations', icon: Search },
      { label: 'Historiques', href: 'patrimoine.historic', icon: History }
    ]
  },
  {
    label: 'Services',
    icon: Key,
    actif: 'services.*',
    children: [
      { label: 'Logements', href: 'services.housing', icon: Key },
      { label: 'Baux Commerciaux', href: 'services.commercial', icon: Building2 },
      { label: 'Procédures', href: 'services.procedures', icon: FileText },
      { label: 'FAQ', href: 'services.faq', icon: MessageSquare }
    ]
  },
  {
    label: 'Documentation',
    icon: BookOpen,
    actif: 'documentation.*',
    children: [
      { label: 'Guides', href: 'documentation.guides', icon: BookOpen },
      { label: 'Réglementation', href: 'documentation.regulations', icon: FileText },
      { label: 'Formulaires', href: 'documentation.forms', icon: FileText }
    ]
  },
  {
    label: 'Médiathèque',
    icon: Image,
    actif: 'media.*',
    children: [
      { label: 'Photos', href: 'media.photos', icon: Image },
      { label: 'Vidéos', href: 'media.videos', icon: MessageSquare },
      { label: 'Publications', href: 'media.publications', icon: FileText }
    ]
  }
];

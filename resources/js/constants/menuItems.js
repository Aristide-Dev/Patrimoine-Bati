import { 
  Home,
  Building2,
  FileText,
  Image,
  Mail,
  Users,
  MessageSquare,
  Key,
  BookOpen,
  Building
} from 'lucide-react';

export const menuItems = [
  {
    label: 'Accueil',
    href: 'home',
    icon: Home,
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
  },
  {
    label: 'Demander un Logement',
    icon: FileText,
    href: 'demandes.formulaire',
  }
];

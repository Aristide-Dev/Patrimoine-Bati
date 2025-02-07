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
    route: 'home',
  },
  {
    label: 'Patrimoine',
    subItems: [
      { label: 'Carte', route: 'patrimoine.map' },
      { label: 'Catégories', route: 'patrimoine.categories' },
      { label: 'Localisations', route: 'patrimoine.locations' },
      { label: 'Historiques', route: 'patrimoine.historic' }
    ]
  },
  {
    label: 'Services',
    subItems: [
      { label: 'Logements', route: 'services.housing' },
      { label: 'Baux Commerciaux', route: 'services.commercial' },
      { label: 'Procédures', route: 'services.procedures' },
      { label: 'FAQ', route: 'services.faq' }
    ]
  },
  {
    label: 'Documentation',
    subItems: [
      { label: 'Guides', route: 'documentation.guides' },
      { label: 'Réglementation', route: 'documentation.regulations' },
      { label: 'Formulaires', route: 'documentation.forms' }
    ]
  },
  {
    label: 'Médiathèque',
    subItems: [
      { label: 'Photos', route: 'media.photos' },
      { label: 'Vidéos', route: 'media.videos' },
      { label: 'Publications', route: 'media.publications' }
    ]
  },
];

import { 
  Home,
  Newspaper,
  Building2,
  BarChart3,
  FileText,
  BookOpen,
  Link,
  Mail,
  HelpCircle,
  MessageSquare,
  Image,
  Calendar,
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
    href: 'welcome',
    icon: Home,
  },
  {
    label: 'Actualités et Ressources',
    icon: Newspaper,
    children: [
      { label: 'Actualités', href: '#', icon: MessageSquare },
      { label: 'Rapports et Publications', href: '#', icon: FileText },
      { label: 'Médias', href: '#', icon: Image },
    ]
  },
  {
    label: 'Missions',
    icon: Briefcase,
    children: [
      { label: 'Missions Générales', href: '#', icon: Briefcase },
      { label: 'Niveaux d’Intervention', href: '#', icon: Users },
      { label: 'Thématiques d’Intervention', href: '#', icon: PieChart },
    ]
  },
  {
    label: 'Les Directions de Projet',
    icon: Building2,
    children: [
      {
        label: 'Ressources Fiscales',
        icon: PieChart,
        children: [
          { label: 'Organisation et Missions', href: '#', icon: Briefcase },
          { label: 'Contexte, Réformes, Études', href: '#', icon: FileText },
        ]
      },
      {
        label: 'Ressources Douanières',
        icon: Boxes,
        children: [
          { label: 'Organisation et Missions', href: '#', icon: Briefcase },
          { label: 'Réformes, Résultats, Perspectives', href: '#', icon: FileBarChart },
        ]
      },
      {
        label: 'Ressources Non Fiscales',
        icon: Coins,
        children: [
          { label: 'Définition, Enjeux, Réformes', href: '#', icon: FileText },
        ]
      },
      {
        label: 'Maîtrise des Dépenses Fiscales et Apurement des Arriérés',
        icon: FileBarChart,
        children: [
          { label: 'Dépenses Fiscales (Évaluation, Rationalisation)', href: '#', icon: FileBarChart },
          { label: 'Arriérés Fiscaux (Réduction, Mécanismes)', href: '#', icon: FileBarChart },
        ]
      },
      {
        label: 'Digitalisation',
        icon: Binary,
        children: [
          { label: 'Enjeux, Stratégies, Diagnostic', href: '#', icon: FileText },
          { label: 'Renforcement des Capacités, Projets en Cours', href: '#', icon: MessageSquare },
        ]
      },
    ]
  },
  {
    label: 'Partenariats',
    icon: Link,
    children: [
      { label: 'Partenaires Institutionnels (FMI, Banque Mondiale, UE, FERDI)', href: '#', icon: Users },
      { label: 'Rôles (Appui technique, financier)', href: '#', icon: Briefcase },
      { label: 'Projets et Résultats', href: '#', icon: FileText },
    ]
  },
  {
    label: 'À Propos',
    href: '#',
    icon: FileText,
  },
  {
    label: 'Contact',
    icon: Mail,
    href: '#'
  }
];

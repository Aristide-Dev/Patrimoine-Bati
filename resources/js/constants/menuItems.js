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
      href: route('welcome'),
      icon: Home
    },
    {
      label: 'Actualité',
      icon: Newspaper,
      children: [
        { label: 'Communiqués', href: '#', icon: MessageSquare },
        { label: 'Mediatheque', href: '#', icon: Image },
        { label: 'Agenda', href: '#', icon: Calendar },
      ],
    },
    {
      label: 'Mamri',
      icon: Building2,
      children: [
        { label: "Mission", href: "#", icon: Briefcase },
        { label: "Organisation", href: "#", icon: Users },
        { label: "Partenaires", href: "#", icon: Link },
        { label: "Appels D'offres", href: "#", icon: FileText },
      ],
    },
    {
      label: 'Thematiques',
      icon: BarChart3,
      children: [
        { label: 'Mobilisation des ressources fiscales', href: '#', icon: PieChart },
        { label: 'Mobilisation des ressources douanières', href: '#', icon: Boxes },
        { label: 'Mobilisation des ressources non fiscales', href: '#', icon: Coins },
        { label: 'Maitrise des exonérations et réduction des arriérés', href: '#', icon: FileBarChart },
        { label: 'Digitalisation des régies financières', href: '#', icon: Binary },
      ],
    },
    // {
    //   label: 'Publications',
    //   icon: FileText,
    //   children: [
    //     { label: 'Rapports', href: '#', icon: FileBarChart },
    //   ],
    // },
    { 
      label: 'Documentation',
      href: '#',
      icon: BookOpen
    },
    { 
      label: 'Contact',
      href: '#',
      icon: Mail
    },
    {
      label: 'FAQ',
      icon: HelpCircle,
      children: [],
    },
  ];
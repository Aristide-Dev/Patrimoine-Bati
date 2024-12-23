import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Target, PieChart, Settings, Briefcase, Users, 
  Clock, Globe, Workflow, Building2, ChevronRight,
  BarChart4, FileText, Shield, Database
} from 'lucide-react';

const missions = [
  {
    id: 1,
    title: "Mobilisation des Ressources",
    description: "Accroître rapidement, fortement et durablement la mobilisation des ressources internes en République de Guinée.",
    icon: Target,
    color: "bg-red-50 text-red-600",
  },
  {
    id: 2,
    title: "Modernisation Fiscale",
    description: "Appui à la modernisation de la fiscalité d'État, de la fiscalité locale et des taxes locales pour une meilleure collecte.",
    icon: PieChart,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 3,
    title: "Réforme Administrative",
    description: "Transformation des structures, refonte des processus, et digitalisation des régies financières publiques.",
    icon: Settings,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 4,
    title: "Gouvernance Financière",
    description: "Optimisation de la gouvernance et des politiques financières de l'État pour une gestion efficace.",
    icon: Shield,
    color: "bg-purple-50 text-purple-600",
  }
];

const components = [
  {
    title: "Comité de Pilotage",
    description: "Présidé par le PRG, responsable des choix des réformes et du pilotage stratégique",
    icon: Users,
  },
  {
    title: "Cadre de Dialogue",
    description: "Échanges techniques entre administrations et corps de contrôle",
    icon: Workflow,
  },
  {
    title: "Coordination Générale",
    description: "Structure d'appui à la dynamique de réforme et à sa gouvernance",
    icon: Building2,
  }
];

const principles = [
  {
    title: "Gouvernance Collégiale",
    description: "Décisions prises au sein d'un Comité de pilotage rassemblant les plus Hautes Autorités autour du PRG",
    icon: Users,
  },
  {
    title: "Approche Systémique",
    description: "Action cohérente et simultanée sur tous les déterminants de la mobilisation des ressources",
    icon: Workflow,
  },
  {
    title: "Réseau Technique",
    description: "Implication des parties prenantes dans la production des analyses et recommandations",
    icon: Database,
  },
  {
    title: "Efficience",
    description: "Capitalisation sur les acquis et accélération des réformes en cours",
    icon: BarChart4,
  },
  {
    title: "Vision Court et Moyen Terme",
    description: "Actions de mobilisation rapide combinées aux réformes structurelles",
    icon: Clock,
  },
  {
    title: "Ouverture Internationale",
    description: "Intégration des meilleures pratiques internationales et expériences régionales",
    icon: Globe,
  }
];

const objectives = [
  {
    title: "Infrastructures",
    description: "Financement du développement des infrastructures publiques",
    icon: Building2,
  },
  {
    title: "Services Publics",
    description: "Amélioration des services publics de base",
    icon: Briefcase,
  },
  {
    title: "Autonomie Financière",
    description: "Réduction de la dépendance aux financements extérieurs",
    icon: Shield,
  },
  {
    title: "Gestion de la Dette",
    description: "Limitation du recours à l'endettement public",
    icon: FileText,
  }
];

export default function OrganisationMissionsPage() {
  return (
    <AppLayout>
      <Head title="Organisation et Missions | MAMRI" />

      {/* Hero Section Améliorée */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-4">
              Décret D/2021/064/PRG/SGG du 25 février 2021
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">
              Organisation et Missions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              La MAMRI œuvre pour accroître significativement la mobilisation des ressources internes 
              à travers la modernisation et la réforme des administrations fiscales.
            </p>
          </div>
        </div>
      </div>

      {/* Section Missions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Missions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La MAMRI intervient sur plusieurs axes stratégiques pour assurer une mobilisation 
              efficace des ressources internes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission) => (
              <div
                key={mission.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className={`p-6 ${mission.color} group-hover:bg-opacity-75 transition-colors`}>
                  <mission.icon size={32} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">{mission.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Composantes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Composantes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une structure organisationnelle efficace pour atteindre nos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-primary hover:text-white transition-colors group"
              >
                <component.icon size={40} className="mb-6 text-primary group-hover:text-white" />
                <h3 className="text-xl font-bold mb-4">{component.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Principes d'Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Principes d'Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des principes fondamentaux qui guident notre approche et nos actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <principle.icon size={32} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Objectifs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Assurer durablement le financement du développement et de la prospérité de la Guinée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary hover:text-white transition-colors group"
              >
                <objective.icon 
                  size={40} 
                  className="mx-auto mb-4 text-primary group-hover:text-white" 
                />
                <h3 className="text-lg font-bold mb-2">{objective.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
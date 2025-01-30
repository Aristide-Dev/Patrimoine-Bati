import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  FileText, TrendingUp, RefreshCw, Target,
  Shield, Binary, PieChart, CheckCircle,
  Database, Coins
} from 'lucide-react';

const RessourcesFiscalesPage = () => {
  const sections = {
    stats: [
      { label: "PIB", description: "Objectif de pression fiscale", icon: TrendingUp },
      { label: "Services", description: "Digitalisation prévue", icon: Binary },
      { label: "Réduction", description: "Des litiges fiscaux", icon: Shield },
      { label: "Agents", description: "Formés annuellement", icon: Target }
    ],
    objectives: [
      {
        title: "Digitalisation comme norme",
        description: "Inscrire la digitalisation comme la norme en termes de méthode de paiement des impôts et taxes.",
        icon: Binary,
        details: ["Paiements électroniques", "Digitalisation des processus fiscaux", "Guichet unique fiscal"]
      },
      {
        title: "Élargissement de l'assiette fiscale",
        description: "Parvenir à l'élargissement de l'assiette fiscale sur une nouvelle approche d'insertion des activités informelles.",
        icon: PieChart,
        details: ["Ciblage des activités non déclarées", "Mesures incitatives", "Sensibilisation"]
      },
      {
        title: "Fichiers contribuables normalisés",
        description: "Faciliter la conception et maîtrise d'un fichier de contribuables aux normes internationales.",
        icon: FileText,
        details: ["Centralisation des données", "Interopérabilité", "Standards internationaux"]
      },
      {
        title: "Conduite du changement",
        description: "Appuyer à la conduite du changement dans l'administration fiscale.",
        icon: RefreshCw,
        details: ["Formation continue", "Processus internes", "Nouvelles technologies"]
      }
    ],
    reforms: [
      {
        title: "NIFP",
        description: "Numéro d'Identification Fiscale Permanent",
        status: "En cours",
        progress: 75
      },
      {
        title: "Géocodage Fiscal",
        description: "Programme d'adressage et géocodage immobilier",
        status: "En cours",
        progress: 60
      },
      {
        title: "Centres de Gestion",
        description: "Support aux PME pour leurs obligations fiscales",
        status: "Planifié",
        progress: 30
      }
    ]
  };

  return (
    <AppLayout>
      <Head title="Ressources Fiscales - MAMRI" />
      
      {/* Hero Section - Style moderne avec overlay gradient */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative text-white">
          <h1 className="text-6xl font-bold mb-8 leading-tight max-w-4xl">
            Modernisation du Système Fiscal Guinéen
          </h1>
          <p className="text-2xl mb-12 max-w-2xl leading-relaxed opacity-90">
            Une approche innovante pour une gestion efficace et transparente des ressources.
          </p>
          
          {/* Stats cards avec design moderne */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {sections.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <stat.icon className="w-8 h-8 mb-4 text-blue-400" />
                <div className="text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Objectifs - Design épuré et moderne */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Nos Objectifs Stratégiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.objectives.map((objective, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <objective.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{objective.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{objective.description}</p>
                <ul className="space-y-3">
                  {objective.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Réformes - Design minimaliste avec progression */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Réformes en Cours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.reforms.map((reform, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">{reform.title}</h3>
                <p className="text-gray-600 mb-6">{reform.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{reform.status}</span>
                  <span>{reform.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${reform.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default RessourcesFiscalesPage;
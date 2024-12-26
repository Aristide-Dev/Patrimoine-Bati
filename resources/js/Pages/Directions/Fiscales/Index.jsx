import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  FileText, TrendingUp, RefreshCw, Target,
  BarChart2, Shield, Settings, Users, Database,
  ArrowRight, CheckCircle, AlertCircle, Coins,
  PieChart, Building2, Binary, BookOpen
} from 'lucide-react';

const RessourcesFiscalesPage = () => {
  const sections = {
    stats: [
      { label: "PIB", description: "Objectif de pression fiscale" },
      { label: "Services", description: "Digitalisation prévue" },
      { label: "Réduction", description: "Des litiges fiscaux" },
      { label: "Agents", description: "Formés annuellement" }
    ],
    objectives: [
      {
        title: "Digitalisation comme norme",
        description: "Inscrire la digitalisation comme la norme en termes de méthode de paiement des impôts et taxes.",
        icon: Binary,
        metrics: "Objectif : Automatisation à 80%",
        details: ["Paiements électroniques", "Digitalisation des processus fiscaux", "Guichet unique fiscal"]
      },
      {
        title: "Élargissement de l'assiette fiscale",
        description: "Parvenir à l’élargissement de l’assiette fiscale sur une nouvelle approche d’insertion des activités informelles.",
        icon: PieChart,
        metrics: "Objectif : Réduction du secteur informel",
        details: ["Ciblage des activités non déclarées", "Mesures incitatives pour la formalisation", "Sensibilisation accrue"]
      },
      {
        title: "Fichiers de contribuables normalisés",
        description: "Faciliter la conception et maîtrise d’un fichier de contribuables répondant aux normes internationales.",
        icon: FileText,
        metrics: "Objectif : Mise en conformité",
        details: ["Centralisation des données fiscales", "Interopérabilité entre administrations", "Respect des standards internationaux"]
      },
      {
        title: "Conduite du changement",
        description: "Appuyer à la conduite du changement dans l’administration fiscale.",
        icon: RefreshCw,
        metrics: "Objectif : Transformation organisationnelle",
        details: ["Formation au changement", "Renforcement des processus internes", "Adoption de nouvelles technologies"]
      },
      {
        title: "Promotion du civisme fiscal",
        description: "Promouvoir le civisme fiscal avec un accent sur la redevabilité des administrateurs fiscaux.",
        icon: Shield,
        metrics: "Objectif : Amélioration de la relation contribuable",
        details: ["Campagnes de sensibilisation", "Transparence des procédures fiscales", "Responsabilisation des agents fiscaux"]
      },
      {
        title: "Amélioration du pilotage des recettes",
        description: "Améliorer davantage le pilotage des recettes en prévision et en exécution.",
        icon: TrendingUp,
        metrics: "Objectif : Précision accrue",
        details: ["Outils de prévision avancés", "Rapports en temps réel", "Meilleure coordination inter-administrations"]
      }
    ],
    
    reforms: [
      {
        title: "Numéro d'Identification Fiscale Permanent (NIFP)",
        description: "Permet d'identifier chaque contribuable de manière unique.",
        status: "En cours",
        progress: 75,
        impact: "Amélioration de la traçabilité fiscale",
        deadline: "2024 Q4",
      },
      {
        title: "Géocodage Fiscal",
        description: "Acquisition d'un programme d'adressage et de géocodage des propriétés immobilières pour une meilleure gestion fiscale.",
        status: "En cours",
        progress: 60,
        impact: "Optimisation des recettes locales",
        deadline: "2025 Q2",
      },
      {
        title: "Centres de Gestion Agréés",
        description: "Création de centres pour soutenir les PME dans la gestion de leurs obligations fiscales.",
        status: "Planifié",
        progress: 30,
        impact: "Accompagnement des petites entreprises",
        deadline: "2025 Q3",
      },
      {
        title: "Révision du Code Général des Impôts",
        description: "Mise à jour et actualisation des lois fiscales pour s'adapter aux évolutions économiques.",
        status: "En cours",
        progress: 85,
        impact: "Clarification et simplification juridique",
        deadline: "2024 Q3",
      },
      {
        title: "Paiement Obligatoire des Impôts par Virement",
        description: "Modernisation des paiements fiscaux avec des virements obligatoires pour plus de transparence.",
        status: "En cours",
        progress: 50,
        impact: "Réduction des fraudes et des paiements en espèces",
        deadline: "2024 Q2",
      },
      {
        title: "Nouveau Cadre Organique de la DGI",
        description: "Établir une structure moderne pour la Direction Générale des Impôts (DGI).",
        status: "Planifié",
        progress: 40,
        impact: "Renforcement institutionnel",
        deadline: "2025 Q1",
      },
    ],
    innovations: [
      {
        title: "Intelligence Artificielle",
        description: "Utilisation de l'IA pour détecter les fraudes et automatiser l'analyse fiscale.",
        icon: Binary,
        status: "En développement"
      },
      {
        title: "Blockchain",
        description: "Garantir la traçabilité et la transparence des transactions fiscales.",
        icon: Database,
        status: "En étude"
      },
      {
        title: "Paiements via Mobile Banking",
        description: "Faciliter le paiement des impôts via des applications mobiles.",
        icon: Coins,
        status: "Phase pilote"
      }
    ]
  };

  return (
    <AppLayout>
      <Head title="Ressources Fiscales - MAMRI" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-700 py-32 text-center text-white">
        
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Mobilisation des Ressources Fiscales</h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Moderniser le système fiscal guinéen pour une gestion efficace et transparente des ressources internes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {sections.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-4">
                <div className="text-sm uppercase">{stat.label}</div>
                <div className="text-lg uppercase mt-1 font-bold">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Objectifs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche claire pour maximiser les recettes fiscales tout en renforçant la confiance des citoyens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.objectives.map((objective, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <objective.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{objective.title}</h3>
                <p className="text-gray-600 mb-3">{objective.description}</p>
                <ul className="text-sm">
                  {objective.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réformes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Réformes Majeures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des initiatives concrètes pour une fiscalité moderne et efficace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.reforms.map((reform, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">{reform.title}</h3>
                <p className="text-gray-600 mb-3">{reform.description}</p>
                <div className="text-sm flex justify-between mb-3">
                  {/* <span>Impact : {reform.impact}</span> */}
                  {/* <span>Échéance : {reform.deadline}</span> */}
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="bg-primary h-2 rounded-full"
                    // style={{ width: `${reform.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intégrer les technologies de pointe pour un système fiscal de nouvelle génération.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.innovations.map((innovation, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <innovation.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                <p className="text-gray-600">{innovation.description}</p>
                <span className="inline-block mt-3 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  {innovation.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </AppLayout>
  );
};

export default RessourcesFiscalesPage;

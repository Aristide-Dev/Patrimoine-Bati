import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  Cpu, Monitor, ChevronRight, Database, Globe,
  Server, Shield, Users, CheckCircle, ArrowRight,
  BarChart2, Lock, Settings, Network, FileText,
  Smartphone, Cloud, Zap
} from 'lucide-react';

const DigitalisationPage = () => {
  const content = {
    hero: {
      title: "Digitalisation",
      subtitle: "Transformation Numérique des Services",
      description: "Modernisation des administrations de recettes pour une meilleure mobilisation des ressources internes"
    },
    overview: {
      title: "Notre Mission",
      description: "La Direction de Projet Digitalisation est chargée d'appuyer les régies de l'État dans l'identification et le déploiement de solutions numériques pour la mobilisation et la sécurisation des ressources internes.",
      keyPoints: [
        "Modernisation des processus administratifs",
        "Sécurisation des recettes",
        "Amélioration de l'efficacité opérationnelle"
      ]
    },
    stats: {
      worldBank: {
        title: "État des Lieux",
        subtitle: "Selon les critères 'Doing Business' de la Banque Mondiale",
        items: [
          "Utilisation minimale pour les ressources fiscales et non fiscales",
          "Outil limité de déclaration et paiement en ligne pour les douanes",
          "Potentiel important d'amélioration via la digitalisation"
        ]
      }
    },
    achievements: [
      {
        category: "Ressources Fiscales",
        title: "Portail eTax",
        description: "Télédéclaration et télépaiement des impôts et taxes",
        image: "/images/projets/etax.png",
        progress: 75,
        features: ["Déclarations en ligne", "Paiements électroniques", "Suivi en temps réel"]
      },
      {
        category: "Ressources Non Fiscales",
        title: "Guichet Unique GUCEG",
        description: "Facilitation du commerce extérieur",
        image: "/images/projets/Guichet_Unique_du_Commerce_Extérieur_de_Guinee.png",
        progress: 85,
        features: ["Procédures simplifiées", "Traitement accéléré", "Transparence accrue"]
      },
      {
        category: "Ressources Douanières",
        title: "Sydonia World",
        description: "Migration et modernisation du système d'information",
        image: "/images/projets//logo_SYDONIAWorld.png",
        progress: 90,
        features: ["Gestion intégrée", "Traçabilité complète", "Interopérabilité"]
      }
    ],
    objectives: [
      {
        title: "Dématérialisation",
        description: "Automatisation des processus internes",
        icon: Monitor,
        metrics: "80% des services en ligne",
        benefits: ["Réduction des délais", "Économie de ressources", "Meilleur suivi"]
      },
      {
        title: "Interopérabilité",
        description: "Partage de données entre administrations",
        icon: Network,
        metrics: "100% des régies connectées",
        benefits: ["Données centralisées", "Décisions éclairées", "Efficacité accrue"]
      },
      {
        title: "Sécurisation",
        description: "Protection des données et transactions",
        icon: Shield,
        metrics: "Standards internationaux",
        benefits: ["Intégrité des données", "Confidentialité", "Traçabilité"]
      },
      {
        title: "Performance",
        description: "Optimisation des recouvrements",
        icon: BarChart2,
        metrics: "+40% d'efficacité",
        benefits: ["Meilleur recouvrement", "Réduction des fraudes", "Analyse prédictive"]
      }
    ],
    challenges: [
      {
        title: "Infrastructure",
        description: "Renforcement des capacités techniques",
        solutions: [
          "Modernisation des équipements",
          "Amélioration de la connectivité",
          "Redondance des systèmes"
        ],
        priority: "Haute"
      },
      {
        title: "Formation",
        description: "Développement des compétences",
        solutions: [
          "Formation continue",
          "Transfert de compétences",
          "Certification des agents"
        ],
        priority: "Moyenne"
      },
      {
        title: "Sécurité",
        description: "Protection des données",
        solutions: [
          "Cryptage des données",
          "Authentification forte",
          "Audit de sécurité"
        ],
        priority: "Haute"
      }
    ]
  };

  return (
    <AppLayout>
      <Head title="Digitalisation - MAMRI" />

      {/* Hero Section Améliorée */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Direction de Projet
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{content.hero.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {content.hero.description}
            </p>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{content.overview.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {content.overview.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.overview.keyPoints.map((point, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* État des Lieux */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {content.stats.worldBank.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {content.stats.worldBank.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                {content.stats.worldBank.items.map((item, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <ChevronRight className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Réalisations 2020-2021</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aperçu des projets de numérisation majeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  <div className="space-y-2 mb-4">
                    {achievement.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="relative pt-1">
                    {/* <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-primary">
                          Progression
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-primary">
                          {achievement.progress}%
                        </span>
                      </div>
                    </div> */}
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${achievement.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Objectifs Stratégiques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos axes prioritaires pour la transformation numérique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.objectives.map((objective, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <objective.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600 mb-4">{objective.description}</p>
                {/* <div className="text-sm font-medium text-primary mb-4">{objective.metrics}</div> */}
                <ul className="space-y-2">
                  {objective.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Défis et Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Défis et Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre approche pour surmonter les obstacles de la transformation numérique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                    {/* <span className={`px-3 py-1 rounded-full text-sm ${challenge.priority === 'Haute'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      Priorité {challenge.priority}
                    </span> */}
                  </div>
                  <p className="text-gray-600 mb-6">{challenge.description}</p>
                  <div className="space-y-3">
                    {challenge.solutions.map((solution, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Participez à la transformation numérique
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Découvrez comment nous pouvons collaborer pour moderniser les services publics
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Nous contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section> */}
    </AppLayout>
  );
};

export default DigitalisationPage;
import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Coins, ChevronRight, TrendingUp, FileText, 
  BarChart2, Database, Settings, Target, Globe,
  ArrowRight, Shield, Users
} from 'lucide-react';

const RessourcesNonFiscalesPage = () => {
  const content = {
    overview: {
      title: "Ressources Non Fiscales",
      description: "Les ressources non fiscales constituent une part importante des recettes de l'État, comprenant les revenus des services publics et l'exploitation du patrimoine national.",
      stats: {
        contribution: "1,2%",
        description: "du PIB en 2019"
      }
    },
    evolution: {
      years: [
        { year: "2017", amount: "562", pib: "0,6%" },
        { year: "2018", amount: "1004", pib: "0,9%" },
        { year: "2019", amount: "1547", pib: "1,2%" }
      ]
    },
    performance2020: {
      expected: "812 852 176 000 GNF",
      target: "1 170 918 997 000 GNF",
      gap: "-358 066 821 000 GNF"
    },
    objectives: [
      {
        title: "Optimisation des Ressources",
        description: "Gestion efficace des ressources naturelles et patrimoniales",
        icon: Target
      },
      {
        title: "Digitalisation",
        description: "Modernisation des systèmes de collecte et de suivi",
        icon: Settings
      },
      {
        title: "Renforcement des Capacités",
        description: "Formation et équipement des agents",
        icon: Users
      },
      {
        title: "Transparence",
        description: "Amélioration de la gouvernance et du reporting",
        icon: Shield
      }
    ],
    reforms: [
      {
        title: "Télépaiement",
        description: "Mise en place des systèmes de paiement électronique",
        status: "En cours",
        progress: 75
      },
      {
        title: "Guichet Unique",
        description: "Centralisation des services et paiements",
        status: "En cours",
        progress: 60
      },
      {
        title: "Formation",
        description: "Programme de formation des agents",
        status: "En cours",
        progress: 85
      }
    ]
  };

  return (
    <AppLayout>
      <Head title="Ressources Non Fiscales - MAMRI" />
      
      {/* Hero Section Améliorée */}
      <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6d2f99c7716e')] bg-cover bg-center opacity-10"></div> */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
              Direction de Projet
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">{content.overview.title}</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {content.overview.description}
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques et Évolution */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {/* Évolution des recettes */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Évolution des Recettes Non Fiscales</h2>
              <div className="space-y-4">
                {content.evolution.years.map((year) => (
                  <div key={year.year} className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <span className="text-gray-600">Année</span>
                      <p className="text-lg font-bold text-gray-900">{year.year}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Montant (Mds GNF)</span>
                      <p className="text-lg font-bold text-primary">{year.amount}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">% PIB</span>
                      <p className="text-lg font-bold text-green-600">{year.pib}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance 2020 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance 2020</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4">
                  <span className="text-sm text-gray-600">Encaissement Prévisible</span>
                  <p className="text-xl font-bold text-primary">{content.performance2020.expected}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <span className="text-sm text-gray-600">LFI 2020</span>
                  <p className="text-xl font-bold text-gray-900">{content.performance2020.target}</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <span className="text-sm text-gray-600">Écart</span>
                  <p className="text-xl font-bold text-red-600">{content.performance2020.gap}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Contexte et Nature des RNF */}
      <section className="py-10 bg-gray-100 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contexte et Nature des RNF</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprendre la nature et l’importance des Ressources Non Fiscales dans la mobilisation des recettes de l'État.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce que les RNF ?</h3>
              <p className="text-gray-600 leading-relaxed">
                Les ressources non fiscales comprennent les recettes provenant de la vente de services publics et de l'exploitation du patrimoine de l'État. Elles incluent :
              </p>
              <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                <li>Recettes administratives : frais d'état civil, immatriculations, permis, etc.</li>
                <li>Recettes patrimoniales : exploitation des télécommunications, espace aérien, locations, etc.</li>
                <li>Dividendes des entreprises publiques et mixtes.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjeux et Potentiel</h3>
              <p className="text-gray-600 leading-relaxed">
                Ces ressources représentent une opportunité importante pour accroître le taux de pression fiscale sans alourdir les obligations des contribuables.
              </p>
              <p className="text-gray-600 mt-4">
                L'objectif de la Direction du Projet des RNF est de maximiser leur contribution en identifiant les gisements inexploités et en améliorant leur gestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nature Juridique */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nature Juridique des RNF</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprendre le cadre légal et la structure des Ressources Non Fiscales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Définition</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Les ressources non fiscales sont légalement disposées dans une nomenclature budgétaire et comptable qui précise leurs natures ou origines administratives.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques clés :</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                    <span className="text-gray-600">Recettes additives aux impôts sans caractère obligatoire</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                    <span className="text-gray-600">Services publics rémunérés selon des taux en vigueur</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types de Recettes</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recettes Administratives</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Recettes judiciaires et amendes de pénalités</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Droits et frais administratifs</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Pièces d'état civil et permis divers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recettes Patrimoniales</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Exploitation des télécommunications</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Gestion de l'espace aérien et maritime</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mt-1 mr-2" />
                      <span className="text-gray-600">Locations de bâtiments administratifs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Axes de Travail */}
      <section className="py-10 bg-gray-100 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Axes de Travail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principaux domaines d'intervention pour l'amélioration des RNF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              {
                icon: Users,
                title: "Formation",
                description: "Formation des agents administratifs et comptables à la digitalisation"
              },
              {
                icon: Settings,
                title: "Réorganisation",
                description: "Réorganisation administrative et comptable pour la diversification"
              },
              {
                icon: FileText,
                title: "Révision des Textes",
                description: "Recensement et révision des textes générateurs de RNF"
              },
              {
                icon: Globe,
                title: "Digitalisation",
                description: "Mise en place du règlement électronique via le Guichet unique"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <item.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Objectifs et Réformes */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Objectifs Stratégiques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos axes prioritaires pour optimiser la mobilisation des ressources non fiscales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-16">
            {content.objectives.map((objective, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <objective.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Études et Réformes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Résultats des premières études sur les Ressources Non Fiscales (RNF) et initiatives de réforme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contexte et Observations</h3>
              <p className="text-gray-600 leading-relaxed">
                Les études ont révélé des faiblesses dans la coordination assurée par la Direction Nationale du Trésor et de la Comptabilité Publique (DNTCP). Ces limites incluent :
              </p>
              <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                <li>Un manque de coordination centrale des phases administratives.</li>
                <li>Des textes réglementaires avec un champ d’application limité.</li>
                <li>Un potentiel inexploité pour les recettes des services publics.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Propositions Clés</h3>
              <p className="text-gray-600 leading-relaxed">
                Les propositions incluent des mesures concrètes pour améliorer la mobilisation des RNF :
              </p>
              <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
                <li>Formation des agents pour une meilleure digitalisation.</li>
                <li>Réorganisation administrative pour diversifier et rentabiliser les ressources.</li>
                <li>Révision des textes réglementaires et modernisation des circuits de collecte.</li>
                <li>Mise en place du règlement électronique lié au Guichet Unique.</li>
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Réformes en Cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {content.reforms.map((reform, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{reform.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${reform.status === 'En cours'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {reform.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{reform.description}</p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${reform.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      ></div>
                    </div>
                    {/* <span className="text-sm font-semibold text-primary">{reform.progress}% complété</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      {/* <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Participez à l'amélioration des ressources non fiscales
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ensemble, optimisons la mobilisation des ressources non fiscales pour le développement de la Guinée
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              Nous Contacter
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/documentation" 
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              Documentation
              <FileText className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section> */}
    </AppLayout>
  );
};

export default RessourcesNonFiscalesPage;
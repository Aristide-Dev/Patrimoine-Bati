import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  Package, Shield, ChevronRight, TrendingUp,
  Users, Database, Settings, Target, Globe,
  ArrowRight, FileText, BarChart2
} from 'lucide-react';

const RessourcesDouanieresPage = () => {
  const content = {
    context: {
      title: "Contexte et Enjeux",
      description: "La mobilisation des ressources de financement du développement est particulièrement confrontée aux effets des crises économiques, sociales et politiques tant sur le plan international que national.",
      stats: {
        contribution: "49,29%",
        description: "des recettes internes proviennent des douanes"
      }
    },
    performance: {
      title: "Contrat de Performance",
      year: "2021",
      target: {
        current: "40%",
        next: "60%",
        completion: "96%"
      },
      details: "Le contrat de performance signé le 22 février 2021 consacre un accroissement de 40% sur les réalisations de 2020, et celui de 2022 prévoit un accroissement de 60% sur cette base."
    },
    reforms: [
      {
        title: "SYDONIA WORLD",
        description: "Système informatique douanier moderne",
        year: "2015",
        status: "Opérationnel"
      },
      {
        title: "Télédéclaration",
        description: "Dématérialisation des procédures",
        status: "En cours"
      },
      {
        title: "Guichet Unique",
        description: "Commerce extérieur de Guinée",
        status: "En cours"
      }
    ],
    challenges: [
      {
        title: "Mobilité des Agents",
        description: "Amélioration de la couverture territoriale",
        icon: Users
      },
      {
        title: "Éthique et Gouvernance",
        description: "Renforcement des pratiques professionnelles",
        icon: Shield
      },
      {
        title: "Motivation du Personnel",
        description: "Valorisation des compétences",
        icon: Target
      },
      {
        title: "Féminisation",
        description: "Équilibre des effectifs",
        icon: Users
      }
    ],
    achievements: {
      staff: "2,382",
      description: "agents des douanes recensés",
      training: [
        "Formation militaire commune de base",
        "Formations continues décentralisées",
        "Formations internationales",
        "Construction de l'école nationale des douanes"
      ]
    }
  };

  return (
    <AppLayout>
      <Head title="Ressources Douanières - MAMRI" />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-700 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec')] bg-cover bg-center opacity-40"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6">
              Direction de Projet
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">Ressources Douanières</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Modernisation et optimisation des recettes douanières pour le développement de la Guinée
            </p>
          </div>
        </div>
      </div>

      {/* Contexte et Performance */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Contexte */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.context.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {content.context.description}
              </p>
              <div className="bg-white rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {content.context.stats.contribution}
                </div>
                <p className="text-gray-600">
                  {content.context.stats.description}
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.performance.title}</h2>
              <div className="mb-8">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                        Taux de réalisation
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold inline-block text-primary">
                        {content.performance.target.completion}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: content.performance.target.completion }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    ></div>
                  </div>
                </div>
                <p className="text-gray-600">
                  {content.performance.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réformes et Impact */}
      <section className="py-10 bg-gray-100 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Réformes Majeures et Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les initiatives clés visant à moderniser et renforcer les douanes guinéennes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {content.reforms.map((reform, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reform.title}</h3>
                <p className="text-gray-600">{reform.description}</p>
                {reform.year && (
                  <p className="text-sm text-gray-500 mt-2">Lancée en : {reform.year}</p>
                )}
                <p className="text-sm font-medium mt-4">
                  <span className="text-primary">Statut :</span> {reform.status}
                </p>
                <p className="text-sm font-medium">
                  <span className="text-primary">Impact :</span> Optimisation des recettes et amélioration des services.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Défis et Réalisations */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Défis */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Défis Majeurs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {content.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <challenge.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Réalisations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Réalisations</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl font-bold text-primary mb-4">
                  {content.achievements.staff}
                </div>
                <p className="text-gray-600 mb-8">{content.achievements.description}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Formations</h3>
                <ul className="space-y-3">
                  {content.achievements.training.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-primary mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Clés */}
      <section className="py-10 bg-gray-100 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Statistiques Clés</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aperçu des contributions et des réalisations majeures des douanes guinéennes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {[
              { title: "49,29%", subtitle: "Contribution des Douanes", description: "Part des recettes internes provenant des douanes." },
              { title: "96%", subtitle: "Objectifs atteints", description: "Taux de réalisation des objectifs 2021." },
              { title: "2,382", subtitle: "Agents Douaniers", description: "Nombre total d'agents en activité." },
              { title: "60%", subtitle: "Croissance Cible", description: "Prévision de croissance des recettes pour 2022." },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.title}</div>
                <div className="text-lg font-medium text-gray-900">{stat.subtitle}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Titre Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Statistiques des Recettes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analyse détaillée des recettes internes et leur rapport avec le PIB.
            </p>
          </div>

          {/* Cartes Statistiques */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proportion des Régies</h3>
              <div className="space-y-4">
                {[
                  { regie: "DGD", proportion: "49,29%", color: "bg-blue-500" },
                  { regie: "DNI", proportion: "44,21%", color: "bg-green-500" },
                  { regie: "DNTCP", proportion: "0,90%", color: "bg-yellow-500" }
                ].map((item, idx) => (
                  <div key={idx} className="relative pt-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{item.regie}</span>
                      <span className="text-sm font-medium text-gray-700">{item.proportion}</span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: item.proportion }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.color}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Évolution des Recettes/PIB</h3>
              <div className="space-y-4">
                {[
                  { annee: "2017", valeur: "14,5%" },
                  { annee: "2018", valeur: "14,0%" },
                  { annee: "2019", valeur: "13,5%" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{item.annee}</span>
                    <span className="text-primary font-bold">{item.valeur}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance 2020</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">91,43%</div>
                <p className="text-gray-600 mb-4">Taux de réalisation</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Prévisions: 9 411 798 000 GNF<br />
                    Réalisations: 8 605 968 149 GNF
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau d'Évolution */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Évolution des Recettes Douanières (2010-2020)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prévisions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réalisations</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taux de réalisation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taux d'évolution</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observations</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { annee: "2010", previsions: "2 267 700 000", realisations: "1 643 616 274", tauxRealisation: "72,48%", evolution: "-", obs: "Année électorale" },
                    { annee: "2011", previsions: "2 262 473 834", realisations: "2 442 798 512", tauxRealisation: "107,97%", evolution: "48,62%", obs: "" },
                    { annee: "2012", previsions: "3 663 799 097", realisations: "3 630 299 008", tauxRealisation: "99,09%", evolution: "48,61%", obs: "" },
                    { annee: "2013", previsions: "3 983 961 950", realisations: "3 996 763 976", tauxRealisation: "100,32%", evolution: "10,09%", obs: "" },
                    { annee: "2014", previsions: "4 720 900 000", realisations: "4 626 600 707", tauxRealisation: "98,00%", evolution: "15,75%", obs: "" },
                    { annee: "2015", previsions: "5 194 215 178", realisations: "4 581 551 013", tauxRealisation: "88,20%", evolution: "-0,97%", obs: "Année électorale" },
                    { annee: "2016", previsions: "5 731 749 079", realisations: "5 814 197 546", tauxRealisation: "101,44%", evolution: "26,90%", obs: "Date d’entrée en vigueur du TEC" },
                    { annee: "2017", previsions: "5 925 455 760", realisations: "6 412 784 525", tauxRealisation: "108,22%", evolution: "10,29%", obs: "" },
                    { annee: "2018", previsions: "6 415 173 164", realisations: "6 884 060 678", tauxRealisation: "107,31%", evolution: "7,34%", obs: "" },
                    { annee: "2019", previsions: "8 122 518 000", realisations: "8 693 346 000", tauxRealisation: "107,03%", evolution: "26,28%", obs: "" },
                    { annee: "2020", previsions: "9 411 798 000", realisations: "8 605 968 149", tauxRealisation: "91,43%", evolution: "-1%", obs: "Année électorale" }
                  ].map((item, idx) => (
                    <tr key={idx} className='font-'>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.annee}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.previsions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.realisations}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.tauxRealisation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.evolution}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-bold">{item.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>



      {/* Section Appel à l'Action */}
      {/* <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Participez à la Modernisation Douanière
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ensemble, construisons un système douanier moderne et efficace pour soutenir le développement économique.
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
              href="/rapports"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              Consulter les Rapports
              <FileText className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section> */}
    </AppLayout>
  );
};

export default RessourcesDouanieresPage;
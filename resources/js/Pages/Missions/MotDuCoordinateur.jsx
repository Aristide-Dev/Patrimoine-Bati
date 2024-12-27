import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Quote, Calendar, ArrowRight, Download, FileText, Eye, Share2 } from 'lucide-react';

const CoordinatorMessagePage = () => {
  return (
    <AppLayout>
      <Head title="Le Mot du Coordonnateur - MAMRI" />

      {/* Hero Section avec image de fond et overlay */}
        <div className="relative  h-[500px] md:h-[600px] lg:h-[700px]overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero/mot_du_coordinateur_cover.jpg')] bg-cover bg-top"></div>
            <div className="absolute inset-0 bg-black/20"></div>
        </div>


      {/* Section Principale */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-bl from-yellow-200 to-yellow-600 bg-clip-text text-transparent mb-6">
                        Le Mot du Coordonnateur
                    </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sidebar avec profil et stats */}
              <div className="space-y-8">
                {/* Carte Profil */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src="/images/mohamed_lamine_doumbouya_coordinateur_mamri_2024.png"
                      alt="Coordonnateur MAMRI"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Dr Mohamed Lamine DOUMBOUYA</h2>
                    <p className="text-gray-600">Coordonnateur Général de la MAMRI</p>
                  </div>
                </div>

                {/* Stats et Métriques */}
                {/* <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Points Clés</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Exécution Budget</span>
                      <span className="font-bold text-primary">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-600">Recettes Intérieures</span>
                      <span className="font-bold text-primary">70%</span>
                    </div>
                  </div>
                </div> */}

                {/* Actions */}
                {/* <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-700 transition-colors">
                      <Download className="w-5 h-5 mr-2" />
                      Télécharger le Bulletin
                    </button>
                    <button className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                      <Share2 className="w-5 h-5 mr-2" />
                      Partager
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Contenu Principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Message Principal */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="prose prose-lg max-w-none">
                    <div className="flex items-start mb-8">
                      <Quote className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
                      <p className="text-xl text-gray-600 leading-relaxed italic shadow-xl p-3 rounded-xl shadow-primary-300">
                        la Mobilisation des Ressources Internes paraît dans un contexte où la problématique du financement de l'économie nationale fait débat.
                      </p>
                      <Quote className="w-12 h-12 text-primary ml-4 flex-shrink-0 rotate-180" />
                    </div>

                    <p className="text-gray-600 mb-6">
                    Les efforts de mobilisation des ressources, pour être viables et bénéfiques, gagneraient toutefois à être combinés à une volonté résolue de l’État d’améliorer la gouvernance d’ensemble des politiques publiques. Au fil des années, le volet des dépenses du budget de l’État atteint systématiquement un niveau d’exécution d’au moins 100 %, tandis que les recettes intérieures effectivement mobilisées stagnent autour de 70 %. Cet écart entre les dépenses et les recettes, associé à la qualité des dépenses publiques, accroît la fragilité du budget national (article 1). Cette fragilité peut compromettre les prévisions de croissance et saper les efforts de refondation économique et financière entrepris par le CNRD.

La bonne gestion de la dette publique (article 2) est cruciale pour contribuer à remédier à cette fragilité budgétaire. Le Gouvernement devrait être en mesure, en permanence, de suivre l’évolution de la dette publique totale et de ses composantes, tout en assurant sa contribution effective et efficiente à la production nationale. Une attention particulière doit être portée aux « bonnes dettes », définies comme celles consacrées principalement au financement de la production et présentant de faibles niveaux de risques (en termes, entre autres, de taux d’intérêt et de taux de change). Dans un contexte socio-économique mondial instable, et compte tenu des résultats de mobilisation des ressources internes au cours des cinq dernières années, il est impératif de renforcer la stratégie nationale de la dette publique et d’améliorer, dans la transparence, la gestion du stock de la dette.
                    </p>

                    <p className="text-gray-600 mb-6">
                      Les efforts de mobilisation des ressources, pour être viables et bénéfiques, gagneraient toutefois à être combinés à une volonté résolue de l'État d'améliorer la gouvernance d'ensemble des politiques publiques. Au fil des années, le volet des dépenses du budget de l'État atteint systématiquement un niveau d'exécution d'au moins 100 %, tandis que les recettes intérieures effectivement mobilisées stagnent autour de 70 %. Cet écart entre les dépenses et les recettes, associé à la qualité des dépenses publiques, accroît la fragilité du budget national.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-xl my-8">
                      <p className="text-gray-600">
                      Il faudrait s’assurer que chaque franc emprunté contribue à la production nationale, pour garantir les conditions d’un remboursement réussi et pour atteindre l’objectif socioéconomique recherché.

La fiscalisation de l’Aide publique au développement (APD) est aussi discutée dans ce numéro (article 3). Dans un contexte où le Gouvernement recherche des ressources financières substantielles pour relancer l’économie nationale, il s’avère opportun de s’interroger sur la pertinence de la politique d’exonération fiscale accordée à l’Aide Publique au Développement dans notre pays. La volonté d’élargir l’assiette fiscale imposable soulève la question de la convenance de cette pratique, d’autant plus que la déclaration de Paris sur l’APD (2015) la remet en cause. Il serait judicieux d’engager des discussions avec les partenaires au développement à ce propos, éventuellement une étude analytique approfondie serait au préalable utile.

La Loi de Finances Initiale (LFI) pour l’année 2024 (article 4) prévoit une augmentation significative (plus de 7 %) des recettes hors dons de l’État par rapport à 2023. Toutefois, selon les premières données sur les impacts de l’incendie du dépôt central en décembre dernier et sur les perturbations des réseaux de communication, la réalisation de ces prévisions pourrait être compromise. Dans ce cas, un accent particulier doit être mis sur la rationalisation des dépenses publiques et sur des réformes clés, permettant à la fois de mobiliser plus de ressources et de soutenir la croissance économique, pour éviter de creuser davantage le déficit budgétaire de l’État.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Métriques et Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <FileText className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Objectifs Budgétaires
                    </h3>
                    <p className="text-gray-600">
                      Amélioration de la gouvernance et de la gestion des ressources publiques
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <Eye className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Vision Stratégique
                    </h3>
                    <p className="text-gray-600">
                      Croissance inclusive et développement durable
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default CoordinatorMessagePage;

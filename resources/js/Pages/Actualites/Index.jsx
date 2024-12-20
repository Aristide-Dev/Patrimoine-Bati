import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Calendar, Search, ArrowRight, ChevronRight, Clock, Eye, Tag, Share2 } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Réunion | Mission d'évaluation du potentiel fiscal en Guinée par le FMI",
    date: "14 novembre 2024",
    image: "https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/466874192_872730165068095_4636350882492527928_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zf9RGpLoC3sQ7kNvgEMpZwz&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=AyDuXHtsP5zdVHJW9h5u-jH&oh=00_AYD2V14RsAiQZh5cKQzHcMFLOGJfN1WnxXjswUOlwkpeYA&oe=676B32E0",
    excerpt: "Une équipe du FMI, sous la direction de M. BADY EBE, Conseiller en Analyses macroéconomiques et budgétaires, a été reçue à la MAMRI.",
    category: "Partenariats",
    readTime: "5 min",
    views: "1.2k",
    tags: ["FMI", "Fiscalité", "Évaluation"],
  },
  {
    id: 2,
    title: "Réunion MAMRI – Ministère du Budget",
    date: "09 avril 2024",
    image: "https://i2.wp.com/mbudget.gov.gn/wp-content/uploads/436447119_730909015916878_9201247975803841543_n-1024x768.jpg",
    excerpt: "L'objectif de cette rencontre était d'évaluer l'avancement des projets de réformes identifiés lors des précédents Comités de Pilotage (CoPil) de la MAMRI.",
    category: "Réformes",
    readTime: "4 min",
    views: "856",
    tags: ["Réformes", "Budget", "CoPil"],
  },
  {
    id: 3,
    title: "Le comité de pilotage de la MAMRI s'engage à améliorer la mobilisation des ressources internes",
    date: "21 juin 2023",
    image: "https://www.guinee360.com/wp-content/uploads/2023/06/355670224_657403483088572_1165891742497353360_n-jpg.webp",
    excerpt: "Selon le Général de Brigade Amara Camara, le monde traverse une crise multiforme qui affecte l'économie guinéenne.",
    category: "Mobilisation",
    readTime: "6 min",
    views: "2.3k",
    tags: ["Ressources", "Économie", "Développement"],
  },
];

export default function ActualitesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <Head 
       title="Bienvenue"
       description="Plateforme d'appui à la mobilisation des ressources internes"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* En-tête avec recherche */}
        <div className="bg-primary/90 relative overflow-hidden">
          {/* <div className="absolute inset-0 bg-[url('https://scontent.fcky4-1.fna.fbcdn.net/v/t39.30808-6/242563153_221129380040121_6567925895488409499_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1uESlPC7-egQ7kNvgGIjMkZ&_nc_zt=23&_nc_ht=scontent.fcky4-1.fna&_nc_gid=ALnqg5_1YksVk0pPrglfcg-&oh=00_AYAIFUQb-ZWA-V5rxLNOqNdDgXiPREjjoH93Ou-jWTgsfQ&oe=676B6417')] bg-contain bg-center bg-no-repeat opacity-80"></div> */}
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-white mb-6">
                Actualités & Événements
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Découvrez les dernières actualités et initiatives de la MAMRI pour le développement de la Guinée
              </p>
              <div className="flex items-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  className="flex-1 bg-transparent px-6 py-4 text-white placeholder-white/60 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Article principal */}
          <div className="mb-24">
            <article className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {articles[0].category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {articles[0].date}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {articles[0].readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {articles[0].views} vues
                      </span>
                    </div>
                    <a
                      href={`/actualites/${articles[0].id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-800 transition-colors"
                    >
                      Lire l'article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="relative h-full">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* Articles récents */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Articles Récents</h2>
              <a href="/actualites/archives" className="text-primary font-medium hover:text-primary-800 transition-colors">
                Voir tous les articles
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {articles.slice(1).map((article) => (
                <article key={article.id} className="group">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {article.category}
                        </span>
                        <span className="text-white/90 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        {article.tags[0]}
                      </span>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-primary to-primary-800 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Restez informé de nos actualités
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et mises à jour de la MAMRI
            </p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-l-xl focus:outline-none"
              />
              <button className="px-8 py-4 bg-gray-900 text-white rounded-r-xl font-medium hover:bg-gray-800 transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>    
    </AppLayout>
  );
}
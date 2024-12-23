import React, { useState, useCallback, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import MamriBanner from '@/Components/MamriBanner';
import { Calendar, Search, ArrowRight, ChevronRight, Clock, Eye, Tag, Share2, Filter, ChevronDown } from 'lucide-react';

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

const categories = [...new Set(articles.map(article => article.category))];

export default function ActualitesPage() {
  const [state, setState] = useState({
    searchQuery: "",
    selectedCategory: "all",
    showFilters: false,
    sortBy: "date", // 'date' | 'views' | 'readTime'
    currentPage: 1,
    itemsPerPage: 6
  });

  // Fonction utilitaire pour mettre à jour l'état
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Filtrage et tri des articles avec useMemo pour optimiser les performances
  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            article.tags.some(tag => tag.toLowerCase().includes(state.searchQuery.toLowerCase()));
        const matchesCategory = state.selectedCategory === "all" || article.category === state.selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        switch (state.sortBy) {
          case 'views':
            return parseInt(b.views.replace('k', '000')) - parseInt(a.views.replace('k', '000'));
          case 'readTime':
            return parseInt(b.readTime) - parseInt(a.readTime);
          case 'date':
          default:
            return new Date(b.date) - new Date(a.date);
        }
      });
  }, [state.searchQuery, state.selectedCategory, state.sortBy]);

  // Pagination
  const paginatedArticles = useMemo(() => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + state.itemsPerPage);
  }, [filteredArticles, state.currentPage, state.itemsPerPage]);

  // Gestionnaire de partage
  const handleShare = useCallback((articleId) => {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.origin + '/actualites/' + articleId
    };

    if (navigator.share) {
      navigator.share(shareData)
        .catch((error) => console.log('Erreur de partage:', error));
    }
  }, []);

  return (
    <AppLayout>
      <Head 
        title="Actualités MAMRI"
        description="Découvrez les dernières actualités et initiatives de la MAMRI"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section avec recherche améliorée */}
        <div className="bg-gradient-to-t from-primary to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-white mb-6">
                Actualités & Événements
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Découvrez les dernières actualités et initiatives de la MAMRI pour le développement de la Guinée
              </p>
              
              {/* Barre de recherche et filtres améliorés */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    placeholder="Rechercher des articles..."
                    className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={state.searchQuery}
                    onChange={(e) => updateState({ searchQuery: e.target.value })}
                  />
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => updateState({ showFilters: !state.showFilters })}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Filter size={20} />
                    Filtrer
                    <ChevronDown size={16} className={`transform transition-transform ${state.showFilters ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {state.showFilters && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 z-10">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Catégories</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        <button
                          className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                            state.selectedCategory === 'all' ? 'text-primary font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => updateState({ selectedCategory: 'all', showFilters: false })}
                        >
                          Toutes les catégories
                        </button>
                        {categories.map(category => (
                          <button
                            key={category}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                              state.selectedCategory === category ? 'text-primary font-medium' : 'text-gray-700'
                            }`}
                            onClick={() => updateState({ selectedCategory: category, showFilters: false })}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                      <div className="px-4 py-2 border-t border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-2">Trier par</h3>
                        <div className="space-y-2">
                          {[
                            { value: 'date', label: 'Date' },
                            { value: 'views', label: 'Popularité' },
                            { value: 'readTime', label: 'Temps de lecture' }
                          ].map(option => (
                            <button
                              key={option.value}
                              className={`w-full px-3 py-1.5 text-left rounded-lg ${
                                state.sortBy === option.value
                                  ? 'bg-primary/10 text-primary'
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                              onClick={() => updateState({ sortBy: option.value, showFilters: false })}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Article principal */}
          <div className="mb-24">
            <article className="relative rounded-3xl overflow-hidden bg-white shadow-2xl transform transition-transform hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {articles[0].category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {articles[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg line-clamp-3">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {articles[0].readTime}
                      </span>
                      {/* <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {articles[0].views} vues
                      </span> */}
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
                <div className="relative h-64 lg:h-full">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </article>
          </div>

          <MamriBanner />

          {/* Articles récents avec animation au défilement */}
          <div className="mt-16">
            <div className="flex items-center justify-start mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Articles Récents</h2>
              <div className="ml-8 flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun article ne correspond à votre recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedArticles.map((article) => (
                  <article key={article.id} className="group">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
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

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
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
                      <button
                        onClick={() => handleShare(article.id)}
                        className="p-2 text-gray-400 hover:text-primary transition-colors"
                        aria-label="Partager l'article"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredArticles.length > state.itemsPerPage && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  {Array.from({ length: Math.ceil(filteredArticles.length / state.itemsPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => updateState({ currentPage: index + 1 })}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        state.currentPage === index + 1
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>    
    </AppLayout>
  )}
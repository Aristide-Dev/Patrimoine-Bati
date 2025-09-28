import React, { useState, useEffect, useCallback } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import SimpleSEO from '@/Components/SimpleSEO';
import { Calendar, Search, ArrowRight, ChevronDown, Filter, Clock, Tag, Share2, Eye } from 'lucide-react';

export default function ActualitesPage({ news, seo }) {
  const [articles, setArticles] = useState(news || []);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    searchQuery: "",
    selectedCategory: "all",
    showFilters: false,
    sortBy: "created_at",
    direction: "desc",
    currentPage: 1,
    itemsPerPage: 6,
  });

  // Données SEO optimisées pour la page Actualités
  const seoData = {
    title: seo?.title || "Actualités PBP - Dernières Nouvelles et Événements du Patrimoine Public Guinéen",
    description: seo?.description || "Découvrez les dernières actualités, événements et initiatives de Le Patrimoine Bâti Public de Guinée. Communiqués, rapports, séminaires et projets de développement du patrimoine immobilier public.",
    keywords: seo?.keywords || "actualités PBP, nouvelles patrimoine Guinée, événements PBP, communiqués patrimoine public, rapports PBP, séminaires patrimoine, projets immobilier Guinée, nouvelles Conakry",
    canonical: seo?.canonical || "/actualites"
  };

  const fetchArticles = useCallback(async () => {
    // Pour l'instant, on utilise les données Inertia directement
    // Plus tard, on pourra ajouter de la recherche côté client si nécessaire
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const updateState = useCallback((updates) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleShare = useCallback(async (articleId) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: articles.data.find(a => a.id === articleId)?.title,
          url: window.location.origin + '/articles/' + articleId,
        });
      } catch (error) {
        console.error('Erreur lors du partage:', error);
      }
    }
  }, [articles]);

  return (
    <AppLayout>
      <SimpleSEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-t from-primary to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-white mb-6">Actualités & Événements</h1>
              <p className="text-xl text-white/90 mb-12">
                Découvrez les dernières actualités et initiatives du PBP
              </p>

              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    placeholder="Rechercher des articles..."
                    className="w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-12 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={state.searchQuery}
                    onChange={(e) => updateState({ searchQuery: e.target.value, currentPage: 1 })}
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
                    <div className="absolute z-50 right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Trier par</h3>
                      </div>
                      {[
                        { value: 'created_at', label: 'Date' },
                        { value: 'views', label: 'Popularité' },
                        { value: 'title', label: 'Titre' },
                      ].map(option => (
                        <button
                          key={option.value}
                          className={`w-full px-4 py-2 text-left hover:bg-gray-50 bg-primary-200 ${
                            state.sortBy === option.value ? 'text-primary font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => updateState({ 
                            sortBy: option.value,
                            showFilters: false,
                            currentPage: 1
                          })}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <>
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {articles?.map((article) => (
                  <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                    <div className="relative aspect-video">
                      <img
                        src={"/storage/"+article.image}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {article.category || 'Actualités'}
                        </span>
                        {article.tags && article.tags.length > 0 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                            {Array.isArray(article.tags) ? article.tags.join(', ') : article.tags}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.published_at).toLocaleDateString()}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {article.views || 0}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.read_time || 1} min
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleShare(article.id)}
                            className="p-2 text-gray-400 hover:text-primary transition-colors"
                          >
                            <Share2 className="w-5 h-5" />
                          </button>
                          <a
                            href={route('news.show', {slug:article.slug})}
                            className="flex items-center text-primary hover:text-primary-dark"
                          >
                            Lire
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
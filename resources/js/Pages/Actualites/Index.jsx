import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Calendar, Search, ArrowRight, ChevronDown, Filter, Clock, Tag, Share2, Eye } from 'lucide-react';

export default function ActualitesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
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
    title: "Actualités PBP - Dernières Nouvelles et Événements du Patrimoine Public Guinéen",
    description: "Découvrez les dernières actualités, événements et initiatives de Le Patrimoine Bâti Public de Guinée. Communiqués, rapports, séminaires et projets de développement du patrimoine immobilier public.",
    keywords: "actualités PBP, nouvelles patrimoine Guinée, événements PBP, communiqués patrimoine public, rapports PBP, séminaires patrimoine, projets immobilier Guinée, nouvelles Conakry",
    canonical: "/actualites",
    type: "CollectionPage"
  };

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/articles', {
        params: {
          search: state.searchQuery,
          category: state.selectedCategory === "all" ? "" : state.selectedCategory,
          sort: state.sortBy,
          direction: state.direction,
          per_page: state.itemsPerPage,
          page: state.currentPage,
        },
      });
      setArticles(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  }, [state]);

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
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        {/* Schema.org JSON-LD pour la page Actualités */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": seoData.title,
            "description": seoData.description,
            "url": seoData.canonical,
            "mainEntity": {
              "@type": "ItemList",
              "name": "Articles et Actualités PBP",
              "description": "Collection des derniers articles, actualités et événements du PBP",
              "numberOfItems": articles.total || 0,
              "itemListElement": articles.data?.slice(0, 10).map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "NewsArticle",
                  "headline": article.title,
                  "description": article.excerpt,
                  "url": `/actualites/${article.slug}`,
                  "datePublished": article.published_at,
                  "dateModified": article.updated_at,
                  "author": {
                    "@type": "Organization",
                    "name": "PBP"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "PBP - Patrimoine Bâti Public",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
                    }
                  },
                  "image": article.image ? `/storage/${article.image}` : "/images/logo/pbp_sau_logo_transparent_blanc.png",
                  "keywords": article.tags?.join(", ") || "",
                  "articleSection": article.category || "Actualités"
                }
              })) || []
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Actualités",
                  "item": "/actualites"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "PBP",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
              }
            }
          })}
        </script>

        {/* Schema.org pour la fonction de recherche */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PBP - Patrimoine Bâti Public",
            "url": "/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "/actualites?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>
      
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
                {articles.data?.map((article) => (
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
                          {article.category}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {article.tags.join(', ')}
                        </span>
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
                            {article.views}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.read_time} min
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
                            href={route('actualites.show', {slug:article.slug})}
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

              {/* Pagination */}
              {articles.meta?.last_page > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: articles.meta.last_page }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => updateState({ currentPage: i + 1 })}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          state.currentPage === i + 1
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import SEO from '@/Components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function NewsIndex({ news, filters, seo }) {
  return (
        <AppLayout>
            <SEO 
                title={seo?.title}
                description={seo?.description}
                keywords={seo?.keywords}
                canonical={seo?.canonical}
                type={seo?.type}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Actualités PBP
                        </h1>
                        <p className="text-gray-600 max-w-2xl">
                            Découvrez les dernières actualités du Patrimoine Bâti Public de Guinée. 
                            Informations sur nos activités, projets et développements.
                        </p>
                    </div>
                </div>

                {/* Filtres */}
                <div className="container mx-auto px-4 py-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <form method="GET" className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                  <input
                    type="text"
                                    name="search"
                                    placeholder="Rechercher dans les actualités..."
                                    defaultValue={filters?.search || ''}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                            <div className="sm:w-48">
                                <select
                                    name="category"
                                    defaultValue={filters?.category || 'all'}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">Toutes les catégories</option>
                                    <option value="actualites">Actualités</option>
                                    <option value="communiques">Communiqués</option>
                                    <option value="rapports">Rapports</option>
                                </select>
                      </div>
                        <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Filtrer
                        </button>
                        </form>
        </div>

                    {/* Liste des actualités */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.data.map((article) => (
                            <article 
                                key={article.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                            >
                                {article.featured_image && (
                                    <div className="aspect-video bg-gray-200">
                                        <img
                                            src={`/storage/${article.featured_image}`}
                        alt={article.title}
                                            className="w-full h-full object-cover"
                                        />
                      </div>
                                )}

                    <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(article.published_at).toLocaleDateString('fr-FR')}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            PBP
                                        </div>
                      </div>

                                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt || article.content?.substring(0, 150) + '...'}
                                    </p>
                                    
                                    <Link
                                        href={route('news.show', {slug:article.slug})}
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Lire la suite
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                    </div>
                  </article>
                ))}
              </div>

                    {/* Pagination */}
                    {news.links && (
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center gap-2">
                                {news.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                            link.active
                                                ? 'bg-blue-600 text-white'
                                                : link.url
                                                ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </nav>
                    </div>
                  )}

                    {/* Message si aucune actualité */}
                    {news.data.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Calendar className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Aucune actualité trouvée
                            </h3>
                            <p className="text-gray-600">
                                Essayez de modifier vos critères de recherche.
                            </p>
                        </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
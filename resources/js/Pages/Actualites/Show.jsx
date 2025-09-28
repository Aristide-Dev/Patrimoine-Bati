import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import SEO from '@/Components/SEO';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function NewsShow({ news, relatedNews, seo }) {
  return (
    <AppLayout>
            <SEO 
                title={seo?.title}
                description={seo?.description}
                keywords={seo?.keywords}
                canonical={seo?.canonical}
                type={seo?.type}
                image={seo?.image}
                article={seo?.article}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <Link
                            href="/actualites"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
            Retour aux actualités
                        </Link>
          </div>
        </div>

        {/* Article principal */}
                <article className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header de l'article */}
                        <header className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(news.published_at).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                                </div>
                                <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    PBP - Patrimoine Bâti Public de Guinée
                                </div>
            </div>

                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                {news.title}
            </h1>

                            {news.excerpt && (
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {news.excerpt}
                                </p>
                            )}
                        </header>

                        {/* Image principale */}
                        {news.featured_image && (
                            <div className="mb-8">
                                <img
                                    src={`/storage/${news.featured_image}`}
                                    alt={news.title}
                                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        )}

                        {/* Contenu de l'article */}
                        <div className="prose prose-lg max-w-none">
                            <div 
                                dangerouslySetInnerHTML={{ __html: news.content }}
                                className="text-gray-700 leading-relaxed"
                            />
            </div>

            {/* Actions */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                                <div className="flex gap-4">
                <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: news.title,
                                                    text: news.excerpt,
                                                    url: window.location.href
                                                });
                                            } else {
                                                navigator.clipboard.writeText(window.location.href);
                                                alert('Lien copié dans le presse-papiers');
                                            }
                                        }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        <Share2 className="w-4 h-4" />
                                        Partager
                </button>
              </div>

                                <div className="text-sm text-gray-500">
                                    Mis à jour le {new Date(news.updated_at).toLocaleDateString('fr-FR')}
                  </div>
              </div>
            </div>
          </div>
        </article>

        {/* Articles similaires */}
                {relatedNews && relatedNews.length > 0 && (
                    <section className="bg-white py-12">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Articles similaires
            </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedNews.map((article) => (
                                        <article 
                                            key={article.id}
                                            className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
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
                                                <div className="text-sm text-gray-500 mb-2">
                                                    {new Date(article.published_at).toLocaleDateString('fr-FR')}
                                                </div>
                                                
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                                    {article.title}
                    </h3>
                                                
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {article.excerpt || article.content?.substring(0, 120) + '...'}
                                                </p>
                                                
                                                <Link
                                                    href={`/actualites/${article.slug}`}
                                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    Lire la suite →
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                    </div>
                  </div>
            </div>
          </section>
        )}
      </div>
    </AppLayout>
  );
}
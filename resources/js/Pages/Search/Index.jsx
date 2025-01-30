import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { FileIcon, defaultStyles  } from "react-file-icon";
import { Calendar, Clock, Share2, ArrowRight, Eye } from 'lucide-react';
export default function SearchResults({ query, articles = [], medias = [], documents = [] }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 500);
    }, [query]);

    const Section = ({ title, items, renderItem }) => (
        items.length > 0 && (
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">{title} ({items.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(renderItem)}
                </div>
            </section>
        )
    );

    const truncate = (text, length) => {
      if (text.length <= length) return text;
      return text.slice(0, length) + "...";
    };

    const getExtention = (fileName) =>{
      return fileName.split('.').pop().toLowerCase();
    }

    return (
        <AppLayout>
            <Head title={`Résultats de recherche pour "${query}"`} />

            <div className="py-6 mt-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-8">
                        Résultats de recherche pour "{query}"
                    </h1>

                    {loading && (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                            <p className="text-xl text-gray-600 mt-4">Recherche en cours...</p>
                        </div>
                    )}

                    {!loading && (
                        <>
                            <Section 
                                title="Articles"
                                items={articles}
                                renderItem={(article) => (
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
                                          {/* <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                                            {article.tags.join(', ')}
                                          </span> */}
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
                                          <div className="flex items-center gap-4 text-sm text-gray-500">
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
                                )}
                            />

                            <Section 
                                title="Médias"
                                items={medias}
                                renderItem={(media) => (
                                    <div key={media.id} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                        {media.type === 'image' && (
                                            <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
                                                <img 
                                                    src={`/storage/${media.url}`} 
                                                    alt={media.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <h3 className="text-lg font-medium">{media.title}</h3>
                                        <p className="text-gray-600 mt-2">{media.description}</p>
                                        <a 
                                            href={media.url} 
                                            target="_blank" 
                                            className="text-primary-500 hover:underline mt-4 inline-block"
                                        >
                                            {media.type === 'video' ? 'Voir la vidéo' : 'Voir l\'image'}
                                        </a>
                                    </div>
                                )}
                            />

                            <Section 
                                title="Documents"
                                items={documents}
                                renderItem={(document) => (
                                    <div key={document.id} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                        <div className="flex items-start">
                                            <div className="p-0 bg-gray-100 rounded-lg mr-3 w-16 h-16">
                                                <FileIcon id={document.id*30} extension={getExtention(document.file_path)} {...defaultStyles[getExtention(document.file_path)]}  className="w-full h-full" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">{document.title}</h3>
                                                <p className="text-gray-600 mt-2">{truncate(document.description, 100)}</p>
                                                <a 
                                                    href={'/storage/'+document.file_path}
                                                    target="_blank" 
                                                    download 
                                                    className="text-primary-500 hover:underline mt-4 inline-block"
                                                >
                                                    Télécharger le document
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </>
                    )}

                    {!loading && articles.length === 0 && medias.length === 0 && documents.length === 0 && (
                        <div className="text-center py-6">
                            <p className="text-xl text-gray-600">
                                Aucun résultat trouvé pour votre recherche.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

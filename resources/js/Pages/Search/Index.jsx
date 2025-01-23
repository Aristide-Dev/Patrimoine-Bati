import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

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

    return (
        <AppLayout>
            <Head title={`Résultats de recherche pour "${query}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold mb-8">
                        Résultats de recherche pour "{query}"
                    </h1>

                    {loading && (
                        <div className="text-center py-12">
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
                                    <div key={article.id} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-medium">{article.title}</h3>
                                        <p className="text-gray-600 mt-2">{article.excerpt}</p>
                                        <a href={route('actualites.show', article.slug)} className="text-primary-500 hover:underline mt-4 inline-block">
                                            Lire l'article
                                        </a>
                                    </div>
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
                                            <div className="p-2 bg-gray-100 rounded-lg mr-3">
                                                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">{document.title}</h3>
                                                <p className="text-gray-600 mt-2">{document.description}</p>
                                                <a 
                                                    href={`/storage/${document.file_path}`} 
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
                        <div className="text-center py-12">
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

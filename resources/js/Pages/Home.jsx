import React from 'react';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import * as Icons from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Hero } from '@/Components/Hero';
import { CheckCircle } from 'lucide-react';
import RechercheRapide from '@/Components/RechercheRapide';
import SEO from '@/Components/SEO';

export default function Home({ regions, prefectures, communes, typesBien, zones, seo }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      // Simuler un appel API pour les articles
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArticles([
        {
          id: 1,
          title: "Nouvelle politique de gestion du patrimoine",
          excerpt: "Le PBP annonce de nouvelles mesures pour optimiser la gestion du patrimoine immobilier de l'État.",
          published_at: "2024-01-15",
          slug: "nouvelle-politique-gestion-patrimoine"
        },
        {
          id: 2,
          title: "Modernisation des infrastructures administratives",
          excerpt: "Programme de rénovation des bâtiments administratifs à Conakry et dans les régions.",
          published_at: "2024-01-10",
          slug: "modernisation-infrastructures-administratives"
        }
      ]);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <AppLayout>
      <SEO 
        title={seo?.title}
        description={seo?.description}
        keywords={seo?.keywords}
        canonical={seo?.canonical}
        type={seo?.type}
        image={seo?.image}
        organization={seo?.organization}
      />

      {/* Hero Section */}
      <Hero />

      {/* Recherche Rapide de Biens Section */}
      <section className="py-8 bg-gradient-to-b from-gray-100 to-white relative z-10" aria-label="Recherche rapide de biens">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto -mt-16">
            <RechercheRapide
              regions={regions}
              prefectures={prefectures}
              communes={communes}
              typesBien={typesBien}
              zones={zones}
            />
          </div>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="py-16 bg-white" aria-label="Présentation du PBP">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Le Patrimoine Bâti Public de Guinée
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Le PBP assure la gestion, l'entretien et la valorisation du patrimoine immobilier de l'État guinéen. 
              Notre mission est de moderniser et optimiser l'utilisation des biens immobiliers publics pour 
              servir au mieux les intérêts de la nation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-gray-50" aria-label="Statistiques du patrimoine">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Notre Patrimoine en Chiffres
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Biens Immobiliers</div>
                </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Régions Couvertes</div>
              </motion.div>
                <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Demandes Traitées</div>
              </motion.div>
                  </div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-16 bg-white" aria-label="Dernières actualités">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dernières Actualités
            </h2>
        {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Chargement des actualités...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <motion.article 
                    key={article.id}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500">
                        {new Date(article.published_at).toLocaleDateString('fr-FR')}
                      </time>
                      <Link 
                        href={`/actualites/${article.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Lire la suite →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 bg-blue-600 text-white" aria-label="Contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d'Informations ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour toute question concernant le patrimoine bâti public
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Nous Contacter
              </Link>
              <Link 
                href="/espace-client/formulaire"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Faire une Demande
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
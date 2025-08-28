import React from 'react';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import * as Icons from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Hero } from '@/Components/Hero';
import { CheckCircle } from 'lucide-react';
import RechercheRapide from '@/Components/RechercheRapide';


const pageData = {
  meta: {
    title: 'PBP - Patrimoine Bâti Public de Guinée | Accueil',
    description: 'Patrimoine Bâti Public de Guinée : gestion innovante et durable du patrimoine immobilier de l\'État guinéen. Logements administratifs, valorisation immobilière, baux commerciaux et services publics.',
    keywords: 'PBP - SAU, patrimoine bâti Guinée, immobilier public Conakry, logements administratifs Guinée, valorisation immobilière État, baux commerciaux publics, service public Guinée, gestion patrimoine État guinéen, PBP - SAU Conakry, ministère patrimoine Guinée',
    ogImage: '/images/hero/home.jpg',
    ogType: 'website',
    articleSection: 'Accueil',
    canonicalUrl: typeof window !== 'undefined' ? window.location.origin : ''
  },
  hero: {
    title: 'Valorisons ensemble notre Patrimoine Public',
    subtitle: 'Une gestion transparente et innovante, au cœur de l\'action publique pour l\'État et ses citoyens.',
    image: '/images/hero/home.jpg',
    cta1: 'Explorer nos projets',
    cta2: 'Découvrir nos services',
  },
  presentation: {
    title: 'Le Patrimoine Bâti Public',
    subtitle: 'Valorisons notre héritage commun',
    description:
      'Le PBP - SAU est l\'institution dédiée à la gestion, la valorisation et la modernisation du patrimoine immobilier de l\'État guinéen. Notre mission, essentielle dans la transformation de l\'État, repose sur une gouvernance rigoureuse et une vision innovante.',
    missions: [
      {
        title: 'Gestion Stratégique',
        description:
          'Optimiser l\'utilisation du patrimoine immobilier public grâce à une gestion efficiente, transparente et durable.',
      },
      {
        title: 'Préservation du Patrimoine',
        description:
          'Garantir la conservation et la maintenance de nos bâtiments publics, assurant ainsi leur pérennité et leur fonctionnalité.',
      },
      {
        title: 'Transformation Digitale',
        description:
          'Moderniser la gestion immobilière par la digitalisation des processus et l\'amélioration continue de nos services.',
      },
      {
        title: 'Développement Durable',
        description:
          'Adopter des pratiques écologiques et responsables pour la rénovation et la valorisation de nos infrastructures.',
      },
    ],
    image: '/images/hero/photo_de_couverture.jpg',
  },

  stats: [
    {
      icon: 'Building2',
      value: '10 000+',
      label: 'Bâtiments gérés',
      description: 'Un patrimoine diversifié pour un service public optimal.',
    },
    {
      icon: 'Users',
      value: '500+',
      label: 'Logements administratifs',
      description: 'Des résidences dédiées aux fonctionnaires de l\'État.',
    },
    {
      icon: 'Store',
      value: '300+',
      label: 'Baux commerciaux',
      description: 'Valorisation stratégique de nos actifs immobiliers.',
    },
  ],

  activities: {
    title: 'Nos Actions',
    subtitle: 'Des missions claires pour valoriser le patrimoine public',
    description:
      'Le PBP met en œuvre une gestion intégrée et moderne du patrimoine immobilier de l\'État, en s\'appuyant sur des stratégies innovantes et durables.',
    areas: [
      {
        icon: 'ClipboardList',
        title: 'Gestion du Patrimoine',
        description:
          'Inventorier, suivre et entretenir l\'ensemble du patrimoine immobilier de l\'État, pour une gestion optimale de chaque bien.',
        points: [
          'Recensement et cartographie',
          'Évaluation et expertise immobilière',
          'Maintenance proactive',
          'Optimisation de l\'occupation',
        ],
        color: 'bg-white',
      },
      {
        icon: 'Home',
        title: 'Logements Administratifs',
        description:
          'Assurer une distribution équitable et transparente des logements pour les fonctionnaires de l\'État.',
        points: [
          'Attribution objective',
          'Gestion des contrats',
          'Suivi régulier',
          'Entretien et rénovation',
        ],
        color: 'bg-white',
      },
      {
        icon: 'TrendingUp',
        title: 'Valorisation Immobilière',
        description:
          'Développer et mettre en œuvre des stratégies pour optimiser la valeur de nos actifs immobiliers.',
        points: [
          'Location stratégique',
          'Réhabilitation de bâtiments historiques',
          'Développement de projets innovants',
          'Augmentation des revenus locatifs',
        ],
        color: 'bg-white',
      },
      {
        icon: 'Shield',
        title: 'Protection du Patrimoine',
        description:
          'Sécuriser et préserver le patrimoine bâti public pour les générations futures.',
        points: [
          'Surveillance renforcée',
          'Conservation des sites historiques',
          'Prévention proactive',
          'Mise en conformité des infrastructures',
        ],
        color: 'bg-white',
      },
    ],
  },

  latestNews: [
    {
      id: 1,
      title: 'Réhabilitation du patrimoine immobilier',
      excerpt:
        'Lancement d\'un ambitieux programme de réhabilitation des bâtiments administratifs à Conakry.',
      content:
        'Dans le cadre de notre stratégie de modernisation, nous lançons un vaste programme de réhabilitation des bâtiments administratifs de la capitale, visant à moderniser les espaces de travail tout en préservant l\'essence historique de notre patrimoine.',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
      category: 'Rénovation',
      author: 'Direction des Projets',
    },
    {
      id: 2,
      title: 'Nouveaux logements disponibles',
      excerpt:
        'Attribution de 50 nouveaux logements administratifs dans la commune de Kaloum.',
      content:
        'Afin d\'améliorer les conditions de vie des fonctionnaires, Le PBP met à disposition 50 nouveaux logements administratifs, renforçant ainsi notre engagement envers un service public de qualité.',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      category: 'Logements',
      author: 'Service des Attributions',
    },
    {
      id: 3,
      title: 'Modernisation des services',
      excerpt:
        'Digitalisation des procédures de demande de logement et de baux commerciaux pour plus de simplicité.',
      content:
        'Dans le cadre de notre transformation digitale, nous lançons une plateforme innovante pour simplifier les démarches administratives liées aux demandes de logement et de baux commerciaux, améliorant ainsi l\'efficacité de nos services.',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      category: 'Innovation',
      author: 'Direction de la Modernisation',
    },
  ],
};

export default function Home({ regions, prefectures, communes, typesBien, zones }) {
  const { meta, presentation, stats, activities, latestNews } = pageData;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(route('public.articles.featured'));
      setArticles(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Configuration SEO optimisée pour la page d'accueil
  const homeSeoConfig = {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogImage: meta.ogImage,
    canonicalUrl: meta.canonicalUrl,
    ogType: meta.ogType,
    articleSection: meta.articleSection,
    alternateLocales: [
      { locale: 'fr-GN', url: meta.canonicalUrl },
      { locale: 'fr', url: meta.canonicalUrl }
    ],
    itemProps: {
      itemScope: true,
      itemType: "https://schema.org/GovernmentOrganization"
    }
  };

  return (
    <AppLayout seo={homeSeoConfig}>
      <Head>
        {/* Métadonnées spécifiques à la page d'accueil */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Balises spécifiques pour la page d'accueil */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.canonicalUrl} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:locale" content="fr_GN" />
        
        {/* Twitter Card pour la page d'accueil */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.ogImage} />
        
        {/* Métadonnées pour les moteurs de recherche locaux */}
        <meta name="geo.region" content="GN-C" />
        <meta name="geo.placename" content="Conakry, Guinée" />
        <meta name="geo.position" content="9.509167;-13.712222" />
        <meta name="ICBM" content="9.509167, -13.712222" />
        
        {/* Schema.org JSON-LD pour la page d'accueil */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": meta.title,
            "description": meta.description,
            "url": meta.canonicalUrl,
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "PBP - Patrimoine Bâti Public",
              "description": meta.description,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Conakry",
                "addressCountry": "GN"
              },
              "serviceType": [
                "Gestion du patrimoine immobilier public",
                "Logements administratifs",
                "Valorisation immobilière",
                "Baux commerciaux",
                "Maintenance des bâtiments publics"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": meta.canonicalUrl
                }
              ]
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${meta.canonicalUrl}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            ],
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "PBP",
              "logo": {
                "@type": "ImageObject",
                "url": `${meta.canonicalUrl}/images/logo/pbp_sau_logo_transparent_blanc.png`
              }
            }
          })}
        </script>

        {/* Schema.org pour les statistiques */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Statistiques PBP",
            "description": "Chiffres clés du patrimoine bâti public de Guinée",
            "numberOfItems": stats.length,
            "itemListElement": stats.map((stat, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": stat.label,
              "description": stat.description,
              "additionalProperty": {
                "@type": "PropertyValue",
                "name": "Valeur",
                "value": stat.value
              }
            }))
          })}
        </script>

        {/* Schema.org pour les services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Services PBP",
            "description": "Services offerts par Le Patrimoine Bâti Public",
            "numberOfItems": activities.areas.length,
            "itemListElement": activities.areas.map((area, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": area.title,
                "description": area.description,
                "provider": {
                  "@type": "GovernmentOrganization",
                  "name": "PBP"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Guinée"
                },
                "serviceType": "Service public"
              }
            }))
          })}
        </script>
      </Head>

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

      {/* Présentation Section */}
      <section className="py-24 bg-white" aria-label="Présentation du PBP" itemScope itemType="https://schema.org/AboutPage">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900" itemProp="name">{presentation.title}</h2>
              <p className="text-2xl text-primary font-semibold mb-6">{presentation.subtitle}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8" itemProp="description">
                {presentation.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {presentation.missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    itemScope 
                    itemType="https://schema.org/Service"
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600" itemProp="description">
                      {mission.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={presentation.image}
                  alt="Présentation du patrimoine public guinéen - Bâtiments administratifs du PBP"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width="800"
                  height="600"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-xl shadow-xl">
                <p className="text-lg font-semibold">
                  "Un engagement pour un patrimoine public moderne, durable et accessible"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Redesign moderne */}
      <section className="py-20 bg-gray-50" aria-label="Statistiques clés" itemScope itemType="https://schema.org/DataCatalog">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = Icons[stat.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  itemScope 
                  itemType="https://schema.org/Observation"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg" aria-hidden="true">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900" itemProp="result">
                      {stat.value}
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2" itemProp="variableMeasured">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600" itemProp="description">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Actions Section */}
      <section className="py-16 bg-gray-100" aria-label="Nos actions et services" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
            itemProp="name"
          >
            {activities.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-gray-600 mb-16"
            itemProp="description"
          >
            {activities.description}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.areas.map((area, index) => {
              const Icon = Icons[area.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`p-6 rounded-lg shadow-xl hover:shadow-2xl ${area.color}`}
                  itemScope 
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <div className="text-4xl text-primary mb-4" aria-hidden="true">
                    {Icon && <Icon size={48} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" itemProp="name">{area.title}</h3>
                  <p className="text-gray-600 mb-4" itemProp="description">{area.description}</p>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icons.CheckCircle size={16} className="text-green-500" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-16 bg-white" aria-label="Actualités récentes" itemScope itemType="https://schema.org/ItemList">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]" role="status" aria-label="Chargement des actualités">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold" itemProp="name">Actualités</h2>
                <a href={route('actualites.index')} className="flex items-center text-primary hover:text-primary-800" aria-label="Voir toutes les actualités">
                  Toutes les actualités
                  <Icons.ArrowRight size={20} className="ml-2" aria-hidden="true" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {articles?.map((item, index) => (
                  <article 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    itemScope 
                    itemType="https://schema.org/NewsArticle"
                    itemProp="itemListElement"
                  >
                    <img
                      src={"/storage/" + item.image}
                      alt={`Image de l'article: ${item.title}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      width="400"
                      height="200"
                      itemProp="image"
                    />
                    <div className="p-6">
                      <time 
                        className="text-sm text-gray-500" 
                        dateTime={item.published_at}
                        itemProp="datePublished"
                      >
                        {new Date(item.published_at).toLocaleDateString('fr-FR')}
                      </time>
                      <h3 className="text-xl font-semibold mt-2 mb-3" itemProp="headline">{item.title}</h3>
                      <p className="text-gray-600 mb-4" itemProp="description">{item.excerpt}</p>
                      <a
                        href={route('actualites.show', { slug: item.slug })}
                        className="text-primary hover:text-primary-800 font-medium"
                        aria-label={`Lire l'article complet: ${item.title}`}
                        itemProp="url"
                      >
                        Lire la suite
                      </a>
                      <meta itemProp="author" content="PBP" />
                      <meta itemProp="publisher" content="PBP" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* Nouvelle section : Nos Sites */}
      <section className="py-24 bg-gray-50" aria-label="Nos sites majeurs" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="name">
              Nos Sites Majeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
              Découvrez quelques-uns de nos sites phares qui illustrent notre engagement
              pour la valorisation du patrimoine bâti public.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 - Institut National de Santé Publique de Guinée (INSP) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              itemScope 
              itemType="https://schema.org/Place"
              itemProp="itemListElement"
            >
              <div className="relative h-[400px]">
                <img
                  src="https://agpguinee.com/wp-content/uploads/2024/11/466095512_976193697876214_755281667588092543_n-1-1024x575.jpg"
                  alt="Institut National de Santé Publique de Guinée (INSP) - Coyah"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">Institut National de Santé Publique de Guinée (INSP)</h3>
                  <p className="text-gray-200" itemProp="description">Construction de l'Institut National de Santé Publique de Guinée (INSP) à Coyah</p>
                  <meta itemProp="address" content="Coyah, Guinée" />
                </div>
              </div>
            </motion.div>

            {/* Projet 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              itemScope 
              itemType="https://schema.org/Place"
              itemProp="itemListElement"
            >
              <div className="relative h-[400px]">
                <img
                  src="https://lh5.googleusercontent.com/p/AF1QipNkAHBben-m453SBtKW5KzRrXJzPdNfEF-JBBTx=w408-h906-k-no"
                  alt="Cité Chemin de fer - Kaloum, Conakry"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">Cité Chemin de fer - Kaloum</h3>
                  <meta itemProp="address" content="Kaloum, Conakry, Guinée" />
                </div>
              </div>
            </motion.div>

            {/* Projet 3 - Residence 2000 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              itemScope 
              itemType="https://schema.org/Place"
              itemProp="itemListElement"
            >
              <div className="relative h-[400px]">
                <img
                  src="https://www.africaguinee.com/app/uploads/2022/07/residence_2000_cky.png"
                  alt="Residence 2000 - Logements administratifs Conakry"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">Residence 2000</h3>
                  <meta itemProp="address" content="Conakry, Guinée" />
                </div>
              </div>
            </motion.div>

            {/* Projet 4 - Complexe Industriel Polygraphique Patrice lumumba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              itemScope 
              itemType="https://schema.org/Place"
              itemProp="itemListElement"
            >
              <div className="relative h-[400px]">
                <img
                  src="/images/Complexe Industriel Polygraphique Patrice lumumba.jpg"
                  alt="Complexe Industriel Polygraphique Patrice Lumumba - Patrimoine industriel guinéen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">Complexe Industriel Polygraphique Patrice Lumumba</h3>
                  <meta itemProp="address" content="Conakry, Guinée" />
                </div>
              </div>
            </motion.div>

            {/* Projet 5 - Cité Ministerielle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              itemScope 
              itemType="https://schema.org/Place"
              itemProp="itemListElement"
            >
              <div className="relative h-[400px]">
                <img
                  src="/images/cite-ministerielle.jpg"
                  alt="Cité Ministérielle - Logements des hauts fonctionnaires de l'État"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">Cité Ministérielle</h3>
                  <meta itemProp="address" content="Conakry, Guinée" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nouvelle section : Engagement */}
      <section className="py-24 bg-white" aria-label="Notre engagement durable">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
              itemScope 
              itemType="https://schema.org/AboutPage"
            >
              <h2 className="text-4xl font-bold text-gray-900" itemProp="name">
                Notre Engagement pour un Patrimoine Durable
              </h2>
              <p className="text-lg text-gray-600" itemProp="description">
                Le PBP s'engage dans une démarche de développement durable pour
                préserver et valoriser le patrimoine bâti public. Notre approche
                combine innovation technologique et respect de l'environnement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-700">
                    Optimisation énergétique des bâtiments publics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-700">
                    Utilisation de matériaux durables et locaux
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-700">
                    Gestion responsable des ressources
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/ccf_3.jpeg"
                alt="Engagement durable PBP - Développement durable et patrimoine public"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Nouveau design */}
      <section className="py-20 bg-blue-900 text-white" aria-label="Contact PBP" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
              itemProp="name"
            >
              Contactez-nous
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
              itemProp="description"
            >
              Notre équipe est à votre disposition pour répondre à vos questions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="tel:+224655358284" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                aria-label="Appeler Le PBP au +224 655 358 284"
                itemProp="telephone"
              >
                <Icons.Phone className="mr-2" size={20} aria-hidden="true" />
                Nous appeler
              </a>
              <a 
                href={route('contact.index')} 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
                aria-label="Contacter Le PBP par formulaire"
              >
                <Icons.Mail className="mr-2" size={20} aria-hidden="true" />
                Nous écrire
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </AppLayout>
  );
}
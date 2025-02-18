import React from 'react';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import * as Icons from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';


const pageData = {
  meta: {
    title: 'Direction Générale du Patrimoine Bâti Public - Guinée',
    description: 'Gestion innovante et durable du patrimoine immobilier de l\'État - Une vision moderne pour un avenir transparent.',
  },
  hero: {
    title: 'Valorisons ensemble notre Patrimoine Public',
    subtitle: 'Une gestion transparente et innovante, au cœur de l\'action publique pour l\'État et ses citoyens.',
    image: '/images/hero/home.jpg',
    cta1: 'Explorer nos projets',
    cta2: 'Découvrir nos services',
  },
  presentation: {
    title: 'La Direction Générale du Patrimoine Bâti Public',
    subtitle: 'Innovons pour un État moderne',
    description:
      'La DGPBP est l\'institution dédiée à la gestion, la valorisation et la modernisation du patrimoine immobilier de l\'État guinéen. Notre mission, essentielle dans la transformation de l\'État, repose sur une gouvernance rigoureuse et une vision innovante.',
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
      'La DGPBP met en œuvre une gestion intégrée et moderne du patrimoine immobilier de l\'État, en s\'appuyant sur des stratégies innovantes et durables.',
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
        'Lancement d’un ambitieux programme de réhabilitation des bâtiments administratifs à Conakry.',
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
        'Afin d\'améliorer les conditions de vie des fonctionnaires, la DGPBP met à disposition 50 nouveaux logements administratifs, renforçant ainsi notre engagement envers un service public de qualité.',
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

export default function Home() {
  const { meta, hero, presentation, stats, activities, latestNews } = pageData;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  

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

  return (
    <AppLayout>

      <Head title={meta.title} description={meta.description} />
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
       >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0">
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              >
                {hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/projects" className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  <Icons.ArrowRight className="mr-2" size={20} />
                  {hero.cta1}
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 bg-white/30 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold">
                  <Icons.Info className="mr-2" size={20} />
                  {hero.cta2}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{presentation.title}</h2>
              <p className="text-2xl text-primary font-semibold mb-6">{presentation.subtitle}</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
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
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600">
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
                  alt="Présentation du patrimoine public"
                  className="object-cover w-full h-full"
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
      <section className="py-20 bg-gray-50">
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
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Actions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            {activities.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-center text-gray-600 mb-16"
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
                >
                  <div className="text-4xl text-primary mb-4">
                    {Icon && <Icon size={48} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icons.CheckCircle size={16} className="text-green-500" />
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
      <section className="py-16 bg-white">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Actualités</h2>
                <a href={route('actualites.index')} className="flex items-center text-primary hover:text-primary-800">
                  Toutes les actualités
                  <Icons.ArrowRight size={20} className="ml-2" />
                </a>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {articles?.map((item) => (
                  <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={"/storage/" + item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{new Date(item.published_at).toLocaleDateString()}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <a
                        href={route('actualites.show', { slug: item.slug })}
                        // href={`/actualites/${item.id}`}
                        className="text-primary hover:text-primary-800 font-medium"
                      >
                        Lire la suite
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* Contact Section - Nouveau design */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              Contactez-nous
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Notre équipe est à votre disposition pour répondre à vos questions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Icons.Phone className="mr-2" size={20} />
                Nous appeler
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                <Icons.Mail className="mr-2" size={20} />
                Nous écrire
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    </AppLayout>
  );
}

// Helper component for animated numbers
const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  React.useEffect(() => {
    const number = parseInt(value.replace(/\D/g, ''));
    if (!isNaN(number)) {
      const animate = () => {
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();
        const update = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setDisplayValue(Math.floor(progress * number));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      };
      animate();
    }
  }, [value]);
  return <span>{displayValue.toLocaleString()}+</span>;
};
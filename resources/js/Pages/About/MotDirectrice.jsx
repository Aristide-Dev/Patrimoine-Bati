import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Quote, MapPin, Calendar, Mail, Phone, Linkedin, ArrowLeft, Target, Users, Shield, Lightbulb, 
  Building2, Scale, Database, Wrench, Globe, FileText, ArrowRight
} from 'lucide-react';
import { motion } from "framer-motion";

export default function MotDirectrice() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const visionPoints = [
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: "Excellence dans la Gestion du Patrimoine",
      description: "Concevoir et mettre en œuvre une politique innovante de conservation et de gestion du Parc Immobilier Bâti de l'État avec les plus hauts standards de performance."
    },
    {
      icon: <Database className="h-6 w-6 text-primary-600" />,
      title: "Modernisation et Digitalisation",
      description: "Mettre en place une plateforme numérique de gestion immobilière et moderniser nos processus pour une administration plus efficace et transparente."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Transparence & Intégrité",
      description: "Garantir une gestion irréprochable du patrimoine public dans le respect des principes éthiques et de la réglementation en vigueur."
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary-600" />,
      title: "Valorisation du Patrimoine",
      description: "Assurer l'administration, la gestion, l'extension et la conservation optimale du patrimoine immobilier tant à l'intérieur qu'à l'extérieur du pays."
    }
  ];

  const prioritesStrategiques = [
    {
      icon: <Wrench className="h-5 w-5 text-primary-600" />,
      title: "Rénovation et Maintenance",
      description: "Coordonner les activités de rénovation et d'entretien du patrimoine immobilier de l'État"
    },
    {
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      title: "Réglementation",
      description: "Concevoir et veiller à l'application de la réglementation en matière d'affectation des bâtiments publics"
    },
    {
      icon: <Database className="h-5 w-5 text-primary-600" />,
      title: "Inventaire et Codification",
      description: "Réaliser l'inventaire complet et la codification des bâtiments publics"
    },
    {
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      title: "Partenariats Stratégiques",
      description: "Rechercher des partenaires pour la réalisation de bâtiments du patrimoine bâti public"
    }
  ];

  return (
    <AppLayout>
      <Head>
        {/* Métadonnées de base pour la page Mot de la Directrice */}
        <title>Mot de la Directrice - Madame Souadou Baldé | DGPBP Guinée</title>
        <meta name="description" content="Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public de Guinée. Vision, engagement et stratégie pour la gestion optimale du patrimoine immobilier de l'État selon le Décret N°D/0275/PRG/CNRD/SGG." />
        <meta name="keywords" content="Souadou Baldé, Directrice Générale DGPBP, leadership Guinée, vision patrimoine public, direction gouvernementale Guinée, administration publique Conakry, transformation digitale gouvernement, décret 2022" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mot de la Directrice - Madame Souadou Baldé | DGPBP Guinée" />
        <meta property="og:description" content="Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public de Guinée. Vision, engagement et stratégie pour la gestion optimale du patrimoine immobilier de l'État." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/about/mot-directrice" />
        <meta property="og:image" content="/images/hero/Souadou-Balde.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mot de la Directrice - Madame Souadou Baldé | DGPBP Guinée" />
        <meta name="twitter:description" content="Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public de Guinée. Vision, engagement et stratégie pour la gestion optimale du patrimoine immobilier de l'État." />
        <meta name="twitter:image" content="/images/hero/Souadou-Balde.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="/about/mot-directrice" />
        
        {/* Schema.org JSON-LD pour la page Mot de la Directrice */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Mot de la Directrice - Madame Souadou Baldé | DGPBP Guinée",
            "description": "Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public de Guinée. Vision, engagement et stratégie pour la gestion optimale du patrimoine immobilier de l'État.",
            "url": "/about/mot-directrice",
            "mainEntity": {
              "@type": "Person",
              "name": "Souadou Baldé",
              "jobTitle": "Directrice Générale",
              "worksFor": {
                "@type": "GovernmentOrganization",
                "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Conakry",
                  "addressCountry": "GN"
                }
              },
              "image": "/images/hero/Souadou-Balde.png",
              "gender": "Female",
              "nationality": "Guinéenne"
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
                  "name": "À propos",
                  "item": "/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Mot de la Directrice",
                  "item": "/about/mot-directrice"
                }
              ]
            },
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "DGPBP",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/logo-pbp.png"
              }
            },
            "datePublished": "2022-06-06T00:00:00.000Z",
            "dateModified": "2024-01-20T00:00:00.000Z"
          })}
        </script>

        {/* Schema.org pour la personne (Directrice) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Souadou Baldé",
            "givenName": "Souadou",
            "familyName": "Baldé",
            "jobTitle": "Directrice Générale",
            "worksFor": {
              "@type": "GovernmentOrganization",
              "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
              "url": "/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Conakry",
                "addressCountry": "GN"
              }
            },
            "image": {
              "@type": "ImageObject",
              "url": "/images/hero/Souadou-Balde.png",
              "caption": "Madame Souadou Baldé, Directrice Générale de la DGPBP"
            },
            "gender": "Female",
            "nationality": "Guinéenne",
            "description": "Directrice Générale du Patrimoine Bâti Public de Guinée, leader dans la transformation de la gestion immobilière publique",
            "sameAs": []
          })}
        </script>

        {/* Schema.org pour les piliers de vision */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Vision DGPBP - Piliers de Transformation",
            "description": "Les quatre piliers fondamentaux de la vision de transformation de la DGPBP",
            "numberOfItems": 4,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "DefinedTerm",
                  "name": "Excellence dans la Gestion du Patrimoine",
                  "description": "Concevoir et mettre en œuvre une politique innovante de conservation et de gestion du Parc Immobilier Bâti de l'État.",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Piliers de Vision DGPBP"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "DefinedTerm",
                  "name": "Modernisation et Digitalisation",
                  "description": "Mettre en place une plateforme numérique de gestion immobilière et moderniser nos processus.",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Piliers de Vision DGPBP"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "DefinedTerm",
                  "name": "Transparence & Intégrité",
                  "description": "Garantir une gestion irréprochable du patrimoine public dans le respect des principes éthiques.",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Piliers de Vision DGPBP"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "DefinedTerm",
                  "name": "Valorisation du Patrimoine",
                  "description": "Assurer l'administration, la gestion, l'extension et la conservation optimale du patrimoine immobilier.",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Piliers de Vision DGPBP"
                  }
                }
              }
            ]
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[700px] flex items-center overflow-hidden" itemScope itemType="https://schema.org/ImageObject">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('/images/hero/Souadou-Balde.png')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-primary-950/70 to-primary-900/60" />
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary-400/20 rounded-full opacity-50" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-primary-400/20 rounded-full opacity-50" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-500/10 rounded-full blur-xl" aria-hidden="true" />
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block text-primary-300 text-lg font-medium mb-3 px-4 py-1 border border-primary-300/30 rounded-full">
                Leadership & Vision
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
              itemProp="name"
            >
              Mot de la 
              <span className="text-primary-300">Directrice</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Madame Souadou Baldé partage sa vision pour la transformation 
              et la modernisation de la gestion du patrimoine bâti public guinéen
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="h-5 w-5 text-primary-300" />
                <span>Nommée par Décret Présidentiel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span>Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <FileText className="h-5 w-5 text-primary-300" />
                <span>Décret N°D/0275/PRG/CNRD/SGG</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="/about/equipe-gestion" 
                className="px-10 py-4 bg-primary-600 text-white rounded-lg font-semibold 
                hover:bg-primary-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-primary-700/30"
                aria-label="Découvrir l'équipe"
              >
                <Users className="mr-3 group-hover:scale-110 transition-transform" />
                Notre Organisation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/about" 
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold 
                hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                aria-label="À propos de la DGPBP"
              >
                <Building2 className="mr-3 group-hover:scale-110 transition-transform" />
                À Propos de la DGPBP
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Effet de vague en bas du hero */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white" aria-hidden="true">
            <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
        
        <meta itemProp="contentUrl" content="/images/hero/Souadou-Balde.png" />
        <meta itemProp="caption" content="Madame Souadou Baldé, Directrice Générale de la DGPBP" />
      </div>

      {/* Message de la Directrice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait et informations */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/hero/Souadou-Balde - Copie.jpg"
                  alt="Madame Souadou Baldé"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="h-12 w-12 text-primary-600" />
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Madame Souadou Baldé</h3>
                <p className="text-primary-600 font-semibold mb-2">Directrice Générale</p>
                <p className="text-gray-600 mb-4">
                  Direction Générale du Patrimoine Bâti Public de Guinée
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Nommée par Décret du Président de la République</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>Autonomie de gestion et financière</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre Mission : Excellence et Innovation
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Mesdames et Messieurs,
                  </p>
                  <p>
                    En tant que Directrice Générale du Patrimoine Bâti Public, nommée par Décret du Président de la République, 
                    j'ai l'honneur de diriger une institution dotée de l'autonomie de gestion et de l'autonomie financière, 
                    rattachée par délégation au Ministre Secrétaire Général de la Présidence de la République.
                  </p>
                  <p>
                    Notre mission fondamentale consiste à concevoir, élaborer et mettre en œuvre la politique du Gouvernement 
                    en matière de conservation et de gestion du Parc Immobilier Bâti de l'État. Cette responsabilité s'étend 
                    tant à l'intérieur qu'à l'extérieur du territoire national, englobant l'ensemble du patrimoine immobilier public guinéen.
                  </p>
                  <p>
                    Nous nous engageons à assurer l'administration, la gestion, l'extension et la conservation de ce patrimoine 
                    avec la plus haute rigueur, tout en procédant à l'affectation des bâtiments conformément à la réglementation en vigueur. 
                    Notre démarche s'articule autour de la coordination des activités de rénovation, d'entretien et de modernisation 
                    de l'ensemble des bâtiments publics.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Notre Vision Stratégique</h3>
                <p className="text-gray-700">
                  "Créer un cadre de gestion optimale du patrimoine bâti public pour le repositionnement 
                  central de l'État propriétaire dans le processus de production de logements et d'immeubles 
                  administratifs, tout en intégrant les technologies numériques modernes."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Piliers de la Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Les Piliers de Notre Transformation
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Quatre axes stratégiques guident notre action pour révolutionner 
              la gestion du patrimoine immobilier public guinéen
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Priorités Stratégiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Nos Priorités Stratégiques
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Actions concrètes pour moderniser et optimiser la gestion 
              du patrimoine immobilier bâti de l'État guinéen
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {prioritesStrategiques.map((priorite, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="mx-auto mb-4 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                  {priorite.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{priorite.title}</h3>
                <p className="text-sm text-gray-600">{priorite.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement et Appel à l'Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-primary-950 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="mb-12">
              <Quote className="h-16 w-16 text-primary-300 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                "Ensemble, nous bâtissons l'avenir du patrimoine immobilier public guinéen, 
                alliant tradition et innovation pour servir au mieux notre nation."
              </blockquote>
              <p className="text-xl text-white/90">
                - Madame Souadou Baldé, Directrice Générale DGPBP
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-lg text-white/90 leading-relaxed">
                Notre engagement envers l'excellence, la transparence et l'innovation guide chacune de nos actions. 
                Nous invitons tous nos partenaires, collaborateurs et citoyens à nous accompagner dans cette 
                transformation historique de la gestion du patrimoine public guinéen.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/about/equipe-gestion"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-700/30"
              >
                <Users className="h-5 w-5" />
                Notre Organisation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <Building2 className="h-5 w-5" />
                À Propos de la DGPBP
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
} 
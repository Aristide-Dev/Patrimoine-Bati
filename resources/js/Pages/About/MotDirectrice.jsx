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
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
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

      {/* Lien de retour amélioré */}
      <div className="bg-gradient-to-br from-gray-50 via-primary-50/20 to-blue-50/20 py-4">
        <div className="container mx-auto px-4">
          <motion.a 
            href={route('about.index')}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Retour à À Propos
          </motion.a>
        </div>
      </div>

      {/* Hero Section amélioré */}
      <div className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Background avec overlay amélioré */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/images/our-team/Souadou-Balde-DG-2.jpg')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/30 to-black/90" />
        
        {/* Motifs décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            
            <motion.h1
              variants={fadeIn}
              className="mt-8 uppercase text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-2xl"
            >
              Mot de la
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-blue-100 ml-4">
                Directrice
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-12"
            >
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20">
                <Calendar className="h-5 w-5 text-primary-100" />
                <span className="text-primary-200">Nommée par Décret Présidentiel</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20">
                <FileText className="h-5 w-5 text-primary-100" />
                <span className="text-primary-200">Décret N°D/0275/PRG/CNRD/SGG</span>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20">
                <MapPin className="h-5 w-5 text-primary-100" />
                <span className="text-primary-200">Conakry, Guinée</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href={route('about.equipe-gestion')} 
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold 
                hover:from-primary-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-primary-700/30 transform hover:-translate-y-1"
              >
                <Users className="mr-3 group-hover:scale-110 transition-transform" />
                Notre Organisation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={route('about.index')} 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold 
                hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center group transform hover:-translate-y-1"
              >
                <Building2 className="mr-3 group-hover:scale-110 transition-transform" />
                À Propos de la DGPBP
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Effet de vague amélioré */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Message de la Directrice - Section améliorée */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30">
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
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/images/our-team/Souadou-Balde-DG.jpg"
                    alt="Madame Souadou Baldé"
                    className="w-full rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <Quote className="h-12 w-12 text-primary-600" />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Madame Souadou Baldé</h3>
                <p className="text-primary-600 font-semibold mb-4">Directrice Générale</p>
                <p className="text-gray-600 mb-6">
                  Direction Générale du Patrimoine Bâti Public de Guinée
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-primary-50 p-3 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Nommée par Décret du Président de la République</span>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-50 p-3 rounded-lg">
                    <Building2 className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">Autonomie de gestion et financière</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message avec design amélioré - REMPLACÉ PAR LE NOUVEAU TEXTE */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Mot de Bienvenue de
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 ml-3">
                    Madame la Directrice Générale
                  </span>
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-6">
                  {/* Introduction */}
                  <div className="space-y-6">
                    <p className="text-xl leading-relaxed">
                      Bienvenue sur le site officiel de la Direction Générale du Patrimoine Bâti Public de la république de Guinée
                    </p>
                    <p className="leading-relaxed">
                      C'est avec un grand plaisir que je vous souhaite la bienvenue sur le portail numérique de la Direction Générale du Patrimoine Bâti Public (DGPBP).
                    </p>
                  </div>

                  {/* Présentation de l'institution */}
                  <div className="space-y-6">
                    <p className="leading-relaxed">
                      Institution publique, placée sous l'autorité du Ministre Secrétaire Général de la Présidence de la République, 
                      la DGPBP est chargée de mettre en œuvre la politique nationale en matière de gestion, de valorisation et de 
                      préservation du patrimoine immobilier de l'État. Qu'il s'agisse des édifices administratifs, des logements 
                      publics ou des représentations diplomatiques, notre responsabilité couvre l'ensemble des biens bâtis appartenant 
                      à la République, tant sur le territoire national qu'à l'étranger.
                    </p>
                    <p className="leading-relaxed">
                      Conformément à la vision stratégique du Chef de l'État, le Général de Corps d'Armée Mamadi Doumbouya, qui fait 
                      de la bonne gouvernance, de la rigueur administrative et de la souveraineté nationale les piliers de l'action 
                      publique, nous œuvrons à doter notre pays d'un cadre de gestion du patrimoine bâti à la fois moderne, transparent 
                      et résilient.
                    </p>
                  </div>

                  {/* Vision et engagement */}
                  <div className="space-y-6">
                    <p className="leading-relaxed">
                      À travers ce site, nous souhaitons vous offrir une vitrine accessible sur nos missions, nos projets, nos réformes 
                      et nos ambitions. Il est conçu comme un outil de dialogue et de redevabilité, au service des citoyens, des 
                      partenaires techniques, des acteurs institutionnels et de tous ceux qui s'intéressent à la gestion rigoureuse du 
                      patrimoine public.
                    </p>
                    <p className="leading-relaxed font-semibold text-primary-600">
                      Notre engagement : bâtir avec rigueur, innover avec vision.
                    </p>
                  </div>

                  {/* Transformation et objectifs */}
                  <div className="space-y-6">
                    <p className="leading-relaxed">
                      La DGPBP est aujourd'hui engagée dans une profonde transformation. Avec l'appui des autorités nationales et de nos 
                      partenaires, nous portons une ambition claire : Repositionner l'État au cœur de la gestion du patrimoine bâti, 
                      en conciliant excellence opérationnelle, transition numérique, transparence et efficacité.
                    </p>
                    <div className="bg-primary-50/50 p-6 rounded-xl">
                      <p className="leading-relaxed mb-4 font-medium">Nous œuvrons chaque jour pour :</p>
                      <ul className="list-none space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                          <span>sécuriser les biens immobiliers de l'État contre toute forme de spoliation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                          <span>renforcer la performance financière de nos activités</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                          <span>moderniser les processus grâce à la digitalisation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                          <span>impulser une nouvelle culture de gestion fondée sur l'éthique, la responsabilité et les résultats</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="space-y-6">
                    <p className="leading-relaxed font-medium text-primary-600">
                      Ensemble, valorisons notre patrimoine commun.
                    </p>
                    <p className="leading-relaxed">
                      Chaque bâtiment public, chaque édifice administratif, chaque mètre carré de terrain de l'État est une part de notre histoire, 
                      un levier pour notre développement et un symbole de notre souveraineté. C'est ce bien collectif que nous avons la responsabilité 
                      de préserver, de gérer et de transmettre aux générations futures.
                    </p>
                    <p className="leading-relaxed">
                      Je vous invite à parcourir notre site pour mieux comprendre nos actions, suivre l'avancement de nos projets et, 
                      pourquoi pas, vous associer à cette œuvre nationale.
                    </p>
                    <p className="leading-relaxed font-medium text-primary-600">
                      Bienvenue chez vous, dans la maison du patrimoine public guinéen.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-12 border-t border-gray-200 pt-8">
                    <div className="text-right space-y-2">
                      <p className="text-lg font-semibold text-primary-600">Madame Souadou Baldé</p>
                      <p className="text-gray-700">Directrice Générale</p>
                      <p className="text-gray-600">Direction Générale du Patrimoine Bâti Public</p>
                      <p className="text-gray-600">République de Guinée</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn} 
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision Stratégique</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "Créer un cadre de gestion optimale du patrimoine bâti public pour le repositionnement 
                    central de l'État propriétaire dans le processus de production de logements et d'immeubles 
                    administratifs, tout en intégrant les technologies numériques modernes."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Piliers de la Vision - Section améliorée */}
      <section className="py-24 bg-white">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Les Piliers de Notre
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Transformation
              </span>
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
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Priorités Stratégiques - Section améliorée */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-primary-50/20 to-blue-50/20">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nos Priorités
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Stratégiques
              </span>
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {prioritesStrategiques.map((priorite, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {priorite.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{priorite.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{priorite.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action amélioré */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Motifs décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <Quote className="h-16 w-16 text-primary-300 mx-auto mb-8" />
            <blockquote className="text-3xl font-bold text-white mb-8 max-w-4xl mx-auto leading-relaxed">
              "Ensemble, nous bâtissons l'avenir du patrimoine immobilier public guinéen, 
              alliant tradition et innovation pour servir au mieux notre nation."
            </blockquote>
            <p className="text-xl text-white/90">
              - Madame Souadou Baldé, Directrice Générale DGPBP
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-white/90 leading-relaxed">
              Notre engagement envers l'excellence, la transparence et l'innovation guide chacune de nos actions. 
              Nous invitons tous nos partenaires, collaborateurs et citoyens à nous accompagner dans cette 
              transformation historique de la gestion du patrimoine public guinéen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={route('about.equipe-gestion')}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
              hover:from-primary-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl 
              shadow-primary-700/30 inline-flex items-center group"
            >
              <Users className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Notre Organisation
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={route('about.index')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl 
              font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center group"
            >
              <Building2 className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              À Propos de la DGPBP
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
} 
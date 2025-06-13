import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Target, Award, Users, Shield, Lightbulb, ArrowRight, Clock, MapPin, Building2, Archive, 
  CheckCircle, Calendar, Globe, FileText, Scale, Wrench, Home, Search, Database
} from 'lucide-react';
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1959",
    title: "Création de l'ENB",
    description: "L'Entreprise Nationale des Bâtiments remplace la SIG dans la gestion locative des Cités d'habitation."
  },
  {
    year: "1978",
    title: "Direction Générale de la Gestion Immobilière",
    description: "Création de la Direction Générale suite à la fusion du SAFBA, SERRBA et du Service des Biens Saisis."
  },
  {
    year: "1990",
    title: "Direction Nationale",
    description: "Le service devient une Direction Nationale rattachée à la Présidence."
  },
  {
    year: "2022",
    title: "Direction Générale du Patrimoine Bâti Public",
    description: "Restructuration avec autonomie de gestion et financière suivant le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022."
  }
];

const values = [
  {
    icon: <Shield className="h-10 w-10 text-primary-600" />,
    title: "Intégrité",
    description: "Travailler en toute conscience professionnelle et probité morale dans la gestion du patrimoine public"
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
    title: "Respect des engagements",
    description: "S'aligner sur les règles de bonne conduite et respecter la réglementation en vigueur"
  },
  {
    icon: <Users className="h-10 w-10 text-primary-600" />,
    title: "Service Public",
    description: "Servir l'État et les citoyens avec dévouement et transparence dans la gestion immobilière"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary-600" />,
    title: "Innovation",
    description: "Moderniser la gestion par la mise en place d'une plateforme numérique et de processus innovants"
  }
];

const missions = [
  {
    icon: <Target className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Concevoir, élaborer et mettre en œuvre la politique du Gouvernement en matière de conservation et de gestion du Parc Immobilier Bâti de l'État"
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Assurer l'administration, la gestion, l'extension et la conservation du Patrimoine Immobilier Bâti de l'État tant à l'intérieur qu'à l'extérieur du pays"
  },
  {
    icon: <Home className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Procéder à l'affectation des bâtiments à usage administratif, d'habitation, commercial et/ou professionnel conformément à la réglementation"
  },
  {
    icon: <Wrench className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Coordonner toutes les activités de rénovation et d'entretien du Patrimoine Immobilier Bâti de l'État"
  },
  {
    icon: <Scale className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Concevoir et veiller à l'application de la réglementation en matière d'affectation des bâtiments publics"
  },
  {
    icon: <Database className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Faire l'inventaire complet du Parc Immobilier Bâti de l'État et procéder à la codification des bâtiments publics"
  },
  {
    icon: <Globe className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Mettre en place une plateforme numérique de gestion immobilière du patrimoine bâti public de l'État"
  },
  {
    icon: <Award className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Assainir et réorganiser la gestion financière, logistique et matérielle du Parc Immobilier Bâti de l'État"
  }
];

const patrimoineTypes = [
  {
    title: "Bâtiments hérités de l'Administration coloniale",
    description: "Patrimoine historique transmis depuis l'époque coloniale"
  },
  {
    title: "Bâtiments de l'Accord Franco-Guinéen",
    description: "Immeubles visés par l'Accord portant Règlement du Contentieux Financier Franco-Guinéen"
  },
  {
    title: "Bâtiments sous séquestre et curatelle",
    description: "Biens immobiliers placés sous protection juridique de l'État"
  },
  {
    title: "Constructions sur financement public",
    description: "Bâtiments construits sur financement du budget national et financement extérieur accordé à l'État"
  },
  {
    title: "Bâtiments saisis et récupérés",
    description: "Immeubles saisis pour motif économique et projets publics arrivés à terme"
  },
  {
    title: "Patrimoine diplomatique",
    description: "Bâtiments appartenant à l'État Guinéen à l'étranger occupés par les représentations diplomatiques"
  }
];

// ... existing code ...

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AppLayout>
      <Head>
        {/* Métadonnées de base pour la page À propos */}
        <title>À propos de la DGPBP - Direction Générale du Patrimoine Bâti Public de Guinée</title>
        <meta name="description" content="Découvrez la Direction Générale du Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022. Institution dédiée à la gestion du patrimoine immobilier de l'État guinéen." />
        <meta name="keywords" content="DGPBP attributions, mission DGPBP, patrimoine bâti public Guinée, gestion immobilière État, administration publique Conakry, Direction Générale patrimoine, services publics Guinée, décret 2022" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="À propos de la DGPBP - Direction Générale du Patrimoine Bâti Public de Guinée" />
        <meta property="og:description" content="Découvrez la Direction Générale du Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content="/images/about03.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos de la DGPBP - Direction Générale du Patrimoine Bâti Public de Guinée" />
        <meta name="twitter:description" content="Découvrez la Direction Générale du Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022." />
        <meta name="twitter:image" content="/images/about03.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="/about" />
        
        {/* Schema.org JSON-LD pour la page À propos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "À propos de la DGPBP - Direction Générale du Patrimoine Bâti Public de Guinée",
            "description": "Découvrez la Direction Générale du Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022.",
            "url": "/about",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
              "foundingDate": "1959",
              "description": "Direction Générale dotée de l'autonomie de gestion et de l'autonomie financière, rattachée par délégation au Ministre Secrétaire Général de la Présidence de la République",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Conakry",
                "addressCountry": "GN"
              },
              "organizationType": "Direction Générale",
              "parentOrganization": {
                "@type": "GovernmentOrganization",
                "name": "Présidence de la République de Guinée"
              }
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

        {/* Schema.org pour l'historique de l'organisation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Historique DGPBP",
            "description": "Chronologie des étapes importantes de la Direction Générale du Patrimoine Bâti Public",
            "numberOfItems": timelineEvents.length,
            "itemListElement": timelineEvents.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "description": event.description,
                "startDate": `${event.year}-01-01`,
                "organizer": {
                  "@type": "GovernmentOrganization",
                  "name": "DGPBP"
                }
              }
            }))
          })}
        </script>

        {/* Schema.org pour les valeurs organisationnelles */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Valeurs DGPBP",
            "description": "Les valeurs fondamentales de la Direction Générale du Patrimoine Bâti Public",
            "numberOfItems": values.length,
            "itemListElement": values.map((value, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "DefinedTerm",
                "name": value.title,
                "description": value.description,
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "name": "Valeurs DGPBP"
                }
              }
            }))
          })}
        </script>
      </Head>

      
      {/* Hero Section Modernisé avec overlay en dégradé et animations */}
      <div className="relative min-h-[700px] flex items-center overflow-hidden" itemScope itemType="https://schema.org/ImageObject">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('/images/about03.jpg')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-primary-950/60 to-black/50" />
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full opacity-50" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-primary-500/20 rounded-full opacity-50" aria-hidden="true" />

        <div className="relative container mx-auto px-4 z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary-300 text-lg font-medium mb-3 px-4 py-1 border border-primary-300/30 rounded-full">
              Patrimoine Bâti Public
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight" itemProp="name">
              À Propos de la 
              <span className="text-primary-300">DGPBP</span>
            </h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              itemProp="description"
            >
              Direction Générale du Patrimoine Bâti Public : Institution dédiée à la conception, 
              l'élaboration et la mise en œuvre de la politique gouvernementale en matière de 
              conservation et de gestion du Parc Immobilier Bâti de l'État.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4 text-primary-100"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Créée en 1959</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Décret N°D/0275/PRG/CNRD/SGG - 06 Juin 2022</span>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a 
                href={route('contact.index')} 
                className="px-10 py-4 bg-primary-600 text-white rounded-lg font-semibold 
                hover:bg-primary-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-primary-700/30"
                aria-label="Contacter la DGPBP"
              >
                Nous Contacter
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
        <meta itemProp="contentUrl" content="/images/about03.jpg" />
        <meta itemProp="caption" content="Siège de la Direction Générale du Patrimoine Bâti Public de Guinée" />
      </div>

      {/* Mission et Attributions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Nos Attributions & Missions
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Sous l'autorité du Président de la République et rattachée par délégation au 
              Ministre Secrétaire Général de la Présidence, la DGPBP est dotée de l'autonomie 
              de gestion et de l'autonomie financière.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
              >
                {mission.icon}
                <p className="text-gray-700 leading-relaxed">{mission.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Patrimoine Immobilier */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Patrimoine Immobilier Bâti de l'État
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Le Parc Immobilier Bâti de l'État comprend diverses catégories de bâtiments 
              placés sous la gestion de la Direction Générale du Patrimoine Bâti Public
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {patrimoineTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Archive className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{type.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Nos Valeurs Fondamentales
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Les principes qui guident notre action quotidienne dans la gestion du patrimoine public
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center group"
              >
                <div className="mx-auto mb-6 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Notre Histoire
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Évolution et transformations de la gestion du patrimoine immobilier public en Guinée
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span className="text-2xl font-bold text-primary-600">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Découvrez Notre Organisation
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto"
            >
              Explorez notre structure organisationnelle et rencontrez notre équipe dirigeante 
              dédiée à l'excellence dans la gestion du patrimoine public
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/about/equipe-gestion"
                className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                <Users className="h-5 w-5" />
                Notre Équipe
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/about/mot-directrice"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors duration-300"
              >
                <Target className="h-5 w-5" />
                Mot de la Directrice
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
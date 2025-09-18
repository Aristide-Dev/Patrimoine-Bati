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
    title: "Patrimoine Bâti Public",
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
        <title>À propos du PBP - Patrimoine Bâti Public de Guinée</title>
        <meta name="description" content="Découvrez Le Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022. Institution dédiée à la gestion du patrimoine immobilier de l'État guinéen." />
        <meta name="keywords" content="PBP attributions, mission PBP, patrimoine bâti public Guinée, gestion immobilière État, administration publique Conakry, Direction Générale patrimoine, services publics Guinée, décret 2022" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="À propos du PBP - Patrimoine Bâti Public de Guinée" />
        <meta property="og:description" content="Découvrez Le Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content="/images/about03.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos du PBP - Patrimoine Bâti Public de Guinée" />
        <meta name="twitter:description" content="Découvrez Le Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022." />
        <meta name="twitter:image" content="/images/about03.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="/about" />
        
        {/* Schema.org JSON-LD pour la page À propos */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "À propos du PBP - Patrimoine Bâti Public de Guinée",
            "description": "Découvrez Le Patrimoine Bâti Public de Guinée, ses attributions, missions et organisation définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022.",
            "url": "/about",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "PBP - Patrimoine Bâti Public",
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
              "name": "PBP",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
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
            "name": "Historique PBP",
            "description": "Chronologie des étapes importantes de Le Patrimoine Bâti Public",
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
                  "name": "PBP"
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
            "name": "Valeurs PBP",
            "description": "Les valeurs fondamentales de Le Patrimoine Bâti Public",
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
                  "name": "Valeurs PBP"
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90" />
        
        {/* Motifs décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block text-primary-300 text-lg font-medium mb-3 px-6 py-2 border border-primary-300/30 rounded-full bg-white/5 backdrop-blur-sm">
                Patrimoine Bâti Public
              </span>
            </motion.div>
            
            <motion.h1
              variants={fadeIn}
              className="mt-8 uppercase text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-2xl"
            >
              À Propos de la
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-blue-100 ml-4">
                PBP
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              itemProp="description"
            >
              Patrimoine Bâti Public : Institution dédiée à la conception, 
              l'élaboration et la mise en œuvre de la politique gouvernementale en matière de 
              conservation et de gestion du Parc Immobilier Bâti de l'État.
            </motion.p>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-12"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Calendar className="h-5 w-5 text-primary-300" />
                <span>Créée en 1959</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span>Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <FileText className="h-5 w-5 text-primary-300" />
                <span>Décret N°D/0275/PRG/CNRD/SGG - 06 Juin 2022</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href={route('contact.index')} 
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold 
                hover:from-primary-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-primary-700/30 transform hover:-translate-y-1"
              >
                <Target className="mr-3 group-hover:scale-110 transition-transform" />
                Nous Contacter
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
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

      {/* Mission et Attributions avec design amélioré */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nos Attributions &
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Missions
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Sous l'autorité du Président de la République et rattachée par délégation au 
              Ministre Secrétaire Général de la Présidence, Le PBP est dotée de l'autonomie 
              de gestion et de l'autonomie financière.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative flex gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {mission.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mission.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Patrimoine Immobilier avec design amélioré */}
      <section className="py-24 bg-white">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Patrimoine
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Immobilier
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Le Parc Immobilier Bâti de l'État comprend diverses catégories de bâtiments 
              placés sous la gestion de Le Patrimoine Bâti Public
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {patrimoineTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Archive className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs avec design amélioré */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-primary-50/20 to-blue-50/20">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nos Valeurs
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Fondamentales
              </span>
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
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-white p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline avec design amélioré */}
      <section className="py-24 bg-white">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Notre
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Histoire
              </span>
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
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 to-blue-600"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                      <div className="relative bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-5 w-5 text-primary-600" />
                          </div>
                          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Découvrez Notre
            <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-blue-300">
              Organisation
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Explorez notre structure organisationnelle et rencontrez notre équipe dirigeante 
            dédiée à l'excellence dans la gestion du patrimoine public
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={route('about.equipe-gestion')}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
              hover:from-primary-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl 
              shadow-primary-700/30 inline-flex items-center group"
            >
              <Users className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Notre Équipe
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={route('about.mot-directrice')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl 
              font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center group"
            >
              <Target className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Mot de la Directrice
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
}
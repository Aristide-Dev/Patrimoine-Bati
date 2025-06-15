import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Award, Calendar, Users, Star, ArrowRight, Building2, Target, Shield, Briefcase, GraduationCap, TrendingUp, Scale, FileText, Wrench, HeadphonesIcon } from 'lucide-react';
import { motion } from "framer-motion";

export default function EquipeGestion({ meta }) {
  // Animations avec Framer Motion
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

  // Données de l'équipe de direction
  const equipeDirection = [
    {
      id: 1,
      nom: "Souadou Baldé",
      poste: "Directrice Générale",
      photo: "/images/our-team/Souadou-Balde-DG.jpg",
      competences: ["Gestion Stratégique", "Leadership", "Coordination générale"],
      attributions: "Direction, coordination, animation et contrôle de toutes les activités de la Direction"
    },
    {
      id: 2,
      nom: "Nafissatou Cisse",
      poste: "Directrice Générale Adjointe",
      photo: "/images/our-team/Nafissatou-Cisse-DGA.jpg",
      competences: ["Coordination administrative", "Supervision technique", "Formation du personnel"],
      attributions: "Assistance au DG, coordination des services, supervision des projets et programmes"
    },
  ];

  // Directions Techniques
  const directionsTechniques = [
    {
      nom: "Direction Juridique et Contentieux",
      responsable: "À définir",
      photo: "/images/our-team/agent.png",
      competences: ["Conseil juridique", "Contentieux", "Réglementation"],
      services: [
        "Service Réglementation et Gestion des Contrats",
        "Service Contentieux et Suivi des Différends"
      ],
      description: "Chargée des conseils juridiques, de la rédaction des documents légaux, de la gestion des contentieux et du suivi des contrats relatifs aux bâtiments de l'État",
      attributions: [
        "Exercer les fonctions de conseils et rédaction de documents juridiques",
        "Veiller à l'application des textes législatifs et règlementaires",
        "Gérer les contentieux et suivre les contrats",
        "Apporter des informations juridiques préventives",
        "Assurer les relations avec l'Agence Judiciaire de l'État"
      ]
    },
    {
      nom: "Direction Gestion Locative et du Patrimoine Immobilier",
      responsable: "À définir",
      photo: "/images/our-team/agent.png",
      competences: ["Gestion locative", "Administration immobilière", "Gestion commerciale"],
      services: [
        "Gérances Communales",
        "Gérance des bâtiments à usage commercial et professionnel",
        "Gérance des Magasins et Entrepôts"
      ],
      description: "Assure la gestion administrative, commerciale et financière des bâtiments publics, y compris les logements de fonction et bâtiments de souveraineté",
      attributions: [
        "Gérer les bâtiments de souveraineté et logements de fonction",
        "Assurer la gestion commerciale des bâtiments",
        "Tenir à jour le fichier locatif",
        "Gérer les bâtiments diplomatiques",
        "Participer à la récupération des biens spoliés"
      ]
    },
    {
      nom: "Direction Maintenance et Logistique",
      responsable: "À définir",
      photo: "/images/our-team/agent.png",
      competences: ["Maintenance", "Rénovation", "Construction"],
      services: [
        "Service Maintenance et Rénovation",
        "Service Construction et Aménagement"
      ],
      description: "Assure la restauration, la rénovation et l'entretien du Parc Immobilier Bâti de l'État ainsi que la maintenance des équipements",
      attributions: [
        "Assurer la restauration et l'entretien des bâtiments",
        "Élaborer les cahiers des charges et plans",
        "Superviser les travaux de construction",
        "Contrôler la conformité des travaux",
        "Proposer des stratégies d'extension du parc"
      ]
    }
  ];

  // Services d'Appui
  const servicesAppui = [
    {
      nom: "Service Accueil",
      responsable: "À définir",
      icon: <HeadphonesIcon className="h-6 w-6 text-primary-600" />,
      description: "Accueil et orientation des visiteurs, gestion du secrétariat central",
      attributions: [
        "Accueillir et orienter les visiteurs",
        "Diffuser les programmes de visite",
        "Gérer les courriers et correspondances",
        "Assurer le classement et la reprographie"
      ]
    },
    {
      nom: "Service Administratif et Financier",
      responsable: "À définir", 
      icon: <Building2 className="h-6 w-6 text-primary-600" />,
      description: "Gestion des ressources budgétaires et financières, coordination des prévisions budgétaires",
      attributions: [
        "Coordonner l'élaboration des prévisions budgétaires",
        "Préparer les engagements budgétaires",
        "Assurer le suivi de l'exécution du budget",
        "Tenir la comptabilité budgétaire"
      ]
    },
    {
      nom: "Service Suivi-Evaluation",
      responsable: "À définir",
      icon: <Target className="h-6 w-6 text-primary-600" />,
      description: "Élaboration et suivi des plans de programmation, évaluation des activités",
      attributions: [
        "Élaborer les plans de programmation",
        "Développer le système de suivi-évaluation",
        "Rédiger les rapports trimestriels",
        "Identifier les besoins en renforcement des capacités"
      ]
    },
    {
      nom: "Service Ressources Humaines",
      responsable: "À définir",
      icon: <Users className="h-6 w-6 text-primary-600" />,
      description: "Gestion RH, planification des besoins, formation et carrière du personnel",
      attributions: [
        "Gérer les ressources humaines",
        "Planifier les besoins en personnel",
        "Élaborer les plans de formation",
        "Suivre la carrière du personnel"
      ]
    },
    {
      nom: "Service Recouvrement des Recettes Locatives",
      responsable: "À définir",
      icon: <Award className="h-6 w-6 text-primary-600" />,
      description: "Recouvrement des loyers et gestion des plans de trésorerie",
      attributions: [
        "Assurer le recouvrement des loyers",
        "Élaborer les plans de trésorerie",
        "Recouvrer les arriérés de loyers",
        "Suivre la situation financière des gérances"
      ]
    },
    {
      nom: "Service Modernisation, Communication et Documentation",
      responsable: "À définir",
      icon: <FileText className="h-6 w-6 text-primary-600" />,
      description: "Modernisation IT, communication, gestion du site web et archivage",
      attributions: [
        "Mettre en œuvre la stratégie IT",
        "Gérer la communication interne et externe",
        "Administrer le site web et la plateforme numérique",
        "Assurer l'archivage numérique"
      ]
    },
    {
      nom: "Brigade Spéciale de Gendarmerie",
      responsable: "À définir",
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      description: "Sécurité du service et appui aux actions de terrain",
      attributions: [
        "Assurer la sécurité du service",
        "Sécuriser le personnel pendant les heures de travail",
        "Appuyer les actions de terrain",
        "Participer aux opérations de contrôle"
      ]
    }
  ];

  // Services Déconcentrés
  const servicesDeconcentres = [
    {
      nom: "Directions Immobilières Régionales",
      nombre: "8",
      description: "Gestion locale du patrimoine dans les régions administratives",
      attributions: [
        "Veiller à l'exécution de la réglementation au niveau régional",
        "Procéder aux affectations des bâtiments après avis de la Direction Générale",
        "Tenir à jour le fichier détaillé du Patrimoine Bâti Public",
        "Assurer la gestion administrative et financière locale",
        "Évaluer les besoins d'entretien et maintenance",
        "Gérer les contentieux en collaboration avec la Direction Juridique",
        "Signaler les cas de spoliation du patrimoine"
      ]
    },
    {
      nom: "Directions Immobilières Préfectorales/Communales",
      nombre: "33",
      description: "Gestion locale du patrimoine dans les préfectures et communes",
      attributions: [
        "Veiller à l'exécution de la réglementation au niveau préfectoral/communal",
        "Procéder aux affectations des bâtiments après avis de la Direction Générale",
        "Tenir à jour le fichier détaillé du Patrimoine Bâti Public",
        "Assurer la gestion administrative et financière locale",
        "Évaluer les besoins d'entretien et maintenance",
        "Gérer les contentieux en collaboration avec la Direction Juridique",
        "Signaler les cas de spoliation du patrimoine"
      ]
    }
  ];

  // Statistiques de l'équipe
  const statistiques = [
    {
      icon: Users,
      titre: "Directions Techniques",
      valeur: directionsTechniques.length,
      subtitle: "Unités opérationnelles",
      gradient: "bg-emerald-500",
      iconColor: "text-emerald-600"
    },
    {
      icon: Award,
      titre: "Services d'Appui",
      valeur: servicesAppui.length,
      subtitle: "Services support",
      gradient: "bg-blue-500",
      iconColor: "text-blue-600"
    },
    {
      icon: Building2,
      titre: "Services Déconcentrés",
      valeur: "41",
      subtitle: "Régions et Préfectures",
      gradient: "bg-primary-500",
      iconColor: "text-primary-600"
    },
    {
      icon: Target,
      titre: "Brigade Spéciale",
      valeur: "1",
      subtitle: "Sécurité et appui terrain",
      gradient: "bg-orange-500",
      iconColor: "text-orange-600"
    }
  ];

  // Données SEO optimisées
  const seoData = {
    title: "Organisation et Structure - DGPBP | Direction Générale du Patrimoine Bâti Public",
    description: "Découvrez l'organisation et la structure de la Direction Générale du Patrimoine Bâti Public de Guinée selon le Décret N°D/0275/PRG/CNRD/SGG. Directions techniques, services d'appui et équipe dirigeante.",
    keywords: "organisation DGPBP, structure DGPBP, directions techniques, services appui, équipe direction, organigramme DGPBP, Guinée",
    canonical: "/about/equipe-gestion",
    type: "AboutPage"
  };

  const StatCard = ({ icon: Icon, titre, valeur, subtitle, gradient, iconColor }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center">
          <div className={`p-4 rounded-2xl ${gradient} bg-opacity-10 mr-6`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{valeur}</h3>
            <p className="text-gray-700 font-semibold text-lg">{titre}</p>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const DirecteurCard = ({ membre }) => (
    <div className="group relative">
      <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-600">
          <div className="mb-4">
            <img 
              src={membre.photo} 
              alt={`Photo de ${membre.nom}`}
              className="w-48 h-48 rounded-full mx-auto object-cover border-3 border-primary-100 group-hover:border-primary-200 transition-colors"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Badge poste */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            <span className="text-xs font-medium">Direction Générale</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{membre.nom}</h3>
            <p className="text-primary font-semibold">{membre.poste}</p>
          </div>
          
          {/* Attributions */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 text-center">{membre.attributions}</p>
          </div>
          
          {/* Compétences principales */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {membre.competences.slice(0, 3).map((competence, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {competence}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DirectionCard = ({ direction, index }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="mb-4">
          <img 
            src={direction.photo} 
            alt={`Direction ${direction.nom}`}
            className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-primary-100"
          />
        </div>
        
        <h3 className="font-bold text-gray-900 mb-2 text-center text-lg">{direction.nom}</h3>
        
        <p className="text-sm text-gray-600 mb-4 text-center">{direction.description}</p>
        
        {/* Services */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Services :</h4>
          <div className="space-y-1">
            {direction.services.map((service, idx) => (
              <p key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                {service}
              </p>
            ))}
          </div>
        </div>

        {/* Attributions principales */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Attributions principales :</h4>
          <div className="space-y-1">
            {direction.attributions.slice(0, 3).map((attribution, idx) => (
              <p key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {attribution}
              </p>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-1">
          {direction.competences.map((competence, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {competence}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  const ServiceCard = ({ service, index }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg mb-1">{service.nom}</h3>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>

        {/* Attributions principales */}
        <div className="space-y-2">
          {service.attributions.map((attribution, idx) => (
            <p key={idx} className="text-xs text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              {attribution}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout seoData={seoData}>
      <Head>
        {/* Métadonnées de base pour la page Organisation */}
        <title>Organisation et Structure - DGPBP | Direction Générale du Patrimoine Bâti Public</title>
        <meta name="description" content="Découvrez l'organisation et la structure de la Direction Générale du Patrimoine Bâti Public de Guinée selon le Décret N°D/0275/PRG/CNRD/SGG. Directions techniques, services d'appui et équipe dirigeante." />
        <meta name="keywords" content="organisation DGPBP, structure DGPBP, directions techniques, services appui, équipe direction, organigramme DGPBP, Guinée" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Organisation et Structure - DGPBP | Direction Générale du Patrimoine Bâti Public" />
        <meta property="og:description" content="Découvrez l'organisation et la structure de la Direction Générale du Patrimoine Bâti Public de Guinée selon le Décret N°D/0275/PRG/CNRD/SGG." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/about/equipe-gestion" />
        <meta property="og:image" content="/images/our-team/Souadou-Balde-DG.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Organisation et Structure - DGPBP | Direction Générale du Patrimoine Bâti Public" />
        <meta name="twitter:description" content="Découvrez l'organisation et la structure de la Direction Générale du Patrimoine Bâti Public de Guinée selon le Décret N°D/0275/PRG/CNRD/SGG." />
        <meta name="twitter:image" content="/images/our-team/Souadou-Balde-DG.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href="/about/equipe-gestion" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Organisation et Structure - DGPBP",
            "description": "Organisation et structure de la Direction Générale du Patrimoine Bâti Public de Guinée",
            "url": "/about/equipe-gestion",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
              "employees": equipeDirection.map(membre => ({
                "@type": "Person",
                "name": membre.nom,
                "jobTitle": membre.poste,
                "worksFor": {
                  "@type": "GovernmentOrganization",
                  "name": "DGPBP"
                }
              }))
            }
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[700px] flex items-center overflow-hidden" itemScope itemType="https://schema.org/ImageObject">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('/images/about03.jpg')"}}
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
              className="uppercase text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-2xl"
            >
              Notre 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-blue-100 ml-4">
                Organisation
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-12"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Building2 className="h-5 w-5 text-primary-300" />
                <span>Directions Techniques</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Users className="h-5 w-5 text-primary-300" />
                <span>Services d'Appui</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Target className="h-5 w-5 text-primary-300" />
                <span>Services Déconcentrés</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href={route('about.mot-directrice')}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold 
                hover:from-primary-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center group shadow-xl shadow-primary-700/30 transform hover:-translate-y-1"
              >
                <Target className="mr-3 group-hover:scale-110 transition-transform" />
                Mot de la Directrice
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

      {/* Statistiques avec design amélioré */}
      <section className="relative py-24 -mt-16 z-20 bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statistiques.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br from-${stat.gradient} to-${stat.gradient}/50 bg-opacity-10 mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.valeur}</h3>
                        <p className="text-gray-700 font-semibold text-lg">{stat.titre}</p>
                        {stat.subtitle && <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Équipe de Direction avec design amélioré */}
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
              Direction
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Générale
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              La Direction Générale est dirigée par un Directeur Général nommé par Décret du Président de la République, 
              assisté d'un Directeur Général Adjoint
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {equipeDirection.map((membre, index) => (
              <motion.div key={membre.id} variants={fadeIn}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-900 to-blue-900">
                      <div className="mb-4">
                        <img 
                          src={membre.photo} 
                          alt={`Photo de ${membre.nom}`}
                          className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-white/40 transition-colors"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Badge poste */}
                      <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                        <span className="text-sm font-medium">Direction Générale</span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{membre.nom}</h3>
                        <p className="text-primary-600 font-semibold text-lg">{membre.poste}</p>
                      </div>
                      
                      {/* Attributions */}
                      <div className="mb-6">
                        <p className="text-gray-600 leading-relaxed text-center">{membre.attributions}</p>
                      </div>
                      
                      {/* Compétences principales */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {membre.competences.map((competence, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors">
                            {competence}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Directions Techniques avec design amélioré */}
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
              Directions
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Techniques
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Les Directions Techniques sont animées par des Directeurs qui ont rang de Chefs de Division
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {directionsTechniques.map((direction, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-6">
                      <img 
                        src={direction.photo} 
                        alt={`Direction ${direction.nom}`}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary-100 group-hover:border-primary-200 transition-colors"
                      />
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">{direction.nom}</h3>
                    
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{direction.description}</p>
                    
                    {/* Services */}
                    <div className="mb-6 bg-gradient-to-br from-primary-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Services :</h4>
                      <div className="space-y-2">
                        {direction.services.map((service, idx) => (
                          <p key={idx} className="text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            {service}
                          </p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {direction.competences.map((competence, idx) => (
                        <Badge key={idx} variant="outline" className="bg-white text-primary-700 border-primary-200 hover:bg-primary-50 transition-colors">
                          {competence}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services d'Appui avec design amélioré */}
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
              Services
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                d'Appui
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Les Services d'Appui sont animés par des Chefs de Service qui ont rang de Chefs de Section
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesAppui.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{service.nom}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Déconcentrés avec design amélioré */}
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
              Services
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Déconcentrés
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Les Services Déconcentrés sont animés par des Directeurs Communaux, Préfectoraux et Régionaux 
              qui ont rang de Chefs de Division
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {servicesDeconcentres.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl font-bold text-white">{service.nombre}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.nom}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Brigade Spéciale avec design amélioré */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
              </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brigade Spéciale de Gendarmerie</h3>
                <p className="text-gray-600 leading-relaxed">
                Assure la sécurité du Service et du personnel pendant les heures de travail. 
                Appuie la Direction dans la mise en œuvre des actions de terrain relatives à la gestion du Parc Immobilier Bâti de l'État.
              </p>
              </div>
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
              Vision
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
              Explorez la vision et les orientations stratégiques de notre Directrice Générale 
              pour la transformation de la gestion du patrimoine public
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={route('about.mot-directrice')}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
              hover:from-primary-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl 
              shadow-primary-700/30 inline-flex items-center group"
            >
              <Target className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                Mot de la Directrice
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
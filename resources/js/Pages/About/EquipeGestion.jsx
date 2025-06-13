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
      services: ["Service Réglementation et Gestion des Contrats", "Service Contentieux et Suivi des Différends"],
      description: "Conseils, information et rédaction de documents juridiques relatifs aux bâtiments de l'État"
    },
    {
      nom: "Direction Gestion Locative et du Patrimoine Immobilier",
      responsable: "À définir",
      photo: "/images/our-team/agent.png",
      competences: ["Gestion locative", "Administration bâtiments", "Fichier immobilier"],
      services: ["Gérances Communales", "Gérance bâtiments commerciaux", "Gérance Magasins et Entrepôts"],
      description: "Gestion administrative, commerciale et financière du patrimoine immobilier de l'État"
    },
    {
      nom: "Direction Maintenance et Logistique",
      responsable: "À définir",
      photo: "/images/our-team/agent.png",
      competences: ["Maintenance", "Rénovation", "Construction"],
      services: ["Service Maintenance et Rénovation", "Service Construction et Aménagement"],
      description: "Restauration, rénovation et entretien du Parc Immobilier Bâti de l'État"
    }
  ];

  // Services d'Appui
  const servicesAppui = [
    {
      nom: "Service Accueil",
      responsable: "À définir",
      icon: <HeadphonesIcon className="h-6 w-6 text-primary-600" />,
      description: "Accueil et orientation des visiteurs, gestion du secrétariat central"
    },
    {
      nom: "Service Administratif et Financier",
      responsable: "À définir", 
      icon: <Building2 className="h-6 w-6 text-primary-600" />,
      description: "Gestion des ressources budgétaires et financières, suivi budgétaire"
    },
    {
      nom: "Service Suivi-Evaluation",
      responsable: "À définir",
      icon: <Target className="h-6 w-6 text-primary-600" />,
      description: "Élaboration du plan de programmation et suivi-évaluation des activités"
    },
    {
      nom: "Service Ressources Humaines",
      responsable: "À définir",
      icon: <Users className="h-6 w-6 text-primary-600" />,
      description: "Gestion RH, planification des besoins, formation et carrière du personnel"
    },
    {
      nom: "Service Recouvrement des Recettes Locatives",
      responsable: "À définir",
      icon: <Award className="h-6 w-6 text-primary-600" />,
      description: "Recouvrement des loyers, plans de trésorerie, arriérés de créances"
    },
    {
      nom: "Service Modernisation, Communication et Documentation",
      responsable: "À définir",
      icon: <FileText className="h-6 w-6 text-primary-600" />,
      description: "Modernisation IT, communication, gestion du site web et archivage"
    }
  ];

  // Services Déconcentrés
  const servicesDeconcentres = [
    {
      nom: "Directions Immobilières Régionales",
      nombre: "8",
      description: "Gestion locale du patrimoine dans les régions"
    },
    {
      nom: "Directions Immobilières Préfectorales/Communales",
      nombre: "33",
      description: "Gestion locale du patrimoine dans les préfectures et communes"
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
        
        <h3 className="font-bold text-gray-900 mb-2 text-center text-sm">{direction.nom}</h3>
        <p className="text-primary text-xs font-medium mb-3 text-center">{direction.responsable}</p>
        
        <p className="text-sm text-gray-600 mb-4 text-center">{direction.description}</p>
        
        {/* Services */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-800 mb-2">Services :</h4>
          <div className="space-y-1">
            {direction.services.map((service, idx) => (
              <p key={idx} className="text-xs text-gray-600">• {service}</p>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-1">
          {direction.competences.slice(0, 3).map((competence, idx) => (
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
          <div className="p-3 bg-primary-100 rounded-lg mr-4">
            {service.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-sm">{service.nom}</h3>
            <p className="text-primary text-xs font-medium">{service.responsable}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">{service.description}</p>
      </div>
    </div>
  );

  return (
    <AppLayout>
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-primary-950/70 to-blue-900/60" />
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-400/20 rounded-full opacity-50" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-primary-400/20 rounded-full opacity-50" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" aria-hidden="true" />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-primary-500/10 rounded-full blur-xl" aria-hidden="true" />
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-block text-blue-300 text-lg font-medium mb-3 px-4 py-1 border border-blue-300/30 rounded-full">
                Structure & Organisation
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
              itemProp="name"
            >
              Notre 
              <span className="text-blue-300">Organisation</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Structure organisationnelle de la Direction Générale du Patrimoine Bâti Public 
              définie par le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Building2 className="h-5 w-5 text-blue-300" />
                <span>Directions Techniques</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="h-5 w-5 text-blue-300" />
                <span>Services d'Appui</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Target className="h-5 w-5 text-blue-300" />
                <span>Services Déconcentrés</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="/about/mot-directrice" 
                className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold 
                hover:bg-blue-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-700/30"
                aria-label="Mot de la Directrice"
              >
                <Target className="mr-3 group-hover:scale-110 transition-transform" />
                Mot de la Directrice
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
        
        <meta itemProp="contentUrl" content="/images/about03.jpg" />
        <meta itemProp="caption" content="Organisation DGPBP" />
      </div>

      {/* Statistiques */}
      <section className="py-12 bg-white relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statistiques.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Équipe de Direction */}
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
              Direction Générale
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
                <DirecteurCard membre={membre} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Directions Techniques */}
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
              Directions Techniques
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {directionsTechniques.map((direction, index) => (
              <motion.div key={index} variants={fadeIn}>
                <DirectionCard direction={direction} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services d'Appui */}
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
              Services d'Appui
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesAppui.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Déconcentrés */}
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
              Services Déconcentrés
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
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-sm border border-primary-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{service.nombre}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.nom}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Brigade Spéciale */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl shadow-sm border border-orange-100 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brigade Spéciale de Gendarmerie</h3>
              <p className="text-gray-600">
                Assure la sécurité du Service et du personnel pendant les heures de travail. 
                Appuie la Direction dans la mise en œuvre des actions de terrain relatives à la gestion du Parc Immobilier Bâti de l'État.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-primary-950 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Découvrez Notre Vision
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Explorez la vision et les orientations stratégiques de notre Directrice Générale 
              pour la transformation de la gestion du patrimoine public
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/about/mot-directrice"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-700/30"
              >
                <Target className="h-5 w-5" />
                Mot de la Directrice
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
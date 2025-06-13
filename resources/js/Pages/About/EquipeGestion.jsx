import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Award, Calendar, Users, Star, ArrowRight, Building2, Target, Shield, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
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
      competences: ["Gestion Stratégique", "Leadership", "Contrôle financier"],
    },
    {
      id: 2,
      nom: "Nafissatou Cisse",
      poste: "Directrice Générale Adjoint",
      photo: "/images/our-team/Nafissatou-Cisse-DGA.jpg",
      competences: ["Expertise en communication", "Gestion des relations clients"],
    },
  ];

  // Responsables de départements
  const chefsDepartements = [
    {
      nom: "Kadiatou CONTE",
      poste: "Patrimoine Résidentiel",
      photo: "/images/our-team/agent.png",
      competences: ["Gestion Locative"],
      projets: "1200+ logements"
    },
    {
      nom: "Sékou TOURE",
      poste: "Patrimoine Commercial",
      photo: "/images/our-team/agent.png",
      competences: ["Baux Commerciaux"],
      projets: "350 baux"
    },
    {
      nom: "Mariama BARRY",
      poste: "Relations Clients",
      photo: "/images/our-team/agent.png",
      competences: ["Service Client"],
      projets: "95% satisfaction"
    },
    {
      nom: "Alpha DIALLO",
      poste: "Maintenance",
      photo: "/images/our-team/agent.png",
      competences: ["Maintenance"],
      projets: "24/7 service"
    }
  ];

  // Statistiques de l'équipe
  const statistiques = [
    {
      icon: Users,
      titre: "Membres de Direction",
      valeur: equipeDirection.length,
      subtitle: "Leaders expérimentés",
      gradient: "bg-emerald-500",
      iconColor: "text-emerald-600"
    },
    {
      icon: Award,
      titre: "Années d'Expérience",
      valeur: "60+",
      subtitle: "Expertise collective",
      gradient: "bg-blue-500",
      iconColor: "text-blue-600"
    },
    {
      icon: Building2,
      titre: "Départements",
      valeur: chefsDepartements.length,
      subtitle: "Unités opérationnelles",
      gradient: "bg-primary-500",
      iconColor: "text-primary-600"
    },
    {
      icon: Target,
      titre: "Projets Réalisés",
      valeur: "150+",
      subtitle: "Depuis 2018",
      gradient: "bg-orange-500",
      iconColor: "text-orange-600"
    }
  ];

  // Données SEO optimisées
  const seoData = {
    title: "Notre Équipe de Gestion - DGPBP | Direction Générale du Patrimoine Bâti Public",
    description: "Découvrez l'équipe dirigeante et les responsables de la Direction Générale du Patrimoine Bâti Public de Guinée. Expertise, compétences et expérience au service du patrimoine public.",
    keywords: "équipe DGPBP, direction générale, responsables patrimoine, expertise immobilière, gestion publique, Guinée, leadership",
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
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div> */}
      <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-600">
          {/* <img 
            src={membre.photo} 
            alt={`Photo de ${membre.nom}`}
            className="w-full h-full bg-center object-contain group-hover:scale-110 transition-transform duration-700"
          /> */}
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
            <span className="text-xs font-medium">Direction</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{membre.nom}</h3>
            <p className="text-primary font-semibold">{membre.poste}</p>
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

  const ChefCard = ({ chef, index }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="mb-4">
          <img 
            src={chef.photo} 
            alt={`Photo de ${chef.nom}`}
            className="w-20 h-20 rounded-full mx-auto object-cover border-3 border-primary-100 group-hover:border-primary-200 transition-colors"
          />
        </div>
        
        <h3 className="font-bold text-gray-900 mb-1 text-sm">{chef.nom}</h3>
        <p className="text-primary text-xs font-medium mb-3">{chef.poste}</p>
        
        <div className="text-sm font-bold text-primary mb-3">{chef.projets}</div>
        
        <div className="flex flex-wrap justify-center gap-1">
          {chef.competences.slice(0, 1).map((competence, compIndex) => (
            <Badge key={compIndex} variant="outline" className="text-xs">
              {competence}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        {/* Schema.org JSON-LD pour la page équipe */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Notre Équipe de Gestion - DGPBP",
            "description": "Équipe dirigeante de la Direction Générale du Patrimoine Bâti Public de Guinée",
            "url": "/about/equipe-gestion",
            "mainEntity": {
              "@type": "Organization",
              "name": "DGPBP - Direction Générale du Patrimoine Bâti Public",
              "employee": equipeDirection.map(membre => ({
                "@type": "Person",
                "name": membre.nom,
                "jobTitle": membre.poste,
                "email": membre.email,
                "telephone": membre.telephone
              }))
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
                  "name": "Qui sommes-nous",
                  "item": "/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Notre Équipe de Gestion",
                  "item": "/about/equipe-gestion"
                }
              ]
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section amélioré */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Motifs décoratifs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 shadow-2xl mb-8">
                <Users className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Notre Équipe
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                de Gestion
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Une équipe de professionnels expérimentés dédiée à l'excellence 
              dans la gestion du patrimoine bâti public de la Guinée
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">Leadership • Excellence</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">{equipeDirection.length} Directeurs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white font-semibold">{chefsDepartements.length} Départements</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="#direction"
                className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl inline-flex items-center"
              >
                <Users className="h-6 w-6 mr-3" />
                Découvrir l'Équipe
              </a>
              <a 
                href="#structure"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center text-lg"
              >
                <Building2 className="h-6 w-6 mr-3" />
                Structure
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Statistiques avec design amélioré */}
        <section className="relative mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statistiques.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Équipe de Direction */}
        <section id="direction" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Équipe de 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                Direction
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Les dirigeants qui orientent la stratégie et supervisent les opérations de la DGPBP
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipeDirection.map((membre) => (
              <motion.div key={membre.id} variants={fadeIn}>
                <DirecteurCard membre={membre} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Chefs de Départements */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chefs de 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                Départements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Les responsables opérationnels qui assurent le fonctionnement quotidien de nos services
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {chefsDepartements.map((chef, index) => (
              <motion.div key={index} variants={fadeIn}>
                <ChefCard chef={chef} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section Organigramme améliorée */}
        <section id="structure" className="bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Structure 
                <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary-600">
                  Organisationnelle
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Notre organisation s'articule autour de 4 directions principales et de plusieurs départements spécialisés
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  titre: "Direction Générale",
                  description: "Stratégie et supervision générale",
                  icon: Users,
                  gradient: "from-emerald-500 to-green-500",
                  iconColor: "text-emerald-600"
                },
                {
                  titre: "Direction Technique",
                  description: "Expertise et évaluation immobilière",
                  icon: Building2,
                  gradient: "from-blue-500 to-indigo-500",
                  iconColor: "text-blue-600"
                },
                {
                  titre: "Direction Juridique",
                  description: "Contentieux et affaires légales",
                  icon: Shield,
                  gradient: "from-purple-500 to-violet-500",
                  iconColor: "text-purple-600"
                },
                {
                  titre: "Direction Administrative",
                  description: "Gestion financière et administrative",
                  icon: Briefcase,
                  gradient: "from-orange-500 to-red-500",
                  iconColor: "text-orange-600"
                }
              ].map((direction, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className={`group h-full relative p-8 rounded-2xl bg-gradient-to-br ${direction.gradient} text-white hover:scale-105 transition-all duration-300 shadow-xl`}>
                    <direction.icon className="h-12 w-12 mb-6 text-white/90" />
                    <h3 className="text-xl font-bold mb-3">{direction.titre}</h3>
                    <p className="text-white/90 leading-relaxed">{direction.description}</p>
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
          
          <motion.div 
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Rejoignez Notre 
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Mission
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Découvrez nos services, explorez nos projets et contactez-nous pour toute demande ou collaboration
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={route('contact.index')}
                className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-10 py-4 rounded-xl font-bold hover:from-emerald-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl inline-flex items-center text-lg"
              >
                <Mail className="h-6 w-6 mr-3" />
                Nous Contacter
              </a>
              <a 
                href={route('demandes.new')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center text-lg"
              >
                <Building2 className="h-6 w-6 mr-3" />
                Nos Services
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </AppLayout>
  );
} 
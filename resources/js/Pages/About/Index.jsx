import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Target, Award, Users, Shield, Lightbulb, ArrowRight, Clock, MapPin, Building2, Archive, 
  CheckCircle, TrendingUp, Globe
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
    title: "Restructuration",
    description: "Restructuration suivant le Décret N°D/0275/PRG/CNRD/SGG du 06 Juin 2022."
  }
];

const values = [
  {
    icon: <Shield className="h-10 w-10 text-primary-600" />,
    title: "Intégrité",
    description: "Travailler en toute conscience professionnelle et probité morale"
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary-600" />,
    title: "Respect des engagements",
    description: "S'aligner sur les règles de bonne conduite et sur les principes de la Direction"
  },
  {
    icon: <Users className="h-10 w-10 text-primary-600" />,
    title: "Esprit d'équipe",
    description: "Travailler ensemble, instaurer l'entente entre les collaborateurs pour une meilleure performance"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary-600" />,
    title: "Créativité",
    description: "Identifier et valoriser les idées en vue d'accélérer les projets et améliorer la performance"
  }
];

const missions = [
  {
    icon: <Target className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Concevoir, élaborer et mettre en œuvre la politique du Gouvernement en matière de conservation"
  },
  {
    icon: <Award className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Assurer l'administration, la gestion et la conservation du Patrimoine Immobilier"
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Superviser la gestion des biens immeubles et du domaine public et privé de l'État"
  },
  {
    icon: <Globe className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />,
    text: "Développer des partenariats stratégiques pour la valorisation du patrimoine"
  }
];

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
      <Head title="Qui sommes-nous ?" />
      
      {/* Hero Section Modernisé avec overlay en dégradé et animations */}
      <div className="relative min-h-[700px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{backgroundImage: "url('/images/about03.jpg')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-primary-950/60 to-black/50" />
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-primary-500/20 rounded-full opacity-50" />

        <div className="relative container mx-auto px-4 z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary-300 text-lg font-medium mb-3 px-4 py-1 border border-primary-300/30 rounded-full">
              Direction Générale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Patrimoine Bâti <span className="text-primary-300">Public</span>
            </h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Transformer la gestion immobilière publique par l'innovation, la transparence 
              et l'excellence opérationnelle.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a 
                href={route('contact.index')} 
                className="px-10 py-4 bg-primary-600 text-white rounded-lg font-semibold 
                hover:bg-primary-500 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-primary-700/30"
              >
                Nous Contacter
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <a 
                href={route('contact.index')} 
                className="px-10 py-4 bg-transparent border-2 border-white/70 text-white rounded-lg font-semibold 
                hover:bg-white/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
              >
                Nos Projets
                <Building2 className="ml-3 group-hover:scale-110 transition-transform" />
              </a> */}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Effet de vague en bas du hero */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Section Présentation avec mise en page zigzag */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 font-semibold mb-3 px-4 py-1 bg-primary-50 rounded-full text-sm">
              Notre histoire
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              La DGPBP : Notre Engagement
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-lg -z-10"></div>
              <img
                src="/images/hero/photo_de_couverture.jpg"
                alt="Siège de la DGPBP"
                className="rounded-2xl shadow-xl mb-6 object-cover w-full h-96"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/50 rounded-lg -z-10"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-8 mb-6">
                Depuis sa création en 1959, la Direction Générale du Patrimoine Bâti Public (DGPBP) 
                est le garant stratégique de la valorisation et de la modernisation du patrimoine immobilier de l'État guinéen.
              </p>
              <div className="flex items-center space-x-4 mt-4 bg-primary-50 p-4 rounded-lg">
                <CheckCircle className="w-10 h-10 text-primary-600" />
                <span className="text-xl font-semibold text-gray-800">
                  Engagés pour l'excellence et la transparence
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Notre mission va au-delà de la simple gestion immobilière. Nous incarnons une vision 
                transformative qui allie préservation historique et innovation technologique.
              </p>
              
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-xl border border-primary-100">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-primary-100 rounded-full mr-4">
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nos Chiffres Clés</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Building2 className="w-10 h-10 text-primary-600 mb-3" />
                    <span className="text-3xl font-bold text-primary-700">350+</span>
                    <span className="text-gray-600 mt-1">Bâtiments Gérés</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <Clock className="w-10 h-10 text-primary-600 mb-3" />
                    <span className="text-3xl font-bold text-primary-700">65+</span>
                    <span className="text-gray-600 mt-1">Années d'Expérience</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md">
                    <MapPin className="w-10 h-10 text-primary-600 mb-3" />
                    <span className="text-3xl font-bold text-primary-700">25</span>
                    <span className="text-gray-600 mt-1">Projets en Cours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Timeline verticale moderne */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary-100 rounded-full opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 font-semibold mb-3 px-4 py-1 bg-primary-50 rounded-full text-sm">
              Évolution
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-6 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative"
            >
              <div className="sticky top-32">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="/images/about/01.jpeg"
                    alt="Histoire de la DGPBP"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Notre Évolution</h3>
                    <p className="text-white/90">
                      65+ ans d'histoire au service du patrimoine guinéen
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'État Guinéen, soucieux de la pérennisation de la politique de gestion immobilière 
                    enclenchée par les Autorités Coloniales, a mis en place dès 1959 les toutes premières 
                    Institutions remplaçant la Société Immobilière de Guinée (SIG).
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Timeline verticale */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-3 relative pl-8 border-l-2 border-primary-200"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  variants={fadeIn}
                  className="mb-16 relative"
                >
                  {/* Point de connexion */}
                  <div className="absolute -left-[41px] top-0 w-20 h-20 bg-primary-50 border-2 border-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-700">{event.year}</span>
                  </div>
                  
                  {/* Contenu */}
                  <div className="ml-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Vision & Missions avec design infographique */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Séparateur de vague */}
        <div className="absolute top-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50">
            <path d="M0,0L60,10.7C120,21,240,43,360,48C480,53,600,43,720,32C840,21,960,11,1080,16C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 font-semibold mb-3 px-4 py-1 bg-primary-50 rounded-full text-sm">
              Orientation stratégique
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Vision & Nos Missions
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Carte Vision */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary-50 rounded-2xl -z-10"></div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary-100 mr-4">
                    <Globe className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Notre Vision</h3>
                </div>
                
                <div className="mb-8 relative h-[250px] overflow-hidden rounded-xl">
                  <img
                    src="/images/about/02.jpeg"
                    alt="Notre Vision"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-white/90 text-primary-800 py-1 px-3 rounded-full text-sm font-medium">
                      Horizon 2030
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Créer un cadre de gestion optimale du PBP pour le repositionnement central 
                    de l'État propriétaire dans le processus de production de logements et 
                    immeubles administratifs.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Carte Missions */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary-50 rounded-2xl -z-10"></div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary-100 mr-4">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Nos Missions</h3>
                </div>
                
                <div className="mb-8 relative h-[250px] overflow-hidden rounded-xl">
                  <img
                    src="/images/about/03.jpeg"
                    alt="Nos Missions"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="bg-white/90 text-primary-800 py-1 px-3 rounded-full text-sm font-medium">
                      Objectifs stratégiques
                    </span>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {missions.map((mission, index) => (
                    <div key={index} className="py-4 flex items-start gap-4">
                      <div className="p-2 bg-primary-50 rounded-lg">
                        {mission.icon}
                      </div>
                      <p className="text-gray-700">{mission.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Valeurs avec cartes hexagonales */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Éléments décoratifs */}
        <div className="absolute top-40 left-10 w-48 h-48 bg-primary-50 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-50 rounded-full opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary-600 font-semibold mb-3 px-4 py-1 bg-primary-50 rounded-full text-sm">
              Ce qui nous définit
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs Fondamentales
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos valeurs guident nos actions quotidiennes et représentent l'essence de notre engagement envers le patrimoine et les citoyens.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[300px] mb-16 overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="/images/about/04.jpeg"
              alt="Nos Valeurs"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/50 to-primary-900/70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white text-center max-w-lg leading-tight">
                Des valeurs fortes pour un service public d'excellence
              </h3>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl transform transition-all duration-500 
                  hover:-translate-y-4 hover:shadow-2xl group border border-gray-100"
              >
                <div className="relative mb-6">
                  {/* Hexagone stylisé */}
                  <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-45 scale-75 
                    group-hover:rotate-0 group-hover:scale-90 transition-all duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center h-20 w-20">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{value.description}</p>
                
                {/* <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                  <span className="text-primary-600 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div> */}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a 
              href={route('contact.index')} 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg 
                font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/20"
            >
              Contactez-nous
              {/* <Users className="h-5 w-5" /> */}
            </a>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
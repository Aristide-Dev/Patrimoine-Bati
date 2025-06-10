import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Quote, MapPin, Calendar, Mail, Phone, Linkedin, ArrowLeft, Target, Users, Shield, Lightbulb
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
      title: "Excellence Opérationnelle",
      description: "Transformer notre organisation pour atteindre les plus hauts standards de performance dans la gestion du patrimoine public."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Service Citoyen",
      description: "Placer les citoyens au cœur de nos préoccupations avec des services accessibles, transparents et efficaces."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Intégrité & Transparence",
      description: "Garantir une gestion irréprochable du patrimoine public dans le respect des principes éthiques les plus stricts."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary-600" />,
      title: "Innovation Digitale",
      description: "Moderniser nos processus par l'adoption de technologies innovantes pour une administration plus agile."
    }
  ];

  return (
    <AppLayout>
      <Head title="Mot de la Directrice" />
      
      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-950 border-4 border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-950 border-4 border-primary-300/20 rounded-full" />
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary-300 text-lg font-medium mb-4 px-4 py-2 border border-primary-300/30 rounded-full">
              Direction Générale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mot de la <span className="text-primary-300">Directrice</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Un message de vision, d'engagement et de transformation pour notre institution
            </p>
          </motion.div>
        </div>
        
        {/* Effet de vague */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
            <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Lien de retour */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <motion.a 
            href={route('about.index')}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à "Qui sommes-nous"
          </motion.a>
        </div>
      </div>

      {/* Section Principale */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Présentation de la Directrice */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-16 items-start mb-20"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Photo et informations */}
              <motion.div 
                className="relative"
                variants={fadeIn}
              >
                <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
                  <img
                    src="/images/hero/Souadou-Balde.png"
                    alt="Madame Souadou Baldé, Directrice Générale"
                    className="relative rounded-2xl shadow-2xl w-full h-[600px] object-contain object-center z-50"
                  />
                </div>
              </motion.div>

              {/* Message de la Directrice */}
              <motion.div 
                className="space-y-8"
                variants={fadeIn}
              >
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary-200" />
                  <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="prose prose-lg prose-gray max-w-none">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6 font-medium italic">
                        "Chers compatriotes, chers partenaires,
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        C'est avec un immense honneur et une profonde responsabilité que j'assume la direction de cette institution emblématique qu'est la Direction Générale du Patrimoine Bâti Public. Notre mission va bien au-delà de la simple gestion immobilière : nous sommes les gardiens du patrimoine de notre nation, les architectes de son développement durable.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Dans un contexte de transformation digitale et de modernisation de l'administration publique, notre défi est de révolutionner notre approche tout en préservant l'excellence qui nous caractérise. Nous nous engageons à bâtir une institution moderne, transparente et efficace, au service de tous les Guinéens.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Notre vision s'articule autour de quatre piliers fondamentaux : l'excellence opérationnelle, le service citoyen, l'intégrité absolue et l'innovation digitale. Ces valeurs guident chacune de nos actions et orientent notre stratégie de développement.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Ensemble, nous construisons l'avenir du patrimoine public guinéen. Je vous invite à découvrir nos initiatives, à partager vos préoccupations et à collaborer avec nous dans cette noble mission de service public.
                      </p>
                      
                      <p className="text-lg leading-relaxed text-gray-900 font-semibold italic">
                        Merci pour votre confiance."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Signature */}
                <div className="text-right">
                  <div className="inline-block">
                    <p className="text-xl font-bold text-gray-900">Madame Souadou Baldé</p>
                    <p className="text-primary-600 font-semibold">Directrice Générale</p>
                    <p className="text-gray-500">DGPBP</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Vision et Objectifs */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <span className="inline-block text-primary-600 font-semibold mb-3 px-4 py-1 bg-primary-50 rounded-full text-sm">
                  Notre Vision
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Les Piliers de Notre Transformation
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 mx-auto">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-center">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="mt-20 text-center bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Rejoignez-nous dans cette transformation</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Découvrez nos services, explorez nos projets et contactez-nous pour toute demande ou collaboration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href={route('demandes.formulaire')} 
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Demande de Logement
                </a>
                <a 
                  href={route('contact.index')} 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Nous Contacter
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
} 
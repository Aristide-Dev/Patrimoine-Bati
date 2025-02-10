import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Target, Award, Users, Shield, Lightbulb, ArrowRight, Clock, MapPin, Building2, Archive, 
  CheckCircle, TrendingUp, Globe
} from 'lucide-react';

export default function About() {
  return (
    <AppLayout>
      <Head title="Qui sommes-nous ?" />
      
      {/* Hero Section Modernisé */}
      <div className="relative min-h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90" 
          style={{backgroundImage: "url('/images/about03.jpg')"}}
        />
        <div className="absolute inset-0 bg-black/40" />
        

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Direction Générale du Patrimoine Bâti Public
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transformer la gestion immobilière publique par l'innovation, la transparence et l'excellence opérationnelle.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href={route('contact.index')} 
                className="px-10 py-4 bg-white text-primary-800 rounded-lg font-semibold 
                hover:bg-gray-100 transition-all duration-300 flex items-center group"
              >
                Nous Contacter
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={route('contact.index')} 
                className="px-10 py-4 border-2 border-white text-white rounded-lg font-semibold 
                hover:bg-white/20 transition-all duration-300 flex items-center group"
              >
                Nos Projets
                <Building2 className="ml-3 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            La DGPBP : Notre Engagement
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Depuis sa création en 1959, la Direction Générale du Patrimoine Bâti Public (DGPBP) 
                est le garant stratégique de la valorisation et de la modernisation du patrimoine immobilier de l'État guinéen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre mission va au-delà de la simple gestion immobilière. Nous incarnons une vision 
                transformative qui allie préservation historique et innovation technologique.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <CheckCircle className="w-10 h-10 text-primary-600" />
                <span className="text-xl font-semibold text-gray-800">
                  Engagés pour l'excellence et la transparence
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-10 h-10 mr-4 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Nos Chiffres Clés</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b pb-2 border-primary-100">
                    <span className="text-gray-700">Bâtiments Gérés</span>
                    <span className="font-bold text-primary-600">350+</span>
                  </li>
                  <li className="flex justify-between border-b pb-2 border-primary-100">
                    <span className="text-gray-700">Années d'Expérience</span>
                    <span className="font-bold text-primary-600">65+</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Projets en Cours</span>
                    <span className="font-bold text-primary-600">25</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Notre Parcours Historique
          </h2>
          <div className="relative">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`relative pb-12 grid grid-cols-12 gap-4 items-center 
                  ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
              >
                {/* Vertical Line */}
                {index !== timelineData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full 
                    border-l-4 border-primary-200 top-10 -z-10" />
                )}
                
                {/* Year Marker */}
                <div 
                  className={`col-span-2 flex items-center justify-center 
                    ${index % 2 === 0 ? 'order-first' : 'order-last'}`}
                >
                  <div className="w-20 h-20 bg-white border-4 border-primary-200 
                    rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div 
                  className={`col-span-10 bg-white p-8 rounded-2xl shadow-xl 
                    transform transition-transform duration-300 hover:-translate-y-2
                    ${index % 2 === 0 ? 'order-last' : 'order-first'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-6">{item.icon}</div>
                    <p className="text-gray-700 text-lg font-medium">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Missions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Être un modèle de référence nationale et internationale en matière de gestion 
                immobilière publique, en combinant innovation technologique, durabilité environnementale 
                et optimisation des ressources.
              </p>
            </div>

            {/* Missions */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <Archive className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nos Missions</h3>
              </div>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-center group">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center 
                      justify-center mr-4 text-primary-600 font-bold
                      group-hover:bg-primary-200 transition-all">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 group-hover:text-primary-700 transition-colors">
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg 
                  transform transition-all duration-300 
                  hover:-translate-y-4 hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center 
                  justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

const timelineData = [
  { 
    year: '1959', 
    content: "Création de l'Entreprise Nationale des Bâtiments (ENB)",
    icon: <Clock className="w-8 h-8 text-primary-600" />
  },
  { 
    year: '1960', 
    content: "Le Service des Logements prend en charge la gestion des bâtiments gouvernementaux",
    icon: <MapPin className="w-8 h-8 text-primary-600" />
  },
  { 
    year: '1976', 
    content: "Création du SAFBA, SERRBA et SNC pour renforcer la gestion immobilière",
    icon: <Building2 className="w-8 h-8 text-primary-600" />
  },
  { 
    year: '1990', 
    content: "Évolution vers une Direction Nationale avec des responsabilités élargies",
    icon: <TrendingUp className="w-8 h-8 text-primary-600" />
  },
  { 
    year: '2021', 
    content: "Transformation stratégique suite au décret du 06 Juin 2022, modernisant la structure",
    icon: <Globe className="w-8 h-8 text-primary-600" />
  }
];

const missions = [
  "Élaborer et mettre en œuvre la politique de conservation du patrimoine",
  "Administrer et optimiser le patrimoine immobilier de l'État",
  "Piloter l'affectation stratégique des bâtiments",
  "Coordonner et superviser les projets de rénovation",
  "Développer des partenariats innovants et durables"
];

const values = [
  {
    title: "Intégrité",
    description: "Agir avec transparence, éthique et responsabilité à chaque étape.",
    icon: <Shield className="w-8 h-8 text-primary-600" />
  },
  {
    title: "Collaboration",
    description: "Favoriser le travail d'équipe et le partage des connaissances.",
    icon: <Users className="w-8 h-8 text-primary-600" />
  },
  {
    title: "Innovation",
    description: "Encourager la créativité et l'amélioration continue des processus.",
    icon: <Lightbulb className="w-8 h-8 text-primary-600" />
  },
  {
    title: "Performance",
    description: "Rechercher l'excellence opérationnelle et la qualité du service.",
    icon: <Target className="w-8 h-8 text-primary-600" />
  }
];
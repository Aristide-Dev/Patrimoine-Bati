import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Users, Target, Award, History, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <AppLayout>
      <Head title="Qui sommes-nous ?" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-900/90 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Direction Générale du Patrimoine Bâti Public
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-100">
            Notre Patrimoine Bâti Public, notre fierté !
          </p>
        </div>
      </div>

      {/* Histoire Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Notre Histoire</h2>
            <div className="mt-10 space-y-10">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="relative flex items-center group">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-xl shrink-0">
                      {item.year}
                    </div>
                    <div className="ml-6 bg-white p-6 rounded-lg shadow-lg flex-grow">
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Missions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-lg mb-5">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Créer un cadre de gestion optimale du Patrimoine Bâti Public pour repositionner l'Etat, 
                en tant que propriétaire, au cœur du processus de production de logements et d'immeubles administratifs.
              </p>
            </div>

            {/* Missions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-lg mb-5">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nos Missions</h3>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="ml-3 text-gray-600">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white p-6 rounded-2xl shadow-lg group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 bg-primary-900 text-white">
                <h2 className="text-2xl font-bold mb-8">Contactez-nous</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-300 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-primary-300">Adresse</p>
                      <p className="mt-1">PORTS CONTENEURS DE CONAKRY, KALOUM REP. DE GUINEE</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-300 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-primary-300">Téléphone</p>
                      <p className="mt-1">+224 655-35-82-84 / +224 611-98-19-28</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-300 mt-1" />
                    <div className="ml-4">
                      <p className="font-medium text-primary-300">Email</p>
                      <p className="mt-1">contact@patrimoinebatipublic.com</p>
                      <p>serviceacceuil@patrimoinebatipublic.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

const timelineData = [
  { year: '1959', content: "Création de l'Entreprise Nationale des Bâtiments (ENB)" },
  { year: '1960', content: "Le Service des Logements prend en charge la gestion des bâtiments gouvernementaux" },
  { year: '1976', content: "Création du SAFBA, SERRBA et SNC" },
  { year: '1990', content: "La structure devient une Direction Nationale" },
  { year: '2021', content: "Restructuration majeure suite au décret du 06 Juin 2022" }
];

const missions = [
  "Concevoir et mettre en œuvre la politique de conservation",
  "Assurer l'administration du patrimoine immobilier",
  "Procéder à l'affectation des bâtiments",
  "Coordonner les travaux de rénovation",
  "Rechercher des partenaires potentiels"
];

const values = [
  {
    title: "Intégrité",
    description: "Travailler en toute conscience professionnelle et avec probité morale."
  },
  {
    title: "Respect",
    description: "S'aligner sur les règles de bonne conduite et respecter les engagements."
  },
  {
    title: "Équipe",
    description: "Favoriser l'entente et la complémentarité pour une meilleure performance."
  },
  {
    title: "Créativité",
    description: "Innover pour accélérer les projets et améliorer la performance globale."
  }
];
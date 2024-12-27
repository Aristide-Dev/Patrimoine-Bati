import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { PieChart, Boxes, Coins, FileBarChart, Binary } from 'lucide-react';

export default function ProjetsPage() {
  const projects = [
    {
      title: 'Ressources Fiscales',
      description: 'Élargissement de l’assiette, lutte contre la fraude, modernisation des systèmes.',
      icon: PieChart,
      href: 'directions.fiscales', // route('directions.fiscales')
    },
    {
      title: 'Ressources Douanières',
      description: 'Sécurisation et accroissement des recettes douanières.',
      icon: Boxes,
      href: 'directions.douanieres', // route('directions.douanieres')
    },
    {
      title: 'Ressources Non Fiscales',
      description: 'Diversification, digitalisation et révision des textes pour des recettes non fiscales.',
      icon: Coins,
      href: 'directions.non_fiscales', // route('directions.non_fiscales')
    },
    {
      title: 'Maîtrise des Dépenses et Arriérés',
      description: 'Gestion des dépenses fiscales et apurement des arriérés.',
      icon: FileBarChart,
      href: 'directions.depenses', // route('directions.depenses')
    },
    {
      title: 'Digitalisation',
      description: 'Automatisation et traçabilité pour une gestion efficace.',
      icon: Binary,
      href: 'directions.digitalisation', // route('directions.digitalisation')
    },
  ];

  return (
    <AppLayout>
      <Head title="Projets - MAMRI" />
      <div className="bg-gradient-to-b from-primary to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Les Projets de la MAMRI</h1>
          <p className="text-lg">
            Découvrez nos principaux axes d’intervention pour la mobilisation des ressources internes.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={route(project.href)}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 p-6 flex flex-col items-start"
          >
            <div className="p-4 bg-primary text-white rounded-full">
              <project.icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mt-4 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </AppLayout>
  );
}

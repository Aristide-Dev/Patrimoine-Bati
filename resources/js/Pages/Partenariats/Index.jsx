import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const PartenairesPage = () => {
  const partenaires = [
    {
      nom: "Banque Africaine de Développement",
      logo: "https://mamri.gov.gn/wp-content/uploads/2021/05/Banque-Africaine-de-Developpement.jpg",
      actions: [
        "Évaluation de la performance du système d’administration fiscal",
        "Modernisation du modèle technique d’administration fiscale",
        "Digitalisation"
      ]
    },
    {
      nom: "Agence Française de Développement",
      logo: "https://mamri.gov.gn/wp-content/uploads/2021/05/Agence-Francaise-de-Developpement.jpg",
      actions: [
        "Réforme du système de financement des collectivités locales",
        "Appui Institutionnel"
      ]
    },
    {
      nom: "Expertise France",
      logo: "https://mamri.gov.gn/wp-content/uploads/2021/07/new_logo.png",
      actions: [
        "Appui institutionnel à la modernisation",
        "Digitalisation des processus internes",
        "Formation et renforcement des capacités"
      ]
    }
  ];

  return (
    <AppLayout>
      <Head title="Partenaires - MAMRI" />

      {/* Section Introduction */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Partenaires</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos partenaires stratégiques qui nous accompagnent dans la transformation et la modernisation des systèmes fiscaux, douaniers et locaux.
          </p>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partenaires.map((partenaire, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <img
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                    {partenaire.nom}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {partenaire.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default PartenairesPage;

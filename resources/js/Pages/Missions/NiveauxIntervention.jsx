import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { 
  Users, 
  Target, 
  Building2, 
  FileText, 
  ChevronRight,
  Calendar,
  Clock,
  MessageSquare,
  Settings,
  Shield,
  Database,
  Network
} from 'lucide-react';

const OrganisationPage = () => {


  const sections = [
    {
      title: "Comité de Pilotage",
      icon: Users,
      color: "bg-[#ce1126]",
      description: "Instance politique et stratégique d'orientation",
      members: [
        "Le Président de la République (Président)",
        "Le Premier Ministre (Représentant)",
        "Le Ministre de l'Economie et des Finances (1er VP)",
        "Le Ministre du Budget (2ème VP)"
      ],
      responsibilities: [
        "Validation des initiatives et réformes",
        "Pilotage stratégique",
        "Évaluation des résultats",
        "Coordination interministérielle"
      ]
    },
    {
      title: "Cadre de Dialogue",
      icon: MessageSquare,
      color: "bg-[#fcd116]",
      description: "Instance d'échanges techniques",
      members: [
        "Directeur général des Douanes",
        "Directeur national des Impôts",
        "Directeur national du Trésor",
        "Directeur national du Budget"
      ],
      responsibilities: [
        "Échanges sur les initiatives",
        "Suivi de la mise en œuvre",
        "Coordination administrative",
        "Veille sur la qualité"
      ]
    },
    {
      title: "Coordination Générale",
      icon: Network,
      color: "bg-[#009460]",
      description: "Support technique et méthodologique",
      members: [
        "Chef de projet",
        "Chargé de mission",
        "Chargé de communication",
        "Équipe Technique Permanente"
      ],
      responsibilities: [
        "Analyse et information",
        "Coproduction de propositions",
        "Suivi des initiatives",
        "Communication et valorisation"
      ]
    }
  ];

  return (
    <AppLayout>
      <Head title="Organisation - MAMRI" />

      {/* Hero Section */}
      
      <div className="relative bg-gradient-to-r from-primary to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-4">
              Décret D/2021/064/PRG/SGG du 25 février 2021
            </span> */}
            <h1 className="text-5xl font-bold text-white mb-6">
                Organisation de la MAMRI
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Une gouvernance collégiale et un réseau technique efficace pour la mobilisation des ressources internes.
            </p>
          </div>
        </div>
      </div>

      {/* Structure Organisationnelle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Structure Organisationnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${section.color} p-6 text-white`}>
                  <section.icon size={32} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  {index === 1 ? (
                  <p className="opacity-90 text-black">{section.description}</p>
                  ):
                  (
                  <p className="opacity-90 text-white">{section.description}</p>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Membres clés</h4>
                    <ul className="space-y-2">
                      {section.members.map((member, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight size={16} className="mr-2 text-gray-400" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsabilités</h4>
                    <ul className="space-y-2">
                      {section.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight size={16} className="mr-2 text-gray-400" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Organigramme
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une structure hiérarchique claire pour une gestion efficace des ressources.
            </p>
          </div>
          
          <div className="flex flex-col items-center relative mx-auto shadow px-2 py-6 rounded-xl bg-white">
            {/* Niveau 1 : Président de la République */}
            <div className="mb-0 relative">
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-md shadow-md font-semibold border-2 border-red-700">
                Président de la République
              </div>
            </div>

            {/* Ligne verticale de raccord */}
            <div className="w-0 h-6 border-l-4 border-gray-400"></div>

{/* Ligne horizontale vers le niveau 3 */}
<div className="w-full flex justify-center relative mb-6">
  <div className="border-t-4 border-x-4 border-gray-400 w-full md:w-2/3 h-4 rounded-md"></div>
</div>

            {/* Niveau 2 : Ministres principaux */}
            <div className="flex items-start justify-center space-x-16 relative mb-8">
              {[
                {
                  title: "Ministre en charge",
                  role: "de l’économie et des finances",
                  bgColor: "bg-yellow-100",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-300",
                },
                {
                  title: "Ministre en charge",
                  role: "du budget",
                  bgColor: "bg-yellow-100",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-300",
                },
              ].map((minister, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Ligne verticale */}
                  <div className="w-0 h-6 border-l-4 border-gray-400"></div>
                  {/* Box */}
                  <div
                    className={`${minister.bgColor} ${minister.textColor} px-4 py-2 rounded-md shadow-md font-medium border ${minister.borderColor} text-center`}
                  >
                    {minister.title}
                    <br />
                    {minister.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Ligne horizontale vers le niveau 3 */}
            <div className="w-full flex justify-center relative mb-6">
              <div className="border-t-4 border-gray-400 w-full md:w-2/3 h-4"></div>
            </div>

            {/* Niveau 3 : Ministres et autres membres */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "Ministre en charge des mines et de la géologie",
                "Ministre en charge du Plan et de la Coopération Internationale",
                "Ministre en charge des télécommunications et de l’économie numérique",
                "Gouverneur de la Banque Centrale de la République de Guinée (BCRG)",
                "Coordinateur général de la MAMRI Rapporteur du Comité de pilotage",
                "Personnalité qualifiée indépendante",
                "Personnalité qualifiée indépendante",
              ].map((texte, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Ligne verticale */}
                  <div className="w-0 h-6 border-l-4 border-gray-400"></div>
                  {/* Box */}
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow font-medium border border-green-300 text-sm text-center max-w-xs">
                    {texte}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Informations Complémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Réunions",
                description: "Le Comité de Pilotage se réunit trimestriellement."
              },
              {
                icon: Target,
                title: "Objectifs",
                description: "Mobilisation efficace des ressources internes."
              },
              {
                icon: Shield,
                title: "Gouvernance",
                description: "Approche collégiale et participative."
              },
              {
                icon: Settings,
                title: "Processus",
                description: "Mécanismes de coordination et de suivi."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default OrganisationPage;

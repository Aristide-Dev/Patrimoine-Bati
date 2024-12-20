import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';

const MainMission = () => {
  const missions = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Accroître la mobilisation des ressources internes pour le développement de la Guinée"
    },
    {
      icon: TrendingUp,
      title: "Nos Objectifs",
      description: "Optimiser la collecte des ressources fiscales et douanières"
    },
    {
      icon: Users,
      title: "Notre Approche",
      description: "Une gouvernance collégiale impliquant toutes les parties prenantes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce que nous faisons</h2>
          <p className="text-xl text-gray-600">
            Découvrez notre mission, nos objectifs et notre approche pour le développement durable de la Guinée.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-secondary-100 rounded-full">
                <mission.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{mission.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainMission;

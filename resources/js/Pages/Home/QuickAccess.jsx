import React from 'react';
import { 
  Calculator, 
  Building2, 
  Coins, 
  PiggyBank, 
  Binary 
} from 'lucide-react';

const QuickAccess = () => {
  const directions = [
    {
      icon: Calculator,
      title: "Ressources Fiscales",
      description: "Optimisation de la collecte fiscale",
      href: "/directions/fiscales"
    },
    {
      icon: Building2,
      title: "Ressources Douanières",
      description: "Modernisation des douanes",
      href: "/directions/douanieres"
    },
    {
      icon: Coins,
      title: "Ressources Non Fiscales",
      description: "Diversification des revenus",
      href: "/directions/non-fiscales"
    },
    {
      icon: PiggyBank,
      title: "Maîtrise des Dépenses",
      description: "Gestion des exonérations",
      href: "/directions/depenses"
    },
    {
      icon: Binary,
      title: "Digitalisation",
      description: "Transformation numérique",
      href: "/directions/digitalisation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Directions de Projet</h2>
          <p className="text-xl text-gray-600">Accédez rapidement aux principales initiatives visant à renforcer la mobilisation des ressources.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {directions.map((direction, index) => (
            <a
              key={index}
              href={direction.href}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transform transition duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FEE5E9] mb-4">
                <direction.icon className="w-8 h-8 text-[#C41E3A]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{direction.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{direction.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;

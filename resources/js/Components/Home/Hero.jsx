import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-22037.jpg"
          alt="Conakry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mission d'appui à la mobilisation des ressources internes
          </h1>
          <p className="text-xl mb-8">
            Un Accélérateur de réformes
          </p>
          <div className="flex space-x-4">
            <a
              href="/services"
              className="bg-secondary hover:bg-secondary-600 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Nos Services
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
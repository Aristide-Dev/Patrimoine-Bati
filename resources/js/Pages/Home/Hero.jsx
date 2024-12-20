import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/diversity-people-talk-international-conference-partnership_53876-22037.jpg"
          alt="MAMRI Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mission d'Appui à la Mobilisation des Ressources Internes
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Nous œuvrons à stimuler la mobilisation des ressources internes afin de soutenir une croissance inclusive et un développement durable pour la Guinée. En renforçant les capacités locales, nous contribuons à bâtir une économie résiliente, équitable et tournée vers l’avenir.
          </p>
          <div className="flex space-x-4">
            <a
              href="/about"
              className="bg-primary text-gray-100 hover:text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Découvrir notre mission
            </a>
            <a
              href="/contact"
              className="bg-secondary text-gray-800 hover:text-white hover:bg-secondary-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

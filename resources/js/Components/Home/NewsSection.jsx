import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Réunion du conseil des ministres",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1577017040065-650ee4d43339?w=400",
      excerpt: "Le conseil des ministres s'est réuni ce jour pour discuter des projets de développement territorial."
    },
    {
      id: 2,
      title: "Lancement du programme de décentralisation",
      date: "12 Mars 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
      excerpt: "Un nouveau programme visant à renforcer la gouvernance locale a été lancé."
    },
    {
      id: 3,
      title: "Formation des agents territoriaux",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400",
      excerpt: "Une session de formation pour les agents territoriaux a débuté dans la région de Conakry."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Actualités</h2>
          <a href="/actualites" className="flex items-center text-primary hover:text-[#A01830]">
            Toutes les actualités
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href={`/actualites/${item.id}`}
                  className="text-primary hover:text-[#A01830] font-medium"
                >
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
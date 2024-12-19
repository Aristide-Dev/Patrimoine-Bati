import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "Lancement du programme de digitalisation",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      excerpt: "La MAMRI lance son programme de transformation numérique des régies financières."
    },
    {
      id: 2,
      title: "Atelier sur la mobilisation des ressources",
      date: "12 Mars 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
      excerpt: "Un atelier de formation sur les nouvelles méthodes de mobilisation des ressources."
    },
    {
      id: 3,
      title: "Partenariat avec l'Union Européenne",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
      excerpt: "Signature d'un accord de partenariat pour le renforcement des capacités."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Actualités</h2>
          <a href="/actualites" className="flex items-center text-[#C41E3A] hover:text-[#A01830]">
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
                  className="text-[#C41E3A] hover:text-[#A01830] font-medium"
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

export default LatestNews;
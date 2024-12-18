import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Welcome() {
  return (
    <AppLayout>
      <Head>
        <title>Bienvenue</title>
        <meta name="description" content="Plateforme de services de transport, livraison et paiement" />
      </Head>

      <main>
        {/* Section de présentation (slider, image héros) */}
        <section className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Bienvenue au Ministère ...
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Présentation brève de l’institution, ses missions, etc.
              </p>
              <img src="/images/banniere.jpg" alt="Bannière" className="w-full h-auto rounded shadow" />
            </div>
          </div>
        </section>

        {/* Autres sections (Missions, Actualités, etc.) */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nos Missions</h2>
            <p className="text-gray-700 mb-6">
              Explication de la mission du ministère ...
            </p>
            {/* Liste, cartes, etc. */}
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Actualités</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bouclez sur des actualités dynamiques si nécessaire */}
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-xl font-bold mb-2">Titre actu 1</h3>
                <p className="text-gray-600 mb-2">Description courte ...</p>
                <a href="#" className="text-primary hover:underline">Lire plus</a>
              </div>

              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-xl font-bold mb-2">Titre actu 2</h3>
                <p className="text-gray-600 mb-2">Description ...</p>
                <a href="#" className="text-primary hover:underline">Lire plus</a>
              </div>

              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-xl font-bold mb-2">Titre actu 3</h3>
                <p className="text-gray-600 mb-2">Description ...</p>
                <a href="#" className="text-primary hover:underline">Lire plus</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
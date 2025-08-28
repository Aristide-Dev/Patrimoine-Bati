import React, { useState } from 'react';
import { MapPin, Navigation, ZoomIn, ZoomOut } from 'lucide-react';

export function Map() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full">
      {/* Container de la carte avec effet de profondeur */}
      <div 
        className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.005)' : 'scale(1)',
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : ''
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-10" />

        {/* Carte Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.0007368642982!2d-13.718802400000001!3d9.5086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd10a7ec5db25%3A0xba590feeee4290d0!2sDirection%20G%C3%A9n%C3%A9rale%20du%20Patrimoine%20B%C3%A2ti%20Publique!5e0!3m2!1sfr!2s!4v1739178093817!5m2!1sfr!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />

        {/* Contrôles personnalisés */}
        <div className="absolute top-4 right-4 z-20 space-y-2">
          <button 
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            title="Recentrer la carte"
          >
            <Navigation className="w-5 h-5 text-primary-600" />
          </button>
          <button 
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            title="Zoomer"
          >
            <ZoomIn className="w-5 h-5 text-primary-600" />
          </button>
          <button 
            className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
            title="Dézoomer"
          >
            <ZoomOut className="w-5 h-5 text-primary-600" />
          </button>
        </div>

        {/* Marqueur personnalisé */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center bg-white px-4 py-2 rounded-lg shadow-md">
          <MapPin className="w-5 h-5 text-primary-600 mr-2" />
          <span className="text-sm font-medium text-gray-700">
            Patrimoine Bâti Public
          </span>
        </div>

        {/* Légende */}
        <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
          <p className="text-xs text-gray-600">
            Cliquez sur la carte pour l'agrandir
          </p>
        </div>
      </div>

      {/* Informations complémentaires */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-50 rounded-lg p-4">
          <h4 className="font-medium text-primary-700 mb-1">Accès</h4>
          <p className="text-sm text-gray-600">
            Facilement accessible depuis le centre-ville
          </p>
        </div>
        <div className="bg-primary-50 rounded-lg p-4">
          <h4 className="font-medium text-primary-700 mb-1">Parking</h4>
          <p className="text-sm text-gray-600">
            Parking gratuit disponible sur place
          </p>
        </div>
        <div className="bg-primary-50 rounded-lg p-4">
          <h4 className="font-medium text-primary-700 mb-1">Transport</h4>
          <p className="text-sm text-gray-600">
            Proche des arrêts de bus et taxis
          </p>
        </div>
      </div>
    </div>
  );
} 
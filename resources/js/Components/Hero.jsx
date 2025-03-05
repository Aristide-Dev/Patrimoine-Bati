import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import * as Icons from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        image: 'https://presidence.gov.gn/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-22-at-21.25.55-2550x1434.jpeg',
        title: 'Leadership et Vision',
        subtitle: 'Un engagement fort pour la préservation et la valorisation du patrimoine national.',
        cta1: 'Découvrir notre vision',
        cta2: 'Rencontrez notre équipe',
        ctaLink1: '/vision',
        ctaLink2: '/equipe',
    },
    {
        image: '/images/hero/home.jpg',
        title: 'Infrastructures Modernes',
        subtitle: 'Optimisation des infrastructures pour un développement durable et inclusif.',
        cta1: 'Voir nos projets',
        cta2: 'Nos réalisations',
        ctaLink1: '/projets',
        ctaLink2: '/realisations',
    },
    // {
    //     image: 'https://presidence.gov.gn/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-03-at-19.08.48-2550x1434.jpeg',
    //     title: 'Réhabilitation et Innovation',
    //     subtitle: 'Des solutions innovantes pour la maintenance et l\'amélioration continue.',
    //     cta1: 'Stratégies de réhabilitation',
    //     cta2: 'Normes et standards',
    //     ctaLink1: '/strategie-rehabilitation',
    //     ctaLink2: '/normes-standards',
    // }
];

export const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                fadeEffect={{
                    crossFade: true
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} w-3 h-3"></span>`;
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Image de fond avec transition */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
                                    style={{ 
                                        backgroundImage: `url(${slide.image})`,
                                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                    }}
                                />

                                {/* Overlay avec dégradé */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
                                
                                {/* Contenu */}
                                <div className="relative h-full flex items-center justify-center px-4">
                                    <div className="max-w-5xl mx-auto text-center">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.8, delay: 0.3 }}
                                                    className="space-y-8"
                                                >
                                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                                        {slide.title}
                                                    </h1>
                                                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium">
                                                        {slide.subtitle}
                                                    </p>
                                                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                        <Link 
                                                            href={slide.ctaLink1} 
                                                            className="inline-flex items-center px-8 py-4 
                                                                bg-primary-600 text-white rounded-lg 
                                                                hover:bg-primary-700 transition-all duration-300
                                                                font-semibold shadow-lg transform hover:scale-105
                                                                hover:shadow-xl active:scale-95"
                                                        >
                                                            <Icons.ArrowRight className="mr-2" size={20} />
                                                            {slide.cta1}
                                                        </Link>
                                                        <Link 
                                                            href={slide.ctaLink2} 
                                                            className="inline-flex items-center px-8 py-4 
                                                                bg-white text-primary-800 rounded-lg 
                                                                hover:bg-gray-100 transition-all duration-300
                                                                font-bold shadow-lg transform hover:scale-105
                                                                active:scale-95"
                                                        >
                                                            <Icons.Info className="mr-2" size={20} />
                                                            {slide.cta2}
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Navigation */}
                <div className="absolute inset-y-0 left-4 z-10 flex items-center">
                    <button className="swiper-button-prev w-12 h-12 flex items-center justify-center 
                        rounded-full bg-black/30 hover:bg-black/50 
                        transition-all duration-300 group transform hover:scale-105">
                        <Icons.ChevronLeft className="w-6 h-6 text-white transition-transform 
                            group-hover:-translate-x-0.5" />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-4 z-10 flex items-center">
                    <button className="swiper-button-next w-12 h-12 flex items-center justify-center 
                        rounded-full bg-black/30 hover:bg-black/50 
                        transition-all duration-300 group transform hover:scale-105">
                        <Icons.ChevronRight className="w-6 h-6 text-white transition-transform 
                            group-hover:translate-x-0.5" />
                    </button>
                </div>

                {/* Styles de pagination */}
                <style jsx global>{`
                    .swiper-pagination {
                        bottom: 2rem !important;
                    }
                    .swiper-pagination-bullet {
                        width: 2.5rem !important;
                        height: 3px !important;
                        border-radius: 0 !important;
                        background: rgba(255, 255, 255, 0.3) !important;
                        transition: all 0.3s ease;
                        margin: 0 0.25rem !important;
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        background: white !important;
                        width: 3.5rem !important;
                    }
                    .swiper-button-prev:after,
                    .swiper-button-next:after {
                        display: none;
                    }
                    .swiper-slide {
                        opacity: 0 !important;
                        transition: opacity 0.3s ease-out !important;
                    }
                    .swiper-slide-active {
                        opacity: 1 !important;
                    }
                `}</style>
            </Swiper>
        </section>
    );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
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
        image: '/images/hero/slide1.jpg',
        title: 'Patrimoine Bâti Public',
        subtitle: 'Gérez et valorisez le patrimoine immobilier de l\'État',
        cta1: 'Découvrir nos projets',
        cta2: 'Nos services',
        ctaLink1: '/projects',
        ctaLink2: '/services'
    },
    {
        image: '/images/hero/slide2.jpg',
        title: 'Gestion Immobilière',
        subtitle: 'Une approche moderne de la gestion du patrimoine public',
        cta1: 'Faire une demande',
        cta2: 'En savoir plus',
        ctaLink1: '/demandes',
        ctaLink2: '/about'
    },
    {
        image: '/images/hero/slide3.jpg',
        title: 'Innovation & Efficacité',
        subtitle: 'Des solutions numériques pour une gestion optimale',
        cta1: 'Nos solutions',
        cta2: 'Contactez-nous',
        ctaLink1: '/solutions',
        ctaLink2: '/contact'
    }
];

export const Hero = () => {
    return (
        <section className="relative h-screen">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white"></span>`;
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
                        <div 
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay avec motif */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60">
                                <div className="absolute inset-0 opacity-30" 
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    }}
                                />
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center px-4">
                                <div className="max-w-5xl mx-auto text-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="space-y-6"
                                    >
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                                            {slide.subtitle}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link 
                                                href={slide.ctaLink1} 
                                                className="inline-flex items-center px-8 py-4 
                                                    bg-primary-600 text-white rounded-lg 
                                                    hover:bg-primary-700 transition-all duration-300
                                                    font-semibold shadow-lg transform hover:scale-105
                                                    hover:shadow-primary-600/20 active:scale-95"
                                            >
                                                <Icons.ArrowRight className="mr-2" size={20} />
                                                {slide.cta1}
                                            </Link>
                                            <Link 
                                                href={slide.ctaLink2} 
                                                className="inline-flex items-center px-8 py-4 
                                                    bg-white/10 backdrop-blur-sm border-2 
                                                    border-white text-white rounded-lg 
                                                    hover:bg-white/20 transition-all duration-300
                                                    font-bold shadow-lg transform hover:scale-105
                                                    active:scale-95"
                                            >
                                                <Icons.Info className="mr-2" size={20} />
                                                {slide.cta2}
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-4 z-10 flex items-center">
                    <button className="swiper-button-prev w-12 h-12 flex items-center justify-center 
                        rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 
                        transition-all duration-300 group transform hover:scale-105">
                        <Icons.ChevronLeft className="w-6 h-6 text-white transition-transform 
                            group-hover:-translate-x-0.5" />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-4 z-10 flex items-center">
                    <button className="swiper-button-next w-12 h-12 flex items-center justify-center 
                        rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 
                        transition-all duration-300 group transform hover:scale-105">
                        <Icons.ChevronRight className="w-6 h-6 text-white transition-transform 
                            group-hover:translate-x-0.5" />
                    </button>
                </div>

                {/* Custom Pagination Styles */}
                <style jsx global>{`
                    .swiper-pagination {
                        bottom: 2rem !important;
                    }
                    .swiper-pagination-bullet {
                        width: 2.5rem !important;
                        height: 3px !important;
                        border-radius: 0 !important;
                        background: rgba(255, 255, 255, 0.5) !important;
                        transition: all 0.3s ease;
                        margin: 0 0.25rem !important;
                    }
                    .swiper-pagination-bullet-active {
                        background: white !important;
                        width: 3.5rem !important;
                    }
                    .swiper-button-prev:after,
                    .swiper-button-next:after {
                        display: none;
                    }
                `}</style>
            </Swiper>
        </section>
    );
};

export default Hero;

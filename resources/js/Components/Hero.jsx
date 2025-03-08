import React, { useState, useEffect, useRef } from 'react';
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
        image: '/images/hero/president-velo-kaloum.jpeg',
        title: 'Leadership et Vision',
        subtitle: 'Un engagement fort pour la préservation et la valorisation du patrimoine national.',
        // cta1: 'Découvrir notre vision',
        // cta2: 'Rencontrez notre équipe',
        // ctaLink1: '/vision',
        // ctaLink2: '/equipe',
    },
    {
        image: '/images/hero/home.jpg',
        title: 'Infrastructures Modernes',
        subtitle: 'Optimisation des infrastructures pour un développement durable et inclusif.',
        // cta1: 'Voir nos projets',
        // cta2: 'Nos réalisations',
        // ctaLink1: '/projets',
        // ctaLink2: '/realisations',
    },
    {
        image: '/images/hero/president-cnss.jpg',
        title: 'Excellence Opérationnelle',
        subtitle: 'Modernisation des infrastructures administratives pour un service public de qualité.',
        // cta1: 'Nos réalisations',
        // cta2: 'Découvrir nos services',
        // ctaLink1: '/realisations',
        // ctaLink2: '/services',
    },
    {
        image: '/images/hero/president-bureau.jpg',
        title: 'Vision Présidentielle',
        subtitle: 'Sous le leadership du Président de la République, le Général Mamadi DOUMBOUYA, la modernisation et la valorisation du patrimoine bâti public s\'inscrivent au cœur des priorités nationales pour une Guinée nouvelle.',
        // cta1: 'Notre vision',
        // cta2: 'Grands projets',
        // ctaLink1: '/vision',
        // ctaLink2: '/projets',
    },
    {
        image: '/images/hero/Afrique-de-lOuest-la-Guinee-infrastructures-en-2023.avif',
        title: 'Investissements Stratégiques',
        subtitle: 'Préservation et valorisation des édifices emblématiques de notre nation.',
        // cta1: 'Projets majeurs',
        // cta2: 'Opportunités',
        // ctaLink1: '/projets-majeurs',
        // ctaLink2: '/opportunites',
    }
];

export const Hero = () => {
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef(null);
    const autoplayTimeout = useRef(null);
    const autoplayDuration = 5000; // 5 secondes

    useEffect(() => {
        // Nettoyage du timeout lors du démontage du composant
        return () => {
            if (autoplayTimeout.current) {
                clearTimeout(autoplayTimeout.current);
            }
        };
    }, []);

    // Gestion de la progression de l'autoplay
    useEffect(() => {
        let intervalId;

        if (!isAutoplayPaused && swiperRef.current) {
            setProgress(0);

            intervalId = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + (100 / autoplayDuration) * 100;
                    return newProgress >= 100 ? 0 : newProgress;
                });
            }, 100);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoplayPaused, activeIndex]);

    // Fonction pour mettre en pause/reprendre l'autoplay
    const toggleAutoplay = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            if (isAutoplayPaused) {
                swiperRef.current.swiper.autoplay.start();
            } else {
                swiperRef.current.swiper.autoplay.stop();
            }
            setIsAutoplayPaused(!isAutoplayPaused);
        }
    };

    // Animation variants pour les éléments textuels
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: "easeOut"
            }
        }),
        exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative h-screen overflow-hidden">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1500}
                autoplay={{
                    delay: autoplayDuration,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                    setProgress(0);
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = { swiper };
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Image de fond avec effet parallaxe */}
                                <div
                                    className="absolute inset-0 transition-transform duration-[5s] ease-out"
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                                    }}
                                />

                                {/* Overlay avec dégradé amélioré */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

                                {/* Contenu avec animations séquentielles */}
                                <div className="relative h-full flex items-center justify-center px-6">
                                    <div className="max-w-6xl mx-auto text-center">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="space-y-8"
                                                >
                                                    <motion.h1
                                                        variants={textVariants}
                                                        custom={0}
                                                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                                                    >
                                                        {slide.title}
                                                    </motion.h1>
                                                    <motion.p
                                                        variants={textVariants}
                                                        custom={1}
                                                        className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium"
                                                    >
                                                        {slide.subtitle}
                                                    </motion.p>
                                                    <motion.div
                                                        variants={textVariants}
                                                        custom={2}
                                                        className="flex flex-col sm:flex-row gap-6 justify-center"
                                                    >
                                                        {slide.ctaLink1 && (

                                                            <Link
                                                                href={slide.ctaLink1}
                                                                className="inline-flex items-center px-8 py-4 
                                                                bg-primary-600 text-white rounded-lg 
                                                                hover:bg-primary-700 transition-all duration-300
                                                                font-semibold shadow-lg transform hover:scale-105
                                                                hover:shadow-xl active:scale-95 relative overflow-hidden group"
                                                            >
                                                                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                                                                <Icons.ArrowRight className="mr-2" size={20} />
                                                                <span className="relative z-10">{slide.cta1}</span>
                                                            </Link>
                                                        )}
                                                        {slide.ctaLink2 && (
                                                            <Link
                                                                href={slide.ctaLink2}
                                                                className="inline-flex items-center px-8 py-4 
                                                                bg-white/10 backdrop-blur-sm text-white border border-white/30
                                                                rounded-lg hover:bg-white/20 transition-all duration-300
                                                                font-semibold shadow-lg transform hover:scale-105
                                                                active:scale-95"
                                                            >
                                                                <Icons.Info className="mr-2" size={20} />
                                                                {slide.cta2}
                                                            </Link>
                                                        )}
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Navigation avec animations améliorées */}
                <div className="absolute inset-y-0 left-6 z-10 flex items-center">
                    <button
                        className="swiper-button-prev w-14 h-14 flex items-center justify-center 
                            rounded-full bg-black/20 backdrop-blur-sm hover:bg-primary-600/70
                            transition-all duration-300 group transform hover:scale-105
                            border border-white/20 hover:border-white/50"
                        aria-label="Slide précédent"
                    >
                        <Icons.ChevronLeft className="w-6 h-6 text-white transition-transform 
                            group-hover:-translate-x-0.5" />
                    </button>
                </div>

                <div className="absolute inset-y-0 right-6 z-10 flex items-center">
                    <button
                        className="swiper-button-next w-14 h-14 flex items-center justify-center 
                            rounded-full bg-black/20 backdrop-blur-sm hover:bg-primary-600/70
                            transition-all duration-300 group transform hover:scale-105
                            border border-white/20 hover:border-white/50"
                        aria-label="Slide suivant"
                    >
                        <Icons.ChevronRight className="w-6 h-6 text-white transition-transform 
                            group-hover:translate-x-0.5" />
                    </button>
                </div>

                {/* Contrôles supplémentaires: Bouton Pause/Play avec indicateur de progression */}
                <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
                    {/* Indicateur de slide actif/total */}
                    <div className="hidden md:flex items-center justify-center px-4 py-2 
                        bg-black/30 backdrop-blur-sm rounded-full text-white
                        border border-white/20">
                        <span className="font-medium">{activeIndex + 1}</span>
                        <span className="mx-1">/</span>
                        <span>{slides.length}</span>
                    </div>

                    {/* Bouton Pause/Play avec animation circulaire */}
                    <button
                        onClick={toggleAutoplay}
                        className="relative w-14 h-14 
                            bg-black/30 backdrop-blur-sm rounded-full 
                            flex items-center justify-center
                            hover:bg-primary-600/70 transition-all duration-300
                            border border-white/30 hover:border-white/50"
                        aria-label={isAutoplayPaused ? "Reprendre le diaporama" : "Mettre en pause le diaporama"}
                    >
                        {/* Cercle de progression d'autoplay */}
                        {!isAutoplayPaused && (
                            <svg className="absolute w-full h-full" viewBox="0 0 44 44">
                                <circle
                                    cx="22"
                                    cy="22"
                                    r="20"
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.2)"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="22"
                                    cy="22"
                                    r="20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="126"
                                    strokeDashoffset={126 - (126 * progress) / 100}
                                    transform="rotate(-90 22 22)"
                                    style={{ transition: "stroke-dashoffset 100ms linear" }}
                                />
                            </svg>
                        )}

                        {isAutoplayPaused ? (
                            <Icons.Play className="w-6 h-6 text-white transition-transform" />
                        ) : (
                            <Icons.Pause className="w-6 h-6 text-white transition-transform" />
                        )}
                    </button>
                </div>

                {/* Barre de progression */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                    <motion.div
                        className="h-full bg-primary-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>

                {/* Styles de pagination améliorés */}
                <style jsx>{`
                    .swiper-pagination {
                        bottom: 2.5rem !important;
                    }
                    .swiper-pagination-bullet {
                        width: 2.5rem !important;
                        height: 4px !important;
                        border-radius: 2px !important;
                        background: rgba(255, 255, 255, 0.3) !important;
                        transition: all 0.5s ease;
                        margin: 0 0.35rem !important;
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        background: var(--color-primary-600, #2563eb) !important;
                        width: 4rem !important;
                    }
                    .swiper-button-prev:after,
                    .swiper-button-next:after {
                        display: none;
                    }
                    .swiper-slide {
                        opacity: 0 !important;
                        transition: opacity 0.5s ease-out !important;
                    }
                    .swiper-slide-active {
                        opacity: 1 !important;
                    }
                    
                    @media (max-width: 640px) {
                        .swiper-pagination-bullet {
                            width: 1.5rem !important;
                        }
                        .swiper-pagination-bullet-active {
                            width: 2.5rem !important;
                        }
                    }
                `}</style>
            </Swiper>
        </section>
    );
};

export default Hero;
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import SEO from '@/Components/SEO';
import { Users, Building, Target, Award } from 'lucide-react';

export default function AboutIndex({ seo, meta }) {
  return (
    <AppLayout>
            <SEO 
                title={seo?.title}
                description={seo?.description}
                keywords={seo?.keywords}
                canonical={seo?.canonical}
                type={seo?.type}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Le Patrimoine Bâti Public de Guinée
                            </h1>
                            <p className="text-xl opacity-90 leading-relaxed">
                                Notre mission est d'assurer la gestion, l'entretien et la valorisation 
                                du patrimoine immobilier de l'État guinéen pour servir au mieux 
                                les intérêts de la nation.
                            </p>
        </div>
                    </div>
                </div>

                {/* Navigation interne */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-wrap gap-4">
                            <Link
                                href="/about"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
                            >
                                Présentation
                            </Link>
                            <Link
                                href="/about/historique"
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Historique
                            </Link>
                            <Link
                                href="/about/mot-directrice"
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Mot de la Directrice
                            </Link>
                            <Link
                                href="/about/equipe-gestion"
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Équipe de Gestion
                            </Link>
                            <Link
                                href="/about/gerants"
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium"
                            >
                                Gérants
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Contenu principal */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Mission */}
                        <section className="mb-16">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Notre Mission
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Le Patrimoine Bâti Public (PBP) de Guinée est une institution 
                                    chargée de la gestion, de l'entretien et de la valorisation 
                                    du patrimoine immobilier de l'État guinéen.
                                </p>
        </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Building className="w-8 h-8 text-blue-600" />
                          </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Gestion Immobilière
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Gestion optimale du patrimoine immobilier de l'État
                                    </p>
                        </div>

                                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Target className="w-8 h-8 text-green-600" />
                      </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Valorisation
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Mise en valeur des biens immobiliers publics
                                    </p>
                  </div>
                  
                                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Service Public
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Amélioration des conditions de travail des agents
                                    </p>
                  </div>
                  
                                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Excellence
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Recherche constante de l'excellence opérationnelle
                                    </p>
            </div>
        </div>
      </section>

                        {/* Valeurs */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                                Nos Valeurs
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Transparence
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nous nous engageons à maintenir la transparence dans toutes 
                                        nos opérations et à rendre compte de notre gestion de manière 
                                        claire et accessible.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Efficacité
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Notre objectif est d'optimiser l'utilisation des ressources 
                                        publiques et d'assurer une gestion efficace du patrimoine 
                                        immobilier de l'État.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Innovation
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nous adoptons des approches innovantes et modernes pour 
                                        améliorer continuellement nos services et notre gestion 
                                        du patrimoine.
                                    </p>
        </div>
        
                                <div className="bg-white p-8 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        Engagement
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nous sommes profondément engagés envers la mission de 
                                        service public et l'amélioration des conditions de vie 
                                        des citoyens guinéens.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                Contactez-nous
          </h2>
                            <p className="text-blue-100 mb-6">
                                Pour toute question concernant nos services ou le patrimoine bâti public
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Nous Contacter
                                </Link>
                                <Link
                                    href="/espace-client/formulaire"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Faire une Demande
                                </Link>
          </div>
      </section>
                    </div>
                </div>
            </div>
    </AppLayout>
  );
}
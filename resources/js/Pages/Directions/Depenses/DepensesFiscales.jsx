import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
    FileCheck, Calculator, Shield, Settings, CheckCircle, Users, Database, FileX, Lock
} from 'lucide-react';

const MaitriseDepensesPage = () => {
    const content = {
        overview: {
            title: "Maîtrise des Dépenses Fiscales et Apurement des Arriérés",
            description: "La Direction de Projet vise à moderniser les administrations fiscales et douanières, tout en rationalisant les dépenses fiscales et en apurant les arriérés."
        },
        stats: {
            depensesFiscales: [
                { year: "2017", total: "2 629,6", partRecettes: "21,70%", partPIB: "2,5%" },
                { year: "2018", total: "2 839", partRecettes: "21,36%", partPIB: "---" }
            ],
            arrieres: [
                { direction: "DNI", year: "2017", amount: "2670" },
                { direction: "DGD", year: "2018", amount: "3157" }
            ]
        },
        objectives: [
            {
                title: "Rationalisation",
                description: "Optimiser les dépenses fiscales pour réduire le manque à gagner",
                icon: Calculator
            },
            {
                title: "Apurement",
                description: "Gestion efficace des arriérés fiscaux",
                icon: FileCheck
            },
            {
                title: "Modernisation",
                description: "Amélioration des procédures d'octroi et de suivi",
                icon: Settings
            },
            {
                title: "Transparence",
                description: "Renforcement du reporting et de la gouvernance",
                icon: Shield
            }
        ]
    };

    return (
        <AppLayout>
            <Head title="Maîtrise des Dépenses - MAMRI" />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary-800 py-20 sm:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        {content.overview.title}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-white/90 mt-4 max-w-3xl mx-auto">
                        {content.overview.description}
                    </p>
                </div>
            </div>

            {/* Statistiques */}
            <section className="py-10 sm:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Chiffres Clés
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.stats.depensesFiscales.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 rounded-xl p-6 shadow-lg text-center"
                            >
                                <h3 className="text-lg font-bold text-gray-900">{stat.year}</h3>
                                <p className="text-primary font-semibold text-2xl">{stat.total} Milliards GNF</p>
                                <p className="text-gray-600">Part Recettes : {stat.partRecettes}</p>
                                <p className="text-gray-600">Part PIB : {stat.partPIB}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Section Mécanismes Juridiques */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Mécanismes Juridiques</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dispositifs légaux pour la gestion des arriérés fiscaux
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Entente de Règlement",
                                description: "Accord amiable pour le paiement échelonné des dettes fiscales",
                                icon: FileCheck
                            },
                            {
                                title: "Avis à Tiers Détenteur",
                                description: "Procédure de recouvrement auprès des tiers débiteurs",
                                icon: Users
                            },
                            {
                                title: "Saisie-Vente",
                                description: "Procédure d'exécution forcée sur les biens du débiteur",
                                icon: Shield
                            },
                            {
                                title: "Hypothèques Légales",
                                description: "Garantie sur les biens immobiliers du contribuable",
                                icon: Database
                            },
                            {
                                title: "Fermeture Administrative",
                                description: "Mesure conservatoire des locaux professionnels",
                                icon: Lock
                            },
                            {
                                title: "Admission en Non-Valeur",
                                description: "Procédure d'apurement des créances irrécouvrables",
                                icon: FileX
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <item.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Analyse des Dépenses Fiscales */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Analyse des Dépenses Fiscales</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Impact et évolution des dépenses fiscales sur l'économie nationale
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Graphique des dépenses */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 bg-gray-50">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Évolution 2017-2018</h3>
                                <p className="text-gray-600">Montant total des dépenses fiscales</p>
                            </div>
                            <div className="p-6">
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                                                2017
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold inline-block text-primary">
                                                2629,6 Mds GNF
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style={{ width: '92%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                </div>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/10">
                                                2018
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold inline-block text-primary">
                                                2839 Mds GNF
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style={{ width: '98%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Statistiques détaillées */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 bg-gray-50">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Impact sur les Recettes</h3>
                                <p className="text-gray-600">Part des dépenses fiscales dans les recettes totales</p>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <p className="text-sm text-gray-600">Part des Recettes 2017</p>
                                        <p className="text-2xl font-bold text-primary">21,70%</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <p className="text-sm text-gray-600">Part des Recettes 2018</p>
                                        <p className="text-2xl font-bold text-primary">21,36%</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <p className="text-sm text-gray-600">Part du PIB 2017</p>
                                        <p className="text-2xl font-bold text-primary">2,5%</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <p className="text-sm text-gray-600">Part du PIB 2018</p>
                                        <p className="text-2xl font-bold text-gray-400">---</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Partenariats */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Partenariats et Soutiens</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Collaboration avec nos partenaires pour le renforcement des capacités
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Union Européenne</h3>
                            <p className="text-gray-600 mb-6">
                                Projet d'appui pour le renforcement des capacités des cadres du ministère du Budget
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900">Formation Technique</p>
                                        <p className="text-gray-600">Évaluation des dépenses fiscales</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900">Support Méthodologique</p>
                                        <p className="text-gray-600">Rédaction des rapports d'évaluation</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">FERDI</h3>
                            <p className="text-gray-600 mb-6">
                                Assistance technique pour l'évaluation et l'analyse des dépenses fiscales
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900">Expertise Technique</p>
                                        <p className="text-gray-600">Analyse des impacts économiques</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
                                    <div>
                                        <p className="font-medium text-gray-900">Renforcement des Capacités</p>
                                        <p className="text-gray-600">Formation des cadres du BSD</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectifs */}
            <section className="py-10 sm:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                        Nos Objectifs
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.objectives.map((objective, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
                            >
                                <objective.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900">{objective.title}</h3>
                                <p className="text-sm text-gray-600">{objective.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-10 sm:py-16 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Ensemble pour une meilleure gestion fiscale
                    </h2>
                    <p className="text-sm sm:text-lg text-white/90 mb-8">
                        Découvrez comment collaborer pour optimiser la gestion des dépenses fiscales.
                    </p>
                    <a
                        href="/contact"
                        className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all"
                    >
                        Nous Contacter
                    </a>
                </div>
            </section>
        </AppLayout>
    );
};

export default MaitriseDepensesPage;

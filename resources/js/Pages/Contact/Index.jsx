import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
    MapPin, Phone, Mail, Clock, Globe,
    Send, MessageSquare, Users, ChevronRight,
    Facebook, Twitter, Linkedin, Youtube
} from 'lucide-react';

const ContactPage = () => {
    const contactInfo = {
        address: "Manquepas, Avenue de la République (942 Av). Conakry- République de Guinée",
        phone: "+224 629001379",
        email: "contacts@mamri.gov.gn",
        hours: {
            weekdays: "8h30 - 17h00",
        },
        social: [
            { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/MAMRIGN" },
            { name: "Twitter", icon: Twitter, url: "https://twitter.com/MAMRI_GN" },
            { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/mamri-r%C3%A9publique-de-guin%C3%A9e/" },
            { name: "Youtube", icon: Youtube, url: "https://www.youtube.com/channel/UC-_gdoMNdf_aG_3HMi6QCfA" },
        ]
    };

    return (
        <AppLayout>
            <Head title="Contact - MAMRI" />

            {/* Hero Section Améliorée */}
            <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577017040065-650ee4d43339')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            La Mission d'Appui à la Mobilisation des Ressources Internes (MAMRI) est à votre écoute pour intensifier et accélérer la dynamique de réformes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Principale */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulaire */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h2>
                                <p className="text-gray-600">
                                    Nous sommes là pour répondre à vos questions et collaborer sur vos projets.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Votre nom"
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Adresse e-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Votre e-mail"
                                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Sujet de votre message"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Votre message"
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                                >
                                    Envoyer le message
                                    <Send className="ml-2 w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Informations de contact */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse</h4>
                                            <p className="text-gray-600">{contactInfo.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
                                            <p className="text-gray-600">{contactInfo.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                                            <p className="text-gray-600">{contactInfo.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="font-medium">Lundi - Vendredi</span>
                                        <span className="text-primary">{contactInfo.hours.weekdays}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
                                <div className="flex space-x-4">
                                    {contactInfo.social.map((platform, idx) => (
                                        <a
                                            key={idx}
                                            href={platform.url}
                                            className="p-3 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <platform.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section Carte */}
            {/* Section Carte Interactive */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Localisation</h2>
                            <p className="text-gray-600">Rendez-nous visite dans nos locaux à Sandervalia</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Carte */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] hover:shadow-xl transition-shadow">
                                    <iframe
                                        title="Localisation MAMRI"
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3048.607615927253!2d-13.706586000000001!3d9.507902999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzAnMjguNSJOIDEzwrA0MicyMy43Ilc!5e1!3m2!1sen!2s!4v1738234704663!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen="1"
                                        loading="lazy"
                                        className="hover:opacity-90 transition-opacity"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Informations de localisation */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Comment nous trouver</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Adresse complète</h4>
                                            <p className="text-gray-600">Manquepas, Avenue de la République (942 Av). Conakry- République de Guinée</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">Heures d'ouverture</h4>
                                            <p className="text-gray-600">Lundi - Vendredi : 8h30 - 17h00</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-gray-900 mb-2">Points de repère</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                <span>150m de l’Hopital Ignace Deen</span>
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                <span>50m du Boulevard Diallo Telly</span>
                                            </li>
                                            <li className="flex items-center text-gray-600">
                                                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                                <span>SAHAM Assurance</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <a
                                        href="https://maps.app.goo.gl/9c3HeroC2FJXGHCP9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        Ouvrir dans Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            La MAMRI a pour mission d'intensifier et accélérer la dynamique de réformes pour accroître rapidement, significativement et durablement la mobilisation des ressources internes, en vue du financement des dépenses d'investissement et de la politique nationale de partage de la prospérité.
                        </p>
                        {/* <a 
              href="/about"
              className="inline-flex items-center text-primary hover:text-primary-700 font-medium"
            >
              En savoir plus
              <ArrowRight className="ml-2 w-5 h-5" />
            </a> */}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
};

export default ContactPage;
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { Card } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Button } from '@/Components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InputError from '@/Components/InputError';
import { Map } from '@/Components/ui/map';
import { DGPBP } from '@/utils/dgpbp';

export default function Contact({ meta }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.store'), {
      onSuccess: () => reset(),
    });
  };

  // Données SEO optimisées pour la page Contact
  const seoData = {
    title: "Contact PBP - Patrimoine Bâti Public de Guinée",
    description: "Contactez Le Patrimoine Bâti Public de Guinée. Adresse, téléphone, email et formulaire de contact pour vos demandes et questions sur le patrimoine immobilier public.",
    keywords: "contact PBP, téléphone PBP, email PBP, adresse PBP, Conakry Guinée, formulaire contact patrimoine public, service client PBP, coordonnées direction générale",
    canonical: "/contact",
    type: "ContactPage"
  };

  return (
    <AppLayout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      type={seoData.type}
    >
      <Head>
        
        {/* Schema.org JSON-LD pour la page Contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact PBP - Patrimoine Bâti Public de Guinée",
            "description": "Contactez Le Patrimoine Bâti Public de Guinée. Adresse, téléphone, email et formulaire de contact pour vos demandes et questions sur le patrimoine immobilier public.",
            "url": "/contact",
            "mainEntity": {
              "@type": "GovernmentOrganization",
              "name": "PBP - Patrimoine Bâti Public",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": DGPBP.contactInfo.address || "Conakry",
                "addressLocality": "Conakry",
                "addressRegion": "Conakry",
                "addressCountry": "GN"
              },
              "telephone": DGPBP.contactInfo.phones?.[0] || "+224",
              "email": DGPBP.contactInfo.emails?.[0] || "contact@dgpbp.gov.gn",
              "openingHours": "Mo-Fr 08:00-17:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": DGPBP.contactInfo.phones?.[0] || "+224",
                "email": DGPBP.contactInfo.emails?.[0] || "contact@dgpbp.gov.gn",
                "contactType": "customer service",
                "areaServed": "GN",
                "availableLanguage": ["fr", "fr-GN"]
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "/contact"
                }
              ]
            },
            "publisher": {
              "@type": "GovernmentOrganization",
              "name": "PBP - SAU",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/logo/pbp_sau_logo_transparent_blanc.png"
              }
            }
          })}
        </script>

        {/* Schema.org pour l'organisation avec contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "PBP - Patrimoine Bâti Public",
            "url": "/",
            "logo": {
              "@type": "ImageObject",
              "url": "/images/logo/pbp_sau_logo_transparent_blanc.png",
              "caption": "Logo PBP - SAU"
            },
            "description": "Patrimoine Bâti Public de Guinée - Gestion du patrimoine immobilier de l'État",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": DGPBP.contactInfo.address || "Conakry",
              "addressLocality": "Conakry",
              "addressRegion": "Conakry",
              "postalCode": "",
              "addressCountry": "GN"
            },
            "telephone": DGPBP.contactInfo.phones || ["+224"],
            "email": DGPBP.contactInfo.emails || ["contact@dgpbp.gov.gn"],
            "openingHours": [
              "Mo 08:00-17:00",
              "Tu 08:00-17:00", 
              "We 08:00-17:00",
              "Th 08:00-17:00",
              "Fr 08:00-17:00"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": DGPBP.contactInfo.phones?.[0] || "+224",
                "contactType": "customer service",
                "areaServed": "GN",
                "availableLanguage": ["fr", "fr-GN"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              },
              {
                "@type": "ContactPoint",
                "email": DGPBP.contactInfo.emails?.[0] || "contact@dgpbp.gov.gn",
                "contactType": "customer service",
                "areaServed": "GN",
                "availableLanguage": ["fr", "fr-GN"]
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 9.509167,
              "longitude": -13.712222
            },
            "sameAs": []
          })}
        </script>

        {/* Schema.org pour le formulaire de contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Formulaire de contact PBP - SAU",
            "description": "Formulaire de contact pour envoyer un message à Le Patrimoine Bâti Public de Guinée",
            "url": "/contact",
            "mainEntity": {
              "@type": "ContactForm",
              "name": "Formulaire de contact PBP - SAU",
              "description": "Envoyez-nous un message via ce formulaire",
              "target": "/contact",
              "httpMethod": "POST",
              "encodingType": "application/x-www-form-urlencoded"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "/contact"
                }
              ]
            }
          })}
        </script>
      </Head>

        {/* Hero Section amélioré */}
        <section className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden" aria-label="En-tête de la page contact">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577017040065-650ee4d43339')] bg-cover bg-center opacity-10" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" aria-hidden="true"></div>
            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                    <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Nous sommes à votre écoute pour toute question ou demande d'information.
                    </p>
                </div>
            </div>
        </section>

        <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Carte avec ombre et arrondi */}
            <section className="mb-16 rounded-xl overflow-hidden shadow-lg" aria-label="Localisation PBP - SAU" itemScope itemType="https://schema.org/Place">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 px-6 pt-6">Notre localisation</h2>
            <Map />
            <meta itemProp="name" content="PBP - Patrimoine Bâti Public" />
            <meta itemProp="address" content={DGPBP.contactInfo.address || "Conakry, Guinée"} />
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
            {/* Informations de contact avec design amélioré */}
            <aside className="lg:col-span-1" aria-label="Informations de contact">
                <Card className="p-8 h-full bg-gradient-to-b from-gray-50 to-white" itemScope itemType="https://schema.org/ContactPoint">
                <div className="space-y-8">
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Nos coordonnées</h3>
                    <p className="mt-2 text-base text-gray-600">
                        N'hésitez pas à nous contacter par l'un des moyens suivants :
                    </p>
                    </div>

                    <div className="space-y-6" role="list" aria-label="Coordonnées de contact">
                    <div className="flex items-start group" role="listitem">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors" aria-hidden="true">
                        <MapPin className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Adresse</p>
                        <p className="mt-1 text-sm text-gray-600" itemProp="address">
                            {DGPBP.contactInfo.address}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group" role="listitem">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors" aria-hidden="true">
                        <Phone className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Téléphone</p>
                        <p className="flex flex-col mt-1 text-sm text-gray-600">
                            {DGPBP.contactInfo.phones.map((phone, index) => (
                                <a key={index} href={`tel:${phone}`} className="hover:text-primary-600 transition-colors" itemProp="telephone">
                                    {phone}
                                </a>
                            ))}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group" role="listitem">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors" aria-hidden="true">
                        <Mail className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="mt-1 text-sm text-gray-600 flex flex-col">
                            {DGPBP.contactInfo.emails.map((email, index) => (
                                <a key={index} href={`mailto:${email}`} className="hover:text-primary-600 transition-colors" itemProp="email">
                                    {email}
                                </a>
                            ))}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group" role="listitem">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors" aria-hidden="true">
                        <Clock className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Horaires d'ouverture</p>
                        <p className="mt-1 text-sm text-gray-600" itemProp="hoursAvailable">
                            Lundi - Vendredi : 8h00 - 17h00
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </Card>
            </aside>

            {/* Formulaire de contact avec design amélioré */}
            <section className="lg:col-span-2" aria-label="Formulaire de contact">
                <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate role="form" aria-label="Formulaire de contact PBP - SAU">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="nom" required className="text-gray-700">Nom complet</Label>
                        <Input
                        id="nom"
                        type="text"
                        value={data.nom}
                        onChange={e => setData('nom', e.target.value)}
                        className="mt-1 focus:ring-primary-500 focus:border-primary-500"
                        required
                        aria-describedby={errors.nom ? "nom-error" : undefined}
                        aria-invalid={!!errors.nom}
                        />
                        <InputError message={errors.nom} className="mt-2" id="nom-error" />
                    </div>

                    <div>
                        <Label htmlFor="email" required className="text-gray-700">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="mt-1 focus:ring-primary-500 focus:border-primary-500"
                        required
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={!!errors.email}
                        />
                        <InputError message={errors.email} className="mt-2" id="email-error" />
                    </div>
                    </div>

                    <div>
                    <Label htmlFor="sujet" required className="text-gray-700">Sujet</Label>
                    <Input
                        id="sujet"
                        type="text"
                        value={data.sujet}
                        onChange={e => setData('sujet', e.target.value)}
                        className="mt-1 focus:ring-primary-500 focus:border-primary-500"
                        required
                        aria-describedby={errors.sujet ? "sujet-error" : undefined}
                        aria-invalid={!!errors.sujet}
                    />
                    <InputError message={errors.sujet} className="mt-2" id="sujet-error" />
                    </div>

                    <div>
                    <Label htmlFor="message" required className="text-gray-700">Message</Label>
                    <textarea
                        id="message"
                        rows={6}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                        required
                        aria-describedby={errors.message ? "message-error" : undefined}
                        aria-invalid={!!errors.message}
                        placeholder="Décrivez votre demande ou question..."
                    />
                    <InputError message={errors.message} className="mt-2" id="message-error" />
                    </div>

                    <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors"
                        disabled={processing}
                        aria-describedby="submit-status"
                    >
                        {processing ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                    <div id="submit-status" className="sr-only" aria-live="polite">
                        {processing && "Envoi du message en cours, veuillez patienter..."}
                    </div>
                    </div>
                </form>
                </Card>
            </section>
            </div>
        </main>
    </AppLayout>
  );
}

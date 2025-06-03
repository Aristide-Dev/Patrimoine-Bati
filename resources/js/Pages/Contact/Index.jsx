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

  return (
    <AppLayout>
      <Head title={meta.title} />

        {/* Hero Section amélioré */}
        <div className="relative bg-gradient-to-r from-primary to-primary-800 py-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577017040065-650ee4d43339')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contactez-nous</h1>
                    <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Nous sommes à votre écoute pour toute question ou demande d'information.
                    </p>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Carte avec ombre et arrondi */}
            <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 px-6 pt-6">Notre localisation</h2>
            <Map />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
            {/* Informations de contact avec design amélioré */}
            <div className="lg:col-span-1">
                <Card className="p-8 h-full bg-gradient-to-b from-gray-50 to-white">
                <div className="space-y-8">
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">Nos coordonnées</h3>
                    <p className="mt-2 text-base text-gray-600">
                        N'hésitez pas à nous contacter par l'un des moyens suivants :
                    </p>
                    </div>

                    <div className="space-y-6">
                    <div className="flex items-start group">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <MapPin className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Adresse</p>
                        <p className="mt-1 text-sm text-gray-600">
                            { DGPBP.contactInfo.address }
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <Phone className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Téléphone</p>
                        <p className="flex flex-col mt-1 text-sm text-gray-600">
                            {DGPBP.contactInfo.phones.map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <Mail className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="mt-1 text-sm text-gray-600 flex flex-col">
                            {DGPBP.contactInfo.emails.map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <Clock className="h-6 w-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">Horaires d'ouverture</p>
                        <p className="mt-1 text-sm text-gray-600">
                            Lundi - Vendredi : 8h00 - 17h00
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </Card>
            </div>

            {/* Formulaire de contact avec design amélioré */}
            <div className="lg:col-span-2">
                <Card className="p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="nom" required className="text-gray-700">Nom complet</Label>
                        <Input
                        id="nom"
                        type="text"
                        value={data.nom}
                        onChange={e => setData('nom', e.target.value)}
                        className="mt-1 focus:ring-primary-500 focus:border-primary-500"
                        />
                        <InputError message={errors.nom} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="email" required className="text-gray-700">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="mt-1 focus:ring-primary-500 focus:border-primary-500"
                        />
                        <InputError message={errors.email} className="mt-2" />
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
                    />
                    <InputError message={errors.sujet} className="mt-2" />
                    </div>

                    <div>
                    <Label htmlFor="message" required className="text-gray-700">Message</Label>
                    <textarea
                        id="message"
                        rows={6}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                    />
                    <InputError message={errors.message} className="mt-2" />
                    </div>

                    <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors"
                        disabled={processing}
                    >
                        {processing ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                    </div>
                </form>
                </Card>
            </div>
            </div>
        </div>
    </AppLayout>
  );
}

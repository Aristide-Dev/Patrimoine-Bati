import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Hero from './Home/Hero';
import MainMission from './Home/MainMission';
import QuickAccess from './Home/QuickAccess';
import LatestNews from './Home/LatestNews';

export default function Welcome() {
  return (
    <AppLayout>
      <Head 
       title="Bienvenue"
       description="Plateforme de services de transport, livraison et paiement"
      />


      <Hero />
      <MainMission />
      <QuickAccess />
      <LatestNews />

      
    </AppLayout>
  );
}
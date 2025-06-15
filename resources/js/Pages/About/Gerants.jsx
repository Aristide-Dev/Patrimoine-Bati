import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { motion } from "framer-motion";
import { Building2, MapPin, Users, Phone, Mail, ArrowRight, FileText, Target, Shield, Award, Calendar, Star, UserCheck } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Progress } from "@/Components/ui/progress";
import { ScrollArea } from "@/Components/ui/scroll-area";

export default function Gerants() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gerantsData, setGerantsData] = useState([]);
  const [statistiquesGlobales, setStatistiquesGlobales] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsResponse = await axios.get('/api/property-managers/statistics');
        console.log('Stats Response:', statsResponse.data);

        // Mise à jour des statistiques globales
        setStatistiquesGlobales([
          {
            icon: Building2,
            titre: "Bâtiments Gérés",
            valeur: statsResponse.data.total_batiments.toString(),
            subtitle: "Total sur Conakry",
            gradient: "bg-emerald-500",
            iconColor: "text-emerald-600"
          },
          {
            icon: Users,
            titre: "Locataires",
            valeur: statsResponse.data.total_locataires.toString(),
            subtitle: "Occupants actifs",
            gradient: "bg-blue-500",
            iconColor: "text-blue-600"
          },
          {
            icon: Award,
            titre: "Taux d'Occupation",
            valeur: `${Math.round(statsResponse.data.taux_occupation_moyen)}%`,
            subtitle: "Moyenne générale",
            gradient: "bg-primary-500",
            iconColor: "text-primary-600"
          },
          {
            icon: Target,
            titre: "Communes",
            valeur: statsResponse.data.par_commune.length.toString(),
            subtitle: "Gérances communales",
            gradient: "bg-orange-500",
            iconColor: "text-orange-600"
          }
        ]);

        // Transformation des données des gérants
        const gerants = statsResponse.data.par_commune.map(commune => ({
          commune: commune.commune,
          description: commune.description,
          responsable: commune.responsable,
          photo: commune.photo,
          statistiques: commune.statistiques
        }));

        setGerantsData(gerants);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
        setError("Impossible de charger les données. Veuillez réessayer plus tard.");
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            <p className="text-gray-600">Chargement des données...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-lg">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Oups !</h3>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const GerantCard = ({ gerant }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={gerant.photo || '/images/our-team/agent.png'}
                alt={`Gérant de ${gerant.commune}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/10"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{gerant.responsable.nom}</h3>
              <p className="text-sm text-gray-500">{gerant.responsable.matricule}</p>
            </div>
          </div>
          <Badge variant={gerant.responsable.is_active ? "success" : "secondary"}>
            {gerant.responsable.is_active ? "Actif" : "Inactif"}
          </Badge>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{gerant.statistiques?.batiments || '0'}</div>
            <div className="text-sm text-gray-500">Bâtiments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{gerant.statistiques?.locataires || '0'}</div>
            <div className="text-sm text-gray-500">Locataires</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{gerant.statistiques?.taux_occupation || '0%'}</div>
            <div className="text-sm text-gray-500">Occupation</div>
          </div>
        </div>

        {/* Détails */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Building2 className="w-4 h-4 mr-2 text-primary" />
            {gerant.responsable.poste}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <UserCheck className="w-4 h-4 mr-2 text-primary" />
            {gerant.responsable.poste}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {gerant.commune}
          </div>
          {gerant.responsable.telephone && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              {gerant.responsable.telephone}
            </div>
          )}
        </div>

        {/* Description */}
        {gerant.description && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">{gerant.description}</p>
          </div>
        )}
      </div>
    </div>
  );

  const GerantSection = ({ title, description, gerants }) => (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gerants.map((gerant) => (
            <motion.div
              key={gerant.responsable.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GerantCard gerant={gerant} />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const StatCard = ({ icon: Icon, titre, valeur, subtitle, gradient, iconColor }) => (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative h-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center">
          <div className={`p-4 rounded-2xl ${gradient} bg-opacity-10 mr-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{valeur}</h3>
            <p className="text-gray-700 font-semibold text-lg">{titre}</p>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout>
      <Head>
        <title>Gérants Immobiliers - DGPBP | Direction Générale du Patrimoine Bâti Public</title>
        <meta name="description" content="Découvrez les gérants immobiliers des communes de Conakry et des bâtiments spéciaux responsables de la gestion du patrimoine bâti public." />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: "url('/images/about03.jpg')"}}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/30 to-black/90" />
        
        {/* Motifs décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight"
            >
              Gérants
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-blue-100 ml-4">
                Immobiliers
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-6 text-white/80 mb-12"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Building2 className="h-5 w-5 text-primary-300" />
                <span>Gestion Communale</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Star className="h-5 w-5 text-amber-300" />
                <span>Bâtiments Spéciaux</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span>Conakry</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistiques Globales */}
      <section className="py-24 -mt-16 relative z-20 bg-gradient-to-br from-white via-blue-50/50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statistiquesGlobales.map((stat, index) => (
              <motion.div key={index} variants={fadeIn}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Liste des Gérants */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Bâtiments Spéciaux */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold text-gray-900 mb-6 flex items-center"
            >
              <Star className="w-8 h-8 text-amber-500 mr-3" />
              Bâtiments Spéciaux
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
            >
              {gerantsData
                .filter(gerant => ['R2000', 'Moussoudougou', 'Fria Base', 'CPL'].includes(gerant.commune))
                .map((gerant, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <GerantCard gerant={gerant} />
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>

          {/* Section Communes */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nos Gérants
              <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
                Communaux
              </span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Découvrez les responsables de la gestion du patrimoine immobilier public dans chaque commune de Conakry
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gerantsData
              .filter(gerant => !['R2000', 'Moussoudougou', 'Fria Base', 'CPL'].includes(gerant.commune))
              .map((gerant, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <GerantCard gerant={gerant} />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-primary-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Motifs décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Rejoignez Notre
            <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-blue-300">
              Équipe
            </span>
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Nous recherchons des professionnels qualifiés pour assurer la gestion du patrimoine immobilier public
            dans les différentes communes de Conakry
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={route('about.equipe-gestion')}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
              hover:from-primary-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 shadow-xl 
              shadow-primary-700/30 inline-flex items-center group"
            >
              <Users className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Notre Organisation
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={route('about.index')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl 
              font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center group"
            >
              <Building2 className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              À Propos de la DGPBP
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
} 
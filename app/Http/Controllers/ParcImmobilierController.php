<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ParcImmobilierController extends Controller
{
    public function index()
    {
        $statistiques = [
            'totalBiens' => 1254,
            'biensOccupes' => 879,
            'biensDisponibles' => 325,
            'biensEnMaintenance' => 50,
            'tauxOccupation' => 70,
            'valeurTotaleEstimee' => 125000000000,

            'evolutionMensuelle' => [
                'nouveauxBiens' => 12,
                'biensRenovés' => 8,
                'tauxCroissance' => 2.5
            ],

            'batimentsSpeciaux' => [
                [
                    'nom' => 'Résidence 2000',
                    'localisation' => 'Kaloum, Conakry',
                    'surface' => 5000,
                    'capacite' => 200,
                    'tauxOccupation' => 95,
                    'etat' => 'excellent',
                    'valeurEstimee' => 15000000000,
                    'services' => [
                        'Sécurité 24/7',
                        'Parking souterrain',
                        'Espaces verts',
                        'Salle de conférence'
                    ]
                ],
                [
                    'nom' => 'Moussoudougou',
                    'localisation' => 'Matam, Conakry',
                    'surface' => 3500,
                    'capacite' => 150,
                    'tauxOccupation' => 88,
                    'etat' => 'bon',
                    'valeurEstimee' => 8500000000,
                    'services' => [
                        'Gardiennage',
                        'Parking extérieur',
                        'Jardin communautaire'
                    ]
                ],
                [
                    'nom' => 'Fria Base',
                    'localisation' => 'Fria',
                    'surface' => 4200,
                    'capacite' => 180,
                    'tauxOccupation' => 75,
                    'etat' => 'bon',
                    'valeurEstimee' => 9000000000,
                    'services' => [
                        'Sécurité permanente',
                        'Parking réservé',
                        'Espace récréatif'
                    ]
                ],
                [
                    'nom' => 'Complexe Patrice Lumumba',
                    'localisation' => 'Dixinn, Conakry',
                    'surface' => 6000,
                    'capacite' => 250,
                    'tauxOccupation' => 92,
                    'etat' => 'excellent',
                    'valeurEstimee' => 18000000000,
                    'services' => [
                        'Sécurité renforcée',
                        'Parking multiniveau',
                        'Centre de conférence',
                        'Restaurant'
                    ]
                ]
            ],

            'repartitionParType' => [
                [
                    'nom' => 'Résidences de Fonction',
                    'nombre' => 450,
                    'pourcentage' => 35.9,
                    'color' => 'blue',
                    'surfaceMoyenne' => 120,
                    'tauxOccupation' => 85,
                    'caracteristiques' => [
                        'Sécurité' => '24/7',
                        'Parking' => 'Inclus',
                        'État' => 'Très bon',
                        'Maintenance' => 'Régulière'
                    ]
                ],
                [
                    'nom' => 'Bâtiments Administratifs',
                    'nombre' => 320,
                    'pourcentage' => 25.5,
                    'color' => 'green',
                    'surfaceMoyenne' => 800,
                    'tauxOccupation' => 95,
                    'caracteristiques' => [
                        'Accessibilité' => 'Excellente',
                        'Connectivité' => 'Haut débit',
                        'Climatisation' => 'Centralisée',
                        'Sécurité' => 'Renforcée'
                    ]
                ],
                [
                    'nom' => 'Complexes Spéciaux',
                    'nombre' => 180,
                    'pourcentage' => 14.4,
                    'color' => 'purple',
                    'surfaceMoyenne' => 1500,
                    'tauxOccupation' => 78,
                    'caracteristiques' => [
                        'Usage' => 'Mixte',
                        'Équipements' => 'Premium',
                        'Services' => 'Complets',
                        'Sécurité' => 'Maximum'
                    ]
                ],
                [
                    'nom' => 'Logements Sociaux',
                    'nombre' => 304,
                    'pourcentage' => 24.2,
                    'color' => 'amber',
                    'surfaceMoyenne' => 75,
                    'tauxOccupation' => 98,
                    'caracteristiques' => [
                        'Type' => 'Collectif',
                        'Services' => 'Base',
                        'Entretien' => 'Régulier',
                        'Communauté' => 'Active'
                    ]
                ]
            ],

            'etatBiens' => [
                'excellent' => 425,
                'bon' => 454,
                'moyen' => 285,
                'àRénover' => 90
            ],

            'indicateursPerformance' => [
                'tauxSatisfaction' => 87,
                'indicateursQualite' => [
                    'Sécurité' => 95,
                    'Confort' => 85,
                    'Maintenance' => 82,
                    'Services' => 88
                ]
            ]
        ];

        return Inertia::render('Demandes/ParcImmobilier', [
            'statistiques' => $statistiques
        ]);
    }
} 
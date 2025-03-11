<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ParcImmobilierController extends Controller
{
    public function index()
    {
        // Données enrichies pour les statistiques
        $statistiques = [
            'totalBiens' => 1250,
            'biensOccupes' => 875,
            'biensDisponibles' => 325,
            'biensEnMaintenance' => 50,
            'tauxOccupation' => 70,
            'valeurTotaleEstimee' => 125000000000, // En francs guinéens

            'repartitionParType' => [
                [
                    'nom' => 'Appartements',
                    'nombre' => 450,
                    'pourcentage' => 36,
                    'color' => 'blue',
                    'surfaceMoyenne' => 85,
                    'tauxOccupation' => 82,
                    'nombreEtagesMoyen' => 4,
                    'details' => [
                        'studios' => 120,
                        'deuxPieces' => 180,
                        'troisPieces' => 100,
                        'quatrePieces' => 50
                    ]
                ],
                [
                    'nom' => 'Bureaux',
                    'nombre' => 350,
                    'pourcentage' => 28,
                    'color' => 'green',
                    'surfaceMoyenne' => 150,
                    'tauxOccupation' => 75,
                    'details' => [
                        'openSpace' => 100,
                        'bureauxFermes' => 200,
                        'sallesReunion' => 50
                    ]
                ],
                [
                    'nom' => 'Villas',
                    'nombre' => 250,
                    'pourcentage' => 20,
                    'color' => 'yellow',
                    'surfaceMoyenne' => 200,
                    'tauxOccupation' => 90,
                    'details' => [
                        'r1' => 150,
                        'r2' => 75,
                        'r3Plus' => 25
                    ]
                ],
                [
                    'nom' => 'Magasins',
                    'nombre' => 200,
                    'pourcentage' => 16,
                    'color' => 'purple',
                    'surfaceMoyenne' => 120,
                    'tauxOccupation' => 65,
                    'details' => [
                        'petitsSurfaces' => 80,
                        'moyensSurfaces' => 100,
                        'grandsSurfaces' => 20
                    ]
                ],
            ],

            'repartitionGeographique' => [
                [
                    'nom' => 'Conakry',
                    'nombre' => 500,
                    'pourcentage' => 40,
                    'zones' => [
                        'Kaloum' => 150,
                        'Dixinn' => 100,
                        'Ratoma' => 125,
                        'Matam' => 75,
                        'Matoto' => 50
                    ],
                    'valeurMoyenne' => 150000000,
                    'surfaceTotale' => 45000
                ],
                [
                    'nom' => 'Kindia',
                    'nombre' => 300,
                    'pourcentage' => 24,
                    'zones' => [
                        'Centre-ville' => 150,
                        'Périphérie' => 100,
                        'Zone industrielle' => 50
                    ],
                    'valeurMoyenne' => 85000000,
                    'surfaceTotale' => 35000
                ],
                [
                    'nom' => 'Kankan',
                    'nombre' => 250,
                    'pourcentage' => 20,
                    'zones' => [
                        'Centre-ville' => 125,
                        'Périphérie' => 75,
                        'Zone administrative' => 50
                    ],
                    'valeurMoyenne' => 75000000,
                    'surfaceTotale' => 30000
                ],
                [
                    'nom' => 'Autres régions',
                    'nombre' => 200,
                    'pourcentage' => 16,
                    'details' => [
                        'Boké' => 50,
                        'Labé' => 45,
                        'Mamou' => 40,
                        'Faranah' => 35,
                        'N\'Zérékoré' => 30
                    ],
                    'valeurMoyenne' => 65000000,
                    'surfaceTotale' => 25000
                ],
            ],

            'evolutionMensuelle' => [
                'nouveauxBiens' => 45,
                'biensRenovés' => 15,
                'biensVendus' => 8,
                'demandesReçues' => 120,
                'demandesTraitées' => 95,
                'tauxCroissance' => 3.5,
                'historiqueAnnuel' => [
                    'janvier' => 38,
                    'février' => 42,
                    'mars' => 35,
                    'avril' => 48,
                    'mai' => 52,
                    'juin' => 45,
                    'juillet' => 40,
                    'août' => 38,
                    'septembre' => 45,
                    'octobre' => 50,
                    'novembre' => 48,
                    'décembre' => 45
                ]
            ],

            'tauxAttribution' => 85,
            'surfaceTotale' => 125000,

            'indicateursPerformance' => [
                'delaiMoyenAttribution' => 45, // jours
                'tauxSatisfaction' => 88, // pourcentage
                'tauxRenouvellement' => 15, // pourcentage annuel
                'coutMoyenMaintenance' => 25000000, // francs guinéens par bien
                'dureeOccupationMoyenne' => 3.5, // années
            ],

            'etatBiens' => [
                'excellent' => 250,
                'bon' => 500,
                'moyen' => 350,
                'aRenover' => 150
            ],

            'tendances' => [
                'demandesParZone' => [
                    'Conakry' => 65,
                    'Kindia' => 15,
                    'Kankan' => 12,
                    'Autres' => 8
                ],
                'typesPlusRecherches' => [
                    'Appartements' => 45,
                    'Bureaux' => 30,
                    'Villas' => 15,
                    'Magasins' => 10
                ],
                'evolutionPrix' => [
                    'augmentation' => 5.2, // pourcentage
                    'previsionAnnuelle' => 7.5
                ]
            ],

            'maintenance' => [
                'programmee' => 35,
                'urgente' => 15,
                'preventive' => 25,
                'coutTotal' => 750000000,
                'principauxTypes' => [
                    'Plomberie' => 30,
                    'Électricité' => 25,
                    'Structure' => 15,
                    'Peinture' => 20,
                    'Autres' => 10
                ]
            ]
        ];

        return Inertia::render('Demandes/ParcImmobilier', [
            'statistiques' => $statistiques
        ]);
    }
} 
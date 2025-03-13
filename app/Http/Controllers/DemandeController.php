<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Bien;
use App\Models\TypeBien;
use App\Models\Prefecture;
use App\Models\Commune;
use App\Models\Commodite;

class DemandeController extends Controller
{
    public function formulaire()
    {
        return Inertia::render('Demandes/NewDemande');
        $formData = [
            'typesDemande' => [
                'logement' => 'Logement Administratif',
                'bail' => 'Bail Commercial'
            ],
            'communes' => [
                'Kaloum',
                'Dixinn',
                'Matam',
                'Ratoma',
                'Matoto'
            ],
            'situations' => [
                'Célibataire',
                'Marié(e)',
                'Divorcé(e)',
                'Veuf(ve)'
            ],
            'typesBien' => [
                'logement' => [
                    'Villa',
                    'Appartement',
                    'Studio'
                ],
                'bail' => [
                    'Local Commercial',
                    'Entrepôt',
                    'Bureau'
                ]
            ]
        ];

        return Inertia::render('Demandes/Formulaire', $formData);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'matricule' => 'required|string|max:255',
            'fonction' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'telephone' => 'required|string|max:255',
            'type_demande' => 'required|in:logement,bail',
            'type_bien' => 'required|in:Villa,Appartement,Studio,Local Commercial,Entrepôt,Bureau',
            'situation_matrimoniale' => 'required|in:Célibataire,Marié(e),Divorcé(e),Veuf(ve)',
            'commune' => 'required|string',
            'quartier' => 'required|string',
            'precision' => 'required|string',
            'photo' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'carte_identite' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'demande_manuscrite' => 'required|file|mimes:jpg,jpeg,png,pdf',
            'bulletin_salaire' => 'required|file|mimes:jpg,jpeg,png,pdf',
        ]);

        // Gérer le téléchargement des fichiers
        $photo = $request->file('photo')->store('demandes/photos', 'public');
        $carteIdentite = $request->file('carte_identite')->store('demandes/cartes', 'public');
        $demandeManuscrite = $request->file('demande_manuscrite')->store('demandes/manuscrites', 'public');
        $bulletinSalaire = $request->file('bulletin_salaire')->store('demandes/bulletins', 'public');

        $demande = Demande::create([
            ...$validated,
            'photo' => $photo,
            'carte_identite' => $carteIdentite,
            'demande_manuscrite' => $demandeManuscrite,
            'bulletin_salaire' => $bulletinSalaire,
        ]);

        return redirect()->back()->with('success', 'Votre demande a été enregistrée avec succès.');
    }

    public function newDemande()
    {
        return Inertia::render('Demandes/NewDemande');
    }

    public function rechercher()
    {
        // Structure administrative de la Guinée
        $regions = $this->getRegions();
        
        $prefectures = $this->getPrefectures();
        
        
        $typesBien = $this->getTypesBien();
        
        $zones = $this->getZones();
        
        return Inertia::render('Demandes/Rechercher', [
            'regions' => $regions,
            'prefectures' => $prefectures,
            'typesBien' => $typesBien,
            'zones' => $zones,
        ]);
    }

    public function processusObtention()
    {
        return Inertia::render('Demandes/ProcessusObtention');
    }

    public function verifier()
    {
        return Inertia::render('Demandes/Verification', [
            'title' => 'Vérifier ma demande',
            'description' => 'Suivez l\'état d\'avancement de votre demande'
        ]);
    }

    public function verification(Request $request)
    {
        // Simuler un délai de traitement
        sleep(1);

        // Données fictives
        $fakeDemandes = [
            'DEM-2024-001' => [
                'numero_reference' => 'DEM-2024-001',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-01-15',
                'statut' => 'en_cours',
                'etape_actuelle' => 2,
                'demandeur' => [
                    'nom' => 'DIALLO',
                    'prenom' => 'Mamadou',
                    'email' => 'm.diallo@example.com'
                ],
                'etapes' => [
                    [
                        'numero' => 1,
                        'titre' => 'Soumission',
                        'description' => 'Demande soumise avec succès',
                        'date' => '2024-01-15',
                        'complete' => true
                    ],
                    [
                        'numero' => 2,
                        'titre' => 'Vérification documents',
                        'description' => 'Vérification des documents en cours',
                        'date' => '2024-01-16',
                        'complete' => true
                    ],
                    [
                        'numero' => 3,
                        'titre' => 'Étude du dossier',
                        'description' => 'Analyse par le comité',
                        'date' => null,
                        'complete' => false
                    ],
                    [
                        'numero' => 4,
                        'titre' => 'Décision finale',
                        'description' => 'Validation et notification',
                        'date' => null,
                        'complete' => false
                    ]
                ]
            ],
            'DEM-2024-002' => [
                'numero_reference' => 'DEM-2024-002',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-01-10',
                'statut' => 'approuve',
                'etape_actuelle' => 4,
                'demandeur' => [
                    'nom' => 'BARRY',
                    'prenom' => 'Fatoumata',
                    'email' => 'f.barry@example.com'
                ],
                'etapes' => [
                    [
                        'numero' => 1,
                        'titre' => 'Soumission',
                        'description' => 'Demande soumise avec succès',
                        'date' => '2024-01-10',
                        'complete' => true
                    ],
                    [
                        'numero' => 2,
                        'titre' => 'Vérification documents',
                        'description' => 'Documents validés',
                        'date' => '2024-01-11',
                        'complete' => true
                    ],
                    [
                        'numero' => 3,
                        'titre' => 'Étude du dossier',
                        'description' => 'Dossier approuvé',
                        'date' => '2024-01-13',
                        'complete' => true
                    ],
                    [
                        'numero' => 4,
                        'titre' => 'Décision finale',
                        'description' => 'Demande approuvée',
                        'date' => '2024-01-15',
                        'complete' => true
                    ]
                ]
            ],
            'DEM-2024-003' => [
                'numero_reference' => 'DEM-2024-003',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-01-20',
                'statut' => 'rejete',
                'etape_actuelle' => 4,
                'demandeur' => [
                    'nom' => 'CAMARA',
                    'prenom' => 'Ibrahim',
                    'email' => 'i.camara@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande soumise avec succès', 'date' => '2024-01-20', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents incomplets', 'date' => '2024-01-21', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Dossier non conforme', 'date' => '2024-01-22', 'complete' => true],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Demande rejetée - Documents manquants', 'date' => '2024-01-23', 'complete' => true]
                ]
            ],
            'DEM-2024-004' => [
                'numero_reference' => 'DEM-2024-004',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-01-25',
                'statut' => 'en_cours',
                'etape_actuelle' => 1,
                'demandeur' => [
                    'nom' => 'SOUMAH',
                    'prenom' => 'Aissatou',
                    'email' => 'a.soumah@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'En cours de traitement', 'date' => '2024-01-25', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'En attente', 'date' => null, 'complete' => false],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Non démarré', 'date' => null, 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'En attente', 'date' => null, 'complete' => false]
                ]
            ],
            'DEM-2024-005' => [
                'numero_reference' => 'DEM-2024-005',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-01-28',
                'statut' => 'en_cours',
                'etape_actuelle' => 3,
                'demandeur' => [
                    'nom' => 'BALDE',
                    'prenom' => 'Alpha',
                    'email' => 'a.balde@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande reçue', 'date' => '2024-01-28', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents validés', 'date' => '2024-01-29', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'En cours d\'analyse', 'date' => '2024-01-30', 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'En attente', 'date' => null, 'complete' => false]
                ]
            ],
            'DEM-2024-006' => [
                'numero_reference' => 'DEM-2024-006',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-02-01',
                'statut' => 'approuve',
                'etape_actuelle' => 4,
                'demandeur' => [
                    'nom' => 'SYLLA',
                    'prenom' => 'Mohamed',
                    'email' => 'm.sylla@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande reçue', 'date' => '2024-02-01', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents conformes', 'date' => '2024-02-02', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Dossier validé', 'date' => '2024-02-03', 'complete' => true],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Bail accordé', 'date' => '2024-02-05', 'complete' => true]
                ]
            ],
            'DEM-2024-007' => [
                'numero_reference' => 'DEM-2024-007',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-02-05',
                'statut' => 'en_cours',
                'etape_actuelle' => 2,
                'demandeur' => [
                    'nom' => 'TOURE',
                    'prenom' => 'Mariama',
                    'email' => 'm.toure@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande enregistrée', 'date' => '2024-02-05', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Vérification en cours', 'date' => '2024-02-06', 'complete' => false],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'En attente', 'date' => null, 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Non démarré', 'date' => null, 'complete' => false]
                ]
            ],
            'DEM-2024-008' => [
                'numero_reference' => 'DEM-2024-008',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-02-08',
                'statut' => 'rejete',
                'etape_actuelle' => 3,
                'demandeur' => [
                    'nom' => 'CONDE',
                    'prenom' => 'Abdoulaye',
                    'email' => 'a.conde@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande reçue', 'date' => '2024-02-08', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents validés', 'date' => '2024-02-09', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Dossier non éligible', 'date' => '2024-02-10', 'complete' => true],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Demande rejetée', 'date' => '2024-02-11', 'complete' => true]
                ]
            ],
            'DEM-2024-009' => [
                'numero_reference' => 'DEM-2024-009',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-02-12',
                'statut' => 'en_cours',
                'etape_actuelle' => 1,
                'demandeur' => [
                    'nom' => 'BAH',
                    'prenom' => 'Kadiatou',
                    'email' => 'k.bah@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'En cours de traitement', 'date' => '2024-02-12', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'En attente', 'date' => null, 'complete' => false],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Non démarré', 'date' => null, 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'En attente', 'date' => null, 'complete' => false]
                ]
            ],
            'DEM-2024-010' => [
                'numero_reference' => 'DEM-2024-010',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-02-15',
                'statut' => 'approuve',
                'etape_actuelle' => 4,
                'demandeur' => [
                    'nom' => 'KEITA',
                    'prenom' => 'Ousmane',
                    'email' => 'o.keita@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande reçue', 'date' => '2024-02-15', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents validés', 'date' => '2024-02-16', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'Dossier approuvé', 'date' => '2024-02-17', 'complete' => true],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Bail accordé', 'date' => '2024-02-18', 'complete' => true]
                ]
            ],
            'DEM-2024-011' => [
                'numero_reference' => 'DEM-2024-011',
                'type_demande' => 'Logement Administratif',
                'date_soumission' => '2024-02-20',
                'statut' => 'en_cours',
                'etape_actuelle' => 2,
                'demandeur' => [
                    'nom' => 'SANO',
                    'prenom' => 'Aminata',
                    'email' => 'a.sano@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande enregistrée', 'date' => '2024-02-20', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents en cours de vérification', 'date' => '2024-02-21', 'complete' => false],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'En attente', 'date' => null, 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'Non démarré', 'date' => null, 'complete' => false]
                ]
            ],
            'DEM-2024-012' => [
                'numero_reference' => 'DEM-2024-012',
                'type_demande' => 'Bail Commercial',
                'date_soumission' => '2024-02-22',
                'statut' => 'en_cours',
                'etape_actuelle' => 3,
                'demandeur' => [
                    'nom' => 'BANGOURA',
                    'prenom' => 'Sekou',
                    'email' => 's.bangoura@example.com'
                ],
                'etapes' => [
                    ['numero' => 1, 'titre' => 'Soumission', 'description' => 'Demande reçue', 'date' => '2024-02-22', 'complete' => true],
                    ['numero' => 2, 'titre' => 'Vérification documents', 'description' => 'Documents validés', 'date' => '2024-02-23', 'complete' => true],
                    ['numero' => 3, 'titre' => 'Étude du dossier', 'description' => 'En cours d\'analyse', 'date' => '2024-02-24', 'complete' => false],
                    ['numero' => 4, 'titre' => 'Décision finale', 'description' => 'En attente', 'date' => null, 'complete' => false]
                ]
            ]
        ];

        $numeroReference = $request->input('numero_reference');
        $demande = $fakeDemandes[$numeroReference];
        // dd($numeroReference, $demande, $fakeDemandes);

        if (!$demande) {
            return response()->json([
                'message' => 'Aucune demande trouvée avec ce numéro de référence'
            ], 404);
        }

        return response()->json($demande);
    }

    public function rechercheBiens(Request $request)
    {
        // Simuler un délai pour l'effet de chargement
        sleep(1);
        
        // Récupérer et nettoyer les filtres
        $filters = $request->all();
        
        // Filtrer les biens
        $resultats = collect($this->getBiensFictifs())->filter(function ($bien) use ($filters) {
            $match = true;
            
            // Filtre par région
            if (!empty($filters['region']) && $filters['region'] !== 'toutes') {
                $match = $bien['region'] === $filters['region'];
            }
            
            // Filtre par préfecture
            if ($match && !empty($filters['prefecture']) && $filters['prefecture'] !== 'toutes') {
                $match = $bien['prefecture'] === $filters['prefecture'];
            }
            
            // Filtre par commune
            if ($match && !empty($filters['commune']) && $filters['commune'] !== 'toutes') {
                $match = $bien['commune'] === $filters['commune'];
            }
            
            // Filtre par type de bien
            if ($match && !empty($filters['typeBien']) && $filters['typeBien'] !== 'tous') {
                $match = $bien['type'] === $filters['typeBien'];
            }
            
            // Filtre par surface
            if ($match && !empty($filters['surface']) && is_array($filters['surface'])) {
                $surfaceMin = $filters['surface'][0];
                $surfaceMax = $filters['surface'][1];
                $match = $bien['surface'] >= $surfaceMin && $bien['surface'] <= $surfaceMax;
            }
            
            // Filtre par disponibilité
            if ($match && !empty($filters['disponibilite']) && $filters['disponibilite'] !== 'tous') {
                $match = $bien['disponibilite'] === $filters['disponibilite'];
            }
            
            // Filtre par type de transaction (location/achat)
            if ($match && !empty($filters['type'])) {
                $match = $bien['type_transaction'] === $filters['type'];
            }
            
            return $match;
        })->values()->all();
        
        return response()->json($resultats);
    }

    private function getBiensFictifs()
    {
        return [
            [
                'id' => 'BIEN-2024-001',
                'titre' => 'Villa moderne à Kipé',
                'type' => 'villa',
                'type_transaction' => 'location',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'hamdallaye',
                'quartier' => 'Kipé Centre',
                'description' => 'Magnifique villa moderne avec vue sur mer, située dans un quartier calme et sécurisé de Kipé.',
                'chambres' => 4,
                'salles_de_bain' => 3,
                'surface' => 250,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'jardin', 'groupe_electrogene'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-10',
                'image' => 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-002',
                'titre' => 'Appartement de standing à Dixinn',
                'type' => 'appartement',
                'type_transaction' => 'location',
                'region' => 'conakry',
                'prefecture' => 'dixinn',
                'commune' => 'dixinn_port',
                'quartier' => 'Dixinn Port',
                'description' => 'Bel appartement de standing situé dans une résidence sécurisée à Dixinn, proche des ambassades.',
                'chambres' => 3,
                'salles_de_bain' => 2,
                'surface' => 120,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'ascenseur'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-15',
                'image' => 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-003',
                'titre' => 'Local commercial au centre-ville',
                'type' => 'magasin',
                'type_transaction' => 'location',
                'region' => 'conakry',
                'prefecture' => 'kaloum',
                'commune' => 'almamya',
                'quartier' => 'Almamya Centre',
                'description' => 'Local commercial idéalement situé au centre-ville, forte affluence, parfait pour tout type de commerce.',
                'chambres' => 0,
                'salles_de_bain' => 1,
                'surface' => 85,
                'zone' => 'urbaine',
                'commodites' => ['securite', 'climatisation'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-02-28',
                'image' => 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-004',
                'titre' => 'Immeuble à usage mixte à Matam',
                'type' => 'immeuble',
                'type_transaction' => 'achat',
                'region' => 'conakry',
                'prefecture' => 'matam',
                'commune' => 'madina',
                'quartier' => 'Madina Marché',
                'description' => 'Immeuble à usage mixte (commercial et résidentiel) situé à proximité du marché de Madina.',
                'chambres' => 8,
                'salles_de_bain' => 5,
                'surface' => 450,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'groupe_electrogene'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-01-20',
                'image' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-005',
                'titre' => 'Villa de luxe avec piscine à Ratoma',
                'type' => 'villa',
                'type_transaction' => 'location',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'cosa',
                'quartier' => 'Nongo Résidentiel',
                'description' => 'Somptueuse villa de luxe avec piscine privée et jardin tropical dans le quartier résidentiel de Nongo.',
                'chambres' => 5,
                'salles_de_bain' => 4,
                'surface' => 350,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'jardin', 'piscine', 'groupe_electrogene'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-05',
                'image' => 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3'
            ]
        ];
    }

    public function detail($id)
    {
        // Créer un bien fictif avec des données de démonstration
        $bien = [
            'id' => $id,
            'titre' => 'Villa de luxe avec vue panoramique',
            'type' => 'villa',
            'type_transaction' => 'location',
            'surface' => 280,
            'chambres' => 4,
            'salles_de_bain' => 3,
            'description' => "Magnifique villa de standing située dans un quartier résidentiel calme et sécurisé. Cette propriété d'exception offre des prestations haut de gamme avec une architecture moderne et des finitions soignées. Idéalement située à proximité des commodités, cette villa bénéficie d'une vue imprenable sur la ville et la mer. Le jardin paysager et la piscine à débordement en font un lieu de vie exceptionnel pour une famille exigeante.",
            'quartier' => 'Kipé',
            'commune' => 'hamdallaye',
            'prefecture' => 'ratoma',
            'region' => 'conakry',
            'reference' => 'PBP-VIL-' . rand(1000, 9999),
            'date_publication' => date('Y-m-d', strtotime('-' . rand(1, 30) . ' days')),
            'disponibilite' => 'disponible',
            'images' => [
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
            ],
            'commodites' => ['parking', 'securite', 'climatisation', 'jardin', 'terrasse', 'piscine', 'eau', 'internet'],
            'details' => [
                'Année de construction' => '2020',
                'Étage' => 'R+1',
                'Orientation' => 'Sud-Est',
                'Chauffage' => 'Climatisation réversible',
                'État' => 'Excellent état',
                'Parking' => 'Garage pour 2 véhicules',
                'Extérieur' => 'Jardin de 500m²',
                'Sécurité' => 'Système d\'alarme et vidéosurveillance',
                'Taxe foncière' => '1 500 000 GNF/an',
            ],
            'proximite' => [
                'École internationale' => '500m',
                'Centre commercial' => '1.2km',
                'Hôpital' => '2km',
                'Transports en commun' => '300m',
                'Aéroport' => '15km',
                'Plage' => '3km',
                'Restaurants' => '800m',
            ],
            'documents' => [
                ['nom' => 'Plan de la maison', 'url' => '#'],
                ['nom' => 'Certificat de propriété', 'url' => '#'],
                ['nom' => 'Diagnostic énergétique', 'url' => '#'],
            ],
            'agent' => [
                'nom' => 'Diallo Mamadou',
                'telephone' => '+224 622 33 44 55',
                'email' => 'mamadou.diallo@pbp.gov.gn',
                'photo' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
            ]
        ];

        // Créer des données fictives pour les listes de référence
        $typesBien = [
            ['id' => 'villa', 'nom' => 'Villa'],
            ['id' => 'appartement', 'nom' => 'Appartement'],
            ['id' => 'bureau', 'nom' => 'Bureau'],
            ['id' => 'magasin', 'nom' => 'Magasin/Local commercial'],
            ['id' => 'entrepot', 'nom' => 'Entrepôt'],
            ['id' => 'terrain', 'nom' => 'Terrain'],
            ['id' => 'immeuble', 'nom' => 'Immeuble'],
        ];
        
        $prefectures = [
            ['id' => 'conakry', 'nom' => 'Conakry', 'region_id' => 'conakry'],
            ['id' => 'kindia', 'nom' => 'Kindia', 'region_id' => 'kindia'],
            ['id' => 'boke', 'nom' => 'Boké', 'region_id' => 'boke'],
        ];
        
        $communes = [
            ['id' => 'kaloum', 'nom' => 'Kaloum', 'prefecture_id' => 'conakry'],
            ['id' => 'dixinn', 'nom' => 'Dixinn', 'prefecture_id' => 'conakry'],
            ['id' => 'matam', 'nom' => 'Matam', 'prefecture_id' => 'conakry'],
            ['id' => 'ratoma', 'nom' => 'Ratoma', 'prefecture_id' => 'conakry'],
            ['id' => 'matoto', 'nom' => 'Matoto', 'prefecture_id' => 'conakry'],
        ];
        
        $commodites = [
            ['id' => 'parking', 'nom' => 'Parking'],
            ['id' => 'securite', 'nom' => 'Sécurité 24h/24'],
            ['id' => 'climatisation', 'nom' => 'Climatisation'],
            ['id' => 'ascenseur', 'nom' => 'Ascenseur'],
            ['id' => 'groupe_electrogene', 'nom' => 'Groupe électrogène'],
            ['id' => 'jardin', 'nom' => 'Jardin'],
            ['id' => 'terrasse', 'nom' => 'Terrasse'],
            ['id' => 'piscine', 'nom' => 'Piscine'],
            ['id' => 'eau', 'nom' => 'Eau courante'],
            ['id' => 'internet', 'nom' => 'Internet haut débit'],
        ];
        
        // Générer des biens similaires fictifs
        $biensSimilaires = [];
        for ($i = 1; $i <= 3; $i++) {
            $biensSimilaires[] = [
                'id' => $id . $i,
                'titre' => 'Villa ' . ($i == 1 ? 'administrative' : ($i == 2 ? 'de fonction' : 'diplomatique')),
                'type' => 'villa',
                'prix' => 300000000 + ($i * 25000000),
                'surface' => 220 + ($i * 20),
                'chambres' => 3 + $i,
                'salles_de_bain' => 2 + $i,
                'image' => 'https://images.unsplash.com/photo-158972813094' . $i . '?ixlib=rb-4.0.3',
                'quartier' => $i == 1 ? 'Kipé' : ($i == 2 ? 'Nongo' : 'Taouyah'),
                'commune' => 'ratoma',
            ];
        }
        
        return Inertia::render('Demandes/DetailBien', [
            'bien' => $bien,
            'typesBien' => $typesBien,
            'prefectures' => $prefectures,
            'communes' => $communes,
            'commodites' => $commodites,
            'biensSimilaires' => $biensSimilaires,
        ]);
    }


}
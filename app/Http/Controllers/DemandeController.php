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
        $regions = [
            ['id' => 'conakry', 'nom' => 'Conakry'],
            ['id' => 'kindia', 'nom' => 'Kindia'],
            ['id' => 'boké', 'nom' => 'Boké'],
            ['id' => 'mamou', 'nom' => 'Mamou'],
            ['id' => 'labé', 'nom' => 'Labé'],
            ['id' => 'faranah', 'nom' => 'Faranah'],
            ['id' => 'kankan', 'nom' => 'Kankan'],
            ['id' => 'nzérékoré', 'nom' => 'Nzérékoré']
        ];
        
        $prefectures = [
            // Conakry (communes)
            ['id' => 'kaloum', 'nom' => 'Kaloum', 'region_id' => 'conakry'],
            ['id' => 'dixinn', 'nom' => 'Dixinn', 'region_id' => 'conakry'],
            ['id' => 'matam', 'nom' => 'Matam', 'region_id' => 'conakry'],
            ['id' => 'ratoma', 'nom' => 'Ratoma', 'region_id' => 'conakry'],
            ['id' => 'matoto', 'nom' => 'Matoto', 'region_id' => 'conakry'],
            // Région de Kindia
            ['id' => 'kindia_pref', 'nom' => 'Kindia', 'region_id' => 'kindia'],
            ['id' => 'forecariah', 'nom' => 'Forécariah', 'region_id' => 'kindia'],
            ['id' => 'coyah', 'nom' => 'Coyah', 'region_id' => 'kindia'],
            ['id' => 'telimele', 'nom' => 'Télimélé', 'region_id' => 'kindia'],
            ['id' => 'dubreka', 'nom' => 'Dubréka', 'region_id' => 'kindia'],
            // Région de Boké
            ['id' => 'boke_pref', 'nom' => 'Boké', 'region_id' => 'boké'],
            ['id' => 'boffa', 'nom' => 'Boffa', 'region_id' => 'boké'],
            ['id' => 'fria', 'nom' => 'Fria', 'region_id' => 'boké'],
            ['id' => 'gaoual', 'nom' => 'Gaoual', 'region_id' => 'boké'],
            ['id' => 'koundara', 'nom' => 'Koundara', 'region_id' => 'boké'],
            // Autres régions...
        ];
        
        $communes = [
            // Quelques communes pour Conakry
            ['id' => 'madina', 'nom' => 'Madina', 'prefecture_id' => 'matam'],
            ['id' => 'almamya', 'nom' => 'Almamya', 'prefecture_id' => 'kaloum'],
            ['id' => 'hamdallaye', 'nom' => 'Hamdallaye', 'prefecture_id' => 'ratoma'],
            ['id' => 'cosa', 'nom' => 'Cosa', 'prefecture_id' => 'ratoma'],
            ['id' => 'sonfonia', 'nom' => 'Sonfonia', 'prefecture_id' => 'ratoma'],
            ['id' => 'lansanaya', 'nom' => 'Lansanaya', 'prefecture_id' => 'ratoma'],
            ['id' => 'taouyah', 'nom' => 'Taouyah', 'prefecture_id' => 'ratoma'],
            ['id' => 'dixinn_port', 'nom' => 'Dixinn Port', 'prefecture_id' => 'dixinn'],
            ['id' => 'belle_vue', 'nom' => 'Belle Vue', 'prefecture_id' => 'dixinn'],
            ['id' => 'bonfi', 'nom' => 'Bonfi', 'prefecture_id' => 'matoto'],
            ['id' => 'enta', 'nom' => 'Enta', 'prefecture_id' => 'matoto'],
            // Autres communes...
        ];
        
        $typesBien = [
            ['id' => 'villa', 'nom' => 'Villa'],
            ['id' => 'appartement', 'nom' => 'Appartement'],
            ['id' => 'bureau', 'nom' => 'Bureau'],
            ['id' => 'magasin', 'nom' => 'Magasin/Local commercial'],
            ['id' => 'entrepot', 'nom' => 'Entrepôt'],
            ['id' => 'terrain', 'nom' => 'Terrain'],
            ['id' => 'immeuble', 'nom' => 'Immeuble'],
        ];
        
        $zones = [
            ['id' => 'urbaine', 'nom' => 'Zone urbaine'],
            ['id' => 'rurale', 'nom' => 'Zone rurale'],
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
        
        return Inertia::render('Demandes/Rechercher', [
            'regions' => $regions,
            'prefectures' => $prefectures,
            'communes' => $communes,
            'typesBien' => $typesBien,
            'zones' => $zones,
            'commodites' => $commodites,
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
        sleep(2);
        
        // Valider les données de la requête
        $validated = $request->validate([
            'region' => 'nullable|string',
            'prefecture' => 'nullable|string',
            'commune' => 'nullable|string',
            'quartier' => 'nullable|string',
            'typeBien' => 'nullable|string',
            'chambres' => 'nullable|string',
            'sallesDeBain' => 'nullable|string',
            'budget' => 'nullable|array',
            'surface' => 'nullable|array',
            'zone' => 'nullable|string',
            'commodites' => 'nullable|array',
            'disponibilite' => 'nullable|string',
            'immeuble' => 'nullable|string',
            'etage' => 'nullable|string',
            'nombreAppartementsDispo' => 'nullable|string',
        ]);
        
        // Base de données fictive de biens immobiliers en Guinée
        $biensFictifs = [
            [
                'id' => 'BIEN-2024-001',
                'titre' => 'Villa moderne à Kipé',
                'type' => 'villa',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'kipe',
                'quartier' => 'Kipé Centre',
                'description' => 'Magnifique villa moderne avec vue sur mer, située dans un quartier calme et sécurisé de Kipé.',
                'prix' => 350000000,
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
                'titre' => 'Appartement de standing à Camayenne',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'dixinn',
                'commune' => 'camayenne',
                'quartier' => 'Camayenne Centre',
                'description' => 'Bel appartement de standing situé dans une résidence sécurisée à Camayenne, proche des ambassades.',
                'prix' => 180000000,
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
                'region' => 'conakry',
                'prefecture' => 'kaloum',
                'commune' => 'almamya',
                'quartier' => 'Almamya Centre',
                'description' => 'Local commercial idéalement situé au centre-ville, forte affluence, parfait pour tout type de commerce.',
                'prix' => 200000000,
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
                'region' => 'conakry',
                'prefecture' => 'matam',
                'commune' => 'madina',
                'quartier' => 'Madina Marché',
                'description' => 'Immeuble à usage mixte (commercial et résidentiel) situé à proximité du marché de Madina.',
                'prix' => 750000000,
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
                'titre' => 'Villa de luxe avec piscine à Nongo',
                'type' => 'villa',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'nongo',
                'quartier' => 'Nongo Résidentiel',
                'description' => 'Somptueuse villa de luxe avec piscine privée et jardin tropical dans le quartier résidentiel de Nongo.',
                'prix' => 550000000,
                'chambres' => 5,
                'salles_de_bain' => 4,
                'surface' => 350,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'jardin', 'piscine', 'groupe_electrogene'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-05',
                'image' => 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-006',
                'titre' => 'Terrain constructible à Sonfonia',
                'type' => 'terrain',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'sonfonia',
                'quartier' => 'Sonfonia Gare',
                'description' => 'Grand terrain constructible bien situé à Sonfonia, viabilisé avec titre foncier.',
                'prix' => 120000000,
                'chambres' => 0,
                'salles_de_bain' => 0,
                'surface' => 800,
                'zone' => 'rurale',
                'commodites' => [],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-02-10',
                'image' => 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-007',
                'titre' => 'Bureaux professionnels au Petit Bateau',
                'type' => 'bureau',
                'region' => 'conakry',
                'prefecture' => 'kaloum',
                'commune' => 'kaloum_centre',
                'quartier' => 'Petit Bateau',
                'description' => 'Espace de bureaux professionnels dans un immeuble moderne au cœur du quartier d\'affaires de Kaloum.',
                'prix' => 250000000,
                'chambres' => 0,
                'salles_de_bain' => 2,
                'surface' => 150,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'ascenseur', 'internet'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-01-15',
                'image' => 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-008',
                'titre' => 'Entrepôt spacieux à Enta',
                'type' => 'entrepot',
                'region' => 'conakry',
                'prefecture' => 'matoto',
                'commune' => 'enta',
                'quartier' => 'Zone Industrielle',
                'description' => 'Grand entrepôt dans la zone industrielle d\'Enta, accès facile pour les camions, hauteur sous plafond importante.',
                'prix' => 180000000,
                'chambres' => 0,
                'salles_de_bain' => 1,
                'surface' => 600,
                'zone' => 'rurale',
                'commodites' => ['parking', 'securite'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-02-20',
                'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-009',
                'titre' => 'Appartement familial à Hamdallaye',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'hamdallaye',
                'quartier' => 'Hamdallaye Pharmacie',
                'description' => 'Appartement spacieux idéal pour une famille, situé à Hamdallaye près des écoles et commerces.',
                'prix' => 150000000,
                'chambres' => 3,
                'salles_de_bain' => 2,
                'surface' => 110,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'climatisation', 'eau'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-01',
                'image' => 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3'
            ],
            [
                'id' => 'BIEN-2024-010',
                'titre' => 'Appartement de luxe - Immeuble Le Diplomate',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'dixinn',
                'commune' => 'belle_vue',
                'quartier' => 'Belle Vue',
                'description' => 'Appartement de haut standing dans un immeuble de prestige avec service de conciergerie 24h/24.',
                'prix' => 220000000,
                'chambres' => 3,
                'salles_de_bain' => 2,
                'surface' => 140,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'ascenseur', 'groupe_electrogene', 'internet'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-02-28',
                'image' => 'https://images.unsplash.com/photo-1591588582259-a7b72a5b4b73?ixlib=rb-4.0.3',
                'immeuble' => true,
                'nom_immeuble' => 'Le Diplomate',
                'etage' => 4,
                'nombre_etages' => 8,
                'nombre_appartements_immeuble' => 24,
                'nombre_appartements_disponibles' => 3,
                'ascenseur' => true,
                'balcon' => true,
                'exposition' => 'sud-est',
                'service_conciergerie' => true
            ],
            [
                'id' => 'BIEN-2024-011',
                'titre' => 'Appartement familial - Résidence Les Palmiers',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'ratoma',
                'commune' => 'hamdallaye',
                'quartier' => 'Hamdallaye',
                'description' => 'Appartement spacieux et lumineux dans une résidence sécurisée avec jardin commun, idéal pour famille.',
                'prix' => 180000000,
                'chambres' => 4,
                'salles_de_bain' => 2,
                'surface' => 160,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'jardin', 'groupe_electrogene'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-05',
                'image' => 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3',
                'immeuble' => true,
                'nom_immeuble' => 'Résidence Les Palmiers',
                'etage' => 2,
                'nombre_etages' => 4,
                'nombre_appartements_immeuble' => 16,
                'nombre_appartements_disponibles' => 2,
                'ascenseur' => false,
                'balcon' => true,
                'exposition' => 'ouest',
                'service_conciergerie' => false
            ],
            [
                'id' => 'BIEN-2024-012',
                'titre' => 'Studio moderne - Tour Nabaya',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'kaloum',
                'commune' => 'almamya',
                'quartier' => 'Almamya Centre',
                'description' => 'Studio moderne dans une tour administrative récente, parfait pour un fonctionnaire célibataire.',
                'prix' => 90000000,
                'chambres' => 1,
                'salles_de_bain' => 1,
                'surface' => 45,
                'zone' => 'urbaine',
                'commodites' => ['securite', 'climatisation', 'ascenseur', 'internet'],
                'disponibilite' => 'disponible',
                'date_publication' => '2024-03-10',
                'image' => 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3',
                'immeuble' => true,
                'nom_immeuble' => 'Tour Nabaya',
                'etage' => 12,
                'nombre_etages' => 20,
                'nombre_appartements_immeuble' => 80,
                'nombre_appartements_disponibles' => 5,
                'ascenseur' => true,
                'balcon' => false,
                'exposition' => 'nord',
                'service_conciergerie' => true
            ],
            [
                'id' => 'BIEN-2024-013',
                'titre' => 'Duplex de prestige - Résidence Les Ministres',
                'type' => 'appartement',
                'region' => 'conakry',
                'prefecture' => 'dixinn',
                'commune' => 'camayenne',
                'quartier' => 'Camayenne',
                'description' => 'Magnifique duplex au sein d\'une résidence de standing réservée aux hauts fonctionnaires de l\'État.',
                'prix' => 350000000,
                'chambres' => 5,
                'salles_de_bain' => 3,
                'surface' => 220,
                'zone' => 'urbaine',
                'commodites' => ['parking', 'securite', 'climatisation', 'ascenseur', 'groupe_electrogene', 'jardin', 'piscine', 'internet'],
                'disponibilite' => 'bientot',
                'date_publication' => '2024-03-15',
                'image' => 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3',
                'immeuble' => true,
                'nom_immeuble' => 'Résidence Les Ministres',
                'etage' => '5-6',
                'nombre_etages' => 6,
                'nombre_appartements_immeuble' => 12,
                'nombre_appartements_disponibles' => 1,
                'ascenseur' => true,
                'balcon' => true,
                'exposition' => 'sud',
                'service_conciergerie' => true
            ]
        ];
        
        // Filtrer les résultats en fonction des critères
        $resultats = collect($biensFictifs)->filter(function ($bien) use ($validated) {
            $match = true;
            
            if (!empty($validated['region']) && $bien['region'] !== $validated['region']) {
                $match = false;
            }
            
            if (!empty($validated['prefecture']) && $bien['prefecture'] !== $validated['prefecture']) {
                $match = false;
            }
            
            if (!empty($validated['commune']) && $bien['commune'] !== $validated['commune']) {
                $match = false;
            }
            
            if (!empty($validated['typeBien']) && $bien['type'] !== $validated['typeBien']) {
                $match = false;
            }
            
            if (!empty($validated['chambres'])) {
                $minChambres = intval($validated['chambres']);
                if ($bien['chambres'] < $minChambres) {
                    $match = false;
                }
            }
            
            if (!empty($validated['sallesDeBain'])) {
                $minSDB = intval($validated['sallesDeBain']);
                if ($bien['salles_de_bain'] < $minSDB) {
                    $match = false;
                }
            }
            
            if (!empty($validated['surface']) && count($validated['surface']) == 2) {
                if ($bien['surface'] < $validated['surface'][0] || $bien['surface'] > $validated['surface'][1]) {
                    $match = false;
                }
            }
            
            if (!empty($validated['zone']) && $bien['zone'] !== $validated['zone']) {
                $match = false;
            }
            
            if (!empty($validated['disponibilite']) && $validated['disponibilite'] !== 'tous') {
                if ($bien['disponibilite'] !== $validated['disponibilite']) {
                    $match = false;
                }
            }
            
            return $match;
        })->values()->all();
        
        // Ajout des filtres spécifiques aux appartements dans un immeuble
        if (!empty($validated['immeuble']) && $validated['immeuble'] === 'true') {
            $resultats = collect($resultats)->filter(function ($bien) {
                return isset($bien['immeuble']) && $bien['immeuble'] === true;
            })->values()->all();
        }
        
        if (!empty($validated['etage'])) {
            $resultats = collect($resultats)->filter(function ($bien) use ($validated) {
                if (!isset($bien['etage'])) return false;
                
                switch ($validated['etage']) {
                    case 'rdc':
                        return $bien['etage'] === 0 || $bien['etage'] === 'RDC';
                    case '1-2':
                        return is_numeric($bien['etage']) && $bien['etage'] >= 1 && $bien['etage'] <= 2;
                    case '3-5':
                        return is_numeric($bien['etage']) && $bien['etage'] >= 3 && $bien['etage'] <= 5;
                    case '6+':
                        return is_numeric($bien['etage']) && $bien['etage'] >= 6;
                    default:
                        return true;
                }
            })->values()->all();
        }
        
        if (!empty($validated['nombreAppartementsDispo'])) {
            $resultats = collect($resultats)->filter(function ($bien) use ($validated) {
                if (!isset($bien['nombre_appartements_disponibles'])) return false;
                
                switch ($validated['nombreAppartementsDispo']) {
                    case '1':
                        return $bien['nombre_appartements_disponibles'] == 1;
                    case '2-5':
                        return $bien['nombre_appartements_disponibles'] >= 2 && $bien['nombre_appartements_disponibles'] <= 5;
                    case '6-10':
                        return $bien['nombre_appartements_disponibles'] >= 6 && $bien['nombre_appartements_disponibles'] <= 10;
                    case '10+':
                        return $bien['nombre_appartements_disponibles'] > 10;
                    default:
                        return true;
                }
            })->values()->all();
        }
        
        return response()->json($resultats);
    }

    public function detail($id)
    {
        // Créer un bien fictif avec des données de démonstration
        $bien = [
            'id' => $id,
            'titre' => 'Villa de luxe avec vue panoramique',
            'type' => 'villa',
            'prix' => 350000000,
            'surface' => 280,
            'chambres' => 4,
            'salles_de_bain' => 3,
            'description' => "Magnifique villa de standing située dans un quartier résidentiel calme et sécurisé. Cette propriété d'exception offre des prestations haut de gamme avec une architecture moderne et des finitions soignées. Idéalement située à proximité des commodités, cette villa bénéficie d'une vue imprenable sur la ville et la mer. Le jardin paysager et la piscine à débordement en font un lieu de vie exceptionnel pour une famille exigeante.",
            'quartier' => 'Kipé',
            'commune' => 'ratoma',
            'prefecture' => 'conakry',
            'region' => 'conakry',
            'reference' => 'PBP-VIL-' . rand(1000, 9999),
            'date_publication' => date('Y-m-d', strtotime('-' . rand(1, 30) . ' days')),
            'disponibilite' => 'Disponible immédiatement',
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
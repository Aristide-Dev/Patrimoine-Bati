<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
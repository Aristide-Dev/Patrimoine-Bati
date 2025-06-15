<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PropertyManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertyManagerController extends Controller
{
    private $defaultCommunes = [
        'Kaloum' => ['batiments' => 157, 'locataires' => 423, 'taux_occupation' => 92],
        'Dixinn' => ['batiments' => 143, 'locataires' => 385, 'taux_occupation' => 88],
        'Matam' => ['batiments' => 128, 'locataires' => 342, 'taux_occupation' => 85],
        'Ratoma' => ['batiments' => 198, 'locataires' => 524, 'taux_occupation' => 94],
        'Matoto' => ['batiments' => 167, 'locataires' => 456, 'taux_occupation' => 89],
        'Kaporo' => ['batiments' => 112, 'locataires' => 298, 'taux_occupation' => 82],
        'R2000' => ['batiments' => 1, 'locataires' => 245, 'taux_occupation' => 95],
        'Moussoudougou' => ['batiments' => 1, 'locataires' => 178, 'taux_occupation' => 87],
        'Fria Base' => ['batiments' => 1, 'locataires' => 156, 'taux_occupation' => 91],
        'CPL' => ['batiments' => 1, 'locataires' => 312, 'taux_occupation' => 94]
    ];

    public function index(Request $request)
    {
        $query = PropertyManager::query();

        // Filtres
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('nom', 'like', "%{$search}%")
                  ->orWhere('matricule', 'like', "%{$search}%")
                  ->orWhere('service', 'like', "%{$search}%");
            });
        }

        if ($request->has('statut')) {
            $query->where('statut', $request->statut);
        }

        if ($request->has('commune')) {
            $query->where(function($q) use ($request) {
                $q->where('commune', $request->commune)
                  ->orWhere('service', 'like', "%{$request->commune}%");
            });
        }

        // Pagination
        $perPage = $request->get('per_page', 10);

        // Récupération des gérants actifs par commune et bâtiments spéciaux
        $gerantsParCommune = PropertyManager::actif()
            ->where(function($query) {
                $query->whereNotNull('commune')
                      ->orWhereIn('service', [
                          'Gérances Speciales R2000',
                          'Gérances Speciales Moussoudougou',
                          'R200 /FRIA BASE',
                          'Gérances Speciales CPL'
                      ]);
            })
            ->get()
            ->groupBy(function($item) {
                if ($item->service === 'R200 /FRIA BASE') return 'Fria Base';
                if ($item->service === 'Gérances Speciales CPL') return 'CPL';
                if ($item->service === 'Gérances Speciales R2000') return 'R2000';
                if ($item->service === 'Gérances Speciales Moussoudougou') return 'Moussoudougou';
                return $item->commune;
            });

        // Calcul des statistiques
        $stats = $this->calculateStatistics($gerantsParCommune);
        
        return response()->json([
            'data' => $query->paginate($perPage),
            'statuts' => [
                PropertyManager::STATUT_FONCTIONNAIRE,
                PropertyManager::STATUT_CONTRACTUEL_PERMANENT,
                PropertyManager::STATUT_CONTRACTUEL_TEMPORAIRE,
                PropertyManager::STATUT_STAGIAIRE
            ],
            'communes' => array_merge(
                array_keys(PropertyManager::COMMUNES),
                ['R2000', 'Moussoudougou', 'Fria Base', 'CPL']
            ),
            'statistiques' => $stats
        ]);
    }

    public function show($id)
    {
        $manager = PropertyManager::findOrFail($id);
        return response()->json($manager);
    }

    public function byCommune($commune)
    {
        if (!array_key_exists($commune, PropertyManager::COMMUNES)) {
            return response()->json(['error' => 'Commune non trouvée'], 404);
        }

        // Recherche du gérant principal
        $manager = PropertyManager::actif()
            ->where('commune', $commune)
            ->where(function($query) {
                $query->where('poste', 'Gérant Principal')
                      ->orWhere('poste', 'Gérante Principale')
                      ->orWhere('poste', 'Directeur (trice) préfectoral (e)');
            })
            ->first();

        // Si aucun gérant n'est trouvé, on retourne les statistiques par défaut
        if (!$manager) {
            $defaultStats = $this->defaultCommunes[$commune] ?? [
                'batiments' => 0,
                'locataires' => 0,
                'taux_occupation' => 0
            ];

            return response()->json([
                'commune' => $commune,
                'description' => PropertyManager::COMMUNES[$commune],
                'responsable' => [
                    'nom' => "En cours d'affectation",
                    'matricule' => "-",
                    'poste' => "Gérant Principal",
                    'telephone' => "-"
                ],
                'photo' => "/images/our-team/agent.png",
                'statistiques' => [
                    'batiments' => (string)$defaultStats['batiments'],
                    'locataires' => (string)$defaultStats['locataires'],
                    'taux_occupation' => $defaultStats['taux_occupation'] . '%'
                ]
            ]);
        }

        // Ajout de la description de la commune
        $manager->description = PropertyManager::COMMUNES[$commune];
        return response()->json($manager);
    }

    public function statistics()
    {
        $gerantsParCommune = PropertyManager::actif()
            ->whereNotNull('commune')
            ->get()
            ->groupBy('commune');

        return response()->json($this->calculateStatistics($gerantsParCommune));
    }

    private function calculateStatistics($gerantsParCommune)
    {
        $totalBatiments = 0;
        $totalLocataires = 0;
        $totalTauxOccupation = 0;
        $communesStats = [];

        foreach (PropertyManager::COMMUNES as $commune => $description) {
            $stats = $this->defaultCommunes[$commune] ?? [
                'batiments' => 0,
                'locataires' => 0,
                'taux_occupation' => 0
            ];

            $gerant = null;
            // Recherche du gérant principal pour cette commune
            if (isset($gerantsParCommune[$commune])) {
                $gerant = $gerantsParCommune[$commune]
                    ->first(function($g) {
                        return $g->poste === 'Gérant Principal' || 
                               $g->poste === 'Gérante Principale' ||
                               $g->poste === 'Directeur (trice) préfectoral (e)';
                    });

                if ($gerant && $gerant->statistiques) {
                    $stats = $gerant->getStatistiquesFormatteesAttribute();
                }
            }

            $totalBatiments += intval($stats['batiments']);
            $totalLocataires += intval($stats['locataires']);
            $totalTauxOccupation += floatval(str_replace('%', '', $stats['taux_occupation'] ?? '0'));

            $communesStats[] = [
                'commune' => $commune,
                'description' => $description,
                'responsable' => $gerant ? [
                    'nom' => $gerant->nom,
                    'matricule' => $gerant->matricule,
                    'poste' => $gerant->poste,
                    'telephone' => $gerant->telephone
                ] : [
                    'nom' => "En cours d'affectation",
                    'matricule' => "-",
                    'poste' => "Gérant Principal",
                    'telephone' => "-"
                ],
                'photo' => $gerant && $gerant->photo ? "/storage/".$gerant->photo : "/images/our-team/agent.png",
                'statistiques' => [
                    'batiments' => (string)$stats['batiments'],
                    'locataires' => (string)$stats['locataires'],
                    'taux_occupation' => $stats['taux_occupation']
                ]
            ];
        }

        $nombreCommunes = count(PropertyManager::COMMUNES);
        
        return [
            'total_batiments' => $totalBatiments,
            'total_locataires' => $totalLocataires,
            'taux_occupation_moyen' => round($totalTauxOccupation / $nombreCommunes, 2),
            'total_gerants' => PropertyManager::actif()
                ->where(function($query) {
                    $query->where('poste', 'Gérant Principal')
                          ->orWhere('poste', 'Gérante Principale')
                          ->orWhere('poste', 'Directeur (trice) préfectoral (e)');
                })
                ->count(),
            'par_commune' => $communesStats
        ];
    }
}

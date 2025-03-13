<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Region;
use App\Models\Prefecture;
use App\Models\Commune;
use App\Models\TypeBien;
use App\Models\Zone;

class HomeController extends Controller
{
    public function index()
    {
        // Obtenez les données réelles de la base de données si elles existent
        // Sinon, utilisez des données factices pour le développement

        // Données factices pour les régions
        
        $regions = $this->getRegions();
        // Données factices pour les préfectures
        $prefectures = $this->getPrefectures();
        
        
        $typesBien = $this->getTypesBien();
        
        $zones = $this->getZones();

        return Inertia::render('Home', [
            'regions' => $regions,
            'prefectures' => $prefectures,
            'typesBien' => $typesBien,
            'zones' => $zones,
        ]);
    }
} 
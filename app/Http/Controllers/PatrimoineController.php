<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\SeoTools;

class PatrimoineController extends Controller
{
    use SeoTools;

    public function categories()
    {
        $this->setSeoMeta(
            'Catégories du Patrimoine Bâti - PBP',
            'Découvrez les différentes catégories du patrimoine bâti public de Guinée : édifices administratifs, religieux, éducatifs, sanitaires, industriels et résidentiels.',
            ['catégories patrimoine', 'classification édifices', 'bâtiments administratifs', 'Guinée', 'PBP']
        );

        return Inertia::render('Patrimoine/Categories', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Catégories du Patrimoine Bâti - Classification des Édifices Publics Guinéens',
                'description' => 'Découvrez les différentes catégories du patrimoine bâti public de Guinée : édifices administratifs, religieux, éducatifs, sanitaires, industriels et résidentiels.',
                'keywords' => 'catégories patrimoine Guinée, classification édifices publics, bâtiments administratifs Guinée'
            ]
        ]);
    }

    public function historic()
    {
        // SEO ultra-optimisé pour le patrimoine historique
        $this->setSeoMeta(
            'Patrimoine Historique de Guinée - Monuments et Sites Culturels Authentiques | PBP',
            'Explorez le riche patrimoine historique de Guinée : mausolée Ahmed Sékou Touré, Fort de Boké, mosquée de Dinguiraye d\'El Hadj Omar Tall, vestiges coloniaux et sites de résistance anticoloniale. Découvrez l\'héritage culturel guinéen avec le PBP.',
            [
                // Mots-clés principaux
                'patrimoine historique Guinée', 'monuments historiques Guinée', 'sites historiques Guinée',
                'patrimoine culturel Guinée', 'héritage historique Guinée', 'monuments nationaux Guinée',
                
                // Sites spécifiques
                'mausolée Ahmed Sékou Touré', 'Fort de Boké', 'mosquée Dinguiraye', 'El Hadj Omar Tall',
                'musée national Conakry', 'Samory Touré', 'Alpha Yaya Diallo', 'site Gberedou Hamana',
                
                // Périodes historiques
                'empire du Mali', 'royaumes précoloniaux', 'résistance anticoloniale', 'époque coloniale française',
                'indépendance Guinée', 'empire wassoulou', 'empire toucouleur', 'civilisation mandingue',
                
                // Géographie
                'patrimoine historique Conakry', 'monuments historiques Boké', 'sites historiques Dinguiraye',
                'patrimoine historique Kankan', 'monuments historiques Faranah', 'sites historiques Kouroussa',
                
                // Types de patrimoine
                'architecture coloniale Guinée', 'architecture islamique Guinée', 'architecture traditionnelle Guinée',
                'fortifications historiques', 'mosquées historiques', 'mausolées historiques', 'musées historiques',
                
                // UNESCO et protection
                'patrimoine UNESCO Guinée', 'sites UNESCO Guinée', 'patrimoine mondial Guinée',
                'conservation patrimoine', 'restauration monuments', 'protection patrimoine culturel',
                
                // Tourisme culturel
                'tourisme culturel Guinée', 'tourisme historique Guinée', 'circuit patrimoine Guinée',
                'visite monuments Guinée', 'découverte patrimoine Guinée', 'voyage culturel Guinée',
                
                // PBP et institutionnel
                'PBP patrimoine historique', 'Patrimoine Bâti Public Guinée', 'gestion patrimoine historique',
                'valorisation patrimoine', 'inventaire patrimoine', 'documentation patrimoine',
                
                // Mots-clés longue traîne
                'monuments et sites historiques de Guinée', 'patrimoine historique de la République de Guinée',
                'découvrir le patrimoine historique guinéen', 'visiter les monuments historiques de Guinée',
                'histoire et patrimoine de Guinée', 'culture et patrimoine historique guinéen'
            ]
        );

        return Inertia::render('Patrimoine/Historic', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Patrimoine Historique de Guinée - Monuments et Sites Culturels Authentiques',
                'description' => 'Explorez le riche patrimoine historique de Guinée : mausolée Ahmed Sékou Touré, Fort de Boké, mosquée de Dinguiraye d\'El Hadj Omar Tall, vestiges coloniaux et sites de résistance anticoloniale. Découvrez l\'héritage culturel guinéen.',
                'keywords' => 'patrimoine historique Guinée, monuments historiques, sites culturels, mausolée Ahmed Sékou Touré, Fort de Boké, mosquée Dinguiraye, El Hadj Omar Tall, Samory Touré, résistance anticoloniale, architecture coloniale, UNESCO, tourisme culturel'
            ]
        ]);
    }

    public function locations()
    {
        $this->setSeoMeta(
            'Localisations du Patrimoine Bâti - PBP',
            'Découvrez la répartition géographique du patrimoine bâti public de Guinée par région, préfecture et commune.',
            ['localisation patrimoine', 'répartition géographique', 'édifices publics', 'Guinée', 'PBP']
        );

        return Inertia::render('Patrimoine/Locations', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Localisations du Patrimoine Bâti - Répartition Géographique en Guinée',
                'description' => 'Découvrez la répartition géographique du patrimoine bâti public de Guinée par région, préfecture et commune.',
                'keywords' => 'localisation patrimoine Guinée, répartition géographique édifices publics'
            ]
        ]);
    }
} 
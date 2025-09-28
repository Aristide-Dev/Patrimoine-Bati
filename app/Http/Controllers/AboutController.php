<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Traits\SeoTools;

class AboutController extends Controller
{
    use SeoTools;

    public function index()
    {
        $this->setAboutSeoMeta(
            'Présentation - PBP',
            'Découvrez Le Patrimoine Bâti Public de Guinée : notre mission, nos valeurs et notre engagement dans la gestion du patrimoine immobilier de l\'État.'
        );

        return Inertia::render('About/Index', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Présentation',
                'description' => 'Présentation de Le Patrimoine Bâti Public'
            ]
        ]);
    }

    public function history()
    {
        $this->setAboutSeoMeta(
            'Historique - PBP',
            'Retracez l\'historique du Patrimoine Bâti Public de Guinée depuis sa création jusqu\'à nos jours.'
        );

        return Inertia::render('About/History', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Historique',
                'description' => 'Histoire de Le Patrimoine Bâti Public'
            ]
        ]);
    }

    public function formerDG()
    {
        $this->setAboutSeoMeta(
            'Anciens Directeurs Généraux - PBP',
            'Découvrez les anciens Directeurs Généraux qui ont dirigé Le Patrimoine Bâti Public de Guinée.'
        );

        return Inertia::render('About/FormerDG', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Anciens DG',
                'description' => 'Les anciens Directeurs Généraux du Patrimoine Bâti Public'
            ]
        ]);
    }

    public function motDirectrice()
    {
        $this->setAboutSeoMeta(
            'Mot de la Directrice Générale - PBP',
            'Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public de Guinée.'
        );

        return Inertia::render('About/MotDirectrice', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Mot de la Directrice',
                'description' => 'Message de Madame Souadou Baldé, Directrice Générale du Patrimoine Bâti Public'
            ]
        ]);
    }

    public function equipeGestion()
    {
        $this->setAboutSeoMeta(
            'Équipe de Gestion - PBP',
            'Découvrez l\'équipe dirigeante et les responsables du Patrimoine Bâti Public de Guinée selon le Décret N°D/0275/PRG/CNRD/SGG.'
        );

        return Inertia::render('About/EquipeGestion', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Notre équipe de gestion - PBP',
                'description' => 'Découvrez l\'équipe dirigeante et les responsables de Le Patrimoine Bâti Public de Guinée'
            ]
        ]);
    }

    public function gerants()
    {
        $this->setAboutSeoMeta(
            'Gérants Immobiliers - PBP',
            'Rencontrez les gérants immobiliers du Patrimoine Bâti Public de Guinée, responsables de la gestion quotidienne de nos biens.'
        );

        return Inertia::render('About/Gerants', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Gérants Immobiliers',
                'description' => 'Les gérants immobiliers de Le Patrimoine Bâti Public'
            ]
        ]);
    }
} 
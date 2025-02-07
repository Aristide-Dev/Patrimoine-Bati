<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function housing()
    {
        return Inertia::render('Services/Housing', [
            'meta' => [
                'title' => 'Logements Administratifs',
                'description' => 'Gestion des logements administratifs'
            ]
        ]);
    }

    public function commercial()
    {
        return Inertia::render('Services/Commercial', [
            'meta' => [
                'title' => 'Baux Commerciaux',
                'description' => 'Gestion des baux commerciaux'
            ]
        ]);
    }

    public function procedures()
    {
        return Inertia::render('Services/Procedures', [
            'meta' => [
                'title' => 'Procédures',
                'description' => 'Procédures administratives'
            ]
        ]);
    }

    public function faq()
    {
        return Inertia::render('Services/FAQ', [
            'meta' => [
                'title' => 'FAQ',
                'description' => 'Questions fréquemment posées'
            ]
        ]);
    }
} 
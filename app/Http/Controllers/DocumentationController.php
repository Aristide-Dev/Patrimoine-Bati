<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DocumentationController extends Controller
{
    public function guides()
    {
        return Inertia::render('Documentation/Guides', [
            'meta' => [
                'title' => 'Guides Pratiques',
                'description' => 'Guides et tutoriels pour la gestion du patrimoine bâti'
            ]
        ]);
    }

    public function regulations()
    {
        return Inertia::render('Documentation/Regulations', [
            'meta' => [
                'title' => 'Réglementation',
                'description' => 'Cadre réglementaire du patrimoine bâti public'
            ]
        ]);
    }

    public function forms()
    {
        return Inertia::render('Documentation/Forms', [
            'meta' => [
                'title' => 'Formulaires',
                'description' => 'Formulaires administratifs'
            ]
        ]);
    }
} 
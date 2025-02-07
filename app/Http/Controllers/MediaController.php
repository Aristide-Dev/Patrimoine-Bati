<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MediaController extends Controller
{
    public function photos()
    {
        return Inertia::render('Media/Photos', [
            'meta' => [
                'title' => 'Galerie Photos',
                'description' => 'Photos du patrimoine bâti public'
            ]
        ]);
    }

    public function videos()
    {
        return Inertia::render('Media/Videos', [
            'meta' => [
                'title' => 'Vidéothèque',
                'description' => 'Vidéos du patrimoine bâti public'
            ]
        ]);
    }

    public function publications()
    {
        return Inertia::render('Media/Publications', [
            'meta' => [
                'title' => 'Publications',
                'description' => 'Publications et documents officiels'
            ]
        ]);
    }
} 
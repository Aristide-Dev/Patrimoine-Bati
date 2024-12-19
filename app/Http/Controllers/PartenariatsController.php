<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PartenariatsController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Partenariats/Index');
    }

    public function institutionnels(): Response
    {
        return Inertia::render('Partenariats/Institutionnels');
    }

    public function roles(): Response
    {
        return Inertia::render('Partenariats/Roles');
    }

    public function projetsResultats(): Response
    {
        return Inertia::render('Partenariats/ProjetsResultats');
    }
}

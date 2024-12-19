<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact/Index');
    }

    public function formulaire(): Response
    {
        return Inertia::render('Contact/Formulaire');
    }

    public function coordonnees(): Response
    {
        return Inertia::render('Contact/Coordonnees');
    }

    public function planAcces(): Response
    {
        return Inertia::render('Contact/PlanAcces');
    }
}

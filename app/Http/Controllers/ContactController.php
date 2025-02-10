<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact/Index', [
            'meta' => [
                'title' => 'Contact',
                'description' => 'Contactez la Direction Générale du Patrimoine Bâti Public'
            ]
        ]);
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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'sujet' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Contact::create($validated);

        return redirect()->back()->with('success', 'Votre message a été envoyé avec succès.');
    }
}

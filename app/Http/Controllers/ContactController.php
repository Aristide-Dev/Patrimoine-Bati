<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Traits\SeoTools;

class ContactController extends Controller
{
    use SeoTools;

    public function index(Request $request)
    {
        $this->setSeoMeta(
            'Contact - PBP',
            'Contactez le Patrimoine Bâti Public de Guinée. Adresse : PORTS CONTENEURS DE CONAKRY, KALOUM. Téléphone : +224 655 358 284. Email : info@pbpguinee.com',
            ['contact', 'PBP', 'patrimoine bâti', 'Guinée', 'Conakry', 'Kaloum', 'téléphone', 'email']
        );

        return Inertia::render('Contact/Index', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Contact - PBP',
                'description' => 'Contactez Le Patrimoine Bâti Public de Guinée. Formulaire de contact, coordonnées et plan d\'accès.'
            ]
        ]);
    }

    public function formulaire(): Response
    {
        $this->setSeoMeta(
            'Formulaire de Contact - PBP',
            'Envoyez-nous un message via notre formulaire de contact sécurisé du Patrimoine Bâti Public de Guinée.',
            ['formulaire contact', 'message', 'PBP', 'patrimoine bâti', 'Guinée']
        );

        return Inertia::render('Contact/Formulaire', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Formulaire de Contact - PBP',
                'description' => 'Envoyez-nous un message via notre formulaire de contact sécurisé.'
            ]
        ]);
    }

    public function coordonnees(): Response
    {
        $this->setSeoMeta(
            'Nos Coordonnées - PBP',
            'Retrouvez toutes les informations de contact du PBP : adresse aux Ports Conteneurs de Conakry, Kaloum, téléphones +224 655 358 284 et +224 611 981 928, email info@pbpguinee.com et horaires d\'ouverture.',
            ['coordonnées', 'contact', 'adresse', 'téléphone', 'email', 'horaires', 'PBP', 'Conakry', 'Kaloum']
        );

        return Inertia::render('Contact/Coordonnees', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Nos Coordonnées - PBP', 
                'description' => 'Retrouvez toutes les informations de contact du PBP : adresse, téléphones, emails et horaires d\'ouverture.'
            ]
        ]);
    }

    public function planAcces(): Response
    {
        $this->setSeoMeta(
            'Plan d\'Accès - PBP',
            'Trouvez facilement nos bureaux aux Ports Conteneurs de Conakry, Kaloum avec notre plan d\'accès détaillé et les moyens de transport.',
            ['plan accès', 'itinéraire', 'bureaux', 'PBP', 'Conakry', 'Kaloum', 'ports conteneurs', 'transport']
        );

        return Inertia::render('Contact/PlanAcces', [
            'seo' => $this->getSeoData(),
            'meta' => [
                'title' => 'Plan d\'Accès - PBP',
                'description' => 'Trouvez facilement nos bureaux avec notre plan d\'accès détaillé et les moyens de transport.'
            ]
        ]);
    }

    public function store(Request $request)
    {
        try {
            // Validation des données
            $validated = $request->validate([
                'nom' => 'required|string|max:255|min:2',
                'email' => 'required|email|max:255',
                'sujet' => 'required|string|max:255|min:5',
                'message' => 'required|string|min:10|max:2000',
            ], [
                'nom.required' => 'Le nom est obligatoire.',
                'nom.min' => 'Le nom doit contenir au moins 2 caractères.',
                'email.required' => 'L\'adresse email est obligatoire.',
                'email.email' => 'L\'adresse email n\'est pas valide.',
                'sujet.required' => 'Le sujet est obligatoire.',
                'sujet.min' => 'Le sujet doit contenir au moins 5 caractères.',
                'message.required' => 'Le message est obligatoire.',
                'message.min' => 'Le message doit contenir au moins 10 caractères.',
                'message.max' => 'Le message ne peut pas dépasser 2000 caractères.',
            ]);

            // Enregistrement du message
            $contact = Contact::create([
                'nom' => $validated['nom'],
                'email' => $validated['email'],
                'sujet' => $validated['sujet'],
                'message' => $validated['message'],
                // 'telephone' => $validated['telephone'] ?? null,
                // 'ip_address' => $request->ip(),
                // 'user_agent' => $request->userAgent(),
                // 'created_at' => now(),
            ]);

            // Message de succès
            return redirect()->back()->with('success', 
                'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
            );

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Les erreurs de validation sont automatiquement gérées par Laravel
            throw $e;
            
        } catch (\Exception $e) {
            // Message d'erreur générique
            return redirect()->back()
                ->with('error', 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer. ' . $e->getMessage())
                ->withInput($request->except(['message'])); // Garder les données sauf le message
        }
    }

    /**
     * Méthode pour marquer un message comme lu (pour l'admin)
     */
    public function markAsRead(Contact $contact)
    {
        $contact->update(['lu' => true, 'lu_le' => now()]);
        
        return redirect()->back()->with('info', 'Le message a été marqué comme lu.');
    }

    /**
     * Méthode pour supprimer un message (pour l'admin)
     */
    public function destroy(Contact $contact)
    {
        try {
            $contact->delete();
            return redirect()->back()->with('success', 'Le message a été supprimé avec succès.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Erreur lors de la suppression du message.');
        }
    }
}

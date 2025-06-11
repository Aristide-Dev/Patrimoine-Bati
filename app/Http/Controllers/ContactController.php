<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Contact/Index', [
            'meta' => [
                'title' => 'Contact - DGPBP',
                'description' => 'Contactez la Direction Générale du Patrimoine Bâti Public de Guinée. Formulaire de contact, coordonnées et plan d\'accès.'
            ]
        ]);
    }

    public function formulaire(): Response
    {
        return Inertia::render('Contact/Formulaire', [
            'meta' => [
                'title' => 'Formulaire de Contact - DGPBP',
                'description' => 'Envoyez-nous un message via notre formulaire de contact sécurisé.'
            ]
        ]);
    }

    public function coordonnees(): Response
    {
        return Inertia::render('Contact/Coordonnees', [
            'meta' => [
                'title' => 'Nos Coordonnées - DGPBP', 
                'description' => 'Retrouvez toutes les informations de contact de la DGPBP : adresse, téléphones, emails et horaires d\'ouverture.'
            ]
        ]);
    }

    public function planAcces(): Response
    {
        return Inertia::render('Contact/PlanAcces', [
            'meta' => [
                'title' => 'Plan d\'Accès - DGPBP',
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

<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

// Importation de tous les contrôleurs
use App\Http\Controllers\AccueilController;
use App\Http\Controllers\AppInitController;
use App\Http\Controllers\AProposController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MissionsController;
use App\Http\Controllers\ActualitesController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\DirectionsController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\PartenariatsController;
use App\Http\Controllers\Admin\DashboardController;

Route::get('/', [AccueilController::class, 'index'])->name('welcome');
Route::get('/init', [AppInitController::class, 'init'])->name('app.init');

// À Propos
Route::prefix('a-propos')->group(function() {
    Route::get('/', [AProposController::class, 'index'])->name('about.index');
    Route::get('/mot-du-coordinateur', [MissionsController::class, 'motDuCoordinateur'])->name('about.mot_Coordinateur');
    Route::get('/missions-et-objectifs', [MissionsController::class, 'index'])->name('about.missions');
    Route::get('/equipe-et-departements', [MissionsController::class, 'niveauxIntervention'])->name('about.equipes_departements');

    // Route::get('/contexte-creation', [AProposController::class, 'contexte'])->name('about.contexte');
    // Route::get('/cadre-juridique', [AProposController::class, 'cadreJuridique'])->name('about.cadre_juridique');
    // Route::get('/objectifs-enjeux', [AProposController::class, 'objectifsEnjeux'])->name('about.objectifs_enjeux');
    // Route::get('/principes-action', [AProposController::class, 'principesAction'])->name('about.principes_action');
    // Route::get('/organisation', [AProposController::class, 'organisation'])->name('about.organisation');
    // Route::get('/partenaires', [AProposController::class, 'partenaires'])->name('about.partenaires');
});

// Missions et Axes Stratégiques
// Route::prefix('missions')->group(function() {
//     Route::get('/', [MissionsController::class, 'index'])->name('missions.index');
//     Route::get('/niveaux-intervention', [MissionsController::class, 'niveauxIntervention'])->name('missions.niveaux_intervention');
//     Route::get('/mot-du-coordinateur', [MissionsController::class, 'motDuCoordinateur'])->name('missions.mot_Coordinateur');
// });

// Les Directions de Projet
Route::prefix('directions')->group(function() {
    Route::get('/projets', [DirectionsController::class, 'projets'])->name('directions.projets');

    // Ressources fiscales
    Route::prefix('fiscales')->group(function() {
        Route::get('/', [DirectionsController::class, 'fiscales'])->name('directions.fiscales');
    });

    // Ressources douanières
    Route::prefix('douanieres')->group(function() {
        Route::get('/', [DirectionsController::class, 'douanieres'])->name('directions.douanieres');
    });

    // Ressources non fiscales
    Route::prefix('non-fiscales')->group(function() {
        Route::get('/', [DirectionsController::class, 'nonFiscales'])->name('directions.non_fiscales');
    });

    // Maîtrise des dépenses fiscales et apurement des arriérés
    Route::prefix('depenses')->group(function() {
        Route::get('/', [DirectionsController::class, 'depenses'])->name('directions.depenses');
        Route::get('/depenses-fiscales', [DirectionsController::class, 'depensesFiscales'])->name('directions.depenses_fiscales');
    });

    // Digitalisation
    Route::prefix('digitalisation')->group(function() {
        Route::get('/', [DirectionsController::class, 'digitalisation'])->name('directions.digitalisation');
    });
});

// Partenariats et Soutiens Techniques
Route::prefix('partenariats')->group(function() {
    Route::get('/', [PartenariatsController::class, 'index'])->name('partenariats.index');
    Route::get('/institutionnels', [PartenariatsController::class, 'institutionnels'])->name('partenariats.institutionnels');
    Route::get('/roles', [PartenariatsController::class, 'roles'])->name('partenariats.roles');
    Route::get('/projets-resultats', [PartenariatsController::class, 'projetsResultats'])->name('partenariats.projets_resultats');
});

// Actualités et Ressources
Route::prefix('actualites')->group(function() {
    Route::get('/', [ActualitesController::class, 'index'])->name('actualites.index');
    Route::get('/{id}', [ActualitesController::class, 'show'])->name('actualites.show');

    Route::get('/communiques-ateliers-seminaires', [ActualitesController::class, 'communiques'])->name('actualites.communiques');
    Route::get('/rapports-publications', [ActualitesController::class, 'rapports'])->name('actualites.rapports');
    Route::get('/medias', [ActualitesController::class, 'medias'])->name('actualites.medias');
});

// Contact
Route::prefix('contact')->group(function() {
    Route::get('/', [ContactController::class, 'index'])->name('contact.index');
    Route::get('/formulaire', [ContactController::class, 'formulaire'])->name('contact.formulaire');
    Route::get('/coordonnees', [ContactController::class, 'coordonnees'])->name('contact.coordonnees');
    Route::get('/plan-acces', [ContactController::class, 'planAcces'])->name('contact.plan_acces');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin-panel')->name('admin.')->middleware(['auth'])->group(function () {
    Route::resource('news', NewsController::class);
    Route::resource('medias', MediaController::class);
    Route::resource('reports', ReportController::class);
    Route::resource('users', UserController::class);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

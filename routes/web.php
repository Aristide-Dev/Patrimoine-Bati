<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

// Importation de tous les contrôleurs
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\AppInitController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActualitesController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\ParcImmobilierController;
use App\Http\Controllers\PatrimoineController;
Route::get('/init', [AppInitController::class, 'init'])->name('app.init');
Route::get('/', [HomeController::class, 'index'])->name('home');

// Qui sommes-nous
Route::get('/about', [AboutController::class, 'index'])->name('about.index');
Route::get('/about/mot-de-la-directrice', [AboutController::class, 'motDirectrice'])->name('about.mot-directrice');
Route::get('/about/equipe-gestion', [AboutController::class, 'equipeGestion'])->name('about.equipe-gestion');


// Actualités et Ressources
Route::prefix('actualites')->group(function() {
    Route::get('/', [ActualitesController::class, 'index'])->name('actualites.index');

    Route::get('/communiques-ateliers-seminaires', [ActualitesController::class, 'communiques'])->name('actualites.communiques');
    Route::get('/rapports-publications', [ActualitesController::class, 'rapports'])->name('actualites.rapports');
    Route::get('/medias', [ActualitesController::class, 'medias'])->name('actualites.medias');
    Route::get('/{slug}', [ActualitesController::class, 'show'])->name('actualites.show');
});

// Demandes
Route::prefix('espace-client')->group(function () {
    Route::get('/formulaire', [DemandeController::class, 'formulaire'])->name('demandes.formulaire');
    Route::get('/nouvelle-demande', [DemandeController::class, 'newDemande'])->name('demandes.new');
    Route::post('/store', [DemandeController::class, 'store'])->name('demandes.store');
    Route::get('/processus-obtention', [DemandeController::class, 'processusObtention'])->name('demandes.processus');
    Route::get('/verifier', [DemandeController::class, 'verifier'])->name('demandes.verifier');
    Route::get('/verification', [DemandeController::class, 'verification'])->name('demandes.verification');
    Route::post('/recherche-biens', [DemandeController::class, 'rechercheBiens'])->name('demandes.recherche-biens');
    Route::get('/bien/{id}', [DemandeController::class, 'detail'])->name('demandes.detail');
});

Route::prefix('patrimoine')->group(function () {
    Route::get('/rechercher', [DemandeController::class, 'rechercher'])->name('patrimoine.demandes.rechercher');
    Route::get('/parc-immobilier', [ParcImmobilierController::class, 'index'])->name('patrimoine.demandes.parc_immobilier');
    
    // Pages du patrimoine bâti
    // Route::get('/categories', [PatrimoineController::class, 'categories'])->name('patrimoine.categories');
    Route::get('/historique', [PatrimoineController::class, 'historic'])->name('patrimoine.historic');
    // Route::get('/localisations', [PatrimoineController::class, 'locations'])->name('patrimoine.locations');
});

// Contact
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// ------------------------------------------------------------------------------------------
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

    
    Route::get('/invoices', [InvoiceController::class, 'index'])->name('invoices.index');
    Route::get('/invoices/{id}', [InvoiceController::class, 'show'])->name('invoices.show');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

// Authentication
require __DIR__.'/auth.php';

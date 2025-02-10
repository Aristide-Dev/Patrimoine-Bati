<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

// Importation de tous les contrôleurs
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\AppInitController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\ActualitesController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\Admin\DashboardController;

Route::get('/init', [AppInitController::class, 'init'])->name('app.init');
Route::get('/', [HomeController::class, 'index'])->name('home');

// Qui sommes-nous
Route::get('/about', [AboutController::class, 'index'])->name('about.index');

// Documentation
Route::prefix('documentation')->group(function () {
    Route::get('/guides', [DocumentationController::class, 'guides'])->name('documentation.guides');
    Route::get('/regulations', [DocumentationController::class, 'regulations'])->name('documentation.regulations');
    Route::get('/forms', [DocumentationController::class, 'forms'])->name('documentation.forms');
});


// Actualités et Ressources
Route::prefix('actualites')->group(function() {
    Route::get('/', [ActualitesController::class, 'index'])->name('actualites.index');

    Route::get('/communiques-ateliers-seminaires', [ActualitesController::class, 'communiques'])->name('actualites.communiques');
    Route::get('/rapports-publications', [ActualitesController::class, 'rapports'])->name('actualites.rapports');
    Route::get('/medias', [ActualitesController::class, 'medias'])->name('actualites.medias');
    Route::get('/{slug}', [ActualitesController::class, 'show'])->name('actualites.show');
});

// Médiathèque
Route::prefix('media')->group(function () {
    Route::get('/photos', [MediaController::class, 'photos'])->name('media.photos');
    Route::get('/videos', [MediaController::class, 'videos'])->name('media.videos');
    Route::get('/publications', [MediaController::class, 'publications'])->name('media.publications');
});

// Demandes
Route::prefix('demandes')->group(function () {
    Route::get('/formulaire', [DemandeController::class, 'formulaire'])->name('demandes.formulaire');
    Route::post('/store', [DemandeController::class, 'store'])->name('demandes.store');
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
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');

// Authentication
require __DIR__.'/auth.php';

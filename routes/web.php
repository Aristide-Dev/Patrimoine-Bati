<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

// Importation de tous les contrôleurs
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\DemandeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Services
Route::prefix('services')->group(function () {
    Route::get('/housing', [ServicesController::class, 'housing'])->name('services.housing');
    Route::get('/commercial', [ServicesController::class, 'commercial'])->name('services.commercial');
    Route::get('/procedures', [ServicesController::class, 'procedures'])->name('services.procedures');
    Route::get('/faq', [ServicesController::class, 'faq'])->name('services.faq');
});

// À Propos
Route::prefix('about')->group(function () {
    Route::get('/', [AboutController::class, 'index'])->name('about.index');
});

// Documentation
Route::prefix('documentation')->group(function () {
    Route::get('/guides', [DocumentationController::class, 'guides'])->name('documentation.guides');
    Route::get('/regulations', [DocumentationController::class, 'regulations'])->name('documentation.regulations');
    Route::get('/forms', [DocumentationController::class, 'forms'])->name('documentation.forms');
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

// Authentication
require __DIR__.'/auth.php';

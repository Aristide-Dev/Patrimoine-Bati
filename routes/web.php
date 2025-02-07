<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

// Importation de tous les contrôleurs
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatrimoineController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\MediaController;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Patrimoine
Route::prefix('patrimoine')->group(function () {
    Route::get('/map', [PatrimoineController::class, 'map'])->name('patrimoine.map');
    Route::get('/categories', [PatrimoineController::class, 'categories'])->name('patrimoine.categories');
    Route::get('/locations', [PatrimoineController::class, 'locations'])->name('patrimoine.locations');
    Route::get('/historic', [PatrimoineController::class, 'historic'])->name('patrimoine.historic');
});

// Services
Route::prefix('services')->group(function () {
    Route::get('/housing', [ServicesController::class, 'housing'])->name('services.housing');
    Route::get('/commercial', [ServicesController::class, 'commercial'])->name('services.commercial');
    Route::get('/procedures', [ServicesController::class, 'procedures'])->name('services.procedures');
    Route::get('/faq', [ServicesController::class, 'faq'])->name('services.faq');
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

// Authentication
require __DIR__.'/auth.php';

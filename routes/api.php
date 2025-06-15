<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\PropertyManagerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/articles', [ArticleController::class, 'index'])->name('public.articles');
Route::get('/articles/featured', [ArticleController::class, 'featured'])->name('public.articles.featured');
Route::get('/medias', [MediaController::class, 'index'])->name('api.medias.list');

Route::prefix('reports')->name('api.repports.')->group(function () {
    Route::get('/', [ReportController::class, 'index'])->name('index'); // Récupérer les rapports avec filtres et pagination
    Route::get('/{report}/download', [ReportController::class, 'download'])->name('download'); // Télécharger un rapport
});

Route::prefix('property-managers')->group(function () {
    Route::get('/', [PropertyManagerController::class, 'index']);
    Route::get('/statistics', [PropertyManagerController::class, 'statistics']);
    Route::get('/{id}', [PropertyManagerController::class, 'show']);
    Route::get('/commune/{commune}', [PropertyManagerController::class, 'byCommune']);
});

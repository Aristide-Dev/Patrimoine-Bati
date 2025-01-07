<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\ArticleController;

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

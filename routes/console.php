<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// Planifier la mise à jour des temps de lecture
Schedule::command('news:update-reading-times')
    ->daily() // Exécute tous les jours à minuit
    ->withoutOverlapping() // Évite les exécutions simultanées
    ->runInBackground() // Exécute en arrière-plan
    ->appendOutputTo(storage_path('logs/reading-times-update.log')); // Logs

// Planifier la génération du sitemap
Schedule::command('sitemap:generate')
    ->daily() // Exécute tous les jours à minuit
    ->withoutOverlapping() // Évite les exécutions simultanées
    ->runInBackground() // Exécute en arrière-plan
    ->appendOutputTo(storage_path('logs/sitemap-generation.log')); // Logs

// Autres options de planification disponibles :
// ->hourly()                    // Toutes les heures
// ->daily()                     // Tous les jours à minuit
// ->dailyAt('13:00')           // Tous les jours à 13h00
// ->twiceDaily(1, 13)          // Deux fois par jour (1h et 13h)
// ->weekly()                    // Une fois par semaine (dimanche minuit)
// ->weeklyOn(1, '8:00')        // Tous les lundis à 8h00
// ->monthly()                   // Le premier jour du mois à minuit
// ->monthlyOn(4, '15:30')      // Le 4 de chaque mois à 15h30
// ->quarterly()                 // Tous les 3 mois
// ->yearly()                    // Une fois par an

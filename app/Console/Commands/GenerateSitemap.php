<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;
use App\Models\News;
use App\Models\Media;
use App\Models\Report;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Génère le sitemap du site PBP';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Génération du sitemap PBP en cours...');

        $sitemapPath = public_path('sitemap.xml');
        
        // Génération automatique du sitemap en crawlant le site
        SitemapGenerator::create(config('app.url'))
            ->configureCrawler(function ($crawler) {
                // Ignorer les pages d'administration et d'authentification
                $crawler->ignoreRobots();
            })
            ->getSitemap()
            // Ajouter les pages statiques importantes
            ->add(Url::create('/')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                ->setPriority(1.0))
            ->add(Url::create('/about')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8))
            ->add(Url::create('/about/equipe-gestion')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.7))
            ->add(Url::create('/about/gerants')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.7))
            ->add(Url::create('/about/mot-directrice')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.7))
            ->add(Url::create('/patrimoine/categories')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.8))
            ->add(Url::create('/patrimoine/locations')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.8))
            ->add(Url::create('/patrimoine/rechercher')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.7))
            ->add(Url::create('/patrimoine/parc-immobilier')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.8))
            ->add(Url::create('/patrimoine/historic')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.9))
            ->add(Url::create('/actualites')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                ->setPriority(0.8))
            ->add(Url::create('/actualites/medias')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.7))
            ->add(Url::create('/actualites/rapports')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.7))
            ->add(Url::create('/actualites/rapports-publications')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.6))
            ->add(Url::create('/actualites/communiques-ateliers-seminaires')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.7))
            ->add(Url::create('/espace-client/formulaire')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8))
            ->add(Url::create('/espace-client/nouvelle-demande')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8))
            ->add(Url::create('/espace-client/processus-obtention')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.7))
            ->add(Url::create('/espace-client/verifier')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.6))
            ->add(Url::create('/contact')
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.6))
            // Ajouter les actualités dynamiques
            ->add($this->getNewsUrls())
            // Ajouter les médias dynamiques
            ->add($this->getMediaUrls())
            // Ajouter les rapports dynamiques
            ->add($this->getReportUrls())
            ->writeToFile($sitemapPath);

        $this->info('Sitemap PBP généré avec succès : ' . $sitemapPath);
        
        return Command::SUCCESS;
    }

    /**
     * Récupère les URLs des actualités
     */
    private function getNewsUrls(): array
    {
        return News::where('published_at', '<=', Carbon::now())
            ->whereNotNull('published_at')
            ->get()
            ->map(function ($news) {
                return Url::create("/actualites/{$news->slug}")
                    ->setLastModificationDate($news->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.6);
            })
            ->toArray();
    }

    /**
     * Récupère les URLs des médias
     */
    private function getMediaUrls(): array
    {
        return Media::where('published_at', '<=', Carbon::now())
            ->whereNotNull('published_at')
            ->get()
            ->map(function ($media) {
                return Url::create("/actualites/medias/{$media->slug}")
                    ->setLastModificationDate($media->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.5);
            })
            ->toArray();
    }

    /**
     * Récupère les URLs des rapports
     */
    private function getReportUrls(): array
    {
        return Report::where('published_at', '<=', Carbon::now())
            ->whereNotNull('published_at')
            ->get()
            ->map(function ($report) {
                return Url::create("/actualites/rapports-publications/{$report->slug}")
                    ->setLastModificationDate($report->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.5);
            })
            ->toArray();
    }
}

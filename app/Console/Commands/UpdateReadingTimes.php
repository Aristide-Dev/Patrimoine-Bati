<?php

namespace App\Console\Commands;

use App\Models\News;
use Illuminate\Console\Command;

class UpdateReadingTimes extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'news:update-reading-times';

    /**
     * The console command description.
     */
    protected $description = 'Met à jour les temps de lecture de tous les articles existants en prenant en compte les images';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Mise à jour des temps de lecture...');

        $news = News::all();
        $updated = 0;
        $bar = $this->output->createProgressBar($news->count());

        foreach ($news as $article) {
            $oldReadTime = $article->read_time;
            $newReadTime = News::calculateReadingTime($article->content);
            
            if ($oldReadTime !== $newReadTime) {
                $article->read_time = $newReadTime;
                $article->save();
                $updated++;
                
                $this->line("\n📰 {$article->title}");
                $this->line("   Ancien temps: {$oldReadTime} min → Nouveau temps: {$newReadTime} min");
            }
            
            $bar->advance();
        }

        $bar->finish();
        
        $this->newLine(2);
        $this->info("✅ Mise à jour terminée!");
        $this->info("📊 {$updated} articles mis à jour sur {$news->count()} articles total.");
    }
}

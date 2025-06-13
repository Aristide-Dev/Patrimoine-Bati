<?php

namespace App\Models;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = ['title', 'slug', 'excerpt', 'content', 'image', 'category', 'tags', 'views', 'read_time', 'published_at', 'featured'];

    public function media()
    {
        return $this->morphMany(Media::class, 'mediable');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'published_at' => 'date',
            'featured' => 'boolean',
        ];
    }

    /**
     * Boot method to set up model events
     */
    protected static function boot()
    {
        parent::boot();

        // Calculer automatiquement le temps de lecture lors de la sauvegarde
        static::saving(function ($news) {
            // Toujours recalculer le temps de lecture si le contenu est présent
            if ($news->content !== null) {
                $newReadTime = self::calculateReadingTime($news->content);
                $news->read_time = $newReadTime;
                
                // Log uniquement si c'est un changement significatif
                if ($news->exists && $news->getOriginal('read_time') !== $newReadTime) {
                    \Log::info("Temps de lecture mis à jour pour '{$news->title}': " . 
                              ($news->getOriginal('read_time') ?? 'N/A') . " min → {$newReadTime} min");
                }
            }
        });

        // Event après création d'un nouvel article
        static::created(function ($news) {
            \Log::info("Nouvel article créé: '{$news->title}' - Temps de lecture: {$news->read_time} min");
        });

        // Event après modification d'un article existant
        static::updated(function ($news) {
            if ($news->wasChanged('content')) {
                \Log::info("Contenu modifié pour '{$news->title}' - Nouveau temps de lecture: {$news->read_time} min");
            }
        });
    }

    public function getTagsAttribute($value)
    {
        return json_decode($value, true);
    }

    public function setTagsAttribute($value)
    {
        $this->attributes['tags'] = json_encode($value);
    }

    // Mutator pour le slug
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-');
    }

    public static function generateUniqueSlug($title, $id = null)
    {
        $slug = Str::slug($title, '-');
        $originalSlug = $slug;

        $counter = 1;

        while (self::where('slug', $slug)->where('id', '!=', $id)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }

    public static function calculateReadingTime($content)
    {
        if (!$content) {
            return 1; // Temps minimum de lecture
        }

        $textContent = '';

        // Vérifier si c'est du contenu Lexical (JSON)
        if (is_string($content) && (str_starts_with(trim($content), '{') || str_starts_with(trim($content), '['))) {
            try {
                $lexicalData = json_decode($content, true);
                
                // Si c'est un état Lexical valide
                if ($lexicalData && isset($lexicalData['root']) && isset($lexicalData['root']['children'])) {
                    $textContent = self::extractTextFromLexicalNodes($lexicalData['root']['children']);
                } else {
                    // Si le JSON n'est pas un état Lexical, traiter comme du texte brut
                    $textContent = is_array($lexicalData) ? '' : $content;
                }
            } catch (\Exception $e) {
                // Si le parsing JSON échoue, traiter comme du texte brut
                $textContent = $content;
            }
        } else {
            // Contenu HTML ou texte brut
            $textContent = strip_tags($content);
        }

        // Nettoyer le texte et compter les mots
        $textContent = trim($textContent);
        if (empty($textContent)) {
            return 1; // Temps minimum
        }

        $wordCount = str_word_count($textContent);
        $readingSpeed = 200; // Vitesse moyenne en mots par minute

        $readingTime = ceil($wordCount / $readingSpeed);
        return max(1, $readingTime); // Minimum 1 minute
    }

    /**
     * Extrait le texte des nœuds Lexical en ignorant les images
     */
    private static function extractTextFromLexicalNodes($nodes)
    {
        $text = '';

        if (!is_array($nodes)) {
            return $text;
        }

        foreach ($nodes as $node) {
            if (!is_array($node)) {
                continue;
            }

            // Ignorer les nœuds d'image
            if (isset($node['type']) && $node['type'] === 'image') {
                continue;
            }

            // Extraire le texte des nœuds de texte
            if (isset($node['type']) && $node['type'] === 'text' && isset($node['text'])) {
                $text .= $node['text'] . ' ';
            }

            // Traiter récursivement les nœuds enfants
            if (isset($node['children']) && is_array($node['children'])) {
                $text .= self::extractTextFromLexicalNodes($node['children']);
            }
        }

        return $text;
    }

    /**
     * Accesseur pour le temps de lecture formaté
     */
    public function getFormattedReadTimeAttribute()
    {
        $minutes = $this->read_time ?? 1;
        
        if ($minutes === 1) {
            return '1 min de lecture';
        }
        
        return $minutes . ' min de lecture';
    }

}

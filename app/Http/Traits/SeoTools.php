<?php

namespace App\Http\Traits;

trait SeoTools
{
    /**
     * Données SEO pour Inertia.js
     */
    protected $seoData = [];
    /**
     * Configure les métadonnées SEO de base
     *
     * @param string $title
     * @param string $description
     * @param array $keywords
     * @param string $canonical
     * @return void
     */
    protected function setSeoMeta(string $title, string $description, array $keywords = [], string $canonical = null): void
    {
        // Stocker les métadonnées dans la session pour utilisation dans les vues Blade
        session([
            'seo_title' => $title,
            'seo_description' => $description,
            'seo_keywords' => $keywords,
            'seo_canonical' => $canonical,
        ]);
        
        // Préparer les données SEO pour Inertia.js
        $this->seoData = [
            'title' => $title,
            'description' => $description,
            'keywords' => $keywords,
            'canonical' => $canonical,
            'type' => 'website',
            'image' => null,
            'article' => null,
            'organization' => null
        ];
    }

    /**
     * Configure les métadonnées pour une page d'actualité
     *
     * @param object $news
     * @return void
     */
    protected function setNewsSeoMeta($news): void
    {
        $title = $news->title . ' - PBP';
        
        // Créer une description SEO à partir du contenu Lexical
        $description = $this->createSeoDescription($news);
        
        $canonical = route('news.show', $news->slug);
        
        $this->setSeoMeta($title, $description, ['actualités', 'PBP', 'patrimoine bâti'], $canonical);
        
        // Stocker des métadonnées supplémentaires pour les actualités
        session([
            'seo_type' => 'article',
            'seo_article_published' => $news->published_at?->toISOString(),
            'seo_article_modified' => $news->updated_at->toISOString(),
            'seo_article_author' => 'PBP - Patrimoine Bâti Public de Guinée',
            'seo_article_section' => 'Actualités',
            'seo_image' => $news->featured_image ? asset('storage/' . $news->featured_image) : null,
        ]);
        
        // Préparer les données SEO pour Inertia.js
        $this->seoData = array_merge($this->seoData, [
            'type' => 'article',
            'image' => $news->featured_image ? asset('storage/' . $news->featured_image) : null,
            'article' => [
                'published_at' => $news->published_at?->toISOString(),
                'updated_at' => $news->updated_at->toISOString(),
                'author' => 'PBP - Patrimoine Bâti Public de Guinée',
                'section' => 'Actualités',
                'tags' => ['patrimoine bâti', 'Guinée', 'service public', 'Conakry', 'Kaloum']
            ]
        ]);
    }

    /**
     * Configure les métadonnées pour une page de média
     *
     * @param object $media
     * @return void
     */
    protected function setMediaSeoMeta($media): void
    {
        $title = $media->title . ' - PBP';
        $description = $media->excerpt ?? 'Découvrez ce média du Patrimoine Bâti Public de Guinée.';
        $canonical = route('medias.show', $media->slug);
        
        $this->setSeoMeta($title, $description, ['médias', 'PBP', 'patrimoine bâti'], $canonical);
        
        // Stocker des métadonnées supplémentaires pour les médias
        session([
            'seo_type' => 'article',
            'seo_image' => $media->featured_image ? asset('storage/' . $media->featured_image) : null,
        ]);
    }

    /**
     * Configure les métadonnées pour une page de rapport
     *
     * @param object $report
     * @return void
     */
    protected function setReportSeoMeta($report): void
    {
        $title = $report->title . ' - PBP';
        $description = $report->excerpt ?? 'Découvrez ce rapport du Patrimoine Bâti Public de Guinée.';
        $canonical = route('reports.show', $report->slug);
        
        $this->setSeoMeta($title, $description, ['rapports', 'publications', 'PBP', 'patrimoine bâti'], $canonical);
        
        // Stocker des métadonnées supplémentaires pour les rapports
        session([
            'seo_type' => 'article',
            'seo_image' => $report->featured_image ? asset('storage/' . $report->featured_image) : null,
        ]);
    }

    /**
     * Configure les métadonnées pour la page d'accueil
     *
     * @return void
     */
    protected function setHomeSeoMeta(): void
    {
        $title = 'PBP - Patrimoine Bâti Public de Guinée';
        $description = 'Le Patrimoine Bâti Public (PBP) de Guinée assure la gestion, l\'entretien et la valorisation du patrimoine immobilier de l\'État guinéen. Situé aux Ports Conteneurs de Conakry, Kaloum.';
        $keywords = ['patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP'];
        
        $this->setSeoMeta($title, $description, $keywords, route('home'));
        
        // Stocker des métadonnées spécifiques pour la page d'accueil
        session([
            'seo_type' => 'website',
            'seo_organization_name' => 'PBP - Patrimoine Bâti Public de Guinée',
            'seo_organization_type' => 'GovernmentOrganization',
            'seo_contact_phone' => '+224 655 358 284',
            'seo_contact_email' => 'info@pbpguinee.com',
            'seo_address' => 'PORTS CONTENEURS DE CONAKRY, Kaloum, Conakry, GN',
            'seo_social_facebook' => 'https://www.facebook.com/pbpsau/',
            'seo_social_linkedin' => 'https://www.linkedin.com/company/patrimoinebatiguinee/',
        ]);
        
        // Préparer les données SEO pour Inertia.js
        $this->seoData = array_merge($this->seoData, [
            'type' => 'website',
            'organization' => [
                'type' => 'GovernmentOrganization',
                'name' => 'PBP - Patrimoine Bâti Public de Guinée',
                'contact_phone' => '+224 655 358 284',
                'contact_email' => 'info@pbpguinee.com',
                'address' => 'PORTS CONTENEURS DE CONAKRY, Kaloum, Conakry, GN',
                'social_facebook' => 'https://www.facebook.com/pbpsau/',
                'social_linkedin' => 'https://www.linkedin.com/company/patrimoinebatiguinee/'
            ]
        ]);
    }

    /**
     * Configure les métadonnées pour une page à propos
     *
     * @param string $pageTitle
     * @param string $description
     * @return void
     */
    protected function setAboutSeoMeta(string $pageTitle, string $description): void
    {
        $title = $pageTitle . ' - PBP';
        $keywords = ['à propos', 'PBP', 'patrimoine bâti', 'organisation', 'équipe'];
        
        $this->setSeoMeta($title, $description, $keywords);
        
        // Stocker le type de page
        session(['seo_type' => 'article']);
        
        // Préparer les données SEO pour Inertia.js
        $this->seoData = array_merge($this->seoData, [
            'type' => 'article'
        ]);
    }
    
    /**
     * Récupère les données SEO pour Inertia.js
     *
     * @return array
     */
    protected function getSeoData(): array
    {
        return $this->cleanSeoData($this->seoData);
    }

    /**
     * Crée une description SEO optimisée à partir du contenu
     *
     * @param object $news
     * @return string
     */
    private function createSeoDescription($news)
    {
        // Priorité 1: Utiliser l'excerpt s'il existe
        if (!empty($news->excerpt)) {
            return $news->excerpt;
        }

        // Priorité 2: Extraire le texte du contenu Lexical
        $contentText = $this->extractTextFromLexicalContent($news->content);
        
        if (!empty($contentText)) {
            // Limiter à 160 caractères pour le SEO
            $description = substr($contentText, 0, 160);
            
            // S'assurer que la description se termine proprement
            if (strlen($contentText) > 160) {
                $lastSpace = strrpos($description, ' ');
                if ($lastSpace !== false && $lastSpace > 120) {
                    $description = substr($description, 0, $lastSpace);
                }
                $description .= '...';
            }
            
            return $description;
        }

        // Priorité 3: Description par défaut
        return 'Découvrez cet article du Patrimoine Bâti Public de Guinée.';
    }

    /**
     * Extrait le texte du contenu Lexical de manière sécurisée
     *
     * @param string|null $content
     * @return string
     */
    private function extractTextFromLexicalContent($content)
    {
        if (!$content) {
            return '';
        }

        // Vérifier si c'est du contenu Lexical (JSON)
        if (is_string($content) && (str_starts_with(trim($content), '{') || str_starts_with(trim($content), '['))) {
            try {
                $lexicalData = json_decode($content, true);
                
                // Si c'est un état Lexical valide
                if ($lexicalData && isset($lexicalData['root']) && isset($lexicalData['root']['children'])) {
                    return $this->extractTextFromLexicalNodes($lexicalData['root']['children']);
                } else {
                    // Si le JSON n'est pas un état Lexical, retourner le contenu tel quel
                    return $content;
                }
            } catch (\Exception $e) {
                // Si le parsing JSON échoue, retourner le contenu tel quel
                return $content;
            }
        } else {
            // Contenu HTML ou texte brut
            return strip_tags($content);
        }
    }

    /**
     * Extrait le texte des nœuds Lexical en ignorant les images
     *
     * @param array $nodes
     * @return string
     */
    private function extractTextFromLexicalNodes($nodes)
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
                $text .= $this->extractTextFromLexicalNodes($node['children']);
            }
        }

        return trim($text);
    }

    /**
     * Nettoie les données SEO pour éviter les Symboles
     *
     * @param array $data
     * @return array
     */
    private function cleanSeoData($data)
    {
        if (!is_array($data)) {
            return $data;
        }

        $cleanData = [];

        foreach ($data as $key => $value) {
            // Nettoyer la clé
            $cleanKey = is_string($key) ? $key : (string) $key;

            // Nettoyer la valeur
            if (is_null($value)) {
                $cleanData[$cleanKey] = null;
            } elseif (is_string($value)) {
                $cleanData[$cleanKey] = $value;
            } elseif (is_numeric($value)) {
                $cleanData[$cleanKey] = $value;
            } elseif (is_bool($value)) {
                $cleanData[$cleanKey] = $value;
            } elseif (is_array($value)) {
                $cleanData[$cleanKey] = $this->cleanSeoData($value);
            } else {
                $cleanData[$cleanKey] = (string) $value;
            }
        }

        return $cleanData;
    }
}

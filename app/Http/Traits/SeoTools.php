<?php

namespace App\Http\Traits;

trait SeoTools
{
    /**
     * Données SEO pour Inertia.js
     */
    protected $seoData = [];
    
    /**
     * Récupère les mots-clés SEO globaux depuis la configuration
     *
     * @return array
     */
    protected function getGlobalSeoKeywords(): array
    {
        return config('seotools.defaults.keywords', [
            'patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP'
        ]);
    }
    
    /**
     * Récupère des mots-clés SEO spécifiques par catégorie
     *
     * @param string $category
     * @return array
     */
    protected function getCategorySeoKeywords(string $category): array
    {
        $categoryKeywords = [
            'actualités' => [
                'actualités', 'nouvelles', 'événements', 'communiqués', 'informations', 'news', 'breaking news',
                'développements', 'mises à jour', 'annonces', 'publications', 'communiqués de presse'
            ],
            'médias' => [
                'médias', 'photos', 'vidéos', 'galerie', 'multimédia', 'images', 'photographies', 'vidéographie',
                'documentation visuelle', 'reportages', 'interviews', 'captures', 'enregistrements'
            ],
            'rapports' => [
                'rapports', 'publications', 'études', 'analyses', 'documents', 'rapports annuels', 'rapports trimestriels',
                'rapports mensuels', 'bilan', 'compte-rendu', 'synthèse', 'évaluation', 'audit', 'expertise'
            ],
            'patrimoine' => [
                'patrimoine', 'patrimoine bâti', 'patrimoine immobilier', 'patrimoine national', 'patrimoine architectural',
                'patrimoine culturel', 'patrimoine historique', 'patrimoine collectif', 'patrimoine public',
                'patrimoine étatique', 'patrimoine gouvernemental', 'patrimoine institutionnel'
            ],
            'services' => [
                'services', 'gestion', 'entretien', 'maintenance', 'location', 'administration', 'exploitation',
                'valorisation', 'commercialisation', 'gestion locative', 'gestion technique', 'gestion financière',
                'gestion administrative', 'gestion opérationnelle', 'facilities management'
            ],
            'contact' => [
                'contact', 'coordonnées', 'adresse', 'téléphone', 'email', 'localisation', 'géolocalisation',
                'itinéraire', 'accès', 'horaires', 'ouverture', 'fermeture', 'permanence', 'réception'
            ],
            'about' => [
                'à propos', 'présentation', 'histoire', 'mission', 'vision', 'équipe', 'organisation', 'structure',
                'valeurs', 'objectifs', 'stratégie', 'gouvernance', 'leadership', 'management', 'direction'
            ],
            'demandes' => [
                'demandes', 'formulaires', 'procédures', 'services clients', 'espace client', 'dossier', 'candidature',
                'inscription', 'enregistrement', 'souscription', 'adhésion', 'participation', 'collaboration'
            ],
            'maintenance' => [
                'maintenance', 'entretien', 'réparation', 'rénovation', 'restauration', 'réhabilitation', 'amélioration',
                'modernisation', 'mise à niveau', 'upgrade', 'refonte', 'transformation', 'adaptation'
            ],
            'location' => [
                'location', 'bail', 'louer', 'locataire', 'propriétaire', 'loyer', 'charges', 'caution', 'garantie',
                'contrat', 'convention', 'accord', 'engagement', 'durée', 'période', 'renouvellement'
            ],
            'technique' => [
                'technique', 'technologie', 'innovation', 'digitalisation', 'numérisation', 'informatisation',
                'automatisation', 'robotisation', 'intelligence artificielle', 'big data', 'analytics',
                'monitoring', 'télésurveillance', 'télégestion', 'IoT', 'smart building'
            ],
            'financier' => [
                'financier', 'budget', 'financement', 'investissement', 'rentabilité', 'performance', 'coût',
                'économie', 'optimisation', 'maximisation', 'minimisation', 'réduction', 'augmentation',
                'croissance', 'développement', 'expansion'
            ],
            'sécurité' => [
                'sécurité', 'protection', 'sûreté', 'prévention', 'risque', 'danger', 'incident', 'accident',
                'urgence', 'évacuation', 'sauvetage', 'intervention', 'secours', 'alerte', 'alarme'
            ],
            'qualité' => [
                'qualité', 'excellence', 'performance', 'efficacité', 'efficience', 'productivité', 'satisfaction',
                'amélioration', 'optimisation', 'certification', 'norme', 'standard', 'critère', 'indicateur'
            ],
            'environnement' => [
                'environnement', 'écologie', 'durabilité', 'développement durable', 'énergie', 'énergies renouvelables',
                'efficacité énergétique', 'performance énergétique', 'économie d\'énergie', 'réduction consommation',
                'empreinte carbone', 'gaz à effet de serre', 'climat', 'transition énergétique'
            ]
        ];
        
        return $categoryKeywords[$category] ?? [];
    }
    
    /**
     * Récupère des mots-clés SEO par priorité (haute, moyenne, basse)
     *
     * @param string $priority
     * @return array
     */
    protected function getPrioritySeoKeywords(string $priority = 'haute'): array
    {
        $priorityKeywords = [
            'haute' => [
                'patrimoine bâti', 'Guinée', 'service public', 'immobilier', 'État', 'Conakry', 'Kaloum', 'PBP',
                'patrimoine immobilier', 'gestion immobilière', 'administration publique', 'service immobilier',
                'bâtiments publics', 'infrastructures publiques', 'patrimoine national', 'biens immobiliers'
            ],
            'moyenne' => [
                'entretien bâtiments', 'maintenance immobilière', 'valorisation patrimoine', 'gestion patrimoine',
                'immobilier public', 'bâtiments administratifs', 'infrastructures étatiques', 'patrimoine bâti public',
                'ministères Guinée', 'administrations publiques', 'bâtiments gouvernementaux', 'infrastructures publiques',
                'location bâtiments', 'gestion locative publique', 'entretien infrastructures', 'maintenance bâtiments'
            ],
            'basse' => [
                'numérisation patrimoine', 'digitalisation patrimoine', 'informatisation gestion', 'système information',
                'développement durable', 'construction durable', 'bâtiment durable', 'patrimoine durable',
                'formation personnel', 'compétences techniques', 'expertise patrimoine', 'savoir-faire',
                'communication institutionnelle', 'relations publiques', 'information publique', 'transparence'
            ]
        ];
        
        return $priorityKeywords[$priority] ?? $priorityKeywords['haute'];
    }
    
    /**
     * Récupère des mots-clés SEO par contexte géographique
     *
     * @param string $context
     * @return array
     */
    protected function getGeographicSeoKeywords(string $context = 'local'): array
    {
        $geographicKeywords = [
            'local' => [
                'Conakry', 'Kaloum', 'Guinée Conakry', 'Capitale Guinée', 'Port de Conakry', 'Zone portuaire',
                'Kaloum Conakry', 'Centre ville Conakry', 'Guinée maritime', 'Région de Conakry'
            ],
            'national' => [
                'Guinée', 'République de Guinée', 'État guinéen', 'gouvernement Guinée', 'administration Guinée',
                'institutions publiques', 'services publics', 'patrimoine national', 'patrimoine Guinée'
            ],
            'regional' => [
                'Afrique de l\'Ouest', 'Afrique occidentale', 'Côte d\'Ivoire', 'Sénégal', 'Mali', 'Sierra Leone',
                'Libéria', 'Guinée-Bissau', 'Côte atlantique', 'Afrique subsaharienne'
            ],
            'international' => [
                'Afrique', 'continent africain', 'pays en développement', 'économie africaine', 'développement Afrique',
                'coopération internationale', 'aide internationale', 'investissement étranger', 'partenariat international'
            ]
        ];
        
        return $geographicKeywords[$context] ?? $geographicKeywords['local'];
    }
    
    /**
     * Récupère des mots-clés SEO par secteur d'activité
     *
     * @param string $sector
     * @return array
     */
    protected function getSectorSeoKeywords(string $sector = 'general'): array
    {
        $sectorKeywords = [
            'general' => [
                'patrimoine bâti', 'immobilier', 'service public', 'administration publique', 'gestion patrimoine',
                'bâtiments publics', 'infrastructures publiques', 'patrimoine national', 'biens immobiliers'
            ],
            'gouvernemental' => [
                'ministères Guinée', 'administrations publiques', 'bâtiments gouvernementaux', 'infrastructures publiques',
                'gouvernement Guinée', 'État guinéen', 'institutions publiques', 'services publics',
                'établissement public', 'organisme public', 'agence publique', 'office public'
            ],
            'commercial' => [
                'location bâtiments', 'gestion locative', 'commercialisation espaces', 'marketing immobilier',
                'promotion patrimoine', 'valorisation commerciale', 'stratégie commerciale', 'politique tarifaire',
                'négociation commerciale', 'contrats location', 'gestion clientèle', 'relation client'
            ],
            'technique' => [
                'maintenance', 'entretien', 'réparation', 'rénovation', 'restauration', 'réhabilitation',
                'amélioration', 'modernisation', 'mise à niveau', 'upgrade', 'refonte', 'transformation',
                'gestion technique', 'gestion énergétique', 'efficacité énergétique', 'performance énergétique'
            ],
            'financier' => [
                'investissement public', 'financement public', 'budget public', 'comptabilité publique',
                'gestion financière', 'contrôle financier', 'audit public', 'évaluation économique',
                'rentabilité patrimoine', 'performance patrimoine', 'optimisation patrimoine', 'maximisation valeur'
            ]
        ];
        
        return $sectorKeywords[$sector] ?? $sectorKeywords['general'];
    }
    
    /**
     * Combine les mots-clés globaux avec des mots-clés spécifiques
     *
     * @param array $specificKeywords
     * @return array
     */
    protected function combineSeoKeywords(array $specificKeywords = []): array
    {
        $globalKeywords = $this->getGlobalSeoKeywords();
        $combined = array_merge($globalKeywords, $specificKeywords);
        
        // Supprimer les doublons et limiter à 200 mots-clés maximum pour les 200+ mots-clés
        $unique = array_unique($combined);
        return array_slice($unique, 0, 200);
    }
    /**
     * Crée des mots-clés SEO intelligents basés sur le contexte
     *
     * @param string $pageType
     * @param string $priority
     * @param string $geographicContext
     * @param string $sector
     * @param array $additionalKeywords
     * @return array
     */
    protected function createIntelligentSeoKeywords(
        string $pageType = 'general',
        string $priority = 'haute',
        string $geographicContext = 'local',
        string $sector = 'general',
        array $additionalKeywords = []
    ): array {
        // Récupérer les mots-clés par catégorie
        $categoryKeywords = $this->getCategorySeoKeywords($pageType);
        
        // Récupérer les mots-clés par priorité
        $priorityKeywords = $this->getPrioritySeoKeywords($priority);
        
        // Récupérer les mots-clés géographiques
        $geographicKeywords = $this->getGeographicSeoKeywords($geographicContext);
        
        // Récupérer les mots-clés sectoriels
        $sectorKeywords = $this->getSectorSeoKeywords($sector);
        
        // Combiner tous les mots-clés
        $allKeywords = array_merge(
            $categoryKeywords,
            $priorityKeywords,
            $geographicKeywords,
            $sectorKeywords,
            $additionalKeywords
        );
        
        // Utiliser la méthode de combinaison existante
        return $this->combineSeoKeywords($allKeywords);
    }
    
    /**
     * Récupère des mots-clés SEO optimisés pour une page spécifique
     *
     * @param string $pageType
     * @param array $additionalKeywords
     * @return array
     */
    protected function getOptimizedSeoKeywords(string $pageType, array $additionalKeywords = []): array
    {
        $categoryKeywords = $this->getCategorySeoKeywords($pageType);
        $allKeywords = array_merge($categoryKeywords, $additionalKeywords);
        
        return $this->combineSeoKeywords($allKeywords);
    }
    
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
        // Combiner les mots-clés spécifiques avec les mots-clés globaux
        $combinedKeywords = $this->combineSeoKeywords($keywords);
        
        // Stocker les métadonnées dans la session pour utilisation dans les vues Blade
        session([
            'seo_title' => $title,
            'seo_description' => $description,
            'seo_keywords' => $combinedKeywords,
            'seo_canonical' => $canonical,
        ]);
        
        // Préparer les données SEO pour Inertia.js
        $this->seoData = [
            'title' => $title,
            'description' => $description,
            'keywords' => $combinedKeywords,
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
        
        $this->setSeoMeta($title, $description, ['actualités', 'nouvelles', 'événements', 'communiqués', 'rapports'], $canonical);
        
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
        
        $this->setSeoMeta($title, $description, ['médias', 'photos', 'vidéos', 'galerie', 'multimédia'], $canonical);
        
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
        
        $this->setSeoMeta($title, $description, ['rapports', 'publications', 'études', 'analyses', 'documents'], $canonical);
        
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
        
        // Utiliser les mots-clés globaux pour la page d'accueil
        $this->setSeoMeta($title, $description, [], route('home'));
        
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

<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\SeoTools;

class NewsController extends Controller
{
    use SeoTools;

    /**
     * Affiche la liste des actualités
     */
    public function index(Request $request)
    {
        // Configuration SEO pour la page des actualités
        $this->setSeoMeta(
            'Actualités - PBP',
            'Découvrez les dernières actualités du Patrimoine Bâti Public de Guinée. Informations sur nos activités, projets et développements.',
            ['actualités', 'PBP', 'patrimoine bâti', 'Guinée', 'nouvelles']
        );

        $query = News::where('published_at', '<=', now())
            ->whereNotNull('published_at');

        // Filtrage par catégorie
        if ($request->filled('category') && $request->category !== 'all') {
            $query->where('category', $request->category);
        }

        // Recherche par titre
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Tri par défaut : plus récent en premier
        $query->orderBy('published_at', 'desc');

        $news = $query->paginate(12)->withQueryString();

        return Inertia::render('Actualites/Index', [
            'news' => $news,
            'filters' => $request->only(['search', 'category']),
            'seo' => $this->getSeoData(),
        ]);
    }

    /**
     * Affiche une actualité spécifique
     */
    public function show($slug)
    {
        // Vérifier que l'actualité est publiée
        $news = News::where('slug', $slug)
            ->where('published_at', '<=', now())
            ->whereNotNull('published_at')
            ->first();
            
        if (!$news) {
            abort(404);
        }

        // Configuration SEO pour l'actualité
        $this->setNewsSeoMeta($news);

        // Incrémenter les vues AVANT de passer les données
        $news->increment('views');
        
        // Rafraîchir l'article pour avoir le nombre de vues mis à jour
        $news->refresh();

        // Actualités similaires
        $relatedNews = News::where('published_at', '<=', now())
            ->whereNotNull('published_at')
            ->where('id', '!=', $news->id)
            ->where(function ($query) use ($news) {
                $query->where('category', $news->category)
                      ->orWhere('tags', 'like', '%' . $news->category . '%');
            })
            ->limit(3)
            ->get();

        // Nettoyer les données pour éviter les problèmes avec Lexical
        $cleanNews = $this->cleanNewsForSeo($news);
        $cleanRelatedNews = $relatedNews->map(function ($article) {
            return $this->cleanNewsForSeo($article);
        });

        // Récupérer le contenu séparément pour l'affichage
        $newsContent = $news->content;

        return Inertia::render('Actualites/Show', [
            'news' => $cleanNews,
            'newsContent' => $newsContent, // Contenu séparé pour l'affichage
            'relatedNews' => $cleanRelatedNews,
            'seo' => $this->getSeoData(),
        ]);
    }

    /**
     * Nettoie les données d'une actualité pour éviter les problèmes avec Lexical
     * 
     * @param object $news
     * @return array
     */
    private function cleanNewsForSeo($news)
    {
        // Convertir en tableau pour manipulation
        $newsArray = $news->toArray();
        
        // Extraire le texte du contenu Lexical de manière sécurisée
        $cleanContent = $this->extractTextFromLexicalContent($news->content);
        $newsArray['content'] = $cleanContent;
        
        // Nettoyer les autres champs potentiellement problématiques
        $cleanData = [];
        
        foreach ($newsArray as $key => $value) {
            // Convertir les valeurs en types sécurisés
            if (is_null($value)) {
                $cleanData[$key] = null;
            } elseif (is_string($value)) {
                $cleanData[$key] = $value;
            } elseif (is_numeric($value)) {
                $cleanData[$key] = $value;
            } elseif (is_bool($value)) {
                $cleanData[$key] = $value;
            } elseif (is_array($value)) {
                // Nettoyer les tableaux récursivement
                $cleanData[$key] = $this->cleanArrayForSeo($value);
            } elseif (is_object($value)) {
                // Convertir les objets en chaînes sécurisées
                if (method_exists($value, 'toArray')) {
                    $cleanData[$key] = $this->cleanArrayForSeo($value->toArray());
                } else {
                    $cleanData[$key] = (string) $value;
                }
            } else {
                // Pour tout autre type, convertir en chaîne
                $cleanData[$key] = (string) $value;
            }
        }
        
        return $cleanData;
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
     * Nettoie un tableau récursivement pour éviter les Symboles
     * 
     * @param array $array
     * @return array
     */
    private function cleanArrayForSeo($array)
    {
        if (!is_array($array)) {
            return $array;
        }
        
        $cleanArray = [];
        
        foreach ($array as $key => $value) {
            // Nettoyer la clé
            $cleanKey = is_string($key) ? $key : (string) $key;
            
            // Nettoyer la valeur
            if (is_null($value)) {
                $cleanArray[$cleanKey] = null;
            } elseif (is_string($value)) {
                $cleanArray[$cleanKey] = $value;
            } elseif (is_numeric($value)) {
                $cleanArray[$cleanKey] = $value;
            } elseif (is_bool($value)) {
                $cleanArray[$cleanKey] = $value;
            } elseif (is_array($value)) {
                $cleanArray[$cleanKey] = $this->cleanArrayForSeo($value);
            } else {
                $cleanArray[$cleanKey] = (string) $value;
            }
        }
        
        return $cleanArray;
    }
}

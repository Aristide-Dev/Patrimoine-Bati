import React, { useState, useEffect, useRef } from "react";
import { usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import ContentRenderer from '@/Components/LexicalEditor/ContentRenderer';
import SimpleSEO from '@/Components/SimpleSEO';
// import ContentDebugger from '@/Components/LexicalEditor/ContentDebugger';
import { 
  Calendar, Tag, Clock, Share2, Facebook, Twitter, 
  Linkedin, Copy, ChevronLeft, ChevronRight,
  Eye, ThumbsUp, Bookmark, Printer, MessageCircle
} from "lucide-react";

export default function ArticleDetails({ news, newsContent, relatedNews, seo }) {
  const { url } = usePage();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0); // Valeur par défaut
  const [hasLiked, setHasLiked] = useState(false);
  
  // Utiliser les données existantes
  const article = news;
  const similarArticles = relatedNews || [];
  
  // Référence pour le menu de partage
  const shareMenuRef = useRef(null);
  
  // Gestion du clic à l'extérieur pour fermer le menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  // Gestion du partage
  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const shareTitle = article.title || 'Article PBP';
    const shareText = article.excerpt || 'Découvrez cet article du Patrimoine Bâti Public de Guinée';

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${currentUrl}`)}`,
    };

    if (platform === 'copy') {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert("Lien copié dans le presse-papiers !");
        }).catch(() => {
          // Fallback pour les navigateurs plus anciens
          const textArea = document.createElement('textarea');
          textArea.value = currentUrl;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert("Lien copié dans le presse-papiers !");
        });
      } else {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert("Lien copié dans le presse-papiers !");
      }
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    
    // Fermer le menu de partage après action
    setShowShareMenu(false);
  };

  // Gestion de l'impression
  const handlePrint = () => {
    window.print();
  };

  // Gestion des favoris
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Logique de sauvegarde à implémenter
  };

  // Gestion des likes
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      // Logique de sauvegarde à implémenter
    }
  };

  return (
    <AppLayout>
      <SimpleSEO 
        title={seo?.title}
        description={seo?.description}
        keywords={seo?.keywords}
        canonical={seo?.canonical}
        image={seo?.image}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Navigation rapide */}
        <div className="flex justify-between items-center mb-8 text-gray-600">
           <a href={route('news.index')} className="flex items-center hover:text-primary transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Retour aux actualités
          </a>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleBookmark}
              className={`p-2 rounded-full hover:bg-gray-100 transition-all ${isBookmarked ? 'text-primary' : ''}`}
            >
              <Bookmark className="w-5 h-5" />
            </button>
            <button 
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article principal */}
        <article className="bg-white rounded-2xl shadow-xl border border-gray-50 overflow-hidden">
          <div className="relative h-96">
            {article.image ? (
              <img
                src={'/storage/'+article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image non disponible</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1 text-sm text-white bg-primary rounded-full">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.published_at).toLocaleDateString("fr-FR", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
               <span className="text-gray-500 text-sm flex items-center">
                 <Clock className="w-4 h-4 mr-2" />
                 {article.read_time || 1} min de lecture
               </span>
               <span className="text-gray-500 text-sm flex items-center">
                 <Eye className="w-4 h-4 mr-2" />
                 {article.views || 0} vues
               </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {article.title}
            </h1>

             <div className="content-wrapper max-w-none">
               <ContentRenderer content={newsContent} />
             </div>

            {/* Composant de débogage (visible uniquement en développement) */}
            {/* <ContentDebugger content={article.content} /> */}

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    hasLiked ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`}
                >
                  <ThumbsUp className={`w-5 h-5 ${hasLiked ? 'fill-current' : ''}`} />
                  <span>{likes}</span>
                </button>
              </div>

              <div className="relative" ref={shareMenuRef}>
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Partager
                </button>

                {showShareMenu && (
                  <div className="absolute -top-60 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                    {[
                      { icon: Facebook, label: 'Facebook', platform: 'facebook' },
                      { icon: Twitter, label: 'Twitter', platform: 'twitter' },
                      { icon: Linkedin, label: 'LinkedIn', platform: 'linkedin' },
                      { icon: MessageCircle, label: 'WhatsApp', platform: 'whatsapp' },
                      { icon: Copy, label: 'Copier le lien', platform: 'copy' },
                    ].map(({ icon: Icon, label, platform }) => (
                      <button
                        key={platform}
                        onClick={() => handleShare(platform)}
                        className="w-full px-4 py-2 flex items-center hover:bg-gray-100 text-gray-800 transition-colors"
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Articles similaires */}
        {similarArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarArticles.map((similar) => (
                <a
                  key={similar.id}
                   href={route('news.show', { slug: similar.slug })}
                  className="group bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    {similar.image ? (
                      <img
                        src={'/storage/'+similar.image}
                        alt={similar.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Image non disponible</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {similar.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {similar.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(similar.published_at).toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </AppLayout>
  );
}
import React from 'react';

export default function ContentRenderer({ content, className = "" }) {
  // Fonction de validation et de nettoyage du contenu
  const validateAndParseContent = (rawContent) => {
    if (!rawContent) return null;
    
    // Si c'est déjà un objet, on le retourne tel quel
    if (typeof rawContent === 'object') {
      return rawContent;
    }
    
    // Si c'est une chaîne, on essaie de la parser
    if (typeof rawContent === 'string') {
      const trimmedContent = rawContent.trim();
      
      // Si c'est une chaîne vide, on retourne null
      if (!trimmedContent) return null;
      
      // Essaie de parser en tant que JSON
      try {
        const parsedContent = JSON.parse(trimmedContent);
        
        // Vérifie si c'est un état Lexical valide
        if (parsedContent && 
            parsedContent.root && 
            parsedContent.root.children && 
            Array.isArray(parsedContent.root.children)) {
          return parsedContent;
        }
        
        // Si ce n'est pas un état Lexical valide, traiter comme du texte brut
        return { isPlainText: true, content: trimmedContent };
      } catch (error) {
        // Si le parsing JSON échoue, traiter comme du texte brut
        return { isPlainText: true, content: trimmedContent };
      }
    }
    
    return null;
  };

  const renderTextContent = (child) => {
    if (!child || typeof child !== 'object') return null;
    
    let text = child.text || '';
    if (!text && text !== '') return null;
    
    // Application du formatage avec vérification des propriétés
    try {
      if (child.format && typeof child.format === 'number') {
        let formattedText = text;
        
        // Gestion des formats de base (utilisation des constantes Lexical)
        if (child.format & 1) formattedText = <strong key="bold">{formattedText}</strong>;
        if (child.format & 2) formattedText = <em key="italic">{formattedText}</em>;
        if (child.format & 4) formattedText = <u key="underline">{formattedText}</u>;
        if (child.format & 8) formattedText = <del key="strikethrough">{formattedText}</del>;
        if (child.format & 16) formattedText = <code key="code" className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">{formattedText}</code>;
        
        return formattedText;
      }
      
      return text;
    } catch (error) {
      console.warn('Erreur lors du formatage du texte:', error);
      return text;
    }
  };

  const renderImage = (node, index) => {
    if (!node.src) return null;
    
    return (
      <div key={index} className="mx-auto my-4 max-w-full">
        <img
          src={node.src}
          alt={node.alt || 'Image'}
          className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
          style={{ maxHeight: '500px' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling?.remove();
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-red-500 text-center p-4 border border-red-200 rounded-lg bg-red-50';
            errorDiv.textContent = '⚠️ Impossible de charger l\'image';
            e.target.parentNode.appendChild(errorDiv);
          }}
        />
        {node.alt && (
          <p className="text-center text-sm text-gray-600 mt-2 italic">
            {node.alt}
          </p>
        )}
      </div>
    );
  };

  const renderNodeChildren = (children) => {
    if (!Array.isArray(children)) return null;
    
    return children.map((child, index) => {
      if (!child || typeof child !== 'object') return null;

      try {
        if (child.type === 'text') {
          return <React.Fragment key={index}>{renderTextContent(child)}</React.Fragment>;
        }

        if (child.type === 'linebreak' || child.type === 'break') {
          return <br key={index} />;
        }

        // Gestion améliorée des liens avec support des formats Markdown
        if (child.type === 'link' && child.children && Array.isArray(child.children)) {
          return (
            <a
              key={index}
              href={child.url || '#'}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              target={child.url?.startsWith('http') ? '_blank' : '_self'}
              rel={child.url?.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {child.children.map((linkChild, linkIndex) => (
                <React.Fragment key={linkIndex}>
                  {renderTextContent(linkChild)}
                </React.Fragment>
              ))}
            </a>
          );
        }

        // Support des images dans les nœuds enfants
        if (child.type === 'image') {
          return renderImage(child, index);
        }
      } catch (error) {
        console.warn('Erreur lors du rendu d\'un nœud enfant:', error);
      }

      return null;
    });
  };

  const renderContent = () => {
    try {
      const parsedContent = validateAndParseContent(content);
      
      if (!parsedContent) {
        return (
          <div className="text-center py-8">
            <div className="text-gray-400 text-lg">📝</div>
            <p className="text-gray-500 italic mt-2">Aucun contenu disponible</p>
          </div>
        );
      }

      // Si c'est du texte brut
      if (parsedContent.isPlainText) {
        return (
          <div className="whitespace-pre-wrap">
            {parsedContent.content.split('\n').map((line, index) => (
              <p key={index} className="mb-2 last:mb-0 leading-relaxed">
                {line || <br />}
              </p>
            ))}
          </div>
        );
      }

      // Vérifie si c'est bien un état Lexical avec la structure attendue
      if (!parsedContent.root || !parsedContent.root.children || !Array.isArray(parsedContent.root.children)) {
        return (
          <div className="whitespace-pre-wrap">
            {typeof content === 'string' ? content : 'Contenu non valide'}
          </div>
        );
      }

      const renderedNodes = parsedContent.root.children.map((node, index) => {
        if (!node || typeof node !== 'object') return null;

        try {
          // Gestion des paragraphes (cohérent avec le thème de l'éditeur)
          if (node.type === 'paragraph') {
            const hasContent = node.children && node.children.some(child => 
              child.text || (child.children && child.children.length > 0) || child.type === 'image'
            );
            
            // Gestion de l'alignement des paragraphes
            let alignmentClass = '';
            if (node.format) {
              if (node.format === 1) alignmentClass = 'text-left';
              else if (node.format === 2) alignmentClass = 'text-center';
              else if (node.format === 3) alignmentClass = 'text-right';
            }
            
            return (
              <p key={index} className={`mb-4 last:mb-0 leading-relaxed ${alignmentClass}`}>
                {hasContent ? renderNodeChildren(node.children) : <br />}
              </p>
            );
          }

          // Gestion des titres (cohérent avec le thème)
          if (node.type === 'heading' && node.tag) {
            const headingLevel = parseInt(node.tag.replace('h', '')) || 1;
            const HeadingTag = `h${Math.min(Math.max(headingLevel, 1), 6)}`;
            const headingClasses = {
              1: 'text-3xl font-bold mb-4 mt-6 first:mt-0 text-gray-900',
              2: 'text-2xl font-bold mb-3 mt-5 first:mt-0 text-gray-900',
              3: 'text-xl font-bold mb-3 mt-4 first:mt-0 text-gray-900',
              4: 'text-lg font-bold mb-2 mt-3 first:mt-0 text-gray-900',
              5: 'text-base font-bold mb-2 mt-3 first:mt-0 text-gray-900',
              6: 'text-sm font-bold mb-2 mt-2 first:mt-0 text-gray-900',
            }[headingLevel] || 'text-base font-bold mb-2 text-gray-900';

            return React.createElement(
              HeadingTag,
              { key: index, className: headingClasses },
              renderNodeChildren(node.children)
            );
          }

          // Gestion des listes (cohérent avec le thème)
          if (node.type === 'list') {
            const ListTag = node.listType === 'number' ? 'ol' : 'ul';
            const listClasses = node.listType === 'number' 
              ? 'list-decimal ml-4 mb-4 space-y-1' 
              : 'list-disc ml-4 mb-4 space-y-1';

            return React.createElement(
              ListTag,
              { key: index, className: listClasses },
              node.children?.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {renderNodeChildren(item.children)}
                </li>
              )) || []
            );
          }

          // Gestion des citations (cohérent avec le thème)
          if (node.type === 'quote') {
            return (
              <blockquote key={index} className="border-l-4 border-gray-200 pl-4 mb-4 italic bg-gray-50 py-2 rounded-r">
                {renderNodeChildren(node.children)}
              </blockquote>
            );
          }

          // Gestion des blocs de code (cohérent avec le thème)
          if (node.type === 'code') {
            return (
              <pre key={index} className="bg-gray-100 rounded px-2 py-1 font-mono mb-4 overflow-x-auto border">
                <code>{renderNodeChildren(node.children)}</code>
              </pre>
            );
          }

          // Gestion des images (nouveau)
          if (node.type === 'image') {
            return renderImage(node, index);
          }

          // Gestion des séparateurs horizontaux
          if (node.type === 'horizontalrule') {
            return <hr key={index} className="my-6 border-gray-300" />;
          }

          // Support des nœuds personnalisés avec enfants
          if (node.children && Array.isArray(node.children)) {
            return (
              <div key={index} className="mb-4">
                {renderNodeChildren(node.children)}
              </div>
            );
          }
        } catch (error) {
          console.warn('Erreur lors du rendu d\'un nœud:', error, node);
          return (
            <div key={index} className="text-red-500 text-sm border border-red-200 rounded p-2 mb-2">
              ⚠️ Erreur de rendu pour ce nœud
            </div>
          );
        }

        return null;
      }).filter(Boolean);

      // Si aucun contenu n'a été rendu
      if (renderedNodes.length === 0) {
        return (
          <div className="text-center py-8">
            <div className="text-gray-400 text-lg">📄</div>
            <p className="text-gray-500 italic mt-2">Contenu vide</p>
          </div>
        );
      }

      return renderedNodes;

    } catch (error) {
      console.error('Erreur de parsing du contenu:', error);
      return (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50 text-red-700 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">⚠️</span>
            <p className="font-semibold">Erreur lors du rendu du contenu</p>
          </div>
          <p className="text-sm mb-3">Le contenu n'a pas pu être affiché correctement.</p>
          <details className="text-xs">
            <summary className="cursor-pointer hover:text-red-800 font-medium">
              Voir les détails techniques
            </summary>
            <div className="mt-2 p-3 bg-red-100 rounded border">
              <p className="font-medium mb-1">Erreur :</p>
              <pre className="mb-2 text-xs overflow-auto">{error.message}</pre>
              {typeof content === 'string' && content.length > 0 && (
                <>
                  <p className="font-medium mb-1">Contenu brut (extrait) :</p>
                  <pre className="text-xs overflow-auto">
                    {content.length > 300 ? content.substring(0, 300) + '...' : content}
                  </pre>
                </>
              )}
            </div>
          </details>
        </div>
      );
    }
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {renderContent()}
    </div>
  );
}
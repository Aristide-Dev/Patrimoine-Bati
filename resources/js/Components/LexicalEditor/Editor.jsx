import React, { useCallback, useEffect, useMemo } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { $getRoot, $createParagraphNode, $createTextNode } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import Toolbar from './Toolbar';
import ImagePlugin, { ImageNode } from './plugins/ImagePlugin';

import { LinkNode } from '@lexical/link';
import { ListNode, ListItemNode } from '@lexical/list';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { CodeNode } from '@lexical/code';

const theme = {
  paragraph: 'mb-4',
  heading: {
    h1: 'text-3xl font-bold mb-4',
    h2: 'text-2xl font-bold mb-3',
  },
  list: {
    ul: 'list-disc ml-4 mb-4',
    ol: 'list-decimal ml-4 mb-4',
  },
  quote: 'border-l-4 border-gray-200 pl-4 mb-4 italic',
  code: 'bg-gray-100 rounded px-2 py-1 font-mono',
  image: 'mx-auto my-4 max-w-full h-auto rounded-lg shadow-lg',
};

// Mémorisation du composant Placeholder pour éviter les re-renders
const Placeholder = React.memo(() => {
  return (
    <div className="absolute top-[60px] left-3 text-gray-400 pointer-events-none select-none">
      Commencez à écrire ou glissez des images ici...
    </div>
  );
});

// Composant pour initialiser l'éditeur de manière sécurisée
function EditorInitializer({ initialContent }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Ne s'exécute qu'une seule fois au montage
    // Ne rien faire si pas de contenu initial ou si contenu vide
    if (!initialContent || typeof initialContent !== 'string' || initialContent.trim() === '') {
      return;
    }

    try {
      // Essaie de parser en tant que JSON Lexical
      const parsedContent = JSON.parse(initialContent);
      
      // Vérifie que c'est un état Lexical valide
      if (parsedContent && 
          typeof parsedContent === 'object' && 
          parsedContent.root && 
          parsedContent.root.children) {
        
        const editorState = editor.parseEditorState(initialContent);
        editor.setEditorState(editorState);
        console.log('Contenu Lexical initialisé avec succès');
      } else {
        // Si ce n'est pas un état Lexical valide, traiter comme du texte brut
        console.warn('Contenu non-Lexical détecté, conversion en texte brut');
        initializeWithText(editor, initialContent);
      }
    } catch (error) {
      // Si le parsing JSON échoue, traiter comme du texte brut
      console.warn('Contenu initial non JSON, traitement comme texte brut:', error.message);
      initializeWithText(editor, initialContent);
    }
  }, [editor]); // Suppression de initialContent des dépendances

  return null;
}

// Fonction pour initialiser avec du texte brut de manière sécurisée
function initializeWithText(editor, text) {
  try {
    editor.update(() => {
      const root = $getRoot();
      root.clear();
      const paragraph = $createParagraphNode();
      paragraph.append($createTextNode(text));
      root.append(paragraph);
    });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation avec du texte:', error);
  }
}

// Fonction pour valider et préparer l'état initial
function prepareInitialState(initialContent) {
  // Retourner null pour un éditeur vide si pas de contenu
  if (!initialContent || typeof initialContent !== 'string' || initialContent.trim() === '') {
    return null;
  }

  try {
    const parsedContent = JSON.parse(initialContent);
    
    // Vérifie que c'est un état Lexical valide avec la structure attendue
    if (parsedContent && 
        typeof parsedContent === 'object' &&
        parsedContent.root && 
        parsedContent.root.children && 
        Array.isArray(parsedContent.root.children) &&
        parsedContent.root.type === 'root') {
      return initialContent;
    }
  } catch (error) {
    console.warn('Contenu initial non valide pour Lexical, sera initialisé comme texte brut:', error.message);
  }

  return null; // Retourne null si la validation échoue
}

// Mémorisation de la fonction de gestion d'erreur pour éviter les re-renders
const handleError = (error) => {
  console.error('Erreur Lexical:', error);
  // Ne pas propager l'erreur pour éviter le crash de l'application
};

// Composant pour gérer l'état de drag & drop global
function DragDropHandler() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const editorElement = editor.getRootElement();
    if (!editorElement) return;

    // Empêcher le comportement par défaut du navigateur pour le drag & drop
    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // Événements globaux pour empêcher l'ouverture d'images dans le navigateur
    const handleGlobalDragOver = (e) => {
      preventDefaults(e);
    };

    const handleGlobalDrop = (e) => {
      preventDefaults(e);
    };

    // Ajouter les listeners globaux
    document.addEventListener('dragenter', preventDefaults);
    document.addEventListener('dragover', handleGlobalDragOver);
    document.addEventListener('drop', handleGlobalDrop);

    return () => {
      document.removeEventListener('dragenter', preventDefaults);
      document.removeEventListener('dragover', handleGlobalDragOver);
      document.removeEventListener('drop', handleGlobalDrop);
    };
  }, [editor]);

  return null;
}

export default function Editor({ onChange, initialContent }) {
  // Mémorisation de la configuration initiale avec le nouveau nœud d'image
  const initialConfig = useMemo(() => ({
    namespace: 'MyArticleEditor',
    theme,
    onError: handleError,
    nodes: [
      LinkNode,
      ListNode,
      ListItemNode,
      HorizontalRuleNode,
      HeadingNode,
      QuoteNode,
      CodeNode,
      ImageNode, // Ajout du nœud d'image personnalisé
    ],
    editorState: prepareInitialState(initialContent),
  }), [initialContent]);

  // Fonction de gestion des changements avec protection contre les erreurs
  const handleChange = useCallback(
    (editorState, editor) => {
      try {
        editorState.read(() => {
          const content = editorState.toJSON();
          const serializedContent = JSON.stringify(content);
          
          // Debug en mode développement
          if (process.env.NODE_ENV === 'development') {
            console.log('Contenu édité:', content);
          }
          
          // Appeler la fonction onChange du parent avec le contenu sérialisé
          onChange(serializedContent);
        });
      } catch (error) {
        console.error('Erreur lors de la sérialisation du contenu:', error);
        // En cas d'erreur, on peut notifier le parent avec une chaîne vide
        // ou conserver l'ancien contenu selon le besoin
        onChange('');
      }
    },
    [onChange]
  );

  // Mémorisation du contentEditable pour éviter les re-renders
  const contentEditable = useMemo(() => (
    <ContentEditable 
      className="outline-none min-h-[300px] prose max-w-none focus:ring-2 focus:ring-primary/20 rounded-md p-2" 
      style={{ wordBreak: 'break-word' }}
      aria-label="Éditeur de contenu"
    />
  ), []);

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container border border-gray-300 rounded-lg overflow-hidden bg-white">
        <Toolbar />
        <div className="relative min-h-[300px] p-3">
          <RichTextPlugin
            contentEditable={contentEditable}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin />
          <ImagePlugin />
          <OnChangePlugin onChange={handleChange} />
          <EditorInitializer initialContent={initialContent} />
          <DragDropHandler />
        </div>
      </div>
    </LexicalComposer>
  );
}
import React, { useEffect, useCallback } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { 
  $createTextNode, 
  $createParagraphNode, 
  $getSelection, 
  $isRangeSelection,
  $createRangeSelection,
  $setSelection,
  DecoratorNode
} from 'lexical';

export const INSERT_IMAGE_COMMAND = 'INSERT_IMAGE_COMMAND';

// Node personnalisé pour les images dans Lexical
export class ImageNode extends DecoratorNode {
  static getType() {
    return 'image';
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__alt, node.__key);
  }

  constructor(src, alt, key) {
    super(key);
    this.__src = src;
    this.__alt = alt;
  }

  createDOM() {
    const div = document.createElement('div');
    div.className = 'image-container my-4 text-center';
    return div;
  }

  updateDOM() {
    return false;
  }

  setWidthAndHeight(width, height) {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }

  decorate() {
    return (
      <img 
        src={this.__src} 
        alt={this.__alt || 'Image insérée'} 
        className="max-w-full h-auto rounded-lg shadow-sm"
        style={{ maxHeight: '400px' }}
        draggable={false}
        onLoad={(e) => {
          const { naturalWidth, naturalHeight } = e.target;
          this.setWidthAndHeight(naturalWidth, naturalHeight);
        }}
      />
    );
  }

  getSrc() {
    return this.__src;
  }

  getAlt() {
    return this.__alt;
  }

  static importJSON(serializedNode) {
    const { src, alt } = serializedNode;
    return new ImageNode(src, alt);
  }

  exportJSON() {
    return {
      type: 'image',
      src: this.__src,
      alt: this.__alt,
      version: 1,
    };
  }
}

// Fonction pour créer un nœud image
export function $createImageNode(src, alt) {
  return new ImageNode(src, alt);
}

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  // Fonction pour traiter un fichier image
  const processImageFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) {
      console.warn('Le fichier n\'est pas une image valide');
      return;
    }

    // Vérifier la taille du fichier (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('L\'image est trop volumineuse. Taille maximale : 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target.result;
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        src: src,
        alt: file.name
      });
    };
    reader.readAsDataURL(file);
  }, [editor]);

  // Gestion du drag & drop
  useEffect(() => {
    const editorElement = editor.getRootElement();
    if (!editorElement) return;

    let dragCounter = 0;

    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter++;
      
      // Ajouter une classe visuelle pour indiquer qu'on peut déposer
      editorElement.classList.add('drag-over');
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter--;
      
      if (dragCounter === 0) {
        editorElement.classList.remove('drag-over');
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      dragCounter = 0;
      editorElement.classList.remove('drag-over');
      
      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      
      if (imageFiles.length === 0) {
        alert('Aucune image valide trouvée dans les fichiers déposés');
        return;
      }

      // Traiter chaque image
      imageFiles.forEach(file => {
        processImageFile(file);
      });
    };

    // Ajouter les event listeners
    editorElement.addEventListener('dragenter', handleDragEnter);
    editorElement.addEventListener('dragleave', handleDragLeave);
    editorElement.addEventListener('dragover', handleDragOver);
    editorElement.addEventListener('drop', handleDrop);

    // Ajouter les styles CSS pour l'indication visuelle
    const style = document.createElement('style');
    style.textContent = `
      .drag-over {
        outline: 2px dashed #3b82f6 !important;
        outline-offset: 4px;
        background-color: rgba(59, 130, 246, 0.05) !important;
      }
      
      .drag-over::after {
        content: "Déposez vos images ici";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(59, 130, 246, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        z-index: 1000;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      editorElement.removeEventListener('dragenter', handleDragEnter);
      editorElement.removeEventListener('dragleave', handleDragLeave);
      editorElement.removeEventListener('dragover', handleDragOver);
      editorElement.removeEventListener('drop', handleDrop);
      
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [editor, processImageFile]);

  // Gestion du collage d'images
  useEffect(() => {
    const handlePaste = (event) => {
      const clipboardData = event.clipboardData || window.clipboardData;
      const items = Array.from(clipboardData.items);
      
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          event.preventDefault();
          const file = item.getAsFile();
          if (file) {
            processImageFile(file);
          }
          break;
        }
      }
    };

    const editorElement = editor.getRootElement();
    if (editorElement) {
      editorElement.addEventListener('paste', handlePaste);
      
      return () => {
        editorElement.removeEventListener('paste', handlePaste);
      };
    }
  }, [editor, processImageFile]);

  useEffect(() => {
    return editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        const { src, alt } = payload;
        
        editor.update(() => {
          const selection = $getSelection();
          
          if ($isRangeSelection(selection)) {
            // Créer le nœud image personnalisé
            const imageNode = $createImageNode(src, alt);
            
            // Insérer le nœud image
            selection.insertNodes([imageNode]);
            
            // Ajouter un paragraphe vide après l'image pour continuer à écrire
            const emptyParagraph = $createParagraphNode();
            selection.insertNodes([emptyParagraph]);
            
            console.log('Image insérée:', { src: src.substring(0, 50) + '...', alt });
          }
        });
        
        return true;
      },
      1 // priorité
    );
  }, [editor]);

  return null;
}
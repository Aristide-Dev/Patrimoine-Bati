import React, { useCallback, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  $createTextNode,
  $createParagraphNode,
} from 'lexical';
import {
  Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, 
  AlignRight, List, ListOrdered, Image, Undo, Redo, Type, 
  Heading1, Heading2, Quote, Code, Link, Palette, Upload, ImageIcon
} from 'lucide-react';
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import { $createHeadingNode } from '@lexical/rich-text';
import { INSERT_IMAGE_COMMAND } from './plugins/ImagePlugin';

const HEADING_OPTIONS = [
  { label: 'Titre 1', value: 'h1', icon: <Heading1 className="w-4 h-4" /> },
  { label: 'Titre 2', value: 'h2', icon: <Heading2 className="w-4 h-4" /> },
  { label: 'Normal', value: 'p', icon: <Type className="w-4 h-4" /> },
];

const FONT_FAMILY_OPTIONS = [
  { label: 'Arial', value: 'Arial' },
  { label: 'Courier New', value: 'Courier New' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'Times New Roman', value: 'Times New Roman' },
  { label: 'Verdana', value: 'Verdana' },
];

const COLOR_OPTIONS = [
  { label: 'Noir', value: '#000000' },
  { label: 'Rouge', value: '#FF0000' },
  { label: 'Vert', value: '#00FF00' },
  { label: 'Bleu', value: '#0000FF' },
  { label: 'Jaune', value: '#FFFF00' },
];

const IMAGE_OPTIONS = [
  { 
    label: 'Insérer par URL', 
    value: 'url', 
    icon: <Link className="w-4 h-4" />,
    description: 'Coller le lien d\'une image'
  },
  { 
    label: 'Télécharger un fichier', 
    value: 'file', 
    icon: <Upload className="w-4 h-4" />,
    description: 'Choisir un fichier depuis votre ordinateur'
  },
  { 
    label: 'Glisser-déposer', 
    value: 'drag', 
    icon: <ImageIcon className="w-4 h-4" />,
    description: 'Glissez une image directement dans l\'éditeur'
  },
];

export default function Toolbar() {
  const [editor] = useLexicalComposerContext();
  const [showHeadingOptions, setShowHeadingOptions] = useState(false);
  const [showFontOptions, setShowFontOptions] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const [showImageOptions, setShowImageOptions] = useState(false);

  const ToolbarButton = ({ onClick, icon, active = false, title, className = '' }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded hover:bg-gray-100 transition-colors ${
        active ? 'bg-gray-100' : ''
      } ${className}`}
      title={title}
    >
      {icon}
    </button>
  );

  const ToolbarDropdown = ({ options, onSelect, show, setShow, trigger, wide = false }) => (
    <div className="relative">
      {trigger}
      {show && (
        <div className={`absolute z-10 mt-1 ${wide ? 'w-64' : 'w-48'} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                onClick={() => {
                  onSelect(option.value);
                  setShow(false);
                }}
              >
                {option.icon && option.icon}
                <div className="flex flex-col">
                  <span>{option.label}</span>
                  {option.description && (
                    <span className="text-xs text-gray-500">{option.description}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const formatHeading = useCallback((headingSize) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (headingSize === 'p') {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'paragraph');
        } else {
          const headingNode = $createHeadingNode(headingSize);
          selection.insertNodes([headingNode]);
        }
      }
    });
  }, [editor]);

  // Fonction pour traiter un fichier image
  const processImageFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Veuillez sélectionner un fichier image valide');
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

  const handleImageOption = useCallback((option) => {
    switch (option) {
      case 'url':
        const url = prompt("Entrez l'URL de l'image :");
        if (url) {
          // Vérifier si l'URL semble valide
          if (url.match(/\.(jpeg|jpg|gif|png|svg|webp)$/i) || url.startsWith('data:image/')) {
            editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
              src: url,
              alt: 'Image insérée'
            });
          } else {
            alert('L\'URL ne semble pas pointer vers une image valide');
          }
        }
        break;
        
      case 'file':
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true; // Permettre plusieurs fichiers
        
        input.onchange = (e) => {
          const files = Array.from(e.target.files);
          files.forEach(file => {
            processImageFile(file);
          });
        };
        
        input.click();
        break;
        
      case 'drag':
        alert('Glissez-déposez vos images directement dans l\'éditeur !');
        break;
        
      default:
        break;
    }
  }, [editor, processImageFile]);

  const insertLink = useCallback(() => {
    const url = prompt("Entrez l'URL du lien :");
    if (!url) return;
    
    const text = prompt("Entrez le texte du lien :", url);
    if (text) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          selection.insertText(`[${text}](${url})`);
        }
      });
    }
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b bg-white sticky top-0 z-10">
      {/* Boutons d'historique */}
      <div className="flex items-center gap-1 border-r pr-2">
        <ToolbarButton
          onClick={() => editor.dispatchCommand(UNDO_COMMAND)}
          icon={<Undo className="w-4 h-4" />}
          title="Annuler (Ctrl+Z)"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(REDO_COMMAND)}
          icon={<Redo className="w-4 h-4" />}
          title="Rétablir (Ctrl+Y)"
        />
      </div>

      {/* Styles de titre */}
      <div className="flex items-center gap-1 border-r pr-2">
        <ToolbarDropdown
          options={HEADING_OPTIONS}
          onSelect={formatHeading}
          show={showHeadingOptions}
          setShow={setShowHeadingOptions}
          trigger={
            <ToolbarButton
              onClick={() => setShowHeadingOptions(!showHeadingOptions)}
              icon={<Type className="w-4 h-4" />}
              title="Style de texte"
            />
          }
        />
      </div>

      {/* Formatage de texte */}
      <div className="flex items-center gap-1 border-r pr-2">
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
          icon={<Bold className="w-4 h-4" />}
          title="Gras (Ctrl+B)"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
          icon={<Italic className="w-4 h-4" />}
          title="Italique (Ctrl+I)"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
          icon={<Underline className="w-4 h-4" />}
          title="Souligné (Ctrl+U)"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')}
          icon={<Strikethrough className="w-4 h-4" />}
          title="Barré"
        />
      </div>

      {/* Alignement */}
      <div className="flex items-center gap-1 border-r pr-2">
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')}
          icon={<AlignLeft className="w-4 h-4" />}
          title="Aligner à gauche"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')}
          icon={<AlignCenter className="w-4 h-4" />}
          title="Centrer"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')}
          icon={<AlignRight className="w-4 h-4" />}
          title="Aligner à droite"
        />
      </div>

      {/* Listes */}
      <div className="flex items-center gap-1 border-r pr-2">
        <ToolbarButton
          onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
          icon={<List className="w-4 h-4" />}
          title="Liste à puces"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND)}
          icon={<ListOrdered className="w-4 h-4" />}
          title="Liste numérotée"
        />
      </div>

      {/* Insertion d'éléments */}
      <div className="flex items-center gap-1">
        <ToolbarDropdown
          options={IMAGE_OPTIONS}
          onSelect={handleImageOption}
          show={showImageOptions}
          setShow={setShowImageOptions}
          wide={true}
          trigger={
            <ToolbarButton
              onClick={() => setShowImageOptions(!showImageOptions)}
              icon={<Image className="w-4 h-4" />}
              title="Insérer une image"
              className="relative"
            />
          }
        />
        <ToolbarButton
          onClick={insertLink}
          icon={<Link className="w-4 h-4" />}
          title="Insérer un lien"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')}
          icon={<Code className="w-4 h-4" />}
          title="Code"
        />
        <ToolbarButton
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'quote')}
          icon={<Quote className="w-4 h-4" />}
          title="Citation"
        />
      </div>
    </div>
  );
}
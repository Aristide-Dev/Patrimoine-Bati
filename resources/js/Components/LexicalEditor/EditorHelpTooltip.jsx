import React from 'react';
import { FileImage } from 'lucide-react';

export default function EditorHelpTooltip({ mode = 'create' }) {
  const isEditMode = mode === 'edit';
  
  const bgColor = isEditMode ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200';
  const textColor = isEditMode ? 'text-amber-700' : 'text-blue-700';
  const iconColor = isEditMode ? 'text-amber-500' : 'text-blue-500';
  
  const helpContent = isEditMode ? {
    title: 'Modification du contenu :',
    items: [
      '✏️ Le contenu existant est automatiquement chargé',
      '🖼️ Ajoutez de nouvelles images par drag & drop ou via la toolbar',
      '📝 Modifiez le texte directement dans l\'éditeur',
      '💾 Les images sont conservées lors de la sauvegarde'
    ]
  } : {
    title: 'Intégration d\'images dans l\'éditeur :',
    items: [
      '🖱️ Cliquez sur l\'icône image dans la barre d\'outils',
      '🖼️ Glissez-déposez vos images directement dans l\'éditeur',
      '📋 Collez des images depuis le presse-papiers (Ctrl+V)',
      '🔗 Insérez des images par URL ou téléchargez des fichiers locaux'
    ]
  };

  return (
    <div className={`${bgColor} border rounded-lg p-3`}>
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">
          {isEditMode ? (
            <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className={`text-sm ${textColor}`}>
          <p className="font-medium mb-1">{helpContent.title}</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            {helpContent.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Composant pour l'indicateur de fonctionnalités drag & drop
export function DragDropIndicator({ mode = 'create' }) {
  const isEditMode = mode === 'edit';
  const bgColor = isEditMode ? 'bg-green-50' : 'bg-gray-50';
  const textColor = isEditMode ? 'text-green-600' : 'text-gray-500';
  const text = isEditMode ? 'Images intégrées' : 'Images supportées';
  
  return (
    <div className={`absolute top-0 right-0 p-2 ${bgColor} rounded-bl-lg opacity-75`}>
      <div className={`flex items-center gap-1 text-xs ${textColor}`}>
        <FileImage className="w-3 h-3" />
        <span>{text}</span>
      </div>
    </div>
  );
}

// Composant pour l'en-tête avec indication drag & drop
export function EditorHeader({ title, mode = 'create' }) {
  const isEditMode = mode === 'edit';
  const headerText = isEditMode ? 'Support drag & drop d\'images' : 'Glissez-déposez vos images directement dans l\'éditeur';
  
  return (
    <div className="flex items-center mb-4">
      <FileImage className="w-5 h-5 text-gray-400 mr-2" />
      <label className="text-lg font-medium text-gray-900">{title}</label>
      <div className="ml-auto text-sm text-gray-500 flex items-center gap-2">
        <FileImage className="w-4 h-4" />
        <span>{headerText}</span>
      </div>
    </div>
  );
} 
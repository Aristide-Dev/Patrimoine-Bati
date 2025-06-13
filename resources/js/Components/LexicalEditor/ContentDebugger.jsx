import React, { useState } from 'react';
import { Code, Eye, EyeOff } from 'lucide-react';

export default function ContentDebugger({ content }) {
  const [showDebug, setShowDebug] = useState(false);

  if (!content || process.env.NODE_ENV === 'production') {
    return null;
  }

  const formatContent = () => {
    if (typeof content === 'string') {
      try {
        return JSON.stringify(JSON.parse(content), null, 2);
      } catch {
        return content;
      }
    }
    return JSON.stringify(content, null, 2);
  };

  const getContentInfo = () => {
    const info = {
      type: typeof content,
      length: typeof content === 'string' ? content.length : 'N/A',
      isEmpty: !content || (typeof content === 'string' && !content.trim()),
      isValidJSON: false,
      structure: 'Unknown'
    };

    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content);
        info.isValidJSON = true;
        info.structure = parsed.root ? 'Lexical State' : 'Other JSON';
      } catch {
        info.isValidJSON = false;
        info.structure = 'Plain Text';
      }
    } else if (typeof content === 'object') {
      info.structure = content?.root ? 'Lexical State Object' : 'Other Object';
    }

    return info;
  };

  const contentInfo = getContentInfo();

  return (
    <div className="mt-8 border border-gray-200 rounded-lg bg-gray-50">
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center text-sm text-gray-600">
          <Code className="w-4 h-4 mr-2" />
          Debug du contenu ({contentInfo.structure})
        </div>
        {showDebug ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
      
      {showDebug && (
        <div className="border-t border-gray-200 p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Type:</strong> {contentInfo.type}
            </div>
            <div>
              <strong>Longueur:</strong> {contentInfo.length}
            </div>
            <div>
              <strong>Structure:</strong> {contentInfo.structure}
            </div>
            <div>
              <strong>JSON valide:</strong> {contentInfo.isValidJSON ? '✅' : '❌'}
            </div>
            <div>
              <strong>Vide:</strong> {contentInfo.isEmpty ? '✅' : '❌'}
            </div>
          </div>
          
          <div>
            <strong className="text-sm">Contenu brut:</strong>
            <pre className="mt-2 p-3 bg-gray-800 text-green-400 rounded text-xs overflow-auto max-h-60">
              {formatContent()}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
} 
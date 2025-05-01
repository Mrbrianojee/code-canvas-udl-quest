
import React, { useEffect, useRef } from 'react';
import { highlightElement } from '@/utils/codeEditorUtils';

interface SolutionDisplayProps {
  initialCode: string;
  language: string;
  getPrismLanguage: (lang: string) => string;
}

const SolutionDisplay: React.FC<SolutionDisplayProps> = ({ 
  initialCode, 
  language,
  getPrismLanguage 
}) => {
  const codeRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (codeRef.current) {
      // Set content first
      codeRef.current.textContent = initialCode || " ";
      // Apply highlighting
      highlightElement(codeRef.current);
    }
  }, [initialCode, language]);
  
  return (
    <div className="h-full">
      <h4 className="text-md font-medium mb-2">Solution:</h4>
      <div className="bg-zinc-950 text-zinc-100 p-4 rounded-md overflow-auto h-[calc(100%-40px)]">
        <pre className="line-numbers m-0">
          <code 
            ref={codeRef}
            className={`language-${getPrismLanguage(language)}`}
          >
            {initialCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default SolutionDisplay;

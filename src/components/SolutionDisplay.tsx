
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
    <div className="p-3">
      <h4 className="text-md font-medium mb-2">Solution:</h4>
      <div className="bg-zinc-950 text-zinc-100 p-4 rounded-md overflow-auto max-h-96">
        <pre className="line-numbers m-0">
          <code 
            ref={codeRef}
            className={`language-${getPrismLanguage(language)}`}
          >
            {initialCode}
          </code>
        </pre>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Compare your solution with the provided one. Remember, there can be multiple valid approaches to solve a problem.
      </p>
    </div>
  );
};

export default SolutionDisplay;

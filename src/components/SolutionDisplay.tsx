
import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

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
  const preRef = useRef<HTMLPreElement>(null);
  
  useEffect(() => {
    if (preRef.current) {
      // Apply highlighting with a small delay to ensure DOM is ready
      setTimeout(() => {
        try {
          Prism.highlightElement(preRef.current);
        } catch (error) {
          console.error("Error highlighting solution:", error);
        }
      }, 20);
    }
  }, [initialCode, language]);
  
  return (
    <div className="mt-4">
      <h4 className="text-md font-medium mb-2">Solution:</h4>
      <div className="bg-zinc-950 text-zinc-100 p-4 rounded-md overflow-auto max-h-96">
        <pre ref={preRef} className="m-0 line-numbers">
          <code className={`language-${getPrismLanguage(language)}`}>
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

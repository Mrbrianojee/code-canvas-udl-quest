
import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface CodeEditorPaneProps {
  code: string;
  language: string;
  getPrismLanguage: (lang: string) => string;
  handleCodeChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const CodeEditorPane: React.FC<CodeEditorPaneProps> = ({ 
  code, 
  language, 
  getPrismLanguage, 
  handleCodeChange, 
  handleKeyDown 
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Apply syntax highlighting whenever code or language changes
  useEffect(() => {
    if (preRef.current) {
      // Set the code content for highlighting
      preRef.current.textContent = code || " ";
      
      // Apply highlighting with a small delay
      setTimeout(() => {
        try {
          Prism.highlightElement(preRef.current);
        } catch (error) {
          console.error("Error highlighting editor code:", error);
        }
      }, 10);
    }
  }, [code, language]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="relative bg-zinc-950 h-80 w-full overflow-auto">
        {/* Syntax highlighted code display */}
        <pre ref={preRef} className="absolute inset-0 w-full h-full m-0 p-4 overflow-auto pointer-events-none line-numbers">
          <code className={`language-${getPrismLanguage(language)} block w-full h-full font-mono`}>
            {code || ' '}
          </code>
        </pre>
        
        {/* Hidden textarea for user input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full p-4 font-mono resize-none outline-none bg-transparent"
          style={{ 
            caretColor: "white",
            color: "transparent",
            zIndex: 10
          }}
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default CodeEditorPane;

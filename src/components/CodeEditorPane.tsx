
import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';
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
  const editorRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if (editorRef.current) {
      // Ensure line-numbers class is added
      if (!editorRef.current.classList.contains("line-numbers")) {
        editorRef.current.classList.add("line-numbers");
      }
      
      // Apply Prism highlighting
      Prism.highlightElement(editorRef.current);
    }
  }, [code, language]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="relative bg-zinc-950 h-80 w-full">
        {/* The textarea MUST come before the pre element for proper stacking */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full p-4 font-mono resize-none text-white opacity-70 z-20"
          style={{ 
            background: "transparent",
            caretColor: "white"
          }}
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
        />
        
        {/* Syntax highlighted code display */}
        <pre 
          ref={editorRef}
          className="absolute inset-0 w-full h-full p-4 pointer-events-none code-block line-numbers overflow-hidden z-10"
          aria-hidden="true"
        >
          <code className={`language-${getPrismLanguage(language)}`}>
            {code || ' '} {/* Ensure there's always content for highlighting */}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditorPane;

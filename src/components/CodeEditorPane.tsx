
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
  const editorRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Apply syntax highlighting whenever code or language changes
  useEffect(() => {
    if (editorRef.current) {
      // Make sure the parent element has the line-numbers class
      const parentElement = editorRef.current.parentElement;
      if (parentElement && !parentElement.classList.contains("line-numbers")) {
        parentElement.classList.add("line-numbers");
      }
      
      // Apply highlighting after a small delay to ensure DOM is ready
      setTimeout(() => {
        Prism.highlightElement(editorRef.current);
      }, 10);
    }
  }, [code, language]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <pre className="line-numbers bg-zinc-950 h-80 w-full m-0">
        {/* The textarea for user input */}
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
        <code 
          ref={editorRef}
          className={`language-${getPrismLanguage(language)} absolute inset-0 w-full h-full p-4 pointer-events-none overflow-hidden z-10`}
        >
          {code || ' '} {/* Ensure there's always content for highlighting */}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditorPane;

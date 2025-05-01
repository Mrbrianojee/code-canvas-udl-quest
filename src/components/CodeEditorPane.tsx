
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
      const prismLanguage = getPrismLanguage(language);
      
      // Set the code content for highlighting
      editorRef.current.textContent = code || ' ';
      
      // Apply highlighting with a small delay
      setTimeout(() => {
        try {
          Prism.highlightElement(editorRef.current);
        } catch (error) {
          console.error("Error highlighting editor code:", error);
        }
      }, 10);
    }
  }, [code, language, getPrismLanguage]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <pre className="line-numbers bg-zinc-950 h-80 w-full m-0 p-0 overflow-auto">
        {/* Hidden textarea for user input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full p-4 font-mono text-transparent caret-white resize-none bg-transparent z-20 outline-none"
          style={{ 
            caretColor: "white",
            color: "transparent",
          }}
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
        />
        
        {/* Syntax highlighted code display */}
        <code 
          ref={editorRef}
          className={`language-${getPrismLanguage(language)} absolute inset-0 w-full h-full p-4 pointer-events-none font-mono`}
        >
          {code || ' '} {/* Ensure there's always content for highlighting */}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditorPane;

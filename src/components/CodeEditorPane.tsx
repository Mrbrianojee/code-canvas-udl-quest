
import React, { useRef, useEffect } from 'react';
import { highlightElement } from "@/utils/codeEditorUtils";

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
  const codeRef = useRef<HTMLElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  
  // Apply syntax highlighting when code or language changes
  useEffect(() => {
    if (codeRef.current) {
      // Important: We need to ensure the code element has identical content
      codeRef.current.textContent = code || " ";
      highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Ensure textarea and code display are perfectly aligned
  useEffect(() => {
    if (textareaRef.current && preRef.current) {
      // Force a consistent starting point for both elements
      preRef.current.scrollTop = 0;
      textareaRef.current.scrollTop = 0;
    }
  }, [code]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="editor-container relative bg-zinc-950 w-full overflow-auto">
        {/* Code display with syntax highlighting */}
        <pre ref={preRef} className="code-mirror-pre">
          <code 
            ref={codeRef}
            className={`language-${getPrismLanguage(language)}`}
          >
            {code || ' '}
          </code>
        </pre>
        
        {/* Textarea positioned exactly over the code display */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          className="code-mirror-textarea"
          spellCheck="false"
          placeholder={`Write your ${language} code here...`}
          aria-label={`${language} code editor`}
        />
      </div>
    </div>
  );
};

export default CodeEditorPane;

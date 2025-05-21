
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

  // Handle textarea scroll to match underlying pre element
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (preRef.current && e.currentTarget) {
      preRef.current.scrollTop = e.currentTarget.scrollTop;
      preRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  // Ensure textarea and code display match in dimensions and position
  useEffect(() => {
    if (textareaRef.current && preRef.current && codeRef.current) {
      // Reset positions
      textareaRef.current.scrollTop = 0;
      preRef.current.scrollTop = 0;
      
      // Force same height
      const height = Math.max(preRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${height}px`;
      preRef.current.style.height = `${height}px`;
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
          onScroll={handleScroll}
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

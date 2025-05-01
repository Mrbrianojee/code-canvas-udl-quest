
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
  
  // Apply syntax highlighting when code or language changes
  useEffect(() => {
    if (codeRef.current) {
      // Set content first
      codeRef.current.textContent = code || " ";
      // Apply highlighting
      highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Adjust textarea height to match content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [code]);
  
  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="editor-container relative bg-zinc-950 min-h-[200px] h-auto max-h-[500px] w-full overflow-auto">
        {/* Code display with syntax highlighting */}
        <pre className="line-numbers m-0 p-4 whitespace-pre-wrap">
          <code 
            ref={codeRef}
            className={`language-${getPrismLanguage(language)} block w-full font-mono`}
          >
            {code || ' '}
          </code>
        </pre>
        
        {/* Hidden textarea for user input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full p-4 font-mono resize-none bg-transparent text-transparent caret-white z-10 whitespace-pre-wrap"
          style={{
            caretColor: "white",
            fontFamily: "'Fira Code', 'Menlo', monospace",
            fontSize: "inherit",
            lineHeight: "inherit",
            tabSize: "2",
            letterSpacing: "normal",
          }}
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default CodeEditorPane;

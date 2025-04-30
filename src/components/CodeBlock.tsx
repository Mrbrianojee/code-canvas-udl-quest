
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "javascript", className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Map component props language to Prism language
  const getPrismLanguage = (lang: string): string => {
    const langMap: Record<string, string> = {
      js: "javascript",
      javascript: "javascript",
      py: "python",
      python: "python",
      ts: "typescript",
      typescript: "typescript",
      jsx: "jsx",
      tsx: "tsx",
      java: "java",
      c: "c",
      cpp: "cpp",
      csharp: "csharp",
    };
    
    return langMap[lang.toLowerCase()] || "javascript";
  };

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className={cn("code-block line-numbers", className)}>
        <code 
          ref={codeRef} 
          className={`language-${getPrismLanguage(language)}`}
        >
          {code}
        </code>
      </pre>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="h-8 w-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
        >
          {copied ? <Check size={16} /> : <Clipboard size={16} />}
        </Button>
      </div>
      {language && (
        <div className="absolute bottom-2 right-2 text-xs text-zinc-500">
          {language}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;

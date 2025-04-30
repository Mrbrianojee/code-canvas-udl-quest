
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "javascript", className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className={cn("code-block", className)}>
        <code>{code}</code>
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

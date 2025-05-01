
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Play, Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { executeJavaScript, executePython } from "@/utils/codeExecution";
import { getPrismLanguage, initPrism } from "@/utils/codeEditorUtils";
import { usePyodide } from "@/hooks/usePyodide";
import CodeEditorPane from "./CodeEditorPane";
import SolutionDisplay from "./SolutionDisplay";
import CodeOutputDisplay from "./CodeOutputDisplay";

interface ExecutableCodeEditorProps {
  initialCode: string;
  language: string;
  showSolutionProp?: boolean;
}

const ExecutableCodeEditor = ({ 
  initialCode, 
  language,
  showSolutionProp = false
}: ExecutableCodeEditorProps) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [showSolution, setShowSolution] = useState(showSolutionProp);
  
  const isPythonLanguage = language.toLowerCase() === "python";
  const { pyodide, pyodideReady, pyodideLoading } = usePyodide(isPythonLanguage);

  // Initialize Prism when component mounts
  useEffect(() => {
    initPrism();
  }, []);

  // Reset code when language changes
  useEffect(() => {
    setCode("");
  }, [language]);

  const handleExecute = async () => {
    setIsExecuting(true);
    setOutput("");
    
    try {
      let result = "";
      
      if (language.toLowerCase() === "javascript") {
        result = executeJavaScript(code);
        setOutput(result);
      } else if (isPythonLanguage) {
        if (pyodideLoading) {
          setOutput("Python interpreter is loading, please wait...");
          return;
        }
        
        if (!pyodideReady) {
          setOutput("Python interpreter failed to load. Please refresh the page and try again.");
          return;
        }
        
        result = await executePython(code, pyodide);
        setOutput(result);
      } else {
        setOutput(`Execution not supported for ${language}`);
      }
    } catch (error) {
      setOutput(`Error executing code: ${error.message}`);
    } finally {
      setIsExecuting(false);
    }
  };

  // Handle textarea input and sync with highlighted display
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  // Handle tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      
      // Insert 2 spaces for tab
      const newText = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newText);
      
      // Set cursor position after the inserted tab
      setTimeout(() => {
        const textareas = document.querySelectorAll('textarea');
        const activeTextarea = textareas[0];
        if (activeTextarea) {
          activeTextarea.selectionStart = start + 2;
          activeTextarea.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  // Copy solution to clipboard and editor
  const copySolutionToClipboard = () => {
    navigator.clipboard.writeText(initialCode)
      .then(() => {
        setCode(initialCode);
        toast.success("Solution copied to editor");
      })
      .catch(err => {
        toast.error("Failed to copy solution");
        console.error("Copy failed:", err);
      });
  };

  return (
    <div className="space-y-4 mt-4">
      <CodeEditorPane 
        code={code}
        language={language}
        getPrismLanguage={getPrismLanguage}
        handleCodeChange={handleCodeChange}
        handleKeyDown={handleKeyDown}
      />
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button 
            onClick={handleExecute} 
            disabled={isExecuting || (isPythonLanguage && pyodideLoading)}
            className="flex items-center gap-2"
          >
            <Play size={16} />
            {isExecuting ? "Running..." : pyodideLoading && isPythonLanguage ? "Loading Python..." : "Run Code"}
          </Button>
          
          {showSolutionProp && (
            <Button 
              variant="ghost" 
              onClick={copySolutionToClipboard}
              className="flex items-center gap-2"
            >
              <Copy size={16} />
              Copy Solution
            </Button>
          )}
        </div>
        
        <span className="text-sm text-muted-foreground capitalize">
          {language}
        </span>
      </div>
      
      {showSolution && (
        <SolutionDisplay 
          initialCode={initialCode}
          language={language}
          getPrismLanguage={getPrismLanguage}
        />
      )}
      
      <CodeOutputDisplay output={output} />
    </div>
  );
};

export default ExecutableCodeEditor;

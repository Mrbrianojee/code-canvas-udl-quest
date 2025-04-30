import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Play, Copy } from "lucide-react";
import Prism from "prismjs";

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
  // Start with an empty code editor instead of showing the solution
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [pyodideLoading, setPyodideLoading] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const editorRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Map component props language to Prism language
  const getPrismLanguage = (lang: string): string => {
    const langMap: Record<string, string> = {
      js: "javascript",
      javascript: "javascript",
      py: "python",
      python: "python",
      ts: "typescript",
      typescript: "typescript",
    };
    
    return langMap[lang.toLowerCase()] || "javascript";
  };

  // Handle code changes and syntax highlighting
  useEffect(() => {
    if (editorRef.current) {
      Prism.highlightElement(editorRef.current);
    }
  }, [code, language]);

  // Load Pyodide when needed for Python execution
  useEffect(() => {
    if (language.toLowerCase() === "python" && !pyodideReady && !pyodideLoading) {
      const loadPyodide = async () => {
        try {
          setPyodideLoading(true);
          // Load the Pyodide script
          const script = document.createElement('script');
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
          script.async = true;
          
          const loadPromise = new Promise<void>((resolve) => {
            script.onload = () => resolve();
          });
          
          document.body.appendChild(script);
          await loadPromise;
          
          // Initialize Pyodide
          // @ts-ignore - Pyodide is loaded globally
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
          });
          
          setPyodide(pyodideInstance);
          setPyodideReady(true);
          toast.success("Python interpreter loaded successfully");
        } catch (error) {
          console.error("Failed to load Pyodide:", error);
          toast.error("Failed to load Python interpreter", {
            description: "Please try again or switch to JavaScript"
          });
        } finally {
          setPyodideLoading(false);
        }
      };
      
      loadPyodide();
    }
  }, [language, pyodideReady, pyodideLoading]);

  const executeJavaScript = (jsCode: string) => {
    try {
      // Create a safe execution environment
      const originalConsoleLog = console.log;
      let output = "";
      
      // Override console.log to capture output
      console.log = (...args) => {
        output += args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(" ") + "\n";
      };
      
      // Execute the code in a controlled context
      const executionFunc = new Function(jsCode);
      executionFunc();
      
      // Restore original console.log
      console.log = originalConsoleLog;
      
      return output || "Code executed successfully (no output)";
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

  const executePython = async (pythonCode: string) => {
    if (!pyodideReady || !pyodide) {
      return "Python interpreter is not ready. Please wait for it to load.";
    }
    
    try {
      // Add the example board for the Word Search challenge if the code is for that challenge
      let codeToRun = pythonCode;
      
      // Check if this looks like the Word Search challenge code and doesn't already define a board
      if (pythonCode.includes("def exist(board, word):") && 
          !pythonCode.includes("board = [")) {
        // Add the example board from the challenge
        codeToRun = `
# Example board from the challenge
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

${pythonCode}
`;
      }
      
      // Create a new namespace for the code execution
      pyodide.runPython(`
        import sys
        import io
        sys.stdout = io.StringIO()
      `);
      
      // Run the Python code
      pyodide.runPython(codeToRun);
      
      // Get the captured stdout
      const output = pyodide.runPython("sys.stdout.getvalue()");
      
      return output || "Code executed successfully (no output)";
    } catch (error) {
      return `Error: ${error.toString()}`;
    }
  };

  const handleExecute = async () => {
    setIsExecuting(true);
    setOutput("");
    
    try {
      let result = "";
      
      if (language.toLowerCase() === "javascript") {
        result = executeJavaScript(code);
        setOutput(result);
      } else if (language.toLowerCase() === "python") {
        if (pyodideLoading) {
          setOutput("Python interpreter is loading, please wait...");
          return;
        }
        
        if (!pyodideReady) {
          setOutput("Python interpreter failed to load. Please refresh the page and try again.");
          return;
        }
        
        result = await executePython(code);
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
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 2;
          textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  // Copy solution to clipboard
  const copySolutionToClipboard = () => {
    navigator.clipboard.writeText(initialCode);
    toast.success("Solution copied to clipboard");
  };

  return (
    <div className="space-y-4 mt-4">
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
            className="absolute inset-0 w-full h-full p-4 pointer-events-none code-block overflow-hidden z-10"
            aria-hidden="true"
          >
            <code className={`language-${getPrismLanguage(language)}`}>
              {code || ' '} {/* Ensure there's always content for highlighting */}
            </code>
          </pre>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button 
            onClick={handleExecute} 
            disabled={isExecuting || (language.toLowerCase() === "python" && pyodideLoading)}
            className="flex items-center gap-2"
          >
            <Play size={16} />
            {isExecuting ? "Running..." : pyodideLoading && language.toLowerCase() === "python" ? "Loading Python..." : "Run Code"}
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
      
      {showSolutionProp && (
        <div className="mt-4">
          <h4 className="text-md font-medium mb-2">Solution:</h4>
          <div className="bg-zinc-950 text-zinc-100 p-4 rounded-md overflow-auto max-h-96">
            <pre className="code-block">
              <code className={`language-${getPrismLanguage(language)}`}>
                {initialCode}
              </code>
            </pre>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Compare your solution with the provided one. Remember, there can be multiple valid approaches to solve a problem.
          </p>
        </div>
      )}
      
      {output && (
        <div className="mt-4">
          <h4 className="text-md font-medium mb-2">Output:</h4>
          <pre className="bg-zinc-800 text-zinc-200 p-4 rounded-md overflow-x-auto max-h-40 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ExecutableCodeEditor;

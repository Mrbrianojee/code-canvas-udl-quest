
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Play } from "lucide-react";

interface ExecutableCodeEditorProps {
  initialCode: string;
  language: string;
}

const ExecutableCodeEditor = ({ initialCode, language }: ExecutableCodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);

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
    try {
      setOutput("Python execution is simulated in this demo. In a production environment, this would connect to a backend service that runs Python code.");
      toast.info("Python execution would require a backend service in production", {
        description: "This is a demonstration of the UI only"
      });
      return "Python execution requires a backend service";
    } catch (error) {
      return `Error: ${error.message}`;
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

  return (
    <div className="space-y-4 mt-4">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono h-80 p-4 text-sm"
        placeholder={`Write your ${language} code here...`}
      />
      
      <div className="flex justify-between items-center">
        <Button 
          onClick={handleExecute} 
          disabled={isExecuting}
          className="flex items-center gap-2"
        >
          <Play size={16} />
          {isExecuting ? "Running..." : "Run Code"}
        </Button>
        
        <span className="text-sm text-muted-foreground capitalize">
          {language}
        </span>
      </div>
      
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

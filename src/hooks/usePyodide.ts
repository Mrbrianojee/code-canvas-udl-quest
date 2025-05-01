
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

/**
 * Custom hook to load and manage the Pyodide interpreter
 */
export const usePyodide = (shouldLoad: boolean) => {
  const [pyodideLoading, setPyodideLoading] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  
  useEffect(() => {
    if (shouldLoad && !pyodideReady && !pyodideLoading) {
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
  }, [shouldLoad, pyodideReady, pyodideLoading]);
  
  return {
    pyodide,
    pyodideReady,
    pyodideLoading
  };
};

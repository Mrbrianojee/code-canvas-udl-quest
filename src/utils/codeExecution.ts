
/**
 * Utility functions for executing code in different languages
 */

/**
 * Executes JavaScript code and returns the output
 */
export const executeJavaScript = (jsCode: string): string => {
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

/**
 * Executes Python code using Pyodide and returns the output
 */
export const executePython = async (
  pythonCode: string, 
  pyodide: any
): Promise<string> => {
  if (!pyodide) {
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

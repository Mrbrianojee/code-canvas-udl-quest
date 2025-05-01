
import Prism from "prismjs";

/**
 * Map component props language to Prism language
 */
export const getPrismLanguage = (lang: string): string => {
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

// Initialize Prism properly
export const initPrism = () => {
  // Ensure Prism is correctly initialized for browser environments
  if (typeof window !== 'undefined') {
    Prism.manual = true;
  }
};

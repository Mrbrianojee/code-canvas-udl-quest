
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

// Ensure Prism is properly initialized
export const initPrism = () => {
  if (typeof window !== 'undefined') {
    // This ensures the line numbers plugin is properly initialized
    Prism.manual = true;
  }
};

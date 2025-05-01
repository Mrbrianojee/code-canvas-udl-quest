
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";

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
export const initPrism = (): void => {
  if (typeof window !== 'undefined') {
    Prism.manual = true;
    // Ensure the DOM is loaded before highlighting
    if (document.readyState === 'complete') {
      Prism.highlightAll();
    } else {
      window.addEventListener('DOMContentLoaded', () => {
        Prism.highlightAll();
      });
    }
  }
};

// Helper function to highlight a specific element
export const highlightElement = (element: HTMLElement): void => {
  if (element) {
    setTimeout(() => {
      Prism.highlightElement(element);
    }, 0);
  }
};

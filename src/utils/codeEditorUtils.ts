
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

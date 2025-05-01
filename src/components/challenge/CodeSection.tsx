
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExecutableCodeEditor from "../ExecutableCodeEditor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

interface CodeSectionProps {
  solutions: {
    [language: string]: string;
  };
}

const CodeSection = ({ solutions }: CodeSectionProps) => {
  const [showSolution, setShowSolution] = useState(false);
  const [language, setLanguage] = useState<string>("javascript");
  const availableLanguages = Object.keys(solutions);
  
  // Initialize Prism highlighting when component mounts or language changes
  useEffect(() => {
    if (typeof Prism !== 'undefined') {
      // Small timeout to ensure the DOM is ready
      setTimeout(() => {
        try {
          Prism.highlightAll();
        } catch (error) {
          console.error("Error highlighting code:", error);
        }
      }, 100);
    }
  }, [language, showSolution]);
  
  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Reset solution visibility when changing language
    setTimeout(() => {
      try {
        Prism.highlightAll();
      } catch (error) {
        console.error("Error highlighting after language change:", error);
      }
    }, 50);
  };
  
  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-medium">Interactive Code Editor</h3>
      
      <Tabs 
        value={language} 
        onValueChange={handleLanguageChange}
        className="w-full"
      >
        <TabsList className="mb-2">
          {availableLanguages.map(lang => (
            <TabsTrigger 
              key={lang} 
              value={lang}
              className="capitalize"
            >
              {lang}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {availableLanguages.map(lang => (
          <TabsContent key={lang} value={lang} className="mt-0">
            <ExecutableCodeEditor 
              initialCode={solutions[lang]}
              language={lang}
              showSolutionProp={showSolution}
            />
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="flex justify-end mt-4">
        <Button 
          onClick={() => setShowSolution(!showSolution)}
          variant="outline"
          className="text-sm"
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </Button>
      </div>
    </div>
  );
};

export default CodeSection;

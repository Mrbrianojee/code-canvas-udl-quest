
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExecutableCodeEditor from "../ExecutableCodeEditor";

interface CodeSectionProps {
  solutions: {
    [language: string]: string;
  };
}

const CodeSection = ({ solutions }: CodeSectionProps) => {
  const [showSolution, setShowSolution] = useState(false);
  const [language, setLanguage] = useState<string>("javascript");
  const availableLanguages = Object.keys(solutions);
  
  // Handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
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
              key={`lang-${lang}`} 
              value={lang}
              className="capitalize"
            >
              {lang}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {availableLanguages.map(lang => (
          <TabsContent key={`content-${lang}`} value={lang} className="mt-0">
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

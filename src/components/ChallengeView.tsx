
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import DifficultyBadge from "./DifficultyBadge";
import CodeBlock from "./CodeBlock";
import ExecutableCodeEditor from "./ExecutableCodeEditor";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ChallengeViewProps {
  challenge: Challenge;
}

const ChallengeView = ({ challenge }: ChallengeViewProps) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [visibleHints, setVisibleHints] = useState<number>(0);
  const [language, setLanguage] = useState<string>("javascript");
  const [mode, setMode] = useState<"interactive">("interactive");
  const availableLanguages = Object.keys(challenge.solutions);

  // Determine if we need to show a special hint for the Word Search challenge
  const isWordSearchChallenge = challenge.id === "word-search";

  const showNextHint = () => {
    if (challenge.hints && visibleHints < challenge.hints.length) {
      setVisibleHints(visibleHints + 1);
    }
  };

  const resetHints = () => {
    setVisibleHints(0);
    setShowHints(false);
  };

  // Check if there are hints to display
  const hasHints = challenge.hints && challenge.hints.length > 0;
  
  // Check if there are steps to display
  const hasSteps = challenge.steps && challenge.steps.length > 0;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <CardTitle className="text-2xl font-bold">{challenge.title}</CardTitle>
          <DifficultyBadge level={challenge.difficulty} />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {challenge.categories.map((category) => (
            <span
              key={category}
              className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Problem</h3>
          {challenge.description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
          
          {challenge.example && (
            <div className="mt-4">
              <h4 className="text-md font-medium mb-2">Example:</h4>
              <CodeBlock code={challenge.example} />
            </div>
          )}
          
          {isWordSearchChallenge && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h4 className="text-md font-medium mb-1 text-amber-800">Hint for Interactive Mode:</h4>
              <p className="text-amber-700">
                For this challenge, the example board will be automatically added when you run the code. 
                You only need to implement the <code className="bg-amber-100 px-1 py-0.5 rounded">exist()</code> function.
              </p>
            </div>
          )}

          {hasSteps && (
            <div className="mt-4">
              <h4 className="text-md font-medium mb-2">Steps:</h4>
              <ol className="list-decimal ml-5 space-y-1">
                {challenge.steps.map((step, index) => (
                  <li key={index} className="text-muted-foreground">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {hasHints && (
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium">Hints:</h4>
                <div className="flex gap-2">
                  {showHints && visibleHints > 0 && (
                    <Button 
                      onClick={resetHints} 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                    >
                      Reset Hints
                    </Button>
                  )}
                  <Button 
                    onClick={() => setShowHints(!showHints)} 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                  >
                    {showHints ? "Hide Hints" : "Show Hints"}
                  </Button>
                </div>
              </div>
              
              {showHints && (
                <div className="mt-2 space-y-2">
                  {challenge.hints.slice(0, visibleHints).map((hint, index) => (
                    <div 
                      key={index} 
                      className="p-3 bg-blue-50 border border-blue-200 rounded-md"
                    >
                      <p className="text-blue-800 font-medium text-sm mb-1">Hint {index + 1}:</p>
                      <p className="text-blue-700 text-sm">{hint}</p>
                    </div>
                  ))}
                  
                  {visibleHints < challenge.hints.length && (
                    <Button
                      onClick={showNextHint}
                      variant="ghost"
                      size="sm"
                      className="w-full border border-dashed border-blue-200 text-blue-600 hover:bg-blue-50 py-2 mt-2"
                    >
                      Show Next Hint ({visibleHints + 1} of {challenge.hints.length})
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-medium">Interactive Code Editor</h3>
          
          <Tabs 
            value={language} 
            onValueChange={setLanguage}
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
                  initialCode={challenge.solutions[lang]}
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
      </CardContent>
      <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
        <div className="flex justify-between w-full">
          <span>Created: {challenge.createdAt}</span>
          {challenge.timeComplexity && (
            <span>Time Complexity: {challenge.timeComplexity}</span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChallengeView;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import DifficultyBadge from "./DifficultyBadge";
import CodeBlock from "./CodeBlock";
import ExecutableCodeEditor from "./ExecutableCodeEditor";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ChallengeViewProps {
  challenge: Challenge;
}

const ChallengeView = ({ challenge }: ChallengeViewProps) => {
  const [showSolution, setShowSolution] = useState(false);
  const [language, setLanguage] = useState<string>("javascript");
  const [mode, setMode] = useState<"view" | "interactive">("view");
  const availableLanguages = Object.keys(challenge.solutions);

  // Determine if we need to show a special hint for the Word Search challenge
  const isWordSearchChallenge = challenge.id === "word-search";

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
          
          {isWordSearchChallenge && mode === "interactive" && (
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h4 className="text-md font-medium mb-1 text-amber-800">Hint for Interactive Mode:</h4>
              <p className="text-amber-700">
                For this challenge, the example board will be automatically added when you run the code. 
                You only need to implement the <code className="bg-amber-100 px-1 py-0.5 rounded">exist()</code> function.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <Button 
            onClick={() => setShowSolution(!showSolution)}
            variant="outline"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant={mode === "view" ? "default" : "outline"}
              onClick={() => setMode("view")}
              size="sm"
            >
              View
            </Button>
            <Button 
              variant={mode === "interactive" ? "default" : "outline"}
              onClick={() => setMode("interactive")}
              size="sm"
            >
              Interactive
            </Button>
          </div>
        </div>
        
        {showSolution && mode === "view" && (
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-medium">Solution</h3>
            
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
                  <CodeBlock 
                    code={challenge.solutions[lang]} 
                    language={lang}
                  />
                </TabsContent>
              ))}
            </Tabs>
            
            {challenge.explanation && (
              <div className="mt-4">
                <h4 className="text-md font-medium mb-2">Explanation:</h4>
                <div className="text-muted-foreground">
                  {challenge.explanation.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {mode === "interactive" && (
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
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        )}
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

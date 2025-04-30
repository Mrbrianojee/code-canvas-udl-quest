
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import DifficultyBadge from "./DifficultyBadge";
import CodeBlock from "./CodeBlock";

interface ChallengeViewProps {
  challenge: Challenge;
}

const ChallengeView = ({ challenge }: ChallengeViewProps) => {
  const [showSolution, setShowSolution] = useState(false);

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
        </div>

        <div className="pt-4">
          <Button 
            onClick={() => setShowSolution(!showSolution)}
            variant="outline"
            className="w-full"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </Button>
          
          {showSolution && (
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-medium">Solution</h3>
              <CodeBlock code={challenge.solution} />
              
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

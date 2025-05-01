
import CodeBlock from "../CodeBlock";

interface ChallengeDescriptionProps {
  description: string;
  example?: string;
  isWordSearchChallenge: boolean;
}

const ChallengeDescription = ({ 
  description, 
  example,
  isWordSearchChallenge 
}: ChallengeDescriptionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Problem</h3>
      {description.split('\n').map((paragraph, index) => (
        <p key={index} className="text-muted-foreground">
          {paragraph}
        </p>
      ))}
      
      {example && (
        <div className="mt-4">
          <h4 className="text-md font-medium mb-2">Example:</h4>
          <CodeBlock code={example} />
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
    </div>
  );
};

export default ChallengeDescription;

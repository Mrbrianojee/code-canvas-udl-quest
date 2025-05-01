
interface ChallengeStepsProps {
  steps?: string[];
}

const ChallengeSteps = ({ steps }: ChallengeStepsProps) => {
  if (!steps || steps.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-4">
      <h4 className="text-md font-medium mb-2">Steps:</h4>
      <ol className="list-decimal ml-5 space-y-1">
        {steps.map((step, index) => (
          <li key={index} className="text-muted-foreground">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default ChallengeSteps;

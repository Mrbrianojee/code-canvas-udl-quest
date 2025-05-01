
import { CardFooter } from "@/components/ui/card";

interface ChallengeFooterProps {
  createdAt: string;
  timeComplexity?: string;
}

const ChallengeFooter = ({ createdAt, timeComplexity }: ChallengeFooterProps) => {
  return (
    <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
      <div className="flex justify-between w-full">
        <span>Created: {createdAt}</span>
        {timeComplexity && (
          <span>Time Complexity: {timeComplexity}</span>
        )}
      </div>
    </CardFooter>
  );
};

export default ChallengeFooter;

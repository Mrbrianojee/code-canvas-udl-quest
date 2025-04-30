
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import DifficultyBadge from "./DifficultyBadge";

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  return (
    <Link to={`/challenge/${challenge.id}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/20 cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">{challenge.title}</CardTitle>
            <DifficultyBadge level={challenge.difficulty} />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {challenge.description.split('\n')[0]}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          {challenge.categories.map((category) => (
            <span key={category} className="mr-2 bg-secondary rounded-full px-2 py-1">
              {category}
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ChallengeCard;

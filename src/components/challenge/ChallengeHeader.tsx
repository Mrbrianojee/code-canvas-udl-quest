
import { Card, CardTitle } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import DifficultyBadge from "../DifficultyBadge";

interface ChallengeHeaderProps {
  title: string;
  difficulty: Challenge["difficulty"];
  categories: string[];
}

const ChallengeHeader = ({ title, difficulty, categories }: ChallengeHeaderProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <DifficultyBadge level={difficulty} />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChallengeHeader;

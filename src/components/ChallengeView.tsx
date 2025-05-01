
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Challenge } from "@/data/challenges";
import ChallengeHeader from "./challenge/ChallengeHeader";
import ChallengeDescription from "./challenge/ChallengeDescription";
import ChallengeSteps from "./challenge/ChallengeSteps";
import ChallengeHints from "./challenge/ChallengeHints";
import CodeSection from "./challenge/CodeSection";
import ChallengeFooter from "./challenge/ChallengeFooter";
import RegexCheatSheet from "./challenge/RegexCheatSheet";
import BFSExplainer from "./challenge/BFSExplainer";

interface ChallengeViewProps {
  challenge: Challenge;
}

const ChallengeView = ({ challenge }: ChallengeViewProps) => {
  // Determine if we need to show a special hint for the Word Search challenge
  const isWordSearchChallenge = challenge.id === "word-search";
  // Determine if we should show the regex cheat sheet for the palindrome challenge
  const isPalindromeChallenge = challenge.id === "palindrome";
  // Determine if we should show the BFS explainer for the Word Ladder challenge
  const isWordLadderChallenge = challenge.id === "word-ladder";

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <ChallengeHeader 
          title={challenge.title}
          difficulty={challenge.difficulty}
          categories={challenge.categories}
        />
      </CardHeader>
      <CardContent className="space-y-6">
        <ChallengeDescription 
          description={challenge.description}
          example={challenge.example}
          isWordSearchChallenge={isWordSearchChallenge}
        />
        {isPalindromeChallenge && <RegexCheatSheet />}
        {isWordLadderChallenge && <BFSExplainer />}
        <ChallengeSteps steps={challenge.steps} />
        <ChallengeHints hints={challenge.hints} />
        <CodeSection solutions={challenge.solutions} />
      </CardContent>
      <ChallengeFooter 
        createdAt={challenge.createdAt}
        timeComplexity={challenge.timeComplexity}
      />
    </Card>
  );
};

export default ChallengeView;

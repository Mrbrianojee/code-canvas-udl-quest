
import { useNavigate, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChallengeView from "@/components/ChallengeView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Challenge } from "@/data/challenges";

// Define type for the loader data
interface ChallengeLoaderData {
  challenge: Challenge;
}

const ChallengePage = () => {
  const { challenge } = useLoaderData() as ChallengeLoaderData;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 pl-0 flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          <span>Back to challenges</span>
        </Button>
        <ChallengeView challenge={challenge} />
      </main>
      <Footer />
    </div>
  );
};

export default ChallengePage;

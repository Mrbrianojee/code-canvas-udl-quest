
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getChallengeById } from "@/data/challenges";
import ChallengeView from "@/components/ChallengeView";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const ChallengePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const challenge = id ? getChallengeById(id) : undefined;

  if (!challenge) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container px-4 py-8">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4">Challenge not found</h1>
            <Button onClick={() => navigate("/")}>Return to Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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


import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";
import { challenges, getChallengesByDifficulty } from "@/data/challenges";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [searchParams] = useSearchParams();
  const difficultyParam = searchParams.get("difficulty");
  const [activeTab, setActiveTab] = useState<string>(difficultyParam || "all");

  const filteredChallenges = difficultyParam 
    ? getChallengesByDifficulty(difficultyParam)
    : challenges;

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl mb-4">
            Coding Challenges for All Levels
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Improve your coding skills with our collection of fun and educational programming challenges. 
            From easy to hard, there's something for everyone!
          </p>
        </section>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">All Challenges</TabsTrigger>
              <TabsTrigger value="easy">Easy</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="hard">Hard</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="easy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getChallengesByDifficulty("easy").map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="medium" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getChallengesByDifficulty("medium").map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="hard" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getChallengesByDifficulty("hard").map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

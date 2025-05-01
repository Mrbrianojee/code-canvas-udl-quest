
import { Challenge } from "./types";
import { easyChallenges } from "./easy";
import { mediumChallenges } from "./medium";
import { hardChallenges } from "./hard";
import { superHardChallenges } from "./super-hard";

// Combine all challenges
export const challenges: Challenge[] = [
  ...easyChallenges,
  ...mediumChallenges,
  ...hardChallenges,
  ...superHardChallenges
];

// Helper functions
export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find(challenge => challenge.id === id);
};

export const getChallengesByDifficulty = (difficulty: string): Challenge[] => {
  return challenges.filter(challenge => challenge.difficulty === difficulty);
};

// Re-export the Challenge type using 'export type'
export type { Challenge } from "./types";

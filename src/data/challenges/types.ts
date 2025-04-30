
export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  solutions: {
    [language: string]: string;
  };
  example?: string;
  explanation?: string;
  categories: string[];
  timeComplexity?: string;
  createdAt: string;
  hints?: string[];
}

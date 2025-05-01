
import { Challenge } from '../types';

export const sumChallenge: Challenge = {
  id: "sum-of-two-numbers",
  title: "Sum of Two Numbers",
  description: "Write a function that takes two numbers as arguments and returns their sum.\n\nThis is a very basic exercise to practice function syntax and arithmetic operations.",
  difficulty: "easy",
  solutions: {
    javascript: `function sum(a, b) {
  return a + b;
}`,
    python: `def sum(a, b):
    return a + b`
  },
  categories: ["Fundamentals", "Arithmetic"],
  createdAt: "2023-05-10",
  example: `sum(1, 2);  // returns 3
sum(-1, 1); // returns 0
sum(5, 7);  // returns 12`,
  explanation: "This is the most fundamental programming exercise possible. We create a function that takes two parameters and returns their sum using the addition operator.\n\nIt's a simple demonstration of function declaration, parameters, and return values.",
  hints: [
    "Use the '+' operator to add two numbers together.",
    "Remember to return the result of the addition.",
    "In most languages, this can be done in a single line of code."
  ]
};

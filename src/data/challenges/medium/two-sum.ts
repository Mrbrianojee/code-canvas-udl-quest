
import { Challenge } from '../types';

export const twoSumChallenge: Challenge = {
  id: "two-sum",
  title: "Sum of Two Numbers",
  description: "Let's tackle a basic math problem that's perfect for beginners. Here's what you need to do:\n\nThe Problem\nYour task is to write a simple program. This program should ask for two numbers, then show you the total of these numbers.",
  difficulty: "medium",
  solutions: {
    javascript: `let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

let sum = num1 + num2;

console.log(\`The sum is: \${sum}\`);`,
    python: `num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

sum = num1 + num2

print("The sum is:", sum)`
  },
  example: `Input:
5
10
Output:
15`,
  categories: ["Arrays", "Fundamentals", "Arithmetic"],
  createdAt: "2023-04-18",
  timeComplexity: "O(1)",
  explanation: "This simple problem helps you practice getting information from the user, doing something with it, and then showing the result. It's a good step to get comfortable with before you dive into more complicated programming challenges!",
  hints: [
    "Make sure to change the user's input into numbers before adding them up.",
    "Show the result in a way that's easy for the user to understand.",
    "You can also check if the user actually entered numbers."
  ],
  steps: [
    "Ask the user for two numbers.",
    "Save these numbers in two spots, let's call them num1 and num2.",
    "Add num1 and num2 together, and save this in a new spot called sum.",
    "Show the user the sum."
  ]
};

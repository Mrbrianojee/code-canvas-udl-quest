
import { Challenge } from '../types';

export const convertMinutesChallenge: Challenge = {
  id: "convert-minutes-seconds",
  title: "Convert Minutes into Seconds",
  description: "Your job is to write a simple program that changes minutes into seconds. This means if someone tells you a number in minutes, your program will tell them what that number is in seconds.",
  difficulty: "easy",
  solutions: {
    javascript: `let minutes = parseInt(prompt("Enter number of minutes: "));

let seconds = minutes * 60;

console.log(\`\${minutes} minutes is \${seconds} seconds\`);`,
    python: `minutes = int(input("Enter number of minutes: "))

seconds = minutes * 60

print(minutes, "minutes is", seconds, "seconds")`
  },
  categories: ["Fundamentals", "Arithmetic", "Conversion"],
  createdAt: "2023-05-15",
  example: `Input:
5
Output:
300`,
  explanation: "Learning to change one type of measurement to another is a useful skill in coding. It's a good way to get comfortable with basic math in programming and sets you up for more challenging tasks later on.",
  hints: [
    "It's important to check if the minutes entered are a real number. This helps make sure your program works right.",
    "When you share the result, make it clear, like saying 'X minutes is Y seconds'.",
    "Remember that each minute has exactly 60 seconds."
  ],
  steps: [
    "First, ask the person using your program for a number in minutes. Let's put this number in a spot called minutes.",
    "Since 1 minute is the same as 60 seconds, you just need to multiply the minutes by 60 to get the seconds.",
    "Keep this answer in a new spot called seconds.",
    "Finally, tell the person how many seconds that is."
  ]
};

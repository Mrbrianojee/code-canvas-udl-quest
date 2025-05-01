
import { Challenge } from '../types';

export const helloWorldChallenge: Challenge = {
  id: "hello-world",
  title: "Hello World Variations",
  description: "Write a function that prints 'Hello, World!' to the console in different programming languages.\n\nThis is a classic starting point for learning a new programming language.",
  difficulty: "easy",
  solutions: {
    javascript: `// JavaScript
function helloWorld() {
  console.log("Hello, World!");
}`,
    python: `# Python 
def hello_world():
    print("Hello, World!")

# Python (one-liner)
print("Hello, World!")`
  },
  categories: ["Fundamentals", "Syntax"],
  createdAt: "2023-04-15",
  example: `helloWorld(); // Output: Hello, World!`,
  explanation: "This challenge introduces syntax differences between programming languages.\n\nEach language has its own way of defining functions and printing to the console, but they all accomplish the same task.",
  hints: [
    "Remember that in JavaScript, you can use console.log() to print to the console.",
    "Function declarations in JavaScript start with the 'function' keyword.",
    "Don't forget to add parentheses after your function name!"
  ]
};

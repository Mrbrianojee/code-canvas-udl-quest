
import { Challenge } from '../types';

export const factorialChallenge: Challenge = {
  id: "factorial",
  title: "Factorial Calculator",
  description: "Write a function that calculates the factorial of a non-negative integer.\n\nThe factorial of a non-negative integer n is the product of all positive integers less than or equal to n. It is denoted by n!.",
  difficulty: "easy",
  solutions: {
    javascript: `// Iterative approach
function factorial(n) {
  if (n < 0) return null; // Invalid input
  if (n <= 1) return 1;   // Base case
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if (n < 0) return null; // Invalid input
  if (n <= 1) return 1;   // Base case
  return n * factorialRecursive(n - 1);
}`,
    python: `# Iterative approach
def factorial(n):
    if n < 0:
        return None  # Invalid input
    if n <= 1:
        return 1     # Base case
    
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

# Recursive approach
def factorial_recursive(n):
    if n < 0:
        return None  # Invalid input
    if n <= 1:
        return 1     # Base case
    return n * factorial_recursive(n - 1)`
  },
  categories: ["Recursion", "Math", "Algorithms"],
  createdAt: "2023-05-15",
  example: `factorial(0);   // returns 1
factorial(1);   // returns 1
factorial(5);   // returns 120
factorial(10);  // returns 3,628,800`,
  timeComplexity: "O(n)",
  explanation: "This challenge demonstrates both iterative and recursive approaches to calculating a factorial.\n\nIn the iterative approach, we use a for loop to multiply numbers from 2 up to n.\n\nIn the recursive approach, we define the factorial in terms of smaller factorials: n! = n * (n-1)!. We use base cases to stop the recursion when n is 0 or 1.",
  hints: [
    "Remember that 0! = 1 and 1! = 1 are your base cases.",
    "You can solve this iteratively with a for loop or recursively by calling the function itself.",
    "For iterative solution, start with result = 1 and multiply it by each integer from 2 to n.",
    "For recursive solution, use the formula n! = n * (n-1)! until you reach a base case.",
    "Watch out for stack overflow with large inputs when using recursion."
  ]
};

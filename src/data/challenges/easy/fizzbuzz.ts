
import { Challenge } from '../types';

export const fizzBuzzChallenge: Challenge = {
  id: "fizzbuzz",
  title: "FizzBuzz",
  description: "Write a function that prints numbers from 1 to n. For multiples of 3, print 'Fizz' instead of the number. For multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.\n\nThis is a classic coding interview question that tests your understanding of conditional logic and loops.",
  difficulty: "easy",
  solutions: {
    javascript: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}`,
    python: `def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`
  },
  example: `fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz`,
  categories: ["Conditionals", "Loops"],
  createdAt: "2023-04-16",
  timeComplexity: "O(n)",
  explanation: "The solution iterates through numbers 1 to n, checking each number against our conditions.\n\nWe check for multiples of both 3 and 5 first (FizzBuzz), then for multiples of 3 (Fizz), then for multiples of 5 (Buzz). If none of these conditions are met, we print the number itself.",
  hints: [
    "Start by creating a loop that counts from 1 to n.",
    "Use the modulo operator (%) to check if a number is divisible by 3 or 5.",
    "Remember to check for numbers that are multiples of both 3 and 5 first.",
    "The order of your conditional checks matters!"
  ]
};

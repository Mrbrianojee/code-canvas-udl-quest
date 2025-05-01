
import { Challenge } from '../types';

export const reverseStringChallenge: Challenge = {
  id: "reverse-string",
  title: "Reverse a String",
  description: "Write a function that takes a string as input and returns the string reversed.\n\nThis is a basic string manipulation exercise to get you comfortable with string operations.",
  difficulty: "easy",
  solutions: {
    javascript: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative approach
function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
    python: `def reverse_string(s):
    return s[::-1]
    
# Alternative approach using loop
def reverse_string_loop(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str`
  },
  categories: ["Strings", "Algorithms"],
  createdAt: "2023-05-01",
  example: `reverseString("hello");  // returns "olleh"
reverseString("world");  // returns "dlrow"`,
  explanation: "There are multiple ways to reverse a string. The most concise method in JavaScript uses the built-in methods: split to convert the string to an array, reverse to reverse the array, and join to combine the array back into a string.\n\nThe alternative solution demonstrates how to reverse a string using a loop, which might be more appropriate in languages without built-in reverse functionality.",
  hints: [
    "In JavaScript, strings don't have a built-in reverse method, but arrays do.",
    "You can split a string into an array of characters, reverse that array, and then join it back together.",
    "If you want to avoid using built-in methods, you can iterate through the string in reverse order and build the new string.",
    "Think about edge cases: empty strings, strings with a single character, or strings with special characters."
  ]
};

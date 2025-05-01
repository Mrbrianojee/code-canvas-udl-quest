
import { Challenge } from '../types';

export const palindromeChallenge: Challenge = {
  id: "palindrome",
  title: "Palindrome Checker",
  description: "A palindrome is a word or phrase that reads the same backward as forward. Examples include \"racecar\", \"madam\", and even phrases like \"nurses run\" when you ignore the spaces. Checking if something is a palindrome is a cool coding task. It involves flipping a sequence around and comparing it to the original. This challenge is a good way to practice handling text (strings), using loops, and making decisions in your code. Let's dive into making a tool that can tell us if a word is a palindrome!",
  difficulty: "easy",
  solutions: {
    javascript: `function isPalindrome(word) {

  // Make the word backward
  let reversed = word.split("").reverse().join(""); 

  // Check if they are the same
  if (reversed === word) {
    return true;
  }
  return false;

}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false`,
    python: `def is_palindrome(word):
  
  reversed_word = word[::-1]

  if reversed_word == word:
    return True
  return False

print(is_palindrome("racecar")) # True 
print(is_palindrome("hello")) # False`
  },
  categories: ["Strings", "Fundamentals", "Algorithms"],
  createdAt: "2023-05-20",
  example: `Input: racecar
Output: true 

Input: hello 
Output: false`,
  explanation: "This task lets you work with strings and understand how to manipulate them, which is a valuable skill in programming.",
  hints: [
    "Try to create a reversed version of the string first, then compare it with the original.",
    "In JavaScript, you can use string methods like split(), reverse(), and join() to reverse a string.",
    "In Python, you can use slicing with a negative step to reverse a string easily: word[::-1].",
    "Remember to check if the reversed string is exactly the same as the original."
  ],
  steps: [
    "First, get the word from the user.",
    "Next, create a version of the word that's spelled backward.",
    "Then, see if the backward word is the same as the original.",
    "If they match, it means the word is a palindrome, so show \"true\".",
    "If they don't match, show \"false\"."
  ]
};

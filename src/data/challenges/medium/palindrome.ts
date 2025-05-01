
import { Challenge } from '../types';

export const palindromeChallenge: Challenge = {
  id: "palindrome",
  title: "Palindrome Checker",
  description: "Write a function that checks if a given string is a palindrome.\n\nA palindrome is a string that reads the same backward as forward, ignoring case, punctuation, and spaces.",
  difficulty: "medium",
  solutions: {
    javascript: `function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}`,
    python: `def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    import re
    clean_str = re.sub(r'[^a-z0-9]', '', s.lower())
    
    # Compare the string with its reverse
    return clean_str == clean_str[::-1]`
  },
  categories: ["Strings", "Algorithms", "Regular Expressions"],
  createdAt: "2023-04-17",
  example: `isPalindrome("racecar");  // returns true
isPalindrome("hello");    // returns false
isPalindrome("A man, a plan, a canal: Panama");  // returns true`,
  timeComplexity: "O(n)",
  explanation: "This solution first cleans the input string by removing non-alphanumeric characters and converting to lowercase.\n\nThen, we check if the cleaned string is equal to its reverse. If it is, the string is a palindrome.",
  hints: [
    "Start by cleaning the input string - remove spaces, punctuation, and convert all characters to lowercase.",
    "In JavaScript, you can use regular expressions to remove unwanted characters.",
    "The reverse of a string can be obtained by: 1) splitting it into an array of characters, 2) reversing the array, and 3) joining it back.",
    "Compare the cleaned string with its reverse to determine if it's a palindrome."
  ],
  steps: [
    "Create a function that takes a string parameter",
    "Clean the input string by removing non-alphanumeric characters and converting to lowercase",
    "Create a reversed version of the cleaned string",
    "Compare the cleaned string with its reversed version",
    "Return true if they are equal (palindrome) or false if they are not",
    "Test with various inputs including palindromes with mixed case and punctuation"
  ]
};


import { Challenge } from '../types';

export const countVowelsChallenge: Challenge = {
  id: "count-vowels",
  title: "Count Vowels",
  description: "Write a function that counts the number of vowels in a given string.\n\nFor this challenge, consider 'a', 'e', 'i', 'o', and 'u' as vowels. The function should be case-insensitive.",
  difficulty: "easy",
  solutions: {
    javascript: `function countVowels(str) {
  // Convert string to lowercase
  const lowerStr = str.toLowerCase();
  
  // Define vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Count vowels
  let count = 0;
  for (const char of lowerStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}

// Alternative using regex
function countVowelsRegex(str) {
  // Use regex to match all vowels (case-insensitive) and return the match count
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}`,
    python: `def count_vowels(s):
    # Convert string to lowercase
    lower_str = s.lower()
    
    # Define vowels
    vowels = ['a', 'e', 'i', 'o', 'u']
    
    # Count vowels
    count = 0
    for char in lower_str:
        if char in vowels:
            count += 1
    
    return count

# Alternative using list comprehension
def count_vowels_alt(s):
    vowels = 'aeiou'
    return sum(1 for char in s.lower() if char in vowels)`
  },
  categories: ["Strings", "Counting"],
  createdAt: "2023-05-20",
  example: `countVowels("hello");      // returns 2
countVowels("WORLD");      // returns 1
countVowels("JavaScript"); // returns 3`,
  timeComplexity: "O(n)",
  explanation: "This solution iterates through each character in the input string and checks if it's a vowel.\n\nTo make the function case-insensitive, we first convert the entire string to lowercase. Then we define what characters are considered vowels and count them.\n\nThe alternative solution uses regular expressions to match all vowels in the string at once.",
  hints: [
    "Convert the input string to lowercase to make your check case-insensitive.",
    "Define which characters are vowels (typically a, e, i, o, u).",
    "Iterate through each character and check if it's in your vowel list.",
    "Regular expressions can be a more concise way to solve this problem: use /[aeiou]/gi in JavaScript.",
    "Don't forget to handle edge cases like empty strings."
  ],
  steps: [
    "Create a function that takes a string parameter",
    "Convert the input string to lowercase for case-insensitivity",
    "Define a list or array of vowels ('a', 'e', 'i', 'o', 'u')",
    "Initialize a counter variable to 0",
    "Iterate through each character in the string",
    "For each character, check if it is in your vowels list",
    "If it is a vowel, increment your counter",
    "After processing all characters, return the final count",
    "Alternative approach: Use regular expressions to match all vowels at once",
    "Test with various inputs including mixed case strings and strings with no vowels"
  ]
};

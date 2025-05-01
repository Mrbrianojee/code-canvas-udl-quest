
import { Challenge } from '../types';

export const longestWordChallenge: Challenge = {
  id: "longest-word",
  title: "Find the Longest Word",
  description: "This coding challenge is all about working with words in a sentence. It's a good exercise to get better at handling text.",
  difficulty: "easy",
  solutions: {
    javascript: `function findLongestWord(sentence) {
  let words = sentence.split(' ');
  let longest = 0;
  
  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6`,
    python: `def find_longest_word(sentence):
  words = sentence.split()
  longest = 0
  
  for word in words:
    if len(word) > longest:
      longest = len(word)
  
  return longest

print(find_longest_word("The quick brown fox jumped over the lazy dog")) # 6`
  },
  categories: ["Strings", "Fundamentals", "Algorithms"],
  createdAt: "2023-06-05",
  example: `Input: "The quick brown fox jumped over the lazy dog"
Output: 6 (because "jumped" is the longest word)`,
  explanation: "Finding the longest word is a straightforward task that helps you get used to manipulating text and understanding simple algorithms. It's a great stepping stone to more complex challenges.",
  hints: [
    "First split the sentence into individual words.",
    "Then loop through each word and keep track of the longest one.",
    "You can use the .length property in JavaScript or len() function in Python to find the length of a word.",
    "Consider using methods like .split() to break the sentence into words."
  ],
  steps: [
    "Break the sentence into words",
    "Go through each word, keeping track of the longest one you find",
    "Share the number of letters in the longest word"
  ]
};

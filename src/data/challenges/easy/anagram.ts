
import { Challenge } from '../types';

export const anagramChallenge: Challenge = {
  id: "anagram-checker",
  title: "Anagram Checker",
  description: "Write a function that checks if two strings are anagrams of each other.\n\nAn anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
  difficulty: "easy",
  solutions: {
    javascript: `function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\\s/g, '').toLowerCase();
  
  // Check if lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  
  // Sort and compare
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// Alternative using character frequency
function areAnagramsFrequency(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\\s/g, '').toLowerCase();
  
  // Check if lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  
  const charCount = {};
  
  // Count characters in first string
  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Decrement counts for second string
  for (const char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}`,
    python: `def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase
    clean_str1 = str1.replace(" ", "").lower()
    clean_str2 = str2.replace(" ", "").lower()
    
    # Check if lengths are different
    if len(clean_str1) != len(clean_str2):
        return False
    
    # Sort and compare
    return sorted(clean_str1) == sorted(clean_str2)

# Alternative using character frequency
def are_anagrams_frequency(str1, str2):
    # Remove spaces and convert to lowercase
    clean_str1 = str1.replace(" ", "").lower()
    clean_str2 = str2.replace(" ", "").lower()
    
    # Check if lengths are different
    if len(clean_str1) != len(clean_str2):
        return False
    
    char_count = {}
    
    # Count characters in first string
    for char in clean_str1:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Decrement counts for second string
    for char in clean_str2:
        if char not in char_count or char_count[char] == 0:
            return False
        char_count[char] -= 1
    
    return True`
  },
  categories: ["Strings", "Hash Tables"],
  createdAt: "2023-05-02",
  example: `areAnagrams("listen", "silent");  // returns true
areAnagrams("hello", "world");    // returns false
areAnagrams("rail safety", "fairy tales");  // returns true`,
  timeComplexity: "O(n log n) for sorting, O(n) for frequency approach",
  explanation: "There are two common approaches for checking anagrams. The first is to sort both strings and compare them - if they're anagrams, they'll be identical after sorting.\n\nThe second approach uses a hash table (object in JavaScript) to count character frequencies in the first string, then decrements these counts as it iterates through the second string. If at any point a character isn't found or its count is zero, the strings aren't anagrams.",
  hints: [
    "Start by normalizing the strings - remove spaces and convert both to lowercase.",
    "A quick check: if the strings have different lengths after normalization, they can't be anagrams.",
    "You can sort both strings and compare them character by character.",
    "Another approach is to count the frequency of each character in both strings and compare the counts.",
    "Remember to handle special cases like spaces and case sensitivity according to your requirements."
  ],
  steps: [
    "Create a function that takes two string parameters",
    "Normalize both strings by removing spaces and converting to lowercase",
    "Check if the normalized strings have different lengths - if so, return false immediately",
    "For the sorting approach: Sort both strings alphabetically and compare them",
    "For the frequency counting approach: Create a hash map to track character counts",
    "Count the frequency of each character in the first string",
    "Iterate through the second string, decrementing counts for each character",
    "If any character is missing or has a count of zero when needed, return false",
    "If all characters are accounted for, return true",
    "Test with various inputs including anagrams with spaces and mixed case"
  ]
};

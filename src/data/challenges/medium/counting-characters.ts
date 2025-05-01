
import { Challenge } from '../types';

export const countingCharactersChallenge: Challenge = {
  id: "counting-characters",
  title: "Counting Characters",
  description: "Character counting is a fundamental skill in text processing.\n\nThe Problem\nWrite a function that counts the occurrences of each character in a string and returns an object where the keys are the characters and the values are their counts.\n\nIgnore spaces and treat uppercase and lowercase letters as the same character.",
  difficulty: "medium",
  solutions: {
    javascript: `function countCharacters(str) {
  // Convert to lowercase and remove spaces
  const cleanStr = str.toLowerCase().replace(/\\s/g, '');
  
  // Create an object to store the counts
  const counts = {};
  
  // Count each character
  for (const char of cleanStr) {
    counts[char] = (counts[char] || 0) + 1;
  }
  
  return counts;
}

// Example usage
console.log(countCharacters("Hello World"));
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }`,
    python: `def count_characters(s):
    # Convert to lowercase and remove spaces
    clean_str = s.lower().replace(" ", "")
    
    # Create a dictionary to store the counts
    counts = {}
    
    # Count each character
    for char in clean_str:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    
    return counts

# Example usage
print(count_characters("Hello World"))
# Output: {'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}`
  },
  example: `Input: "Hello World"
Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

Input: "Programming is fun"
Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 2, n: 2, s: 1, f: 1, u: 1, n: 1 }`,
  categories: ["Strings", "Hash Maps", "Counting"],
  createdAt: "2024-01-15",
  timeComplexity: "O(n) where n is the length of the string",
  explanation: "This solution iterates through each character in the input string, keeping track of counts in a hash map (object in JavaScript or dictionary in Python). It demonstrates basic character processing and the use of associative data structures.",
  hints: [
    "Consider using a hash map (object or dictionary) where keys are characters and values are counts",
    "Remember to handle uppercase and lowercase letters the same way",
    "You can use a loop to iterate through each character in the string",
    "For JavaScript, you might use the || operator for initializing counts",
    "For Python, you can use the .get() method or a conditional check"
  ],
  steps: [
    "Convert the input string to lowercase to treat uppercase and lowercase letters the same",
    "Remove all spaces from the string",
    "Create an empty object/dictionary to store character counts",
    "Iterate through each character in the cleaned string",
    "For each character, increment its count in the object/dictionary",
    "Return the object/dictionary containing character counts"
  ]
};

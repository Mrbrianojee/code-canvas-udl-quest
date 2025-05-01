
import { Challenge } from '../types';

export const longestSubstringChallenge: Challenge = {
  id: "longest-substring",
  title: "Longest Substring Without Repeating Characters",
  description: "Given a string, find the length of the longest substring without repeating characters.\n\nA substring is a contiguous sequence of characters within a string.",
  difficulty: "medium",
  solutions: {
    javascript: `function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();
  
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    
    // If the character is already in our current window, update the start pointer
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }
    
    // Update the character's position
    charMap.set(currentChar, end);
    
    // Update max length if current window is larger
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}`,
    python: `def length_of_longest_substring(s):
    max_length = 0
    start = 0
    char_map = {}
    
    for end, char in enumerate(s):
        # If the character is already in our current window, update the start pointer
        if char in char_map and char_map[char] >= start:
            start = char_map[char] + 1
        
        # Update the character's position
        char_map[char] = end
        
        # Update max length if current window is larger
        max_length = max(max_length, end - start + 1)
    
    return max_length`
  },
  example: `lengthOfLongestSubstring("abcabcbb");  // returns 3 (for "abc")
lengthOfLongestSubstring("bbbbb");    // returns 1 (for "b")
lengthOfLongestSubstring("pwwkew");   // returns 3 (for "wke")`,
  categories: ["Strings", "Sliding Window", "Hash Tables"],
  createdAt: "2023-04-19",
  timeComplexity: "O(n)",
  explanation: "This solution uses the sliding window technique with a hash map to track character positions.\n\nWe maintain two pointers, start and end, defining the current substring window. As we iterate through the string, we extend the window to the right.\n\nIf we encounter a character that's already in our window, we shrink the window from the left by moving the start pointer to just after the previous occurrence of the character.\n\nWe keep track of the maximum window size seen so far, which represents our answer.",
  hints: [
    "Use the sliding window technique with two pointers to maintain your current window of non-repeating characters.",
    "Keep track of the position of each character you've seen in a hash map.",
    "When you encounter a repeated character, move your left pointer to the position after the previous occurrence.",
    "Update the maximum length whenever you find a longer valid substring.",
    "Remember to handle edge cases like empty strings or strings with all identical characters."
  ]
};

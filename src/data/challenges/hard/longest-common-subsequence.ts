
import { Challenge } from '../types';

export const longestCommonSubsequenceChallenge: Challenge = {
  id: "longest-common-subsequence",
  title: "Longest Common Subsequence",
  description: "Given two strings, find the length of their longest common subsequence (LCS).\n\nA subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.\n\nA common subsequence of two sequences is a subsequence that is common to both of them.\n\nNotes:\n- Characters in a subsequence do not need to be consecutive in the original string.\n- The LCS problem has practical applications in file comparison, DNA analysis, and version control systems.",
  difficulty: "hard",
  solutions: {
    javascript: `function longestCommonSubsequence(text1, text2) {
  // Create a 2D dp array filled with zeros
  // dp[i][j] will represent the LCS length for text1[0...i-1] and text2[0...j-1]
  const dp = Array(text1.length + 1).fill().map(() => Array(text2.length + 1).fill(0));
  
  // Build the dp table
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // If current characters match, add 1 to the LCS of the strings without these characters
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If current characters don't match, take the maximum LCS found so far
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  // The bottom-right cell contains the length of LCS
  return dp[text1.length][text2.length];
}

// Example usage
console.log(longestCommonSubsequence("abcde", "ace"));  // Output: 3
console.log(longestCommonSubsequence("abc", "abc"));    // Output: 3
console.log(longestCommonSubsequence("abc", "def"));    // Output: 0`,
    python: `def longest_common_subsequence(text1, text2):
    # Create a 2D dp array filled with zeros
    # dp[i][j] will represent the LCS length for text1[0...i-1] and text2[0...j-1]
    dp = [[0 for _ in range(len(text2) + 1)] for _ in range(len(text1) + 1)]
    
    # Build the dp table
    for i in range(1, len(text1) + 1):
        for j in range(1, len(text2) + 1):
            if text1[i - 1] == text2[j - 1]:
                # If current characters match, add 1 to the LCS of the strings without these characters
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                # If current characters don't match, take the maximum LCS found so far
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    # The bottom-right cell contains the length of LCS
    return dp[len(text1)][len(text2)]

# Example usage
print(longest_common_subsequence("abcde", "ace"))  # Output: 3
print(longest_common_subsequence("abc", "abc"))    # Output: 3
print(longest_common_subsequence("abc", "def"))    # Output: 0`
  },
  example: `Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" with length 3.

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" with length 3.

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no common subsequence between the two strings.`,
  categories: ["Strings", "Dynamic Programming", "Algorithms"],
  createdAt: "2023-11-15",
  timeComplexity: "O(m*n) where m and n are the lengths of the two strings",
  explanation: "This problem is a classic introduction to dynamic programming. The idea is to build a table where each cell represents the length of the LCS for substrings of the two input strings. We can solve this efficiently by breaking down the problem into smaller subproblems and reusing their solutions.",
  hints: [
    "Think about how to break this problem into smaller subproblems.",
    "Consider using a 2D array where dp[i][j] represents the length of LCS for text1[0...i-1] and text2[0...j-1].",
    "If the current characters match, you can add 1 to the LCS of the strings without these characters.",
    "If the current characters don't match, take the maximum LCS found so far.",
    "The base case is when either string is empty, in which case the LCS is 0."
  ],
  steps: [
    "Create a 2D array dp where dp[i][j] will store the length of LCS for substrings text1[0...i-1] and text2[0...j-1].",
    "Initialize the first row and first column of dp to 0 (representing empty strings).",
    "Iterate through both strings character by character.",
    "If the current characters match, add 1 to the LCS length from the previous subproblem (diagonal cell).",
    "If the characters don't match, take the maximum LCS length found so far (from left or top cell).",
    "The value in the bottom-right cell of the dp table is the length of the LCS.",
    "To construct the actual LCS (not just its length), backtrack through the dp table."
  ]
};

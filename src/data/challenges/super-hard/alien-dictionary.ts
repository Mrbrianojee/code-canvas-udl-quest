
import { Challenge } from '../types';

export const alienDictionaryChallenge: Challenge = {
  id: "alien-dictionary",
  title: "Alien Dictionary",
  description: "There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.\n\nYou are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.\n\nReturn a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return an empty string.\n\nIf there are multiple solutions, return any of them.\n\nA string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.",
  difficulty: "super-hard",
  solutions: {
    javascript: `/**
 * @param {string[]} words
 * @return {string}
 */
function alienOrder(words) {
  // Step 1: Build the graph
  const graph = new Map();
  const inDegree = new Map();
  
  // Initialize with all unique characters
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
        inDegree.set(char, 0);
      }
    }
  }
  
  // Add edges based on adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    
    // Check if word2 is a prefix of word1 (invalid case)
    if (word1.length > word2.length && word1.startsWith(word2)) {
      return "";
    }
    
    // Find the first different character
    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      const char1 = word1[j];
      const char2 = word2[j];
      
      if (char1 !== char2) {
        // If this ordering hasn't been added yet
        if (!graph.get(char1).has(char2)) {
          graph.get(char1).add(char2);
          inDegree.set(char2, inDegree.get(char2) + 1);
        }
        break; // Only the first different character matters
      }
    }
  }
  
  // Step 2: Topological Sort using BFS
  const queue = [];
  const result = [];
  
  // Add all nodes with 0 in-degree to the queue
  for (const [char, degree] of inDegree) {
    if (degree === 0) {
      queue.push(char);
    }
  }
  
  while (queue.length > 0) {
    const char = queue.shift();
    result.push(char);
    
    // Reduce in-degree of adjacent nodes
    for (const neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      
      // If in-degree becomes 0, add to queue
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  // Check if there's a cycle (not all nodes processed)
  if (result.length !== inDegree.size) {
    return ""; // Cycle detected, no valid ordering
  }
  
  return result.join('');
}

// Test with example
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Expected output: "wertf"`,
    python: `class Solution:
    def alienOrder(self, words: list[str]) -> str:
        # Step 1: Build the graph
        graph = {c: set() for word in words for c in word}
        in_degree = {c: 0 for c in graph}
        
        # Find edges by comparing adjacent words
        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]
            
            # Check if word2 is a prefix of word1 (invalid case)
            if len(word1) > len(word2) and word1.startswith(word2):
                return ""
            
            # Find the first different character
            for j in range(min(len(word1), len(word2))):
                c1, c2 = word1[j], word2[j]
                if c1 != c2:
                    # If this ordering hasn't been added yet
                    if c2 not in graph[c1]:
                        graph[c1].add(c2)
                        in_degree[c2] += 1
                    break
        
        # Step 2: Topological Sort using BFS
        from collections import deque
        queue = deque([c for c in graph if in_degree[c] == 0])
        result = []
        
        while queue:
            c = queue.popleft()
            result.append(c)
            
            for neighbor in graph[c]:
                in_degree[neighbor] -= 1
                if in_degree[neighbor] == 0:
                    queue.append(neighbor)
        
        # Check if there's a cycle
        if len(result) != len(graph):
            return ""
        
        return ''.join(result)

# Test with example
solution = Solution()
words = ["wrt", "wrf", "er", "ett", "rftt"]
print(solution.alienOrder(words))  # Expected output: "wertf"`
  },
  example: `Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Input: words = ["z","x"]
Output: "zx"

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".`,
  explanation: "This problem requires constructing a directed graph representing the order of characters, then performing a topological sort. We compare adjacent words to determine character ordering rules. If we can't produce a valid ordering (due to a cycle or contradiction), we return an empty string.",
  categories: ["graph", "topological sort", "bfs"],
  timeComplexity: "O(C) where C is the total length of all words",
  createdAt: "2023-06-05",
  hints: [
    "The problem can be modeled as finding a topological sort of a directed graph",
    "Compare adjacent words to determine the relative order of characters",
    "Use BFS for topological sort by tracking the in-degree of each node",
    "Watch out for invalid cases like when a longer word is a prefix of a shorter word"
  ]
};

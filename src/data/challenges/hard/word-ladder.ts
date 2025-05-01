
import { Challenge } from '../types';

export const wordLadderChallenge: Challenge = {
  id: "word-ladder",
  title: "Word Ladder",
  description: "A word ladder is a sequence of words where each word differs from the previous by exactly one letter.\n\nThe Problem\nGiven two words (beginWord and endWord) and a dictionary of valid words, find the shortest transformation sequence from beginWord to endWord such that:\n1. Only one letter can be changed at a time.\n2. Each transformed word must exist in the dictionary.\n\nReturn the length of the shortest transformation sequence, or 0 if no such sequence exists.\n\nNote: This challenge uses a Breadth-First Search (BFS) approach - see the explainer below if you're not familiar with this algorithm.",
  difficulty: "hard",
  solutions: {
    javascript: `function ladderLength(beginWord, endWord, wordList) {
  // Convert wordList to Set for O(1) lookups
  const wordSet = new Set(wordList);
  
  // Return 0 if endWord is not in wordList
  if (!wordSet.has(endWord)) return 0;
  
  // Initialize queue for BFS
  let queue = [{ word: beginWord, level: 1 }];
  // Track visited words
  let visited = new Set([beginWord]);
  
  while (queue.length > 0) {
    const { word, level } = queue.shift();
    
    // Try changing each character of word
    for (let i = 0; i < word.length; i++) {
      // Try all possible characters
      for (let char = 97; char <= 122; char++) { // ASCII: a-z
        const newChar = String.fromCharCode(char);
        const newWord = word.slice(0, i) + newChar + word.slice(i + 1);
        
        // Found the end word
        if (newWord === endWord) return level + 1;
        
        // If new word is valid and not visited
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push({ word: newWord, level: level + 1 });
        }
      }
    }
  }
  
  // No transformation sequence found
  return 0;
}

// Example usage
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList)); // 5`,
    python: `from collections import deque

def ladder_length(begin_word, end_word, word_list):
    # Convert word_list to set for O(1) lookups
    word_set = set(word_list)
    
    # Return 0 if end_word is not in word_list
    if end_word not in word_set:
        return 0
    
    # Initialize queue for BFS
    queue = deque([(begin_word, 1)])
    # Track visited words
    visited = {begin_word}
    
    while queue:
        word, level = queue.popleft()
        
        # Try changing each character of word
        for i in range(len(word)):
            # Try all possible characters
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i+1:]
                
                # Found the end word
                if new_word == end_word:
                    return level + 1
                
                # If new word is valid and not visited
                if new_word in word_set and new_word not in visited:
                    visited.add(new_word)
                    queue.append((new_word, level + 1))
    
    # No transformation sequence found
    return 0

# Example usage
begin_word = "hit"
end_word = "cog"
word_list = ["hot", "dot", "dog", "lot", "log", "cog"]
print(ladder_length(begin_word, end_word, word_list))  # 5`
  },
  example: `Input:
beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

Output: 5

Explanation: The shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which has length 5.`,
  categories: ["Graphs", "BFS", "String Manipulation", "Algorithms"],
  createdAt: "2023-10-15",
  timeComplexity: "O(M²N), where M is the length of each word and N is the total number of words in the word list",
  explanation: "This problem is solved using Breadth-First Search (BFS) to find the shortest path. We treat each word as a node in a graph, and there is an edge between two words if they differ by exactly one letter. The BFS algorithm guarantees finding the shortest path from the starting word to the target word.",
  hints: [
    "Think of this problem as finding the shortest path in a graph",
    "Use Breadth-First Search (BFS) to find the shortest path",
    "Define what constitutes an 'edge' between two words",
    "Optimize word comparison by trying all possible character changes rather than comparing with all words",
    "Use a set to keep track of visited words to avoid cycles",
    "Consider edge cases like when the end word is not in the word list",
    "Remember to count the number of transformations, not the number of words"
  ],
  steps: [
    "Check if the endWord is in the wordList. If not, return 0",
    "Initialize a queue for BFS with the beginWord and level 1",
    "Initialize a set to track visited words",
    "For each word in the queue, try changing each character to all possible letters",
    "If the new word is in the wordList and hasn't been visited, add it to the queue",
    "If the new word equals the endWord, return the current level + 1",
    "If the queue is empty and endWord wasn't found, return 0",
    "Optimize by using character-by-character comparison instead of comparing with every word"
  ]
};

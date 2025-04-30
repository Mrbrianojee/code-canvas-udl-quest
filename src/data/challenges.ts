export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  solutions: {
    [language: string]: string;
  };
  example?: string;
  explanation?: string;
  categories: string[];
  timeComplexity?: string;
  createdAt: string;
  hints?: string[];
}

export const challenges: Challenge[] = [
  {
    id: "hello-world",
    title: "Hello World Variations",
    description: "Write a function that prints 'Hello, World!' to the console in different programming languages.\n\nThis is a classic starting point for learning a new programming language.",
    difficulty: "easy",
    solutions: {
      javascript: `// JavaScript
function helloWorld() {
  console.log("Hello, World!");
}`,
      python: `# Python 
def hello_world():
    print("Hello, World!")

# Python (one-liner)
print("Hello, World!")`
    },
    categories: ["Fundamentals", "Syntax"],
    createdAt: "2023-04-15",
    example: `helloWorld(); // Output: Hello, World!`,
    explanation: "This challenge introduces syntax differences between programming languages.\n\nEach language has its own way of defining functions and printing to the console, but they all accomplish the same task.",
    hints: [
      "Remember that in JavaScript, you can use console.log() to print to the console.",
      "Function declarations in JavaScript start with the 'function' keyword.",
      "Don't forget to add parentheses after your function name!"
    ]
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "Write a function that prints numbers from 1 to n. For multiples of 3, print 'Fizz' instead of the number. For multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.\n\nThis is a classic coding interview question that tests your understanding of conditional logic and loops.",
    difficulty: "easy",
    solutions: {
      javascript: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}`,
      python: `def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`
    },
    example: `fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz`,
    categories: ["Conditionals", "Loops"],
    createdAt: "2023-04-16",
    timeComplexity: "O(n)",
    explanation: "The solution iterates through numbers 1 to n, checking each number against our conditions.\n\nWe check for multiples of both 3 and 5 first (FizzBuzz), then for multiples of 3 (Fizz), then for multiples of 5 (Buzz). If none of these conditions are met, we print the number itself."
  },
  {
    id: "palindrome",
    title: "Palindrome Checker",
    description: "Write a function that checks if a given string is a palindrome.\n\nA palindrome is a string that reads the same backward as forward, ignoring case, punctuation, and spaces.",
    difficulty: "easy",
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
    categories: ["Strings", "Algorithms"],
    createdAt: "2023-04-17",
    example: `isPalindrome("racecar");  // returns true
isPalindrome("hello");    // returns false
isPalindrome("A man, a plan, a canal: Panama");  // returns true`,
    timeComplexity: "O(n)",
    explanation: "This solution first cleans the input string by removing non-alphanumeric characters and converting to lowercase.\n\nThen, we check if the cleaned string is equal to its reverse. If it is, the string is a palindrome."
  },
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Given an array of integers and a target sum, return the indices of the two numbers such that they add up to the target.\n\nAssume each input would have exactly one solution, and you cannot use the same element twice.",
    difficulty: "medium",
    solutions: {
      javascript: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null; // No solution found
}`,
      python: `def two_sum(nums, target):
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in num_map:
            return [num_map[complement], i]
            
        num_map[num] = i
    
    return None  # No solution found`
    },
    example: `twoSum([2, 7, 11, 15], 9);  // returns [0, 1]
twoSum([3, 2, 4], 6);      // returns [1, 2]`,
    categories: ["Arrays", "Hash Tables"],
    createdAt: "2023-04-18",
    timeComplexity: "O(n)",
    explanation: "This solution uses a hash map to store each number and its index as we iterate through the array.\n\nFor each number, we calculate its complement (the value needed to reach the target sum). If the complement exists in our map, we've found our pair and return their indices.\n\nThis approach is more efficient than a naive nested loop solution, which would be O(n²)."
  },
  {
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
    explanation: "This solution uses the sliding window technique with a hash map to track character positions.\n\nWe maintain two pointers, start and end, defining the current substring window. As we iterate through the string, we extend the window to the right.\n\nIf we encounter a character that's already in our window, we shrink the window from the left by moving the start pointer to just after the previous occurrence of the character.\n\nWe keep track of the maximum window size seen so far, which represents our answer."
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\nIntervals are considered to overlap if they share at least one common point.",
    difficulty: "medium",
    solutions: {
      javascript: `function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = result[result.length - 1];
    
    // If current interval overlaps with the last merged interval, merge them
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // Add the current interval to the result
      result.push(currentInterval);
    }
  }
  
  return result;
}`,
      python: `def merge_intervals(intervals):
    if len(intervals) <= 1:
        return intervals
    
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])
    
    result = [intervals[0]]
    
    for i in range(1, len(intervals)):
        current_interval = intervals[i]
        last_merged_interval = result[-1]
        
        # If current interval overlaps with the last merged interval, merge them
        if current_interval[0] <= last_merged_interval[1]:
            last_merged_interval[1] = max(last_merged_interval[1], current_interval[1])
        else:
            # Add the current interval to the result
            result.append(current_interval)
    
    return result`
    },
    example: `mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);  // returns [[1,6],[8,10],[15,18]]
mergeIntervals([[1,4],[4,5]]);            // returns [[1,5]]`,
    categories: ["Arrays", "Sorting"],
    createdAt: "2023-04-20",
    timeComplexity: "O(n log n)",
    explanation: "The approach is to first sort the intervals by their start times. This ensures that overlapping intervals are adjacent in the sorted array.\n\nWe then iterate through the sorted intervals. For each interval, we check if it overlaps with the last interval in our result array. If it does, we merge them by updating the end time of the last interval. If not, we add the current interval to the result array.\n\nThe time complexity is O(n log n) due to the sorting operation."
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    description: "Design and implement a data structure for a Least Recently Used (LRU) cache. It should support operations get and put.\n\nget(key) - Get the value of the key if the key exists in the cache, otherwise return -1.\nput(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.",
    difficulty: "hard",
    solutions: {
      javascript: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    // Get the value
    const value = this.cache.get(key);
    
    // Remove the key and re-insert it to mark it as most recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  put(key, value) {
    // Remove the key if it already exists to update its position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove the least recently used item (first item in Map)
    else if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
    
    // Add the key-value pair
    this.cache.set(key, value);
  }
}`,
      python: `class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.order = []  # To track order of usage
    
    def get(self, key):
        if key not in self.cache:
            return -1
        
        # Mark as recently used by moving to the end
        self.order.remove(key)
        self.order.append(key)
        
        return self.cache[key]
    
    def put(self, key, value):
        # If key exists, remove it first
        if key in self.cache:
            self.order.remove(key)
        # If at capacity, remove the least recently used item
        elif len(self.cache) >= self.capacity:
            lru_key = self.order.pop(0)  # Remove from front (least recently used)
            del self.cache[lru_key]
        
        # Add the new key-value pair
        self.cache[key] = value
        self.order.append(key)  # Add to end (most recently used)`
    },
    example: `const cache = new LRUCache(2);
cache.put(1, 1);        // cache is {1=1}
cache.put(2, 2);        // cache is {1=1, 2=2}
cache.get(1);           // returns 1
cache.put(3, 3);        // cache is {1=1, 3=3}, evicts key 2
cache.get(2);           // returns -1 (not found)
cache.put(4, 4);        // cache is {3=3, 4=4}, evicts key 1
cache.get(1);           // returns -1 (not found)
cache.get(3);           // returns 3
cache.get(4);           // returns 4`,
    categories: ["Data Structures", "Design", "Hash Tables"],
    createdAt: "2023-04-21",
    timeComplexity: "O(1) for both get and put operations",
    explanation: "This solution uses JavaScript's Map object (or a combination of dict and list in Python) to implement the LRU functionality.\n\nThe key insight is that we can use the Map's built-in order to implement the LRU functionality. When we access or insert an item, we delete it and re-add it to make it the most recently used.\n\nWhen we need to evict an item, we remove the first item in the Map (or list in Python), which is the least recently used item."
  },
  {
    id: "word-search",
    title: "Word Search",
    description: "Given a 2D board of characters and a word, find if the word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    difficulty: "hard",
    solutions: {
      javascript: `function exist(board, word) {
  if (!board.length || !board[0].length) return false;
  
  const rows = board.length;
  const cols = board[0].length;
  
  // DFS to check if current position leads to the word
  function dfs(row, col, index) {
    // Base case: if index equals word length, we found the word
    if (index === word.length) return true;
    
    // Out of bounds or current cell doesn't match
    if (
      row < 0 || 
      col < 0 || 
      row >= rows || 
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }
    
    // Mark as visited by changing the character temporarily
    const temp = board[row][col];
    board[row][col] = '#';
    
    // Check all four adjacent cells
    const found = 
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);
    
    // Restore the cell
    board[row][col] = temp;
    
    return found;
  }
  
  // Start DFS from each cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  
  return false;
}`,
      python: `def exist(board, word):
    if not board or not board[0]:
        return False
    
    rows, cols = len(board), len(board[0])
    
    # DFS to check if current position leads to the word
    def dfs(row, col, index):
        # Base case: if index equals word length, we found the word
        if index == len(word):
            return True
        
        # Out of bounds or current cell doesn't match
        if (row < 0 or col < 0 or 
            row >= rows or col >= cols or 
            board[row][col] != word[index]):
            return False
        
        # Mark as visited by changing the character temporarily
        temp = board[row][col]
        board[row][col] = '#'
        
        # Check all four adjacent cells
        found = (dfs(row + 1, col, index + 1) or
                dfs(row - 1, col, index + 1) or
                dfs(row, col + 1, index + 1) or
                dfs(row, col - 1, index + 1))
        
        # Restore the cell
        board[row][col] = temp
        
        return found
    
    # Start DFS from each cell
    for row in range(rows):
        for col in range(cols):
            if dfs(row, col, 0):
                return True
    
    return False`
    },
    example: `const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

exist(board, "ABCCED");  // returns true
exist(board, "SEE");     // returns true
exist(board, "ABCB");    // returns false`,
    categories: ["DFS", "Backtracking", "Matrix"],
    createdAt: "2023-04-22",
    timeComplexity: "O(N * 4^L) where N is the number of cells and L is the length of the word",
    explanation: "This solution uses a depth-first search (DFS) with backtracking to find the word in the grid.\n\nFor each cell in the grid, we start a DFS to check if it can form the word. In the DFS, we try all four directions (up, down, left, right) and mark visited cells to avoid revisiting them.\n\nIf any of the searches is successful, we've found the word. Otherwise, we return false."
  }
];

export const getChallengeById = (id: string): Challenge | undefined => {
  return challenges.find((challenge) => challenge.id === id);
};

export const getChallengesByDifficulty = (difficulty?: string): Challenge[] => {
  if (!difficulty) return challenges;
  return challenges.filter((challenge) => challenge.difficulty === difficulty);
};

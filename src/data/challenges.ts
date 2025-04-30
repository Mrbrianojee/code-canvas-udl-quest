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
    explanation: "The solution iterates through numbers 1 to n, checking each number against our conditions.\n\nWe check for multiples of both 3 and 5 first (FizzBuzz), then for multiples of 3 (Fizz), then for multiples of 5 (Buzz). If none of these conditions are met, we print the number itself.",
    hints: [
      "Start by creating a loop that counts from 1 to n.",
      "Use the modulo operator (%) to check if a number is divisible by 3 or 5.",
      "Remember to check for numbers that are multiples of both 3 and 5 first.",
      "The order of your conditional checks matters!"
    ]
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
    explanation: "This solution first cleans the input string by removing non-alphanumeric characters and converting to lowercase.\n\nThen, we check if the cleaned string is equal to its reverse. If it is, the string is a palindrome.",
    hints: [
      "Start by cleaning the input string - remove spaces, punctuation, and convert all characters to lowercase.",
      "In JavaScript, you can use regular expressions to remove unwanted characters.",
      "The reverse of a string can be obtained by: 1) splitting it into an array of characters, 2) reversing the array, and 3) joining it back.",
      "Compare the cleaned string with its reverse to determine if it's a palindrome."
    ]
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
    explanation: "This solution uses a hash map to store each number and its index as we iterate through the array.\n\nFor each number, we calculate its complement (the value needed to reach the target sum). If the complement exists in our map, we've found our pair and return their indices.\n\nThis approach is more efficient than a naive nested loop solution, which would be O(n²).",
    hints: [
      "A naive approach would be to use two nested loops to check every pair of numbers, but this is inefficient (O(n²)).",
      "Instead, use a hash map (object in JavaScript) to store numbers you've seen and their indices.",
      "For each number, calculate what value you need to add to it to reach the target (complement = target - current number).",
      "Check if that complement is already in your hash map. If it is, you've found your pair!"
    ]
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
    explanation: "This solution uses the sliding window technique with a hash map to track character positions.\n\nWe maintain two pointers, start and end, defining the current substring window. As we iterate through the string, we extend the window to the right.\n\nIf we encounter a character that's already in our window, we shrink the window from the left by moving the start pointer to just after the previous occurrence of the character.\n\nWe keep track of the maximum window size seen so far, which represents our answer.",
    hints: [
      "Use the sliding window technique with two pointers to maintain your current window of non-repeating characters.",
      "Keep track of the position of each character you've seen in a hash map.",
      "When you encounter a repeated character, move your left pointer to the position after the previous occurrence.",
      "Update the maximum length whenever you find a longer valid substring.",
      "Remember to handle edge cases like empty strings or strings with all identical characters."
    ]
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
    explanation: "The approach is to first sort the intervals by their start times. This ensures that overlapping intervals are adjacent in the sorted array.\n\nWe then iterate through the sorted intervals. For each interval, we check if it overlaps with the last interval in our result array. If it does, we merge them by updating the end time of the last interval. If not, we add the current interval to the result array.\n\nThe time complexity is O(n log n) due to the sorting operation.",
    hints: [
      "Start by sorting the intervals based on their start times. This makes it easier to identify overlaps.",
      "After sorting, compare each interval with the last one added to your result array.",
      "Two intervals [a, b] and [c, d] overlap if c <= b (assuming a < b and c < d).",
      "When merging overlapping intervals, the new interval becomes [min(a, c), max(b, d)], but since we've sorted by start time, it's just [a, max(b, d)].",
      "If there's no overlap, simply add the current interval to your result."
    ]
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
    explanation: "This solution uses JavaScript's Map object (or a combination of dict and list in Python) to implement the LRU functionality.\n\nThe key insight is that we can use the Map's built-in order to implement the LRU functionality. When we access or insert an item, we delete it and re-add it to make it the most recently used.\n\nWhen we need to evict an item, we remove the first item in the Map (or list in Python), which is the least recently used item.",
    hints: [
      "In JavaScript, use a Map object to maintain insertion order of keys, which helps implement LRU behavior.",
      "For the get operation, after retrieving a value, you need to mark it as recently used by removing and re-adding it.",
      "For the put operation, first check if the key already exists. If it does, update it and mark it as recently used.",
      "If the key doesn't exist and the cache is at capacity, remove the least recently used item (first item in your Map).",
      "The JavaScript Map preserves insertion order, making the first item the oldest and the last item the most recent."
    ]
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
    explanation: "This solution uses a depth-first search (DFS) with backtracking to find the word in the grid.\n\nFor each cell in the grid, we start a DFS to check if it can form the word. In the DFS, we try all four directions (up, down, left, right) and mark visited cells to avoid revisiting them.\n\nIf any of the searches is successful, we've found the word. Otherwise, we return false.",
    hints: [
      "Use a depth-first search (DFS) approach with backtracking to explore all possible paths.",
      "Start the search from each cell in the grid that matches the first character of the word.",
      "During DFS, mark visited cells temporarily (e.g., change them to a special character) to avoid using the same cell twice.",
      "Explore in all four directions (up, down, left, right) from each cell.",
      "Remember to restore the original cell value after exploring all paths from that cell.",
      "The time complexity can be high (exponential), as you might need to explore many paths."
    ]
  },
  {
    id: "reverse-string",
    title: "Reverse a String",
    description: "Write a function that takes a string as input and returns the string reversed.\n\nThis is a basic string manipulation exercise to get you comfortable with string operations.",
    difficulty: "easy",
    solutions: {
      javascript: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative approach
function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
      python: `def reverse_string(s):
    return s[::-1]
    
# Alternative approach using loop
def reverse_string_loop(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str`
    },
    categories: ["Strings", "Algorithms"],
    createdAt: "2023-05-01",
    example: `reverseString("hello");  // returns "olleh"
reverseString("world");  // returns "dlrow"`,
    explanation: "There are multiple ways to reverse a string. The most concise method in JavaScript uses the built-in methods: split to convert the string to an array, reverse to reverse the array, and join to combine the array back into a string.\n\nThe alternative solution demonstrates how to reverse a string using a loop, which might be more appropriate in languages without built-in reverse functionality.",
    hints: [
      "In JavaScript, strings don't have a built-in reverse method, but arrays do.",
      "You can split a string into an array of characters, reverse that array, and then join it back together.",
      "If you want to avoid using built-in methods, you can iterate through the string in reverse order and build the new string.",
      "Think about edge cases: empty strings, strings with a single character, or strings with special characters."
    ]
  },
  
  {
    id: "anagram-checker",
    title: "Anagram Checker",
    description: "Write a function that checks if two strings are anagrams of each other.\n\nAn anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    difficulty: "easy",
    solutions: {
      javascript: `function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
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
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
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
    ]
  },
  
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    difficulty: "medium",
    solutions: {
      javascript: `function isValid(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (const char of s) {
    if (brackets[char]) {
      // If it's an opening bracket, push corresponding closing to stack
      stack.push(brackets[char]);
    } else {
      // It's a closing bracket
      // Pop from stack and check if it matches current char
      const lastBracket = stack.pop();
      if (char !== lastBracket) {
        return false;
      }
    }
  }
  
  // Stack should be empty if all brackets were matched
  return stack.length === 0;
}`,
      python: `def is_valid(s):
    stack = []
    brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    for char in s:
        if char in brackets:
            # If it's an opening bracket, push corresponding closing to stack
            stack.append(brackets[char])
        else:
            # It's a closing bracket
            # Pop from stack and check if it matches current char
            if not stack or stack.pop() != char:
                return False
    
    # Stack should be empty if all brackets were matched
    return len(stack) == 0`
    },
    categories: ["Strings", "Stack", "Data Structures"],
    createdAt: "2023-05-03",
    example: `isValid("()");        // returns true
isValid("()[]{}");    // returns true
isValid("(]");

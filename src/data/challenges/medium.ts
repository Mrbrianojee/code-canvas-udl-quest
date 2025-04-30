import { Challenge } from "./types";

export const mediumChallenges: Challenge[] = [
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
isValid("(]");        // returns false`,
    timeComplexity: "O(n)",
    explanation: "This solution uses a stack data structure to keep track of opening brackets.\n\nFor each character in the string, if it's an opening bracket, we push its corresponding closing bracket onto the stack. If it's a closing bracket, we check if it matches the top of our stack. If it doesn't match or the stack is empty, the string is invalid.\n\nAfter processing all characters, the stack should be empty if the string is valid.",
    hints: [
      "Use a stack data structure to keep track of opening brackets.",
      "When you encounter an opening bracket, push the corresponding closing bracket onto the stack.",
      "When you encounter a closing bracket, check if it matches the top of the stack.",
      "If the stack is empty at the end, the string is valid.",
      "Consider edge cases like an empty string or a string with only one bracket."
    ]
  },
  {
    id: "rotate-array",
    title: "Rotate Array",
    description: "Given an array, rotate the array to the right by k steps, where k is non-negative.\n\nCan you come up with an algorithm that uses O(1) extra space?",
    difficulty: "medium",
    solutions: {
      javascript: `function rotate(nums, k) {
  // Handle edge cases
  if (!nums || nums.length <= 1) {
    return;
  }
  
  // Normalize k to handle cases where k > nums.length
  k = k % nums.length;
  
  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);
  
  // Reverse first k elements
  reverse(nums, 0, k - 1);
  
  // Reverse remaining elements
  reverse(nums, k, nums.length - 1);
  
  // Helper function to reverse a section of the array
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  // This function modifies nums in-place, no return value needed
}`,
      python: `def rotate(nums, k):
    # Handle edge cases
    if not nums or len(nums) <= 1:
        return
    
    # Normalize k to handle cases where k > len(nums)
    k = k % len(nums)
    
    # Reverse the entire array
    reverse(nums, 0, len(nums) - 1)
    
    # Reverse first k elements
    reverse(nums, 0, k - 1)
    
    # Reverse remaining elements
    reverse(nums, k, len(nums) - 1)
    
def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1`
    },
    example: `const nums = [1,2,3,4,5,6,7];
rotate(nums, 3);  // nums becomes [5,6,7,1,2,3,4]

const nums2 = [-1,-100,3,99];
rotate(nums2, 2); // nums2 becomes [3,99,-1,-100]`,
    categories: ["Arrays", "Mathematics"],
    createdAt: "2023-07-05",
    timeComplexity: "O(n)",
    explanation: "This solution uses a clever approach to rotate an array in-place using constant space.\n\nThe key insight is that we can use array reversal operations to achieve rotation:\n\n1. Reverse the entire array.\n2. Reverse the first k elements.\n3. Reverse the remaining elements.\n\nFor example, with [1,2,3,4,5,6,7] and k=3:\n- After first reverse: [7,6,5,4,3,2,1]\n- After second reverse (first k=3 elements): [5,6,7,4,3,2,1]\n- After third reverse (remaining elements): [5,6,7,1,2,3,4]",
    hints: [
      "A naive approach would be to rotate the array one step at a time, k times. However, this is inefficient for large k.",
      "You can also create a new array and place each element in its rotated position, but this uses O(n) extra space.",
      "For an O(1) space solution, consider using array reversal operations.",
      "The triple reversal approach works because it effectively moves the last k elements to the front while maintaining relative order.",
      "Don't forget to handle the case where k > length of the array by using modulo."
    ]
  }
];

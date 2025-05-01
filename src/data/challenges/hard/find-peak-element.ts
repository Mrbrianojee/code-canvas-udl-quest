
import { Challenge } from '../types';

export const findPeakElementChallenge: Challenge = {
  id: "find-peak-element",
  title: "Find Peak Element",
  description: "A peak element is an element that is strictly greater than its neighbors.\n\nThe Problem\nGiven an array of integers, find a peak element and return its index. If the array contains multiple peaks, return the index of any peak element.\n\nYou may imagine that nums[-1] = nums[n] = -∞ (that is, elements at the boundaries are always considered smaller than any element within the array).\n\nYour solution should run in O(log n) time complexity to be optimal, though a linear solution is also acceptable for this challenge.",
  difficulty: "hard",
  solutions: {
    javascript: `function findPeakElement(nums) {
  // Edge cases
  if (nums.length === 1) return 0;
  
  // Check first element
  if (nums[0] > nums[1]) return 0;
  
  // Check last element
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  
  // Binary search approach
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] > nums[mid + 1]) {
      // We are in a decreasing sequence, look in the left half
      right = mid;
    } else {
      // We are in an increasing sequence, look in the right half
      left = mid + 1;
    }
  }
  
  return left;
}

// Example usage
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5`,
    python: `def find_peak_element(nums):
    # Edge cases
    if len(nums) == 1:
        return 0
    
    # Check first element
    if nums[0] > nums[1]:
        return 0
    
    # Check last element
    if nums[-1] > nums[-2]:
        return len(nums) - 1
    
    # Binary search approach
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        if nums[mid] > nums[mid + 1]:
            # We are in a decreasing sequence, look in the left half
            right = mid
        else:
            # We are in an increasing sequence, look in the right half
            left = mid + 1
    
    return left

# Example usage
print(find_peak_element([1, 2, 3, 1]))  # Output: 2
print(find_peak_element([1, 2, 1, 3, 5, 6, 4]))  # Output: 5 or 6`
  },
  example: `Input: nums = [1, 2, 3, 1]
Output: 2
Explanation: 3 is a peak element and your function should return the index 2.

Input: nums = [1, 2, 1, 3, 5, 6, 4]
Output: 5 or 6
Explanation: Your function can return either index 5 where the value is 6, or index 6 where the value is 4. Both are peak elements.`,
  categories: ["Arrays", "Binary Search", "Algorithms"],
  createdAt: "2023-11-10",
  timeComplexity: "O(log n) for binary search approach, O(n) for linear scan",
  explanation: "This challenge introduces the concept of binary search on a non-sorted array. The key insight is understanding that in a continuous hill-like landscape, if you're on an upward slope, a peak must be ahead of you, and if you're on a downward slope, a peak must be behind you.",
  hints: [
    "Think about how to eliminate half of the array in each step.",
    "If nums[i] > nums[i+1], then a peak element must exist on the left side including i.",
    "If nums[i] < nums[i+1], then a peak element must exist on the right side.",
    "Consider the edge cases where the array has only one or two elements.",
    "Don't forget to check if the first or last elements are peaks."
  ],
  steps: [
    "Handle edge cases where the array has only one element.",
    "Check if the first element is a peak (greater than the second element).",
    "Check if the last element is a peak (greater than the second-to-last element).",
    "Use binary search to find a peak in the rest of the array.",
    "At each step, compare the middle element with its neighbor to determine which half to search.",
    "Continue until you find a peak element."
  ]
};

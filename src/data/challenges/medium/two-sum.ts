
import { Challenge } from '../types';

export const twoSumChallenge: Challenge = {
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
};

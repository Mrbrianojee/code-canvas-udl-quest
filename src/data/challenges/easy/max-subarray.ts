
import { Challenge } from '../types';

export const maxSubArrayChallenge: Challenge = {
  id: "max-subarray",
  title: "Maximum Subarray",
  description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\n\nA subarray is a contiguous part of an array.",
  difficulty: "easy",
  solutions: {
    javascript: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Either start a new subarray or continue the current one
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum if we found a better subarray
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}`,
    python: `def max_sub_array(nums):
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        # Either start a new subarray or continue the current one
        current_sum = max(nums[i], current_sum + nums[i])
        # Update the maximum sum if we found a better subarray
        max_sum = max(max_sum, current_sum)
    
    return max_sum`
  },
  categories: ["Arrays", "Dynamic Programming"],
  createdAt: "2023-06-10",
  example: `maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);  // returns 6 (subarray [4,-1,2,1])
maxSubArray([1]);                  // returns 1
maxSubArray([5,4,-1,7,8]);         // returns 23 (subarray [5,4,-1,7,8])`,
  timeComplexity: "O(n)",
  explanation: "This solution uses Kadane's algorithm, a dynamic programming approach for finding the maximum sum subarray.\n\nAt each step, we decide whether to start a new subarray beginning at the current element or extend the existing subarray by including the current element. We keep track of the maximum sum seen so far.\n\nThis approach only requires a single pass through the array with O(1) extra space.",
  hints: [
    "You can solve this with brute force by checking all possible subarrays, but that's inefficient.",
    "Think about the problem in terms of the maximum subarray ending at each position.",
    "At each position, you have two choices: start a new subarray at the current element, or extend the previous subarray.",
    "Use Kadane's algorithm: keep track of the current sum and the maximum sum seen so far.",
    "Remember to handle edge cases like all negative numbers or an array with only one element."
  ]
};

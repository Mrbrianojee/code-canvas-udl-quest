
import { Challenge } from '../types';

export const rotateArrayChallenge: Challenge = {
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
};


import { Challenge } from '../types';

export const slidingWindowMaximumChallenge: Challenge = {
  id: "sliding-window-maximum",
  title: "Sliding Window Maximum",
  description: "Finding the maximum elements in sliding windows is a classic algorithmic problem.\n\nThe Problem\nGiven an array of integers nums, and an integer k, there is a sliding window of size k which moves from the left of the array to the right. You can only see the k numbers in the window. Each time the sliding window moves right by one position, return the maximum element in the window.\n\nReturn an array of the maximum elements for each window position.",
  difficulty: "hard",
  solutions: {
    javascript: `function maxSlidingWindow(nums, k) {
  // Edge case: empty array or k <= 0
  if (nums.length === 0 || k <= 0) return [];
  
  // Edge case: window size is 1 (each element is its own maximum)
  if (k === 1) return nums;
  
  const result = [];
  const deque = []; // Store indices of potential maximum elements
  
  for (let i = 0; i < nums.length; i++) {
    // Remove elements outside the current window from the front
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    
    // Remove smaller elements from the back (they cannot be maxima)
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    
    // Add current element's index to the deque
    deque.push(i);
    
    // Start collecting maxima once we've seen k elements
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  
  return result;
}

// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // [3, 3, 5, 5, 6, 7]`,
    python: `from collections import deque

def max_sliding_window(nums, k):
    # Edge case: empty array or k <= 0
    if not nums or k <= 0:
        return []
    
    # Edge case: window size is 1 (each element is its own maximum)
    if k == 1:
        return nums
    
    result = []
    deq = deque()  # Store indices of potential maximum elements
    
    for i in range(len(nums)):
        # Remove elements outside the current window from the front
        if deq and deq[0] <= i - k:
            deq.popleft()
        
        # Remove smaller elements from the back (they cannot be maxima)
        while deq and nums[deq[-1]] < nums[i]:
            deq.pop()
        
        # Add current element's index to the deque
        deq.append(i)
        
        # Start collecting maxima once we've seen k elements
        if i >= k - 1:
            result.append(nums[deq[0]])
    
    return result

# Example usage
nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
print(max_sliding_window(nums, k))  # [3, 3, 5, 5, 6, 7]`
  },
  example: `Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
Output: [3, 3, 5, 5, 6, 7]

Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
 1 [3  -1  -3] 5  3  6  7      3
 1  3 [-1  -3  5] 3  6  7      5
 1  3  -1 [-3  5  3] 6  7      5
 1  3  -1  -3 [5  3  6] 7      6
 1  3  -1  -3  5 [3  6  7]     7`,
  categories: ["Arrays", "Sliding Window", "Data Structures", "Deque", "Algorithms"],
  createdAt: "2023-10-18",
  timeComplexity: "O(n), where n is the number of elements in the array",
  explanation: "This problem requires efficient computation of maximums in sliding windows. A naive approach would be to find the maximum for each window, which would be O(nk). However, using a deque (double-ended queue) data structure allows us to solve it in O(n) time by maintaining potential maximums in the deque and removing elements that cannot be maximums.",
  hints: [
    "Consider using a data structure that allows efficient operations at both ends",
    "Maintain a deque (double-ended queue) of indices of elements in the current window",
    "Remove indices of elements outside the current window",
    "Remove indices of smaller elements from the back of the deque, as they cannot be maximums",
    "The front of the deque will always contain the index of the maximum element in the current window",
    "Process the array from left to right, and add maximums to the result once you've seen k elements",
    "Handle edge cases like empty arrays or window size k=1"
  ],
  steps: [
    "Create a deque to store indices of potential maximum elements in the current window",
    "Iterate through the array from left to right",
    "For each position, remove elements from the front of the deque that are outside the current window",
    "Remove elements from the back of the deque that are smaller than the current element",
    "Add the current element's index to the back of the deque",
    "Once you've seen k elements, start adding the maximum (front of deque) to the result array",
    "Return the final result array containing the maximum for each window position"
  ]
};


import { Challenge } from '../types';

export const missingNumberChallenge: Challenge = {
  id: "missing-number",
  title: "Find Missing Number in Array",
  description: "Finding a missing number in a list is a good brain teaser.\n\nThe Problem\nYou have an unsorted list from 1 to 100, but one number is missing. Find it.",
  difficulty: "medium",
  solutions: {
    javascript: `function missingNum(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // Check for a gap in the sequence
    if (arr[i+1] - arr[i] != 1) {
      return arr[i] + 1; 
    }
  }

  // If no gap found, the missing number might be at the beginning or end
  return arr.length === 0 ? 1 : arr[arr.length - 1] + 1;
}

// Example usage
let array = [2, 5, 1, 4, 9, 6, 3, 7, 10, 8];
let result = missingNum(array);
console.log(result); // 11`,
    python: `def missing_num(arr):
  # Sort the array in ascending order
  arr.sort()
  
  for i in range(len(arr)-1):
    # Check for a gap in the sequence
    if arr[i+1] - arr[i] != 1:
      return arr[i] + 1
  
  # If no gap found, the missing number might be at the beginning or end
  return 1 if len(arr) == 0 else arr[-1] + 1

# Example usage
array = [2, 5, 1, 4, 9, 6, 3, 7, 10, 8]
result = missing_num(array)
print(result)  # 11`
  },
  example: `Input: [2, 5, 1, 4, 9, 6, 3, 7, 10, 8]
Missing number: 11`,
  categories: ["Arrays", "Sorting", "Algorithms"],
  createdAt: "2023-08-12",
  timeComplexity: "O(n log n)",
  explanation: "This challenge tests your ability to work with arrays and identify patterns. The solution sorts the array first (with O(n log n) time complexity) and then iterates through it once to find where the sequence breaks.",
  hints: [
    "First, sort the array to make it easier to find the missing number",
    "After sorting, look for where the sequence breaks",
    "Check if the difference between consecutive numbers is greater than 1",
    "Don't forget to handle edge cases (like the missing number being at the beginning or end)",
    "Consider if there are more efficient solutions than sorting (e.g., using a sum formula)"
  ],
  steps: [
    "Sort the array in ascending order",
    "Iterate through the sorted array",
    "For each element, check if the next element is exactly one more than the current",
    "If you find a gap where the difference is greater than 1, you've found where the missing number should be",
    "Return the current number plus 1 as the missing number",
    "Handle edge cases like an empty array or the missing number being at the end"
  ]
};

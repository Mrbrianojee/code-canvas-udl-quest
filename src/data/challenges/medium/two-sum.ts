
import { Challenge } from '../types';

export const twoSumChallenge: Challenge = {
  id: "two-sum",
  title: "Two Sum Problem",
  description: "The Two Sum problem is a classic. It's great for working on your problem-solving skills.\n\nThe Problem\nYou have a list of numbers and a target sum. Find two numbers that add up to the target and return their positions.",
  difficulty: "medium",
  solutions: {
    javascript: `function twoSum(arr, target) {

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (arr.includes(diff) && arr.indexOf(diff) != i) {
      return [i, arr.indexOf(diff)];
    } 
  }

}

let result = twoSum([2, 5, 7, 9], 11); 
console.log(result); // [0, 2]`,
    python: `def two_sum(arr, target):

  for i in range(len(arr)):
    diff = target - arr[i] 
    if diff in arr and arr.index(diff) != i:
      return [i, arr.index(diff)]

print(two_sum([2,5,7,9], 11)) # [0, 2]`
  },
  example: `array: [2, 5, 7, 9]
target: 11  

output: [0, 2] 

# Because array[0] + array[2] equals 11`,
  categories: ["Arrays", "Algorithms", "Searching"],
  createdAt: "2023-04-18",
  timeComplexity: "O(n²)",
  explanation: "This problem tests your ability to search through an array efficiently. The naive solution checks each number against every other number (O(n²)), but more efficient solutions exist using hash maps (O(n)).",
  hints: [
    "Try using a data structure that allows for quick lookups.",
    "For each number, you only need to check if its complement (target - number) exists in the array.",
    "Consider using a hash map to store numbers you've already seen."
  ],
  steps: [
    "Go through the list.",
    "For each number, figure out what you need to add to it to get the target.",
    "See if that number is also in the list.",
    "If yes, return their positions."
  ]
};

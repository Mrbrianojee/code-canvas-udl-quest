
import { Challenge } from '../types';

export const arrayRotationChallenge: Challenge = {
  id: "array-rotation",
  title: "Array Rotation",
  description: "This challenge is about moving numbers around in a list. It's useful for rearranging data.\n\nYou have a list of numbers. You need to move the numbers to the right by a certain amount. The user will tell you how many times.",
  difficulty: "medium",
  solutions: {
    javascript: `function rotateArray(arr, shifts) {
  let rotated = [...arr];
  
  for (let i = 0; i < shifts; i++) {
    rotated.push(rotated.shift()); 
  }

  return rotated;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]`,
    python: `def rotate_array(arr, shifts):
  rotated = arr[:]
  
  for _ in range(shifts):
    rotated.append(rotated.pop(0))

  return rotated

print(rotate_array([1,2,3,4,5], 2)) # [4, 5, 1, 2, 3]`
  },
  example: `Input list: [1, 2, 3, 4, 5]  
Shifts: 2

Output list: [4, 5, 1, 2, 3]`,
  categories: ["Arrays", "Algorithms"],
  createdAt: "2023-07-15",
  timeComplexity: "O(n*k) where n is the array length and k is the number of shifts",
  explanation: "This solution involves repeatedly taking the first element of the array and moving it to the end, k times. While simple to understand, this approach has a time complexity of O(n*k) because each shift operation takes O(n) time and we perform k shifts.\n\nFor large arrays or many shifts, there are more efficient approaches using array slicing or modular arithmetic that can achieve O(n) time complexity.",
  hints: [
    "Think about what happens when the number of shifts is larger than the array length",
    "There's a mathematical relationship between the original position and new position after rotation",
    "Consider using the modulus operator to handle large numbers of shifts efficiently",
    "Array slicing can be used to implement rotation in a single operation rather than repeated shifts",
    "For very large arrays, in-place rotation algorithms can save memory"
  ],
  steps: [
    "Understand the input: an array and number of positions to rotate right",
    "Handle edge cases: empty array, array with one element, or shifts equal to zero",
    "Normalize the shifts if they exceed the array length using modulo",
    "Copy the original array to avoid modifying it directly",
    "Implement the rotation by repeatedly moving elements from the front to the back",
    "Alternatively, use array slicing to achieve the rotation in one step",
    "Return the rotated array",
    "Test with various inputs including different array sizes and rotation amounts"
  ]
};

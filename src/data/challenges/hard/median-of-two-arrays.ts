
import { Challenge } from "../types";

export const medianOfTwoArraysChallenge: Challenge = {
  id: "median-of-two-arrays",
  title: "Median of Two Sorted Arrays",
  description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log(m+n)).",
  difficulty: "hard",
  solutions: {
    javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Make sure nums1 is the shorter array for simplicity
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  
  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  const halfLength = Math.floor((totalLength + 1) / 2);
  
  // Binary search on the shorter array
  let left = 0;
  let right = m;
  
  while (left <= right) {
    const midX = Math.floor((left + right) / 2);
    const midY = halfLength - midX;
    
    // Get the four values around the potential partition
    const maxX = midX === 0 ? -Infinity : nums1[midX - 1];
    const minX = midX === m ? Infinity : nums1[midX];
    const maxY = midY === 0 ? -Infinity : nums2[midY - 1];
    const minY = midY === n ? Infinity : nums2[midY];
    
    // Found the partition
    if (maxX <= minY && maxY <= minX) {
      // Even length: average of max(maxX, maxY) and min(minX, minY)
      if (totalLength % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } 
      // Odd length: max of left half
      else {
        return Math.max(maxX, maxY);
      }
    } 
    // Need to move the partition
    else if (maxX > minY) {
      right = midX - 1;
    } else {
      left = midX + 1;
    }
  }
  
  return 0; // Should never reach here if arrays are sorted
}`,
    python: `def find_median_sorted_arrays(nums1, nums2):
    # Make sure nums1 is the shorter array for simplicity
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    total_length = m + n
    half_length = (total_length + 1) // 2
    
    # Binary search on the shorter array
    left, right = 0, m
    
    while left <= right:
        mid_x = (left + right) // 2
        mid_y = half_length - mid_x
        
        # Get the four values around the potential partition
        max_x = float('-inf') if mid_x == 0 else nums1[mid_x - 1]
        min_x = float('inf') if mid_x == m else nums1[mid_x]
        max_y = float('-inf') if mid_y == 0 else nums2[mid_y - 1]
        min_y = float('inf') if mid_y == n else nums2[mid_y]
        
        # Found the partition
        if max_x <= min_y and max_y <= min_x:
            # Even length: average of max(max_x, max_y) and min(min_x, min_y)
            if total_length % 2 == 0:
                return (max(max_x, max_y) + min(min_x, min_y)) / 2
            # Odd length: max of left half
            else:
                return max(max_x, max_y)
        # Need to move the partition
        elif max_x > min_y:
            right = mid_x - 1
        else:
            left = mid_x + 1
    
    return 0  # Should never reach here if arrays are sorted`
  },
  example: `findMedianSortedArrays([1, 3], [2]);          // returns 2.0
findMedianSortedArrays([1, 2], [3, 4]);        // returns 2.5
findMedianSortedArrays([0, 0], [0, 0]);        // returns 0.0
findMedianSortedArrays([], [1]);               // returns 1.0`,
  categories: ["Binary Search", "Arrays", "Divide and Conquer"],
  createdAt: "2023-08-15",
  timeComplexity: "O(log(min(m,n)))",
  explanation: "This problem requires finding the median of two sorted arrays efficiently.\n\nA naive approach would merge the two arrays and find the median, but this would be O(m+n) time complexity.\n\nInstead, we use binary search on the shorter array to find the correct partition point. The key insight is that we can partition both arrays into left and right halves such that:\n\n1. The number of elements in the left half equals the number of elements in the right half (or differs by 1 for odd total length).\n2. Every element in the left half is smaller than every element in the right half.\n\nOnce we find this partition, the median is either the max of the left half (for odd total length) or the average of the max of the left half and the min of the right half (for even total length).",
  hints: [
    "Think about what the median represents: it divides a sorted array into two equal halves.",
    "For two sorted arrays, you need to find a partition point in both arrays such that all elements to the left are smaller than all elements to the right.",
    "Use binary search on the smaller array to find this partition efficiently.",
    "Check that max(left half of array1) <= min(right half of array2) and max(left half of array2) <= min(right half of array1).",
    "Handle edge cases like empty arrays or arrays of different lengths carefully.",
    "The time complexity can be O(log(min(m,n))) by always binary searching on the smaller array."
  ]
};

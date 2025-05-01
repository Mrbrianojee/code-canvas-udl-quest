
import { Challenge } from "../types";

export const trappingRainWaterChallenge: Challenge = {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nWater is trapped between bars when there are higher bars on both sides.",
  difficulty: "hard",
  solutions: {
    javascript: `function trap(height) {
  if (!height || height.length < 3) {
    return 0;
  }
  
  const n = height.length;
  let totalWater = 0;
  
  // Two pointer approach
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      // Water trapped at current left position depends on leftMax
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      // Water trapped at current right position depends on rightMax
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }
  
  return totalWater;
}`,
    python: `def trap(height):
    if not height or len(height) < 3:
        return 0
    
    n = len(height)
    total_water = 0
    
    # Two pointer approach
    left, right = 0, n - 1
    left_max = right_max = 0
    
    while left < right:
        if height[left] < height[right]:
            # Water trapped at current left position depends on left_max
            if height[left] >= left_max:
                left_max = height[left]
            else:
                total_water += left_max - height[left]
            left += 1
        else:
            # Water trapped at current right position depends on right_max
            if height[right] >= right_max:
                right_max = height[right]
            else:
                total_water += right_max - height[right]
            right -= 1
    
    return total_water`
  },
  example: `trap([0,1,0,2,1,0,1,3,2,1,2,1]);  // returns 6
trap([4,2,0,3,2,5]);           // returns 9`,
  categories: ["Arrays", "Two Pointers", "Dynamic Programming"],
  createdAt: "2023-09-10",
  timeComplexity: "O(n)",
  explanation: "This solution uses a two-pointer approach to efficiently calculate trapped water.\n\nWe maintain two pointers (left and right) starting from the ends of the array, and track the maximum heights seen from both sides (leftMax and rightMax).\n\nAt each step, we process the shorter bar first. If the current bar is taller than the maximum seen so far from that side, we update the maximum. Otherwise, we can trap water at that position (the difference between the maximum and the current height).\n\nThis approach works because the amount of water trapped at any position depends on the minimum of the maximum heights on both sides.",
  hints: [
    "For any position i, the water trapped depends on the min(max height to the left, max height to the right) minus the height at position i.",
    "You can use a brute force approach by calculating left and right max for each position, but it's inefficient.",
    "Instead, use a two-pointer approach that processes the array from both ends.",
    "Always process the side with the smaller barrier first, because that's what determines how much water can be trapped.",
    "Keep track of the maximum height seen so far from both sides as you traverse the array."
  ]
};

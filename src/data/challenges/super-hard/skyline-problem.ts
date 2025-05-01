
import { Challenge } from '../types';

export const skylineProblemChallenge: Challenge = {
  id: "skyline-problem",
  title: "The Skyline Problem",
  description: "A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.\n\nThe geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:\n\n- lefti is the x coordinate of the left edge of the ith building.\n- righti is the x coordinate of the right edge of the ith building.\n- heighti is the height of the ith building.\n\nYou may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.\n\nThe skyline should be represented as a list of \"key points\" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline. Specifically, the last point in the skyline may not be the right endpoint of the last building. Note that the ground in between any two adjacent buildings should be considered part of the skyline contour.\n\nNote: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]",
  difficulty: "super-hard",
  solutions: {
    javascript: `/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
function getSkyline(buildings) {
  // Edge case
  if (buildings.length === 0) return [];
  
  // Extract all possible x-coordinates (start and end of buildings)
  const points = [];
  for (const [left, right, height] of buildings) {
    // Use negative height for start point to ensure starts are processed before ends
    points.push([left, -height]);
    points.push([right, height]);
  }
  
  // Sort points by x-coordinate
  points.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    // If x-coordinates are the same, process by height:
    // 1. Process building starts (negative heights) before ends (positive heights)
    // 2. For starts, process higher buildings first (more negative)
    // 3. For ends, process lower buildings first (less positive)
    return a[1] - b[1];
  });
  
  const result = [];
  const heights = [0]; // Use a max heap to track current heights (initialize with ground level 0)
  let prevMaxHeight = 0;
  
  for (const [x, h] of points) {
    if (h < 0) {
      // Building start - add height to the heap
      heights.push(-h);
    } else {
      // Building end - remove height from the heap
      const index = heights.indexOf(h);
      if (index !== -1) {
        heights.splice(index, 1);
      }
    }
    
    // Find current max height
    const currentMaxHeight = Math.max(...heights);
    
    // If max height changed, add key point to result
    if (currentMaxHeight !== prevMaxHeight) {
      result.push([x, currentMaxHeight]);
      prevMaxHeight = currentMaxHeight;
    }
  }
  
  return result;
}

// Test with example
const buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]];
console.log(getSkyline(buildings));
// Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]`,
    python: `class Solution:
    def getSkyline(self, buildings: list[list[int]]) -> list[list[int]]:
        # Extract all possible x-coordinates and their height changes
        points = []
        for left, right, height in buildings:
            # Use negative height for start points to ensure they're processed before end points
            points.append((left, -height))
            points.append((right, height))
        
        # Sort points by x-coordinate, then by height
        points.sort(key=lambda x: (x[0], x[1]))
        
        # Initialize result and a max heap to track heights
        result = []
        import heapq
        heights = [0]  # Use negative values for max heap simulation in Python
        prev_max_height = 0
        
        for x, h in points:
            if h < 0:  # Start of building
                # Add height to max heap (use negative for max heap)
                heapq.heappush(heights, h)
            else:  # End of building
                # Remove the corresponding start height
                heights.remove(-h)
                heapq.heapify(heights)
            
            # Check if max height changed
            curr_max_height = -heights[0]
            if curr_max_height != prev_max_height:
                result.append([x, curr_max_height])
                prev_max_height = curr_max_height
        
        return result

# Test with example
solution = Solution()
buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
print(solution.getSkyline(buildings))
# Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]`
  },
  example: `Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]

Explanation:
The buildings are represented as [left, right, height].
The output skyline is a list of key points [x, height].`,
  explanation: "This problem requires multiple techniques including sorting, height tracking, and careful processing of building start and end points. We first convert buildings into height change events at specific x-coordinates. Then we process these events from left to right, maintaining a max heap of current heights. Whenever the maximum height changes, we add a key point to the result.",
  categories: ["algorithms", "heap", "sweep line", "divide and conquer"],
  timeComplexity: "O(n log n)",
  createdAt: "2023-05-01",
  hints: [
    "Convert buildings to a list of start and end events with their heights",
    "Sort these events by x-coordinate and process from left to right",
    "Use a max heap to keep track of the current heights at any point",
    "Add a skyline point whenever the maximum height changes"
  ],
  steps: [
    "Create a function that takes an array of buildings (each containing left edge, right edge, and height)",
    "Handle edge cases such as an empty buildings array",
    "Convert each building into two events: a 'start event' at the left edge and an 'end event' at the right edge",
    "For start events, use negative height to ensure they're processed before end events at the same x-coordinate",
    "Sort all events by their x-coordinate (and by height if x-coordinates are equal)",
    "Initialize a data structure (typically a max heap) to track current heights, starting with ground level 0",
    "Process events from left to right:",
    "For start events, add the height to the height tracker",
    "For end events, remove the corresponding height from the tracker",
    "After each event, check if the maximum height has changed",
    "If the maximum height changed, add a key point to the result",
    "Return the final list of key points that represent the skyline",
    "Test with the example input to verify the output matches the expected skyline"
  ]
};

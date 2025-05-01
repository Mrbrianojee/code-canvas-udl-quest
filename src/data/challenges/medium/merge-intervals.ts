
import { Challenge } from '../types';

export const mergeIntervalsChallenge: Challenge = {
  id: "merge-intervals",
  title: "Merge Intervals",
  description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.\n\nIntervals are considered to overlap if they share at least one common point.",
  difficulty: "medium",
  solutions: {
    javascript: `function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = result[result.length - 1];
    
    // If current interval overlaps with the last merged interval, merge them
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // Add the current interval to the result
      result.push(currentInterval);
    }
  }
  
  return result;
}`,
    python: `def merge_intervals(intervals):
    if len(intervals) <= 1:
        return intervals
    
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])
    
    result = [intervals[0]]
    
    for i in range(1, len(intervals)):
        current_interval = intervals[i]
        last_merged_interval = result[-1]
        
        # If current interval overlaps with the last merged interval, merge them
        if current_interval[0] <= last_merged_interval[1]:
            last_merged_interval[1] = max(last_merged_interval[1], current_interval[1])
        else:
            # Add the current interval to the result
            result.append(current_interval)
    
    return result`
  },
  example: `mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);  // returns [[1,6],[8,10],[15,18]]
mergeIntervals([[1,4],[4,5]]);            // returns [[1,5]]`,
  categories: ["Arrays", "Sorting"],
  createdAt: "2023-04-20",
  timeComplexity: "O(n log n)",
  explanation: "The approach is to first sort the intervals by their start times. This ensures that overlapping intervals are adjacent in the sorted array.\n\nWe then iterate through the sorted intervals. For each interval, we check if it overlaps with the last interval in our result array. If it does, we merge them by updating the end time of the last interval. If not, we add the current interval to the result array.\n\nThe time complexity is O(n log n) due to the sorting operation.",
  hints: [
    "Start by sorting the intervals based on their start times. This makes it easier to identify overlaps.",
    "After sorting, compare each interval with the last one added to your result array.",
    "Two intervals [a, b] and [c, d] overlap if c <= b (assuming a < b and c < d).",
    "When merging overlapping intervals, the new interval becomes [min(a, c), max(b, d)], but since we've sorted by start time, it's just [a, max(b, d)].",
    "If there's no overlap, simply add the current interval to your result."
  ],
  steps: [
    "Create a function that takes an array of intervals (where each interval is [start, end])",
    "Handle edge cases: if there are 0 or 1 intervals, return them as is",
    "Sort the intervals by their start times in ascending order",
    "Initialize the result array with the first interval",
    "Iterate through the remaining intervals starting from the second interval",
    "For each interval, check if it overlaps with the last interval in the result array",
    "Two intervals [a, b] and [c, d] overlap if c <= b",
    "If they overlap, merge them by updating the end time of the last interval to max(b, d)",
    "If they don't overlap, add the current interval to the result array",
    "After processing all intervals, return the result array",
    "Test with examples like [[1,3],[2,6],[8,10],[15,18]] and [[1,4],[4,5]]"
  ]
};


import { lruCacheChallenge } from './lru-cache';
import { wordSearchChallenge } from './word-search';
import { trappingRainWaterChallenge } from './trapping-rain-water';
import { medianOfTwoArraysChallenge } from './median-of-two-arrays';
import { wordLadderChallenge } from './word-ladder';
import { slidingWindowMaximumChallenge } from './sliding-window-maximum';
import { findPeakElementChallenge } from './find-peak-element';
import { longestCommonSubsequenceChallenge } from './longest-common-subsequence';
import { Challenge } from '../types';

// Export all hard challenges as an array
export const hardChallenges: Challenge[] = [
  lruCacheChallenge,
  wordSearchChallenge,
  trappingRainWaterChallenge,
  medianOfTwoArraysChallenge,
  wordLadderChallenge,
  slidingWindowMaximumChallenge,
  findPeakElementChallenge,
  longestCommonSubsequenceChallenge
];

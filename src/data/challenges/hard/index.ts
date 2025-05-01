
import { lruCacheChallenge } from './lru-cache';
import { wordSearchChallenge } from './word-search';
import { trappingRainWaterChallenge } from './trapping-rain-water';
import { medianOfTwoArraysChallenge } from './median-of-two-arrays';
import { wordLadderChallenge } from './word-ladder';
import { Challenge } from '../types';

// Export all hard challenges as an array
export const hardChallenges: Challenge[] = [
  lruCacheChallenge,
  wordSearchChallenge,
  trappingRainWaterChallenge,
  medianOfTwoArraysChallenge,
  wordLadderChallenge
];

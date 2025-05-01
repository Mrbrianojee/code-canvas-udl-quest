
import { helloWorldChallenge } from './hello-world';
import { fizzBuzzChallenge } from './fizzbuzz';
import { reverseStringChallenge } from './reverse-string';
import { anagramChallenge } from './anagram';
import { sumChallenge } from './sum-of-two-numbers';
import { factorialChallenge } from './factorial';
import { countVowelsChallenge } from './count-vowels';
import { maxSubArrayChallenge } from './max-subarray';
import { convertMinutesChallenge } from './convert-minutes-seconds';
import { palindromeChallenge } from './palindrome';
import { Challenge } from '../types';

// Export all easy challenges as an array
export const easyChallenges: Challenge[] = [
  helloWorldChallenge,
  fizzBuzzChallenge,
  reverseStringChallenge,
  anagramChallenge,
  sumChallenge,
  factorialChallenge,
  countVowelsChallenge,
  maxSubArrayChallenge,
  convertMinutesChallenge,
  palindromeChallenge
];

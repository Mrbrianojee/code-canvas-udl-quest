
import { Challenge } from '../types';

export const integerToRomanChallenge: Challenge = {
  id: "integer-to-roman",
  title: "Integer to Roman Numeral Converter",
  description: "Changing numbers into Roman numerals is a fun string challenge.\n\nThe Problem\nTurn a whole number into a Roman numeral.",
  difficulty: "medium",
  solutions: {
    javascript: `function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  let roman = '';
  let i = 0;
  
  while (num > 0) {
    if (values[i] <= num) {
      num -= values[i];
      roman += numerals[i];
    } else {
      i++;
    }
  }
  
  return roman;
}

console.log(intToRoman(5)); // V
console.log(intToRoman(39)); // XXXIX
console.log(intToRoman(1999)); // MCMXCIX`,
    python: `def int_to_roman(num):
    
  values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]  
  numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  
  roman = ''
  i = 0
  
  while num > 0:
    if values[i] <= num:
      num -= values[i]  
      roman += numerals[i]
    else:
      i += 1

  return roman

print(int_to_roman(5)) # V 
print(int_to_roman(39)) # XXXIX
print(int_to_roman(1999)) # MCMXCIX`
  },
  example: `5 -> V
39 -> XXXIX
1999 -> MCMXCIX

Understanding Roman Numerals
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000`,
  categories: ["Strings", "Algorithms", "Mathematics"],
  createdAt: "2023-05-15",
  timeComplexity: "O(1)",
  explanation: "This problem tests your ability to convert between number systems and work with string manipulation. The key insight is understanding the pattern of Roman numerals and handling the special subtraction cases (like IV for 4).",
  hints: [
    "Break down the problem by value ranges, starting with the largest Roman numeral.",
    "Remember that some numbers use subtraction notation (like IV for 4, not IIII).",
    "Consider using a greedy approach, always using the largest possible numeral first."
  ],
  steps: [
    "Split the number into thousands, hundreds, tens, and ones.",
    "Change each part into Roman symbols.",
    "Follow subtraction rules (like 4 is IV, not IIII).",
    "Combine all symbols in order from largest to smallest."
  ]
};

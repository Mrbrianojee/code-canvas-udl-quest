
import { Challenge } from "./types";

export const easyChallenges: Challenge[] = [
  {
    id: "hello-world",
    title: "Hello World Variations",
    description: "Write a function that prints 'Hello, World!' to the console in different programming languages.\n\nThis is a classic starting point for learning a new programming language.",
    difficulty: "easy",
    solutions: {
      javascript: `// JavaScript
function helloWorld() {
  console.log("Hello, World!");
}`,
      python: `# Python 
def hello_world():
    print("Hello, World!")

# Python (one-liner)
print("Hello, World!")`
    },
    categories: ["Fundamentals", "Syntax"],
    createdAt: "2023-04-15",
    example: `helloWorld(); // Output: Hello, World!`,
    explanation: "This challenge introduces syntax differences between programming languages.\n\nEach language has its own way of defining functions and printing to the console, but they all accomplish the same task.",
    hints: [
      "Remember that in JavaScript, you can use console.log() to print to the console.",
      "Function declarations in JavaScript start with the 'function' keyword.",
      "Don't forget to add parentheses after your function name!"
    ]
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "Write a function that prints numbers from 1 to n. For multiples of 3, print 'Fizz' instead of the number. For multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.\n\nThis is a classic coding interview question that tests your understanding of conditional logic and loops.",
    difficulty: "easy",
    solutions: {
      javascript: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}`,
      python: `def fizzbuzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)`
    },
    example: `fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz`,
    categories: ["Conditionals", "Loops"],
    createdAt: "2023-04-16",
    timeComplexity: "O(n)",
    explanation: "The solution iterates through numbers 1 to n, checking each number against our conditions.\n\nWe check for multiples of both 3 and 5 first (FizzBuzz), then for multiples of 3 (Fizz), then for multiples of 5 (Buzz). If none of these conditions are met, we print the number itself.",
    hints: [
      "Start by creating a loop that counts from 1 to n.",
      "Use the modulo operator (%) to check if a number is divisible by 3 or 5.",
      "Remember to check for numbers that are multiples of both 3 and 5 first.",
      "The order of your conditional checks matters!"
    ]
  },
  {
    id: "palindrome",
    title: "Palindrome Checker",
    description: "Write a function that checks if a given string is a palindrome.\n\nA palindrome is a string that reads the same backward as forward, ignoring case, punctuation, and spaces.",
    difficulty: "easy",
    solutions: {
      javascript: `function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}`,
      python: `def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    import re
    clean_str = re.sub(r'[^a-z0-9]', '', s.lower())
    
    # Compare the string with its reverse
    return clean_str == clean_str[::-1]`
    },
    categories: ["Strings", "Algorithms"],
    createdAt: "2023-04-17",
    example: `isPalindrome("racecar");  // returns true
isPalindrome("hello");    // returns false
isPalindrome("A man, a plan, a canal: Panama");  // returns true`,
    timeComplexity: "O(n)",
    explanation: "This solution first cleans the input string by removing non-alphanumeric characters and converting to lowercase.\n\nThen, we check if the cleaned string is equal to its reverse. If it is, the string is a palindrome.",
    hints: [
      "Start by cleaning the input string - remove spaces, punctuation, and convert all characters to lowercase.",
      "In JavaScript, you can use regular expressions to remove unwanted characters.",
      "The reverse of a string can be obtained by: 1) splitting it into an array of characters, 2) reversing the array, and 3) joining it back.",
      "Compare the cleaned string with its reverse to determine if it's a palindrome."
    ]
  },
  {
    id: "reverse-string",
    title: "Reverse a String",
    description: "Write a function that takes a string as input and returns the string reversed.\n\nThis is a basic string manipulation exercise to get you comfortable with string operations.",
    difficulty: "easy",
    solutions: {
      javascript: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative approach
function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
      python: `def reverse_string(s):
    return s[::-1]
    
# Alternative approach using loop
def reverse_string_loop(s):
    reversed_str = ""
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str`
    },
    categories: ["Strings", "Algorithms"],
    createdAt: "2023-05-01",
    example: `reverseString("hello");  // returns "olleh"
reverseString("world");  // returns "dlrow"`,
    explanation: "There are multiple ways to reverse a string. The most concise method in JavaScript uses the built-in methods: split to convert the string to an array, reverse to reverse the array, and join to combine the array back into a string.\n\nThe alternative solution demonstrates how to reverse a string using a loop, which might be more appropriate in languages without built-in reverse functionality.",
    hints: [
      "In JavaScript, strings don't have a built-in reverse method, but arrays do.",
      "You can split a string into an array of characters, reverse that array, and then join it back together.",
      "If you want to avoid using built-in methods, you can iterate through the string in reverse order and build the new string.",
      "Think about edge cases: empty strings, strings with a single character, or strings with special characters."
    ]
  },
  {
    id: "anagram-checker",
    title: "Anagram Checker",
    description: "Write a function that checks if two strings are anagrams of each other.\n\nAn anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.",
    difficulty: "easy",
    solutions: {
      javascript: `function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\\s/g, '').toLowerCase();
  
  // Check if lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  
  // Sort and compare
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// Alternative using character frequency
function areAnagramsFrequency(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\\s/g, '').toLowerCase();
  
  // Check if lengths are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }
  
  const charCount = {};
  
  // Count characters in first string
  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Decrement counts for second string
  for (const char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}`,
      python: `def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase
    clean_str1 = str1.replace(" ", "").lower()
    clean_str2 = str2.replace(" ", "").lower()
    
    # Check if lengths are different
    if len(clean_str1) != len(clean_str2):
        return False
    
    # Sort and compare
    return sorted(clean_str1) == sorted(clean_str2)

# Alternative using character frequency
def are_anagrams_frequency(str1, str2):
    # Remove spaces and convert to lowercase
    clean_str1 = str1.replace(" ", "").lower()
    clean_str2 = str2.replace(" ", "").lower()
    
    # Check if lengths are different
    if len(clean_str1) != len(clean_str2):
        return False
    
    char_count = {}
    
    # Count characters in first string
    for char in clean_str1:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    
    # Decrement counts for second string
    for char in clean_str2:
        if char not in char_count or char_count[char] == 0:
            return False
        char_count[char] -= 1
    
    return True`
    },
    categories: ["Strings", "Hash Tables"],
    createdAt: "2023-05-02",
    example: `areAnagrams("listen", "silent");  // returns true
areAnagrams("hello", "world");    // returns false
areAnagrams("rail safety", "fairy tales");  // returns true`,
    timeComplexity: "O(n log n) for sorting, O(n) for frequency approach",
    explanation: "There are two common approaches for checking anagrams. The first is to sort both strings and compare them - if they're anagrams, they'll be identical after sorting.\n\nThe second approach uses a hash table (object in JavaScript) to count character frequencies in the first string, then decrements these counts as it iterates through the second string. If at any point a character isn't found or its count is zero, the strings aren't anagrams.",
    hints: [
      "Start by normalizing the strings - remove spaces and convert both to lowercase.",
      "A quick check: if the strings have different lengths after normalization, they can't be anagrams.",
      "You can sort both strings and compare them character by character.",
      "Another approach is to count the frequency of each character in both strings and compare the counts.",
      "Remember to handle special cases like spaces and case sensitivity according to your requirements."
    ]
  }
];


import { Challenge } from '../types';

export const validParenthesesChallenge: Challenge = {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
  difficulty: "medium",
  solutions: {
    javascript: `function isValid(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (const char of s) {
    if (brackets[char]) {
      // If it's an opening bracket, push corresponding closing to stack
      stack.push(brackets[char]);
    } else {
      // It's a closing bracket
      // Pop from stack and check if it matches current char
      const lastBracket = stack.pop();
      if (char !== lastBracket) {
        return false;
      }
    }
  }
  
  // Stack should be empty if all brackets were matched
  return stack.length === 0;
}`,
    python: `def is_valid(s):
    stack = []
    brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    for char in s:
        if char in brackets:
            # If it's an opening bracket, push corresponding closing to stack
            stack.append(brackets[char])
        else:
            # It's a closing bracket
            # Pop from stack and check if it matches current char
            if not stack or stack.pop() != char:
                return False
    
    # Stack should be empty if all brackets were matched
    return len(stack) == 0`
  },
  categories: ["Strings", "Stack", "Data Structures"],
  createdAt: "2023-05-03",
  example: `isValid("()");        // returns true
isValid("()[]{}");    // returns true
isValid("(]");        // returns false`,
  timeComplexity: "O(n)",
  explanation: "This solution uses a stack data structure to keep track of opening brackets.\n\nFor each character in the string, if it's an opening bracket, we push its corresponding closing bracket onto the stack. If it's a closing bracket, we check if it matches the top of our stack. If it doesn't match or the stack is empty, the string is invalid.\n\nAfter processing all characters, the stack should be empty if the string is valid.",
  hints: [
    "Use a stack data structure to keep track of opening brackets.",
    "When you encounter an opening bracket, push the corresponding closing bracket onto the stack.",
    "When you encounter a closing bracket, check if it matches the top of the stack.",
    "If the stack is empty at the end, the string is valid.",
    "Consider edge cases like an empty string or a string with only one bracket."
  ],
  steps: [
    "Create a function that takes a string containing brackets",
    "Initialize an empty stack (array) to keep track of opening brackets",
    "Create a mapping from opening brackets to their corresponding closing brackets",
    "Iterate through each character in the input string",
    "If the character is an opening bracket, push its corresponding closing bracket onto the stack",
    "If the character is a closing bracket, pop the top element from the stack",
    "Compare the popped element with the current character - they should match",
    "If they don't match or if the stack was empty when trying to pop, return false",
    "After processing all characters, check if the stack is empty",
    "Return true if the stack is empty (all brackets were properly matched), false otherwise",
    "Test with different combinations of valid and invalid bracket sequences"
  ]
};

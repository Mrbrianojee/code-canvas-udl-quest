
import { Challenge } from '../types';

export const validateEmailChallenge: Challenge = {
  id: "validate-email",
  title: "Validating Email Addresses",
  description: "Checking if an email address is valid is a useful skill.\n\nThe Problem\nMake sure an email address follows these rules:\n- Has one @ symbol\n- The part before @ doesn't start or end with . or -\n- The part after @ ends in .com, .net, or .org\nIf it does, say 'Valid'. If not, say 'Invalid'.",
  difficulty: "medium",
  solutions: {
    javascript: `function validateEmail(email) {
  // Check if there's exactly one @ symbol
  let parts = email.split("@");
  if (parts.length !== 2) return "Invalid";

  // Check if the local part has valid format
  if (parts[0].startsWith(".") || 
      parts[0].startsWith("-") ||
      parts[0].endsWith(".") ||
      parts[0].endsWith("-") ||
      parts[0].length < 1) {
    return "Invalid"; 
  }

  // Check domain part
  let domain = parts[1];
  if (domain.length < 3 ||
      !domain.endsWith(".com") && 
      !domain.endsWith(".net") &&
      !domain.endsWith(".org")) {
    return "Invalid";
  }

  return "Valid";
}

console.log(validateEmail("test@example.com")); // Valid
console.log(validateEmail("test@example.c")); // Invalid
console.log(validateEmail("-test@example.com")); // Invalid`,
    python: `def validate_email(email):
    # Check if there's exactly one @ symbol
    if email.count('@') != 1:
        return "Invalid"
        
    parts = email.split('@')
    
    # Check if the local part has valid format
    local_part = parts[0]
    if (local_part.startswith('.') or 
        local_part.startswith('-') or
        local_part.endswith('.') or
        local_part.endswith('-') or
        len(local_part) < 1):
        return "Invalid"
    
    # Check domain part
    domain = parts[1]
    if (len(domain) < 3 or
        not domain.endswith('.com') and
        not domain.endswith('.net') and
        not domain.endswith('.org')):
        return "Invalid"
    
    return "Valid"

print(validate_email("test@example.com")) # Valid
print(validate_email("test@example.c")) # Invalid
print(validate_email("-test@example.com")) # Invalid`
  },
  example: `"test@example.com" -> "Valid"
"test@example.c" -> "Invalid"
"-test@example.com" -> "Invalid"`,
  categories: ["Strings", "Validation", "Regular Expressions"],
  createdAt: "2023-06-12",
  timeComplexity: "O(n)",
  explanation: "This challenge tests your ability to validate input strings using specified rules. The solution involves string manipulation, checking for specific conditions, and understanding common validation patterns used in real-world applications.",
  hints: [
    "Split the email address by the @ symbol to separate local and domain parts.",
    "Check for invalid characters at the beginning or end of the local part.",
    "Verify that the domain ends with one of the allowed TLDs.",
    "Consider using String methods like startsWith(), endsWith(), or split() for cleaner code."
  ],
  steps: [
    "Split the email by @.",
    "Check the first part for . or - at the start or end.",
    "Make sure the second part ends in .com, .net, or .org.",
    "If all checks pass, return 'Valid'; otherwise, return 'Invalid'."
  ]
};

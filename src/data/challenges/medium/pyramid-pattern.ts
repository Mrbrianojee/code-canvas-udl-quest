
import { Challenge } from '../types';

export const pyramidPatternChallenge: Challenge = {
  id: "pyramid-pattern",
  title: "Pyramid Pattern Printing",
  description: "Printing pyramid patterns is a fun way to practice loops.\n\nThe Problem\nCreate a half pyramid of stars based on the number of rows.",
  difficulty: "medium",
  solutions: {
    javascript: `let N = 5; // Number of rows

for (let i = 1; i <= N; i++) {
  let row = "";
  
  // Add spaces for alignment
  for (let s = 1; s <= N - i; s++) {
    row += " ";
  }
  
  // Add stars for the pyramid
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
} 

// For a centered pyramid with padding:
// let N = parseInt(prompt("Enter number of rows: "));
// for (let i = 1; i <= N; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row.padStart(row.length + N - i));
// }`,
    python: `N = 5  # Number of rows

for i in range(1, N+1):
  row = ""
  
  # Add spaces for alignment
  for s in range(N - i):
    row += " "
    
  # Add stars for the pyramid
  for j in range(i):   
    row += "*"
  
  print(row)

# For a centered pyramid with padding:
# N = int(input("Enter number of rows: "))
# for i in range(1, N+1):
#   row = ""
#   for j in range(1, i+1):   
#     row += "* "
#   print(row.center(2*N))`
  },
  example: `Rows: 5  

Output:
    *
   **
  ***
 ****
*****`,
  categories: ["Loops", "Patterns", "String Manipulation"],
  createdAt: "2023-07-05",
  timeComplexity: "O(n²)",
  explanation: "This challenge tests your ability to use nested loops and string manipulation. The outer loop handles each row of the pyramid, while the inner loops add the appropriate spaces for alignment and stars for the pyramid pattern.",
  hints: [
    "Use nested loops - one for rows and one for columns",
    "Add spaces before stars to create the right alignment",
    "The number of spaces decreases as the row number increases",
    "The number of stars equals the row number",
    "Consider using string methods like padStart() or center() for easier formatting"
  ],
  steps: [
    "Get the number of rows for the pyramid",
    "Create an outer loop to iterate through each row",
    "For each row, create a string that will represent the row pattern",
    "Add the appropriate number of spaces for alignment",
    "Add the appropriate number of stars based on the row number",
    "Print or display each completed row"
  ]
};

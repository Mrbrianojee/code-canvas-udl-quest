
import { Challenge } from '../types';

export const sudokuSolverChallenge: Challenge = {
  id: "sudoku-solver",
  title: "Sudoku Solver",
  description: "Let's talk about how to make a program that can solve Sudoku puzzles. This is a cool way to get better at problem-solving and understanding how to use algorithms.",
  difficulty: "medium",
  solutions: {
    javascript: `function isValid(board, row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) {
      return false;
    }
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) {
      return false;
    }
  }

  // Check 3x3 square
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[startRow + r][startCol + c] === num) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;

            if (solveSudoku(board)) {
              return true;
            }

            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Example usage
const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log("Solving sudoku puzzle...");
solveSudoku(board);
console.log("Solution:");
board.forEach(row => console.log(row.join(" ")));`,
    python: `def is_valid(board, row, col, num):
  # Check row
  for x in range(9):
    if board[row][x] == num:
      return False

  # Check column
  for x in range(9):
    if board[x][col] == num:
      return False
  
  # Check 3x3 square
  startRow = row - row % 3
  startCol = col - col % 3
  for r in range(3):
    for c in range(3):
      if board[startRow + r][startCol + c] == num:
        return False

  return True

def solve(board):
  for row in range(9):
    for col in range(9):
      if board[row][col] == 0:
        for num in range(1, 10):
          if is_valid(board, row, col, num):
            board[row][col] = num
            
            if solve(board):
              return True

            board[row][col] = 0
        return False
  return True

# Example usage
board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

print("Solving sudoku puzzle...")
solve(board)
print("Solution:")
for row in board:
  print(" ".join(map(str, row)))`
  },
  categories: ["Algorithms", "Recursion", "Backtracking", "2D Arrays"],
  createdAt: "2023-08-15",
  example: `Input: A 9x9 Sudoku board with some numbers filled in (0 represents empty cells)
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

Output: The complete Sudoku board with all cells filled correctly
[
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]`,
  explanation: "Solving Sudoku is a classic backtracking problem in computer science. The algorithm tries to fill in digits one by one, and when it gets stuck, it backtracks and tries a different path. This challenge illustrates recursion, constraint satisfaction, and depth-first search concepts.",
  hints: [
    "Start by understanding the rules of Sudoku: each row, column, and 3x3 box must contain all digits 1-9 with no repetition.",
    "Create a helper function to check if a number can be placed in a given cell without breaking the rules.",
    "Use recursion and backtracking to try different values when you encounter an empty cell.",
    "If you reach a point where no valid number can be placed, backtrack to the previous decision and try a different value.",
    "Remember to check for the base case: when the entire board is filled, you've found a solution."
  ],
  steps: [
    "Create a function to check if placing a number in a specific cell is valid (doesn't violate any Sudoku rules)",
    "Start with a board that has some numbers already placed",
    "Use a recursive function that tries to fill an empty cell with a valid number",
    "If a valid number is found, move to the next empty cell",
    "If no valid number can be placed, backtrack and try a different number in the previous cell",
    "Continue this process until the entire board is filled or all possibilities are exhausted"
  ],
  timeComplexity: "O(9^(n*n)) where n is the dimension of the grid (9 for standard Sudoku) - the algorithm may need to try all possible configurations in the worst case."
};

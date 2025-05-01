
import { Challenge } from "../types";

export const wordSearchChallenge: Challenge = {
  id: "word-search",
  title: "Word Search",
  description: "Given a 2D board of characters and a word, find if the word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
  difficulty: "hard",
  solutions: {
    javascript: `function exist(board, word) {
  if (!board.length || !board[0].length) return false;
  
  const rows = board.length;
  const cols = board[0].length;
  
  // DFS to check if current position leads to the word
  function dfs(row, col, index) {
    // Base case: if index equals word length, we found the word
    if (index === word.length) return true;
    
    // Out of bounds or current cell doesn't match
    if (
      row < 0 || 
      col < 0 || 
      row >= rows || 
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }
    
    // Mark as visited by changing the character temporarily
    const temp = board[row][col];
    board[row][col] = '#';
    
    // Check all four adjacent cells
    const found = 
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);
    
    // Restore the cell
    board[row][col] = temp;
    
    return found;
  }
  
  // Start DFS from each cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  
  return false;
}`,
    python: `def exist(board, word):
    if not board or not board[0]:
        return False
    
    rows, cols = len(board), len(board[0])
    
    # DFS to check if current position leads to the word
    def dfs(row, col, index):
        # Base case: if index equals word length, we found the word
        if index == len(word):
            return True
        
        # Out of bounds or current cell doesn't match
        if (row < 0 or col < 0 or 
            row >= rows or col >= cols or 
            board[row][col] != word[index]):
            return False
        
        # Mark as visited by changing the character temporarily
        temp = board[row][col]
        board[row][col] = '#'
        
        # Check all four adjacent cells
        found = (dfs(row + 1, col, index + 1) or
                dfs(row - 1, col, index + 1) or
                dfs(row, col + 1, index + 1) or
                dfs(row, col - 1, index + 1))
        
        # Restore the cell
        board[row][col] = temp
        
        return found
    
    # Start DFS from each cell
    for row in range(rows):
        for col in range(cols):
            if dfs(row, col, 0):
                return True
    
    return False`
  },
  example: `const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

exist(board, "ABCCED");  // returns true
exist(board, "SEE");     // returns true
exist(board, "ABCB");    // returns false`,
  categories: ["DFS", "Backtracking", "Matrix"],
  createdAt: "2023-04-22",
  timeComplexity: "O(N * 4^L) where N is the number of cells and L is the length of the word",
  explanation: "This solution uses a depth-first search (DFS) with backtracking to find the word in the grid.\n\nFor each cell in the grid, we start a DFS to check if it can form the word. In the DFS, we try all four directions (up, down, left, right) and mark visited cells to avoid revisiting them.\n\nIf any of the searches is successful, we've found the word. Otherwise, we return false.",
  hints: [
    "Use a depth-first search (DFS) approach with backtracking to explore all possible paths.",
    "Start the search from each cell in the grid that matches the first character of the word.",
    "During DFS, mark visited cells temporarily (e.g., change them to a special character) to avoid using the same cell twice.",
    "Explore in all four directions (up, down, left, right) from each cell.",
    "Remember to restore the original cell value after exploring all paths from that cell.",
    "The time complexity can be high (exponential), as you might need to explore many paths."
  ]
};

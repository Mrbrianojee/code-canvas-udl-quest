
/**
 * Metadata for the Tic-Tac-Toe challenge
 */

export const metadata = {
  id: "tic-tac-toe",
  title: "Writing a Program to Play a Perfect Game of Tic-Tac-Toe",
  description: "Tic-tac-toe is a simple game we all know. The idea of making a computer program that can play tic-tac-toe without ever losing is an interesting challenge!",
  difficulty: "medium" as const,
  categories: ["Algorithms", "Game Theory", "Artificial Intelligence", "Minimax"],
  createdAt: "2023-11-10",
  example: `Input: The game starts with an empty 3x3 board

Output: The computer makes moves that always result in at least a draw, using a strategy like this:
1. Check if it can win in the next move
2. If not, block the opponent from winning
3. If no blocking needed, take the center if available
4. If center taken, take a corner
5. Otherwise, take any available edge`,
  explanation: "This challenge applies principles of game theory and the minimax algorithm to create a perfect tic-tac-toe player. While the full minimax algorithm isn't required for such a small game, the strategy demonstrated here ensures the computer never loses.",
  timeComplexity: "O(1) for the strategic approach since the board size is fixed at 3x3. A full minimax implementation would be O(b^d) where b is branching factor (available moves) and d is depth (turns left)."
};

export const hints = [
  "Focus on the priority of moves: winning, blocking opponent wins, then optimal position",
  "The center square (position 4) is strategically the strongest position in tic-tac-toe",
  "After the center, the corners (0, 2, 6, 8) are the next strongest positions",
  "A more advanced solution would use the minimax algorithm with or without alpha-beta pruning",
  "Consider adding randomness to make the computer's play less predictable while still optimal"
];

export const steps = [
  "Create a representation of the 3x3 game board",
  "Implement a function to check if someone has won or if the game is a tie",
  "Develop a function to determine the computer's best move using strategic priorities",
  "First check if the computer can win with any move",
  "Then check if the opponent can win and block that move",
  "If neither, choose strategically valuable positions (center, corners, edges)",
  "Implement a game loop to alternate between players until the game ends",
  "Add a visualization of the board after each move"
];

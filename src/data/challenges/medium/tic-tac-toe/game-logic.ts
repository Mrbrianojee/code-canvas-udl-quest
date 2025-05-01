
/**
 * Game logic functions for the Tic-Tac-Toe challenge
 */

/**
 * Checks if there's a winner on the board
 * @param board The current game board
 * @returns The winner ("X" or "O"), "tie" if the game is a tie, or null if the game is still ongoing
 */
export function checkWinner(board: string[]) {
  // Check all possible winning combinations
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] !== " " && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return the winner: "X" or "O"
    }
  }

  // Check for draw
  if (!board.includes(" ")) {
    return "tie";
  }

  // Game is still ongoing
  return null;
}

/**
 * Determines the best move for the computer player
 * @param board The current game board
 * @param player The current player ("X" or "O")
 * @returns The index of the best move
 */
export function getBestMove(board: string[], player: string) {
  // Check if computer can win on next move
  for (let i = 0; i < 9; i++) {
    if (board[i] === " ") {
      // Try this move
      board[i] = player;
      if (checkWinner(board) === player) {
        board[i] = " "; // Undo move
        return i;
      }
      board[i] = " "; // Undo move
    }
  }

  // Check if opponent can win on next move and block
  const opponent = player === "X" ? "O" : "X";
  for (let i = 0; i < 9; i++) {
    if (board[i] === " ") {
      board[i] = opponent;
      if (checkWinner(board) === opponent) {
        board[i] = " ";
        return i;
      }
      board[i] = " ";
    }
  }

  // Take center if available
  if (board[4] === " ") return 4;

  // Take corners if available
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(i => board[i] === " ");
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Take any available edge
  const edges = [1, 3, 5, 7];
  const availableEdges = edges.filter(i => board[i] === " ");
  if (availableEdges.length > 0) {
    return availableEdges[Math.floor(Math.random() * availableEdges.length)];
  }

  // No good move found (shouldn't happen if board has spaces)
  return board.findIndex(cell => cell === " ");
}

/**
 * Prints the board to the console for visualization
 * @param board The game board to print
 */
export function printBoard(board: string[]) {
  console.log(
    board[0] + "|" + board[1] + "|" + board[2] + "\\n" +
    "-+-+-\\n" +
    board[3] + "|" + board[4] + "|" + board[5] + "\\n" +
    "-+-+-\\n" +
    board[6] + "|" + board[7] + "|" + board[8]
  );
}

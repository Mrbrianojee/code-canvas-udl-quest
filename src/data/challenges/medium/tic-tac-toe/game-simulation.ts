
import { checkWinner, getBestMove, printBoard } from './game-logic';

/**
 * Simulates a game of Tic-Tac-Toe between a player and the computer
 * The computer uses strategies to never lose
 */
export function playTicTacToe() {
  // Initialize empty board
  const board = Array(9).fill(" ");
  let currentPlayer = "X"; // X always goes first
  let gameOver = false;

  // Just for demonstration, let's simulate a game
  console.log("Starting a game of Tic-Tac-Toe");
  console.log("Computer is O, Player is X");
  
  // Player makes first move (center)
  board[4] = "X";
  console.log("Player plays center:");
  printBoard(board);
  currentPlayer = "O";
  
  // Game loop
  while (!gameOver) {
    // Computer's turn
    if (currentPlayer === "O") {
      const computerMove = getBestMove(board, "O");
      board[computerMove] = "O";
      console.log("Computer plays position " + computerMove + ":");
      printBoard(board);
      currentPlayer = "X";
    } 
    // Player's turn (simulated for this example)
    else {
      const availableMoves = board.map((cell, index) => cell === " " ? index : -1).filter(index => index !== -1);
      if (availableMoves.length > 0) {
        // For simulation: choose a "good" move for player
        const playerMove = getBestMove(board, "X");
        board[playerMove] = "X";
        console.log("Player plays position " + playerMove + ":");
        printBoard(board);
        currentPlayer = "O";
      }
    }
    
    // Check if game is over
    const winner = checkWinner(board);
    if (winner) {
      gameOver = true;
      if (winner === "tie") {
        console.log("Game ended in a tie!");
      } else {
        console.log("Game over! Winner: " + winner);
      }
    }
  }
}

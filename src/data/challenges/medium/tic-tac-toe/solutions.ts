
export const javascriptSolution = `// Board is represented as an array of 9 elements
// Empty spaces are " ", player is "X", computer is "O"
function checkWinner(board) {
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

function getBestMove(board, player) {
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

function playTicTacToe() {
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

function printBoard(board) {
  console.log(
    board[0] + "|" + board[1] + "|" + board[2] + "\\n" +
    "-+-+-\\n" +
    board[3] + "|" + board[4] + "|" + board[5] + "\\n" +
    "-+-+-\\n" +
    board[6] + "|" + board[7] + "|" + board[8]
  );
}

// Run the game
playTicTacToe();`;

export const pythonSolution = `# Board is represented as a list of 9 elements
# Empty spaces are " ", player is "X", computer is "O"
def check_winner(board):
    # Check all possible winning combinations
    win_patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]              # Diagonals
    ]

    for pattern in win_patterns:
        a, b, c = pattern
        if board[a] != " " and board[a] == board[b] == board[c]:
            return board[a]  # Return the winner: "X" or "O"
    
    # Check for draw
    if " " not in board:
        return "tie"
    
    # Game is still ongoing
    return None

def get_best_move(board, player):
    # Check if computer can win on next move
    for i in range(9):
        if board[i] == " ":
            # Try this move
            board[i] = player
            if check_winner(board) == player:
                board[i] = " "  # Undo move
                return i
            board[i] = " "  # Undo move
    
    # Check if opponent can win on next move and block
    opponent = "O" if player == "X" else "X"
    for i in range(9):
        if board[i] == " ":
            board[i] = opponent
            if check_winner(board) == opponent:
                board[i] = " "
                return i
            board[i] = " "
    
    # Take center if available
    if board[4] == " ":
        return 4
    
    # Take corners if available
    corners = [0, 2, 6, 8]
    available_corners = [i for i in corners if board[i] == " "]
    if available_corners:
        import random
        return random.choice(available_corners)
    
    # Take any available edge
    edges = [1, 3, 5, 7]
    available_edges = [i for i in edges if board[i] == " "]
    if available_edges:
        import random
        return random.choice(available_edges)
    
    # No good move found (shouldn't happen if board has spaces)
    return board.index(" ") if " " in board else -1

def play_tic_tac_toe():
    # Initialize empty board
    board = [" "] * 9
    current_player = "X"  # X always goes first
    game_over = False
    
    # Just for demonstration, let's simulate a game
    print("Starting a game of Tic-Tac-Toe")
    print("Computer is O, Player is X")
    
    # Player makes first move (center)
    board[4] = "X"
    print("Player plays center:")
    print_board(board)
    current_player = "O"
    
    # Game loop
    while not game_over:
        # Computer's turn
        if current_player == "O":
            computer_move = get_best_move(board, "O")
            board[computer_move] = "O"
            print(f"Computer plays position {computer_move}:")
            print_board(board)
            current_player = "X"
        # Player's turn (simulated for this example)
        else:
            available_moves = [i for i, cell in enumerate(board) if cell == " "]
            if available_moves:
                # For simulation: choose a "good" move for player
                player_move = get_best_move(board, "X")
                board[player_move] = "X"
                print(f"Player plays position {player_move}:")
                print_board(board)
                current_player = "O"
        
        # Check if game is over
        winner = check_winner(board)
        if winner:
            game_over = True
            if winner == "tie":
                print("Game ended in a tie!")
            else:
                print(f"Game over! Winner: {winner}")

def print_board(board):
    print(
        f"{board[0]}|{board[1]}|{board[2]}\\n"
        f"-+-+-\\n"
        f"{board[3]}|{board[4]}|{board[5]}\\n"
        f"-+-+-\\n"
        f"{board[6]}|{board[7]}|{board[8]}"
    )

# Run the game
play_tic_tac_toe()`;

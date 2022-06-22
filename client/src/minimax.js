import checkWinner from './winCheck';

const bestMove = (board) => {
  // AI to make its turn
  console.log(board)
  let bestScore = -Infinity;
  let move = null;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is the spot available?
      if (board[i][j] == null) {
        board[i][j] = 'O';
        let score = minimax(board, 0, false);
        board[i][j] = null;
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  return move;
}

let scores = {
  X: -1,
  O: 1,
  tie: 0
};

const minimax = (board, depth, isMaximizing) => {
  let result = checkWinner(board);
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === null) {
          board[i][j] = 'O';
          let score = minimax(board, depth + 1, false);
          board[i][j] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === null) {
          board[i][j] = 'X';
          let score = minimax(board, depth + 1, true);
          board[i][j] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

export default bestMove;
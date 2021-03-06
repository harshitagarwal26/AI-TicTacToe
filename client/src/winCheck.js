function equals3(a, b, c) {
  return a === b && b === c && a !== null;
}

function winCheck(board) {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        openSpots++;
      }
    }
  }

  if (winner === null && openSpots === 0) {
    return 'tie';
  } else {
    return winner;
  }
}



// const winCheck = (board, turn) => {
//   if ((((board[0][0] != null) && (board[0][1] != null) && (board[0][2] != null) && (board[0][0] === board[0][1] &&  board[0][1]=== board[0][2]))) ||
//       ((board[1][0] != null) && (board[1][1] != null) && (board[1][2] != null) && (board[1][0] === board[1][1] && board[1][1] === board[1][2])) ||
//       ((board[2][0] != null) && (board[2][1] != null) && (board[2][2] != null) && (board[2][0] === board[2][1] && board[2][1] === board[2][2])) ||
//       ((board[0][0] != null) && (board[1][0] != null) && (board[2][0] != null) && (board[0][0] === board[1][0] && board[1][0]=== board[2][0])) ||
//       ((board[0][1] != null) && (board[1][1] != null) && (board[2][1] != null) && (board[0][1] === board[1][1] && board[1][1]=== board[2][1])) ||
//       ((board[0][2] != null) && (board[1][2] != null) && (board[2][2] != null) && (board[0][2] === board[1][2] && board[1][2]=== board[2][2])) ||
//       ((board[0][0] != null) && (board[1][1] != null) && (board[2][2] != null) && (board[0][0] === board[1][1] && board[1][1]=== board[2][2])) ||
//       ((board[0][2] != null) && (board[1][1] != null) && (board[2][0] != null) && (board[0][2] === board[1][1] && board[1][1]=== board[2][0])))
//     return turn;
//   return null;
// }

export default winCheck;
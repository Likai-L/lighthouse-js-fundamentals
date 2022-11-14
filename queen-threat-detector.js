
const generateBoard = (whiteQueen, blackQueen) => {
  //generate a 8x8 empty board
  let board = [];
  for (x = 1; x <= 8; x++) {
  let row = [];
  for (i = 1; i<= 8; i++) {
    row.push(0);
  }
  board.push(row);
}
//put the queens on the board according to their index
board[whiteQueen[0]][whiteQueen[1]] = 1;
board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}
const queenThreat = (board) => {
  //get the locations of the queens
  let locations = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (board[x][y] === 1) {
        locations.push([x, y]);
      }
    }
  }
  //calculate the slope of the line between the two queens
  const k = (locations[0][0] - locations[1][0]) / (locations[0][1] - locations[1][1]);
  //+-1: same diagonal; 0: same row; +-infinity: same column;
  if (k === 1 || k === -1 || k === 0 || k === Infinity || k === -Infinity) {
    return true;
  }
  return false;
}
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

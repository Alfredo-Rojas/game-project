let cvs = document.getElementById("tetris");
let ctx = cvs.getContext("2d");
let scoreElement = document.getElementById("score");

let row = 20;
let col = column = 10;
let sq = squareSize = 20;
let vacant = "white";

function drawSquare(x,y,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*sq, y*sq, sq, sq);

  ctx.strokeStyle = "black";
  ctx.strokeRect(x*sq, y*sq, sq, sq);
}

drawSquare(0,0,"red");

let board = [];

for (r = 0; r < row; r++) {
  board[r] = [];
  for (c = 0; c < col; c++) {
    board[r][c] = vacant;
  }
}

function drawBoard() {
  for (r = 0; r < row; r++) {
    for (c = 0; c < col; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

drawBoard();



































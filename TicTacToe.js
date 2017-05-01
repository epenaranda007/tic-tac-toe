var TicTacToe = function() {
  this.board;
  this.start();

};

TicTacToe.prototype.start = function() {
  this.board = [
    [0 ,0 , 0],
    [0 ,0 , 0],
    [0 ,0 , 0]
  ];
  // Prompts
  let player1Move = prompt('Player 1: Enter coordinate of your move.');
  let player2Move = prompt('Player 2: Enter coordinate of your move.');
};

TicTacToe.prototype.move = function(x, y, player) {
  if (player === 1) {
    this.board[x][y] = 1;
  } else {
    this.board[x][y] = 2;
  }
  this.checkWinner(x, y, player);
};

TicTacToe.prototype.checkWinner = function(x, y , player) {

};

TicTacToe.prototype.checkHorizontal = function() {
  const row1 = this.board[x][y] + this.board[x][y + 1] + this.board[x][y + 2];
  const row2 = this.board[x + 1][y] + this.board[x + 1][y + 1] + this.board[x + 1][y + 2];
  const row3 = this.board[x + 2][y] + this.board[x + 2][y + 1] + this.board[x + 2][y + 2];

  if (row1 === 3 || row2 === 3 || row2 === 3) {
    return console.log('Player 1 wins.');
  } else if (row1 === 6 || row2 === 6 || row2 === 6) {
    return console.log('Player 2 wins.');
  }
};

TicTacToe.prototype.checkVertical = function() {
  const col1 = this.board[x][y] + this.board[x + 1][y] + this.board[x + 2][y];
  const col2 = this.board[x][y + 1] + this.board[x + 1][y + 1] + this.board[x + 2][y + 1];
  const col3 = this.board[x][y + 2] + this.board[x + 1][y + 2] + this.board[x + 2][y + 2];

  if (col1 === 3 || col2 === 3 || col2 === 3) {
    return console.log('Player 1 wins.');
  } else if (col1 === 6 || col2 === 6 || col2 === 6) {
    return console.log('Player 2 wins.');
  }
};



var game = new TicTacToe();

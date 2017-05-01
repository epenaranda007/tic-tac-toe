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

TicTacToe.prototype.checkHorizontal = function(x, y, player) {
  
};



var game = new TicTacToe();

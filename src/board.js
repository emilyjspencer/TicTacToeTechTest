function Board() {
  this.player = "X"
  this.squares = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
}; 

Board.prototype.currentPlayer = function() {
  return this.player;
}

Board.prototype.switchTurn = function() {
  if(this.player == "X"){
    this.player = "O";
    return "It's Player O's turn"
  } else if(this.player == "O"){
    this.player = "X";
    return "It's Player X's turn"
  }
};

Board.prototype.flashMessage = function() {
  if(this.player == "X"){
    return "It's Player X's turn";
  } else if(this.player == "O"){
    return "It's Player O's turn";
  };
};

Board.prototype.openingMessage = function() {
  return "Player X gets to start!"
}

Board.prototype.startGame = function() {
  return this.openingMessage()
}

Board.prototype.seeSquares = function() {
  return this.squares;
};
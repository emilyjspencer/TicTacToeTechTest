function Board() {
  this.player = "X"
}; 

Board.prototype.currentPlayer = function() {
  return this.player;
}

Board.prototype.switchTurn = function() {
  if(this.player == "X"){
    this.player = "O";
  } else if(this.player == "O"){
    this.player = "X";
  }
};

Board.prototype.flashMessage = function() {
  if(this.player == "X"){
    return "It's Player X's turn";
  } else if(this.player == "O"){
    return "It's Player O's turn";
  };
};
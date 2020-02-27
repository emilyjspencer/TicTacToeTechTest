function Board() {
  this.player = "X"
}; 

Board.prototype.currentPlayer = function() {
  return this.player;
}

Board.prototype.switchTurn = function() {
  if(this.player == "X"){
    this.player = "O"
  } else if(this.player == "O"){
    this.player = "X"
  }
};
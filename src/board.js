function Board() {
  this.player = "X"

};

Board.prototype.currentPlayer = function() {
  return this.player;
}
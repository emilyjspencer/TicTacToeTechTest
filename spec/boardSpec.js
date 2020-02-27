describe("Board", function() {
  let board;

  beforeEach(function() {
    board = new Board();
  });

  describe('start game', function() {
    it("Player 1 makes the first move", function() {
      expect(board.currentPlayer()).toEqual("X")
    });

    it('players see a message at start of game saying Player X starts first', function(){
      expect(board.openingMessage()).toEqual("Player X gets to start!")
    });
  });

  describe('switch turns', function() {
    it("Player 2 makes the second move", function() {
      board.switchTurn()
      expect(board.currentPlayer()).toEqual("O")
    });

    it("Players see a message telling them whose turn it is", function() {
      board.switchTurn() // now player O's turn
      expect(board.flashMessage()).toEqual("It's Player O's turn")
          
    });
  });

 
});
  //describe('selectSquare', function() {
    //it("Player X can select a square", function(){

    //});


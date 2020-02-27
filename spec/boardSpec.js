describe("Board", function() {
  let board;

  beforeEach(function() {
    board = new Board();
  });

  describe('start game', function() {
    it("Player 1 makes the first move", function() {
      expect(board.currentPlayer()).toEqual("X")
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
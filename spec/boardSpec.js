describe("Board", function() {
  let board;

  beforeEach(function() {
    board = new Board();
  });

  describe('start game', function() {
    it("Player 1 makes the first move", function() {
      //board = new Board;
      expect(board.currentPlayer()).toEqual("X")
    });
  });

  describe('switch turns', function() {
    it("Player 2 makes the second move", function() {
      //board = new Board;
      board.switchTurn()
      expect(board.currentPlayer()).toEqual("O")
    });
  });

});
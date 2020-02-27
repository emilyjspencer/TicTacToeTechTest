describe("Board", function() {
  let board;

  it("Player 1 makes the first move", function() {
    board = new Board;
    expect(board.currentPlayer()).toEqual("X")
  })

});
$(document).ready(function() {
  let board = new Board();

   function showHeader() {
    $("#header").text("Let's play Tic Tac Toe!")
   }

   $("#startgamebutton").on("click", function() {
    startGame();
   });

  function startGame() {
    $("#header").text("Player X gets to start!");
  };

   showHeader();
   updateHeader();

  

  
   
   
});
window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayer = "X";

  let squareVals = ["", "", "", "", "", "", "", "", ""];

  let board = document.getElementById("tic-tac-toe-board");

  board.addEventListener("click", (event) => {
    let targetelement = event.target;
    if (event.target.nodeName === "IMG") {
      targetelement = event.target.parentNode;
    }
    if (targetelement.innerHTML !== "") {
      return;
    } else {
      if (currentPlayer === "O") {
        targetelement.innerHTML = '<img src="./images/player-o.svg" />';
      } else {
        targetelement.innerHTML = '<img src="./images/player-x.svg" />';
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });


  let checkGameState = function( ) {
    let boardState = getBoardState();
    checkRows(boardState);
    checkColls(boardState);
    checkDiag(boardState);

  }

  function getBoardState() {
    let boardVals = [];
    let squares = document.querySelectorAll('.square');
    for ( let i = 0; i < squares.length; i++) {

    }
  }
  function checkRows() {
    for ( let i = 1; i <= 3; i ++) {
      let row = document.querySelectorAll(`.row-${i}`)
      let firstVal = row[0].innerHTML;
    }
  }

});




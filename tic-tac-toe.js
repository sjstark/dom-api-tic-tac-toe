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
        targetelement.innerHTML = '<img src="./images/player-o.svg" class="O"/>';
      } else {
        targetelement.innerHTML = '<img src="./images/player-x.svg" class="X"/>';
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    checkRows();
  });


  let checkGameState = function( ) {
    // let boardState = getBoardState();
    checkRows();
    checkColls();
    checkDiag();

  }

  // function getBoardState() {
  //   let boardVals = [];
  //   let squares = document.querySelectorAll('.square');
  //   for ( let i = 0; i < squares.length; i++) {

  //   }
  // }

  function checkRows() {
    for ( let i = 1; i <= 3; i ++) {
      let row = document.querySelectorAll(`.row-${i}`)
      let firstVal = row[0].innerHTML;
      let secondVal = row[1].innerHTML;
      let thirdVal = row[2].innerHTML;

      if ((firstVal === secondVal) &&
      (firstVal === thirdVal) &&
      (firstVal !== '')) {

        let imageClass = row[0].lastElementChild.getAttribute('class');

        if (imageClass === 'O') {
          console.log('O!!!!')
          return 'O won!'
        }
        if (imageClass === 'X') {
          console.log('X!!!!')
          return 'X won!'
        }
      }
    }
  }

});

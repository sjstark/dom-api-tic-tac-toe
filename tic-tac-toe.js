window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayer = "X";

  let gameStatus;

  let squareVals = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let board = document.getElementById("tic-tac-toe-board");
  let newGame = document.getElementById('new-game-button');

  board.addEventListener("click", (event) => {
    if (gameStatus) {return}

    let targetelement = event.target;
    if (event.target.nodeName === "IMG") {
      targetelement = event.target.parentNode;
    }
    if (targetelement.innerHTML !== "") {
      return;
    } else {
      let divClass = targetelement.getAttribute("class").split(" ");
      let row = Number(divClass[1].slice(-1)) - 1;
      let col = Number(divClass[2].slice(-1)) - 1;

      if (currentPlayer === "O") {
        squareVals[row][col] = "O";
        targetelement.innerHTML =
          '<img src="./images/player-o.svg" class="O"/>';
      } else {
        squareVals[row][col] = "X";
        targetelement.innerHTML =
          '<img src="./images/player-x.svg" class="X"/>';
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

  checkGameState();




  });

  let checkGameState = function () {
    checkRows();
    checkCols();
    checkDiag();
    checkFull();
    if(gameStatus) {
      declareWinner()
    }
  };

  function declareWinner() {
    let header = document.getElementById('game-status');

    header.innerHTML = 'Winner: ' + gameStatus;

    newGame.disabled = false;
  }

  /*
  let squareVals = [
       0    1    2
   0 ["X", "O", "X"], //row 0
   1 ["X", "X", ""],  //row 1
   2 ["X", "O", "O"]   //row 2
  ];
*/

  function checkRows() {
    for (let i = 0; i < squareVals.length; i++) {
      let row = squareVals[i];
      if (row[0] === row[1] && row[0] === row[2] && row[0] !== "") {
        gameStatus = row[0];
        return;
      }
    }
  }

  function checkCols() {
    for (let i = 0; i < squareVals.length; i++) {
      let col = [];
      for (let j = 0; j < squareVals.length; j++) {
        col.push(squareVals[j][i]);
      }
      if (col[0] === col[1] && col[0] === col[2] && col[0] !== "") {
        gameStatus = col[0];
        return;
      }
    }
  }

  function checkDiag() {
    let diag1 = [];
    let diag2 = [];
    for (let i = 0; i < squareVals.length; i++) {
      diag1.push(squareVals[i][i]);
      diag2.push(squareVals[i][2 - i]);
    }
    if (diag1[0] === diag1[1] && diag1[0] === diag1[2] && diag1[0] !== "") {
      gameStatus = diag1[0];
      return;
    }
    if (diag2[0] === diag2[1] && diag2[0] === diag2[2] && diag2[0] !== "") {
      gameStatus = diag2[0];
      return;
    }
  }

  function checkFull() {
    for (let i = 0; i < squareVals.length; i++) {
      for (let j = 0; j < squareVals[i].length; j++) {
        if (squareVals[i][j] === "") {
          return false;
        }
      }
    }
    gameStatus = "Everyone's a winner!";
    return true;
  }

});

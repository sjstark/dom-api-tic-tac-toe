window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayer = "X";

  let gameStatus = "";

  let squareVals = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let board = document.getElementById("tic-tac-toe-board");
  let newGame = document.getElementById("new-game-button");
  let header = document.getElementById("game-status");
  let giveUpBtn = document.getElementById("give-up-button");

  board.addEventListener("click", (event) => {
    console.log('player prior to click:', currentPlayer)
    if (gameStatus) {
      return;
    }

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

    //Save variables to localStorage
    //localStorage.setItem('key', 'item')
    localStorage.setItem("TTT-current-player", currentPlayer);
    localStorage.setItem("TTT-game-status", gameStatus);
    localStorage.setItem("TTT-square-vals", JSON.stringify(squareVals));
    console.log('player after click:', currentPlayer)
  });

  newGame.addEventListener("click", (event) => {
    gameStatus = "";
    header.innerHTML = "";
    squareVals = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    board.innerHTML = ` <div id="square-0" class="square row-1 col-1"></div>
    <div id="square-1" class="square row-1 col-2"></div>
    <div id="square-2" class="square row-1 col-3"></div>
    <div id="square-3" class="square row-2 col-1"></div>
    <div id="square-4" class="square row-2 col-2"></div>
    <div id="square-5" class="square row-2 col-3"></div>
    <div id="square-6" class="square row-3 col-1"></div>
    <div id="square-7" class="square row-3 col-2"></div>
    <div id="square-8" class="square row-3 col-3"></div>`;

    currentPlayer = "X";
    newGame.disabled = true;
    giveUpBtn.disabled = false;
  });

  giveUpBtn.addEventListener("click", (event) => {
    if (currentPlayer === "X") {
      gameStatus = "O";
    } else {
      gameStatus = "X";
    }

    declareWinner();

    giveUpBtn.disabled = true;
  });

  /*******************  HELPER FUNCTIONS BELOW ********************************/

  let checkGameState = function () {
    checkRows();
    checkCols();
    checkDiag();
    checkFull();
    if (gameStatus) {
      declareWinner();
    }
  };

  function declareWinner() {
    header.innerHTML = "Winner: " + gameStatus;

    newGame.disabled = false;
    giveUpBtn.disabled = true;
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

  // Get from localStorage
  try {
    (function () {
      currentPlayer = localStorage.getItem("TTT-current-player");
      gameStatus = localStorage.getItem("TTT-game-status");
      squareVals = JSON.parse(localStorage.getItem("TTT-square-vals"));

      console.log(squareVals)

      let squares = board.children;
      Array.from(squares).forEach(function(ele, i) {
        let divClass = ele.getAttribute("class").split(" ");
        let row = Number(divClass[1].slice(-1)) - 1;
        let col = Number(divClass[2].slice(-1)) - 1;
        let squareVal = squareVals[row][col];

        if (squareVal === '') {
          ele.innerHTML = squareVal
        } else if (squareVal === 'X') {
          ele.innerHTML = '<img src="./images/player-x.svg" class="X"/>';
        } else if (squareVal === 'O') {
          ele.innerHTML = '<img src="./images/player-o.svg" class="O"/>';
        }
      })

      if (gameStatus.length > 0) {
        header.innerHTML = `Winner: ${gameStatus}`;
        newGame.disabled = false;
        giveUpBtn.disabled = true;

      }


    })();
    console.log('current player after try:', currentPlayer)
  }
  catch (error) {
    console.log('No previous save game')
    currentPlayer = "X";

    gameStatus = "";

    squareVals = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    console.log('current player after catch:', currentPlayer)
  }
});


// if (currentPlayer === "O") {
//   squareVals[row][col] = "O";
//   targetelement.innerHTML =
//     '<img src="./images/player-o.svg" class="O"/>';
// } else {
//   squareVals[row][col] = "X";
//   targetelement.innerHTML =
//     '<img src="./images/player-x.svg" class="X"/>';
// }

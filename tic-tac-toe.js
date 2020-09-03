window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayer = "X";

  let gameStatus;

  let squareVals = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let board = document.getElementById("tic-tac-toe-board");

  board.addEventListener("click", (event) => {
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
    // let boardState = getBoardState();
    checkRows();
    checkCols();
    checkDiag();
    checkFull();
    if(!gameStatus) {
      declareWinner()
    }
  };

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
        console.log(gameStatus);
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
        console.log(gameStatus);
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
      console.log(gameStatus);
      return;
    }
    if (diag2[0] === diag2[1] && diag2[0] === diag2[2] && diag2[0] !== "") {
      gameStatus = diag2[0];
      console.log(gameStatus);
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
    gameStatus = "none";
    return true;
  }

  // function getBoardState() {
  //   let boardVals = [];
  //   let squares = document.querySelectorAll('.square');
  //   for ( let i = 0; i < squares.length; i++) {

  //   }
  // }

  // function checkRows() {
  //   for (let i = 1; i <= 3; i++) {
  //     let row = document.querySelectorAll(`.row-${i}`);
  //     let firstVal = row[0].innerHTML;
  //     let secondVal = row[1].innerHTML;
  //     let thirdVal = row[2].innerHTML;

  //     if (firstVal === secondVal && firstVal === thirdVal && firstVal !== "") {
  //       let imageClass = row[0].lastElementChild.getAttribute("class");

  //       if (imageClass === "O") {
  //         console.log("O!!!!");
  //         return "O won!";
  //       }
  //       if (imageClass === "X") {
  //         console.log("X!!!!");
  //         return "X won!";
  //       }
  //     }
  //   }
  // }

  // function checkColls() {
  //   for (let i = 1; i <= 3; i++) {
  //     let col = document.querySelectorAll(`.col-${i}`);
  //     let firstVal = col[0].innerHTML;
  //     let secondVal = col[1].innerHTML;
  //     let thirdVal = col[2].innerHTML;

  //     if (firstVal === secondVal && firstVal === thirdVal && firstVal !== "") {
  //       let imageClass = col[0].lastElementChild.getAttribute("class");

  //       if (imageClass === "O") {
  //         console.log("O!!!!");
  //         return "O won!";
  //       }
  //       if (imageClass === "X") {
  //         console.log("X!!!!");
  //         return "X won!";
  //       }
  //     }
  //   }
  // }

  // function checkDiag() {
  //   let diagval1 = document
  //     .querySelector(".row-1.col-1")
  //     .lastElementChild.getAttribute("class");
  //   console.log(diagval1);

  //   let diagval2 = document
  //     .querySelector(".row-2.col-2")
  //     .lastElementChild.getAttribute("class");
  //   console.log(diagval2);

  //   let diagval3 = document
  //     .querySelector(".row-3.col-3")
  //     .lastElementChild.getAttribute("class");
  //   console.log(diagval3);
  // }
});

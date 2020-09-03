window.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayer = "X";

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
      console.log(row, col);
      if (currentPlayer === "O") {
        targetelement.innerHTML =
          '<img src="./images/player-o.svg" class="O"/>';
      } else {
        targetelement.innerHTML =
          '<img src="./images/player-x.svg" class="X"/>';
      }

      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // checkRows();
    // checkColls();
    // checkDiag();
  });

  let checkGameState = function () {
    // let boardState = getBoardState();
    checkRows();
    checkColls();
    checkDiag();
  };

  // function getBoardState() {
  //   let boardVals = [];
  //   let squares = document.querySelectorAll('.square');
  //   for ( let i = 0; i < squares.length; i++) {

  //   }
  // }

  function checkRows() {
    for (let i = 1; i <= 3; i++) {
      let row = document.querySelectorAll(`.row-${i}`);
      let firstVal = row[0].innerHTML;
      let secondVal = row[1].innerHTML;
      let thirdVal = row[2].innerHTML;

      if (firstVal === secondVal && firstVal === thirdVal && firstVal !== "") {
        let imageClass = row[0].lastElementChild.getAttribute("class");

        if (imageClass === "O") {
          console.log("O!!!!");
          return "O won!";
        }
        if (imageClass === "X") {
          console.log("X!!!!");
          return "X won!";
        }
      }
    }
  }

  function checkColls() {
    for (let i = 1; i <= 3; i++) {
      let col = document.querySelectorAll(`.col-${i}`);
      let firstVal = col[0].innerHTML;
      let secondVal = col[1].innerHTML;
      let thirdVal = col[2].innerHTML;

      if (firstVal === secondVal && firstVal === thirdVal && firstVal !== "") {
        let imageClass = col[0].lastElementChild.getAttribute("class");

        if (imageClass === "O") {
          console.log("O!!!!");
          return "O won!";
        }
        if (imageClass === "X") {
          console.log("X!!!!");
          return "X won!";
        }
      }
    }
  }

  function checkDiag() {
    let diagval1 = document
      .querySelector(".row-1.col-1")
      .lastElementChild.getAttribute("class");
    console.log(diagval1);

    let diagval2 = document
      .querySelector(".row-2.col-2")
      .lastElementChild.getAttribute("class");
    console.log(diagval2);

    let diagval3 = document
      .querySelector(".row-3.col-3")
      .lastElementChild.getAttribute("class");
    console.log(diagval3);
  }
});

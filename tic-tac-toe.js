window.addEventListener('DOMContentLoaded', event =>{

  let currentPlayer = 'X';

  let squareVals = ['', '', '', '', '', '', '', '', '',]

  let board = document.getElementById('tic-tac-toe-board')

  board.addEventListener('click', event => {
    console.log(event.target)
    if (event.target.innerHTML !== '') {
      return
    } else {
    if (currentPlayer === 'O') {
      event.target.innerHTML = '<img src="./images/player-o.svg" />'

    } else {
      event.target.innerHTML = '<img src="./images/player-x.svg" />'
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log(currentPlayer)
  }
})



})

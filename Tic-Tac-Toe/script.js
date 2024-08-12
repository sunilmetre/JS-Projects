// const board = document.querySelector(".board");
// const square = document.querySelectorAll(".square");
// const message = document.querySelector(".message");
// const restartBtn = document.querySelector(".resert-btn")

// const players = ["X", "O"];
// let currentPlayer = players[0];
// message.textContent = `X's Turn`;

// const winningPlayer = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// for (let i = 0; i < square.length; i++) {
//   square[i].addEventListener("click", () => {
//     if (square[i].textContent !== "" || checkWinner(currentPlayer)) {
//       return;
//     }

//     square[i].textContent = currentPlayer;

//     if (checkWinner(currentPlayer)) {
//       message.textContent = `Game Over. ${currentPlayer} wins the game ! please restart`;
//       return;
//     }

//     if (checkTieResults()) {
//       message.textContent = `Game Tied ! please restart`;
//       return;
//     }

//     currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

//     if (currentPlayer == players[0]) {
//       message.textContent = `X's Turn`;
//     } else {
//       message.textContent = `O's Turn`;
//     }
//   });
// }

// function checkWinner(currentPlayer) {
//   for (let i = 0; i < winningPlayer.length; i++) {
//     const [a, b, c] = winningPlayer[i];
//     if (
//       square[a].textContent === currentPlayer &&
//       square[b].textContent === currentPlayer &&
//       square[c].textContent === currentPlayer
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// function checkTieResults() {
//   for (let i = 0; i < square.length; i++) {
//     if (square[i].textContent === "") {
//       return false;
//     }
//   }

//   return true;
// }

// function restartGame() {
//   for (let i = 0; i < square.length; i++) {
//     square[i].textContent = "";
//   }

//   message.textContent = `X's Turn`;
//   currentPlayer = players[0]
// }

// restartBtn.addEventListener('click', () =>{
//   restartGame()
// })



const board = document.querySelector(".board");
const square = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const resertBtn = document.querySelector(".resert-btn");

const players = ["X", "O"];
let currentPlayer = players[0];

const winningPlayer = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("click", () => {
    if (square[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }
    square[i].textContent = currentPlayer;

    if (checkWinner(currentPlayer)) {
      message.textContent = `game over ${currentPlayer} wins the game ! please restart`;
      return;
    }

    if (checkTieResults()) {
      message.textContent = `game tied ! please restart`;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    if (currentPlayer === players[0]) {
      message.textContent = `X's Turn`;
    } else {
      message.textContent = `O's Turn`;
    }
  });
}

function checkWinner(currentPlayer) {
  for (let i = 0; i < winningPlayer.length; i++) {
    const [a, b, c] = winningPlayer[i];
    if (
      square[a].textContent === currentPlayer &&
      square[b].textContent === currentPlayer &&
      square[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function checkTieResults() {
  for (let i = 0; i < square.length; i++) {
    if (square[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function resertGame() {
  for (let i = 0; i < square.length; i++) {
    square[i].textContent = "";
  }

  message.textContent = `X's Turn`;
  currentPlayer = players[0];
}

resertBtn.addEventListener('click', () =>{
  resertGame();
})

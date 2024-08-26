const cells = ["", "", "", "", "", "", "", "", ""];

const turnText = document.querySelector(".turn-text");
const restartDiv = document.querySelector(".restart-div");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const ticContainer = document.querySelector(".tictactoe-container");
let currentPlayer = "cross";
let startGame = true;
let i = 0;

cells.forEach((cell, index) => {
  let cellDiv = document.createElement("div");
  cellDiv.classList.add("squares");
  cellDiv.id = index;
  ticContainer.append(cellDiv);

  cellDiv.addEventListener("click", addMark, { once: true });
});

function addMark(e) {
  if (startGame) {
    const markCell = document.createElement("div");
    markCell.classList.add(currentPlayer);
    e.target.append(markCell);
    currentPlayer = currentPlayer === "cross" ? "circle" : "cross";

    turnText.textContent = currentPlayer === "cross" ? `X's turn` : `O's turn`;

    checkWinner();
  } else {
    return;
  }
}

function checkWinner() {
  const squareArray = document.querySelectorAll(".squares");

  i += 1;

  const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winCombo.forEach((combo) => {
    const circleWins = combo.every((cell) => {
      return squareArray[cell].firstChild?.classList.contains("circle");
    });

    const crossWins = combo.every((cell) => {
      return squareArray[cell].firstChild?.classList.contains("cross");
    });

    if (circleWins) {
      turnText.textContent = "O Wins!";
      restartDiv.style.display = "flex";
      startGame = false;
    }

    if (crossWins) {
      turnText.textContent = "X Wins!";
      restartDiv.style.display = "flex";
      startGame = false;
    }
  });

  if (i >= 9 && startGame) {
    turnText.textContent = "Draw!";
    restartDiv.style.display = "flex";
  }
}

yesBtn.addEventListener("click", () => {
  location.reload();
});

noBtn.addEventListener("click", () => {
  window.close();
});

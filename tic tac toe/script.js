"use strict";

const buttonsEl = document.querySelectorAll(".place");
const resetBtn = document.querySelector(".reset");
const player = document.getElementById("h");
const score = (player) => document.querySelector(`.score${player}`);
let playerOne = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const turn = () =>
  playerOne
    ? (player.textContent = "Player X is in turn")
    : (player.textContent = "Player 0 is in turn");

const disableAll = function () {
  for (let el of buttonsEl) {
    el.disabled = true;
  }
};

const checkIfWin = function (symbol) {
  let win = true;
  winPatterns.forEach(function (pattern) {
    for (let value of pattern) {
      buttonsEl[value].textContent === symbol ? win : (win = false);
    }
    if (win) {
      player.textContent = `${symbol} wins`;
      score(symbol).textContent++;
      disableAll();
    } else {
      win = true;
    }
  });
};

const refreshBoard = function () {
  buttonsEl.forEach(function (el, i) {
    el.textContent = "";
    el.addEventListener("click", function () {
      playerOne ? (el.textContent = "X") : (el.textContent = "O");
      el.disabled = true;
      playerOne = !playerOne;
      turn();
      checkIfWin(buttonsEl[i].textContent);
    });
  });
};

resetBtn.addEventListener("click", function () {
  buttonsEl.forEach(function (el, i) {
    el.textContent = "";
    el.disabled = false;
  });
  playerOne = true;
  turn();
});

turn();
refreshBoard();

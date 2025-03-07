"use strict";

const buttonsEl = (num) => document.getElementById(`place ${num}`);

const field = [" ", " ", " ", "", " ", " ", " ", " ", " "];

let playerOne = true;
const player = document.getElementById("h");

const turn = () =>
  (player.textContent = playerOne
    ? "Player X is in turn"
    : "Player 0 is in turn");

const refreshBoard = function () {
  field.forEach((asd, i) => {
    buttonsEl(i + 1).textContent = asd;
    buttonsEl(i + 1).addEventListener("click", function () {
      field[i] = playerOne ? "x" : "0";
      buttonsEl(i + 1).textContent = playerOne ? "x" : "0";
      playerOne = !playerOne;
      turn();
    });
  });
};
refreshBoard();
turn();

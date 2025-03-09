"use strict";

const p1Num = document.querySelector(".player-roll-1");
const p2Num = document.querySelector(".player-roll-2");

let p1 = (p1Num.textContent = 0);
let p2 = (p2Num.textContent = 0);
let firstPlayerTurn = true;

const randomNumber = function (max, min) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

p1Num.addEventListener("click", function () {
  if (firstPlayerTurn) {
    p1 = p1Num.textContent = randomNumber(100, 1);
    firstPlayerTurn = !firstPlayerTurn;
  } else {
    p1 = p1Num.textContent = randomNumber(p2, 1);
  }
});

p2Num.addEventListener("click", function () {
  if (firstPlayerTurn) {
    p2 = p2Num.textContent = randomNumber(100, 1);
    firstPlayerTurn = !firstPlayerTurn;
  } else {
    p2 = p2Num.textContent = randomNumber(p1, 1);
  }
});
